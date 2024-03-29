"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5970],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={title:"Extensions",sidebar_position:8},s=void 0,i={unversionedId:"adguard-for-mac/features/extensions",id:"adguard-for-mac/features/extensions",title:"Extensions",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-mac/features/extensions.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/extensions",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/features/extensions",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/extensions.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Extensions",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Browser Assistant",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/features/browser-assistant"},next:{title:"Network",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/features/network"}},l={},c=[{value:"AdGuard Assistant (legacy)",id:"adguard-assistant-legacy",level:2},{value:"AdGuard Extra",id:"adguard-extra",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"AdGuard allows you to install extensions, or userscripts, to extend the functionality of the browser. AdGuard can work as a cross-browser userscript manager: you don\u2019t have to install the same userscript for each browser."),(0,n.kt)("p",null,"Some userscripts are pre-installed, others can be installed manually."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/extensions.png",alt:"Extensions"})),(0,n.kt)("h2",{id:"adguard-assistant-legacy"},"AdGuard Assistant (legacy)"),(0,n.kt)("p",null,"This userscript allows you to manage AdGuard protection directly from your browser. While the ",(0,n.kt)("a",{parentName:"p",href:"/adguard-for-mac/features/browser-assistant"},"new Assistant")," is a browser extension that can be installed from your browser\u2019s store, the legacy Assistant is a userscript that doesn\u2019t require additional installation. Some features are common to both assistants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable or disable protection for a specific website"),(0,n.kt)("li",{parentName:"ul"},"Pause protection for 30 seconds"),(0,n.kt)("li",{parentName:"ul"},"Manually block an ad"),(0,n.kt)("li",{parentName:"ul"},"Report incorrect blocking")),(0,n.kt)("p",null,"However, the new Assistant is more advanced. It also allows you to manage AdGuard protection for all websites, check the website\u2019s certificate, manage HTTPS filtering, and open the filtering log or the app\u2019s settings. We recommend that you use the legacy Assistant only if the new Assistant is not available."),(0,n.kt)("h2",{id:"adguard-extra"},"AdGuard Extra"),(0,n.kt)("p",null,"This userscript solves the most complex ad blocking issues when regular rules aren\u2019t enough. It also prevents websites from circumventing ad blockers and re-inserting blocked ads. We recommend that you keep it enabled at all times."),(0,n.kt)("p",null,"To install a userscript, click ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),". You can find userscripts at ",(0,n.kt)("a",{parentName:"p",href:"https://greasyfork.org/"},"greasyfork.org"),"."))}u.isMDXComponent=!0}}]);