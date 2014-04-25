using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;


namespace ReadOut
{
    static class HtmlDocumentExtensions
    {

        public static IEnumerable<HtmlElement> GetElementsByID(this HtmlDocument source, string id)
        {
                        return source.GetElementsByTagName("*")
                .Cast<HtmlElement>()
                .Where(el => el.Id != null && el.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
        }

}
}
