using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Office = Microsoft.Office.Core;
using Outlook = Microsoft.Office.Interop.Outlook;

namespace ReadOut
{
    partial class FormRegion1
    {
        #region Form Region Factory

        [Microsoft.Office.Tools.Outlook.FormRegionMessageClass(Microsoft.Office.Tools.Outlook.FormRegionMessageClassAttribute.Note)]
        [Microsoft.Office.Tools.Outlook.FormRegionName("ReadOut.FormRegion1")]
        public partial class FormRegion1Factory
        {
            // Occurs before the form region is initialized.
            // To prevent the form region from appearing, set e.Cancel to true.
            // Use e.OutlookItem to get a reference to the current Outlook item.
            private void FormRegion1Factory_FormRegionInitializing(object sender, Microsoft.Office.Tools.Outlook.FormRegionInitializingEventArgs e)
            {
            }
        }

        #endregion

        private Reader _reader;
        // Occurs before the form region is displayed.
        // Use this.OutlookItem to get a reference to the current Outlook item.
        // Use this.OutlookFormRegion to get a reference to the form region.
        private void FormRegion1_FormRegionShowing(object sender, System.EventArgs e)
        {
            return;
            _reader = new Reader(new MailNavigator(this.OutlookFormRegion.Application, this.OutlookFormRegion.Application.ActiveExplorer().CurrentFolder));
            _reader.TopLevel = false;
            panel1.Controls.Add(_reader);
            _reader.Dock = System.Windows.Forms.DockStyle.Fill;
            _reader.Show();
                                }

        // Occurs when the form region is closed.
        // Use this.OutlookItem to get a reference to the current Outlook item.
        // Use this.OutlookFormRegion to get a reference to the form region.
        private void FormRegion1_FormRegionClosed(object sender, System.EventArgs e)
        {
            
        }

        private void FormRegion1_Load(object sender, EventArgs e)
        {
            this.PreviewKeyDown += new System.Windows.Forms.PreviewKeyDownEventHandler(FormRegion1_PreviewKeyDown);
            this.button1.KeyDown += new System.Windows.Forms.KeyEventHandler(button1_KeyDown);
        }

        void button1_KeyDown(object sender, System.Windows.Forms.KeyEventArgs e)
        {
            _reader.webBrowser1.Focus();
        }

        void FormRegion1_PreviewKeyDown(object sender, System.Windows.Forms.PreviewKeyDownEventArgs e)
        {
            System.Windows.Forms.MessageBox.Show("Test");
        }

            }
}
