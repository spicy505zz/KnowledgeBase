"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[682],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,f=u["".concat(d,".").concat(c)]||u[c]||m[c]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(7462),i=(a(7294),a(4137));const n={title:"Manual installation of the security certificate into the Firefox browser",sidebar_position:11},o=void 0,l={unversionedId:"adguard-for-android/solving-problems/firefox-certificates",id:"adguard-for-android/solving-problems/firefox-certificates",title:"Manual installation of the security certificate into the Firefox browser",description:"Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, scarica l'app AdGuard.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/firefox-certificates.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/firefox-certificates",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/firefox-certificates",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/firefox-certificates.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Manual installation of the security certificate into the Firefox browser",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Problems caused by multiple user profiles",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/multiple-user-profiles"},next:{title:"\u0421ertificate installation issues on devices with Android 11+",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/manual-certificate"}},d={},s=[{value:"Method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"scarica l'app AdGuard"),".")),(0,i.kt)("p",null,"For AdGuard to successfully filter HTTPS traffic in Firefox, the browser needs to trust AdGuard's certificate. It can be achieved differently for different versions of the Firefox."),(0,i.kt)("h3",{id:"method-1"},"Method 1"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This method works in Firefox for Android version 90.0 and later.")),(0,i.kt)("p",null,"To make Firefox trust the AdGuard certificate, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the browser."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"About Firefox"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg",alt:"About Firefox *mobile"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Tap the Firefox logo five times."),(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Secret Settings"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg",alt:"Secret Settings *mobile"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Toggle ",(0,i.kt)("strong",{parentName:"li"},"Use third party CA certificates"),".")),(0,i.kt)("h3",{id:"method-2"},"Method 2"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This method will only work on ",(0,i.kt)("strong",{parentName:"p"},"rooted")," devices.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," adb; On the Windows platform, ",(0,i.kt)("strong",{parentName:"li"},"Samsung")," owners may need to install ",(0,i.kt)("a",{parentName:"li",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),"."),(0,i.kt)("li",{parentName:"ol"},"Activate the ",(0,i.kt)("strong",{parentName:"li"},"developer mode")," and enable ",(0,i.kt)("strong",{parentName:"li"},"USB debugging"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," app on your phone;"),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section, find the sub-item ",(0,i.kt)("strong",{parentName:"li"},"About phone"),";"),(0,i.kt)("li",{parentName:"ul"},"Tap the ",(0,i.kt)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,i.kt)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,i.kt)("li",{parentName:"ul"},"Open ",(0,i.kt)("strong",{parentName:"li"},"System Settings")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Developer Options")," \u2192 Scroll down and enable ",(0,i.kt)("strong",{parentName:"li"},"USB debugging")," \u2192 Confirm debugging is enabled in the window ",(0,i.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully."))),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"https://www.mozilla.org/en-US/firefox/releases/"},"Firefox")," browser (release version);"),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"AdGuard settings")," (gear icon in the bottom right corner) \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Filtering")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Network")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"HTTPS filtering")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Security certificate")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Instructions for Firefox")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Install for old versions"),";"),(0,i.kt)("li",{parentName:"ol"},"Open the folder ",(0,i.kt)("inlineCode",{parentName:"li"},"data/data/org.mozilla.firefox/files/mozilla")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"adb shell su")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"cd data/data/..."),", then browse to the folder named ",(0,i.kt)("inlineCode",{parentName:"li"},"xxxxxxx.default")," and memorize its name;"),(0,i.kt)("li",{parentName:"ol"},"In the specified folder we are interested in two files:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cert9.db")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key4.db")))),(0,i.kt)("li",{parentName:"ol"},"We need to move these files to a folder of the browser where the security certificate issue occurred:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default"),".")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"The full command will look like this:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"adb shell su")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default"))))),(0,i.kt)("p",null,"In case you received the system notification ",(0,i.kt)("strong",{parentName:"p"},"permission denied"),", you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser."),(0,i.kt)("p",null,"The full command should look something like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"adb shell su")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"adb shell su")," does not work, you should try ",(0,i.kt)("inlineCode",{parentName:"p"},"adb shell")," initially, and then ",(0,i.kt)("inlineCode",{parentName:"p"},"su"),"."))}m.isMDXComponent=!0}}]);