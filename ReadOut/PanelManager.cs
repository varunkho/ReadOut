using System;
using System.Drawing;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using System.Threading;


namespace ReadOut
{
    public class PanelManager : Form, IDisposable
    {

        private object _critical = new object();
        private System.Timers.Timer _timer = new System.Timers.Timer();
        private System.Timers.Timer _recoverTimer = new System.Timers.Timer();
        private List<SubclassedWindow> _subclassSuperGrids;
        private const int SUBCLASSING_TASK_INTERVAL = 200;
        private const string OUTLOOK_PROCESS_NAME = "outlook",
SIBLING_WINDOW_CLASS = "rctrl_renwnd32";

        private static IntPtr FindOutlookWindow()
        {
            System.Diagnostics.Process[] processes = System.Diagnostics.Process.GetProcessesByName(OUTLOOK_PROCESS_NAME);

            if (processes == null || processes.Length == 0)
                return IntPtr.Zero;

            return processes[0].MainWindowHandle;
        }

        #region Props
        public IntPtr ParentWindow { get; private set; }

        public IntPtr SiblingWindow { get; private set; }

        protected DateTime TaskStarted { get; set; }

        private Func<bool> _timerTask;
        protected Func<bool> TimerTask
        {
            get
            {
                return _timerTask;
            }
            set
            {
                _timerTask = value;
                TaskStarted = DateTime.Now;
            }
        }
        #endregion

        public PanelManager()
        {
            _timer.Elapsed += new System.Timers.ElapsedEventHandler(timer_Elapsed);
            _timer.Interval = SUBCLASSING_TASK_INTERVAL;
            _timer.AutoReset = false;

            Init();

            _recoverTimer.Elapsed += new System.Timers.ElapsedEventHandler(_recoverTimer_Elapsed);
            _recoverTimer.Interval = SUBCLASSING_TASK_INTERVAL * 5;
            _recoverTimer.AutoReset = false;
            _recoverTimer.Start();
        }

        #region Events
        void _recoverTimer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
        {
                        ExceptionHandler.TryExecute(() =>
{
    lock (_critical)
    {
        //Util.AppLogger.WriteLine("in recover");
        if (_timer.Enabled)
            return;

        var outWindow = FindOutlookWindow();
        if (outWindow != ParentWindow && outWindow != IntPtr.Zero && SafeNativeMethods.ClassName(outWindow).Equals("rctrl_renwnd32"))
        {
            // It seems another session is opened; reinitialize. as we work on only one session at a time.
#if DEBUG
            Util.AppLogger.WriteLine("recover: new = {0}, old = {1}", outWindow, ParentWindow);
#endif
            Init();
            return;
        }

        // get hooked windows handles and see whether we've missed destroy event.                        
        var hnds = SafeNativeMethods.FindDescendantWindows(this.ParentWindow, "SUPERGRID", true);
        if (_subclassSuperGrids == null || _subclassSuperGrids.Count != hnds.Length || _subclassSuperGrids.Select(g => g.Handle).Except(hnds).Any())
        {
#if DEBUG
            Util.AppLogger.WriteLine("recover: subclassing invalidated");
#endif
            // something has changed so invalidate current hooks and rehook.
            Init();
        }
    }
}, suppressError:
#if DEBUG
 false
#else
 true
#endif
, finalDeligate: () =>
{
    _recoverTimer.Start();
}
);
            //Util.AppLogger.WriteLine("out recover");
        }

        void subclassSuperGrid_KeyMessage(ref Message m)
        {
            this.ProcessKeyMessage(ref m);
        }

        void timer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
        {
                        lock (_critical)
            {
                //Util.AppLogger.WriteLine("in timer");
                if (!TimerTask())
                {
                    _timer.Start();
                }
            }
            //Util.AppLogger.WriteLine("out timer");
        }
        #endregion

        #region Operations
        private void Init()
        {
#if DEBUG
            Util.AppLogger.WriteLine("init");
#endif
            lock (_critical)
            {
                //Util.AppLogger.WriteLine("in init");
                ReleaseSubclass();
                TimerTask = SubclassSupergrid;
                _timer.Start();
            }
            //Util.AppLogger.WriteLine("out init");
                    }

        private bool SubclassSupergrid()
        {
            try
            {
                                ParentWindow = FindOutlookWindow();
                if (ParentWindow == IntPtr.Zero)
                {
                    return false;
                }

                var hnds = SafeNativeMethods.FindDescendantWindows(this.ParentWindow, "SUPERGRID", true);
                if (hnds.Length == 0)
                {
                    return false; // The task is not yet over, we'll try finding the windows at next attempt.
                }

                _subclassSuperGrids = new List<SubclassedWindow>();
                foreach (var hnd in hnds)
                {
                    var subclass = new SubclassedWindow();
                    subclass.KeyMessage += new SubclassedWindow.KeyMessageEvent(subclassSuperGrid_KeyMessage);
                    subclass.Destroyed += (object sender, EventArgs e) => Init();
                    subclass.AssignHandle(hnd);
                    _subclassSuperGrids.Add(subclass);
                }
                            }
            catch (Exception ex)
            {
                ExceptionHandler.Catch(ex, start: "Oops, error occured on initialization for key hooking");
            }
            return true;
        }

        public new void Dispose()
        {
            try
            {
                _timer.Enabled = false;
                _timer.Dispose();
                _recoverTimer.Enabled = false;
                _recoverTimer.Dispose();
                ReleaseSubclass();
            }
            catch (Exception ex)
            {
                Util.AppLogger.Write(ex);
            }
            base.Dispose();
        }

private void ReleaseSubclass()
        {
            //Dispose the subclassing wrapper (if it was initialised)
            if (_subclassSuperGrids != null)
                _subclassSuperGrids.ForEach(w => w.ReleaseHandle());
            _subclassSuperGrids = null;
        }

public void WriteState()
{
    Util.AppLogger.WriteLine("out = {0}", ParentWindow);
    if (_subclassSuperGrids != null)
        Util.AppLogger.WriteLine("{0} {1}",_subclassSuperGrids.Count,  string.Join(", ", _subclassSuperGrids.Select(s => s.Handle.ToString())));
    var hnds = SafeNativeMethods.FindDescendantWindows(this.ParentWindow, "SUPERGRID", true);
    Util.AppLogger.WriteLine("{0} {1}",hnds.Length,  string.Join(", ", hnds.Select(s => s.ToString())));
    Util.AppLogger.WriteLine("recover = {0}", _recoverTimer.Enabled);
    Util.AppLogger.WriteLine("time = {0}", _timer.Enabled);
}
        #endregion

    }
}