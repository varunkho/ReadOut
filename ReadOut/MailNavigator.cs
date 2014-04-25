using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Interop.Outlook;
using System.Runtime.InteropServices;

namespace ReadOut
{
    public class MailNavigator : IDisposable
    {

        private bool _DoNotRelease;

        #region Event Logic
        public event EventHandler ItemChanged;

        private void OnItemChanged()
        {
            if (ItemChanged != null)
                ItemChanged(this, new EventArgs());
        }
        #endregion

        #region Props
        public Application OutlookApp
        { get; private set; }

        protected Explorer Explorer
        { get; private set; }

public  MAPIFolder Folder
        { get; private set; }

        private OutlookItem _current;
        public virtual OutlookItem Current
        {
            get
            {
                return _current;
            }
protected set
            {
                    if (!_DoNotRelease && _current != null && value != _current)
                        _current.Dispose();
                                

                _current = value;
                OnItemChanged();
            }
        }

        private Items _items;
        protected virtual Items AllItems
        {
            get
            {
if (_items == null)
                {
                                    _items = Folder.Items;
                    _items.Sort("ReceivedTime");
                    _items.ItemAdd += (i) => ReleaseItems();
                    _items.ItemRemove += () => ReleaseItems();
                }
                return _items;
                            }
        }
#endregion

        public MailNavigator(Application app, MAPIFolder folder)
        {
            this.OutlookApp = app;
            this.Explorer =app.ActiveExplorer();
            this.Folder = folder;
            if (Explorer.CurrentFolder == folder && Explorer.Selection.Count > 0)
            {
                this.Current = new OutlookItem(this.Explorer.Selection[1]);
            }
            else
            {
                MoveTOStart();
            }
                    }

                #region Operations
public virtual void MoveTOStart()
        {
            var items = AllItems;
            if (items.Count > 0)
                SetSelected(new OutlookItem(items[items.Count]));
                        }

public virtual void MoveTOEnd()
        {
            var items = AllItems;
            if (items.Count > 0)
                SetSelected(new OutlookItem(items[1]));
}

public virtual OutlookItem Next()
        {
                                                var items = AllItems;
            if (items[1].EntryID != Current.EntryID)
            {
                for (int i = items.Count; i >= 1; i--)
                {
                                        if (items[i].EntryID == Current.EntryID)
                    {
                        return SetSelected(new OutlookItem(items[i - 1]));
                    }
                }
            }
            return null;
        }

public virtual OutlookItem Previous()
        {
            var items = AllItems;
            if (items[items.Count].EntryID != Current.EntryID)
            {
                for (int i = items.Count; i >= 1; i--)
                {
                    if (items[i].EntryID == Current.EntryID)
                    {
                        return SetSelected(new OutlookItem(items[i + 1]));
                    }
                }
            }
            return null;
        }

public virtual OutlookItem NextConversationItem()
{
    var items = AllItems;
    string currentCID;
    // items are ordered in order from last to first.
if (items[1].EntryID != Current.EntryID)
    {
    // if the current item is not a part of any conversation, then regular next would occur.
        if (!Current.TryGetPropertyValue("ConversationID", out currentCID))
            return Next();

        int i;
        for (i = items.Count; i >= 1; i--)
        {
            if (items[i].EntryID == Current.EntryID)
            {
                break;
            }
        }
            
        for (i--; i >= 1; i--)
        {
            string thisCID;
            var item = new OutlookItem(items[i]);
            if (item.TryGetPropertyValue("ConversationID", out thisCID) && currentCID == thisCID)
            {
                continue;
            }
            return SetSelected(item);
                            }
    }
    return null;
}

public virtual OutlookItem PreviousConversationItem()
{
    var items = AllItems;
    string currentCID;
    if (items[items.Count].EntryID != Current.EntryID)
    {
        if (!Current.TryGetPropertyValue("ConversationID", out currentCID))
            return Previous();

        int i;
        for (i = items.Count; i >= 1; i--)
        {
            if (items[i].EntryID == Current.EntryID)
            {
                break;
            }
        }

        int itemLen = items.Count;
        for (i++; i <= itemLen; i++)
        {
            string thisCID;
            var item = new OutlookItem(items[i]);
            if (item.TryGetPropertyValue("ConversationID", out thisCID) && currentCID == thisCID)
            {
                continue;
            }
            return SetSelected(item);
        }
    }
    return null;
}

        public void Delete()
        {
            try
            {
            _DoNotRelease = true;
            var deleting = Current;
                // If there's no item further, move to the beginning.
            if (Next() == null)
                MoveTOStart();

                // If there's only one item, then no actual movement occured and hence set current to null.
            if (Current.EntryID == deleting.EntryID)
                this.Current = null;

            ((dynamic)deleting.InnerObject).Delete();
            deleting.Dispose();
            }
            finally
            {
                _DoNotRelease = false;
            }
}

        public void DeleteConversation()
        {
            // For non-conversation items, regular delete will work.
            string currentCID;
            if (!Current.TryGetPropertyValue("ConversationID", out currentCID))
                Delete();

            try
            {
_DoNotRelease = true;
                                var deleting = Current;
                                bool moveToBeginning = false;
                // If there's no item further, we'll move to the beginning.
                if (NextConversationItem() == null)
                    moveToBeginning = true;

                foreach (var item in GetRelatedItems(deleting, false).Items)
                {
                    ((dynamic)item.InnerObject).Delete();
                    item.Dispose();
                }

                if (moveToBeginning)
                    MoveTOStart();
            }
            finally
            {
                _DoNotRelease = false;
            }
        }

        public ConversationDTO GetRelatedItems(bool latestFirst, bool currentFolderOnly = true)
        {
            return GetRelatedItems(Current, latestFirst, currentFolderOnly);
            }

        private ConversationDTO GetRelatedItems(OutlookItem sourceItem, bool latestFirst, bool currentFolderOnly = true)
        {
            Conversation c = ((dynamic)sourceItem.InnerObject).GetConversation();
            ConversationDTO dto = new ConversationDTO() { Topic = sourceItem.ConversationTopic };
            var table = c.GetTable();
            if (table.GetRowCount() == 0)
            {
                dto.Items = new List<OutlookItem> { sourceItem };
                dto.FirstRootItem = sourceItem;
            }
            else
            {
                table.MoveToStart();
                var row = table.GetNextRow();
                var item = new OutlookItem(table.Session.GetItemFromID(row["EntryID"]));
                dto.FirstRootItem = item;
                SortedDictionary<DateTime, OutlookItem> ordered = new SortedDictionary<DateTime, OutlookItem>();
                while (true)
                {
                    if (!ordered.Values.Any(i => i.EntryID == item.EntryID) && (!currentFolderOnly || item.Parent.Name.Equals(Folder.Name, StringComparison.OrdinalIgnoreCase)))
                    {
                        DateTime sfield = item.TryGetPropertyValue("ReceivedTime", out sfield) ? sfield : item.LastModificationTime;
                        ordered.Add(sfield, item);
                    }
                    if (table.EndOfTable)
                        break;
                    row = table.GetNextRow();
                    item = new OutlookItem(table.Session.GetItemFromID(row["EntryID"]));
                }
                var list = ordered.Values.ToList();
                if (latestFirst)
                    list.Reverse();
                dto.Items = list;
            }

            return dto;
        }

        protected virtual OutlookItem SetSelected(OutlookItem item)
        {
                     /*
             * this needs to be worked upon.
             * The problem is that although the item gets selected internally, yet it doesn't show up the same in the listview.
            */
                                    if (Explorer.CurrentFolder == Folder)
            {
                try
                {
                    if (Explorer.Selection.Count > 0)
                    {
                        var oldItem = this.Explorer.Selection[1];
                        this.Explorer.RemoveFromSelection(oldItem);
                    }
                    this.Explorer.AddToSelection(item.InnerObject);
                }
                catch (System.Exception ex)
                {
                    // we can tolerate selection errors - they are bound to occur e.g. in conversation view.
                    //if (!ex.Message.Contains("invalid for a conversation view"))
                    //    System.Windows.Forms.MessageBox.Show(string.Format("Oops, an error occured: {0}\n{1}", ex.Message, Messages.CONTACT));
                }
                }
            this.Current = item;
                                    return item;
        }

        private void ReleaseItems()
        {
            try
            {
                if (_items != null)
                {
                    Marshal.ReleaseComObject(_items);
                    _items = null;
                }
            }
            catch (System.Exception ex) {
                ExceptionHandler.Catch(ex, suppress: true);
            }
        }
        #endregion

public void Dispose()
        {
            this.Current = null;
        }

    }
    
    public class ConversationNavigator : MailNavigator
    {

        #region Props
        private Table _table;
        protected virtual Table Table
        {
            get
            {
                return _table ?? (_table = (Folder.CurrentView as TableView).GetTable());
            }
        }
        #endregion

        public ConversationNavigator(Application app, MAPIFolder folder) : base(app, folder)
        {
}

        #region Operations
        private OutlookItem FindItemByRow(Row row)
        {
            foreach (dynamic item in Folder.Items)
                if (item.EntryID == row["EntryID"])
                    return new OutlookItem(item);

            return null;
        }

        public override void MoveTOStart()
        {
            if (Table.GetRowCount() > 0)
            {
                Table.MoveToStart();
                SetSelected(FindItemByRow(Table.GetNextRow()));
            }
        }

        public override void MoveTOEnd()
        {
            if (!Table.EndOfTable)
            {
                Row row =null;
                while (!Table.EndOfTable)
                {
                    row = Table.GetNextRow();
                }
                SetSelected(FindItemByRow(row));
            }
        }

        public override OutlookItem Next()
        {
                        if (!Table.EndOfTable)
            {
                return SetSelected(FindItemByRow(Table.GetNextRow()));
                    }
            else
                        return null;
        }

        public override OutlookItem Previous()
        {
            Row currentRow, prevRow = null;
            Table.MoveToStart();
            while (!Table.EndOfTable)
            {
                currentRow = Table.GetNextRow();
                if (currentRow["EntryID"] == Current.EntryID)
                {
                    break;
                }
                prevRow = currentRow;
                        }
            if (prevRow != null)
            {
                return SetSelected(FindItemByRow(prevRow));
            }
            else
                return null;
        }
#endregion


    }

    public class ConversationDTO
    {

        public string Topic { get; set; }

        public OutlookItem FirstRootItem { get; set; }

        public IList<OutlookItem> Items { get; set; }


    }

}
