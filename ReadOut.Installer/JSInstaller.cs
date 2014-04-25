using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration.Install;
using System.Linq;
using System.Reflection;
using System.IO;


namespace ReadOut.Installer
{
    [RunInstaller(true)]
    public partial class JSInstaller : System.Configuration.Install.Installer
    {
        public JSInstaller()
        {
            InitializeComponent();
                    }

        public override void Install(IDictionary stateSaver)
        {
            try
            {
                                var Jaws13Settings = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData),
                    @"Freedom Scientific\JAWS\13.0\Settings\enu");
                                if (!Directory.Exists(Jaws13Settings))
                                {
                                                                        return; // Jaws 13 is not installed.
                                }
                var files = Directory.GetFiles(Jaws13Settings, "Outlook 2010.*");

                if (files.Length > 0)
                {
                    // create a backup.
                    var backupDir = Path.Combine(Jaws13Settings, string.Format(@"backup\{0:yyyy-MM-dd H-mm-ss.fff}", DateTime.Now));
                    Directory.CreateDirectory(backupDir);
                    foreach (var filePath in files)
                        File.Move(filePath, Path.Combine(backupDir, Path.GetFileName(filePath)));
                }

                var thisAsm = Assembly.GetExecutingAssembly();
                var asmName = thisAsm.GetName().Name;
                
                var resStream = new BinaryReader(thisAsm.GetManifestResourceStream(asmName + ".Outlook 2010.jsb"));
                File.WriteAllBytes(Path.Combine(Jaws13Settings, "Outlook 2010.jsb"), resStream.ReadBytes((int)resStream.BaseStream.Length));

                resStream = new BinaryReader(thisAsm.GetManifestResourceStream(asmName + ".Outlook 2010.JSS"));
                File.WriteAllBytes(Path.Combine(Jaws13Settings, "Outlook 2010.JSS"), resStream.ReadBytes((int)resStream.BaseStream.Length));
            }
            catch (Exception ex)
            {
                System.Windows.Forms.MessageBox.Show("An error occurred while installing Jaws scripts for Outlook to work with ReadOut.\r\nError Message: " + ex.Message);
            }
            }

    }
}
