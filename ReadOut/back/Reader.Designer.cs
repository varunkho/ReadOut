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
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.buttonClose = new System.Windows.Forms.Button();
            this.buttonAbout = new System.Windows.Forms.Button();
            this.TextHeader = new System.Windows.Forms.TextBox();
            this.HeaderSeparate = new System.Windows.Forms.CheckBox();
            this.SuspendLayout();
            // 
            // webBrowser1
            // 
            this.webBrowser1.Location = new System.Drawing.Point(0, 60);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(554, 580);
            this.webBrowser1.TabIndex = 0;
            // 
            // buttonClose
            // 
            this.buttonClose.Location = new System.Drawing.Point(10, 660);
            this.buttonClose.Name = "buttonClose";
            this.buttonClose.Size = new System.Drawing.Size(75, 23);
            this.buttonClose.TabIndex = 1;
            this.buttonClose.Text = "&Close";
            this.buttonClose.UseVisualStyleBackColor = true;
            this.buttonClose.Click += new System.EventHandler(this.buttonClose_Click);
            // 
            // buttonAbout
            // 
            this.buttonAbout.Location = new System.Drawing.Point(100, 660);
            this.buttonAbout.Name = "buttonAbout";
            this.buttonAbout.Size = new System.Drawing.Size(75, 23);
            this.buttonAbout.TabIndex = 2;
            this.buttonAbout.Text = "&About";
            this.buttonAbout.UseVisualStyleBackColor = true;
            this.buttonAbout.Click += new System.EventHandler(this.buttonAbout_Click);
            // 
            // TextHeader
            // 
            this.TextHeader.AccessibleName = "Header";
            this.TextHeader.Location = new System.Drawing.Point(0, 0);
            this.TextHeader.Multiline = true;
            this.TextHeader.Name = "TextHeader";
            this.TextHeader.ReadOnly = true;
            this.TextHeader.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.TextHeader.Size = new System.Drawing.Size(500, 50);
            this.TextHeader.TabIndex = 5;
            // 
            // HeaderSeparate
            // 
            this.HeaderSeparate.AutoSize = true;
            this.HeaderSeparate.Location = new System.Drawing.Point(220, 660);
            this.HeaderSeparate.Name = "HeaderSeparate";
            this.HeaderSeparate.Size = new System.Drawing.Size(185, 17);
            this.HeaderSeparate.TabIndex = 4;
            this.HeaderSeparate.Text = "Show  &header separate from body";
            this.HeaderSeparate.UseVisualStyleBackColor = true;
            this.HeaderSeparate.Visible = false;
            this.HeaderSeparate.CheckedChanged += new System.EventHandler(this.HeaderSeparate_CheckedChanged);
            // 
            // Reader
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(584, 682);
            this.Controls.Add(this.HeaderSeparate);
            this.Controls.Add(this.TextHeader);
            this.Controls.Add(this.buttonAbout);
            this.Controls.Add(this.buttonClose);
            this.Controls.Add(this.webBrowser1);
            this.KeyPreview = true;
            this.Name = "Reader";
            this.Text = "Reader";
            this.Load += new System.EventHandler(this.Reader_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Reader_KeyDown);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.Button buttonClose;
        private System.Windows.Forms.Button buttonAbout;
        private System.Windows.Forms.TextBox TextHeader;
        private System.Windows.Forms.CheckBox HeaderSeparate;
    }
}