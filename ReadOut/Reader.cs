using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Office.Interop.Outlook;

namespace ReadOut
{
    public partial class Reader : Form
    {

        private const string TOGGLING_ELEMENT_CLASS = "toggleVisibility";

        enum UserAction
        {
            Open,
            Reply,
            ReplyAll,
            Forward,

            DeleteCurrent,
            DeleteConversation,

Next,
            Previous,
            Reload,

ConversationViewChanged,

Close,

            Readme,
            About,
            Logs
                }

        #region Static
        private static List<Reader> sInstances = new List<Reader>();
                public static void Open(MailNavigator navigator)
                {
                    if (!ReadOut.Properties.Settings.Default.SeparateWindow)
                    {
                        CloseAll();
}

                    var readerWindow = new Reader(navigator);
                    readerWindow.Show();
                    sInstances.Add(readerWindow);
                }

                private static void CloseAll(Reader exclude = null)
                {
                    try
                    {
                    var tmp = new List<Reader>(sInstances);
                    sInstances.ForEach(f => 
                        {
                            if (exclude == null || exclude != f)
                            {
                                f.Close();
                                sInstances.Remove(f);
                            }
                        }
                            );
                        }
                        catch (System.Exception ex) { MessageBox.Show(ex.Message); }
                }
        #endregion

                #region Fields/Constants
                bool MIsLoading = true;
                MailNavigator mNavigator;
                string mRenderState;
                #endregion

                #region props
                public bool InConversationView
                {
                    get
                    {
                        return (MIConversationThis.Checked || MIConversationAll.Checked);
                    }
                }
                #endregion

                private Reader(MailNavigator navigator)
        {
            InitializeComponent();
            mNavigator = navigator;

            webBrowser1.PreviewKeyDown += new PreviewKeyDownEventHandler(webBrowser1_PreviewKeyDown);
webBrowser1.DocumentCompleted += new WebBrowserDocumentCompletedEventHandler(webBrowser1_DocumentCompleted);
            this.FormClosing += new FormClosingEventHandler(Reader_FormClosing);
            mNavigator.ItemChanged += new EventHandler(mNavigator_ItemChanged);
            MIConversationAll.CheckedChanged += new EventHandler(MIConversationAll_CheckedChanged);
            MIConversationThis.CheckedChanged += (s, e) => ExecuteAction(UserAction.ConversationViewChanged);
            webBrowser1.GotFocus += new EventHandler(webBrowser1_GotFocus);
            }

                                #region Events
#region Menu
        private void CMAttachment_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            try
            {
            dynamic obj = CMAttachment.Tag;
            int index = (int)obj.Index;
            Attachment attachment;
if (InConversationView)
            {
                using (var item = new OutlookItem(mNavigator.OutlookApp.Session.GetItemFromID(obj.ID)))
                {
                    attachment = item.Attachments[index];
                }
            }
            else
            {
                attachment = mNavigator.Current.Attachments[index];
            }
            switch (e.ClickedItem.Name)
                {
                    case "CMAOpen":
                        var tempFilePath = GetTempFilePath(attachment.FileName);
                        attachment.SaveAsFile(tempFilePath);
                        System.Diagnostics.Process.Start(tempFilePath);
                        break;
                    case "CMASave":
saveFileDialog1.FileName = attachment.FileName;
                        if (saveFileDialog1.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                            attachment.SaveAsFile(saveFileDialog1.FileName);
                        break;
                    case "CMASaveAndOpen":
saveFileDialog1.FileName = attachment.FileName;
if (saveFileDialog1.ShowDialog() == System.Windows.Forms.DialogResult.OK)
{
    attachment.SaveAsFile(saveFileDialog1.FileName);
    System.Diagnostics.Process.Start(saveFileDialog1.FileName);
}
                        break;
}
                System.Runtime.InteropServices.Marshal.ReleaseComObject(attachment);
            }
            catch (System.Exception ex)
            {
                ExceptionHandler.Catch(ex);
            }
        }

        private void contextMenuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            UserAction act;
            if (Enum.TryParse(e.ClickedItem.Name.ToString().Substring(2), true, out act)
                || Enum.TryParse(e.ClickedItem.Name.ToString().Substring(3), true, out act))
            ExecuteAction(act);
                    }


        private void MIConversationView_DropDownOpening(object sender, EventArgs e)
        {
            if (MIConversationAll.Checked)
            {
                MIConversationThis.Checked = false;
                MIConversationThis.Enabled = false;
            }
            else
            {
                MIConversationThis.Enabled = true;
            }
        }

        private void MIConversationAll_CheckedChanged(object sender, EventArgs e)
        {
            if (!MIsLoading)
            {
ReadOut.Properties.Settings.Default.ConversationAll = MIConversationAll.Checked;
                ReadOut.Properties.Settings.Default.Save();
                ExecuteAction(UserAction.ConversationViewChanged);
            }
            MIConversationView_DropDownOpening(null, null);
        }

        private void MIConversationReverse_CheckedChanged(object sender, EventArgs e)
        {
            if (!MIsLoading)
            {
                ReadOut.Properties.Settings.Default.ConversationReverse = MIConversationReverse.Checked;
                ReadOut.Properties.Settings.Default.Save();
                ExecuteAction(UserAction.ConversationViewChanged);
            }
        }

        private void MIExtendedHeader_CheckedChanged(object sender, EventArgs e)
        {
            if (!MIsLoading)
            {
                ReadOut.Properties.Settings.Default.ExtendedHeader = MIExtendedHeader.Checked;
                ReadOut.Properties.Settings.Default.Save();
                ExecuteAction(UserAction.Reload);
            }
        }

        private void MIConversationJump_CheckedChanged(object sender, EventArgs e)
        {
            if (!MIsLoading)
            {
                ReadOut.Properties.Settings.Default.SkipRelatedItems = MIConversationJump.Checked;
                ReadOut.Properties.Settings.Default.Save();
            }
        }

        private void MISSeparateWindow_CheckedChanged(object sender, EventArgs e)
        {
            if (!MIsLoading)
            {
                ReadOut.Properties.Settings.Default.SeparateWindow = MISettings.Checked;
                ReadOut.Properties.Settings.Default.Save();
                if (!MISSeparateWindow.Checked)
                    CloseAll(this);
            }
        }

        private void contextMenuStrip1_Opening(object sender, CancelEventArgs e)
        {
            MIReply.Enabled = false;
            MIReplyAll.Enabled = false;
            MIForward.Enabled = false;
            foreach (Microsoft.Office.Interop.Outlook.Action act in mNavigator.Current.Actions)
            {
                if (act.Enabled)
                {
                    switch (act.Name.ToLower())
                    {
                        case "reply":
                            MIReply.Enabled = true;
                            break;
                        case "reply to all":
                            MIReplyAll.Enabled = true;
                            break;
                        case "forward":
                            MIForward.Enabled = true;
                            break;
                    }
                }
                            }
        }
        #endregion

        #region Form
        private void Reader_Load(object sender, EventArgs e)
        {
                        this.Text = "ReadOut - " + mNavigator.Folder.Name;
                        MIConversationAll.Checked = ReadOut.Properties.Settings.Default.ConversationAll;
                        MIConversationReverse.Checked = ReadOut.Properties.Settings.Default.ConversationReverse;
                        MIExtendedHeader.Checked = ReadOut.Properties.Settings.Default.ExtendedHeader;
                        MIConversationJump.Checked = ReadOut.Properties.Settings.Default.SkipRelatedItems;
                        MISSeparateWindow.Checked = ReadOut.Properties.Settings.Default.SeparateWindow;
            ExecuteAction(UserAction.Reload);
                        MIsLoading = false;
                    }

void Reader_FormClosing(object sender, FormClosingEventArgs e)
{
    webBrowser1.Dispose();
    mNavigator.Dispose();
    }
        #endregion

#region Keydown
private void Reader_KeyDown(object sender, KeyEventArgs e)
{
    switch (e.KeyCode)
    {
        case Keys.W:
                        if (e.Alt)
            {
                                webBrowser1.Focus();
            }
            break;
        case Keys.Escape:
ExecuteAction(UserAction.Close);
            break;
}
}

void webBrowser1_PreviewKeyDown(object sender, PreviewKeyDownEventArgs e)
{
    Reader_KeyDown(sender, new KeyEventArgs(e.KeyData));
}
#endregion

#region DOM
void webBrowser1_GotFocus(object sender, EventArgs e)
{
    if (webBrowser1.Document != null)
        webBrowser1.Document.Focus();
}

void webBrowser1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
    var attachmentContainers = webBrowser1.Document.GetElementsByID("atchContainer");
        if (attachmentContainers != null)
    {
        foreach (var container in attachmentContainers)
        {
                        foreach (HtmlElement ele in container.GetElementsByTagName("a"))
                ele.Click += new HtmlElementEventHandler(attachment_Click);
        }
    }
            }

void Contact_Click(object sender, HtmlElementEventArgs e)
{
    try
    {
        var item = ((MailItem)mNavigator.Current.InnerObject);
                }
    catch (System.Exception ex)
    {
        ExceptionHandler.Catch(ex);
    }
}

        void attachment_Click(object sender, HtmlElementEventArgs e)
        {
                        var index = int.Parse(((HtmlElement)sender).Id.Substring(4));
            var itemId = ((HtmlElement)sender).Parent.Parent.GetAttribute("itemId");
                                    CMAttachment.Tag = new {Index = index, ID = itemId};
            CMAttachment.Show(webBrowser1, new Point(20, 40), ToolStripDropDownDirection.BelowRight);
            }
#endregion

                void mNavigator_ItemChanged(object sender, EventArgs e)
        {
                        MIConversationThis.Checked = false;
        }
        #endregion

        #region Operations
        private void ExecuteAction(UserAction act)
        {
            try
            {
                switch (act)
                {
                    case UserAction.Open:
                        mNavigator.Current.Display();
                        break;
                    case UserAction.Reply:
                        ((dynamic)mNavigator.Current.InnerObject).Reply().Display();
                        break;
                    case UserAction.ReplyAll:
                        ((dynamic)mNavigator.Current.InnerObject).ReplyAll().Display();
                        break;
                    case UserAction.Forward:
                        ((dynamic)mNavigator.Current.InnerObject).Forward().Display();
                        break;
                    case UserAction.DeleteCurrent:
                        mNavigator.Delete();
                        RenderCurrentItem();
                        break;
                    case UserAction.DeleteConversation:
                        mNavigator.DeleteConversation();
                        RenderCurrentItem();
                        break;
                    case UserAction.Next:
                                                if ((InConversationView && MIConversationJump.Checked ? mNavigator.NextConversationItem() : mNavigator.Next()) != null)
                        {
                            RenderCurrentItem();
                        }
                        else
                            System.Media.SystemSounds.Beep.Play();
                                                break;
                                            case  UserAction.Previous:
                                                if ((InConversationView && MIConversationJump.Checked ? mNavigator.PreviousConversationItem() : mNavigator.Previous()) != null)
                            {
                                RenderCurrentItem();
                            }
                        else
                            System.Media.SystemSounds.Beep.Play();
                        break;
                                            case UserAction.Reload:
                        RenderCurrentItem(true);
                        break;

                    case UserAction.ConversationViewChanged:
                        RenderCurrentItem();
                        break;

                    case UserAction.Close:
                        this.Close();
                        break;

                    case UserAction.Readme:
                        System.Diagnostics.Process.Start(Logger.AppRoot + @"\Readme.docx");
                        break;
                    case UserAction.About:
                        new About().ShowDialog();
                        break;
                    case UserAction.Logs:
                                                System.Diagnostics.Process.Start(Util.AppLogger.LogDirectory);
                        break;
                    }
            }
            catch (System.Exception ex)
            {
                ExceptionHandler.Catch(ex);
                            }
                                    }

        private void RenderCurrentItem(bool force = false)
        {
                        var current = mNavigator.Current;
                                    if (current == null)
                        {
                            ExecuteAction(UserAction.Close);
                            return;
}


            // if already rendered then stop immediately (except user forcing reload).
                                    string newState = InConversationView + current.EntryID + MIConversationReverse.Checked;

                                    if (!force && newState == mRenderState)
                                        return;
else
mRenderState = newState;

string header, body, html;
                                    if (InConversationView)
                                    {
                                        var c = mNavigator.GetRelatedItems(MIConversationReverse.Checked);
                                        StringBuilder sb = new StringBuilder();
                                                                                                                        sb.Append("<h1>");
                                                                                   AppendTitle(c.FirstRootItem.InnerObject, sb, false);
sb.Append("</h1>");
                                                                                                                        foreach (var item in c.Items)
                                        {
                                                                                                                                                                try
                                                                                    {
                                                                                        sb.Append(GetItemHtmlForConversation(item));                                                                                                                                            
}
                                                                                    catch (Microsoft.CSharp.RuntimeBinder.RuntimeBinderException ex)
                                                                                    {
                                                                                        // Known exception  - property 'SenderName' is not available (EG. for AppointmentItem type etc).
                                                                                        if (!ex.Message.Contains("SenderName"))
                                                                                            ExceptionHandler.Catch(ex);
                                                                                    }
                                                                                                                                                                        }
                                                                                                                        sb.AppendFormat("<p>{0} item(s) were rendered.</p>", c.Items.Count);
                                        html = sb.ToString();
                                        }
            else
                                    {
                                        GetItemContent(current, out header, out body);
                                                                                html = string.Format("{0}<br/><br/>{1}", header, body);
                                        }

                                    webBrowser1.DocumentText = html + GetRequiredJS();
                                                            }

        private string GetItemHtmlForConversation(OutlookItem item)
        {
            string header, body;
            GetItemContent(item, out header, out body, new string[] { "title", "by" });
            string wrapStart = item.EntryID != mNavigator.Current.EntryID
                ? "<div>" : "<div role='region' aria-labelledby='mCurrent'><span id='mCurrent' style='display:none;'>Currently selected mail</span>";
            return string.Format("{4}<h2 onclick=\"{0}\">{1}</h2><br/>{2}</div><br/><br/>{3}", GetTogglingJS(), ((dynamic) item.InnerObject).SenderName, header, body, wrapStart);
        }

        private void GetItemContent(OutlookItem item, out string header, out string body, string[] exclusions = null)
        {
                                    exclusions = exclusions ?? new string[0];
            switch (item.Class)
            {
                case OlObjectClass.olMail:
                    GetMailHeaders((MailItem)item.InnerObject, out header, exclusions);
                    body = ((MailItem)item.InnerObject).HTMLBody;
                    break;
                case OlObjectClass.olMeetingRequest:
                case OlObjectClass.olMeetingCancellation:
                case OlObjectClass.olMeetingResponseNegative:
                case OlObjectClass.olMeetingResponsePositive:
                case OlObjectClass.olMeetingResponseTentative:
                case OlObjectClass.olMeetingForwardNotification:
                    GetMeetingHeaders((MeetingItem)item.InnerObject, out header, exclusions);
                    body = item.Body;
                    break;
                default:
                    GetOtherHeaders(item, out header, exclusions);
                    body = item.Body;
                    break;
            }
}

        private void GetMailHeaders(MailItem item, out string smallHead, string[] exclusions)
        {
            StringBuilder header = new StringBuilder();
if (!exclusions.Contains("title", StringComparer.OrdinalIgnoreCase))
                {
                    header.Append("<p>");
                    AppendTitle(item, header, true);
                }

AppendPplAndTime(item, header, exclusions);
            AddAttachments(header, item.Attachments);
            if (!exclusions.Contains("title", StringComparer.OrdinalIgnoreCase))            
            header.Append("</p>");
            smallHead = header.ToString();
        }

        private void GetMeetingHeaders(MeetingItem item, out string smallHead, string[] exclusions)
        {
            StringBuilder header = new StringBuilder();
if (!exclusions.Contains("title", StringComparer.OrdinalIgnoreCase))
            {
                header.Append("<p>");
                AppendTitle(item, header, true);
            }

        AppendPplAndTime(item, header, exclusions);

        var appointment = item.GetAssociatedAppointment(false);
        if (appointment != null)
        {
            string when = appointment.Start.Date.Equals(appointment.End.Date)
     ? string.Format("from {0:h:mm tt} to {1:h:mm tt}, {2:dddd, MMMM d yyyy}", appointment.Start, appointment.End, appointment.Start)
     : string.Format("from {0:h:mm tt dddd, MMMM d yyyy} to {1:h:mm tt dddd, MMMM d yyyy}", appointment.Start, appointment.End);
            header.AppendFormat("<br/>{0}", when);
            if (!string.IsNullOrWhiteSpace(appointment.Location))
                header.AppendFormat("<br/>at {0}", appointment.Location);
        }

            AddAttachments(header, item.Attachments);
            if (!exclusions.Contains("title", StringComparer.OrdinalIgnoreCase))            
            header.Append("</p>");
            smallHead = header.ToString();
        }

        private void GetOtherHeaders(OutlookItem item, out string smallHead, string[] exclusions)
        {
            StringBuilder header = new StringBuilder();
            if (!exclusions.Contains("title", StringComparer.OrdinalIgnoreCase))
            {
                header.Append("<p>");
                AppendTitle(item.InnerObject, header, false);
            }
            AddAttachments(header, item.Attachments);
            if (!exclusions.Contains("title", StringComparer.OrdinalIgnoreCase))            
            header.Append("</p>");
            smallHead = header.ToString();
                    }

        private void AddAttachments(StringBuilder header, Attachments attachments)
        {
            if (attachments != null && attachments.Count > 0)
            {
                header.AppendFormat("<br/><span><a onclick=\"{0}\">Attachments ({1})</a>", GetTogglingJS(), attachments.Count);
                header.AppendFormat("<ul class='{0}' id=\"atchContainer\" style=\"display:none;list-style:none;\" itemId='{1}'>", TOGGLING_ELEMENT_CLASS, attachments.Parent.EntryID);
                foreach (Attachment ATCH in attachments)
                {
                    header.AppendFormat("<li><a tabindex=-1 onclick='' id='atch{0}'>{1}</a></li>", ATCH.Index, ATCH.DisplayName);
                }
                header.Append("</ul></span>");
            }
                        }

        private void AppendTitle(dynamic item, StringBuilder header, bool toggling)
        {
                        header.AppendFormat("<span onclick=\"{0}\">{1} {2}</span><br/>", toggling ? GetTogglingJS() : string.Empty, item.Subject, GetImportanceString((OlImportance)item.Importance));
        }

        private void AppendPplAndTime(dynamic item, StringBuilder header, string[] exclusions)
        {
            if (!exclusions.Contains("by", StringComparer.OrdinalIgnoreCase))
                header.AppendFormat("by {0}", item.SenderName);

            header.AppendFormat("            at {0:h:mm tt d MMM yyyy}", item.SentOn);

            header.AppendFormat("<span class=\"{0}\" style=\"display:{1};\"><br/>", TOGGLING_ELEMENT_CLASS, MIExtendedHeader.Checked ? "inline" : "none");
            if (item is MailItem)
            {
                header.AppendFormat("to: {0}", item.To);
                if (!string.IsNullOrEmpty(item.CC))
                    header.AppendFormat("<br/>cc: {0}", item.CC);
}
            else
            {
                ExceptionHandler.TryExecute(() =>
                    {
                        header.Append("to: ");
                        foreach (Recipient to in item.Recipients)
                        {
                            header.AppendFormat("{0}, ", to.Name);
                        }
                        header.Length -= 2;
                    }, false);
                // todo: make above true (suppressError) while distribution (production).
            }
            header.Append("</span>");
        }

                private string GetContactLink(AddressEntry item)
        {
            return string.Format("<a onclick='' id='sender'>{0}</a>", item.Name);
        }

        private string GetImportanceString(OlImportance importance, bool noParenthesis  = false)
        {
            string impString = importance.ToString().Substring(12);
            return  importance == OlImportance.olImportanceNormal ? string.Empty
                : noParenthesis ? impString : "(" + impString + ")";
        }

        private string GetTempFilePath(string suggestion)
        {
            string tempPath = Path.GetTempPath();
            string tempFilePath = tempPath + "\\" + suggestion;
            if (!File.Exists(tempFilePath))
                return tempFilePath;
            else
            {
                string name = Path.GetFileNameWithoutExtension(suggestion);
                string ext = Path.GetExtension(suggestion) ?? string.Empty;
                for (int i = 1; i < 1000; i++)
                {
                    tempFilePath = string.Format("{0}\\{1} ({2}){3}", tempPath, name, i, ext);
                    if (!File.Exists(tempFilePath))
                        return tempFilePath;
                }
            }
            return tempFilePath;
        }

        private string GetTogglingJS()
        {
            return string.Format(@"
var ac = getFirstElementByClassName(this.parentNode, '{0}');
                ac.style.display = ac.style.display && ac.style.display.toString().toLowerCase() != 'none' ? 'none' : 'block';
                                ", TOGGLING_ELEMENT_CLASS);
        }

        private string GetRequiredJS()
        {
            return @"<script>
function getFirstElementByClassName(node,classname) { 
var els;
  if (node.getElementsByClassName) { // use native implementation if available 
return (els = node.getElementsByClassName(classname)).length > 0 ? els[0] : null; 
  } else { 
els = node.getElementsByTagName(""*"");
var elsLen = els.length, 
            pattern = new RegExp(""(^|\\s)""+classname+""(\\s|$)""); 
         for (var i = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
return els[i]; 
          } 
        } 
        return null;
      } 
} 
</script>
";
}
#endregion

}
}
