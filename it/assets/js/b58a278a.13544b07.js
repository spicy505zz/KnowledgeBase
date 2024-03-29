"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6538],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),a=(r(7294),r(4137));const n={title:"Network",sidebar_position:9},i=void 0,l={unversionedId:"adguard-for-mac/features/network",id:"adguard-for-mac/features/network",title:"Network",description:"Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-mac/features/network.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/network",permalink:"/KnowledgeBase/it/adguard-for-mac/features/network",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/network.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Network",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Estensioni",permalink:"/KnowledgeBase/it/adguard-for-mac/features/extensions"},next:{title:"Features overview",permalink:"/KnowledgeBase/it/adguard-for-mac/overview"}},s={},u=[{value:"Generali",id:"generali",level:2},{value:"Automatically filter applications",id:"automatically-filter-applications",level:3},{value:"Filter HTTPS protocol",id:"filter-https-protocol",level:3},{value:"Outbound proxy",id:"outbound-proxy",level:2},{value:"HTTP proxy",id:"http-proxy",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("h2",{id:"generali"},"Generali"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png",alt:"Network"})),(0,a.kt)("h3",{id:"automatically-filter-applications"},"Automatically filter applications"),(0,a.kt)("p",null,"By default, AdGuard blocks ads and trackers in most browsers (",(0,a.kt)("a",{parentName:"p",href:"/adguard-for-mac/solving-problems/tor-filtering"},"Tor Browser is an exception"),"). This setting allows AdGuard to block ads in apps as well."),(0,a.kt)("p",null,"To manage filtered apps, click ",(0,a.kt)("em",{parentName:"p"},"Applications"),"."),(0,a.kt)("h3",{id:"filter-https-protocol"},"Filter HTTPS protocol"),(0,a.kt)("p",null,"This setting allows AdGuard to filter the secure HTTPS protocol, which is currently used by most websites and apps. By default, websites with potentially sensitive information, such as banking services, are not filtered. To manage HTTPS exclusions, click ",(0,a.kt)("em",{parentName:"p"},"Exclusions"),"."),(0,a.kt)("p",null,"By default, AdGuard doesn\u2019t filter websites with Extended Validation (EV) certificates. If needed, you can enable the ",(0,a.kt)("em",{parentName:"p"},"Filter websites with EV certificates")," option."),(0,a.kt)("h2",{id:"outbound-proxy"},"Outbound proxy"),(0,a.kt)("p",null,"You can set up AdGuard to route all your device\u2019s traffic through your proxy server."),(0,a.kt)("h2",{id:"http-proxy"},"HTTP proxy"),(0,a.kt)("p",null,"You can use AdGuard as an HTTP proxy server. This will allow you to filter traffic on other devices connected to the proxy."),(0,a.kt)("p",null,"Make sure your Mac and your other device are connected to the same network and enter the proxy port on the device you want to route through your proxy server (usually in the network settings). To filter HTTPS traffic as well, ",(0,a.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"transfer AdGuard\u2019s proxy certificate")," to this device. ",(0,a.kt)("a",{parentName:"p",href:"/guides/proxy-certificate"},"Learn more about installing a proxy certificate")))}d.isMDXComponent=!0}}]);