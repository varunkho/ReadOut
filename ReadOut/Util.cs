using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Interop.Outlook;

namespace ReadOut
{
    class Util
    {

        private static Logger _logger;
                    public static Logger AppLogger
        {
            get
            {
                try
                {
                    return _logger ?? (_logger = new Logger("logs", Logger.RECOMMENDED_SIZE_IN_KB));
                }
                catch (System.Exception ex)
                {
                    System.Windows.Forms.MessageBox.Show(string.Format("Just wanted to inform you that ReadOut couldn't fork logging capabilities because of the following problem: {0}\nWithout logging I might not be able to troubleshoot issues you may face. You can send this message for me to see. Log directory: {1}.\nAdditional information: {2}", ex.Message, Logger.AppRoot, ex));
                }
                return (_logger = new Logger(ReadOut.Logger.MediaType.Console));
            }
                        }
            

        public static string GetSmtpAddress(AddressEntry entry)
        {
            if (entry.AddressEntryUserType.ToString().IndexOf("exchange", StringComparison.OrdinalIgnoreCase) > 0)
            {
                dynamic exch = (dynamic)entry.GetExchangeUser() ?? (dynamic)entry.GetExchangeDistributionList();
                if (exch != null)
                    return exch.PrimarySmtpAddress;
            }
            else if (entry.AddressEntryUserType == OlAddressEntryUserType.olSmtpAddressEntry)
            {
                return entry.Address;
            }
            // Default if nothing worked.
            string PR_SMTP_ADDRESS = @"http://schemas.microsoft.com/mapi/proptag/0x39FE001E";
            return entry.PropertyAccessor.GetProperty(PR_SMTP_ADDRESS) as string;
        }


        public static string Stringize(object o, string name = null)
        {
            StringBuilder text = new StringBuilder();
            Stringize(o, name, ref text);
            return text.ToString();
        }

        public static void Stringize(object o, string name, ref StringBuilder text)
        {
            if (text == null)
                text = new StringBuilder();
            var props = o.GetType().GetProperties();
            if (!string.IsNullOrEmpty(name))
                text.AppendFormat("{0} = {{\n", name);
            else
                text.Append("{");
            foreach (var prop in props)
            {
                if (prop.CanRead && (prop.PropertyType.IsSubclassOf(typeof(ValueType)) || prop.PropertyType == typeof(string)))
                    text.AppendFormat("{0}: {1}\n", prop.Name, prop.GetValue(o, null));
            }
            text.Append("}");
        }

    }
}
