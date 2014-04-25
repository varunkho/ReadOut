New Features in V1.1
--------------------

-   New Delete command for deleting the entire conversation – now you can delete all the mails in a conversation by pressing the Ctrl+Shift+Del keystroke. This is especially useful when you have read the entire conversation in a Conversation View.
-   New setting ‘Don’t automatically close previously opened Reader window’ – previously each time you would open ReadOut Reader (using R key or from the context menu,) a new Reader window would get loaded. Although it is easy to dismiss Reader window – by pressing the Escape key – but if somehow you did not close it, it remained opened. Now with this new setting, if unchecked (the default), ReadOut automatically makes sure that only one window is opened at a time. So if you forget to close Reader window – no problem – as soon as you open ReadOut Reader again, the prior window will automatically be closed. For those who like the older way – just check this setting.
-   Fixed key hooking to make it more reliable and removed ‘Reinitialize ReadOut Key Hook’ context menu option – The key hooking feature that makes it possible to use keys like R (to open Reader) has been significantly worked upon to make it more reliable. Although it still depends upon an intercepting mechanism called subclassing which is inherently unreliable but – it now actively monitors whether or not the relevant hooks it acquired have got invalid. If so, it re-acquires the hooks. So there is no need for the context menu option – Reinitialize ReadOut Key Hook –therefore it’s been removed now. In still rare circumstances if it stops working, I recommend you to restart outlook.
-   Open Logs Folder – As explained in Troubleshooting section, ReadOut maintains logs for errors that it encounters. You can now directly open the logs folder using Help \> Open Logs Folder … context menu option.
-   Updated Outlook scripts for Jaws 13 users – Jaws 13 does no longer let you use navigation quick keys (like H for headings) on virtual document inside Outlook. However, I have made that possible by Jaws scripting and ReadOut installation will attempt to install the same Jaws scripts for Outlook 2010. As of now, installation takes a backup under enu\\backup\\[installation time] folder for any Outlook 2010 scripts it encounters and then creates scripts it has. So if you have customized Outlook scripts, you would manually need to merge them back from the backup folder. Let me know if you need any info on these scripts by contacting me at varunkhosla [at] outlook dot com

Introduction
------------

ReadOut is an accessibility add-in for Microsoft Outlook 2010. Initially conceptualized out of the necessity to be able to read html formatted mails accurately through a screen Reader without having to resort to opening them into external browser application (View in Browser) or copying their text into notepad etc., it is now shaping into a playground to provide features for advanced accessibility needs of Outlook users. Specifically this means that what was complicated/difficult/impossible for Assistive Technology (AT) users to do in Outlook can be made absolutely simple by having it handled via ReadOut at a press of a keystroke.

ReadOut is built primarily using the Outlook Object Model. However, it is important to note that there are a number of accessibility features provided (now or in future) by ReadOut that are not possible via Outlook Object Model because the model doesn’t expose relevant APIs to do so. In such cases, ReadOut may employ a technique known as Win32 hack. Since this is not natively supported by the model therefore features implemented as such may generate errors/crashes (but they do work most of the time!)

Features
--------

Following are the features supported by ReadOut in this version.

ReadOut Reading outlook items
-----------------------------

It is often a great pain to read formatted mails (especially ones with tabular layout), Lync conversations (in the conversation history) and sometimes meeting requests (lot of tabbing to learn location/time/body). Now with a unified, website like interface, ReadOut Reader makes reading every kind of Outlook item a snap. To access ReadOut Reader:
 The focus must be on the item within the folder listbox (and not within the preview/reading pane) you want to read.

1.  Press r. or
2.  Press application key and choose ‘ReadOut’ by pressing up-arrow or ‘O’ from the context menu just appeared.

My design goal of Reader is to make available information related to an item concisely but in a meaningful manner. Plus if you can read important things quickly – without tabbing back and forth – that could save you some seconds and mussel stress.

When ReadOut Reader is opened the focus is on the virtual document (an embedded WebBrowser control). It lays the item as follows:

            Subject (importance) (importance is only displayed if not normal) – a clickable text
            By sender at time date
            Attachments (count) (displayed only obviously when there is at least one)
                    Body

The subject is a toggling text – it expands/collapses “extended header information” that is essentially “To” and “CC” as you press the space key over it. This extended information is rendered above the attachments link.

The “attachments” is a toggling link that expands/collapses a list of available attachments under it as you click it. Each attachment is rendered as a link and opens a context menu if activated with the following options:

1.  Open – Opens the attachment in the respective application designated to handle this type of files in your machine. E.G. .docx are opened in MS Word.
2.  Save – Opens a Save as dialog to let you save the attachment.
3.  Save and Open – performs the action number 2 and 1 mentioned above in one shot.

Note: as of now images that are embedded within the mail body also appear under attachments. Since all embedded media essentially travels as attachments along with a mail, I have intentionally left the extra processing of filtering out embedded-only items – may be someone would like get his hands on them too (E.G. For OCR purposes).

The header information for meeting item contains two additional lines:

        From time to time
        At location

These come just above the place for attachments (even if extended header information is on).

Reader Context Menu Commands
----------------------------

The ReadOut Reader is not just about reading a mail/other outlook item. In fact, it has many functions similar to that of Reading/preview pane of Outlook explorer. Each of these functions has its own shortcut key. However, you can explore them individually by pressing the application key (right clicking) on the virtual document.

1.  Open in Outlook Default Alt+O – This opens up the item in the same window that is opened when you press enter on item in the folder listbox.
2.  Reply Alt+R
3.  Reply All Alt+A
4.  Forward Alt+F
5.  Delete – the next item is loaded automatically.
    1.  Current (Del) – Deletes only the current mail.
    2.  Entire Conversation (Ctrl+Shift+Del) – delete all the mails in a conversation related to the current item.

6.  Next Ctrl+\>
7.  Previous Ctrl+,
8.  Reload F6 – Handy if you think your screen Reader is stuck with the old item. This will cause a refresh of the embedded WebBrowser and the screen Reader should get it this time. Note the shortcut key is F6 rather than the usual F5 because in my testing Jaws was experiencing blackout when pressing F5.
9.  Conversation View – Learn about this in the next section.
10. Close (escape)
11. Settings
    1.  Extended Header Information (persisted setting) – if you’re reding this readme carefully, you would know what is Extended Header Information. This is a checkbox if selected, will always render the header in expanded state (the toggling subject will still work, only the state of initial expansion is reversed – from collapsed to expanded.)
    2.  Skip Related Items in Conversation View (persisted setting) – More about this in the next section.
    3.  Don’t automatically close previously opened Reader window (persisted setting) – Controls whether ReadOut would let multiple Reader windows be opened at a given time. If unchecked (the default), ReadOut automatically closes all the prior Reader windows as soon as you open a new Reader window. If you check it, ReadOut would not interfere and you have to manually close every Reader window you open.

12. Help
    1.  Readme – Opens this document.
    2.  About ... – Shows the ReadOut About dialog. Do give your feedback!
    3.  Open Logs Folder … – opens the logs folder.

A “persisted setting” is one whose most recent state is persisted therefore remembered even across outlook restarts – so if you change such settings, the new value will become the default for the program.

Note: there are a couple of problems with Next/Previous. However, this is because the Outlook object model lacks in this area, so I’m not the one to blame for!

1.  These commands take you to the other items without having to go back to the listbox, choose a different item, and then open Reader again. However, when you go back to the folder listbox, the item selected internally is the same you’re viewing on the Reader; but, the listbox strangely doesn’t recognize this and is stuck with the item for which you last opened the Reader. Consequently, when you tab to reading/preview pane or press the enter/application key, things work for the item you’re just viewing, but when you use arrow keys, listbox moves next/previous to the item for which you last opened the Reader. Apparently the listbox is not in sync with the changes in the object model selection property.
2.  These commands do not work expectedly in the Conversation View, simple. Well, I think I have got a better accessible Conversation View below.

Conversation View
-----------------

The Conversation View for Outlook is extremely inefficient at least from screen reader’s standpoint. Why? Because one has to do back and forth between different mails within a conversation which is slow (loading takes time). What if the entire conversation is presented as a single mail on the webpage where each item is separated structurally with heading tag? Yes you’ve got it. This is exactly the way ReadOut Reader Conversation View is rendered.
 The context menu option – Conversation View – is a sub menu, with the following options:

1.  For All (ctrl+shift+i) (persisted setting) – sets Conversation View the default view to be used whenever an item is to be rendered.
2.  For This (ctrl+i) – rerender the current item using the Conversation View. Note this is disabled if For All is checked.
3.  In Reverse Order (persisted setting) – Sets how items in a conversation are rendered. The default is from earliest to latest – however you can make it otherwise with just this command.

Since Conversation View is just a way to render all the related items on a page, there’s not much difference in the layout. However some miner yet notable layout attributes of this view are:

        The subject is rendered only once with heading1 tag at the top and it is no longer a toggling element.
        The by sender field is expanded into:
        Sender (heading2)
        At time date
        In addition the sender (heading2) serves as a toggling element, to expand/collapse extended header information just for that item.

There’s one absolutely important thing to note: even if you are using a Conversation View, ReadOut Reader is operating with only one item (as current) behind the scenes. This means that when you use the commands like Delete/Next/Previous, they will operate the same way as for when not using Conversation View – Delete will delete the current item and not all the items within the conversation and similarly, Next will advance to the next item relative to the current one, even if that next item happens to be a part of the same conversation. You can learn which item is currently operated upon by ReadOut Reader by going to the only ARIA landmark within the webpage which says “currently selected mail”.

However, if the settings “Skip Related Items in Conversation View” is turned on (it is off by default), The Next/Previous commands will skip all the adjacent items in the same conversation and will stop and render the very first item it discovers that belongs to a different conversation.

ReadOut Other Features
----------------------

There are couple of small yet important features which I just added harnessing the power of keystrokes on folder listbox (that I got via win32 hack!). These work when and only when the focus is on some item with a sender within the folder listbox.

1.  Show contact card (n) – Displays the contact card immediately for the sender of the currently selected item. I believe there has to be a ribbon command for this and that can be placed somewhere closer rather than having to open the mail and right clicking the sender and then choosing the “Contact Card”! But, I found it easier to integrate this within ReadOut than doing it via ribbon.
2.  Start conversation (i) – Opens the Lync conversation window with the sender of the currently selected item and title as the item’s subject. This won’t work if you aren’t signed in within Lync.

Tips and Tricks
---------------

-   If for some strange reason, you find that the “r” key (on the folder listbox) stops working, you should restart Outlook. If still no luck – contact me.
-   Sometimes you may find that jaws loses focus of the webpage although you are sure that you’re on the Reader, in such case press alt+w or reload (f6) to make Jaws get back on track. This may happen when a new meeting item is loaded using Next/Previous commands.
-   One way of reading items one by one is using the Next/Previous commands. However, if you are fond of choosing an item to read from the Outlook folder listbox, the speediest process would be:

    -   Choose the item,
    -   Press r to open it in the Reader and read it.
    -   Press escape to go back to the listbox.

    This process may prove faster to you than moving between listbox and Outlook preview pane using tab/shift keys. Try this!

-   Use shift+enter to open a hyperlink in Internet Explorer. Since Reader render mails in an embedded WebBrowser control, if you press enter the page might get opened within the Reader itself and in such case, you cannot press backspace to go back to the mail (of course you can reload it – f6!)

Troubleshooting
---------------

ReadOut is being tested thoroughly (given the fact I myself is its everyday user!); however, given its dependency on environments such as add-on host and use of Win32 hooks that are beyond my control, it’s likely possible errors may be encountered once in a while. For this reason, error reporting and logging mechanisms have been built into the add-on such that you should receive an appropriate but brief error message as it occurs, which you can send to me. Most likely I may require more detailed error log in order to troubleshoot the issue. You should generally find these log files under your user settings\\appdata\\roaming\\Microsoft\\ReadOut\\logs folder. You can also open this logs folder directly from ReadOut Reader – choose context menu \> Help \> Open Logs Folder ….

Note: If you receive a message like the following as you start Outlook:
 “Just wanted to inform you that ReadOut couldn't fork logging capabilities because of the following problem: ... “ You should copy and send the entire message to me ASAP. This error suggests that detailed error logging cannot be started and thus no detailed logs would be prepared when some error occurs.

That’s it
---------

ReadOut is just in its infancy – it can go a long way with your kind support. So do not forget to provide your valuable feedback – be it a suggestion, an issue – at Varunkhosla [at] outlook email service.
