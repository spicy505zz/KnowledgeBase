(()=>{"use strict";var e,a,d,c,f,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=b,r.c=t,e=[],r.O=(a,d,c,f)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],f=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(f,b),f},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({2:"1ba08532",53:"935f2afb",73:"343de603",265:"acaf4e3d",307:"56ad02ec",319:"0e20d6ba",370:"561c38ee",412:"60b4f824",495:"d85fc8cb",696:"39f3cff7",718:"dc3179e7",845:"348321e0",857:"4edf336e",881:"741ec58b",891:"80808646",1009:"ec6262d5",1038:"2264e4d3",1219:"4fcb9884",1235:"6fadd864",1263:"41371611",1438:"6fe5737e",1500:"1a7e4f3f",1616:"bf813be9",1780:"35642119",1784:"e553e7ce",1812:"8e5e2844",1921:"239fe9ea",1930:"f59d87f6",1947:"c9773110",1975:"4eb00310",2033:"a3b0fe75",2144:"306cdbae",2155:"a8661516",2177:"0a5bb075",2309:"2f0a1bf2",2361:"650bbc90",2407:"a8e4ca3b",2466:"658e6596",2476:"12c5a5bf",2493:"1cb11ce9",2494:"46c28b4d",2512:"0c86bd4d",2516:"87229ebc",2641:"6222da07",2817:"833da3a0",2840:"4a57d863",2883:"e8a02fa7",2925:"9bab63ad",2944:"78824098",2955:"e74ae3a7",3031:"298d5985",3155:"83769ce1",3185:"2d0ba3fe",3236:"26cafba1",3317:"d9632a19",3342:"c2701665",3344:"07009171",3380:"33bf3f93",3393:"5ba8e24d",3458:"8c011cdc",3492:"b5e4ea7e",3676:"275b6317",3706:"9f571879",3709:"457b5982",3764:"4a48dc5d",3769:"d237bec0",3802:"7aae3888",3806:"332fe855",3812:"dd7b1b1d",3853:"59880946",4168:"c89e42cd",4182:"9570d422",4187:"2b5e0829",4323:"76585a68",4364:"b770c941",4431:"a5c1a230",4559:"7df06933",4595:"28d36b13",4632:"b601c958",4696:"ad69a924",4820:"051262f6",4842:"a9411063",4846:"35067a76",4901:"c1cab41a",5007:"e6d6f75d",5130:"ad0f385d",5190:"fb0c9f28",5311:"9b9c35ff",5337:"8a465482",5464:"886ae8c9",5479:"f1d7c9d9",5543:"063f2aea",5573:"671f9e5b",5674:"b5b3e609",5708:"85e4c757",5728:"30ebdb81",5763:"3864beed",5795:"0e64c389",5864:"52d53f11",5907:"2c2ed6a6",5970:"94c4955c",5978:"fe5ce4df",6126:"f46d3b0f",6269:"55780b29",6346:"9c1e9684",6361:"6080e531",6415:"e1b4ec92",6427:"4f67975e",6459:"5fe73e78",6480:"fa746d03",6582:"fb4c4cfc",6625:"b91663bb",6770:"d37649fa",6833:"29759628",6865:"309bfbed",7011:"ea0f69d0",7059:"1009c622",7150:"b7db96aa",7200:"7b4ffc65",7221:"2679b471",7238:"d310d396",7285:"a3195ac1",7321:"09324444",7354:"61034793",7355:"b05f3e95",7377:"f08a2f54",7413:"252d4fe0",7486:"f1bf7357",7519:"4f84f582",7595:"cbedf8e2",7622:"f9a23d18",7659:"bd3a4226",7918:"17896441",7920:"1a4e3797",8084:"2d845f15",8111:"b348f093",8121:"01eb336c",8164:"cc69fd1b",8198:"08cb3c75",8255:"e5e395c2",8339:"5c48186b",8355:"ac01082c",8435:"63127470",8436:"1390edb2",8522:"0484a616",8540:"cb357075",8709:"049b8a41",8718:"73ff5020",8724:"09221264",8843:"2d162343",8874:"313431ba",8909:"d8cd7f5d",8915:"5eabbd88",8994:"d17a4caf",9100:"e4141fd7",9128:"0013ec79",9148:"a1567901",9152:"4c5e908d",9311:"31b3a610",9324:"fadac138",9514:"1be78505",9536:"db054c66",9671:"0e384e19",9686:"a70e3e19",9782:"3ac99074",9844:"e43b7578"}[e]||e)+"."+{2:"cb839561",53:"6f480c1d",73:"024293fb",118:"f086678f",265:"7c8b08cc",307:"47eb3398",319:"487bfe00",370:"0f6f2d40",412:"9dd50380",495:"26b97754",511:"6b7af6f3",696:"1e10646d",718:"81079807",845:"0b9c2743",857:"5e49754e",881:"89871409",891:"cb94fc3d",1009:"ee54bb10",1038:"699acded",1144:"365b509b",1219:"da566510",1235:"160771a7",1263:"8a25874a",1438:"04582231",1500:"70c73613",1616:"59b02ab1",1780:"038f6002",1784:"27a6922c",1812:"b8943357",1921:"e18b404a",1930:"8fbfd89c",1947:"c2a6cd93",1975:"ab893264",2033:"55a6f5da",2144:"e47c01df",2155:"98665179",2177:"f34101a9",2309:"8d0e7d53",2361:"df2f7f42",2407:"be068633",2466:"42c8fbd0",2476:"0c71af6b",2493:"de75d929",2494:"61b106b6",2512:"f747d846",2516:"4d585dd9",2641:"d7ebe850",2664:"0d1470f9",2817:"a0ef7c32",2840:"a3eccef8",2883:"29f3daa3",2925:"684538ca",2944:"4606fdab",2955:"01a6f826",3031:"aeedc944",3155:"9e3bafa9",3185:"c0a40110",3236:"c8683efd",3317:"2ab6d8a0",3342:"e9fedf93",3344:"d1b89cde",3380:"cfdf491d",3393:"2d6343d9",3458:"e24583ec",3492:"bf448f33",3676:"262774c4",3706:"9fca8a5e",3709:"18b45c45",3764:"d945144f",3769:"9b3b568b",3802:"6597d1fa",3806:"1208300b",3812:"2db92f8d",3853:"77d02c55",4168:"bf56245d",4182:"a46d7b7c",4187:"ca9f9197",4248:"37e6ab5b",4323:"41e9b5af",4364:"77a046dd",4431:"0709e664",4559:"c8b0313b",4595:"4dc82055",4632:"c8c26ba5",4696:"fc0b5f0d",4820:"592a0e6d",4842:"d9463e82",4846:"1ef53977",4901:"6d0de283",5007:"5901b75b",5130:"485aaaa5",5190:"c11e24ae",5311:"2bbf65e9",5337:"cdf2b64e",5464:"c831a998",5479:"38f66710",5543:"4ff74674",5573:"793202b0",5674:"6fcb2414",5708:"121e27b3",5728:"718665d7",5763:"a2110873",5795:"93fe38ed",5864:"20b095e5",5907:"bb5b5307",5970:"aca5ef97",5978:"71556f4f",6126:"6a3e0999",6269:"9b059c6f",6346:"e256c6fe",6361:"9b3879de",6415:"0ee32d18",6427:"68332d30",6459:"03139418",6480:"37c4757e",6582:"6bb1e059",6625:"c2e2601e",6770:"f8316b28",6833:"ca3f284b",6865:"18badfd4",7011:"ec8530f6",7059:"b4865f29",7150:"d0d495e8",7200:"2b7ff02d",7221:"bb9a80c0",7238:"1d692613",7285:"3013d20e",7321:"24247ad0",7354:"55f6e1a5",7355:"ea677698",7377:"34ca7dd2",7413:"259cd76e",7486:"b26fb078",7519:"5c4dfc7a",7595:"413f9647",7622:"00977f9e",7659:"a1193241",7918:"03705839",7920:"2cf088e7",7936:"6f933266",8084:"a6188701",8111:"b61e7738",8121:"7586c41b",8164:"1354899a",8198:"9537a868",8255:"fd05892e",8339:"1913d62a",8355:"67f918ef",8435:"182dfe2e",8436:"dde64641",8522:"83b5065c",8540:"85146f66",8709:"f739b7d6",8718:"20d2b087",8724:"ea63835c",8843:"221634d4",8874:"49e65a5e",8909:"bca9ae17",8915:"831444bd",8994:"a3c3325d",9100:"088d491e",9128:"4e295982",9148:"9646fcb1",9152:"a29f7dca",9311:"f1d6ffe5",9324:"d34bf8e2",9514:"efa55ca1",9536:"f17d4809",9671:"198c6390",9686:"bd853c39",9782:"1fe41259",9844:"5d3f568e",9964:"2d41dc84"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="adguard-knowledge-base:",r.l=(e,a,d,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/",r.gca=function(e){return e={17896441:"7918",29759628:"6833",35642119:"1780",41371611:"1263",59880946:"3853",61034793:"7354",63127470:"8435",78824098:"2944",80808646:"891","1ba08532":"2","935f2afb":"53","343de603":"73",acaf4e3d:"265","56ad02ec":"307","0e20d6ba":"319","561c38ee":"370","60b4f824":"412",d85fc8cb:"495","39f3cff7":"696",dc3179e7:"718","348321e0":"845","4edf336e":"857","741ec58b":"881",ec6262d5:"1009","2264e4d3":"1038","4fcb9884":"1219","6fadd864":"1235","6fe5737e":"1438","1a7e4f3f":"1500",bf813be9:"1616",e553e7ce:"1784","8e5e2844":"1812","239fe9ea":"1921",f59d87f6:"1930",c9773110:"1947","4eb00310":"1975",a3b0fe75:"2033","306cdbae":"2144",a8661516:"2155","0a5bb075":"2177","2f0a1bf2":"2309","650bbc90":"2361",a8e4ca3b:"2407","658e6596":"2466","12c5a5bf":"2476","1cb11ce9":"2493","46c28b4d":"2494","0c86bd4d":"2512","87229ebc":"2516","6222da07":"2641","833da3a0":"2817","4a57d863":"2840",e8a02fa7:"2883","9bab63ad":"2925",e74ae3a7:"2955","298d5985":"3031","83769ce1":"3155","2d0ba3fe":"3185","26cafba1":"3236",d9632a19:"3317",c2701665:"3342","07009171":"3344","33bf3f93":"3380","5ba8e24d":"3393","8c011cdc":"3458",b5e4ea7e:"3492","275b6317":"3676","9f571879":"3706","457b5982":"3709","4a48dc5d":"3764",d237bec0:"3769","7aae3888":"3802","332fe855":"3806",dd7b1b1d:"3812",c89e42cd:"4168","9570d422":"4182","2b5e0829":"4187","76585a68":"4323",b770c941:"4364",a5c1a230:"4431","7df06933":"4559","28d36b13":"4595",b601c958:"4632",ad69a924:"4696","051262f6":"4820",a9411063:"4842","35067a76":"4846",c1cab41a:"4901",e6d6f75d:"5007",ad0f385d:"5130",fb0c9f28:"5190","9b9c35ff":"5311","8a465482":"5337","886ae8c9":"5464",f1d7c9d9:"5479","063f2aea":"5543","671f9e5b":"5573",b5b3e609:"5674","85e4c757":"5708","30ebdb81":"5728","3864beed":"5763","0e64c389":"5795","52d53f11":"5864","2c2ed6a6":"5907","94c4955c":"5970",fe5ce4df:"5978",f46d3b0f:"6126","55780b29":"6269","9c1e9684":"6346","6080e531":"6361",e1b4ec92:"6415","4f67975e":"6427","5fe73e78":"6459",fa746d03:"6480",fb4c4cfc:"6582",b91663bb:"6625",d37649fa:"6770","309bfbed":"6865",ea0f69d0:"7011","1009c622":"7059",b7db96aa:"7150","7b4ffc65":"7200","2679b471":"7221",d310d396:"7238",a3195ac1:"7285","09324444":"7321",b05f3e95:"7355",f08a2f54:"7377","252d4fe0":"7413",f1bf7357:"7486","4f84f582":"7519",cbedf8e2:"7595",f9a23d18:"7622",bd3a4226:"7659","1a4e3797":"7920","2d845f15":"8084",b348f093:"8111","01eb336c":"8121",cc69fd1b:"8164","08cb3c75":"8198",e5e395c2:"8255","5c48186b":"8339",ac01082c:"8355","1390edb2":"8436","0484a616":"8522",cb357075:"8540","049b8a41":"8709","73ff5020":"8718","09221264":"8724","2d162343":"8843","313431ba":"8874",d8cd7f5d:"8909","5eabbd88":"8915",d17a4caf:"8994",e4141fd7:"9100","0013ec79":"9128",a1567901:"9148","4c5e908d":"9152","31b3a610":"9311",fadac138:"9324","1be78505":"9514",db054c66:"9536","0e384e19":"9671",a70e3e19:"9686","3ac99074":"9782",e43b7578:"9844"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var b=r.p+r.u(a),t=new Error;r.l(b,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,b=d[0],t=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},d=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();