"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[160],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),k=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=k(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),N=k(a),c=n,u=N["".concat(i,".").concat(c)]||N[c]||s[c]||l;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=N;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var k=2;k<l;k++)o[k]=a[k];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var r=a(7462),n=(a(7294),a(4137));const l={title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",sidebar_position:1},o=void 0,p={unversionedId:"guides/collect-har-file",id:"guides/collect-har-file",title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",description:"HAR \u6587\u4ef6\u53ef\u5e2e\u52a9\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u56e2\u961f\u89e3\u51b3\u590d\u6742\u7684\u95ee\u9898\u3002 \u4e3a\u4e86\u521b\u5efa\u8fd9\u79cd\u6587\u4ef6\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Chrome \u6216\u706b\u72d0\u6d4f\u89c8\u5668\u3002 \u4e0d\u8fc7\uff0c IE 11\u3001Edge \u548c Safari \u4e5f\u652f\u6301 .har \u6587\u4ef6\u7684\u751f\u6210\u548c\u5bfc\u51fa\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/collect-har-file.md",sourceDirName:"guides",slug:"/guides/collect-har-file",permalink:"/KnowledgeBase/zh-CN/guides/collect-har-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/collect-har-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u81f4\u8c22",permalink:"/KnowledgeBase/zh-CN/miscellaneous/acknowledgements"},next:{title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",permalink:"/KnowledgeBase/zh-CN/guides/proxy-certificate"}},i={},k=[{value:"Chrome \u6d4f\u89c8\u5668",id:"chrome",level:2},{value:"Edge \u6d4f\u89c8\u5668",id:"edge",level:2},{value:"Firefox \u6d4f\u89c8\u5668",id:"firefox",level:2},{value:"Internet Explorer11 \u6d4f\u89c8\u5668",id:"ie11",level:2},{value:"Safari \u6d4f\u89c8\u5668",id:"safari",level:2},{value:"\u5b89\u5353\u7cfb\u7edf",id:"android",level:2},{value:"Windows \u7cfb\u7edf",id:"windows",level:2}],m={toc:k};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HAR \u6587\u4ef6\u53ef\u5e2e\u52a9\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u56e2\u961f\u89e3\u51b3\u590d\u6742\u7684\u95ee\u9898\u3002 \u4e3a\u4e86\u521b\u5efa\u8fd9\u79cd\u6587\u4ef6\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Chrome \u6216\u706b\u72d0\u6d4f\u89c8\u5668\u3002 \u4e0d\u8fc7\uff0c IE 11\u3001Edge \u548c Safari \u4e5f\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},".har")," \u6587\u4ef6\u7684\u751f\u6210\u548c\u5bfc\u51fa\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"chrome"},"Chrome \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u5982\u8981\u5728 Chrome \u4e2d\u521b\u5efa HAR \u6587\u4ef6\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Developer Tools"),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Menu \u2192 More Tools \u2192 Developer Tools"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", or ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),", or ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I for Mac"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Network tab"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230 Network \u6807\u7b7e\u4e2d\u7684\u5de6\u4e0a\u89d2\u7684\u5706\u5f62\u6309\u94ae\uff0c\u5e76\u786e\u8ba4\u5b83\u5904\u4e8e\u7ea2\u8272\u5f55\u97f3\u6a21\u5f0f\u3002 \u5982\u679c\u662f\u7070\u8272\u7684\uff0c\u8bf7\u60a8\u5355\u51fb\u4f7f\u5176\u53d8\u4e3a\u7ea2\u8272\u7684\uff0c\u5e76\u5f00\u59cb\u5f55\u97f3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Clear")," button (the circle button with a line through it next to the record button) to clear all previous activity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Preserve log")," check box on the Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png",alt:"Chrome \u6d4f\u89c8\u5668"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},"Save as HAR with content"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"edge"},"Edge \u6d4f\u89c8\u5668"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Developer Tools"),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Menu \u2192 More Tools \u2192 Developer Tools"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", or ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),", or ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I for Mac"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Network tab"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230 Network \u6807\u7b7e\u4e2d\u7684\u5de6\u4e0a\u89d2\u7684\u5706\u5f62\u6309\u94ae\uff0c\u5e76\u786e\u8ba4\u5b83\u5904\u4e8e\u7ea2\u8272\u5f55\u97f3\u6a21\u5f0f\u3002 \u5982\u679c\u662f\u7070\u8272\u7684\uff0c\u8bf7\u60a8\u5355\u51fb\u4f7f\u5176\u53d8\u4e3a\u7ea2\u8272\u7684\uff0c\u5e76\u5f00\u59cb\u5f55\u97f3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Clear")," button (the circle button with a line through it next to the record button) to clear all previous activity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Preserve log")," check box on the Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png",alt:"edge \u6d4f\u89c8\u5668"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},"Save as HAR with content"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"firefox"},"Firefox \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u5982\u8981\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e2d\u521b\u5efa HAR \u6587\u4ef6\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Developer Tools in ",(0,n.kt)("strong",{parentName:"p"},"Network")," mode:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Menu \u2192 Web Developer \u2192 Network"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", or ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+E (Mac)"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Note the ",(0,n.kt)("strong",{parentName:"li"},"Play/Pause")," button at the top left of the Network tab.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6309\u94ae\u5e94\u5904\u4e8e\u7ee7\u7eed\u8bb0\u5f55\u6a21\u5f0f\u3002")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If any information is currently displayed in the grid, clear by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Delete trash can")," button next to the play/pause button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Persist Logs")," check box on the Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png",alt:"firefox \u6d4f\u89c8\u5668"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},"Save all as HAR"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"ie11"},"Internet Explorer11 \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u8981\u5728 Internet Explorer 11 \u4e2d\u521b\u5efa HAR \u6587\u4ef6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Developer Tools in ",(0,n.kt)("strong",{parentName:"p"},"Network")," mode:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From Tools cog wheel menu: ",(0,n.kt)("strong",{parentName:"li"},"Developer Tools")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Network tab"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"F12 \u2192 Network")," tab.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Note the start profiling session ",(0,n.kt)("strong",{parentName:"li"},"Play")," button and stop profiling ",(0,n.kt)("strong",{parentName:"li"},"Stop")," button at top left of Network tab.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f55\u97f3\u65f6\u7ee7\u7eed\u6309\u94ae\u5c06\u53d8\u4e3a\u7070\u8272\uff0c\u505c\u6b62\u6309\u94ae\u4e3a\u7ea2\u8272\u3002 Put in ",(0,n.kt)("strong",{parentName:"li"},"Play")," mode.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Clear any session info appearing in the lower grid using the ",(0,n.kt)("strong",{parentName:"li"},"Clear session")," button on Network tab. \u5c06\u9f20\u6807\u60ac\u505c\u5728\u56fe\u6807\u4e0a\u53ef\u4ee5\u67e5\u770b\u540d\u79f0\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Clear session")," button is a three line icon with an x on it.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Save disk")," button (Export as HAR) on Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"safari"},"Safari \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u5982\u8981\u5728 Safari \u4e2d\u521b\u5efa HAR \u6587\u4ef6\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the Safari menu bar at the top of the screen for a ",(0,n.kt)("strong",{parentName:"li"},"Develop")," menu.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If not visible, turn it on by going to ",(0,n.kt)("strong",{parentName:"li"},"Safari \u2192 Settings \u2192 Advanced"),"."),(0,n.kt)("li",{parentName:"ul"},"Check the checkbox at the bottom next to ",(0,n.kt)("strong",{parentName:"li"},"Show Develop menu in menu bar"),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab in Web Inspector:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Develop \u2192 Show Web Inspector \u2192 Network"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I\u2192Network"))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Check ",(0,n.kt)("strong",{parentName:"li"},"Preserve Log")," checkbox on left side of the Network tabs, within the ",(0,n.kt)("strong",{parentName:"li"},"Other filter options...")," menu.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png",alt:"safari"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Clear current Network items by clicking the ",(0,n.kt)("strong",{parentName:"li"},"Delete Trash")," icon at the far right of Network tabs.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"\u2318+K"))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable caches")," check box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Export")," icon next to the ",(0,n.kt)("strong",{parentName:"p"},"Delete Trash")," icon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"android"},"\u5b89\u5353\u7cfb\u7edf"),(0,n.kt)("p",null,"To create HAR files, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Advanced")," in the menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Low Level Settings"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6fc0\u6d3b ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture"),"\uff08\u60a8\u5fc5\u987b\u91cd\u65b0\u542f\u52a8\u4fdd\u62a4\uff09")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u8bd5\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\uff1a\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\uff0c\u6267\u884c\u5fc5\u8981\u7684\u64cd\u4f5c\u4ee5\u4f7f\u5e7f\u544a\u51fa\u73b0\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u73b0\u5728\u518d\u6b21\u5173\u95ed ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go back and tap ",(0,n.kt)("strong",{parentName:"p"},"Export logs and system info")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("h2",{id:"windows"},"Windows \u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Settings*")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"General settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Advanced settings")," and scroll down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Enable HAR writing")," box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"General settings")," \u2192 Click ",(0,n.kt)("strong",{parentName:"p"},"Export logs")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Save"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u53d6\u6d88\u52fe\u9009\u76f8\u5e94\u7684\u65b9\u6846\u7981\u6b62 HAR \u5199\u5165\u3002"))))}s.isMDXComponent=!0}}]);