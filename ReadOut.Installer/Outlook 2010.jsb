JFW Script File                                                       �   � Outlook Functions 2010.jsb Outlook Functions Common.jsb Outlook Calendar 2010.jsb Outlook Calendar Common.jsb Word.jsb olUserOptions.jsb OutlookCustomSettings2007.jsb OutlookBraille2007.jsb D     isinribbons         getfocus      inribbons      	      T     $scriptfilename     Microsoft Outlook 2010    scriptandappnames             say           ismessageslist        %    
     stringsegmentcount       
  # �    %    MESSAGEVOICE      stringcontains  
     %     %    
     stringsegmentcount  
     %       
  '     %    
   %    stringsegment   '     %   <VOICE NAME="MESSAGEVOICE">   stringcontains         Message    %    smmstripmarkup  %    sayusingvoice            %  %  %    say        �            	            %   %  %    say    	      `    infobarshowevent       $  gioutlookinfobarverbosity        	         %           getwindowtext      %   &  ghoutlookinfobar       %    Info Bar         %  %  %    getobjectinfobyname       %    stringisblank         %           getwindowtext   '        %         say    %  &  gsinfobarcontents      h     infobarhideevent            null    &  ghoutlookinfobar         &  gsinfobarcontents      �    ismessageslist          getfocus      isinoutlookmainwindow           getfoldertype   '   %     " � %        
  
  " � %        
  
  " � %        
  
  " � %        
  
          dialogactive              getfocus    '     %    getcontrolid    '     %    getwindowclass  '  %   SUPERGRID   
  # |%    `  
  
             	                        	      X    istaskslist         getfocus      isinoutlookmainwindow           getfoldertype   '   %        
          dialogactive              getfocus    '     %    getcontrolid    '     %    getwindowclass  '  %   SUPERGRID   
  #  %    `  
  
             	                        	      0    isnavigationpane            getfocus      getsubtypecode  '   %             getobjectsubtypecode    '              getfocus      getwindowclass   NetUIHWND   
     %     8   
  " � %        
  
  "  %     /   
  
             	                  	      �    ismessagetextwindow       %     getappmainwindow    '             getactiveconfiguration    stringlower          %    getowningappname     .          stringsegment     stringlower   stringcontains        %   msctls_statusbar32         findwindow          %    getwindowclass   Rctrl_RenWnd32  
     	                 	               	      |    isinoutlookmainwindow         %     getappmainwindow    '     %   MsoCommandBarDock          findwindow  '  %           %    getnextwindow     getwindowclass   MsoCommandBarDock   
        %    getnextwindow   '   �       %    getfirstchild         %    getwindowclass   Rctrl_RenWnd32  
     	                  	      �     iswindowadistributionlist         %     getwindowclass   SUPERGRID   
  # �    %     getcontrolid      �  
  
             	               	      �     ismessageselected        iscalendarview             	           getcharacterattributes    @   
     	          isinbackstageview        getancestorcount    '             getobjectsubtypecode         
  # �                getobjectsubtypecode      $   
  
  # �                getobjectsubtypecode      A   
  
             	            '  %  %   
             %    getobjectvalue   SLAB    
          '             %    getobjectsubtypecode      A   
  # �           %    getobjectname     stringisblank     
  # %       
  
          '             %    getobjectsubtypecode      A   
  # �           %    getobjectname     stringisblank   
  # �%       
  
          '     %       
  '      %       
             	               	      �     getrealwindow         %     getwindowsubtypecode         
        %     getparent   '     %    getwindowsubtypecode         
     %     	            %     getrealwindow      	      �    saytutorialhelphotkey             %     getrealwindow     getwindowname   '     %     getcontrolid    '     %   - Meeting     stringcontains  " �    %   - Appointment     stringcontains  
  "    %   - Journal     stringcontains  
                getcurrentobject        acckeyboardshortcut '     %    stringisblank           %         say               	         %   %    saytutorialhelphotkey      	      �    tutormessageevent       $  globalrealwindow         	         %     inribbons         %   %    tutormessageevent      	         %     getcontrolid    '            getobjectsubtypecode    '            shoulditemspeak '            shoulditemspeak '  %      
  # l   %     getwindowname    Owner:  
  
  # �%       
  " �%       
  
  
     	      %    �
  
  " �%        
  
  #    $  giismessage $  giistask      typeofitem   Message 
  
     	           iscalendarview          isnavigationpane    # �$  gbupdownnavigation  
     	         	  iscalendarviewappointmenteditbox      # �          getobjectsubtypecode         
  
  # ($	  gbfocuschangediscalledonsamewindow  
     	         %   %    tutormessageevent      	         %     getwindowsubtypecode      "   
  # �          getobjectsubtypecode         
  
        %   %    tutormessageevent      	            %     getrealwindow     getwindowname   '     %   - Meeting     stringcontains  " �   %   - Appointment     stringcontains  
  " �   %   - Journal     stringcontains  
  "    %     getwindowclass   RichEdit20WPT   
  
        %   %    tutormessageevent      	           ismessageslist  # |$  gbupdownnavigation  
     	         %   %    tutormessageevent         �    screenstabilizedevent           isvirtualribbonactive         %     screenstabilizedevent      	         %     getwindowclass   Invalid Window Handle   
                   getfocus      getappmainwindow     _WwB      findwindow    setfocus       	         %     getwindowclass   MerenguePane    
  # �           getfocus      getwindowname    Compatibility Mode    stringcontains  
                   getfocus      getappmainwindow     _WwG      findwindow    setfocus            &  gbwordiswindowowner    $  gbwordiswindowowner       %     screenstabilizedevent      	           getfocus    '     %    getwindowclass  '        %    getrealwindow     getwindowname   '  %           RedirectLostFocus          schedulefunction    &  gifocushasbeenlostid       $  advancedfindingitems          %     getwindowclass   SUPERGRID   
  # �%   SUPERGRID   
  
           &  advancedfindingitems          $  gireadfolderinfo       %   NetUIHWND   
        %        %   -     ����  stringsegment     stringlength         
    stringchopright '        %    getrealwindow    msctls_statusbar32    e     findwindowwithclassandid    '       iscalendarview             %    getwindowname          say       $  gireadfolderinfo         
  &  gireadfolderinfo    $  gireadfolderinfo         
              One unread message      %1 unread      $  gireadfolderinfo      inttostring   formatstring      saymessage        $  gireadfolderinfo                   %1 unread messages     $  gireadfolderinfo      inttostring   formatstring        %1 unread      $  gireadfolderinfo      inttostring   formatstring      saymessage                 &  gireadfolderinfo    	         %     screenstabilizedevent         H    doextramenuprocessing        getfocus    '   $  globalmenumode       
  # �       %     getappmainwindow     SUPERGRID     findwindow  
        %     getwindowsubtypecode             downarrow     typekey            menumodehook       	           doextramenuprocessing      	      l    redirectlostfocus        getfocus         $  globalcurrentcontrol      `  
        $  globalappwindow  SUPERGRID     `    findwindowwithclassandid    '      $  globalcurrentcontrol         
        $  globalappwindow  Button        findwindowwithclassandid    '      %         %     setfocus             	      �    loadnonjcfoptions       TableDescription      getnonjcfoption &  gitabledescription       �     getjcfoption    &  gbbrluseosm     AnnounceCellCoordinates   getnonjcfoption &  gbannouncecellcoordinates        `     getjcfoption    &  globaldetectlanguages        �    getjcfoption    &  gimsofficeheadingindication     MessageHeaderVerbosity    getnonjcfoption &  gioutlookmessageheaderverbosity     MessageSayAllVerbosity    getnonjcfoption &  gioutlookmessagesayallverbosity     MessageLinkCountIndication    getnonjcfoption &  gbmessagelinkcountindication        WarningMessageForBrowserOption    getnonjcfoption &	  gbwarningmessageforbrowseroption         loadnonjcfoptions         �    autostartevent       gettickcount    &  giticksinautostart        &  gbdialogfirstactivation         getappfilepath    getprogramversion   &  outlookversion          getfocus      getappmainwindow    &  ghoutlookwindow       &  gbdeletingmessagefromlist        &  gbfocushaschanged        &  gboutlookisactive   $  outlookhasrunbefore           getlocaledata           &  outlookhasrunbefore      �        
       
  &  gioutlookselctxbeforecaretmovebitflagordermask       loadnonjcfoptions            &  gbwordiswindowowner       &  gbactiveitemchanged       &  giappointmentfound        &  giviewchangehasspoken        resetmessageflagvariables            &  gideletegroupbyflag       &  ischeduledfunctionid          &  isuppresscheckforbold        &  gsspeechfilter       &  gsbraillefilter      braillerefresh        8    getdialogstatictext      getdialogstatictext '      %     stringisblank        %      	           getfocus    '     %    getrealwindow   '     %   RichEdit20WPT     findwindow       %      	         %    getfirstwindow  '  %  # |   %    getwindowsubtypecode         
  " x   %    getwindowsubtypecode      +   
  
  
     %      %        
  '         %          getwindowtext   '     %    stringisblank        %   %  
  '         %    getnextwindow   '      %      	      l    saywindowtypeandtext       %           getfocus      getrealwindow   
        %     saywindowtypeandtext       	           ismultipagedialog         %     saywindowtypeandtext       	         %     saywindowtypeandtext          %    RichEdit20WPT     findwindow             getdialogstatictext        say          x    focuschangedeventex          $  gifnschedulespellcheckinfo        $  gifnschedulespellcheckinfo    unschedulefunction           &  gifnschedulespellcheckinfo        %     forcefocustoworddocumentwindow     	           &  gsbrlmessageitem          &  gihasaddressautocomplete         &  gsbrlautocomplete      %     inribbons   &  gbinribbons %  &  globalprevfocus       &  gbwordiswindowowner      inhjdialog     $  gbactiveitemchanged # (     getobjectsubtypecode         
  
        %   %  %  %  %  %    activeitemchangedevent     	            &  gbactiveitemchanged          %     getwindowclass  '       getobjectsubtypecode    '     %     getwindowsubtypecode    ' 	      dialogactive    # T   %     getwindowclass   SUPERGRID   
  
  # �   %     getwindowtypecode        
  " �   %     getwindowtypecode        
  
  " �   %     getwindowtypecode        
  
    
  #      iscalendarview    
     %   %  
  # <%  %  
  
  # P%  %  
  
  # �   %     getwindowsubtypecode         
  
  # �         %     getrealwindow     getwindowname    Spelling      stringcontains    
     	              isnavigationpane       %    8   
     %   %  
        %   %  %  %  %  %  %    activeitemchangedevent     	         %   %    focuschangedevent      	         %       
     	               %     getwindowowner   wwlib     stringcontains  # X%   _WwN    
  " T     indocument  
  
          &  gbwordiswindowowner    $  gbwordiswindowowner   # �     userbufferisactive    
  # �     quicknavkeytrapping 
                quicknavstatechange          %   bosa_sdm_Mso96    stringcontains  " `$  gbinribbons 
  " �         %     getparent     getparent     getwindowclass   NetUIHWND   
  
        %    getwindowclass   Invalid Window Handle   
        %    screenstabilizedevent      	         %   %  %  %  %  %  %    focuschangedeventex    	              iscommonalertdlg    "  	     dialogactive    # �      %     getparent    RichEdit20WPT     findwindow  
  
     %        
        %   %    focuschangedevent      	         %     getwindowtypecode        
  # �	%   $  globalprevfocus 
  
        %   %  %  %  %  %  %    activeitemchangedevent     	         %   %  %  %  %  %  %    focuschangedeventex    	         $  gbwordiswindowowner         isactivedocumentprotected                 quicknavstatechange          %   %  %  %  %  %  %    focuschangedeventex    	           getmenumode      
  # % 	      
  
  # 0% 	   "   
  
        %   %  %  %  %  %  %    focuschangedeventex    	                   getobjectname    s     stringcompare         
        %   %    focuschangedevent      	           dialogactive    # 8     ismultipagedialog     
     %   %  
           %     getrealwindow     getwindowname    Select Names    
     	      %       
  " �%    8   
  
        %   %  %  %  %  %  %    activeitemchangedevent     	         %       
  " D%    8   
  
        %   %    focuschangedevent      	         %   %    focuschangedevent      	              ismultipagedialog   # �%    ����
  
  # H         %     getrealwindow     getwindowname    Spelling      stringcontains    
        %   %    focuschangedevent      	      % 	   "   
  # �     ismagicrunning  
  #    $  gspreviousitem            getobjectname          stringcompare         
  
          sayline         getobjectname   &  gspreviousitem  	           ismessageslist           &  gbmessagehasbeenread    %   %  
        %   %  %  %  %  %  %    activeitemchangedevent     	      %   %  
        %   %    focuschangedevent      	              iscalendarview     %   %  
  &	  gbfocuschangediscalledonsamewindow     %   %  %  %  %  %  %    focuschangedeventex    	           getcurrentcontrolid   �  
  # % 	      
  
        %   %  %  %  %  %  %    focuschangedeventex    	         %     ismessagetextwindow    %   RichEdit20WPT   
  # �   %    getappmainwindow       %     getappmainwindow    
  
        %   %    focuschangedevent      	      %      %     getrealwindow   
  # `%   Rctrl_RenWnd32  
  
  # �   %    MsoWorkPane        findwindow    
           %    #32770         findwindow    setfocus       	         %   %  %  %  %  %  %    focuschangedeventex    	            %     getappmainwindow      getwindowclass   Rctrl_RenWnd32  
  # �   %     ismessagetextwindow   
  # �     dialogactive      
  # �     menusactive   
        %   %  %  %  %  %  %    focuschangedeventex    	         %   %  %  %  %  %  %    focuschangedeventex       $    focuschangedevent          %          setglobals     $  globalrealwindow    '  $  globalrealwindowname    '  $  globalappwindow '  $  gifocushasbeenlostid          $  gifocushasbeenlostid      unschedulefunction        $  globalprevapp   %  
  # (%  %   
  
     $  globalappwindow $  globalrealwindow    
        %    saywindowtypeandtext            &  realwindowspoken                %    getwindowowner   wwlib     stringcontains  # ,   %     getwindowclass   RichEdit20WPT   
  
          &  realwindowspoken       $  globalprevrealname  %  
  " �$  globalprevreal  %  
  
     %   &  globalfocuswindow   %  %  
  # �%  %   
  
  " $  globalrealwindowname    $  globalprevrealname  
  
        %    handlecustomrealwindows      $  realwindowspoken            %    saywindowtypeandtext                         &  realwindowspoken    %   &  globalfocuswindow   $  globalprevfocus %   
  " �     iscalendarview  # <     isinbackstageview     
  # `     ribbonsactive     
  # �     menusactive   
  
        %     handlecustomwindows           sayfocusedwindow                  sayfocusedobject             %           setglobals        �    handlecustomrealwindows         getfocus    '     %    getcontrolid    '     %    getwindowsubtypecode    '       initializeoutlookobjects            iscommonalertdlg    " �    %     getwindowclass   NUIDialog   
  
        %     handlecustomrealwindows    	           ismultipagedialog         %     saywindowtypeandtext               	           getwindowcategory        
  # �        getfocus      getwindowsubtypecode      B   
  
           %     getwindowname    :          stringsegment    :   
  '          %    indicatecontroltype            	      %    `  
  # �$  gbdeletingmessagefromlist   
             	         $  globalrealwindowname     Note      stringcontains              	      $  realwindowspoken    " �$  globalwindowclass    NetUIHWND   
  
             	         %     getwindowclass  '     %     getwindowname   '       dialogactive          $  globalrealwindow     RichEdit20WPT     findwindow  '  %  # |   %    getwindowsubtypecode      +   
  
  # �%    )   
  
           %                getwindowtextex             say            	              getcurrentcontrolid     
             	           ismessageslist              %     getappmainwindow      getwindowname          say            	               	      4    appointmentfieldprocessed      	  iscalendarviewappointmenteditbox    '   %           getol2007appointmentday '          getcalendarview      
  # � %  $  gsprevappointmentday    
  
    saybriefappointmentdata            '     %  &  gsprevappointmentday    %      	      4    getsupergridlistitem           %     getcontrolid    '       getline '            getobjectname   '     %     getwindowsubtypecode    '            getobjectsubtypecode    '      Control %  %    getkeystate       %     iswindowadistributionlist         %          sendmessage         getline    	      %    e   
  " �     dialogactive    
          getline    	      %    `  
        %    stringisblank   #  %    6   
  
  # %       
  
        %                 getwindowtextex    	         %   .     stringcontains  # �   %         stringcontainschars   
        %                 getwindowtextex ' 	    % 	           getsystemlocaleinfo   stringcontains       % 	    	              	      %    6   
          uiarefresh                %    getmessageinformation   '       braillerefresh        %        stringcontainschars       %  	  stringfilteroutmessageinformation   '     %          ismessageslist  # �     getfoldertype     " �     getfoldertype        
  
  
          ismessageselected     # �%       
  
      Not Selected         
  %  
  '           %     	      %     	      �    handlecustomdialoguewindows       %     getwindowname   '     %                 getwindowtextex '            getobjectname   '            getobjectvalue  '     %     getowningappname    '     %     getwindowsubtypecode    '            getobjectsubtypecode    '     %     getcontrolid    '           %     getparent     getparent     getwindowsubtypecode         
     %    >   
              %     getpriorwindow    getpriorwindow    getwindowname   '           %     getnextwindow     getnextwindow     getwindowname   ' 	    %     %    stringlength      stringleft  ' 
    %     % 	   stringlength         
    stringright '  %  % 
 
        %  %    indicatecontroltype    % 	 %  
        % 	        say               	         %      
  " �%    �  
  
  " �%    �  
  
  # �%       
  
  # �   %    stringisblank   
        %  %          getmsaacolouratcombobox   getcolorname      indicatecontroltype            positioningroup        say            	      %      
  " �%    �  
  
  # �%    )   
  
  # �   %    stringisblank     
        %  %            getobjectvalue    indicatecontroltype            	         %   COMDLG32.dll    
  " �%   BROWSEUI.dll    
  
        %    stringisblank           sayobjecttypeandtext               	         %    )   
  # (   %    stringisblank     
        %  %  %    indicatecontroltype            	               	      �+    handlecustomwindows              getobjectname   '            getobjectvalue  '       dialogactive    # �    %     handlecustomdialoguewindows 
             	         %     saywindowtypeandtextricheditswithricheditprompts               	            &  gilinehasspoken    %     getwindowclass  '     %     getwindowname   '     %     getcontrolid    '     %     sayfocusedhjdialogwindow               	           iscalendarview    #  $  gbsaywindowpromptandtext      
  # D$  globalprevfocus %   
  
  # �   %   bosa_sdm_Mso96    stringcontains    # �   %   NetUIHWND     stringcontains    
  
             	         %     getcontrolid      `  
  # 0   %     getwindowclass   SUPERGRID   
  
          &  gbfocushaschanged        resetmessageflagvariables         $  globalrealwindow     MSCtls_Statusbar32    e     findwindowwithclassandid    &  ghstatusbar                     indicatecontroltype       %     isinoutlookmainwindow            %     getsupergridlistitem      
          say            sayobjectactiveitem               	         %     getwindowsubtypecode    '  %                 getobjectsubtypecode    '        %     getparent   '     %          getwindowtext   '     %    getwindowclass  ' 	 % 	  #32770  
     $  globalcurrentcontrol         
  # �$  gbdialogfirstactivation   
           %         finddescendantwindow                  getwindowtextex '     %          say         &  gbdialogfirstactivation             &  gbdialogfirstactivation    $  globalrealwindowname     Advanced Find   
  # %       
  
          sayline            	         $  globalrealwindowname     Advanced Options      stringcontains  # �$  globalcurrentcontrol        
  
           $  globalrealwindow          finddescendantwindow      saywindowtypeandtext               $  globalobjectname           indicatecontroltype            	         $  globalrealwindowname     Appointment   stringcontains     %    R  
  # �$  giobjsubtype          
  
                         indicatecontroltype            	      %    �  
             getobjectnameorvalue           say       %      
        %  %       getobjectvalue    indicatecontroltype            	      %      
        %            getobjectname             getobjectvalue    indicatecontroltype            	      %   RichEdit20WPT   
        %    stringisblank         % 
   getfocusobject  '  %     %            accvalue    '           %  %  %    indicatecontroltype            	         %     getwindowsubtypecode         
        %     handlecustomwindows    	      %       
  #    %     getcontrolid          
  
        %         %     getnextwindow     getwindowname     saycontrolex               	         $  globalcurrentcontrol         
  # �$  globalcurrentcontrol        
  
  # �   %   time:     stringcontains  
        %  $  globalobjectname           indicatecontroltype         sayline            	      $  globalcurrentcontrol      e   
  # �$  globalrealwindowname     Advanced Find   
  
     $  globalobjectname     Daily Task List 
             $  globalobjectname              getobjectvalue    indicatecontroltype            	           &  gbfocushaschanged   $  gbdeletingmessagefromlist            &  gbdeletingmessagefromlist           	           resetmessageflagvariables         $  globalrealwindow     MSCtls_Statusbar32    e     findwindowwithclassandid    &  ghstatusbar                     indicatecontroltype              checkfornomoreitems            	         $  globalfocuswindow     getwindowclass   SUPERGRID   
                  getobjectname    Appointment   stringcontains        %     getwindowright  &  giright    %     getwindowleft   &  gileft       &  gbiscalendarappointmentlist         gettickcount    &  messagelisthighlighttick    $  messagelisthighlighttick    $  prevmessagelisthighlighttick    
    �   
     	           sayline         gettickcount    &  prevmessagelisthighlighttick            sayline               	            %     iswindowadistributionlist         %     ����% 
 %    getobjectfromevent  '     %  %            accname    %     getsupergridlistitem      indicatecontroltype            	      %   $  ghreminderdialog    
     $  globalprevfocus $  ghreminderreturn    
        %    �     finddescendantwindow    '  %        %    setfocus                  	         %   REListBox20W    
     $  globalcurrentcontrol      1  
  " H$  globalcurrentcontrol         
  
          sayobjectactiveitem            	            $  globalrealwindowname     Rules Wizard      stringcontains  "     $  globalrealwindowname     Rules and Alerts      stringcontains  
     %       
          sayline            	      %   REListBox20W    
     $  globalcurrentcontrol      �  
             %            getobjectstate       
  $  globalobjectname    
    indicatecontroltype            	      $  globalcurrentcontrol      �  
              Step 2: Edit the rule description (click an underlined value)          indicatecontroltype                 getobjectname          say            	               $  globalrealwindowname     Recurrence    stringcontains     %       
     $  globalcurrentcontrol      2   
  " �$  globalcurrentcontrol      Z   
  
  " $  globalcurrentcontrol      x   
  
  " <$  globalcurrentcontrol      3   
  
  " l$  globalcurrentcontrol      [   
  
  " �$  globalcurrentcontrol      y   
  
          $sayline            	                 inhjdialog        %     saywindowtypeandtext               	      $  globalrealwindowname     Advanced Find   
     $  globalcurrentcontrol        
          &  advancedfindingitems       $  globalcurrentcontrol        
  # �$  advancedfindingitems    
          gotofounditems                iscalendarview     %   AfxWndW 
     $  gbupdownnavigation  " �$  gbleftrightnavigation   
        %     calendarpropertieschangedevent             	      %            initializeoutlookobjects               setcalendarpresets          appointmentfieldprocessed               	           dialogactive                   getobjectname    s   
               getobjectsubtypecode         
     $  globalprevfocus %   
        %            getobjectname     indicatecontroltype                     getfocus      getparent     setfocus                 readcalendarinformation               	           &  gbcalendarhasspoken      &  gscurrentdaterange       &  gsdatetoprocess      &  gspreviousdatetoprocess      &  giviewchangehasspoken         &  gbfocushaschanged                getobjectname          say         maximizewindow               readcalendarinformation            	            %   NetUIHWND   
  " �%   RichEdit20W 
  
     %       
  # �     getcalendarview      
  
        %    getfocusobject      accparent          %    accnavigate '     %    %    accname        say         saytreeviewitem            	         %    /   
  " �%       
  
  " �%       
  
  " �%       
  
          sayline       %    :   
        %            getobjectname     indicatecontroltype       %    8   
                    getobjectsubtypecode         
                            getobjectname     indicatecontroltype         saytreeviewitem            	                     getobjectsubtypecode         
                            getobjectname     indicatecontroltype         saytreeviewitem            	         %    /   
  " "%       
  
  " $"%       
  
  " <"%       
  
          sayline       %    :   
        %            getobjectname     indicatecontroltype               	            $  globalrealwindow      getwindowname    Task      stringcontains  # L#   %     getcontrolid        
  
        %            getobjectname        getline   indicatecontroltype            	         %     getcontrolid        
  # �#%    )   
  
          sayobjecttypeandtext               	         %     getcontrolid        
  # t$%    B   
  
          sayobjecttypeandtext               	               %     getrealwindow     getwindowname    Addressing    stringcontains  # <%%    �  
  " 8%%    �  
  
  
  # T%%       
  
        %            getobjectname      %           getwindowtext     indicatecontroltype            positioningroup        say            	            &  gbdeletingmessagefromlist        isnavigationpane    " �&     dialogactive    # �&     inhjdialog    
  
  # �&          getobjectsubtypecode      8   
  " �&   %     getwindowsubtypecode         
  
  
          isnavigationpane                      getobjectsubtypecode         
                            getobjectname          indicatecontroltype                      getobjectsubtypecode         
                            getobjectname          indicatecontroltype                           indicatecontroltype            saytreeviewlevel                              indicatecontroltype         saytreeviewitem               	      %    �  
  # L)%       
  
        %     %     getwindowname        getline   indicatecontroltype            	      %   SUPERGRID   
  # �)%    �  
  
           %     getrealwindow    RichEdit20WPT     �    findwindowwithclassandid    '  %        %                getwindowtextex '             %     %           getsupergridlistitem      indicatecontroltype            	         %     ismessagetextwindow # (+%      
  
        % 
   getfocusobject  '     %  %  %            accvalue      indicatecontroltype            	               	          sayfocusedwindow    $  gbwordiswindowowner         sayfocusedwindow       	           ispccursor        $  globalrealwindowname     Customize View:   stringcontains  # $  globalcurrentcontrol         
  # $  globalcurrentcontrol        
  
  
          savecursor          routeinvisibletopc          invisiblecursor                 getline        indicatecontroltype         restorecursor      	      $  globalcurrentcontrol      �
  
        $  globalrealwindowname     Appointment   stringcontains           $  globalfocuswindow     getwindowtype               say    	                 iscalendarview     $  gbcalendarhasspoken            &  gbcalendarhasspoken      readcalendarinformation       	      $  globalcurrentcontrol        
          $sayline    	         $  globalrealwindowname      - Task       stringcontains          sayobjecttypeandtext       	           sayfocusedobject          �    setglobals      %     %   &  globalfocuswindow      $  globalfocuswindow     getrealwindow   &  globalrealwindow       $  globalrealwindow      getwindowname   &  globalrealwindowname       $  globalfocuswindow     getappmainwindow    &  globalappwindow    $  globalappwindow   getwindowname   &  globalappwindowname    $  globalfocuswindow     getcontrolid    &  globalcurrentcontrol       $  globalfocuswindow     getwindowclass  &  globalwindowclass         &	  gbisaddressautocompletelistvisible            getobjectsubtypecode    &  giobjsubtype              getobjectname   &  globalobjectname       $  globalcurrentcontrol    &  globalprevcontrol   $  globalrealwindow    &  globalprevreal  $  globalrealwindowname    &  globalprevrealname  $  globalappwindow &  globalprevapp   $  globalfocuswindow   &  globalprevfocus $  globalobjectname    &  globalprevobjectname          T
    sayfocusedobject    $  gbwordiswindowowner            getcurrentwindow      handlecustomspellcheckwindows      	           sayfocusedobject       	           getfocus    '      %     getcontrolid    '     %     getwindowclass  '            getobjectsubtypecode    '     %     getwindowsubtypecode    '     %     getwindowname   '     %   bosa_sdm_Mso96    stringcontains  "          %     getparent     getwindowclass   bosa_sdm_Mso96    stringcontains  
          sayobjecttypeandtext       	         $  globalrealwindowname     - Meeting     stringcontains     %      
         When:          say       %      
         Location:          say            sayfocusedobject       	         %     getwindowclass   NetUIHWND   
     $  globalmenumode        $  globalobjectname            say    	      %    8   
     $  globalrealwindowname     Trust Center    
  # $  giobjsubtype      7   
  
                         indicatecontroltype                  sayobjectactiveitem    	         %   <<  
  # �$  globalcurrentcontrol        
  
         Auto pick previous         say          $  globalrealwindowname     Format Columns    stringcontains  # �   %   Width:    stringcontains  
        %  %         indicatecontroltype         sayobjectactiveitem          $  globalrealwindow           finddescendantwindow            saywindow      	              getfocus      getwindowclass   supergrid   
          sayline    	         $  globalrealwindowname     - Contact     stringcontains     %    	  
  " %      
  
  " <%    
  
  # 8%      
  
  
     %    	  
      Address types   &  globalobjectname          %  $  globalobjectname           indicatecontroltype    	      %       
        %            getobjectname          indicatecontroltype    	         %    +   
  # h%   AfxWndW 
  
     %    m   
  # �      %     getparent     getwindowclass   NetUICtrlNotifySink 
  
                  getobjectvalue         say    	      %    # �	         %     getparent     getparent     getwindowclass   NetUICtrlNotifySink 
  
        %            getobjectname             getobjectvalue    indicatecontroltype    	         %        %     saywindowtypeandtext               sayfocusedobject                 saynonhighlightedtext       $  gbwordiswindowowner       %   %    saynonhighlightedtext      	         %     getwindowclass  '     %     getwindowsubtypecode    '  $  nsuppressecho        
     	           dialogactive      # $$  globalmenumode    
     %       
             getfocus      getwindowsubtypecode         
        %   ,     stringcontains        %   ,          stringsegment   &  gsunredmsgs    $  gsunredmsgs   ,     say            &  gsunredmsgs             %   OpenListView    
     $  globalsuppressopenlistview        %     saywindowtypeandtext             &  globalsuppressopenlistview  	            %   %    saynonhighlightedtext         �    preprocesskeypressedevent         $  gbwordiswindowowner       %   %  %  %    preprocesskeypressedevent      	         %   %  %  %    preprocesskeypressedevent   '  %    # �      inhjdialog    
  #      userbufferisactive    
          getfocus    '  %     H   
  # X%     P   
  
           &  gbupdownnavigation     %     K   
  # �%     M   
  
           &  gbleftrightnavigation      $  gidateisentered #     %    getwindowsubtypecode         
  
  # <$  ghcalendarpane  
         0123456789  %    stringcontains         %1%2    $  gsdateentered   %    formatstring    &  gsdateentered      $  gsdateentered     stringlength         
             	            $  gidateisentered   unschedulefunction           &  gidateisentered      cleardateflag         %    typekey            	            &  itrigger          &  itreeviewspoken    %     	      ,	    processspacebarkeypressed         $  gbwordiswindowowner       %   %  %  %    processspacebarkeypressed      	           getfocus    '  $  globalmenumode        
  " �      userbufferisactive  
  "    %    inoptionsdialog 
        %   %  %  %    processspacebarkeypressed      	                getobjectsubtypecode    '     %    getcontrolid    '     %   %  %    keyisspacebar   '  %          inhjdialog          &  gbactiveitemchanged    %   %  %  %    processspacebarkeypressed      	         %    getwindowsubtypecode         
        %   %  %  %    processspacebarkeypressed      	      $  globalrealwindowname     Trust Center    
     $  giobjsubtype         
                    delay         $  giobjsubtype              getobjectname          indicatecontroltype               	      $  globalcurrentcontrol        
               delay           gotofounditems           $  globalwindowclass    REListBox20W      stringcontains  # �$  globalcurrentcontrol         
  
               delay           $sayline            	           ismessageslist  " $  globalcurrentcontrol      m   
  
              Selected      sayformattedmessage         sayline            	         $  globalrealwindowname     Rules Wizard      stringcontains  "    $  globalrealwindowname     Rules and Alerts      stringcontains  
        %    getwindowsubtypecode         
  " d%    7   
  
  # �$  globalcurrentcontrol      �  
  " �$  globalcurrentcontrol      �  
  
  
          msaarefresh                   delay           sayline            	            %    getwindowclass   bosa_sdm_Mso96  
  # �$  globalrealwindowname     Customize   
  
               delay                   getobjectname           say              getcontrolattributes         
                    indicatecontrolstate                    getcontrolattributes         
                    indicatecontrolstate                  	            %   %  %  %    processspacebarkeypressed      	      �    processkeypressed                 getfocus      getwindowclass   Internet Explorer_Server    
          getfoldertype        
          msaarefresh          %   %  %  %    processkeypressed      	         %    stringlength    '     %   LeftShift     stringstartswith    " �   %   RightShift    stringstartswith    
  " �   %   Shift     stringstartswith    
  '  %       
  # %       
  " �%       
  
    " %    
  
        %          '     %     %   +     stringcontains       
         substring   '          '  %  '     %   t   
        %    movetotable '     %   h   
        %          movetoheading   '     %   u   
        %    movetounvisitedlink '     %   v   
        %    movetovisitedlink   '     %   g   
        %   img   movetotag   '     %   l   
        %    movetolist  '     %   ;   
        %    movetolandmark  '     %   q   
        %   blockquote    movetotag   '     %   .   
        %            stepoutofcurrentelement '     %   n   
              not available     saymessage     	      %   enter   
     	      	      %          sayline                not found     saymessage           h    autofinishevent      outlook_calendar::dereferenceoutlookobjects         &  gscurrentdaterange        &  gbwordiswindowowner       &  gboutlookisactive   $  ghnull  &  ghreminderreturn    $  gimsaalevel &  gimiscellaneousflag $  ischeduledfunctionid          $  ischeduledfunctionid      unschedulefunction              &  isuppresscheckforbold        &  globalprevcalendarday        &  gsdatetoprocess      &  gspreviousdatetoprocess       &  giticksinautostart        &  gifieldhasspoken          &  gbactiveitemchanged       &  gbmessagehasbeenread       �
    sayhighlightedtext      $  gbwordiswindowowner       %   %    sayhighlightedtext     	            &  gihasaddressautocomplete         &  gsbrlautocomplete      %     getwindowsubtypecode    '            getobjecttypecode   '       ismessageslist     	      %    )   
  # h%    7   
  " d%       
  
  
           %     getrealwindow     getwindowname    Font    
        %    +     say    	              getfocus    '  %  %   
  # 8   %     getwindowclass   ComboLBox   
  
        %    getwindowsubtypecode      )   
        %     %         getwindowtext     stringcompare         
        %    +     say       	         %       
  # %       
  
  # $%    
  # d   %     getowningappname     BROWSEUI.dll    
  
                  getobjectvalue    
     say    	      %       
  " �%    )   
  
  " �$  giinappointmentfield    
     	         $  globalrealwindowname     Rules Wizard      stringcontains  " �   $  globalrealwindowname     Rules and Alerts      stringcontains  
             getcurrentwindow      getwindowsubtypecode         
  # H$  globalcurrentcontrol      �  
  " D$  globalcurrentcontrol      �  
  
  
     	            %     getcontrolid    '  %    `  
  " �%    e   
  # �%   SUPERGRID   
  
  
     	      $  globalcurrentcontrol      R  
     %  &  gsschedulemeetingitem      %         say    	           &  gsschedulemeetingitem      $  globalmenumode        %    +     say    	      $  itrigger       	      $  advancedfindingitems       	      $  gideletegroupbyflag          &  gideletegroupbyflag 	           getfocus    '       getcurrentwindow    '     %    getwindowsubtypecode    '     %     getwindowsubtypecode    '     %     getwindowclass  '     %    getcontrolid    '  %   REListBox20W    
     $  globalcurrentcontrol         
          $sayline    	         $  itreeviewspoken   # �%       
  
     	           dialogactive       $  globalrealwindowname     Spelling    
     %       
  # 	%   %  
  
        %    +     say       %    spellstring    	            %   %  
  " |	%       
  
     $  globalcurrentcontrol      �2  
  " �	$  globalcurrentcontrol      �2  
  
     	         %   %    sayhighlightedtext     	      $  globalmenumode  # \
     getobjectsubtypecode      $   
  
  # t
%       
  
  " �
%    "   
  
        %    +     say          �    newtexteventshouldbesilent               %     getwindowsubtypecode    '     %     getcontrolid    ' 	    %    getwindowclass  ' 
 $  gbwordiswindowowner       %   %  %  %  %  %  %  %    newtexteventshouldbesilent     	      %  %   
     %       
  # �$  globalobjectname     Members List    
  " �$  globalobjectname     Views   
  
    
  " �%       
  
  " �%    %   
  
  " �%    &   
  
  "  %       
  
             	         % 
  ComboLBox   
              	            %   %  %  %  %  %  %  %    newtexteventshouldbesilent     	      h    processspeechonnewtextevent              %     getcontrolid    '  $  gbwordiswindowowner       %   %  %  %  %  %  %  %    processspeechonnewtextevent    	           ismessageopenforediting # $   %    getwindowclass   NetUIHWND   
  
  # l%      
  " P%      
  
  " h%      
  
  
     %  # �%    ��� 
  
           %         getwindowtext     +     say    %  &  gsbrlautocomplete        &  gihasaddressautocomplete    	            %   %  %  %  %  %  %  %    processspeechonnewtextevent       �     getnumberofattachments       getattachmentcount  '   %      %        
      One Attachment  '         %1 attachments     %     inttostring   formatstring    '             '     %     	      �Y    $screensensitivehelp         issamescript            )     appfiletopic       	      $  gbwordiswindowowner         $screensensitivehelp    	           isvirtualribbonactive      $  globalmenumode       
             
  showscreensensitivehelpforvirtualribbon       $  globalmenumode       
              
  showscreensensitivehelpforvirtualribbon       	           getcurrentwindow    '        getfocus    '     %     inribbons           $screensensitivehelp    	      $  globalmenumode     $  globalmenumode       
             	  screensensitivehelpforknownclasses             $   	  screensensitivehelpforknownclasses        	           getcontrolname  '        %     getrealwindow     getwindowname   '     %     getcontrolid    '          getcurrentwindow      getwindowsubtypecode    '  %            getobjectsubtypecode    '        	  screensensitivehelpforjawsdialogs      	         %   Note      stringcontains  # 4%    B   
  
        77 Use standard editing and reading commands within this note.
To save and close, press ESC.
More options are available from the system menu accessed with ALT+space,
or the context menu accessed with the applications key.    showscreensensitivehelp    	           isnavigationpane            (   �� This is the Outlook Navigation pane.
The items displayed in this pane change depending on which view you have selected.
Some of the items found in the navigation pane include radio buttons, tree view items and links.
Use the UP and DOWN ARROW keys, or first letter navigation, to move through the list of items.
Press the SPACEBAR to select a tree view item in the list.
To expand the selected tree view item, press RIGHT ARROW.
To collapse the tree view item, press LEFT ARROW.
Press the SPACEBAR to select the desired radio button in the list.
Press the SPACEBAR to activate the desired link in the list.    sayformattedmessage         addhotkeylinks     	           userbufferisactive          userbufferdeactivate            (   mm Navigate messages displayed in the virtual viewer with standard reading commands.
Read by line, Word, or character.
Select text with standard commands and copy it to the clipboard.
To activate a link, move to it and press ENTER.
To list all links in a message and select the link you want to use, press Insert+F7.
Links take you to other messages or activate commands in the application you are using.

Press ESC to close this message.   sayformattedmessage    	         %   Folders - Microsoft Outlook   stringcontains          (   66 This is the Outlook Today window.  It is in HTML format, therefore the same commands that are used in a web page are used here.  Use the tab and shift tab to move between links and the enter key to activate link.     Outlook Today Window.  This window is in HTML format.  Use Tab and shift tab to navigate links.  Enter activates.     sayformattedmessage         addhotkeylinks     	            %    getappmainwindow      getwindowname   '  %    `  
  " �   %   Contacts      stringcontains  
  " �   %   Tasks     stringcontains  
        $  globalobjectname     Appointment   stringcontains        MM This is the Outlook Appointment list.
Use %1 and %2 to move up and down through the list, and %3 to open an appointment for editing.
Use Control+N to dcreate  appointment.
Use Delete to delete the current Appointment.
In Outlook 2002 or later, to hear the MSAA data for the current Appointment, press %4.        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '     ?? Outlook Active Appointment list.
%1 and %2 moves through the list, %3 to open Appointment for editing.
Control+N to create new Appointment.
Delete deletes current Appointment.
In Outlook 2002 or later:
Announce MSAA data for current Appointment, %4.       SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '        $  globalobjectname     Contact   stringcontains        HH This is the Outlook Contact list.
Use %1 and %2 to move up and down through the list, and %3 to open a Contact for editing.
Use Control+N to create a new Contact.
Use Delete to delete the current Contact.
In Outlook 2002 or later:
To hear the MSAA data for the current Contact, press %4.     SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '     55 Outlook Contact list.
%1 and %2 moves through the list, %3 to open Contact.
Control+N to create new Contact.
Delete deletes current Contact.
In Outlook 2002 or later:
Announce MSAA data for current Contact, %4.      SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '        $  globalobjectname     Task      stringcontains        EE This is the Outlook Task list.
Use %1 and %2 to move up and down through the list, and %3 to open a Task for editing.
Use Control+N to create a new Task.
Use Delete to delete the current Task.
In Outlook 2002 or later:
To hear the MSAA data for the current Task, press %4.        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '     11 Outlook Task list.
%1 and %2 moves through the list, %3 to open Task.
Control+N to create new Task.
Delete deletes current Task.
In Outlook 2002 or later:
Announce MSAA data for current Task, %4.     SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '        %   Notes     stringcontains        EE This is the Outlook Notes list.
Use %1 and %2 to move up and down through the list, and %3 to open a Notes
for editing.
Use  Control+N to create a new Note.
Use Delete to delete the current Note.
In Outlook 2002 or later:
To hear the MSAA data for the current Note, press %4.     SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '     22 Outlook Notes list.
%1 and %2 moves through the list, %3 to open Notes.
Control+N to create new Notes.
Delete deletes current Note.
In Outlook 2002 or later:
Announce MSAA data for current Note, %4.      SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '        $  globalobjectname     Message   stringcontains        �� This is the Outlook Message list.
Use %1 and %2 to move up and down through the list, and %3 to open a message for reading.
If using braille to read the opened message, you may want to toggle the Read messages automatically setting off via the verbosity menu.
Use Control+R to reply to the current message, or Control+N to create a new message.
Use Delete to delete the current message.
In Outlook 2002 or later, to hear the MSAA data for the current message, press %4.
Note: If you have the Reading Pane enabled in the View menu, it needs to be set to display on bottom, rather than the default.        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '     OO Outlook Message list.
%1 and %2 moves through the list, %3 to open message.
Control+R to reply to current message, or Control+N to create new message.
Delete deletes current message.
In Outlook 2002 or later:
Announce MSAA data for current message, %4.

Note: If Reading Pane enabled, set it to display on bottom.       SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayMSAAData   getscriptkeyname        AdjustJawsVerbosity   getscriptkeyname      formatstring    '       brailleinuse       %   
   
   
   
  EE If using braille...
Outlook Structured Braille Flags:
To Add or Remove flags,
1. Open the Braille Options dialog within the JAWS Settings Center.
2. Select Define Structured Mode....
3. Select a Control type.
4.  Select Modify...
5.  Add or Remove from the Show on... list.   
   
   
  �� Outlook Message List Braille Flags are selected for the Listbox control type:

unrd = Message Unread.
atch = Message Attachment.
rpd			Message Replied To.
fwd = Message Forwarded.

The Show Importance Flag controls the following flags:
ih = Message Importance High.
il = Message Importance Low.

The Show Message Status Flags controls the following set of flags:
flg = Message Flagged.
flwup = Follow Up Message.
fo = Follow up status: Orange.
fr = Follow up status: Red.
fb = Follow up status: Blue.
fg = Follow up status: Green.
fy = Follow up status: Yellow.
fp = Follow up status: Purple.
fcmp = Follow up status: Completed.

The Show Meeting Status flag controls the following:
mreq = Meeting Requested.
mcncld = Meeting Cancelled.
macpt = Meeting Accepted.
mtnt = Meeting Tentative.    
  '  %   
   
   
   
  EE If using braille...
Outlook Structured Braille Flags:
To Add or Remove flags,
1. Open the Braille Options dialog within the JAWS Settings Center.
2. Select Define Structured Mode....
3. Select a Control type.
4.  Select Modify...
5.  Add or Remove from the Show on... list.   
   
   
  �� Outlook Message List Braille Flagsfor the Listbox control type:
unrd = Message Unread.
atch = Message Attachment.
rpd			Message Replied To.
fwd = Message Forwarded.

The Show Importance Flag:
ih = Message Importance High.
il = Message Importance Low.

The Show Message Status Flags:
flg = Message Flagged.
flwup = Follow Up Message.
fo = Follow up status: Orange.
fr = Follow up status: Red.
fb = Follow up status: Blue.
fg = Follow up status: Green.
fy = Follow up status: Yellow.
fp = Follow up status: Purple.
fcmp = Follow up status: Completed.

The Show Meeting Status Flag:
mreq = Meeting Requested.
mcncld = Meeting Cancelled.
macpt = Meeting Accepted.
mtnt = Meeting Tentative.   
  '             (   %  %    saymessage          addhotkeylinks     	         %    - Message    stringcontains     %      
     ** This is the From field.
When reading a message, it contains the sender's name or address.
When replying or creating a new message, it contains your name or address.    '   When reading, contains sender's address.
When editing, contains your address.   '     %      
      This is the Sent/Date field.
It contains the date the message was sent to the recipient.    '  

 Contains the date the message was sent. '     %      
     AA This is the To field.
When reading a message, it contains the addresses the message was sent to.
When replying to a message, it contains the original sender's name or address.
When creating a new message, you enter the address you wish to send the message to. '  ++ When reading, contains the recipient's name or address.
When replying, it contains the original sender's address.
When creating a new message, enter recipient's address.   '     %      
     88 This is the CC Carbon copy field.
When reading, it contains the addresses of other recipients of this message.
When replying or creating, you can enter the addresses of anyone else you want to send a copy of this message.   '  (( When reading, contains the addresses of everyone that received a copy of this message.
When editing, enter addresses of everyone you wish to recieve a copy.    '     %      
     '' This is the Subject field.
When reading and replying, it contains the topic of the message.
When creating a new message, enter the topic of the message.    '   When reading, contains the topic of the current message.
When editing, enter the topic of your message. '     %       
      This button is to select recipients for  the To field.  '   For selecting recipients for the To field.  '     %      
      This button is to select recipients for  the CC carbon copy field.  '   For selecting recipients for the CC carbon copy field.  '     %      
          (       %1

Press LEFT or RIGHT ARROW to move to the previous or next attachment.
Press ENTER to open the current attachment.        getnumberofattachments    formatstring      sayformattedmessage         addhotkeylinks     	           (   %  %    sayformattedmessage         addhotkeylinks     	           getcalendarview       		You are focused within the Outlook Calendar.
You can select one of the four views with the following keystrokes:
Alt+Control+1 moves to the Day View.
Alt+Control+2 moves to the Work Week View, usually Monday through Friday.
Alt+Control+3 moves to the Week View, usually Sunday through Saturday.
Alt+Control+4 moves to the Month View.

While in the Day, Work Week, or Week views,use the following keystrokes:
%1 and %2 move to the previous and next days.
Press %5 to move to the time slot at the start of the work day, and %6 to
move to the time slot at the end of the work day.
When using %3 to move to the previous time slot, and %4 to move to the next time slot within the current day,
JAWS will announce all appointments associated with that time slot.
%7 will repeat the appointment at the current time slot.
%8 announces the currently focused date and view, and pressing the key twice quickly announces the current date range, when in Week or Work Week views.

While in the Month View, use %1 and %2 to move between days, %3 and %4 to move through weeks.     SayPriorCharacter     getscriptkeyname        SayNextCharacter      getscriptkeyname        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        JawsHome      getscriptkeyname        JawsEnd   getscriptkeyname        SayLine   getscriptkeyname        SayDate   getscriptkeyname      formatstring    '  %   
   
     ]]In all views:

%1 announces a summary of appointments and events within the current date or date range; pressing that key twice quickly places all the data for the current range into the virtual viewer.

When you move to a new date or date range, JAWS will announce if appointments exist within that range.  If in Day view, the appointment count will be announced for that day; if in Week or Month views, the appointment count will be for the current view's entire range.
If you type characters here, you will change focus to an edit box where you can make a note at the current time slot.

To hear the next appointment on the current day, press %2.  Press this key again to hear subsequent appointments.
To hear the prior appointment on the current day, press %3.
To exit an appointment field, either continue pressing one of these keys
or press %4 or %5, and the current calendar view will return.
These appointments are read-only edit boxes in which you cannot use standard editing and movement keys to navigate the text.
Pressing %6 while within one of these fields will take you to the Notes field of the current appointment.

Pressing %7 repeats the current appointment; pressing the key twice quickly places the appointment's data into the virtual viewer.

In the new appointment dialog, save  the appointment by pressing Control+S.
to both save and close the appointment, press Alt+S.        AppointmentsAndAttachments    getscriptkeyname        TabKey    getscriptkeyname        ShiftTabKey   getscriptkeyname        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayWindowPromptAndText    getscriptkeyname      formatstring    
  '     �� You are focused within the Outlook Calendar.
Select one of the four views:
Alt+Control+1 = Day View.
Alt+Control+2 = Work Week View.
Alt+Control+3 = Week View.
Alt+Control+4 = Month View.

In all but Month View:
%1 and %2 move to previous and next days.
%3 moves to start of the day; %4 to the end of the day.
When using %5 and %6 to move through time slot within the current day,
all appointments within that time slot get announced.
%7 repeats the current appointment.
%8 announces current date and view; twice quickly announces current range.

Month View:
%1 and %2 moves between days, %5 and %6 moves through weeks.     SayPriorCharacter     getscriptkeyname        SayNextCharacter      getscriptkeyname        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        JawsHome      getscriptkeyname        JawsEnd   getscriptkeyname        SayLine   getscriptkeyname        SayDate   getscriptkeyname      formatstring    '  %   
   
     �� All views:

%1 announces summary of appointments and events; twice quickly places them into virtual viewer.

Start typing to enter a new appointment at current time slot.
%2 and %3 cycle through appointments within current range.
Continue pressing those keys to return to calendar, or press %4 and %5 to exit appointment fields.
%6, while in one of the fields, opens appointment and focuses in notes field.

These appointments are read-only edit boxes in which you cannot use standard editing and movement keys to navigate the text.

%7 repeats current appointment; twice quickly places the appointment into virtual viewer.

In appointment dialog, save  with Control+S.
Save and close, use Alt+S.        AppointmentsAndAttachments    getscriptkeyname        TabKey    getscriptkeyname        ShiftTabKey   getscriptkeyname        SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        Enter     getscriptkeyname        SayWindowPromptAndText    getscriptkeyname      formatstring    
  '       brailleinuse       %   
   
   
   
  EE If using braille...
Outlook Structured Braille Flags:
To Add or Remove flags,
1. Open the Braille Options dialog within the JAWS Settings Center.
2. Select Define Structured Mode....
3. Select a Control type.
4.  Select Modify...
5.  Add or Remove from the Show on... list.   
   
   
  BB The Calendar Grid control type controls the following flags while navigating the Outlook Calendar:
ap = Appointment.
rec = Recurring Appointment.
pvt = Private Appointment.
dy = Day View.
ww = WorkWeek View.
wk = Week View.
mn = Month View.
ev = All-Day Event.    
  '  %   
   
   
   
  EE If using braille...
Outlook Structured Braille Flags:
To Add or Remove flags,
1. Open the Braille Options dialog within the JAWS Settings Center.
2. Select Define Structured Mode....
3. Select a Control type.
4.  Select Modify...
5.  Add or Remove from the Show on... list.   
   
   
  22 Outlook Calendar Grid Braille Flags
ap = Appointment.
rec = Recurring Appointment.
pvt = Private Appointment.
dy = Day View.
ww = WorkWeek View.
wk = Week View.
mn = Month View.
ev = All-Day Event.   
  '          (   %  %    saymessage          addhotkeylinks     	         %   Calendar -    stringcontains  # �O%    `  
  
        qq This is the Active Appointment list box for the Calendar view.

You can use the %1 and %2 to move up and down through the list of active appointments.
Use %3 to repeat the current item, and %4 will open the Appointment's dialog for editing the details of the current appointment.
In Outlook 2002 or later, to hear the MSAA data for the current item, press %5.

Press Control+S to save the edited appointment, or Alt+S to both save and exit the dialog.     SayPriorLine      getscriptkeyname        SayNextLine   getscriptkeyname        SayLine   getscriptkeyname        Enter     getscriptkeyname      formatstring    '       (   %    sayformattedmessage         addhotkeylinks     	         %    - Message    stringcontains     %      
          (       %1

Press LEFT or RIGHT ARROW to move to the previous or next attachment.
Press ENTER to open the current attachment.        getnumberofattachments    formatstring      sayformattedmessage         addhotkeylinks     	            %   Reminder      stringcontains          (    This is the reminder window.  Press %KeyFor(SayReminderWindow) to focus on current reminder, when the window is visible.      sayformattedmessage         addhotkeylinks     	         $  globalrealwindow      p    finddescendantwindow    # �U   $  globalrealwindowname     - Meeting     stringcontains  " �U   $  globalrealwindowname     - Appointment     stringcontains  
  
        NN This is the Appointment Scheduling dialog.
Tab through the fields to set the appointment subject, location, category,
and start/end time and date, then press Control+Shift+Tab to select the
attendees of the scheduled appointment.
While selecting attendees, use %1 to get the busy/free status of the
attendees.       GetAttendeesStatus    getscriptkeyname      formatstring    '     33 Appointment Scheduling dialog.
Tab through the fields to set the appointment subject, location, category,
and start/end time and date.
Control+Shift+Tab to select attendees.
%1 gets attendee's status.        GetAttendeesStatus    getscriptkeyname      formatstring    '       (   %  %    saymessage          addhotkeylinks     	         %   Send/Receive Settings     stringcontains  # Y%    1  
  
  # 4Y%    7   
  
             	  screensensitivehelpforknownclasses     	           $screensensitivehelp       TI    $hotkeyhelp $  gbwordiswindowowner         $hotkeyhelp 	           userbufferisactive             userbuffergettext    List JAWS Hot Keys    stringcontains  # �      getcurrentscriptkeyname  Enter   
  
          jawshotkeys           generaljawshotkeys        	           userbufferdeactivate               inhjdialog          $hotkeyhelp 	      ** To display the global key stroke dialog list, press %KeyFor(CallToolBars).
To hear the JAWS help topic for Outlook,   press %KeyFor(ScreenSensitiveHelp) twice quickly.  
   
  '   "" Display global key stroke dialog list, %KeyFor(CallToolBars).
JAWS help topic for Outlook,  %KeyFor(ScreenSensitiveHelp) twice quickly.  
   
  '       getfocus    '     %    getwindowclass  '        %    getrealwindow     getwindowname   '     %    getcontrolid    '            getobjectsubtypecode    '       dialogactive      # �   %    isinoutlookmainwindow   
           %    getparent     getwindowclass  '       getfoldertype   '  %    # d%    `  
  
  # �%   AfxWndW 
  
     %        
  >> This is the Outlook Message list.
Use
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
 to move up and down through the list.
Use %KeyFor(Enter) to open a message for reading.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current message.   
   
   
  SS You can also use the
%KeyFor (GoToMessagesView) to go directly to the Messages view,
%KeyFor (GoToCalendarView) to go directly to calendar view,
%KeyFor (GoToContactsView) to go directly to the Contacts view,
%KeyFor (GoToTasksView) to go directly to the To Do list view,
%KeyFor (GoToNotesView) to go directly to the Notes view.   
  '   %       
  -- Outlook Message list.
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
moves through list.
%KeyFor(Enter) open message.
%KeyFor(SayMSAAData) Announce MSAA data for current message.  
   
   
  @@ Also use the
%KeyFor (GoToMessagesView) for the Messages view,
%KeyFor (GoToCalendarView) for the Calendar view,
%KeyFor (GoToContactsView) for the contacts view,
%KeyFor (GoToTasksView) for the To Do list view,
%KeyFor (GoToNotesView) for the Notes view. 
  '     %       
  #  	%       
  " 	%    +   
  
  
  # H	%    " D	%    m   
  
  
          getcalendarview      
     %        
  ii This is the Outlook Calendar view.
Use %KeyFor(SayPriorLine),
%KeyFor(SayNextLine),
%KeyFor (SayPriorCharacter)
and
%KeyFor (SayNextCharacter)
to move up, down, right and left threw dates.
Use %KeyFor (ShiftTabKey)
and
%KeyFor (TabKey)
to move threw the appointments during the period.
Use %KeyFor(Enter) to open an appointment for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Appointment.    
   
   
  SS You can also use the
%KeyFor (GoToMessagesView) to go directly to the Messages view,
%KeyFor (GoToCalendarView) to go directly to calendar view,
%KeyFor (GoToContactsView) to go directly to the Contacts view,
%KeyFor (GoToTasksView) to go directly to the To Do list view,
%KeyFor (GoToNotesView) to go directly to the Notes view.   
  '   %       
  NN Outlook Calendar view.
%KeyFor(SayPriorLine),
%KeyFor(SayNextLine),
%KeyFor (SayPriorCharacter)
and
%KeyFor (SayNextCharacter)
moves threw dates.
%KeyFor (ShiftTabKey)
and
%KeyFor (TabKey)
moves threw the appointments.
%KeyFor(Enter) opens an Appointment.
%KeyFor(SayMSAAData) the MSAA data for the Appointment. 
   
   
  @@ Also use the
%KeyFor (GoToMessagesView) for the Messages view,
%KeyFor (GoToCalendarView) for the Calendar view,
%KeyFor (GoToContactsView) for the contacts view,
%KeyFor (GoToTasksView) for the To Do list view,
%KeyFor (GoToNotesView) for the Notes view. 
  '     %        
  ss This is the Outlook Calendar view.
Use %KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
 to move up and down through the time slots.
Use %KeyFor (SayPriorCharacter)
and
%KeyFor (SayNextCharacter)
to move right and left threw dates.
Use %KeyFor (ShiftTabKey)
and
%KeyFor (TabKey)
to move threw the appointments during the period.
Use %KeyFor(Enter) to open an appointment for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Appointment.   
   
   
  SS You can also use the
%KeyFor (GoToMessagesView) to go directly to the Messages view,
%KeyFor (GoToCalendarView) to go directly to calendar view,
%KeyFor (GoToContactsView) to go directly to the Contacts view,
%KeyFor (GoToTasksView) to go directly to the To Do list view,
%KeyFor (GoToNotesView) to go directly to the Notes view.   
  '   %       
  VV Outlook Calendar view.
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
moves through the time slots.
%KeyFor (SayPriorCharacter)
and
%KeyFor (SayNextCharacter)
moves threw dates.
%KeyFor (ShiftTabKey)
and
%KeyFor (TabKey)
moves threw the appointments.
%KeyFor(Enter) opens an Appointment.
%KeyFor(SayMSAAData) the MSAA data for the Appointment. 
   
   
  @@ Also use the
%KeyFor (GoToMessagesView) for the Messages view,
%KeyFor (GoToCalendarView) for the Calendar view,
%KeyFor (GoToContactsView) for the contacts view,
%KeyFor (GoToTasksView) for the To Do list view,
%KeyFor (GoToNotesView) for the Notes view. 
  '        %       
  #  %    m   
  
     %        
  WW This is the Outlook Contact list.
Use %KeyFor(SayPriorLine),
and
%KeyFor(SayNextLine)
to move up and down through the list.
Use %KeyFor (SayPriorCharacter)
and
%KeyFor (SayNextCharacter)
to move left and right threw the list.
Use %KeyFor(Enter) to open a Contact for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Contact. 
   
   
  SS You can also use the
%KeyFor (GoToMessagesView) to go directly to the Messages view,
%KeyFor (GoToCalendarView) to go directly to calendar view,
%KeyFor (GoToContactsView) to go directly to the Contacts view,
%KeyFor (GoToTasksView) to go directly to the To Do list view,
%KeyFor (GoToNotesView) to go directly to the Notes view.   
  '   %       
  ;; Outlook Contact list.
%KeyFor(SayPriorLine),
%KeyFor(SayNextLine),
%KeyFor (SayPriorCharacter)
and
%KeyFor (SayNextCharacter)
moves through list.
%KeyFor(Enter) open Contact.
%KeyFor(SayMSAAData) Announce MSAA data for current Contact. 
   
   
  @@ Also use the
%KeyFor (GoToMessagesView) for the Messages view,
%KeyFor (GoToCalendarView) for the Calendar view,
%KeyFor (GoToContactsView) for the contacts view,
%KeyFor (GoToTasksView) for the To Do list view,
%KeyFor (GoToNotesView) for the Notes view. 
  '     %       
  # $%    `  
  
     %        
  ;; This is the Outlook Task list.
Use %KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
to move up and down through the list.
Use %KeyFor(Enter) to open a Task for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Task. 
   
   
  SS You can also use the
%KeyFor (GoToMessagesView) to go directly to the Messages view,
%KeyFor (GoToCalendarView) to go directly to calendar view,
%KeyFor (GoToContactsView) to go directly to the Contacts view,
%KeyFor (GoToTasksView) to go directly to the To Do list view,
%KeyFor (GoToNotesView) to go directly to the Notes view.   
  '   %       
  ++ Outlook Task list.
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
moves through list.
%KeyFor(Enter) open Task.
%KeyFor(SayMSAAData) Announce MSAA data for current Task.   
   
   
  @@ Also use the
%KeyFor (GoToMessagesView) for the Messages view,
%KeyFor (GoToCalendarView) for the Calendar view,
%KeyFor (GoToContactsView) for the contacts view,
%KeyFor (GoToTasksView) for the To Do list view,
%KeyFor (GoToNotesView) for the Notes view. 
  '     %       
  # �%       
  
     %        
  ;; This is the Outlook Note list.
Use %KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
to move up and down through the list.
Use %KeyFor(Enter) to open a Note for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Note. 
   
   
  SS You can also use the
%KeyFor (GoToMessagesView) to go directly to the Messages view,
%KeyFor (GoToCalendarView) to go directly to calendar view,
%KeyFor (GoToContactsView) to go directly to the Contacts view,
%KeyFor (GoToTasksView) to go directly to the To Do list view,
%KeyFor (GoToNotesView) to go directly to the Notes view.   
  '   %       
  ++ Outlook Note list.
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
moves through list.
%KeyFor(Enter) open Note.
%KeyFor(SayMSAAData) Announce MSAA data for current Note.   
   
   
  @@ Also use the
%KeyFor (GoToMessagesView) for the Messages view,
%KeyFor (GoToCalendarView) for the Calendar view,
%KeyFor (GoToContactsView) for the contacts view,
%KeyFor (GoToTasksView) for the To Do list view,
%KeyFor (GoToNotesView) for the Notes view. 
  '          isnavigationpane       %        
  11 This is the Outlook Navigation pane.
Use %KeyFor (SayPriorLine)
and
%KeyFor (SayNextLine)
to move up and down the list of folders.
Use SpaceBar
and
%KeyFor (Enter)
to select the current folder.   
  '   %       
  '' Outlook Navigation pane.
%KeyFor (SayPriorLine)
and
%KeyFor (SayNextLine)
moves up and down the folders.
SpaceBar
and
%KeyFor (Enter)
selects the folder.   
  '     %    `  
  # �$%   NetUICtrlNotifySink 
  
     %        
  ;; This is the Outlook Task list.
Use %KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
to move up and down through the list.
Use %KeyFor(Enter) to open a Task for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Task. 
  '   %       
  ++ Outlook Task list.
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
moves through list.
%KeyFor(Enter) open Task.
%KeyFor(SayMSAAData) Announce MSAA data for current Task.   
  '     %    m   
  " �&%    
  # �&%   AfxWndW 
  
  # '%    +   
  
     %        
  CC This is the Outlook Active Appointment list.
Use %KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
 to move up and down through the list.
Use %KeyFor(Enter) to open an appointment for editing.
Use %KeyFor(SayMSAAData) to hear the MSAA data for the current Appointment.   
  '   %       
  00 Outlook Appointment list.
%KeyFor(SayPriorLine)
and
%KeyFor(SayNextLine)
moves through list.
%KeyFor(Enter) open Appointment.
%KeyFor(SayMSAAData) Announce MSAA data for current Appointment.  
  '          (   %   %    saymessage          addhotkeylinks     	           dialogactive       %   Spelling    
     %        
   To read the misspelled word and suggestion, press %KeyFor(ReadMisspelledAndSuggestion). 
  '   %       
   Read misspelled word and suggestion,  %KeyFor(ReadMisspelledAndSuggestion). 
  '       (   %   %    sayformattedmessage         addhotkeylinks     	            %   Note      stringcontains             getfocus      getwindowsubtypecode      B   
     %        
   To save and close the open note, press %KeyFor(UpALevel).   
  '   %       
  		 Save and close	%KeyFor(UpALevel)    
  '          (   %   %    sayformattedmessage         addhotkeylinks     	         %    - Task       stringcontains     %        
   To select the Reminder Button, press %KeyFor(ClickButton(4)).   
  '   %       
   Select Reminder Button,  %KeyFor(ClickButton(4)).   
  '       (   %   %    sayformattedmessage         addhotkeylinks     	         %   - Message     stringcontains     %        
  ?? To select the AddressBook button, press %KeyFor(ClickButton(3)).
To select the CC Button, press   %KeyFor(ClickButton(2)).
To select the TO Button, press %KeyFor(ClickButton(1)).
To move to the body window, press %KeyFor(GoToOutlookMessageBodyWindow). 
  '   %       
  22 Select AddressBook button, %KeyFor(ClickButton(3)).
Select CC Button, %KeyFor(ClickButton(2)).
Select TO Button, %KKeyFor(ClickButton(1)).
Move to body window, %KeyFor(GoToOutlookMessageBodyWindow).  
  '       (   %   %    sayformattedmessage         addhotkeylinks     	         %   Calendar -    stringcontains          iscalendarview     %        
  ��Hot key help for the Outlook calendar.
To move to the previous day, press %KeyFor(SayPriorCharacter).
To move to the next day, press %KeyFor(SayNextCharacter).
To say the date, or date range with focus, press %KeyFor(SayDate).
To say the current date and view, press %KeyFor(SayDate).
Press twice quickly to hear the date range with focus.
To move to the time slot at the start of the work day on the present day, press %KeyFor(JAWSHome).
To move to the next time slot on the current day, press %KeyFor(SayNextLine).
To move to the previous time slot on the present day, press %KeyFor(SayPriorLine).
To move to the time slot at the end of the work day on the present day, press %KeyFor(JAWSEnd).

In the Month view:
To move to the previous day, press %KeyFor(SayPriorCharacter).
To move to the next day, press %KeyFor(SayNextCharacter).
To move to the next week, press %KeyFor(SayNextLine).
To move to the previous week, press %KeyFor(SayPriorLine).

To repeat the appointment at the current time slot, press %KeyFor(SayLine).
Press %KeyFor(AppointmentsAndAttachments) to hear a summary for the current view.
Press this key twice quickly to place the appointments into the virtual viewer.


To hear the next appointment on the current day, press %KeyFor(TabKey).  Press this key again to hear subsequent appointments.
To hear the prior appointment on the current day, press %KeyFor(ShiftTabKey).
These keys will cycle through all the appointments within the current view.
Keep pressing these keys, or use the up or down navigation keys to return to the calendar.
While within an appointment field, press the Enter key to edit the current appointment's text.
press %KeyFor(SayWindowPromptAndText) to repeat the current appointment field's text.
Press twice quickly to place the appointments into the virtual viewer

In the new appointment dialog, save  the appointment by pressing Control+S; to both save and close the appointment, press Alt+S. 
  '   %       
  <<Hot keys for calendar View.
move to previous day, %KeyFor(SayPriorCharacter).
move to next day, %KeyFor(SayNextCharacter).
say date and view with focus,  %KeyFor(SayDate).
Twice quickly for date range.

Move to first time slot current day, %KeyFor(JAWSHome).
move to next time slot current day, press %KeyFor(SayNextLine).
move to previous time slot current day, press %KeyFor(SayPriorLine).
Move to last time slot current day, %KeyFor(JAWSEnd).

In Month view:
Move to previous day, %KeyFor(SayPriorCharacter).
Move to next day, %KeyFor(SayNextCharacter).
Move to the next week, %KeyFor(SayNextLine).
Move to the previous week, %KeyFor(SayPriorLine).

repeat appointment at current time slot, press %KeyFor(SayLine).
Appointment summary, %KeyFor(AppointmentsAndAttachments).
Twice quickly to place appointments into virtual viewer.

next appointment, press %KeyFor(TabKey).  Press again to hear subsequent appointments.
prior appointment, press %KeyFor(ShiftTabKey).
Edit current appointment, %KeyFor(Enter).
Use the navigation keys to exit appointment field.

Repeat current appointment field, %KeyFor(SayWindowPromptAndText).
Twice quickly to place appointments into virtual viewer.

In new appointment dialog, save with Control+S, save and close with Alt+s.   
  '     %    `  
     %        
  ll Hotkey help for the Active Appointments list.

To move to the Prior appointment in the list, press %KeyFor(SayPriorLine).
To move to the next appointment in the list, press %KeyFor(SayNextLine).
To repeat the current appointment in the list, press %KeyFor(SayLine).
To edit the current appointment in the list, press %KeyFor(Enter).
In Outlook 2002 or later:
To hear the MSAA data for the current item, press %KeyFor(SayMSAAData).  
  '   %       
  OO Hotkey help for the Active Appointments list.

Move to Prior appointment, %KeyFor(SayPriorLine).
Move to next appointment, %KeyFor(SayNextLine).
Repeat current appointment, %KeyFor(SayLine).
Edit current appointment, %KeyFor(Enter).
In Outlook 2002 or later:
Announce MSAA data current item,  %KeyFor(SayMSAAData).  
  '          (   %   %    sayformattedmessage         addhotkeylinks     	         %   Contacts      stringcontains     %        
  .. To get a list of edit fields in the contacts dialog,
press %KeyFor(ContactFieldsDialog).
Then use the arrow keys to select the desired field, and press enter to focus on that field.   
  '   %       
   Get list of contact edit fields,
%KeyFor(ContactFieldsDialog)   
  '       (   %   %    sayformattedmessage         addhotkeylinks     	         $  globalrealwindow      p    finddescendantwindow       %        
  00 This is the Appointment/Meeting scheduler dialog
Use the Tab key to move through the fields.
Use the SpaceBar to select buttons.
Use the %KeyFor(GetAttendeesStatus) to get attendee status.    
  '   %       
  00 This is the Appointment/Meeting scheduler dialog
Use the Tab key to move through the fields.
Use the SpaceBar to select buttons.
Use the %KeyFor(GetAttendeesStatus) to get attendee status.    
  '       (   %   %    sayformattedmessage         addhotkeylinks     	         %   - Meeting     stringcontains  " �D   %   - Appointment     stringcontains  
     %        
  00 This is the Appointment/Meeting scheduler dialog
Use the Tab key to move through the fields.
Use the SpaceBar to select buttons.
Use the %KeyFor(GetAttendeesStatus) to get attendee status.    
  '   %       
  )) Appointment/Meeting scheduler dialog
%KeyFor(TabKey) to move through the fields.
SpaceBar to select buttons.
%KeyFor(GetAttendeesStatus) to get attendee status.    
  '       (   %   %    sayformattedmessage         addhotkeylinks     	         %   Contact   stringcontains  " hG   $  globalrealwindowname        (%1) - Event    %    formatstring      stringcontains  
  " �G   $  globalrealwindowname     Appointment   stringcontains  
     %        
  .. To get a list of edit fields in the contacts dialog,
press %KeyFor(ContactFieldsDialog).
Then use the arrow keys to select the desired field, and press enter to focus on that field.   
  '   %       
   Get list of contact edit fields,
%KeyFor(ContactFieldsDialog)   
  '       (   %   %    sayformattedmessage         addhotkeylinks     	           $hotkeyhelp         unknown          gettickcount    $  giticksinautostart  
  &  giticksinautostart  $  giticksinautostart     -1
     	         %    brailleaddobject      stringcontains  " �    %    setglobals    stringcontains  
  " 0   %    getcalendarview   stringcontains  
  " h   %    gotobodywindow    stringcontains  
  " �   %    PointNeedsMarking     stringcontains  
  " �   %    UserBufferOverVirtualDocument     stringcontains  
  " (   %    QuickNavKeyTrapping   stringcontains  
  " `   %    inoptionsdialog   stringcontains  
  " �   %    isformfield   stringcontains  
  " �   %    isstatusbartoolbar    stringcontains  
  " �%    CaretMovedEvent 
  
     	         %   %    unknown       �     $controldelete       typecurrentscriptkey            pause           caretvisible            sayword          \    $permenantdelete         setdeletedgroupbyflag           &  gsbrlautocomplete        typecurrentscriptkey       $  globalcurrentcontrol      `  
           &  gilinehasspoken      braillerefresh          resetmessageflagvariables                delay                checkfornomoreitems    	             $deleteword $  gbwordiswindowowner         $deleteword 	           savecursor          invisiblecursor         routeinvisibletopc          nextword            sayword         restorecursor           typecurrentscriptkey               $saywindowpromptandtext      handlenocurrentwindow      	      $  gbwordiswindowowner         $saywindowpromptandtext 	           &  gbsaywindowpromptandtext         smmtrainingmodeactive   '        getfocus    '     %    getwindowclass  '     %    getcontrolid    '     %    getwindowsubtypecode    '  %            getobjectsubtypecode    '          iscalendarview     %   AfxWndW 
        	  iscalendarviewappointmenteditbox            issamescript                 sayappointmentdata        %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	              getcalendarview      
    saybriefappointmentdata       %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille              speakprogressbarinfo          %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	                readcalendarinformation       %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille              speakprogressbarinfo          %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	      %   NetUIHWND   
  " @%   RichEdit20W 
  
     %       
  # �     getcalendarview      
  
        %    getfocusobject      accparent          %    accnavigate '     %    %    accname        say       %    comrelease        %    8   
                  getobjectname          say                 getcontrolattributes      indicatecontrolstate          %    /   
  " �%       
  
  " %       
  
  " %       
  
          sayline       %    :   
        %            getobjectname     indicatecontroltype          %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille              speakprogressbarinfo          %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	         $  globalcurrentcontrol        
          $sayline       %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille              speakprogressbarinfo          %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	      %    `  
  # 
%       
  
        %  $  globalrealname         indicatecontroltype                 getobjectname          stringleft   Message 
  " �
          checkfornomoreitems   
           %    getsupergridlistitem      
          say               getselectedtext   
     say          %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille              speakprogressbarinfo          %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	         $  globalrealwindow      getwindowname    Automatic Formatting    
  # �%      
  
          msaarefresh             $  globalrealwindow      getwindowname    Task      stringcontains  # @%      
  
           %    getwindowtypecode             getobjectname        getline   indicatecontroltype       %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille       %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	         $  globalrealwindowname     - Contact     stringcontains  # �%       
  
          sayfocusedobject          %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille       %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	      %    �  
  # %       
  
        %     %    getwindowname        getline   indicatecontroltype       %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille       %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	                smmtoggletrainingmode         %    handlecustomwindows         saylasttipfromevent       %         saytutorialhelp       %         saytutorialhelphotkey         %    indicatecomputerbraille              speakprogressbarinfo          %     smmtoggletrainingmode            &  gbsaywindowpromptandtext    	           $saywindowpromptandtext    %     smmtoggletrainingmode            &  gbsaywindowpromptandtext       d    getheaderwindow            getfocus      getappmainwindow      getfirstchild   '   %   # �    %     getwindowclass   AfxWnd  
  
        %     getnextwindow   '    `    %         %     getfirstchild   '   %   # $   %     getwindowclass   #32770  
  
        %     getnextwindow   '    �       %      	      �     getheadercontrol               getheaderwindow   getfirstchild   '  %  # �    %    getcontrolid    %   
  
        %    getnextwindow   '   P    %     	      4    focuscontrol            savecursor          invisiblecursor       %     movetowindow            pause           routepctoinvisible        %     getwindowsubtypecode    '  %       
  " � %       
  
          leftmousebutton            restorecursor         �    readprompt      %       
     %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
          �    getheadercontrol                       �    getheadercontrol            getwindowtext     saymessage                  getheadercontrol                            getheadercontrol            getwindowtext     saymessage           %       
          �    getheadercontrol                       �    getheadercontrol            getwindowtext     saymessage                 getheadercontrol                           getheadercontrol            getwindowtext     saymessage           %       
              getheadercontrol                           getheadercontrol            getwindowtext     saymessage           %       
                     �    getheadercontrol            getwindowtext     saymessage           %       
     %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
  " �%       
  
                     �    getheadercontrol            getwindowtext     saymessage        %     �  
                     �    getheadercontrol            getwindowtext     saymessage        %     �  
                     �    getheadercontrol            getwindowtext     saymessage        %       
  " |%       
  
                     �    getheadercontrol            getwindowtext     saymessage           %       
     %        
                         getheadercontrol            getwindowtext     saymessage        %     �  
                     �    getheadercontrol            getwindowtext     saymessage        %     �  
                     �    getheadercontrol            getwindowtext     saymessage        %     �  
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     +o    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %     �  
                     �    getheadercontrol            getwindowtext     saymessage           %       
     %        
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage           %       
     %        
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage        %       
                     �    getheadercontrol            getwindowtext     saymessage              �    controlnotfound     %       
     %       
              From field not found     From not found    sayformattedmessage       %       
              Sent field not found     Sent not found    sayformattedmessage       %       
              To field not found   To not found      sayformattedmessage       %       
              Cc field not found   Cc not found      sayformattedmessage          %       
     %       
              Subject field not found  Subject not found     sayformattedmessage       %       
              Due Date field not found     Due date not found    sayformattedmessage       %       
              Start date field not found   Start date  not found     sayformattedmessage       %     �  
              Status combobox not found    Status not found      sayformattedmessage       %     �  
              Priority combobox not found  Priority not found    sayformattedmessage       %       
              % complete field not found   % complete not found      sayformattedmessage                 readheadercontrol          %     getheadercontrol    '  %          issamescript          %    focuscontrol       	           beginflashmessage         %   %    readprompt        %    getwindowsubtypecode         
        %    saywindowtypeandtext                %          getwindowtext          say                Press twice to edit.           sayformattedmessage          %   %    controlnotfound            endflashmessage       \     focustaskbodywindow         
    getheadercontrol      focuscontrol          `     focuscontactbodywindow              getheadercontrol      focuscontrol              typeofwindow               getcurrentwindow      getappmainwindow      getwindowname   '      %     - Message    stringcontains             	         %     - Task       stringcontains             	         %     - Contact    stringcontains             	         %     - Report     stringcontains             	         %    - Meeting     stringcontains             	         %    Calendar -    stringcontains             	         �    $gotobodywindow      typeofwindow    '   %        
  " X %        
  
          focusmessagebodywindow        %        
          focustaskbodywindow       %        
          focuscontactbodywindow                 You must open a message or task to read its contents.    Open message or task to read its content      sayformattedmessage          �     autosayheader                 getfocus      gettoplevelwindow   %     finddescendantwindow    '  %                %          getwindowtext     saymessage           `    $readheader         typeofwindow    '        $  globalappwindow   getwindowname    Response      stringcontains     %        
       �  '      '     %        
       �  '      '     %        
       �  '        '     %        
       �  '      '     %        
       �  '    	  '     %        
       �  '    
  '     %        
       �  '      '     %        
       �  '      '     %     	   
       �  '      '     %     
   
       �  '      '        %    autosayheader         %    autosayheader      	      %        
     %       
            %    readheadercontrol         %       
            %    readheadercontrol         %       
             %    readheadercontrol         %       
             %    readheadercontrol         %       
             %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
            %    readheadercontrol         %       
            %    readheadercontrol         %       
          �  %    readheadercontrol         %       
            %    readheadercontrol         %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
            %    readheadercontrol         %       
            %    readheadercontrol         %       
          �  %    readheadercontrol         %       
            %    readheadercontrol         %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
            %    readheadercontrol         %       
          �  %    readheadercontrol         %       
          �  %    readheadercontrol         %       
            %    readheadercontrol         %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
            %    readheadercontrol         %       
          �  %    readheadercontrol         %       
            %    readheadercontrol         %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
  # �   $  globalrealwindow          finddescendantwindow    
            %    readheadercontrol         %       
            %    readheadercontrol         %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
          �  %    readheadercontrol         %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %     	   
     %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %     
   
     %       
            %    readheadercontrol                  The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	         %        
     %       
          �  %    readheadercontrol         %       
          typecurrentscriptkey                   The requested header information was not found in this window.   Requested info not found      sayformattedmessage    	            �     movetofield         savecursor          invisiblecursor       %     movetowindow            routepctoinvisible          restorecursor         @    clicktoolbarbutton           savecursor          jawscursor        %   %               findstring          pause           leftmousebutton         restorecursor                     %1 %2   %   Button not found      formatstring      sayformattedmessage          �     gettoolbar             getfocus      getappmainwindow            finddescendantwindow    '   %   # �    %     getwindowclass   MsoCommandBar   
  
     %      	               	      �    toolbar      inhjdialog             << There is currently an open JAWS dialog box.  Only one JAWS dialog box can be opened at a time.  In order to bring up the requested dialog box, you must close the current dialog by pressing escape and then activate the desired dialog box.   ,, There is currently an open JAWS dialog box.  Only one JAWS dialog can be opened at a time.  Close the current dialog by pressing Escape and then activate the desired dialog.     sayformattedmessage    	           gettoolbar  '      00 Item Move Back|Item Move Forward|Mail Message Create|Document Print|Folder Move Item To|Delete|Reply|Reply To All|Message Forward|Address Book|Dial|Advanced Find|Mark As Read|Formatting Clear 11 |Appointment Create|Contact Create|New Folder Create|Journal Entry Create|Note Create|Meeting Request Create|People Find|Task Create|Task Request Create|Office Document Create|Flag For Follow Up  
   |Item Post|Item Copy|In Box Move To|Folder Go To    
   Outlook Global ToolBar Items           dlgselectiteminlist '       &  nsuppressecho             delay      %       
          $movebackitem      %       
          $moveforwarditem       %       
         Control+Shift+M   typekey       %       
         Control+p     typekey       %       
         Control+shift+v   typekey       %       
         Control+d     typekey       %       
         Control+r     typekey       %       
         Control+shift+r   typekey       %    	   
         Control+f     typekey       %    
   
         Control+shift+b   typekey       %       
         Control+shift+d   typekey       %       
         Control+shift+f   typekey       %       
         Control+q     typekey       %       
         Control+shift+z   typekey       %       
         Control+shift+a   typekey       %       
         Control+shift+c   typekey       %       
         Control+shift+e   typekey       %       
         Control+shift+j   typekey       %       
         Control+shift+n   typekey       %       
         Control+shift+q   typekey       %       
         Control+shift+p   typekey       %       
         Control+shift+k   typekey       %       
         Control+shift+u   typekey       %       
         Control+shift+h   typekey       %       
         Control+shift+g   typekey       %       
         Control+shift+s   typekey       %       
         Control+shift+y   typekey       %       
          pause          Control+shift+i   typekey       %       
         Control+y     typekey             &  nsuppressecho      (    istoolbarlist         %     getwindowsubtypecode         
           %     getappmainwindow      getwindowclass   JFWUI2  
           %     getrealwindow     getwindowname    Outlook Global ToolBar Items    
             	                     	      ,     $calltoolbars        toolbar       `    $messagebodydelete             quicknavstatechange         setdeletedgroupbyflag           stopspeech         Control+d     typekey          &  gilinehasspoken $  globalcurrentcontrol      `  
          resetmessageflagvariables           &  gbdeletingmessagefromlist        &  gsbrlautocomplete             delay           msaarefresh         braillerefresh               checkfornomoreitems    	      	           typeofwindow         
         SayMessageHeaderInformation        schedulefunction          	         �     forcemessageannouncement    $  gilinehasspoken         %   %    getfocus    '     %  %   %  %  %   %    activeitemchangedevent           �    $saynextline    $  gbwordiswindowowner         $saynextline    	            &  gbfocushaschanged        &  gbupdownnavigation       userbufferisactive  " �      ispccursor    
  " �      inhjdialog  
  "      menusactive 
          $saynextline    	            &  gisayingtreeviewitem         getfocus    '      %     getwindowname   '     %     getwindowclass  '            getobjectsubtypecode    '     %     getwindowsubtypecode    '  %       %  '        %     getcontrolid    '  %  &  globalcurrentcontrol              getobjectname   '       ispccursor        %     getwindowclass   SysTreeView32   
          nextline       	         $  globalrealwindowname     Recurrence    stringcontains     $  globalcurrentcontrol          
  " �$  globalcurrentcontrol      >   
  
  " �$  globalcurrentcontrol      �   
  # �$  globalcurrentcontrol      �   
  
  
          nextline                 delay           $sayline    	         %   REComboBox20W   
        $  globalrealwindowname     Advanced Find     stringcontains          $saynextline    	      $  globalcurrentcontrol      �  
          nextline       	         $  globalobjectname     Contact 
  # p$  globalcurrentcontrol      m   
  
  # �%   Card View   
  
          nextline       	         %   SUPERGRID     stringcontains  # @$  globalcurrentcontrol      �  
  " <$  globalcurrentcontrol      �  
  
  
  # x$  globalobjectname     Members List    
  
          nextline               getline         say    	         %   Customize     stringcontains  "     %   time:     stringcontains  
  " T   %   Duration      stringcontains  
  " �   %   Reminder      stringcontains  
  # �$  globalcurrentcontrol      �  
  " �$  globalcurrentcontrol         
  
  " $  globalcurrentcontrol        
  
  " D$  globalcurrentcontrol        
  
  " t$  globalcurrentcontrol         
  
  " �$  globalcurrentcontrol        
  
  
          nextline                 delay           sayobjectactiveitem    	      $  globalcurrentcontrol      `  
  " �	$  globalcurrentcontrol      e   
  # �	   $  globalrealwindowname        Advanced Find     stringlength      stringright  Advanced Find   
  
  
          nextline             &  gilinehasspoken     ForceMessageAnnouncement           schedulefunction       	           typeofwindow         
  # �
$  gioutlookautocompleteverbosity  
  # �
%    +   
  
  # \$  globalcurrentcontrol        
  " ($  globalcurrentcontrol        
  
  " X$  globalcurrentcontrol        
  
  
          nextline       %    B   
  # �$	  gbisaddressautocompletelistvisible    
          sayline       	      %   REListBox20W    
     %    &   
          nextline       	      $  globalcurrentcontrol      1  
  " �$  globalcurrentcontrol         
  
          nextline                    getobjectstate         say            positioningroup        say    	         $  globalrealwindowname     Rules Wizard    
  " �$  globalrealwindowname     Rules and Alerts    
  
     %       
  " �%    7   
  
          nextline                      delay      $  globalcurrentcontrol      �  
                  getobjectname          say       $  globalcurrentcontrol      �  
                sayobjectactiveitem       	            %   OUTEXVLB      stringcontains     $  globalrealwindowname     Check Names 
  " `$  globalrealwindowname     New Entry   
  
          nextline            sayline    	      $  globalrealwindowname     Address Book    
          nextline       	                 ispccursor    " 4     isvirtualpccursor   
  " P$  globalmenumode  
     %   RichEdit20W 
  " �%   RichEdit20A 
  
  # �%    >   
  
          nextline                    getobjectvalue         say    	           $saynextline    	           dialogactive       $  globalcurrentcontrol      �2  
          ispccursor          nextline            sayline            pause               $  globalrealwindowname     Calendar      stringcontains  " X   $  globalrealwindowname     Tasks     stringcontains  
  " �   $  globalrealwindowname     Contacts      stringcontains  
  # �$  globalcurrentcontrol      `  
  
          nextline            sayline    	      %       
     $  globalcurrentcontrol        
          nextline       	            $  globalrealwindow      getwindowname   '     %   Select Names      stringcontains  "    %   Address Book      stringcontains  
  # $%    i   
  
          nextline                      delay                   getobjectname           say    	         %   Addressing    stringcontains  #  %    �  
  " �%    �  
  
  
  # %       
  
          nextline             %           getwindowtext           say    	           iscalendarview  " �     dialogactive    
       %   Edit    
  " ,     iswinvista    # (   %   RichEdit20W   stringcompare         
  
  
          nextline          $  globalrealwindowname     Appointment   stringcontains                 delay           +        getobjectvalue    saymessage        	            %     iswindowadistributionlist           nextline          %          sendmessage         sayobjectactiveitem    	      %   RichEdit20WPT   
  # �%    B   
  
          nextline            sayline    	           getwindowcategory        
  # 4%       
  
          nextline                 delay                   getobjectvalue    +     say    	           $saynextline       �    $saypriorline   $  gbwordiswindowowner         $saypriorline   	            &  gbfocushaschanged        &  gbupdownnavigation       userbufferisactive  " �      ispccursor    
  " �      inhjdialog  
  "      menusactive 
          $saypriorline   	            &  gisayingtreeviewitem         getfocus    '      %     getwindowname   '     %     getwindowclass  '            getobjectsubtypecode    '     %     getwindowsubtypecode    '  %       %  '        %     getcontrolid    '  %  &  globalcurrentcontrol              getobjectname   '       ispccursor        %     getwindowclass   SysTreeView32   
          priorline      	         $  globalrealwindowname     Recurrence    stringcontains     $  globalcurrentcontrol          
  " �$  globalcurrentcontrol      >   
  
  " �$  globalcurrentcontrol      �   
  # �$  globalcurrentcontrol      �   
  
  
          priorline                delay           $sayline    	         %   REComboBox20W   
        $  globalrealwindowname     Advanced Find     stringcontains          $saypriorline   	      $  globalcurrentcontrol      �  
          priorline      	         $  globalobjectname     Contact 
  # p$  globalcurrentcontrol      m   
  
  # �%   Card View   
  
          priorline      	         %   SUPERGRID     stringcontains  # @$  globalcurrentcontrol      �  
  " <$  globalcurrentcontrol      �  
  
  
  # x$  globalobjectname     Members List    
  
          priorline              getline         say    	         %   Customize     stringcontains  "     %   time:     stringcontains  
  " T   %   Duration      stringcontains  
  " �   %   Reminder      stringcontains  
  # �$  globalcurrentcontrol      �  
  " �$  globalcurrentcontrol         
  
  " $  globalcurrentcontrol        
  
  " D$  globalcurrentcontrol        
  
  " t$  globalcurrentcontrol         
  
  " �$  globalcurrentcontrol        
  
  
          priorline                delay           sayobjectactiveitem    	      $  globalcurrentcontrol      `  
  " �	$  globalcurrentcontrol      e   
  # �	   $  globalrealwindowname        Advanced Find     stringlength      stringright  Advanced Find   
  
  
          priorline            &  gilinehasspoken     ForceMessageAnnouncement           schedulefunction       	           typeofwindow         
  # �
$  gioutlookautocompleteverbosity  
  # �
%    +   
  
  # \$  globalcurrentcontrol        
  " ($  globalcurrentcontrol        
  
  " X$  globalcurrentcontrol        
  
  
          priorline      %    B   
  # �$	  gbisaddressautocompletelistvisible    
          sayline       	      %   REListBox20W    
     %    &   
          priorline      	      $  globalcurrentcontrol      1  
  " �$  globalcurrentcontrol         
  
          priorline                   getobjectstate         say            positioningroup        say    	         $  globalrealwindowname     Rules Wizard    
  " �$  globalrealwindowname     Rules and Alerts    
  
     %       
  " �%    7   
  
          priorline                     delay      $  globalcurrentcontrol      �  
                  getobjectname          say       $  globalcurrentcontrol      �  
                sayobjectactiveitem       	            %   OUTEXVLB      stringcontains     $  globalrealwindowname     Check Names 
  " `$  globalrealwindowname     New Entry   
  
          priorline           sayline    	      $  globalrealwindowname     Address Book    
          priorline      	                 ispccursor    " 4     isvirtualpccursor   
  " P$  globalmenumode  
     %   RichEdit20W 
  " �%   RichEdit20A 
  
  # �%    >   
  
          priorline                   getobjectvalue         say    	           $saypriorline   	           dialogactive       $  globalcurrentcontrol      �2  
          ispccursor          priorline           sayline            pause               $  globalrealwindowname     Calendar      stringcontains  " X   $  globalrealwindowname     Tasks     stringcontains  
  " �   $  globalrealwindowname     Contacts      stringcontains  
  # �$  globalcurrentcontrol      `  
  
          priorline           sayline    	      %       
     $  globalcurrentcontrol        
          priorline      	            $  globalrealwindow      getwindowname   '     %   Select Names      stringcontains  "    %   Address Book      stringcontains  
  # $%    i   
  
          priorline                     delay                   getobjectname           say    	         %   Addressing    stringcontains  #  %    �  
  " �%    �  
  
  
  # %       
  
          priorline            %           getwindowtext           say    	           iscalendarview  " �     dialogactive    
       %   Edit    
  " ,     iswinvista    # (   %   RichEdit20W   stringcompare         
  
  
          priorline         $  globalrealwindowname     Appointment   stringcontains                 delay           +        getobjectvalue    saymessage        	            %     iswindowadistributionlist           priorline         %          sendmessage         sayobjectactiveitem    	      %   RichEdit20WPT   
  # �%    B   
  
          priorline           sayline    	           getwindowcategory        
  # 4%       
  
          priorline                delay                   getobjectvalue    +     say    	           $saypriorline      T	    $saynextcharacter        inhjdialog          $saynextcharacter   	      $  gbinribbons # �      ispccursor  
  # �      userbufferisactive    
          nextcharacter      	      $  gbwordiswindowowner         $saynextcharacter   	            &  gbfocushaschanged        &  gbleftrightnavigation           getfocus      getwindowsubtypecode    '   %                  getobjectsubtypecode    '         $  globalfocuswindow     getwindowclass  '     $  globalfocuswindow     getwindowname   '     $  globalfocuswindow     getcontrolid    &  globalcurrentcontrol         ispccursor    " �     isvirtualpccursor   
  " �$  globalmenumode  
  " �%        
  
          $saynextcharacter   	           ispccursor     $  globalobjectname     Contact 
  # �$  globalcurrentcontrol      m   
  
  # �%   Card View   
  
          nextcharacter      	           iscalendarview    # �$  globalcurrentcontrol      `  
  " �$  globalcurrentcontrol      e   
  # |$  globalrealwindowname     Advanced Find   
  
  
  
          nextcharacter      	         	  iscalendarviewappointmenteditbox            $saynextcharacter   	      $  globalcurrentcontrol        
  " X$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  
          [     getjcfoption    '  %     +   
          nextcharacter              getcharacter      stringlength         
          sayfield               saycharacter                  [           setjcfoption            $saynextcharacter        [   %    setjcfoption          	      %     +   
  # L$  globalcurrentcontrol      �  
  
     $  globaliposition      
  &  globaliposition      getline '  $  globaliposition    %    stringlength    
          nextcharacter         %    stringlength    &  globaliposition          %  $  globaliposition        substring          say    	              getfocus      getwindowclass   NetUIHWND   
  # �          getobjectsubtypecode      8   
  
          nextcharacter           msaarefresh    	              $saynextcharacter      �	    $saypriorcharacter       inhjdialog          $saypriorcharacter  	      $  gbinribbons # �      ispccursor  
  # �      userbufferisactive    
          priorcharacter     	      $  gbwordiswindowowner         $saypriorcharacter  	            &  gbfocushaschanged        &  gbleftrightnavigation      $  globalfocuswindow     getwindowsubtypecode    '   %                  getobjectsubtypecode    '         $  globalfocuswindow     getwindowclass  '     $  globalfocuswindow     getwindowname   '     $  globalfocuswindow     getcontrolid    &  globalcurrentcontrol         ispccursor    " �     isvirtualpccursor   
  " �$  globalmenumode  
  " �%        
  
          $saypriorcharacter  	           ispccursor     $  globalobjectname     Contact 
  # �$  globalcurrentcontrol      m   
  
  # �%   Card View   
  
          priorcharacter     	           iscalendarview    # �$  globalcurrentcontrol      `  
  " �$  globalcurrentcontrol      e   
  # �$  globalrealwindowname     Advanced Find   
  
  
  
          priorcharacter     	         	  iscalendarviewappointmenteditbox            $saypriorcharacter  	      %   NetUIHWND   
          &  giannouncetreeviewitemstate    $  globalcurrentcontrol        
  " �$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  
  " $  globalcurrentcontrol        
  
          [     getjcfoption    '  %     +   
          priorcharacter             getcharacter      stringlength         
          sayfield               saycharacter                  [           setjcfoption            $saypriorcharacter       [   %    setjcfoption          	      %     +   
  # �$  globalcurrentcontrol      �  
  
     $  globaliposition      
  &  globaliposition      getline '  $  globaliposition      
          priorcharacter          saycharacter            &  globaliposition 	            %  $  globaliposition        substring          say    	              getfocus      getwindowclass   NetUIHWND   
  # 4	          getobjectsubtypecode      8   
  
          priorcharacter          msaarefresh    	              $saypriorcharacter     x    speakhomeendmovement    $  gbwordiswindowowner   # T      ispccursor  
          getfocus    '      %     getwindowsubtypecode    '  %    )   
          sayobjectactiveitem    	            %     iswindowadistributionlist         %          sendmessage         sayobjectactiveitem    	           speakhomeendmovement          �    $jawsdelete      userbufferisactive  " L $  gbwordiswindowowner 
          $jawsdelete 	           setdeletedgroupbyflag           &  gsbrlautocomplete        $jawsdelete $  globalcurrentcontrol      `  
          &  gbdeletingmessagefromlist         &  gilinehasspoken           delay           msaarefresh         resetmessageflagvariables           braillerefresh               checkfornomoreitems    	      	         @     $newcontactdialog        typecurrentscriptkey          �  	  screensensitivehelpforknownclasses          userbufferisactive          userbufferdeactivate          %     �  
          (   99 This dialog box lets you customize the format of the information that appears in your Outlook To-Do list. Press TAB to move between Description buttons, and press SPACEBAR to change the parameters for the selected view items.   .. Customize the format of the information in your Outlook To-Do list. Press TAB to move between Description buttons, and SPACEBAR to change the parameters for the selected view items.     sayformattedmessage         addhotkeylinks     	         %   	  screensensitivehelpforknownclasses        t    $windowkeyshelp            getfocus      getrealwindow     getwindowname   '        userbufferisactive          userbufferdeactivate          %    Spelling    
          (   QQ To ignore the word found, use Alt + I.
To ignore all occurrences of word found, use Alt + G.
To change the word found, use Alt + C.
To change all occurrences of the word found, use Alt + L.
To Add the word found to the custom dictionary, use Alt + A.
To bring up the dictionary options for the spell checker, use Alt + O.   == Ignore word found,  Alt + I.
Ignore all occurrences of word found,  Alt + G.
Change word found, Alt + C.
Change all occurrences of  word found, Alt + L.
Add word to dictionary, Alt + A.
Bring up dictionary options for spell checker,  Alt + O.    sayformattedmessage         addhotkeylinks     	           (   ��To display the screen tips for Outlook, use Shift + F1.
To Dial from Outlook, use Control + Shift + D.
To perform an advanced find, use Control + shift + F.
To move to the next item, use Control + period.
To move to the previous item, use Control + comma.
To mark an item as read, use Control + Q.
To reply to a message, use Control + r.
To reply to all in a message, use Control + Shift + R.
To forward a message, use Control + F.
To switch between upper and lower case, use Shift + F3.
To clear formatting, use Control + Shift + Z.
To create an appointment, use Control + Shift + A.
To create a contact, use Control + shift + C.
To create a new folder, use Control + Shift + E.
To create a journal entry, use Control + Shift + J.
To create a message, use Control + Shift + M.
To create a note, use Control + Shift + N.
To create a meeting request, use Control + Shift + Q.
To find people, use Control + Shift + P.
To create a task, use Control + Shift + K.
To create a task request, use Control + shift + U.
To create a new office document, use Control + Shift + H.
To receive Email messages, use F5.
To flag item for follow up Use, Control + shift + G.
To save and close an item, use alt + S.
To go to a specific folder, use Control + Y.
To post item to a specific folder, use Control + Shift + S.
To copy an item, use Control + shift + Y.
To move an item to a specific folder, use Control + Shift + V.
To open the address book, use Control + Shift + B.
To display short cuts for Outlook, use shift + F10.
To search for text, use F4.
To search for the next occurrance of text, use Shift + F4.
To move to the In Box from anywhere, use Control + shift + I.   WWDisplay screen tips for Outlook,  Shift + F1.
Dial from Outlook,  Control + Shift + D.
Perform advanced find,  Control + shift + F.
Move to next item,  Control + period.
Move to previous item,  Control + comma.
Mark item as read, Control + Q.
Reply to message,  Control + r.
Reply to all in message, Control + Shift + R.
Forward message,  Control + F.
Switch between upper and lower case,  Shift + F3.
Clear formatting,  Control + Shift + Z.
Create appointment,  Control + Shift + A.
Create contact,  Control + shift + C.
Create new folder, Control + Shift + E.
Create journal entry,  Control + Shift + J.
Create message,  Control + Shift + M.
Create note,  Control + Shift + N.
Create meeting request,  Control + Shift + Q.
Find people,  Control + Shift + P.
Create task,  Control + Shift + K.
Create task request,   Control + shift + U.
Create new office document,  Control + Shift + H.
Receive messages,  F5.
Flag for follow up,  Control + shift + G.
Save and close item,  alt + S.
Go to specific folder,  Control + Y.
Post item to specific folder,  Control + Shift + S.
Copy item,  Control + shift + Y.
Move item to specific folder,  Control + Shift + V.
Open address book,  Control + Shift + B.
Display short cuts for Outlook,  shift + F10.
Search for text,  F4.
Search for next occurrance of text,  Shift + F4.
Move to In Box from anywhere,  Control + shift + I.      sayformattedmessage         addhotkeylinks        �    $readfromandsubject      typeofwindow         
          getobjectsubtypecode         
          �    autosayheader               autosayheader           �    autosayheader               autosayheader      	                  There is not a message file open.  This function is only availlable in a message file.   No open message file.     sayformattedmessage          <    $saynextparagraph   $  gbwordiswindowowner         $saynextparagraph   	      $  globalmenumode  '        getfocus    '            getobjectsubtypecode    '  %          %    getwindowsubtypecode    '        %    getwindowclass  '     %    getcontrolid    '       ispccursor    " h     isvirtualpccursor   
  " �   %   RichEdit      stringcontains  
          $saynextparagraph   	           dialogactive    " �%       
  " %    8   
  
  "  %    @   
  
  " 8%       
  
  " P%    )   
  
  " h%       
  
  " �%       
  
  " �%    %   
  
  " �%    &   
  
  
  "         getcurrentwindow      getwindowclass   Rctrl_RenWnd32  
  
  " ,%   MsoCommandBar   
  
         control+downarrow     typekey    %    `  
               uiarefresh     	      %   SysListview32   
          pause           getcharacterattributes    @   
                Not selected      sayformattedmessage            sayline       	           getobjecttypecode        
         control+downarrow     typekey         sayword    	      %         
         control+downarrow     typekey    	           $saynextparagraph      �    $saypriorparagraph  $  gbwordiswindowowner         $saypriorparagraph  	      $  globalmenumode  '        getfocus    '     %    getcontrolid    '            getobjectsubtypecode    '  %          %    getwindowsubtypecode    '        %    getwindowclass  '       ispccursor    " h     isvirtualpccursor   
  " �   %   RichEdit      stringcontains  
          $saypriorparagraph  	           dialogactive    " �%       
  " %    8   
  
  "  %    @   
  
  " 8%       
  
  " P%    )   
  
  " h%       
  
  " �%       
  
  " �%    %   
  
  " �%    &   
  
  
  "         getcurrentwindow      getwindowclass   Rctrl_RenWnd32  
  
  " ,%   MsoCommandBar   
  
         control+uparrow   typekey    %    `  
               uiarefresh     	      %   SysListview32   
          pause           getcharacterattributes    @   
                Not selected      sayformattedmessage            sayline       	           getobjecttypecode        
          sayword    	      %         
     	           $saypriorparagraph     �    $upalevel   $  gbwordiswindowowner         userbufferisactive          $upalevel   	              getfocus      getwindowclass   _WwG    
          saycurrentscriptkeylabel            isselectionmodeactive   # $  globalselectionmode 
         Message       Extended Selection Mode off.           sayformattedmessagewithvoice             &  globalselectionmode         escapekey      	              getcurrentwindow    '      %     getwindowsubtypecode    '       saycurrentscriptkeylabel            exituserbuffer     $  globalcurrentcontrol      `  
  " �$  globalcurrentcontrol      e   
  # �$  globalrealwindowname     Advanced Find   
  
  
               delay           $sayline       	                 quicknavstatechange         escapekey           iscalendarview  # �          getobjectname    s   
  
              Appointment cancelled:   Cancelled:    saymessage     	      $  gibrailleactive         braillerefresh        $  globalcurrentcontrol        
  " �$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  
           &  gihasaddressautocomplete          &	  gbisaddressautocompletelistvisible       &  gsbrlautocomplete           savecursor          pccursor       %       
         Menu %1    %          getwindowtext     formatstring    '          %    sayformattedmessage    	      %    "   
         Context Menu %1    %          getwindowtext     formatstring    '          %    sayformattedmessage          �    $sayline         handlenocurrentwindow      	           userbufferisactive  " t      inhjdialog  
  " � $  gbwordiswindowowner 
          $sayline    	           ispccursor            $sayline    	           getfocus    '      %     getwindowsubtypecode         
        %     saywindowtypeandtext       	         %     getwindowname   '     %     getwindowclass  '     %     getcontrolid    '     %     getcontrolid    &  globalcurrentcontrol    %   _WwN    
          sayline    	      $  globalcurrentcontrol      R  
        $  gsschedulemeetingitem          say    	         %     getcontrolid        
  # �   %     getwindowsubtypecode      B   
  
          sayobjecttypeandtext       	           +          setjcfoption            getobjectnameorvalue    '       getobjectnameorvalue    '            getobjectstate  '            getobjectsubtypecode    '       +          setjcfoption          %     getwindowsubtypecode    '  %       %  '     $  globalobjectname     Contact 
  # �$  globalcurrentcontrol      m   
  
          issamescript         
        %    !     say            issamescript         
          (   %    saymessage             sayline       	      %   SUPERGRID   
  # �   %     isinoutlookmainwindow   
          issamescript             %          getsupergridlistitem      spellmarkedupstring    	            %     getsupergridlistitem      
          say    	      %    `  
  " �$  globalcurrentcontrol      e   
  # �$  globalrealwindowname     Advanced Find   
  
  
                checkfornomoreitems    	           iscalendarview           %     getwindowleft      %     getwindowright    gettextbetween  ' 	      issamescript          % 	   !     say          % 	        say       	           issamescript            spellline      	           sayline    	      $  globalcurrentcontrol        
  # �%    B   
  " �%    +   
  
  
  # �%   Subject 
  
      CC...        
     %                getwindowtextex 
  ' 	      issamescript    # �	           getcurrentscriptkeyname   stringlower  tab   stringcontains    
        % 	   !     say       $  gbupdownnavigation               % 	        indicatecontroltype          %   % 	   sayhighlightedtext           	      $  globalrealwindowname     Address Book    
  " �
$  globalrealwindowname     Select Names    
  
  # �
%   Show Names from the:    
  
        %                 getwindowtextex ' 	      issamescript          % 	   !     say          % 	         say               positioningroup        say    	           ispccursor        $  globalrealwindowname     Customize View:   stringcontains  # d$  globalcurrentcontrol         
  # `$  globalcurrentcontrol        
  
  
          sayfocusedwindow       	            $  globalrealwindowname     Appointment   stringcontains  "     $  globalrealwindowname     Meeting   stringcontains  
     %       
  # L%       
  
          sayobjectactiveitem    	            $  globalrealwindowname     Recurrence    stringcontains     %       
  # �%       
  
          sayobjectactiveitem    	         $  globalobjectname     Editable Text     stringcontains        %   Editable Text          stringreplacesubstrings '     $  globalcurrentcontrol      >   
  "  $  globalcurrentcontrol          
  
             getline        say    	      %       
     $  globalcurrentcontrol      2   
  " �$  globalcurrentcontrol      Z   
  
  " �$  globalcurrentcontrol      x   
  
        %         say        Message  one of two         sayusingvoice      	      $  globalcurrentcontrol      3   
  " �$  globalcurrentcontrol      [   
  
  " �$  globalcurrentcontrol      y   
  
        %         say        Message  two of two         sayusingvoice      	            %   <<  
  # p$  globalcurrentcontrol        
  
          sayfocusedobject       	      %   REListBox20W    
  # $  globalcurrentcontrol      1  
  " $  globalcurrentcontrol         
  
  
             getfromstartofline  %  
         say            positioningroup        say    $  globalcurrentcontrol         
             getfromstartofline         say               getfocus                 getwindowtextex        say       	           iscalendarview     %   AfxWndW 
        	  iscalendarviewappointmenteditbox             &  gifieldhasspoken            getcalendarview      
    saybriefappointmentdata    	                readcalendarinformation    	      %   NetUIHWND   
  " �%   RichEdit20W 
  
     %       
  # �     getcalendarview      
  
        % 
   getfocusobject      accparent          % 
   accnavigate '     %    % 
   accname        say       %    comrelease        %    8   
                  getobjectname          say                 getcontrolattributes      indicatecontrolstate          %    /   
  " 4%       
  
  " L%       
  
  " d%       
  
          sayline       %    :   
        %            getobjectname     indicatecontroltype       	              iscalendarview    # %    m   
  
  # <$  globalmenumode    
  # t   %     getwindowsubtypecode         
  
  # �     userbufferisactive    
           $  globalfocuswindow               getwindowtextex        say    	      $  globalrealwindowname     Rules Wizard    
  " t$  globalrealwindowname     Rules and Alerts    
  
     $  globalcurrentcontrol      �  
          sayline    	      $  globalcurrentcontrol      �  
                sayobjectactiveitem    	      %       
          sayline    	         $  globalrealwindowname     Advanced Find   
  # �%       
  
          sayline    	      %   REComboBox20W   
  #    %   File as:      stringcontains  
        $  globalfocuswindow          saywindow      	         %     getcontrolid    '        $  globalrealwindow      getwindowname    Task      stringcontains  # �%      
  
           %     getwindowtypecode             getobjectname        getline   indicatecontroltype    	            $  globalrealwindow      getwindowname    Addressing    stringcontains  # �%    �  
  " �%    �  
  
  
  # �%       
  
        %            getobjectname      %           getwindowtext     indicatecontroltype            positioningroup        say    	              getfocus      getwindowclass   NetUIHWND   
  #      getfoldertype         
  
  #  %    8   
  
               saytreeviewlevel       	      %    �  
  # |%       
  
             getline         say    	           menusactive         sayline    	               %     getparent     getparent     getwindowsubtypecode         
  # �%      
  " h%    �  
  
  " �%    �  
  
  
  # �%       
  
  # �      %                 getwindowtextex   stringisblank   
        %  %          getmsaacolouratcombobox   getcolorname      indicatecontroltype            positioningroup        say    	           $sayline       H    $sayall $  gbwordiswindowowner         $sayall 	           ispccursor  # |      userbufferisactive    
  # � $  globalmenumode    
  #         getfocus      getwindowsubtypecode         
  " $  globalcurrentcontrol      `  
  
  
          $sayline    	           $sayall    �    $jawspagedown   $  gbwordiswindowowner         $jawspagedown   	           getcurrentwindow    '      %     getwindowsubtypecode    '  $  globalmenumode  # �    %     getwindowclass   RichEdit20W 
  
  # � %    >   
  
          saycurrentscriptkeylabel            jawspagedown                 delay           #        getobjectvalue    sayformattedmessage    	           $jawspagedown      �    $jawspageup $  gbwordiswindowowner         $jawspageup 	           getcurrentwindow    '      %     getwindowsubtypecode    '  $  globalmenumode  # �    %     getwindowclass   RichEdit20W 
  
  # � %    >   
  
          saycurrentscriptkeylabel            jawspageup               delay           #        getobjectvalue    sayformattedmessage    	           $jawspageup        $enter       isvirtualribbonactive           $enter  	      $  gbwordiswindowowner         getobjectsubtypecode      /   
  # �      isactivedocumentprotected   
          \           setjcfoption                  setquickkeynavigationstate             $enter  	           getfocus    '      %     getcontrolid    '            getobjectsubtypecode    '     %     getwindowclass  '       saycurrentscriptkeylabel            enterkey            ispccursor     %      
  " <%      
  
  " T%      
  
           &  gihasaddressautocomplete          &	  gbisaddressautocompletelistvisible       &  gsbrlautocomplete                  delay      %      
          sayline            $sayline       	         	  iscalendarviewappointmenteditbox            opencurrentappointment     	         %   OpenListView    
          &  globalsuppressopenlistview     $  globalmenumode  # �              getcurrentwindow      getparent     getwindowclass   Net UI Tool Window    stringcompare         
  
     	           iscalendarview  # �     isnavigationpane    
  # �%    8   
  
  # 0               getobjectsubtypecode         
  
          getcontrolattributes         
        %    getfocusobject      accparent   '  %  %      accchildcount   
     %       
  '  %    %    accchild              accstate         
     %       
  '      �   %       
                    indicatecontrolstate       	                     indicatecontrolstate                         indicatecontrolstate          	         P    $shifttabkey         menusactive " D      isinribbons 
          &  gbmessagehasbeenread            getwindowcategory        
  # � $  gbwordiswindowowner   
          saycurrentscriptkeylabel            shifttabkey    	                getobjectsubtypecode    '        getfocus    '     %    getwindowclass   _WwG    
  # �   %    ismessagetextwindow 
          isattachmentslistfield          saycurrentscriptkeylabel                %    getappmainwindow     RichEdit20W       findwindowwithclassandid      setfocus             &  gbwordiswindowowner         isactivedocumentprotected     # �     iscalendarview  
          $shifttab        sayline          &  gbwordiswindowowner         $shifttabkey         &  gbwordiswindowowner    	           userbufferisactive  " �   %    inribbons   
  " �   %    isstatusbartoolbar  
  " �   %    inoptionsdialog 
          $shifttab   	           saycurrentscriptkeylabel            shifttabkey       $  globalrealwindowname     - Contact     stringcontains                    delay              getfocus      getwindowclass   _WwG    
                       getobjectname     saymessage                iscalendarview               delay                getobjectsubtypecode    '  %  %   
  # �%       
  
              No appointments found at the given date interval.    No appointments found     saymessage     	            �    $tabkey      menusactive " <      isinribbons 
          &  gbmessagehasbeenread            getwindowcategory        
  # � $  gbwordiswindowowner   
          saycurrentscriptkeylabel            tabkey     	           getfocus    '      %     getwindowclass   _WwG    
          $tabkey 	           userbufferisactive  " �   %     inribbons   
  " �   %     isstatusbartoolbar  
  " �   %     inoptionsdialog 
          $tab    	           saycurrentscriptkeylabel          $  globalrealwindowname      - Task       stringcontains    # �$  globalrealwindowname         
  
        %     getcontrolid    '            getobjectsubtypecode    '  %      
  " %      
  
  " 0%      
  
     %  '             tabkey     %               delay           getfocus    '  %   %  
        %          saywindow      	            $  globalrealwindowname     - Contact     stringcontains                    delay              getfocus      getwindowclass   _WwG    
                       getobjectname     saymessage                iscalendarview               delay                getobjectsubtypecode    '  %  %  
  # P%       
  
              No appointments found at the given date interval.    No appointments found     saymessage     	            �    movetofieldusinghandle           getfocus    '  %  %   
         Message  you are already in the  %  
         sayusingvoice      	           savecursor        %     iswindowvisible       %     movetowindow            routepctojaws              pccursor          %   this item may not be visible on the screen  
         say          �    $clickbutton       %        
          '   To Button   '     %        
         '   CC Button   '     %        
       +o  '   Address Button  '     %        
        $  globalrealwindowname      - Task       stringcontains                There is not a task open.  This function is only availlable when a task is open  No Task Open      saymessage     	          '   Reminder Sound Button   '     	          Message %         sayusingvoice         $  globalappwindow %    finddescendantwindow    '  %  " �   %    iswindowvisible 
  " �   %    iswindowobscured      
  '  %          savecursor          jawscursor          savecursor        %    movetowindow            pause           leftmousebutton         restorecursor           restorecursor             Button not found           say          �    saveapplicationsettings  microsoft Outlook 2010.jcf  '       options  MeetingRequestVerbosity $	  gioutlookmeetingrequestverbosity     Outlook2010.jsi   iniwriteinteger '      options  AutoCompleteVerbosity   $  gioutlookautocompleteverbosity   Outlook2010.jsi   iniwriteinteger        options  MessageStatusVerbosity  $  gioutlookmessagestatusverbosity  Outlook2010.jsi   iniwriteinteger        options  MessageHeaderVerbosity  $  gioutlookmessageheaderverbosity  Outlook2010.jsi   iniwriteinteger        options  RepliedFlagVerbosity    $  gioutlookrepliedflagverbosity    Outlook2010.jsi   iniwriteinteger        options  FollowUpFlagVerbosity   $  gioutlookfollowupflagverbosity   Outlook2010.jsi   iniwriteinteger        options  ForwardedFlagVerbosity  $  gioutlookforwardedflagverbosity  Outlook2010.jsi   iniwriteinteger        options  MessageFlagVerbosity    $  gioutlookmessageflagverbosity    Outlook2010.jsi   iniwriteinteger        options  MessageSayAllVerbosity  $  gioutlookmessagesayallverbosity  Outlook2010.jsi   iniwriteinteger        options  AttachmentsVerbosity    $  gioutlookattachmentsverbosity    Outlook2010.jsi   iniwriteinteger        options  InformationBARVerbosity $  gioutlookinfobarverbosity    Outlook2010.jsi   iniwriteinteger        options $  giselctxflags    Outlook2010.jsi   saveselectioncontextflags          options  LanguageDetection   $  globaldetectlanguages   %     iniwriteinteger        osm  TableIndication $  gb_jcftableindication   %     iniwriteinteger        options  TableDescription    $  gitabledescription   Outlook2010.jsi   iniwriteinteger        HTML     DocumentPresentationMode    $  gbdocumentpresentationset   %     iniwriteinteger        Braille  UseOSM  $  gbbrluseosm %     iniwriteinteger        options  AnnounceCellCoordinates $  gbannouncecellcoordinates    Outlook2010.jsi   iniwriteinteger        options  IndicateNonbreakingSymbols  $  giindicatenonbreakingsymbols    %     iniwriteinteger        HTML     HeadingIndication   $  gimsofficeheadingindication %     iniwriteinteger        options  GeneralizeBullets   $  giindicatebullettype    %     iniwriteinteger        Braille  GeneralizeBullets   $  giindicatebraillebullettype %     iniwriteinteger        options  MeasurementUnits    $  gidesiredunit    Outlook2010.jsi   iniwriteinteger        osm  UnderlineProofreadingErrors $  gibrlproofreadingmark   %     iniwriteinteger        options  DetectSpelling  $  gidetectspelling     Outlook2010.jsi   iniwriteinteger        options  DetectGrammar   $  gidetectgrammar  Outlook2010.jsi   iniwriteinteger        options  MessageLinkCountIndication  $  gbmessagelinkcountindication     Outlook2010.jsi   iniwriteinteger        options  WarningMessageForBrowserOption  $	  gbwarningmessageforbrowseroption     Outlook2010.jsi   iniwriteinteger        options  TabMeasurementIndication    $  gbtabmeasurementindication   Outlook2010.jsi   iniwriteinteger       		 RichEdit and Edit Control Options    RequestMarkedUpContent  $  gbselctxwithmarkup  %     iniwriteinteger         savesayallmode     %     	      �    initializeapplicationsettings        getselectioncontextflags    &  giselctxflags      $  giselctxflags   $  gioutlookselctxbeforecaretmovebitflagordermask    setselectioncontextflags            �         setjcfoption             &  gitblheaders         &  gitabledescription        &  gbdocumentpresentationset        �  $  gbdocumentpresentationset     setjcfoption             &  gbbrluseosm      �   $  gbbrluseosm   setjcfoption            &  gbannouncecellcoordinates        `           setjcfoption    &  globaldetectlanguages        \           setjcfoption            smmgetdesiredunitsofmeasure &  gidesiredunit        &  gimsofficeheadingindication      �  $  gimsofficeheadingindication   setjcfoption             &  gidetectspelling          &  gidetectgrammar       &  gisayallreadby       ,           setjcfoption            
           setjcfoption             &  gioutlookmessageheaderverbosity       &  gioutlookmessagesayallverbosity       &  gbmessagelinkcountindication         &  gbtabmeasurementindication       &  gbselctxwithmarkup       &	  gbwarningmessageforbrowseroption       \    loadapplicationsettings  microsoft Outlook 2010.jcf  '        initializeapplicationsettings          options  SelCtxFlags $  giselctxflags    Outlook2010.jsi   inireadinteger  &  giselctxflags      $  giselctxflags   $  gioutlookselctxbeforecaretmovebitflagordermask    setselectioncontextflags           osm  TableIndication      �    getjcfoption    %     inireadinteger  &  gb_jcftableindication        �  $  gb_jcftableindication     setjcfoption           options  TableDescription    $  gitabledescription   Outlook2010.jsi   inireadinteger  &  gitabledescription      HTML     DocumentPresentationMode         �    getjcfoption    %     inireadinteger  &  gbdocumentpresentationset        �  $  gbdocumentpresentationset     setjcfoption           Braille  UseOSM       �     getjcfoption    %     inireadinteger  &  gbbrluseosm      �   $  gbbrluseosm   setjcfoption           options  AnnounceCellCoordinates $  gbannouncecellcoordinates    Outlook2010.jsi   inireadinteger  &  gbannouncecellcoordinates       options  AutoCompleteVerbosity         Outlook2010.jsi   inireadinteger  &  gioutlookautocompleteverbosity      options  MeetingRequestVerbosity       Outlook2010.jsi   inireadinteger  &	  gioutlookmeetingrequestverbosity        options  MessageStatusVerbosity        Outlook2010.jsi   inireadinteger  &  gioutlookmessagestatusverbosity     options  FollowUpFlagVerbosity          Outlook2010.jsi   inireadinteger  &  gioutlookfollowupflagverbosity      options  ForwardedFlagVerbosity         Outlook2010.jsi   inireadinteger  &  gioutlookforwardedflagverbosity     options  RepliedFlagVerbosity           Outlook2010.jsi   inireadinteger  &  gioutlookrepliedflagverbosity       options  MessageFlagVerbosity          Outlook2010.jsi   inireadinteger  &  gioutlookmessageflagverbosity       options  MessageSayAllVerbosity  $  gioutlookmessagesayallverbosity  Outlook2010.jsi   inireadinteger  &  gioutlookmessagesayallverbosity     options  AttachmentsVerbosity           Outlook2010.jsi   inireadinteger  &  gioutlookattachmentsverbosity       options  InformationBARVerbosity       Outlook2010.jsi   inireadinteger  &  gioutlookinfobarverbosity       options  MessageHeaderVerbosity  $  gioutlookmessageheaderverbosity  Outlook2010.jsi   inireadinteger  &  gioutlookmessageheaderverbosity     options  CalendarHighlightColor         Outlook2010.jsi   inireadinteger  &  globalcalendarcolor     options  GeneralizeBullets   $  giindicatebullettype    %     inireadinteger  &  giindicatebullettype         v   $  giindicatebullettype      setjcfoption           Braille  GeneralizeBullets   $  giindicatebraillebullettype %     inireadinteger  &  giindicatebraillebullettype      w   $  giindicatebraillebullettype   setjcfoption           options  MeasurementUnits    $  gidesiredunit    Outlook2010.jsi   inireadinteger  &  gidesiredunit       osm  UnderlineProofreadingErrors $  gibrlproofreadingmark   %     inireadinteger  &  gibrlproofreadingmark        �  $  gibrlproofreadingmark     setjcfoption           options  LanguageDetection   $  globaldetectlanguages   %     inireadinteger  &  globaldetectlanguages        `   $  globaldetectlanguages     setjcfoption           options  IndicateNonbreakingSymbols  $  giindicatenonbreakingsymbols    %     inireadinteger  &  giindicatenonbreakingsymbols         �   $  giindicatenonbreakingsymbols      setjcfoption           HTML     HeadingIndication   $  gimsofficeheadingindication %     inireadinteger  &  gimsofficeheadingindication      �  $  gimsofficeheadingindication   setjcfoption           options  DetectSpelling  $  gidetectspelling     Outlook2010.jsi   inireadinteger  &  gidetectspelling        options  DetectGrammar   $  gidetectgrammar  Outlook2010.jsi   inireadinteger  &  gidetectgrammar     options  MessageLinkCountIndication  $  gbmessagelinkcountindication     Outlook2010.jsi   inireadinteger  &  gbmessagelinkcountindication        options  WarningMessageForBrowserOption  $	  gbwarningmessageforbrowseroption     Outlook2010.jsi   inireadinteger  &	  gbwarningmessageforbrowseroption        options  TabMeasurementIndication    $  gbtabmeasurementindication   Outlook2010.jsi   inireadinteger  &  gbtabmeasurementindication     		 RichEdit and Edit Control Options    RequestMarkedUpContent  $  gbselctxwithmarkup  %     inireadinteger  &  gbselctxwithmarkup       �  $  gbselctxwithmarkup    setjcfoption       $  gbselctxwithmarkup    # �$  gibrlproofreadingmark         
  
          �          setjcfoption              options  SayAllReadBy    $  gisayallreadby   Outlook2010.jsi   inireadinteger  &  gisayallreadby       setsayallmode         �    getcustomtutormessage   $  gbwordiswindowowner         getcustomtutormessage      	           getfocus    '         %     getrealwindow     getwindowname   '     %     getcontrolid    '            getobjectsubtypecode    '     %     getwindowclass  '     %   Note      stringcontains             getfocus      getwindowsubtypecode      B   
      Type in text for the note.     	              	           iscalendarview           %     getrealwindow    AfxWndW   m     findwindowwithclassandid    '  %        %    getfirstchild   '  %        %    getnextwindow   '     %    getcontrolid      m   
     %       
  '      l      %   AfxWndW 
  # $  gbupdownnavigation    
  # D$  gbleftrightnavigation     
        	  iscalendarviewappointmenteditbox         %       
          getcalendarview '  %       
  " �%       
  
  " �%       
  
     %       
         %1
Press F6 key to move between the calendar present on the screen and navigation pane.    >> Press %KeyFor (SayPriorLine) or %KeyFor (SayNextLine) to move between time slots.
Press %KeyFor (SayPriorCharacter) or %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.     formatstring      formatstring       	      %       
         %1
Press F6 key to move between %2 calendars present on the screen and navigation pane.    >> Press %KeyFor (SayPriorLine) or %KeyFor (SayNextLine) to move between time slots.
Press %KeyFor (SayPriorCharacter) or %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.     formatstring       %    inttostring   formatstring       	         >> Press %KeyFor (SayPriorLine) or %KeyFor (SayNextLine) to move between time slots.
Press %KeyFor (SayPriorCharacter) or %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.     formatstring       	         %       
     %       
         %1
Press F6 key to move between the calendar present on the screen and navigation pane.    == Press %KeyFor (SayPriorLine) and %KeyFor (SayNextLine) to move between weeks.
Press %KeyFor (SayPriorCharacter)  and %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.   formatstring      formatstring       	      %       
         %1
Press F6 key to move between %2 calendars present on the screen and navigation pane.    == Press %KeyFor (SayPriorLine) and %KeyFor (SayNextLine) to move between weeks.
Press %KeyFor (SayPriorCharacter)  and %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.   formatstring       %    inttostring   formatstring       	         == Press %KeyFor (SayPriorLine) and %KeyFor (SayNextLine) to move between weeks.
Press %KeyFor (SayPriorCharacter)  and %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.   formatstring       	                  "" Press  %KeyFor (Enter) to edit the field,
 %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments,
Arrow keys exits.      formatstring       	              isnavigationpane    #  %    8   
  
     %       
         %1
Press F6 key to move between the calendar present on the screen and navigation pane.  To move through or expand items use the Arrow keys.   formatstring       	      %       
         %1
Press F6 key to move between %2 calendars present on the screen and navigation pane.  To move through or expand items use the Arrow keys.    %    inttostring   formatstring       	         == Press %KeyFor (SayPriorLine) and %KeyFor (SayNextLine) to move between weeks.
Press %KeyFor (SayPriorCharacter)  and %KeyFor (SayNextCharacter) to move between days.
Press %KeyFor (TabKey) or %KeyFor (ShiftTabKey) to move between appointments.   formatstring       	                  $  globalrealwindow      getwindowclass   bosa_sdm_Mso96    stringcontains  " l   %   bosa_sdm_Mso96    stringcontains  
  " �         $  globalfocuswindow     getparent     getwindowclass         stringcontains  
        $  globalfocuswindow     getwindowsubtypecode         
      Use the arrow keys to move through the buttons on this toolbar.
Press ENTER to activate the selected toolbar button.       	              isnavigationpane    # �%    8   
  " �%       
  
  
      To move through or expand items use the Arrow keys.    	      %   Rctrl_RenWnd32  
      To move to an item press the Arrow keys.       	           getcustomtutormessage      	          setdeletedgroupbyflag        savecursor          pccursor            getline '        restorecursor           ismessageslist             getobjectname    Group By      stringcontains          &  gideletegroupbyflag          �     $gotomessagesview        userbufferisactive          userbufferdeactivate               isnavigationpane              &  giviewchange           Control+1     typekey       �     $gotocontactsview        userbufferisactive          userbufferdeactivate               isnavigationpane              &  giviewchange           Control+3     typekey       �     $gototasksview       userbufferisactive          userbufferdeactivate               isnavigationpane              &  giviewchange           Control+4     typekey       �     $gotonotesview       userbufferisactive          userbufferdeactivate               isnavigationpane              &  giviewchange           Control+5     typekey       �     $gotocalendarview        userbufferisactive          userbufferdeactivate               isnavigationpane              &  giviewchange           Control+2     typekey       �     selectmessage           getfocus      getcontrolid      `  
           &  nsayselectafter      &  nselectingtext       sayline               $selectnextline $  gbwordiswindowowner         $selectnextline 	      $  globalcurrentcontrol      `  
           &  nsayselectafter           selectingtext           selectnextline                selectingtext           sayline    	           iscalendarview  # P     menusactive   
  # t     dialogactive      
  # �     inhjdialog    
               selectingtext           selectnextline                selectingtext      	           $selectnextline        $selectpriorline    $  gbwordiswindowowner         $selectpriorline    	      $  globalcurrentcontrol      `  
           &  nsayselectafter           selectingtext           selectpriorline               selectingtext      	           iscalendarview  # D     menusactive   
  # h     dialogactive      
  # �     inhjdialog    
               selectingtext           selectpriorline               selectingtext      	           $selectpriorline       �    $selectcurrentitem  $  gbwordiswindowowner         $selectcurrentitem  	           ismessageslist  " � $  globalcurrentcontrol      m   
  
  " $  globalcurrentcontrol      i   
  #    $  globalfocuswindow     getwindowsubtypecode      &   
  
  
  " l   $  globalfocuswindow     getwindowclass   SysListview32   
  
          typecurrentscriptkey            &  gilinehasspoken           delay           getcharacterattributes    @   
              Selected      sayformattedmessage                Not selected      sayformattedmessage            sayline    	           $selectcurrentitem     0    stringwordcharacterin          %          stringcontainschars      %      	      %       
  # �       %   %         substring     stringisblank     
     %       
  '   d          %   %    stringchopleft              stringsegment      	      L    $saynextword         userbufferisactive  " P $  gbwordiswindowowner 
          $saynextword    	              getfocus      getwindowsubtypecode    '        ispccursor     %     +   
  # �$  globalcurrentcontrol        
  " 0$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  # �$  globalobjectname     Subject 
  
  
  " �$  globalcurrentcontrol        
  
  
          getcharacter    '  %   ;   
          $saynextcharacter   	      %       
          nextcharacter              getcharacter         
  # �                retrieveelement  ;   
  
          nextcharacter              $saynextcharacter   	      %     +   
  # �$  globalcurrentcontrol        
  " d$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  # �$  globalobjectname     Subject 
  
  
  " �$  globalcurrentcontrol        
  
  
          nextword               getcharacter      stringlength         
          sayfield               sayword       	      %     +   
  # �$  globalcurrentcontrol      �  
  
          getline '        %  $  globaliposition        substring     stringisblank        $  globaliposition      
  &  globaliposition  �   $  globaliposition      
  &  globaliposition $  globaliposition    %    stringlength         
  
          nextcharacter         %    stringlength         
  &  globaliposition          %  $  globaliposition   stringwordcharacterin          say    	           iscalendarview  #         getfocus      getwindowsubtypecode         
  
          $saynextcharacter   	              $saynextword           $saypriorword        userbufferisactive  " P $  gbwordiswindowowner 
          $saypriorword   	              getfocus      getwindowsubtypecode    '        ispccursor     %     +   
  # �$  globalcurrentcontrol        
  " 0$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  # �$  globalobjectname     Subject 
  
  
  " �$  globalcurrentcontrol        
  
  
          getcharacter    '  %   ;   
          $saypriorcharacter  	      %       
          priorcharacter             getcharacter         
  # �                retrieveelement  ;   
  
          priorcharacter             $saypriorcharacter  	      %     +   
  # �$  globalcurrentcontrol        
  " d$  globalcurrentcontrol        
  
  " �$  globalcurrentcontrol        
  # �$  globalobjectname     Subject 
  
  
  " �$  globalcurrentcontrol        
  
  
          priorword              getcharacter      stringlength         
          sayfield               sayword       	      %     +   
  # �$  globalcurrentcontrol      �  
  
          getline '        %  $  globaliposition        substring     stringisblank        $  globaliposition      
  &  globaliposition  �   $  globaliposition      
  &  globaliposition $  globaliposition      
          priorcharacter          &  globaliposition          %  $  globaliposition   stringwordcharacterin          say    	           iscalendarview  # �        getfocus      getwindowsubtypecode         
  
          $saypriorcharacter  	              $saypriorword      �    $saymsaadata    $  globalcurrentcontrol      `  
  " � $  globalcurrentcontrol      e   
  # � $  globalrealwindowname     Advanced Find   
  
  
               getobjectvalue  '      %     stringlength         
      No more items in this view. '           issamescript          %     spellstring          %          say                   Must be in the Message, Appointment, Contact, Task, or Notes list.    sayformattedmessage          �     ismessageopenforediting       $  globalrealwindow          finddescendantwindow      getwindowsubtypecode    '   %     B   
             	               	      �    ismessageopenforreading      getfocus    '         $  globalrealwindow          finddescendantwindow      getwindowsubtypecode    '     %     getwindowclass   _WwG    
  #           %     getparent     getparent     getwindowclass   AfxWndA 
  
              %     getnextwindow     getnextwindow     getnextwindow                	                  	      �    activeitemchangedevent                inhjdialog     $  gbactiveitemchanged          &  gbactiveitemchanged              getobjectname           say    	         %   %  %  %  %  %    activeitemchangedevent     	               &  gbactiveitemchanged $  gbwordiswindowowner       %   %  %  %  %  %    activeitemchangedevent     	           getobjectsubtypecode    '     %     getwindowsubtypecode    '     %     getcontrolid    ' 	    %     getwindowclass  ' 
           getobjectvalue  '  % 
  SUPERGRID   
  # �   %     isinoutlookmainwindow   
          &  gilinehasspoken    %           getsupergridlistitem    '     
  outlook_functions_2010::issamemessage      	              getcurrentscriptkeyname  Control+Space           stringcompare         %    
          say         iskeywaiting              isautopreviewenabled    #              getobjectname    :     stringcontains    
           %     getwindowleft      %     getwindowtop       %     getwindowright     %     getwindowbottom   @        �     �       gettextinrect   '     %     %   
     stringcontains    stringchopleft  '     %    +     say                	      % 	   `  
  # t% 
  SUPERGRID   
  
          iscalendarview              %     getwindowleft      %     getwindowright    gettextbetween         say    	           sayline    	      % 	   `  
  " H% 	   e   
  
           &  gbmessagehasbeenread          &  gbfocushaschanged   $  nselectingtext     	      $  gilinehasspoken          &  gilinehasspoken 	      % 	 &  globalcurrentcontrol         speakmessageflags      $  gbiscalendarappointmentlist # t$  gbleftrightnavigation     
           $  gileft  $  giright   gettextbetween         say            �    getjcfoption    '       �         setjcfoption            sayobjectactiveitem         �  %    setjcfoption          	      %    7   
  " �   %     getwindowsubtypecode         
  
     $  globalcurrentcontrol      �  
     	            %   Select Names      stringcontains  " T	   %   Address Book      stringcontains  
  # l	% 	   i   
  
     	           iscalendarview  # �	   %     getwindowclass   NetUIHWND   
  
  # �	%    8   
  
  # $
               getobjectsubtypecode         
  
          getcontrolattributes         
                    indicatecontrolstate                         indicatecontrolstate                       getobjectname          say    	      %    8   
  " �%       
  # D%        
  
  # �     dialogactive    # �     inhjdialog    
  
  
               saytreeviewlevel       	         %   %  %  %  %  %    activeitemchangedevent        �    speakmessageflags        +     getjcfoption    '   %        
           '        +   %     setjcfoption               '       '        &  givaluestringlength       &  gihasunreadflag       &  gihasrepliedflag          &  gihasforwardedflag        &  gihasfollowupflag         &  gihasmessagestatusflag        &  gihasattachmentflag       &  gihasimportanceflag       &  gihasmeetingrequestflag      +          setjcfoption                 getobjectname   '            getobjectvalue  '       +   %     setjcfoption       %  &  gsbrlname   %  &  gsbrlvalue     %    stringlength    &  givaluestringlength $  givaluestringlength      
          &  gsbrlname        &  gsbrlvalue   empty   &  gsbrlappointmenttext       $  globalcurrentcontrol      `  
              	           getcharacterattributes       
  # �   %   Group By      stringcontains    
     $  gioutlookmessagestatusverbosity        Message  Unread         sayusingvoice              &  gihasunreadflag          &  gihasunreadflag       %   Meeting   stringcontains     $	  gioutlookmeetingrequestverbosity          %        %         ����  stringsegment     stringlength      stringchopright '      Message %         sayusingvoice              &  gihasmeetingrequestflag          &  gihasmeetingrequestflag       %   Forwarded     stringcontains     $  gioutlookforwardedflagverbosity        Message  Forwarded          sayusingvoice              &  gihasforwardedflag           &  gihasforwardedflag        %   Replied   stringcontains     $  gioutlookrepliedflagverbosity          Message  Replied        sayusingvoice              &  gihasrepliedflag             &  gihasrepliedflag          %   Attachment Yes    stringcontains     $  gioutlookattachmentsverbosity          Message  Attachment         sayusingvoice              &  gihasattachmentflag          &  gihasattachmentflag       %   ,      %   ,    Flag Status         stringsegmentindex    stringsegment   '     %   Message   stringcontains        %   Unread         stringreplacesubstrings '     %   Read           stringreplacesubstrings '     %   Message        stringreplacesubstrings '     %   Replied        stringreplacesubstrings '     %   Forwarded          stringreplacesubstrings '        %    stringtrimleadingblanks   stringtrimtrailingblanks    '          '        %   ,      %   ,    Importance          stringsegmentindex    stringsegment   '     %   Unflagged     stringcontains    # l   %   Normal    stringcontains    
          '     %      Flag      stringlength         
    stringchopleft  '     %     %       
  %  
  '     $  gioutlookmessageflagverbosity          Message %         sayusingvoice            %    stringlength         
          &  gihasmessagestatusflag           &  gihasmessagestatusflag        %   Normal    stringcontains       $  gioutlookmessageflagverbosity          Message %         sayusingvoice              &  gihasimportanceflag          &  gihasimportanceflag            	      (    sayobjecttypeandtext            inhomerowmode   " X      ispccursor    
  " |      userbufferisactive  
        %     sayobjecttypeandtext       	      $  gbwordiswindowowner       %     sayobjecttypeandtext       	         	  iscalendarviewappointmenteditbox       	           getfocus    '     %    getwindowsubtypecode    '     %    getcontrolid    '     %    getwindowclass  '  $  globalobjectname     Contact 
  # �%    m   
  
                %    getwindowname          indicatecontroltype         sayline    	      %      
  # �$  globalobjectname     Address 
  
        %   Address        indicatecontroltype         sayline    	      %      
  #  %    B   
  
  # L     typeofwindow         
  
        %   CC...      %               getwindowtextex   indicatecontroltype    	      %       
  # �%    t   
  
  # $  globalrealwindowname     New Entry   
  
        %     $  globalfocuswindow     getwindowname      $  globalfocuswindow               getwindowtextex   indicatecontroltype            positioningroup        say    	         $  globalobjectname     Appointment   stringcontains    # \   %   afxwnd    stringcontains    
          getcalendarview   # �   	  iscalendarviewappointmenteditbox      
  # �$  giinappointmentfield      
  # �%    m   
  
  # $  globalmenumode    
  # ,%       
  
  # T     userbufferisactive    
                $  globalfocuswindow     getwindowname      $  globalfocuswindow               getwindowtextex   indicatecontroltype    	            %     sayobjecttypeandtext          X    gotofounditems          getfocus      getrealwindow   '         %     getwindowname    Advanced Find     stringcontains                	         $  globalrealwindow     SUPERGRID     e     findwindowwithclassandid    '  %               	         %    setfocus               	            �    $getattendeesstatus         getfocus      getrealwindow   '      $  giismessage $  giistask      typeofitem  '  %   Meeting 
  # � %   Appointment 
  
          saycurrentscriptkeylabel            typecurrentscriptkey       	                 getfocus      getappmainwindow     All Attendees Status         $  giobjsubtype    $  giobjstate  $  gsobjvalue  $  gsobjdescription      getobjectinfobyname          Attendees status not found.        say    	       Attendees Status:    

  
  $  gsobjvalue  
   

  
  		 Press Escape to close this window.  
  '       userbufferclear         (   %    saymessage        $    $contactfieldsdialog         getfocus    '            %     getrealwindow     getwindowname     - Contact    stringcontains        
          typecurrentscriptkey       	         %     getfirstwindow  '  %  '         '  %   # %    �   
  
        %     iswindowdisabled      # p   %     iswindowobscured      
  # �   %     getwindowname        
  
        %     getwindowsubtypecode         
     %     %     getwindowname   
       
     %           getwindowtext   
      
  '  %     %     inttostring 
      
  '           %     getnextwindow   '   %       
  '            getfocus    '           %    getparent     getparent     getwindowclass   AfxWnd  
     %  $  globalrealwindowname    
       
      
  '  %     %    inttostring 
      
  '     $  globalprevreal  '  $  globalprevrealname  '  $  globalprevapp   '     %   JAWS            dlgselectiteminlist ' 	 %  &  globalprevreal  %  &  globalprevrealname  %  &  globalprevapp   % 	       
     	         %      % 	   stringsegment   ' 
       %      % 	   stringsegment     stringtohandle  '      %   % 
   movetofieldusinghandle        �    $gotofounditemsscript        gotofounditems  '   %        
              The Found Items list is not available until a Find is performed 

 Not available until a Find is performed   saymessage        %         
              Not in Advanced Find
This keystroke combination only works in the Advanced Find dialog   Not in Advanced Find      saymessage           T    checkfornomoreitems                  getfocus      getrealwindow    MSCtls_Statusbar32    findwindow    getwindowname   '            getobjectname   '  %   0 Items 
  "    %   Loading...    stringcompare         
  
         0 Items %     say            	               	          processboundarystrike       $  gbwordiswindowowner       %   %    processboundarystrike      	         %     lviscustomized          beep       	         %     getwindowsubtypecode    '          getfocus      getwindowclass  '  %            getobjectsubtypecode    '        %   OUTEXVLB      stringcontains  " �   %   SUPERGRID     stringcontains  # �$  globalcurrentcontrol      �  
  
  
     	      %    #      isvirtualpccursor   
          beep       	      %    B   
  # h   %     usingenhancededitsupport      
     $  globalcurrentcontrol          
          sayline       	      %    B   
  " �%    %   
  
  " �%    &   
  
  " %       
  
  " (%       
  
  " @%    
   
  
  " X%       
  
  " p%    8   
  
     $  globalcurrentcontrol      `  
          sayline       $  globalcurrentcontrol      �  
          beep          	             getobjectnameorvalue        %      %          �    getjcfoption    '       �          setjcfoption                    getobjectname   '  %          �  %    setjcfoption                       getobjectvalue  '     %     	          $selectall  $  gbwordiswindowowner         $selectall  	           getcurrentwindow    '      %     getwindowsubtypecode         
          selectentiredocument            pause           $sayselectedtext    	           $selectall     �    valuechangedevent                 getfocus    '     %    getwindowclass  '     %     getwindowclass  ' 	    %     getcontrolid    ' 
    %    getcontrolid    '     %     getwindowsubtypecode    '       inhjdialog        %   %  %  %  %  %  %    valuechangedevent      	         %     inribbons   # �%   RICHEDIT60W 
  
     	      $  gbwordiswindowowner       %   %  %  %  %  %  %    valuechangedevent      	           iscalendarview  # D   	  iscalendarviewappointmenteditbox      
  # d% 	  SUPERGRID   
  
        %     calendarpropertieschangedevent     	            &	  gbisaddressautocompletelistvisible        &  gihasaddressautocomplete         &  gsbrlautocomplete   % 	  REListBox20W    
     % 
     
  " `%      
  
  " x% 
     
  
  " �%      
  
  " �% 
     
  
  " �%      
  
  " �% 
   
  
  
  " �%    
  
  
  " % 
      
  
  "  %       
  
          &  gihasaddressautocomplete         &	  gbisaddressautocompletelistvisible  %  &  gsbrlautocomplete        braillerefresh     $  gioutlookautocompleteverbosity        %          say    	            %   Font:   
  # 4%    )   
  
     	      $  globalwindowclass    REComboBox20W   
  # �%    )   
  
        %          say    	               %     getparent     getparent     getwindowsubtypecode         
  # P% 
     
  " 4% 
   �  
  
  " L% 
   �  
  
  
  # h%       
  
  # �      %                 getwindowtextex   stringisblank   
                getmsaacolouratcombobox   getcolorname      
     say    	         $  globalappwindowname  Customize View:   stringcontains  " �   $  globalappwindowname  Options   stringcontains  
  " �$  globalrealwindowname     Message Options 
  
  " $$  globalwindowclass    REComboBox20W   
  #  %       
  
  
        %          say    	      %   Show Names from the:    
  # �%       
  
     	      %       
  # �% 
   t   
  
  # �$  globalrealwindowname     New Entry   
  
           $  globalfocuswindow               getwindowtextex        say    	         $  globalappwindowname  Customize View:   stringcontains  " 
$  globalrealwindowname     Advanced Find   
  #  
%   Search for the word(s): 
  
  
        %          say       $  globalobjectname     File as:    
        %          say    	      % 	  NetUIHWND   
  # �
$  globalwindowclass    RichEdit20W 
  
  # �
%   Reminder    
  
  #  % 
      
  
     	           getfoldertype        
  # H% 
   m   
  
        %         say    	      %   SUPERGRID   
  # �% 	  RichEdit20WPT   
  
  # �%    �  
  
  # �% 
   �  
  
           %          getsupergridlistitem      
     say    	      $  gioutlookautocompleteverbosity        %    stringisblank   # �   %    stringisblank     
  # �%   RichEdit20WPT   
  " �%   Button  
  
  
  # �% 	  NetUIHWND   
  
          &	  gbisaddressautocompletelistvisible     %    
     say    %  &  gsbrlautocomplete        &  gihasaddressautocomplete         braillerefresh     	            &  gihasaddressautocomplete          $  gioutlookinfobarverbosity      % 	  RichEdit20WPT   
  # X   $  ghoutlookinfobar      iswindowvisible 
        $  ghoutlookinfobar      ����      %    getobjectfromevent            accvalue    '     $  gsinfobarcontents   %         stringcompare         %         say    %  &  gsinfobarcontents               %   %  %  %  %  %  %    valuechangedevent         $    objstatechangedevent           $  gbwordiswindowowner       %   %  %  %  %    objstatechangedevent       	      $  globalrealwindowname     Trust Center    
  # � %    7   
  
     	         %     getwindowclass   bosa_sdm_Mso96  
  # d   $  globalrealwindowname     Customize     stringcontains  
     	              getfocus      getwindowclass   NetUIHWND   
  # �          getobjectsubtypecode      8   
  
  #      iscalendarview    
                saytreeviewlevel       	           iscalendarview  # �     isnavigationpane    
  # �%    8   
  
  # �               getobjectsubtypecode         
  
     	         %   %  %  %  %    objstatechangedevent          �     windowdestroyedevent       %   $  ghoutlookinfobar    
     $  ghnull  &  ghoutlookinfobar          %     windowdestroyedevent          x    $announceoutlookinfobar $  ghoutlookinfobar          $  ghoutlookinfobar     Info Bar         %   %  %    getobjectinfobyname       %    stringisblank         $  ghoutlookinfobar            getwindowtext   '        %    stringisblank           savecursor          invisiblecursor         savecursor        $  ghoutlookinfobar      movetowindow            getobjectvalue  '     %    spellstring         restorecursor           restorecursor            %         say           Message  Info bar is empty.         sayusingvoice            �    $sayword    $  gbwordiswindowowner         $sayword    	           getfocus    '        sayallinprogress    # � $  ginocursorrouting   
     	           getcalendarview       	  iscalendarviewappointmenteditbox            $sayword    	            %     getcontrolid    '       ispccursor  # �   %     getwindowsubtypecode      +   
  
  # �%      
  " �%      
  
  " �%      
  
  
  # �     �    getjcfoption      
          $saycharacter        issamescript               getcharacter      !     say       	         %     getwindowsubtypecode      +   
  # (%      
  " �%      
  
  " %      
  # $  globalobjectname     Subject 
  
  
  " $%      
  
  
             getcharacter      stringlength         
          sayfield       	              $sayword       l    retrieveelement          getrestriction  '       savecursor          invisiblecursor         routeinvisibletopc     %         
     %       
          priorcharacter        %       
          nextcharacter              getcharacter    '     %        
     %       
          priorword         %       
          nextword               getword '     %        
     %       
          priorline         %       
          nextline               getline '          restorecursor      %     	      �    $nextdocumentwindow $  gbwordiswindowowner         $nextdocumentwindow 	           userbufferisactive          userbufferdeactivate              control+tab   typekey         getfoldertype        
               getobjectname   '      %    View      stringcontains           &  giviewchangehasspoken      %          say         readcalendarinformation             �    $previousdocumentwindow $  gbwordiswindowowner         $previousdocumentwindow 	           userbufferisactive          userbufferdeactivate              control+shift+tab     typekey         getfoldertype        
               getobjectname   '      %    View      stringcontains           &  giviewchangehasspoken      %          say         readcalendarinformation             ,    resetmessageflagvariables         &  gihasrepliedflag          &  gihasforwardedflag        &  gihasfollowupflag         &  gihasattachmentflag       &  gihasunreadflag       &  gihasimportanceflag       &  gihasmeetingrequestflag       &  gihasmessagestatusflag  	      P    $appointmentsandattachments      '        getcalendarview    $  giinappointmentfield              getcalendarview      
          '          '          issamescript            &  gbisinappointmentviewer    %    getappointmentlist  '  %       
         No Appointments        say    	           userbufferclear       %    userbufferaddtext           userbufferactivate          sayline            $saydate            %    processalldayevents          	           $outlookattachmentslist       �    readheader          '        '        '        '        '        '       getfocus    '     %    getwindowclass  '     %    getappmainwindow    ' 	    % 	  #32770         findwindow  ' 
 % 
          Message       not in one of Outlook's read, create, or modify dialogs.    		 not in one of Outlook's dialogs.      sayformattedmessagewithvoice       	         % 	   getwindowname   '     %   - Message     stringcontains  " p      %    getwindowname    Message   stringcontains  # l   %   - Meeting     stringcontains    
  
  " �   %   - RSS Article     stringcontains  
          '     % 
       finddescendantwindow            '  %        
      Author: '      '     %        
      Posted On:  '    	  '     %        
      Subject:    '      '           % 
       finddescendantwindow            '  %        
      From:   '      '     %        
      Sent:   '      '     %        
      To: '      '     %        
      Cc: '      '     %        
      Subject:    '      '        %        
      To  '      '     %        
      Cc  '      '     %        
      Subject:    '      '     %        
      Bcc '      '     %        
      Signed By:  '        '     %        
      Label:  '        '     %     	   
      Attachments:    '        '              %   - Meeting     stringcontains     %        
      From:   '       '     %        
      Sent:   '       '     %        
      Location:   '       '        % 
   getappmainwindow          finddescendantwindow    '     %        
      When:   '       '        % 
   getappmainwindow          finddescendantwindow    '     %        
      Subject:    '       '        % 
   getappmainwindow          finddescendantwindow    '     %        
      Description:    '       '             getfocus      getappmainwindow     _WwG      findwindow  '     %        
      Required:   '       '        % 
   getappmainwindow          finddescendantwindow    '     %        
      Optional:   '       '        % 
   getappmainwindow          finddescendantwindow    '           %   - Contact     stringcontains     %        
      Full Name   '     %        
      Job title:  '     %        
      Company:    '     %        
      File as:    '     %        
      Phone 1 '       '     %        
      Phone 2 '       '     %        
      Phone 3 '       '     %        
      Phone 4 '       '     %     	   
      Address '     %     
   
      E-mail  '       '     %        
      Web page address    '           %   - Appointment     stringcontains  " �   %   - Event   stringcontains  
  " �   %   - Calendar    stringcontains  
     %        
      Start date: '     %        
      Start time: '       '     %        
      End date:   '     %        
      End time:   '       '     %        
      Subject:    '     %        
      Sent:   '     %        
      Location:   '     %        
      Organizer:  '     %     	   
      All day event   '     %     
   
      Notes   '           %   - Task    stringcontains     %        
      To: '     %        
      Subject:    '     %        
      Due date:   '     %        
      Start date: '     %        
      Status: '     %        
      Priority:   '     %        
      % Complete: '     %        
      Reminder:   '     %     	   
      Owner:  '           %   - Journal     stringcontains     %        
      Entry type: '     %        
      Company:    '     %        
      Start date  '     %        
      Start time  '     %        
      Subject:    '     %        
      Duration:   '     %        
      Notes   '            Message       That field is not available outside an open message.    

 not available outside an open message     sayformattedmessagewithvoice       	      %            issamescript       %  # �   %    iswindowvisible 
        %    setfocus             % 
 %  %    clickobjectbyname         	         %        % 
 %    finddescendantwindow    '  %             % 
   getnextwindow   %    finddescendantwindow    '     %        %    getwindowsubtypecode    '     %               getwindowtextex '       issamescript       %  " L%        
  
        % 
 %  %    clickobjectbyname            %  " �%        
  
         PCCursor         %       
  %  
  %       
  %  
    sayformattedmessagewithvoice          %  %    indicatecontrolstate          $  globalprevfocus       
         Message      %       
   that field is not available in this particular dialog.  
  %       
   not available in this particular dialog.    
    sayformattedmessagewithvoice                	         % 
 %  %  %  %  %    getobjectinfobyname    %     %   Phone 1 
      Business:   '     %   Phone 3 
      Business fax:   '     %   Phone 2 
      Home:   '     %   Phone 4 
      Mobile: '        %     %   Location:   
              getfieldtext    '     %   When:   
              getfieldtext    '     %   Start time: 
               getfieldtext    '       '     %   End time:   
              getfieldtext    '       '     %   Subject:    
              getfieldtext    '     %   Required:   
              getfieldtext    '     %   Optional:   
              getfieldtext    '     %   Description:    
                   getfocus      getappmainwindow     _WwG      findwindow          getwindowtext   '        $  gioutlookmessageheaderverbosity        PCCursor         %       
  %  
  %       
  %  
    sayformattedmessagewithvoice       	         %  %  %    indicatecontroltype       %  %    indicatecontrolstate              Message      %       
   that field is not available in this particular dialog.  
  %       
   not available in this particular dialog.    
    sayformattedmessagewithvoice             �     $readoutlookheader          iscalendarview          saycurrentscriptkeylabel            typecurrentscriptkey       	         %     readheader            getfieldtext                  getfocus      getappmainwindow    %     finddescendantwindow    '     %    getwindowclass   RichEdit20WPT   
        %          getwindowtext   '        %                getwindowtextex '     %     	      `    $gotooutlookmessagebodywindow           getfocus      getwindowclass   _WwG    
                getfocus      gettoplevelwindow    _WwG      findwindow  '   %           savecursor          invisiblecursor         savecursor        %     movetowindow       %        getcurrentwindow    
             getcursorcol         
       getcursorrow      moveto          routepctoinvisible          restorecursor           restorecursor           pccursor               restorecursor           restorecursor         %     setfocus            leftmousebutton                   Not in an open message   No open message   saymessage                   

 You are already in the message body.     Already in message body.      saymessage     	         �    readoutlookmessage  $  gbwordiswindowowner         getfocus    &  ghmessagebodywindow      isactivedocumentprotected      $  gbmessagehasbeenread         $  gioutlookmessageheaderverbosity         pause                readheader               readheader             &  gbmessagehasbeenread       $	  gbwarningmessageforbrowseroption    	  saywarningmessageforbrowseroption                        delay      $  gbmessagelinkcountindication            getlinkcount    '   %         
         Message     Message has%1 links.       %     inttostring   formatstring           sayusingvoice            $  gioutlookmessagesayallverbosity         $sayall             p    typeofitem    � �           getfocus      getappmainwindow      getwindowname   '        '         '     %    - Message    stringcontains          '    Message    	         %   RSS Article   stringcontains          '    Message    	         %    - Contact    stringcontains      Contact    	         %   - Meeting     stringcontains      Meeting    	         %   - Appointment     stringcontains      Appointment    	         %    - Task       stringcontains          '   Task       	              	         �    $movebackitem           getfocus      getwindowclass   _WwG    
          &  gbwordiswindowowner    $  gbwordiswindowowner # �      isactivedocumentprotected     
         CTRL+LeftBracket      typekey         sayfontsize    	            &  gbmessagehasbeenread               quicknavstatechange         typecurrentscriptkey             '         '            quicknavstatechange              delay         %   %    typeofitem  '  %       
     	          Previous %1 %    formatstring    '          %   Previous      sayformattedmessage       %          pause                 getfocus      getappmainwindow          finddescendantwindow    '  %       getfocus    
        %    setfocus             %    saywindowtypeandtext             %           readoutlookmessage           �    $moveforwarditem            getfocus      getwindowclass   _WwG    
          &  gbwordiswindowowner    $  gbwordiswindowowner # �      isactivedocumentprotected     
         CTRL+RightBracket     typekey         sayfontsize    	            &  gbmessagehasbeenread               quicknavstatechange         typecurrentscriptkey             '         '            quicknavstatechange              delay         %   %    typeofitem  '  %       
     	          Next %1 %    formatstring    '          %   Next      sayformattedmessage       %          pause                 getfocus      getappmainwindow          finddescendantwindow    '  %       getfocus    
        %    setfocus             %    saywindowtypeandtext             %           readoutlookmessage           t    $outlookattachmentslist      getfocus    '      %     getwindowclass  '        %     getappmainwindow          finddescendantwindow      " �      getcurrentcontrolid   `  
  
              Not in an open message   No open message   saymessage     	                     delay           isactivedocumentprotected              %     getappmainwindow     RichEdit20WPT         findwindowwithclassandid    '           %     getappmainwindow     AfxWndW       findwindowwithclassandid    '     %  # �      %          getwindowtext     stringlength    
        %    movetowindow            leftmousebutton         pccursor            jawshome                   There are no attachments in this message.    No attachments.   sayformattedmessage          �     $refreshscreen       $refreshscreen       getcalendarview         &  gbrefreshobject              getobjectname          say              readcalendarinformation          8    quicknavstatechange    %             quicknavkeytrapping         \           setjcfoption                  setquickkeynavigationstate                quicknavkeytrapping           \          setjcfoption                 setquickkeynavigationstate              �    sayallreadsby           ,     getjcfoption    '       
     getjcfoption    '  %        $  gisayallreadby       
           &  gisayallreadby     $  gisayallreadby       
  &  gisayallreadby     %       
           '     %       
           '       '     %       
  '          ,   %    setjcfoption            
   %    setjcfoption          %        
     %       
      Line with pauses       	       Line without pauses    	         %       
      Sentence       	      %       
      Paragraph      	         t    savesayallmode  $  gisayallreadby        
         options  SayAllMode  $  gisayallreadby   microsoft Outlook 2010.jcf    iniwriteinteger '       options  LinePauses         microsoft Outlook 2010.jcf    iniwriteinteger '     $  gisayallreadby       
  " P$  gisayallreadby       
  
         options  SayAllMode  $  gisayallreadby   microsoft Outlook 2010.jcf    iniwriteinteger '       options  LinePauses         microsoft Outlook 2010.jcf    iniwriteinteger '     $  gisayallreadby       
         options  SayAllMode         microsoft Outlook 2010.jcf    iniwriteinteger '       options  LinePauses        microsoft Outlook 2010.jcf    iniwriteinteger '         options  SayAllReadBy    $  gisayallreadby   Outlook2010.jsi   iniwriteinteger       �    setsayallmode   $  gisayallreadby        
          ,           setjcfoption            
           setjcfoption          $  gisayallreadby       
  " � $  gisayallreadby       
  
          ,   $  gisayallreadby    setjcfoption            
           setjcfoption          $  gisayallreadby       
          ,           setjcfoption            
          setjcfoption             4     hasvirtualenhancedclipboard         	      �    sayline          userbufferisactive  " P      ispccursor    
  " l $  globalmenumode  
  " � $  gbwordiswindowowner 
        %   %    sayline    	           getfocus    '     %    getcontrolid    '     %    getwindowsubtypecode    '            getobjectname   '            getobjectsubtypecode    '  %   Contact 
  # �%    m   
  
                  getobjectvalue          say    	      %       
  # �%    t   
  
  # 4$  globalrealwindowname     New Entry   
  
           %              getwindowtextex        say            positioningroup        say    	         $  globalrealwindowname     - Contact     stringcontains  # %       
  
          sayfocusedobject       	      %    `  
  " �%    e   
  # �$  globalrealwindowname     Advanced Find   
  
  
                    delay                 checkfornomoreitems    	           speakmessageflags           sayobjectactiveitem    	         %                getwindowtextex '  %       
  # �%      
  
  # �      %    getwindowname    time:     stringcontains  
        %         say    	         $  globalrealwindowname     Rules and Alerts      stringcontains  " �$  globalrealwindowname     Advanced Find   
  
     %       
             $  globalobjectname           indicatecontroltype    	         %       
  " $%    8   
  
        %    getwindowclass   NetUIHWND   
          sayfocusedobject               saytreeviewlevel          	      $  globalrealwindowname     Rules Wizard    
  "  $  globalrealwindowname     Rules and Alerts    
  
     %    �  
                  getobjectstate       
  %  
         say    	      %    �  
        %         say    	      %       
        %   %    sayline    	         %      
  # 8   %    ismessagetextwindow 
  # �      %    getappmainwindow           findwindowbytype      
        %            getobjectname     indicatecontroltype    	         %   %    sayline       �     $nextdocumentwindowbypage   $  gbwordiswindowowner         $nextitem           $nextdocumentwindowbypage         �     $previousdocumentwindowbypage   $  gbwordiswindowowner         $previousitem           $previousdocumentwindowbypage         �     $saymoveforward      typecurrentscriptkey            inhjdialog  " p      userbufferisactive  
     	               Move forward     Forward   saymessage        �     $saymoveback         typecurrentscriptkey            inhjdialog  " p      userbufferisactive  
     	               Move back    Back      saymessage        �    $sayselectedtext         iscalendarview  # P      menusactive   
  # t      dialogactive      
  # �      inhjdialog    
        %   %  %  %  %  %    parsemsaacalendarstring                Selection is from %1 to %2  %  %    formatstring        Selection is from %1 to %2  %  %    formatstring      saymessage     	           $sayselectedtext       L    $braillerouting      brailleismessagebeingshown          brailleclearmessage    	      $  gbwordiswindowowner         $braillerouting 	              getfocus      getcontrolid    '   %       
  " � %        
  
  " %       
  
  " (%       
  
     %       
  " T%        
  
          '     %       
  " �%       
  
         '          getcurrentwindow    '     %    getlastwindow   '     %    getcontrolid    '  %  %  
  # %  
     %          %    getcontrolid    '  %  %  
        %    getnextwindow   '         %       
  " �%        
  
  # �   %    movetowindow    
  " (%       
  "  %       
  
  # $   %    movetowindow    
  
          leftmousebutton            pccursor       	           brailleisstructuredline # �        getfocus      getwindowclass   AfxWndW 
  
  #           getobjectsubtypecode      7   
  
          enterkey       	           $braillerouting    �    $readboxintaborder        $  globalrealwindow      getwindowname    Advanced Find     stringcontains            $readboxintaborder  	           getdialogstatictext              msaagetdialogstatictext        say             $  globalrealwindow      getwindowname          say       $  globalrealwindow     DoChildWindows    enumeratechildwindows         p    windowactivatedevent          %     getwindowname   '     %   Appointment   stringcontains        %    Rctrl_RenWnd32    �    findwindowwithclassandid    '  %  # �    %    iswindowvisible 
  # $  gioutlookinfobarverbosity        
  
        %    infobarshowevent                %     windowactivatedevent          �    saytreeviewitem           getobjectname   '        getline '     %   %          stringcompare      %   '     %  %         stringtrimcommon          %    stringtrimleadingblanks '        %              stringsegment    0123456789    stringcontainschars       %           say                 %1 unread messages     %              stringsegment     formatstring        %1 unread messages     %              stringsegment     formatstring      saymessage             iscalendarview  # h     isnavigationpane    
  # �          getobjectsubtypecode      8   
  
          getcontrolattributes         
                    indicatecontrolstate             %           say    	         %           say               getfocus      saytvfocusitemexpandstate      	           saytreeviewitem       `     $jawshome        saycurrentscriptkeylabel                 homeendmovement       `     $jawsend         saycurrentscriptkeylabel                 homeendmovement       �	    saytreeviewlevel            isnavigationpane    # t           getobjectsubtypecode      8   
  
                  getobjectname          say         getfocus    '       �    getjcfoption    '     %    getcontrolattributes    '       gettreeviewlevel    '  %       
              One unread message      %1 unread      %    inttostring   formatstring      saymessage        %                 %1 unread messages     %    inttostring   formatstring        %1 unread      %    inttostring   formatstring      saymessage             �          setjcfoption            getline '       �         setjcfoption          %    refreshwindow      %    @   
          8     @     indicatecontrolstate               positioningroup        say       %         
          8     �     indicatecontrolstate               positioningroup        say            getline '     %    stringisblank               GraphicRes013232     1393376130            getactiveconfiguration   .jgf    
    inireadstring    |          stringsegment   '     %    stringisblank     # $   %  %    stringcontains  
          8     �     indicatecontrolstate                     �  %    setjcfoption       	           dialogactive    # �     inhjdialog    
          gettreeviewlevel    '  %  $  previoustreeviewlevel   
          '     %    inttostring ' 	     level %1    % 	   formatstring    ' 
         % 
 % 	   saymessage     %  &  previoustreeviewlevel                getobjectname   '       getline '     %  %          stringcompare      %  '     %  %         stringtrimcommon          %    stringtrimleadingblanks '        %              stringsegment    0123456789    stringcontainschars       %          say                 %1 unread messages     %              stringsegment     formatstring        %1 unread messages     %              stringsegment     formatstring      saymessage           %          say             %          say            getcontrolattributes           
  '       8   %    indicatecontrolstate       %   # �	%  
             positioningroup        say       	         %     saytreeviewlevel          d     $runjawsmanager $  gbwordiswindowowner &  gbusingwordnavquickkeys      $runjawsmanager    �     runnavquickkeysmanager  $  gbusingwordnavquickkeys              navigationquickkeysmanager                   navigationquickkeysmanager           ,    $replydirectlytosender       getfocus    '      %     getwindowclass   _WwG    
           %     getrealwindow    RichEdit20WPT         findwindowwithclassandid    '           %     getappmainwindow     RichEdit20WPT         findwindowwithclassandid    '     %          		 Cannot retrieve Sender's address.          say    	         %    ����%  %    getobjectfromevent  '  %    %    accvalue    '     %    comrelease        %    stringisblank         		 Cannot retrieve Sender's address.          say    	          Message  Replying directly to sender        sayusingvoice         %   [    ]   
         stringsegment   '      Control+r     typekey         
     delay         %    stringisblank     # p   %    addressmessage    
         Cannot address message.        say    	           speechoff                delay           speechon            getfocus    '      %     getwindowclass   _WwG    
           %     getrealwindow    RichEdit20WPT         findwindowwithclassandid    '           %     getappmainwindow     RichEdit20WPT         findwindowwithclassandid    '        %    ����%  %    getobjectfromevent  '  %    %    accvalue    '     %    comrelease        %    stringisblank              %    getwindowname          say       %         say                      indicatecontroltype       `    windowcreatedevent            %     getwindowclass  '       getfocus    '  %   SUPERGRID   
  # �      isnavigationpane    
  # �           getobjectsubtypecode      8   
  
          gettreeviewlevel         
  &  gireadfolderinfo    	         %   %  %  %  %    windowcreatedevent        �     $growfont1point      saycurrentscriptkeylabel           Control+]     typekey    $  gbwordiswindowowner # �      isactivedocumentprotected     
          sayfontsize          �     $shrinkfont1point        saycurrentscriptkeylabel           Control+[     typekey    $  gbwordiswindowowner # �      isactivedocumentprotected     
          sayfontsize          p    $saycurrentaccesskey               getfocus      getrealwindow     getwindowname   '             getobjectname   '     %    - Meeting     stringcontains  " �    %    - Appointment     stringcontains  
  "     %    - Journal     stringcontains  
                getcurrentobject        acckeyboardshortcut '     %    stringisblank                    %1  %2  %  %    formatstring        %1, %2  %  %    formatstring      saymessage                 no hot key    sayformattedmessage       	           $saycurrentaccesskey       �    cleardateflag         &  gidateisentered      speechoff         $  ghcalendarpane    setfocus            null    &  ghcalendarpane            delay           speechon                 getobjectvalue  '      %     stringisblank                     getobjectvalue  '      %     stringisblank      	            %   %  %  %  %    parselocaledate    %               getcalendarview %     getcurrentyear  '     %    stringtoint '        $  gsdateentered     stringlength         
        $  gsdateentered          stringleft  &  gsdateentered         $  gsdateentered     stringtoint '  %       
               readcalendarinformation    	                    getuserlocaleinfo   %     $  gsdateentered     stringtoint %    sysgetdate  '     %    gotodatedirectly                 delay                readcalendarinformation       �    $startdirectactivation       iscalendarview    " l    	  iscalendarviewappointmenteditbox    
              You nust be in the calendar pane to use this keystroke.  Not in calendar pane.     saymessage     	                 getfocus      getrealwindow    msctls_statusbar32    e     findwindowwithclassandid    '   %        	           &  gsdateentered        getfocus    &  ghcalendarpane     %     setfocus                Type the date to move to     Type the date     saymessage               delay          ClearDateFlag     2     schedulefunction    &  gidateisentered    d     $saycolor   $  gbwordiswindowowner         saycolor       	           $saycolor      P    $saycharacter   $  globalcurrentcontrol        
  " l $  globalcurrentcontrol        
  
  " � $  globalcurrentcontrol        
  
  " � $  globalcurrentcontrol        
  
             getcharacter      stringlength         
          sayfield       	              $saycharacter      H    getmessagelistkeyname       OML         getcurrentcontrolid   inttostring 
  '     %    
     stringsegmentcount  '  %  %  
     %       
  '     %    
   %    stringsegment   '     %    stringisblank        %     %         stringleft  
  '      �    %     	        	  stringfilteroutmessageinformation          %     getmessagelistkeyname   '     %    
     stringsegmentcount  '  %          $  gsspeechfilter    stringisblank          CustomizeColumn Options %            getactiveconfiguration   .   
   jcf 
    inireadstring   &  gsspeechfilter     $  gsspeechfilter  '        $  gsbraillefilter   stringisblank          CustomizeColumn Options %            getactiveconfiguration   .   
   jbs 
    inireadstring   &  gsbraillefilter    $  gsbraillefilter '        %    stringisblank           %   |          stringsegment   '        %   :          stringsegment     stringtoint '     %   :     stringcontainschars       %   :          stringsegment   '        %  %  
     %       
  '     %   |   %       
    stringsegment   ' 	    % 	   stringtoint ' 
 % 
       
     % 
      %  ' 
       %    
   % 
   stringsegment   '     %    stringisblank           %         stringright     
     %        %    stringisblank        %      <VOICE NAME="%1">   %    formatstring    
  '        % 	        stringleft   -   
     %       
        % 	  :     stringcontainschars    %     % 	  :          stringsegment   
  '     %     %             stringsegment   
  '        %       
     %     %             stringsegment   
  '     % 	  :     stringcontainschars    %     % 	  :          stringsegment   
  '        %       
        % 	  :     stringcontainschars    %     % 	  :          stringsegment   
  '              %    stringisblank        %   </VOICE>    
  '     %       
  '     %     %        ����  stringsegment   
   
   
  '            D   %        %   
          stringreplacechars  '     %     	      �    $readlistviewcolumn      getfocus    '           getfocus      getwindowclass  # �         getfocus      isinoutlookmainwindow   
                getcurrentscriptkeyname        stringright   stringtoint '  %         
   '     %       
          '                     getmessageinformation   '     %   
     stringsegmentcount  '  %  %  
                 %1 out of range
this listview only contains %2 columns.    %    inttostring    %    inttostring   formatstring        %1 out of range    %    inttostring   formatstring      sayformattedmessage    	         %   
   %    stringsegment   '     %         stringright     
        %        ����  stringsegment   '     %             stringsegment   '        %         stringchopright '        %          say       %               say    	           $readlistviewcolumn        $customizelistview       ismessageslist                     getmessageinformation   '      %    
     stringsegmentcount  '     %     getmessagelistkeyname   '  %  %  
     %       
  '     %    
   %    stringsegment   '  %     %             stringsegment   
   |   
  '   �       %         stringchopright '     %  %   Customize Outlook Message List  $  gsspeechfilter  $  gsbraillefilter   dlgcustomizecolumns    	           $customizelistview     0    dlgselectiteminlist         �     ismessageslist  # �    %    |Customize ListView   stringcontains  
        %    |Customize ListView  |Customize Outlook Message List   stringreplacesubstrings '         %   %  %  %  %  %    dlgselectiteminlist    	      �    findhotkey    �          shoulditemspeak       
             	           getfocus    '  $  gbwordiswindowowner   # �    %    inribbons     
  # �    %    inoptionsdialog   
          getobjectsubtypecode         
               getobjectname   '        gethotkey   '  %     	            %     findhotkey     	      �     $openlistbox         iscalendarview          saycurrentscriptkeylabel            typecurrentscriptkey       	           $openlistbox       �     $closelistbox        iscalendarview          saycurrentscriptkeylabel            typecurrentscriptkey       	           $closelistbox      �     $virtualenter        userbufferisactive  " T      isvirtualpccursor   
          saycurrentscriptkeylabel            enterkey             �    getmsaacolouratcombobox      getfocus    '             getobjectvalue  '     %    stringlength         
       ����   	         %    stringlength            %   %  %  %  %    getwindowrect         %  %  %  
       
  
  %  %  %  
       
  
    getcoloratpoint    	            %         stringchopright '     %    stringisblank           %    getcharactervalue   '        %         stringright '     %    stringisblank        %     %     %    getcharactervalue        
  
  '        %    getcharactervalue   '        %     	      �    $openmessageininternetexplorer      Alt+H,A,V    ,     stringsegmentcount  '        �    getjcfoption    '       �          setjcfoption            speechoff           '  %  %   
            Alt+H,A,V    ,   %    stringsegment     typekey         pause      %       
  '   �         �  %    setjcfoption           SpeechOn           schedulefunction          �     hasancestoroftype           getancestorcount    '        '  %  %  
             %    getobjectsubtypecode    %   
             	      %       
  '   H             	      p    menumodeevent               getfocus      getwindowclass   NetUIHWND   
  # �      $     hasancestoroftype   
     %        
  &	  gsuppressleavingmenusoutlook2010    	      $	  gsuppressleavingmenusoutlook2010             &	  gsuppressleavingmenusoutlook2010    %        
     	            %   %    menumodeevent         �     isattachmentslistfield       getfocus    '      %     getwindowclass  '     %     getcontrolid    '  %   RichEdit20WPT   
  # � %      
  
  " � %   AfxWndW 
  # � %      
  
  
     	      