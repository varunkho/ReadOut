using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Office.Interop.Outlook;

namespace ReadOut
{
    public partial class Reader : Form
    {

        #region Fields/Constants
        bool MIsLoading = true;
        DateTime mLastLoadTime;
        const int REPEATING_MILS = 150;
        MailNavigator mNavigator;
        #endregion

        public Reader(MailNavigator navigator)
        {
            InitializeComponent();
            mNavigator = navigator;
}

        #region Events
        private void Reader_KeyDown(object sender, KeyEventArgs e)
        {
            KeyAction(e);
                    }

                private void Reader_Load(object sender, EventArgs e)
        {
                        this.Text = "ReadOut - " + mNavigator.Folder.Name;
            LoadMail();
            webBrowser1.PreviewKeyDown += new PreviewKeyDownEventHandler(webBrowser1_PreviewKeyDown);
            MIsLoading = false;
                    }

        void webBrowser1_PreviewKeyDown(object sender, PreviewKeyDownEventArgs e)
        {
        KeyAction(new KeyEventArgs(e.KeyData));
        }

        private void buttonClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void buttonAbout_Click(object sender, EventArgs e)
        {
            new About().ShowDialog();
        }

        private void HeaderSeparate_CheckedChanged(object sender, EventArgs e)
        {
            if (!MIsLoading)
            {
                ReadOut.Properties.Settings.Default.HeaderSeparate = HeaderSeparate.Checked;
                ReadOut.Properties.Settings.Default.Save();
                LoadMail();
            }

                //TextHeader.Enabled = HeaderSeparate.Checked;
            }
        #endregion

        #region Operations
        private void KeyAction(KeyEventArgs e)
        {
                                    switch (e.KeyCode)
            {
                case Keys.Escape:
                    this.Close();
                    return;
                case Keys.OemPeriod:
                    if (e.Control && webBrowser1.Focused)
                    {
                        if (DateTime.Now.Subtract(mLastLoadTime) <= TimeSpan.FromMilliseconds(REPEATING_MILS))
                            return;
                        mLastLoadTime = DateTime.Now;

                                                 
                                                 if (mNavigator.Next() != null)
{
    LoadMail();
}
                    }
                    break;
                case Keys.Oemcomma:
                    if (e.Control && webBrowser1.Focused)
                    {
                        if (DateTime.Now.Subtract(mLastLoadTime) <= TimeSpan.FromMilliseconds(REPEATING_MILS))
                            return;
                        mLastLoadTime = DateTime.Now;

                        if (mNavigator.Previous() != null)
                        {
                            LoadMail();
                        }
                    }
                    break;  
                                        default:
                    return;
            }
                                    }

        private void LoadMail()
        {
            MailItem current = mNavigator.Current;
            string html;
                                                                        StringBuilder header = new StringBuilder();
            header.AppendFormat("from: {0}\r\n", current.SenderName);
                header.AppendFormat("sent: {0:D}\r\n", current.SentOn);
                header.AppendFormat("to: {0}\r\n", current.To);
                if (!string.IsNullOrEmpty(current.CC))
                    header.AppendFormat("cc: {0}\r\n", current.CC);
                header.AppendFormat("subject: {0}\r\n", current.Subject);
                TextHeader.Text = header.ToString();


            header.Clear();
            html = string.Format("<p tabindex=0>{0}<br/> by {1} at {2:h:mm tt d MMM yyyy}<br/><br/>{3}", current.Subject, current.SenderName, current.SentOn, current.HTMLBody);
                        webBrowser1.DocumentText =  html;
        }
        #endregion

    }
}
