"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6883],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const o={title:"Main window",sidebar_position:1},i=void 0,d={unversionedId:"adguard-for-mac/features/main",id:"adguard-for-mac/features/main",title:"Main window",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Mac\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 To see how it works, download the AdGuard app",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-mac/features/main.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/main",permalink:"/KnowledgeBase/ja/adguard-for-mac/features/main",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/main.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Main window",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation for admins",permalink:"/KnowledgeBase/ja/adguard-for-windows/admins-documentation"},next:{title:"\u4e00\u822c",permalink:"/KnowledgeBase/ja/adguard-for-mac/features/general"}},c={},s=[],u={toc:s};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Mac\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"The main window of AdGuard for Mac allows you to enable or disable the AdGuard protection. It also gives you a quick overview of the app\u2019s stats: ads, trackers, and threats blocked since you\u2019ve installed AdGuard or since your last stats reset. By clicking the gear icon, you can access settings, check for app and filter updates, contact support, and manage your license."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/main.png",alt:"Main window *mobile"})))}l.isMDXComponent=!0}}]);