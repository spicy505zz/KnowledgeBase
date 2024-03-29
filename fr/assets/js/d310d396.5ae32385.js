"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7238],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"DNS",sidebar_position:4},l=void 0,i={unversionedId:"adguard-for-mac/features/dns",id:"adguard-for-mac/features/dns",title:"DNS",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-mac/features/dns.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/dns",permalink:"/KnowledgeBase/fr/adguard-for-mac/features/dns",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/dns.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"DNS",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Filters",permalink:"/KnowledgeBase/fr/adguard-for-mac/features/filters"},next:{title:"Stealth Mode",permalink:"/KnowledgeBase/fr/adguard-for-mac/features/stealth"}},s={},d=[{value:"DNS protection",id:"dns-protection",level:2},{value:"Providers",id:"providers",level:3},{value:"Filters",id:"filters",level:3},{value:"Blocklist",id:"blocklist",level:3},{value:"Allowlist",id:"allowlist",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"dns-protection"},"DNS protection"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"DNS")," section contains one feature, ",(0,n.kt)("em",{parentName:"p"},"DNS protection"),", with multiple settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Providers"),(0,n.kt)("li",{parentName:"ul"},"Filters"),(0,n.kt)("li",{parentName:"ul"},"Blocklist"),(0,n.kt)("li",{parentName:"ul"},"Allowlist")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png",alt:"DNS"})),(0,n.kt)("p",null,"If you enable ",(0,n.kt)("em",{parentName:"p"},"DNS protection"),", DNS traffic will be managed by AdGuard."),(0,n.kt)("h3",{id:"providers"},"Providers"),(0,n.kt)("p",null,"Under ",(0,n.kt)("em",{parentName:"p"},"Providers"),", you can select a DNS server to encrypt your DNS traffic and block ads and trackers if necessary. We recommend AdGuard DNS. For more advanced configuration, you can ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/welcome.html"},"set up a private AdGuard DNS server")," or add a custom one by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," icon in the lower left corner."),(0,n.kt)("h3",{id:"filters"},"Filters"),(0,n.kt)("p",null,"DNS filters apply ad-blocking rules at the DNS level. Such filtering is less precise than regular ad blocking, but it\u2019s particularly useful for blocking an entire domain. To add a DNS filter, click ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),". You can find more DNS filters at ",(0,n.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"filterlists.com"),"."),(0,n.kt)("h3",{id:"blocklist"},"Blocklist"),(0,n.kt)("p",null,"Domains from this list will be blocked. To add a domain, click ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),". You can add domain names or DNS filtering rules using a ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/"},"special syntax"),"."),(0,n.kt)("p",null,"To export or import a blocklist, open the context menu."),(0,n.kt)("h3",{id:"allowlist"},"Allowlist"),(0,n.kt)("p",null,"Domains from this list aren\u2019t filtered. To add a domain, click ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),". To export or import an allowlist, open the context menu."))}p.isMDXComponent=!0}}]);