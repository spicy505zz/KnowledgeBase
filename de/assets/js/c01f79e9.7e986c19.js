"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[349],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={title:"Browser-protected pages",sidebar_position:4},i=void 0,s={unversionedId:"adguard-browser-extension/protected-pages",id:"adguard-browser-extension/protected-pages",title:"Browser-protected pages",description:"In diesem Artikel geht es um die AdGuard Browsereweiterung, die nur Ihren Browser sch\xfctzt. To protect your entire device, download the AdGuard app",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-browser-extension/protected-pages.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/protected-pages",permalink:"/KnowledgeBase/de/adguard-browser-extension/protected-pages",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/protected-pages.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Browser-protected pages",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Integrationsmodus (Legacy)",permalink:"/KnowledgeBase/de/adguard-browser-extension/integration-mode"},next:{title:"Comparison to standalone apps",permalink:"/KnowledgeBase/de/adguard-browser-extension/comparison-standalone"}},l={},c=[{value:"Browser-protected pages",id:"browser-protected-pages",level:2},{value:"Chromium browser restrictions",id:"chromium-browser-restrictions",level:3},{value:"Firefox browser restrictions",id:"firefox-browser-restrictions",level:3},{value:"Modifying restrictions in Firefox",id:"modifying-restrictions-in-firefox",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In diesem Artikel geht es um die AdGuard Browsereweiterung, die nur Ihren Browser sch\xfctzt. To protect your entire device, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,o.kt)("h2",{id:"browser-protected-pages"},"Browser-protected pages"),(0,o.kt)("p",null,"When using a web extension like AdGuard Browser Extension, there are certain restricted domains that prohibit access or permissions. As a result, ad blocking extensions are not allowed to interact with or modify the content of these pages. In other words, they are not allowed to block ads and other annoying elements on these web pages."),(0,o.kt)("h3",{id:"chromium-browser-restrictions"},"Chromium browser restrictions"),(0,o.kt)("p",null,"Chromium-based browsers, such as Google Chrome, maintain a list of restricted domains that extensions are not allowed to access. These domains include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clients.google.com"),(0,o.kt)("li",{parentName:"ul"},"clients","[0-9]","+.google.com"),(0,o.kt)("li",{parentName:"ul"},"sb-ssl.google.com"),(0,o.kt)("li",{parentName:"ul"},"URLs starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome-extension://"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"https://chrome.google.com/webstore/")),(0,o.kt)("li",{parentName:"ul"},"PDF files"),(0,o.kt)("li",{parentName:"ul"},"Pages where Javascript is disabled"),(0,o.kt)("li",{parentName:"ul"},"Security warning pages"),(0,o.kt)("li",{parentName:"ul"},"Error pages such as 404 errors and network errors"),(0,o.kt)("li",{parentName:"ul"},"URLs starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"view-source:")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"data:"))),(0,o.kt)("h3",{id:"firefox-browser-restrictions"},"Firefox browser restrictions"),(0,o.kt)("p",null,"Similarly, the Firefox browser has its own set of restricted domains where extensions are not permitted to operate. These restricted domains include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"accounts-static.cdn.mozilla.net"),(0,o.kt)("li",{parentName:"ul"},"accounts.firefox.com"),(0,o.kt)("li",{parentName:"ul"},"addons.cdn.mozilla.net --"),(0,o.kt)("li",{parentName:"ul"},"addons.mozilla.org"),(0,o.kt)("li",{parentName:"ul"},"api.accounts.firefox.com"),(0,o.kt)("li",{parentName:"ul"},"content.cdn.mozilla.net"),(0,o.kt)("li",{parentName:"ul"},"discovery.addons.mozilla.org"),(0,o.kt)("li",{parentName:"ul"},"install.mozilla.org"),(0,o.kt)("li",{parentName:"ul"},"oauth.accounts.firefox.com"),(0,o.kt)("li",{parentName:"ul"},"profile.accounts.firefox.com"),(0,o.kt)("li",{parentName:"ul"},"support.mozilla.org"),(0,o.kt)("li",{parentName:"ul"},"sync.services.mozilla.com")),(0,o.kt)("h3",{id:"modifying-restrictions-in-firefox"},"Modifying restrictions in Firefox"),(0,o.kt)("p",null,"Changing advanced settings can affect the stability and security of Firefox. This is recommended for advanced users only. If you are aware of the associated risk and still wish to enable add-ons disallowed on a protected page, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the menu button \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Add-ons and themes")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Extensions"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the extension you want to enable on sites with restrictions (In this case, AdGuard)."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Allow")," in the section ",(0,o.kt)("strong",{parentName:"li"},"Run on sites with restrictions"),".")),(0,o.kt)("p",null,"Alternatively, you can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a new tab and type ",(0,o.kt)("strong",{parentName:"li"},"about:config")," in the address bar."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"Return"),". You may encounter a warning. In this case, click ",(0,o.kt)("strong",{parentName:"li"},"Accept the Risk and Continue"),"."),(0,o.kt)("li",{parentName:"ol"},"Search for ",(0,o.kt)("inlineCode",{parentName:"li"},"extensions.webextensions.restrictedDomains"),". If you can\u2019t find this preference, you can create it. Simply select the ",(0,o.kt)("strong",{parentName:"li"},"Boolean")," type and click ",(0,o.kt)("strong",{parentName:"li"},"+")," to add it."),(0,o.kt)("li",{parentName:"ol"},"Click the toggle button next to this preference and change its value to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ol"},"Restart Firefox.")),(0,o.kt)("p",null,"For further information on this subject, read ",(0,o.kt)("a",{parentName:"p",href:"https://mzl.la/3POXoWi"},"the article on Mozilla\u2019s support website"),"."))}p.isMDXComponent=!0}}]);