(()=>{"use strict";var e,d,a,f,c,b={},t={};function r(e){var d=t[e];if(void 0!==d)return d.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=b,r.c=t,e=[],r.O=(d,a,f,c)=>{if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],f=e[i][1],c=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=f();void 0!==n&&(d=n)}}return d}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[a,f,c]},r.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return r.d(d,{a:d}),d},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};d=d||[null,a({}),a([]),a(a)];for(var t=2&f&&e;"object"==typeof t&&!~d.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((d=>b[d]=()=>e[d]));return b.default=()=>e,r.d(c,b),c},r.d=(e,d)=>{for(var a in d)r.o(d,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:d[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((d,a)=>(r.f[a](e,d),d)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",81:"e498567d",154:"f55aaf5e",160:"9cc6b809",261:"b8babda8",319:"0e20d6ba",378:"3f726e15",642:"cb509ddf",745:"3cb0e3cc",856:"3508e81a",857:"bd19321f",889:"27271184",939:"27dfccfa",949:"1b7cdf15",1125:"5d16fcda",1151:"07a0d41a",1187:"c5e18d77",1199:"5ada7aac",1288:"0b7e5e36",1335:"ae2cb2cf",1348:"de95f47a",1370:"e1961f3b",1397:"5ae375b4",1437:"d488cb3c",1460:"307ffd83",1470:"bd02617d",1507:"9853feae",1590:"3d4819ce",1825:"6dddbbce",1845:"45f6dfb1",1876:"21ab55af",1929:"ac411af0",1939:"0843fe7f",1994:"67c30a95",2030:"b7870277",2345:"ec7c8001",2352:"3e10569b",2361:"650bbc90",2512:"0c86bd4d",2559:"71bd938c",2594:"3ff072bf",2633:"8d8cf0be",2687:"69cb8220",2691:"f36e109e",2767:"8008f544",2777:"82ca095d",3093:"697f88a7",3160:"574ead1d",3176:"657e1d9e",3187:"34ba8e7a",3464:"134f618c",3495:"291608b8",3547:"4b1a7326",3557:"b31fe7d3",3580:"5b4d1d34",3709:"457b5982",3720:"2fb86b9c",3738:"75249fcb",3773:"1c0d6b09",3822:"01e49081",3841:"38d4926d",3853:"59880946",3900:"21644c24",4064:"25fe0666",4079:"c7e21032",4140:"b10aea00",4141:"70cfbdcf",4217:"98dc4426",4255:"f8d3ff3a",4259:"8d5f394d",4309:"4a6fe0aa",4358:"b3542a8c",4424:"4a004d29",4441:"882328c4",4656:"49567a40",4661:"60cab1f8",4714:"8040b56f",4796:"2f04aaa5",5021:"dd8de9c5",5102:"2319050c",5115:"91f196a3",5214:"74a8950e",5229:"b4c177b7",5275:"5b66dd2b",5282:"f959ccd7",5365:"d6b53cf2",5410:"d16d3775",5468:"940b3284",5544:"8c606fec",5595:"7854fa19",5666:"2c98c1fc",5726:"bc0fc59a",5752:"644ae808",5780:"25e13a7b",5854:"a980fcc8",6007:"6958e110",6136:"a2ce2ce9",6181:"c749567c",6208:"66bc0b03",6223:"870224ca",6314:"213e16b3",6319:"158efcd1",6501:"9891c08b",6701:"753df18c",6717:"ed49d722",6739:"ba44145c",6758:"348a373c",6908:"b624dabd",6912:"be209a7f",6920:"03c306b8",7156:"73619289",7377:"f08a2f54",7409:"799ede31",7449:"593ad589",7471:"8540dfe5",7486:"f1bf7357",7521:"0775d815",7607:"cb0e00d2",7659:"bd3a4226",7671:"e8d2475c",7709:"470bd622",7729:"7bb6e7de",7761:"4327c51b",7819:"076c6843",7822:"210383ca",7832:"8fe408c8",7852:"0b28b389",7877:"6f60f60a",7918:"17896441",7920:"1a4e3797",7945:"1699a460",7949:"4cf61e04",7959:"42834578",8016:"685c8e24",8048:"865d6452",8066:"6f516163",8207:"fbf60259",8222:"35a307b1",8255:"9b88d0b0",8463:"8a88ff1b",8598:"98b2721c",8599:"d795eb7c",8610:"e483df15",8669:"fce9bfce",8684:"76da28e9",8755:"29fc98b3",8923:"f3df1dda",8924:"d2bb8114",9003:"a9d5dc93",9086:"a0dad432",9198:"74acf672",9233:"2b1d5d83",9275:"bf545090",9291:"b996d26a",9401:"7845e1e4",9514:"1be78505",9599:"af54f677",9672:"fc8b2669",9683:"351de96c",9716:"811ecc71",9789:"3929a4ed",9801:"3f8c5b22",9847:"dface2e8",9902:"ad419003",9936:"4d030695",9970:"eb39d255"}[e]||e)+"."+{53:"83ac99bc",81:"e2ca725d",118:"f086678f",154:"91d9ac85",160:"2927be01",261:"0e5be3b2",319:"487bfe00",378:"31aaba47",511:"6b7af6f3",642:"f8fe01b4",745:"c2f9047e",856:"c5affb15",857:"d75acac1",889:"55d60f4f",939:"fb6d967e",949:"cb6ec4c4",1125:"c5a69206",1144:"365b509b",1151:"400e2c3b",1187:"6db31654",1199:"8e6e3743",1288:"d7804362",1335:"7e59254e",1348:"03fab127",1370:"854ac13a",1397:"41d79d1d",1437:"49b6b9c5",1460:"ea98f060",1470:"472f4198",1507:"92543088",1590:"b42024b0",1825:"c90ee85d",1845:"7de8033d",1876:"cee99d69",1929:"12998ade",1939:"65cd4855",1994:"69ad5014",2030:"290740a8",2345:"7b285802",2352:"4ad9ecf1",2361:"f21d974c",2512:"7d409265",2559:"55389895",2594:"7d04c1c1",2633:"bba0128c",2664:"0d1470f9",2687:"be9f34c7",2691:"52393e82",2767:"479188a3",2777:"f1ab899b",3093:"70c9e10b",3160:"be366671",3176:"71e6e20a",3187:"bfa64103",3464:"99d84137",3495:"8985e4ca",3547:"35cdf6f5",3557:"331fa437",3580:"ff2980b8",3709:"790a70c5",3720:"632c07f4",3738:"23cbaf8a",3773:"9d7c86c6",3822:"2a1972c4",3841:"bfac4663",3853:"77d02c55",3900:"86b7703f",4064:"99d1c24b",4079:"0332f88d",4140:"2b171e12",4141:"c1118128",4217:"e122bd30",4248:"37e6ab5b",4255:"dc3f5faf",4259:"104f0b7f",4309:"e36ddade",4358:"796d7ead",4424:"9c51bdb7",4441:"6e1ed676",4656:"fd3cd8f3",4661:"1737d5a2",4714:"142d676f",4796:"1ff371fb",5021:"0686812f",5102:"4b23e9ae",5115:"e1a59a57",5214:"3462bf77",5229:"4f0e1c97",5275:"8aa3138b",5282:"edc77007",5365:"c126fb9d",5410:"5e55e080",5468:"73403a6c",5544:"bb78c183",5595:"090f987f",5666:"2b5b30fc",5726:"685ed254",5752:"ecd3bd5c",5780:"fefe603d",5854:"d1c80ff5",6007:"2a4c7bb0",6136:"40b246f8",6181:"8650aac8",6208:"6600b76e",6223:"036fd6ea",6314:"6013a20c",6319:"af3b802e",6501:"f155586f",6701:"ce35dd6f",6717:"3c531325",6739:"971f2398",6758:"c726faf5",6908:"796b2931",6912:"10a4992e",6920:"852bec9b",7156:"c56a42cd",7377:"928080d9",7409:"b8b073a0",7449:"4ac068ef",7471:"11605e9b",7486:"f4647a6b",7521:"63bc8aba",7607:"7c86afbd",7659:"a9c71585",7671:"a0f6b002",7709:"75da1502",7729:"503d9472",7761:"b7fb4b73",7819:"e324b96f",7822:"03fa0f12",7832:"818e46be",7852:"f32b25df",7877:"e8463203",7918:"03705839",7920:"2cf088e7",7936:"2f71d773",7945:"e686a80a",7949:"1fc9a2df",7959:"419aa65a",8016:"47b30d0b",8048:"4382f722",8066:"23acaba2",8207:"969cc4dd",8222:"c2fbac97",8255:"2c95442e",8463:"dc17fcb8",8598:"70218bb0",8599:"bcda9e1c",8610:"795e45be",8669:"9b860fc1",8684:"7e11747a",8755:"9fc44a02",8923:"43ea0cc2",8924:"c34873c6",9003:"8b97a679",9086:"e57c5f2e",9198:"1b0be679",9233:"2f8e63c7",9275:"f79d66ab",9291:"f363a5de",9401:"596f2e03",9514:"efa55ca1",9599:"adfd269a",9672:"b70b304b",9683:"7a283460",9716:"dbfa8b58",9789:"6ef31848",9801:"5bbc7f16",9847:"8079a37c",9902:"49fe00d7",9936:"03fcf50e",9964:"2d41dc84",9970:"77a12f2e"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),f={},c="adguard-knowledge-base:",r.l=(e,d,a,b)=>{if(f[e])f[e].push(d);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+a){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+a),t.src=e),f[e]=[d];var l=(d,a)=>{t.onerror=t.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(a))),d)return d(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/zh-CN/",r.gca=function(e){return e={17896441:"7918",27271184:"889",42834578:"7959",59880946:"3853",73619289:"7156","935f2afb":"53",e498567d:"81",f55aaf5e:"154","9cc6b809":"160",b8babda8:"261","0e20d6ba":"319","3f726e15":"378",cb509ddf:"642","3cb0e3cc":"745","3508e81a":"856",bd19321f:"857","27dfccfa":"939","1b7cdf15":"949","5d16fcda":"1125","07a0d41a":"1151",c5e18d77:"1187","5ada7aac":"1199","0b7e5e36":"1288",ae2cb2cf:"1335",de95f47a:"1348",e1961f3b:"1370","5ae375b4":"1397",d488cb3c:"1437","307ffd83":"1460",bd02617d:"1470","9853feae":"1507","3d4819ce":"1590","6dddbbce":"1825","45f6dfb1":"1845","21ab55af":"1876",ac411af0:"1929","0843fe7f":"1939","67c30a95":"1994",b7870277:"2030",ec7c8001:"2345","3e10569b":"2352","650bbc90":"2361","0c86bd4d":"2512","71bd938c":"2559","3ff072bf":"2594","8d8cf0be":"2633","69cb8220":"2687",f36e109e:"2691","8008f544":"2767","82ca095d":"2777","697f88a7":"3093","574ead1d":"3160","657e1d9e":"3176","34ba8e7a":"3187","134f618c":"3464","291608b8":"3495","4b1a7326":"3547",b31fe7d3:"3557","5b4d1d34":"3580","457b5982":"3709","2fb86b9c":"3720","75249fcb":"3738","1c0d6b09":"3773","01e49081":"3822","38d4926d":"3841","21644c24":"3900","25fe0666":"4064",c7e21032:"4079",b10aea00:"4140","70cfbdcf":"4141","98dc4426":"4217",f8d3ff3a:"4255","8d5f394d":"4259","4a6fe0aa":"4309",b3542a8c:"4358","4a004d29":"4424","882328c4":"4441","49567a40":"4656","60cab1f8":"4661","8040b56f":"4714","2f04aaa5":"4796",dd8de9c5:"5021","2319050c":"5102","91f196a3":"5115","74a8950e":"5214",b4c177b7:"5229","5b66dd2b":"5275",f959ccd7:"5282",d6b53cf2:"5365",d16d3775:"5410","940b3284":"5468","8c606fec":"5544","7854fa19":"5595","2c98c1fc":"5666",bc0fc59a:"5726","644ae808":"5752","25e13a7b":"5780",a980fcc8:"5854","6958e110":"6007",a2ce2ce9:"6136",c749567c:"6181","66bc0b03":"6208","870224ca":"6223","213e16b3":"6314","158efcd1":"6319","9891c08b":"6501","753df18c":"6701",ed49d722:"6717",ba44145c:"6739","348a373c":"6758",b624dabd:"6908",be209a7f:"6912","03c306b8":"6920",f08a2f54:"7377","799ede31":"7409","593ad589":"7449","8540dfe5":"7471",f1bf7357:"7486","0775d815":"7521",cb0e00d2:"7607",bd3a4226:"7659",e8d2475c:"7671","470bd622":"7709","7bb6e7de":"7729","4327c51b":"7761","076c6843":"7819","210383ca":"7822","8fe408c8":"7832","0b28b389":"7852","6f60f60a":"7877","1a4e3797":"7920","1699a460":"7945","4cf61e04":"7949","685c8e24":"8016","865d6452":"8048","6f516163":"8066",fbf60259:"8207","35a307b1":"8222","9b88d0b0":"8255","8a88ff1b":"8463","98b2721c":"8598",d795eb7c:"8599",e483df15:"8610",fce9bfce:"8669","76da28e9":"8684","29fc98b3":"8755",f3df1dda:"8923",d2bb8114:"8924",a9d5dc93:"9003",a0dad432:"9086","74acf672":"9198","2b1d5d83":"9233",bf545090:"9275",b996d26a:"9291","7845e1e4":"9401","1be78505":"9514",af54f677:"9599",fc8b2669:"9672","351de96c":"9683","811ecc71":"9716","3929a4ed":"9789","3f8c5b22":"9801",dface2e8:"9847",ad419003:"9902","4d030695":"9936",eb39d255:"9970"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(d,a)=>{var f=r.o(e,d)?e[d]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(d))e[d]=0;else{var c=new Promise(((a,c)=>f=e[d]=[a,c]));a.push(f[2]=c);var b=r.p+r.u(d),t=new Error;r.l(b,(a=>{if(r.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var c=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+d+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,f[1](t)}}),"chunk-"+d,d)}},r.O.j=d=>0===e[d];var d=(d,a)=>{var f,c,b=a[0],t=a[1],o=a[2],n=0;if(b.some((d=>0!==e[d]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(d&&d(a);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},a=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];a.forEach(d.bind(null,0)),a.push=d.bind(null,a.push.bind(a))})()})();