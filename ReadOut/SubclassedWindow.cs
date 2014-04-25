using System;
using System.Windows.Forms;

namespace ReadOut
{
    /// <summary>
    /// Helper class to catch WM_SIZE messages via subclassing
    /// </summary>
    sealed class SubclassedWindow : NativeWindow
    {

        public bool IsDestroyed { get; private set; }

        /// <summary>
        /// Size of subclassed window has changed
        /// </summary>
        public event EventHandler SizeChanged;

        public event EventHandler GotFocus;

        public event EventHandler Destroyed;

        public delegate void KeyMessageEvent(ref Message m);
        public event KeyMessageEvent KeyMessage;

        /// <summary>
        /// Window procedure
        /// </summary>
        /// <param name="m"></param>
        protected override void WndProc(ref Message m)
        {
            base.WndProc(ref m);
            
            switch ((SafeNativeMethods.WindowsMessages)m.Msg)
            {
                case SafeNativeMethods.WindowsMessages.WM_SIZE:
                    OnSizeChanged();
                    break;
                case SafeNativeMethods.WindowsMessages.WM_SETFOCUS:
                    OnGotFocus();
                    break;
                case SafeNativeMethods.WindowsMessages.WM_DESTROY:
                case SafeNativeMethods.WindowsMessages.WM_CLOSE:
                    IsDestroyed = true;
                    if (Destroyed != null)
                        Destroyed(this, new EventArgs());
                    break;
                //case SafeNativeMethods.WindowsMessages.WM_NCDESTROY: case SafeNativeMethods.WindowsMessages.WM_DESTROY:
                //    break;
                                                    case SafeNativeMethods.WindowsMessages.WM_KEYDOWN:
                case SafeNativeMethods.WindowsMessages.WM_SYSKEYDOWN:
//System.IO.File.AppendAllText("e:\\el.txt", m.WParam + " " + m.LParam + "\r\n\r\n");
                    if (KeyMessage != null)
                        KeyMessage(ref m);
                    break;
            }
        }

        /// <summary>
        /// Raise SizeChanged event
        /// </summary>
        private void OnSizeChanged()
        {
            if (SizeChanged != null)
                SizeChanged(this, null);
        }

        private void OnGotFocus()
        {
            if (GotFocus != null)
                GotFocus(this, null);
        }


    }
}