using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace ReadOut
{
    public class ExceptionHandler
    {

        public static void Catch(Exception ex, string start = "Oops, it faced a little problem", bool suppress = false, object additionalInfo = null)
        {
            if (!suppress)
            MessageBox.Show(string.Format("{0}: {1}\n{2}", start, ex.Message, Messages.CONTACT));

            if (additionalInfo != null)
                Util.AppLogger.WriteWithTimeStamp(ex, Util.Stringize(additionalInfo));
            else
                Util.AppLogger.WriteWithTimeStamp(ex);
        }

        public static bool TryExecute(Action act, bool suppressError, Action finalDeligate = null)
        {
            try
            {
                act();
                return true;
            }
            catch (Exception ex)
            {
                Catch(ex, suppress: suppressError);
            }
            finally
            {
                if (finalDeligate != null)
                    finalDeligate();
            }
            return false;
        }

        }
}
