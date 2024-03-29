"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3492],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={title:"Filters",sidebar_position:3},l=void 0,i={unversionedId:"adguard-for-mac/features/filters",id:"adguard-for-mac/features/filters",title:"Filters",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-mac/features/filters.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/filters",permalink:"/KnowledgeBase/ru/adguard-for-mac/features/filters",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/filters.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Filters",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/KnowledgeBase/ru/adguard-for-mac/features/general"},next:{title:"DNS",permalink:"/KnowledgeBase/ru/adguard-for-mac/features/dns"}},s={},c=[{value:"Filters",id:"filters",level:2},{value:"User rules",id:"user-rules",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"filters"},"Filters"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/filters.png",alt:"Filters"})),(0,n.kt)("p",null,"Filter lists are sets of rules written using a ",(0,n.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"special syntax"),". AdGuard interprets and implements these rules to block ads, trackers, and annoyances. Some filters (for example, AdGuard Base filter, Tracking Protection filter, or EasyList) are pre-installed, others can be installed additionally."),(0,n.kt)("p",null,"We recommend enabling the following filters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard Base filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Tracking Protection filter and AdGuard URL Tracking filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Annoyances filter"),(0,n.kt)("li",{parentName:"ul"},"Filters for your language")),(0,n.kt)("p",null,"These filters are important for blocking most ads, trackers, and annoying elements. For more advanced ad blocking, you can use custom filters and user rules."),(0,n.kt)("p",null,"To add a filter, click ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," in the lower left corner of the list. To enable a filter, select its checkbox."),(0,n.kt)("h2",{id:"user-rules"},"User rules"),(0,n.kt)("p",null,"In AdGuard for Mac, user rules are located in ",(0,n.kt)("em",{parentName:"p"},"Filters"),". To create a rule, click ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),". To enable a rule, select its checkbox. To export or import rules, open the context menu."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/rules.png",alt:"User rules: context menu"})))}u.isMDXComponent=!0}}]);