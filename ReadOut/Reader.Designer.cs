namespace ReadOut
{
    partial class Reader
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.MIOpen = new System.Windows.Forms.ToolStripMenuItem();
            this.MIReply = new System.Windows.Forms.ToolStripMenuItem();
            this.MIReplyAll = new System.Windows.Forms.ToolStripMenuItem();
            this.MIForward = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.MIDelete = new System.Windows.Forms.ToolStripMenuItem();
            this.MIDeleteCurrent = new System.Windows.Forms.ToolStripMenuItem();
            this.MIDeleteConversation = new System.Windows.Forms.ToolStripMenuItem();
            this.MINext = new System.Windows.Forms.ToolStripMenuItem();
            this.MIPrevious = new System.Windows.Forms.ToolStripMenuItem();
            this.MIReload = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator2 = new System.Windows.Forms.ToolStripSeparator();
            this.MIConversationView = new System.Windows.Forms.ToolStripMenuItem();
            this.MIConversationAll = new System.Windows.Forms.ToolStripMenuItem();
            this.MIConversationThis = new System.Windows.Forms.ToolStripMenuItem();
            this.MIConversationReverse = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator3 = new System.Windows.Forms.ToolStripSeparator();
            this.MIClose = new System.Windows.Forms.ToolStripMenuItem();
            this.MISettings = new System.Windows.Forms.ToolStripMenuItem();
            this.MIExtendedHeader = new System.Windows.Forms.ToolStripMenuItem();
            this.MIConversationJump = new System.Windows.Forms.ToolStripMenuItem();
            this.MISSeparateWindow = new System.Windows.Forms.ToolStripMenuItem();
            this.MIHelp = new System.Windows.Forms.ToolStripMenuItem();
            this.MIHReadme = new System.Windows.Forms.ToolStripMenuItem();
            this.MIHAbout = new System.Windows.Forms.ToolStripMenuItem();
            this.MIHLogs = new System.Windows.Forms.ToolStripMenuItem();
            this.saveFileDialog1 = new System.Windows.Forms.SaveFileDialog();
            this.CMAttachment = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.CMAOpen = new System.Windows.Forms.ToolStripMenuItem();
            this.CMASave = new System.Windows.Forms.ToolStripMenuItem();
            this.CMASaveAndOpen = new System.Windows.Forms.ToolStripMenuItem();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.contextMenuStrip1.SuspendLayout();
            this.CMAttachment.SuspendLayout();
            this.SuspendLayout();
            // 
            // contextMenuStrip1
            // 
            this.contextMenuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MIOpen,
            this.MIReply,
            this.MIReplyAll,
            this.MIForward,
            this.toolStripSeparator1,
            this.MIDelete,
            this.MINext,
            this.MIPrevious,
            this.MIReload,
            this.toolStripSeparator2,
            this.MIConversationView,
            this.toolStripSeparator3,
            this.MIClose,
            this.MISettings,
            this.MIHelp});
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            this.contextMenuStrip1.Size = new System.Drawing.Size(243, 308);
            this.contextMenuStrip1.Opening += new System.ComponentModel.CancelEventHandler(this.contextMenuStrip1_Opening);
            this.contextMenuStrip1.ItemClicked += new System.Windows.Forms.ToolStripItemClickedEventHandler(this.contextMenuStrip1_ItemClicked);
            // 
            // MIOpen
            // 
            this.MIOpen.Name = "MIOpen";
            this.MIOpen.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Alt | System.Windows.Forms.Keys.O)));
            this.MIOpen.Size = new System.Drawing.Size(242, 22);
            this.MIOpen.Text = "&Open in Outlook Default";
            // 
            // MIReply
            // 
            this.MIReply.Name = "MIReply";
            this.MIReply.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Alt | System.Windows.Forms.Keys.R)));
            this.MIReply.Size = new System.Drawing.Size(242, 22);
            this.MIReply.Text = "&Reply";
            // 
            // MIReplyAll
            // 
            this.MIReplyAll.Name = "MIReplyAll";
            this.MIReplyAll.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Alt | System.Windows.Forms.Keys.A)));
            this.MIReplyAll.Size = new System.Drawing.Size(242, 22);
            this.MIReplyAll.Text = "Reply &All";
            // 
            // MIForward
            // 
            this.MIForward.Name = "MIForward";
            this.MIForward.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Alt | System.Windows.Forms.Keys.F)));
            this.MIForward.Size = new System.Drawing.Size(242, 22);
            this.MIForward.Text = "&Forward";
            // 
            // toolStripSeparator1
            // 
            this.toolStripSeparator1.Name = "toolStripSeparator1";
            this.toolStripSeparator1.Size = new System.Drawing.Size(239, 6);
            // 
            // MIDelete
            // 
            this.MIDelete.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MIDeleteCurrent,
            this.MIDeleteConversation});
            this.MIDelete.Name = "MIDelete";
            this.MIDelete.Size = new System.Drawing.Size(242, 22);
            this.MIDelete.Text = "&Delete";
            this.MIDelete.DropDownItemClicked += new System.Windows.Forms.ToolStripItemClickedEventHandler(this.contextMenuStrip1_ItemClicked);
            // 
            // MIDeleteCurrent
            // 
            this.MIDeleteCurrent.Name = "MIDeleteCurrent";
            this.MIDeleteCurrent.ShortcutKeys = System.Windows.Forms.Keys.Delete;
            this.MIDeleteCurrent.Size = new System.Drawing.Size(260, 22);
            this.MIDeleteCurrent.Text = "&Current";
            // 
            // MIDeleteConversation
            // 
            this.MIDeleteConversation.Name = "MIDeleteConversation";
            this.MIDeleteConversation.ShortcutKeys = ((System.Windows.Forms.Keys)(((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.Shift) 
            | System.Windows.Forms.Keys.Delete)));
            this.MIDeleteConversation.Size = new System.Drawing.Size(260, 22);
            this.MIDeleteConversation.Text = "&Entire Conversation";
            // 
            // MINext
            // 
            this.MINext.Name = "MINext";
            this.MINext.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.OemPeriod)));
            this.MINext.Size = new System.Drawing.Size(242, 22);
            this.MINext.Text = "&Next";
            // 
            // MIPrevious
            // 
            this.MIPrevious.Name = "MIPrevious";
            this.MIPrevious.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.Oemcomma)));
            this.MIPrevious.Size = new System.Drawing.Size(242, 22);
            this.MIPrevious.Text = "&Previous";
            // 
            // MIReload
            // 
            this.MIReload.Name = "MIReload";
            this.MIReload.ShortcutKeys = System.Windows.Forms.Keys.F6;
            this.MIReload.Size = new System.Drawing.Size(242, 22);
            this.MIReload.Text = "Re&load";
            // 
            // toolStripSeparator2
            // 
            this.toolStripSeparator2.Name = "toolStripSeparator2";
            this.toolStripSeparator2.Size = new System.Drawing.Size(239, 6);
            // 
            // MIConversationView
            // 
            this.MIConversationView.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MIConversationAll,
            this.MIConversationThis,
            this.MIConversationReverse});
            this.MIConversationView.Name = "MIConversationView";
            this.MIConversationView.Size = new System.Drawing.Size(242, 22);
            this.MIConversationView.Text = "Con&versation View";
            this.MIConversationView.DropDownOpening += new System.EventHandler(this.MIConversationView_DropDownOpening);
            // 
            // MIConversationAll
            // 
            this.MIConversationAll.CheckOnClick = true;
            this.MIConversationAll.Name = "MIConversationAll";
            this.MIConversationAll.ShortcutKeys = ((System.Windows.Forms.Keys)(((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.Shift) 
            | System.Windows.Forms.Keys.I)));
            this.MIConversationAll.Size = new System.Drawing.Size(177, 22);
            this.MIConversationAll.Text = "For &All";
            // 
            // MIConversationThis
            // 
            this.MIConversationThis.CheckOnClick = true;
            this.MIConversationThis.Name = "MIConversationThis";
            this.MIConversationThis.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.I)));
            this.MIConversationThis.Size = new System.Drawing.Size(177, 22);
            this.MIConversationThis.Text = "For &This ";
            // 
            // MIConversationReverse
            // 
            this.MIConversationReverse.CheckOnClick = true;
            this.MIConversationReverse.Name = "MIConversationReverse";
            this.MIConversationReverse.Size = new System.Drawing.Size(177, 22);
            this.MIConversationReverse.Text = "In Reverse order";
            this.MIConversationReverse.CheckedChanged += new System.EventHandler(this.MIConversationReverse_CheckedChanged);
            // 
            // toolStripSeparator3
            // 
            this.toolStripSeparator3.Name = "toolStripSeparator3";
            this.toolStripSeparator3.Size = new System.Drawing.Size(239, 6);
            // 
            // MIClose
            // 
            this.MIClose.Name = "MIClose";
            this.MIClose.Size = new System.Drawing.Size(242, 22);
            this.MIClose.Text = "&Close";
            // 
            // MISettings
            // 
            this.MISettings.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MIExtendedHeader,
            this.MIConversationJump,
            this.MISSeparateWindow});
            this.MISettings.Name = "MISettings";
            this.MISettings.Size = new System.Drawing.Size(242, 22);
            this.MISettings.Text = "&Settings";
            // 
            // MIExtendedHeader
            // 
            this.MIExtendedHeader.CheckOnClick = true;
            this.MIExtendedHeader.Name = "MIExtendedHeader";
            this.MIExtendedHeader.Size = new System.Drawing.Size(392, 22);
            this.MIExtendedHeader.Text = "&Extended Header Information";
            this.MIExtendedHeader.CheckedChanged += new System.EventHandler(this.MIExtendedHeader_CheckedChanged);
            // 
            // MIConversationJump
            // 
            this.MIConversationJump.CheckOnClick = true;
            this.MIConversationJump.Name = "MIConversationJump";
            this.MIConversationJump.Size = new System.Drawing.Size(392, 22);
            this.MIConversationJump.Text = "&Skip Related Items in Conversation View";
            this.MIConversationJump.CheckedChanged += new System.EventHandler(this.MIConversationJump_CheckedChanged);
            // 
            // MISSeparateWindow
            // 
            this.MISSeparateWindow.Name = "MISSeparateWindow";
            this.MISSeparateWindow.Size = new System.Drawing.Size(392, 22);
            this.MISSeparateWindow.Text = "Don’t automatically close previously opened Reader &window";
            this.MISSeparateWindow.CheckedChanged += new System.EventHandler(this.MISSeparateWindow_CheckedChanged);
            // 
            // MIHelp
            // 
            this.MIHelp.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MIHReadme,
            this.MIHAbout,
            this.MIHLogs});
            this.MIHelp.Name = "MIHelp";
            this.MIHelp.Size = new System.Drawing.Size(242, 22);
            this.MIHelp.Text = "&Help";
            this.MIHelp.DropDownItemClicked += new System.Windows.Forms.ToolStripItemClickedEventHandler(this.contextMenuStrip1_ItemClicked);
            // 
            // MIHReadme
            // 
            this.MIHReadme.Name = "MIHReadme";
            this.MIHReadme.ShortcutKeys = System.Windows.Forms.Keys.F1;
            this.MIHReadme.Size = new System.Drawing.Size(179, 22);
            this.MIHReadme.Text = "&Read me";
            // 
            // MIHAbout
            // 
            this.MIHAbout.Name = "MIHAbout";
            this.MIHAbout.Size = new System.Drawing.Size(179, 22);
            this.MIHAbout.Text = "&About ...";
            // 
            // MIHLogs
            // 
            this.MIHLogs.Name = "MIHLogs";
            this.MIHLogs.Size = new System.Drawing.Size(179, 22);
            this.MIHLogs.Text = "Open &Logs Folder ...";
            // 
            // saveFileDialog1
            // 
            this.saveFileDialog1.Filter = "All files (*.*)|*.*";
            this.saveFileDialog1.Title = "Save Attachment as";
            // 
            // CMAttachment
            // 
            this.CMAttachment.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.CMAOpen,
            this.CMASave,
            this.CMASaveAndOpen});
            this.CMAttachment.Name = "CMAttachment";
            this.CMAttachment.Size = new System.Drawing.Size(154, 70);
            this.CMAttachment.ItemClicked += new System.Windows.Forms.ToolStripItemClickedEventHandler(this.CMAttachment_ItemClicked);
            // 
            // CMAOpen
            // 
            this.CMAOpen.Name = "CMAOpen";
            this.CMAOpen.Size = new System.Drawing.Size(153, 22);
            this.CMAOpen.Text = "&Open";
            // 
            // CMASave
            // 
            this.CMASave.Name = "CMASave";
            this.CMASave.Size = new System.Drawing.Size(153, 22);
            this.CMASave.Text = "&Save";
            // 
            // CMASaveAndOpen
            // 
            this.CMASaveAndOpen.Name = "CMASaveAndOpen";
            this.CMASaveAndOpen.Size = new System.Drawing.Size(153, 22);
            this.CMASaveAndOpen.Text = "Save &and Open";
            // 
            // webBrowser1
            // 
            this.webBrowser1.ContextMenuStrip = this.contextMenuStrip1;
            this.webBrowser1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.webBrowser1.IsWebBrowserContextMenuEnabled = false;
            this.webBrowser1.Location = new System.Drawing.Point(0, 0);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(584, 562);
            this.webBrowser1.TabIndex = 2;
            // 
            // Reader
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(584, 562);
            this.Controls.Add(this.webBrowser1);
            this.KeyPreview = true;
            this.Name = "Reader";
            this.Text = "Reader";
            this.Load += new System.EventHandler(this.Reader_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Reader_KeyDown);
            this.contextMenuStrip1.ResumeLayout(false);
            this.CMAttachment.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.SaveFileDialog saveFileDialog1;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.ToolStripMenuItem MIReply;
        private System.Windows.Forms.ToolStripMenuItem MIReplyAll;
        private System.Windows.Forms.ToolStripMenuItem MIOpen;
        private System.Windows.Forms.ToolStripMenuItem MIForward;
        private System.Windows.Forms.ToolStripMenuItem MIDelete;
        private System.Windows.Forms.ToolStripMenuItem MINext;
        private System.Windows.Forms.ToolStripMenuItem MIPrevious;
        private System.Windows.Forms.ToolStripMenuItem MIClose;
        private System.Windows.Forms.ToolStripMenuItem MIReload;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator1;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator2;
        private System.Windows.Forms.ToolStripMenuItem MIConversationView;
        private System.Windows.Forms.ToolStripMenuItem MIConversationAll;
        private System.Windows.Forms.ToolStripMenuItem MIConversationThis;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator3;
        private System.Windows.Forms.ToolStripMenuItem MIHAbout;
        private System.Windows.Forms.ContextMenuStrip CMAttachment;
        private System.Windows.Forms.ToolStripMenuItem CMAOpen;
        private System.Windows.Forms.ToolStripMenuItem CMASave;
        private System.Windows.Forms.ToolStripMenuItem CMASaveAndOpen;
        private System.Windows.Forms.ToolStripMenuItem MIConversationReverse;
        private System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.ToolStripMenuItem MISettings;
        private System.Windows.Forms.ToolStripMenuItem MIExtendedHeader;
        private System.Windows.Forms.ToolStripMenuItem MIConversationJump;
        private System.Windows.Forms.ToolStripMenuItem MIHelp;
        private System.Windows.Forms.ToolStripMenuItem MIDeleteCurrent;
        private System.Windows.Forms.ToolStripMenuItem MIDeleteConversation;
        private System.Windows.Forms.ToolStripMenuItem MIHReadme;
        private System.Windows.Forms.ToolStripMenuItem MIHLogs;
        private System.Windows.Forms.ToolStripMenuItem MISSeparateWindow;

    }
}