using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using Outlook = Microsoft.Office.Interop.Outlook;
using Office = Microsoft.Office.Core;
using Ribbins = Microsoft.Office.Tools.Ribbon;
using Tools = Microsoft.Office.Tools;
using System.Windows.Forms;
using LyncModel = Microsoft.Lync.Model;
using Microsoft.Lync.Model.Extensibility;


namespace ReadOut
{
    public partial class ThisAddIn
    {

        private ReaderPane mPane = new ReaderPane();
        private Tools.CustomTaskPane mReaderTaskPane;
        private PanelManager _panelManager;

                #region Props
        /// <summary>
        /// Returns the folder to which ReadOut has recently been applied as a menu item.
        /// </summary>
        public Outlook.MAPIFolder CurrentFolder { get; private set; }

        public dynamic ActiveItem
        {
            get
            {
                                var explorer = Application.ActiveExplorer();
                if (explorer.Selection.Count > 0)
                {
                    return explorer.Selection[1];
            }
                    else
                    throw new ApplicationException("No item is selected.");
        }
            }

        public Outlook.Folder Calendar
        {
            get
            {
                var curFolder = Application.ActiveExplorer().CurrentFolder as Outlook.Folder;
                while (curFolder.Parent is Outlook.Folder) curFolder = curFolder.Parent;
                for (int i = 1; i <= curFolder.Folders.Count; i++)
                    if (curFolder.Folders[i].Name.Equals("calendar", StringComparison.OrdinalIgnoreCase))
                        return (Outlook.Folder)curFolder.Folders[i];
                return null;
                            }
        }
                #endregion

        #region Events
        private void ThisAddIn_Startup(object sender, System.EventArgs e)
        {
            // TO INITIALIZE LOGGER.
            var LOGGER = Util.AppLogger;

            //try
            //{
//this.Application.ActiveExplorer().ShowPane(Outlook.OlPane.olPreview, true);
                //mReaderTaskPane = this.CustomTaskPanes.Add(mPane, "ReadOut", this.Application.ActiveWindow());
                //mReaderTaskPane.DockPosition = Office.MsoCTPDockPosition.msoCTPDockPositionRight;
                
                //mReaderTaskPane.Visible = true;
            //                }
            //catch (Exception ex)
            //{
            //    ExceptionHandler.Catch(ex);
            //}
            Application.ItemContextMenuDisplay += (Office.CommandBar c, Outlook.Selection s) => DisplayMenuOption(c, Application.ActiveExplorer().CurrentFolder);
Application.FolderContextMenuDisplay += (Office.CommandBar c, Outlook.MAPIFolder f) => DisplayMenuOption(c, f);
_panelManager = new PanelManager();
_panelManager.KeyDown += new KeyEventHandler(panelManager_KeyDown);
            }

                private void ThisAddIn_Shutdown(object sender, System.EventArgs e)
        {
                        _panelManager.Dispose();
                                                    }

void btnReadOut_Click(Office.CommandBarButton ctrl, ref bool CancelDefault)
        {
            ShowReader();
        }

void btnInitReadOut_Click(Office.CommandBarButton ctrl, ref bool CancelDefault)
{
    _panelManager.Dispose();
    _panelManager = new PanelManager();
    _panelManager.KeyDown += new KeyEventHandler(panelManager_KeyDown);
}

        void panelManager_KeyDown(object sender, KeyEventArgs e)
{
    try
    {
        switch (e.KeyCode)
        {
            case Keys.R:
                CurrentFolder = Application.ActiveExplorer().CurrentFolder;
                ShowReader();
                break;
            case Keys.N:
                ShowContactCard(ActiveItem.Sender);
                break;
            case Keys.I:
                var item = ActiveItem;
                StartChatWithUser(Util.GetSmtpAddress(item.Sender), item.Subject);
                break;
            case Keys.K:
                var cal = Calendar;
                var rs = cal.Items;
                MessageBox.Show(cal.Folders.Count.ToString());
                                                for (int i = 150; i <= 161; i++)
                {
                    MessageBox.Show((rs[i] as Outlook.AppointmentItem).Subject);
                }
                //Microsoft.Lync.Controls.ContactCard card = new Microsoft.Lync.Controls.ContactCard();
                //card.Source = Util.GetSmtpAddress(ActiveItem.Sender);
                //new Form1(ActiveItem.Sender).Show();
                                //MessageBox.Show(card.DisplayName);
                break;
        }
    }
    catch (Exception ex)
    {
        ExceptionHandler.Catch(ex);
    }
}
#endregion

        #region Operations
        private void ShowReader()
{
    try
    {
        Reader.Open(new MailNavigator(Application, CurrentFolder));
    }
    catch (Exception ex)
    {
        ExceptionHandler.Catch(ex, start: "Error forking ReadOut window");
            }
}

        public void StartChatWithUser(string uri, string title = null) 
{ 
    try 
    { 
        var lyncAutomation = LyncModel.LyncClient.GetAutomation(); 
 var inviteeList = new string[] { uri}; 
        var modalitySettings = new Dictionary<AutomationModalitySettings, object>(); 
        modalitySettings.Add(AutomationModalitySettings.SendFirstInstantMessageImmediately, false); 
        if (!string.IsNullOrEmpty(title)) 
        { 
            modalitySettings.Add(AutomationModalitySettings.Subject, title); 
        } 
 
        lyncAutomation.BeginStartConversation( 
            AutomationModalities.InstantMessage, 
            inviteeList, 
            modalitySettings, 
            (ar) => { if (ar.IsCompleted) { ((Automation)ar.AsyncState).EndStartConversation(ar); }}, 
            lyncAutomation); 
    } 
    catch( Exception ex)
    {
        ExceptionHandler.Catch(ex);
    } 
        }

public void ShowContactCard(Outlook.AddressEntry entry)
{
    try
    {
        Office.ContactCard card = Application.Session.CreateContactCard(entry);
            card.Show(Office.MsoContactCardStyle.msoContactCardFull, 100, 100, 100, 100, 100);
            }
    catch (Exception ex)
    {
        ExceptionHandler.Catch(ex);
    }
}

        private void DisplayMenuOption(Office.CommandBar commandBar, Outlook.MAPIFolder folder)
        {
            try
            {
                var READOUT_BUTTON_ID = "READOUT_BUTTON_ID";
                if (commandBar.FindControl(Tag: READOUT_BUTTON_ID) != null)
                {
#if DEBUG
                    Util.AppLogger.WriteLine("Already exists");
#endif
                    return;
                }

                //var btnInitReadOut = (Office.CommandBarButton)commandBar.Controls.Add(Type: Office.MsoControlType.msoControlButton);
                //btnInitReadOut.Tag = READOUT_BUTTON_ID;
                //                btnInitReadOut.Caption = "Reinitiali&ze ReadOut Key Hook";
                //btnInitReadOut.Click += new Microsoft.Office.Core._CommandBarButtonEvents_ClickEventHandler(btnInitReadOut_Click);
                var btnReadOut = (Office.CommandBarButton)commandBar.Controls.Add(Office.MsoControlType.msoControlButton, missing, missing, missing, missing);
                btnReadOut.Tag = READOUT_BUTTON_ID;
                btnReadOut.Caption = "Read&Out";
                btnReadOut.Click += new Microsoft.Office.Core._CommandBarButtonEvents_ClickEventHandler(btnReadOut_Click);
                CurrentFolder = folder;
                                                if (folder.Items.Count <= 0)
                    btnReadOut.Enabled = false;

#if DEBUG
                                                var btnDump = (Office.CommandBarButton)commandBar.Controls.Add(Type: Office.MsoControlType.msoControlButton);
                                                btnDump.Caption = "Dump Key Hook";
                                                btnDump.Click += new Microsoft.Office.Core._CommandBarButtonEvents_ClickEventHandler(
                                                    (Office.CommandBarButton Ctrl, ref bool CancelDefault) => _panelManager.WriteState()
                );
                #endif
}
            catch (Exception ex)
            {
                ExceptionHandler.Catch(ex);
            }
        }

                /// <summary>
        /// Test method
        /// </summary>
        /// <param name="ctrl"></param>
        private void Explore(Office.CommandBarControl ctrl)
        {
            MessageBox.Show(ctrl.Caption);
            if (ctrl is Office.CommandBarPopup)
            {
                foreach (Office.CommandBarControl mi in (ctrl as Office.CommandBarPopup).Controls)
                    Explore(mi);
            }
        }
        #endregion

        #region VSTO generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InternalStartup()
        {
            this.Startup += new System.EventHandler(ThisAddIn_Startup);
            this.Shutdown += new System.EventHandler(ThisAddIn_Shutdown);
                    }
        
        #endregion
    }
}
