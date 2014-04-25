using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Lync.Controls;

namespace ReadOut
{
    public partial class Form1 : Form
    {

        Microsoft.Office.Interop.Outlook.AddressEntry mEntry;

        public Form1(Microsoft.Office.Interop.Outlook.AddressEntry entry)
        {
            InitializeComponent();
            this.Load += new EventHandler(Form1_Load);
            this.mEntry = entry;
        }

        void Form1_Load(object sender, EventArgs e)
        {
            ContactCard card = new Microsoft.Lync.Controls.ContactCard();
                card.Source = Util.GetSmtpAddress(mEntry);
            //elementHost1.Child = card;
                            }
    }
}
