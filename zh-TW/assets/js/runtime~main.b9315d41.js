(()=>{"use strict";var e,a,b,d,f,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var b=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(b.exports,b,b.exports,r),b.loaded=!0,b.exports}r.m=c,r.c=t,e=[],r.O=(a,b,d,f)=>{if(!b){var c=1/0;for(i=0;i<e.length;i++){b=e[i][0],d=e[i][1],f=e[i][2];for(var t=!0,o=0;o<b.length;o++)(!1&f||c>=f)&&Object.keys(r.O).every((e=>r.O[e](b[o])))?b.splice(o--,1):(t=!1,f<c&&(c=f));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[b,d,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},b=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var c={};a=a||[null,b({}),b([]),b(b)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=b(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(f,c),f},r.d=(e,a)=>{for(var b in a)r.o(a,b)&&!r.o(e,b)&&Object.defineProperty(e,b,{enumerable:!0,get:a[b]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,b)=>(r.f[b](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",87:"b1407d09",234:"c387ee58",304:"e1529c97",311:"3c2bfee2",319:"0e20d6ba",327:"7a3ed15a",402:"e2cba10a",427:"d4d05502",642:"57a12137",720:"859a6edd",770:"697e09b2",1e3:"54df8349",1058:"a916420e",1121:"fa7456de",1137:"60321c2c",1251:"8ef757b7",1263:"64fb906f",1264:"ab41530d",1286:"cef65ca7",1303:"af10a56d",1365:"6a72d2a8",1375:"962ef98b",1388:"73a3b50e",1389:"a442a601",1440:"e68cf146",1485:"308ae13f",1536:"ac233eea",1559:"ff81821a",1560:"73d46422",1578:"1ba11d8e",1605:"be8d7d20",1660:"585077df",1794:"d0d670a2",1798:"e1b4b6d9",1950:"fb4b39f3",1989:"4934cff5",2019:"b5f1aad7",2051:"79eab01b",2102:"784128c5",2152:"e701ee6c",2153:"dc133edd",2181:"9acf4719",2304:"d5361ef6",2307:"dcafcd1c",2361:"650bbc90",2364:"d74b7144",2382:"e833de5c",2512:"0c86bd4d",2643:"1f9b5599",2659:"5a30b022",2669:"049d66a0",2672:"1cf638fd",2766:"835d695e",2780:"652cb51d",2802:"a463ee42",2803:"2409aaf9",2845:"244de5cb",2865:"288693d1",2894:"fb293b28",2939:"b54bea1a",2986:"80f6d40d",2992:"85b0b65e",3070:"f17b1e6a",3119:"475993ec",3180:"c1085448",3217:"0ab0f5f2",3233:"3b00487b",3315:"366592f8",3329:"bbe81c65",3704:"642f0ed9",3709:"457b5982",3711:"6210f21b",3736:"80b37aba",3853:"59880946",3877:"848d27b4",3893:"86946755",4055:"b4939601",4076:"1acc5acb",4087:"8723b95b",4339:"2b653bff",4347:"e8b4e880",4442:"0986c4a5",4480:"e08ba12e",4495:"200b6160",4671:"39fd2c5d",4674:"12bc334a",4707:"64f163a0",4757:"148c517d",4775:"6ca5239e",4815:"8f10fcef",4895:"d433bcaa",5273:"67562374",5297:"02a3a0e2",5401:"88a8de30",5482:"357d62df",5489:"9ecc87ed",5591:"61aa9b62",5720:"a3de0978",5723:"0d144666",5767:"7ed3f1c7",5787:"ee69281f",6001:"c73d8e5b",6074:"85693c1c",6157:"9d56e494",6285:"a0ba33d5",6405:"7730ccb2",6507:"2bf86f70",6575:"9943fa75",6627:"50343338",6647:"87bde116",6659:"d6900b59",6667:"56727930",6669:"5c7a2712",6687:"4ea803ac",6764:"4b639b25",6940:"dcb2e8c7",7107:"ea93c7b3",7115:"a5729acb",7171:"dbf625af",7183:"19a2c222",7237:"fbc1f8fb",7276:"c07aea4f",7375:"1c31b64e",7377:"f08a2f54",7486:"f1bf7357",7576:"b08a213b",7589:"1df3966d",7659:"bd3a4226",7675:"0a7c8034",7729:"efe2235d",7738:"e30cae1b",7830:"e9983e96",7834:"3b51d116",7838:"9fbf4630",7918:"17896441",7920:"1a4e3797",8022:"5a953e7b",8153:"5e2780d8",8185:"ebd5d117",8284:"4bda6eaa",8328:"1a10c538",8366:"c98aa57c",8507:"89036fc8",8582:"0384c02d",8823:"a244c921",8990:"a7d7b407",9021:"49e877e5",9126:"63962937",9140:"656ce29e",9171:"033687ee",9185:"e5e28cfb",9203:"c48a0e59",9255:"41b747ea",9289:"1e52a0cb",9306:"119ced30",9312:"49eb50e5",9323:"eee74f5b",9434:"e5dea4dd",9514:"1be78505",9581:"7ab463df",9606:"e5338e34",9673:"23a43357",9716:"ee3aa6c4",9786:"4f59a190",9940:"89fafebb"}[e]||e)+"."+{53:"0ee04020",87:"e2774ff6",118:"f086678f",234:"4de6c306",304:"48c2609c",311:"bd2ec90b",319:"487bfe00",327:"fc89fad8",402:"9c1fc67a",427:"484ae13e",511:"6b7af6f3",642:"bdbaba8b",720:"11a56bff",770:"acb3521c",1e3:"8d52bdab",1058:"05b2d35e",1121:"5aeadb6e",1137:"67305b87",1144:"365b509b",1251:"c0f9edd0",1263:"1ef8c83f",1264:"42b17cea",1286:"0a155397",1303:"d2973bcd",1365:"1ce541f1",1375:"eadfc072",1388:"cc744c5b",1389:"6cab2d57",1440:"737a9371",1485:"3a6d1524",1536:"78895b90",1559:"b0962179",1560:"dd958f09",1578:"b1c698c9",1605:"7efa6bf5",1660:"c83960d4",1794:"1c4ff29a",1798:"72c56368",1950:"0111b0ac",1989:"d5aa8a67",2019:"cea7fc1c",2051:"2d9bf3bd",2102:"d14a5f1d",2152:"4add1cd8",2153:"52e6c103",2181:"a79773a7",2304:"82da22b2",2307:"93e642a2",2361:"268e95a9",2364:"acfebb50",2382:"5c47c46d",2512:"0ac342a9",2643:"caa8f6f7",2659:"71e3a75f",2664:"0d1470f9",2669:"3342cb58",2672:"be2b2ba3",2766:"dc0ea4a9",2780:"6a1144a7",2802:"84824b12",2803:"847ffec4",2845:"69107a0f",2865:"3b479d88",2894:"8647b973",2939:"1350d0fb",2986:"823d2296",2992:"bf300b53",3070:"b65349de",3119:"760a106f",3180:"d7b02e31",3217:"002d63cb",3233:"b65efe2f",3315:"e25025c5",3329:"94d00a03",3704:"8f2b6cb2",3709:"ee5dbc11",3711:"5db0fe02",3736:"03f0c176",3853:"77d02c55",3877:"1e7a2240",3893:"f94e8142",4055:"e4298dd2",4076:"f05b820c",4087:"21470d12",4248:"37e6ab5b",4339:"458602ba",4347:"4d5e6531",4442:"c07460be",4480:"d53f1bad",4495:"d51eaefa",4671:"ab97c383",4674:"f994ffe9",4707:"c44e1f56",4757:"d38548fe",4775:"a6e37e4f",4815:"1cd97804",4895:"7c48b7da",5273:"52fd5e1c",5297:"6fcab6c9",5401:"253f44f3",5482:"47cfbac3",5489:"68d719b6",5591:"53307432",5720:"d7dc1f9f",5723:"7a6250eb",5767:"ef4c7816",5787:"bacc33a4",6001:"9fa3a4bd",6074:"8f680ae8",6157:"a57ebb04",6285:"eb420596",6405:"5757ea49",6507:"431adbbd",6575:"d11b6613",6627:"2b939070",6647:"302e16d0",6659:"3e097dbf",6667:"034ffdd4",6669:"8341a931",6687:"7d7e5d0a",6764:"d5ff5da0",6940:"0b86bbd5",7107:"f4fa2200",7115:"c8d166db",7171:"0e9ba8a7",7183:"c2e07422",7237:"00a4d57c",7276:"ef0e99ba",7375:"07fea277",7377:"20fa3da4",7486:"2e052047",7576:"022e5e4c",7589:"260b90c7",7659:"079ffa8c",7675:"d8205eac",7729:"223a3dbd",7738:"7ff9a613",7830:"e7ab90d7",7834:"3c323eff",7838:"29b7cb65",7918:"03705839",7920:"2cf088e7",7936:"6f933266",8022:"852bbf08",8153:"187e0156",8185:"bc7192f6",8284:"d1278f5d",8328:"78fb2bf4",8366:"6deb51c8",8507:"47c2969a",8582:"ec4287bf",8823:"19f43e9b",8990:"d7682667",9021:"19c4ba78",9126:"a5919ce4",9140:"b879db76",9171:"154ab978",9185:"499ead06",9203:"cbca9b8e",9255:"01e90d21",9289:"54a0d104",9306:"b1d5a412",9312:"389a5d88",9323:"f664b925",9434:"64237377",9514:"efa55ca1",9581:"25a7c37d",9606:"85b5be3b",9673:"423335b1",9716:"f6770710",9786:"afef4a1c",9940:"bc3924ad",9964:"2d41dc84"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="adguard-knowledge-base:",r.l=(e,a,b,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==b)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+b){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+b),t.src=e),d[e]=[a];var l=(a,b)=>{t.onerror=t.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(b))),a)return a(b)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/zh-TW/",r.gca=function(e){return e={17896441:"7918",50343338:"6627",56727930:"6667",59880946:"3853",63962937:"9126",67562374:"5273",86946755:"3893","935f2afb":"53",b1407d09:"87",c387ee58:"234",e1529c97:"304","3c2bfee2":"311","0e20d6ba":"319","7a3ed15a":"327",e2cba10a:"402",d4d05502:"427","57a12137":"642","859a6edd":"720","697e09b2":"770","54df8349":"1000",a916420e:"1058",fa7456de:"1121","60321c2c":"1137","8ef757b7":"1251","64fb906f":"1263",ab41530d:"1264",cef65ca7:"1286",af10a56d:"1303","6a72d2a8":"1365","962ef98b":"1375","73a3b50e":"1388",a442a601:"1389",e68cf146:"1440","308ae13f":"1485",ac233eea:"1536",ff81821a:"1559","73d46422":"1560","1ba11d8e":"1578",be8d7d20:"1605","585077df":"1660",d0d670a2:"1794",e1b4b6d9:"1798",fb4b39f3:"1950","4934cff5":"1989",b5f1aad7:"2019","79eab01b":"2051","784128c5":"2102",e701ee6c:"2152",dc133edd:"2153","9acf4719":"2181",d5361ef6:"2304",dcafcd1c:"2307","650bbc90":"2361",d74b7144:"2364",e833de5c:"2382","0c86bd4d":"2512","1f9b5599":"2643","5a30b022":"2659","049d66a0":"2669","1cf638fd":"2672","835d695e":"2766","652cb51d":"2780",a463ee42:"2802","2409aaf9":"2803","244de5cb":"2845","288693d1":"2865",fb293b28:"2894",b54bea1a:"2939","80f6d40d":"2986","85b0b65e":"2992",f17b1e6a:"3070","475993ec":"3119",c1085448:"3180","0ab0f5f2":"3217","3b00487b":"3233","366592f8":"3315",bbe81c65:"3329","642f0ed9":"3704","457b5982":"3709","6210f21b":"3711","80b37aba":"3736","848d27b4":"3877",b4939601:"4055","1acc5acb":"4076","8723b95b":"4087","2b653bff":"4339",e8b4e880:"4347","0986c4a5":"4442",e08ba12e:"4480","200b6160":"4495","39fd2c5d":"4671","12bc334a":"4674","64f163a0":"4707","148c517d":"4757","6ca5239e":"4775","8f10fcef":"4815",d433bcaa:"4895","02a3a0e2":"5297","88a8de30":"5401","357d62df":"5482","9ecc87ed":"5489","61aa9b62":"5591",a3de0978:"5720","0d144666":"5723","7ed3f1c7":"5767",ee69281f:"5787",c73d8e5b:"6001","85693c1c":"6074","9d56e494":"6157",a0ba33d5:"6285","7730ccb2":"6405","2bf86f70":"6507","9943fa75":"6575","87bde116":"6647",d6900b59:"6659","5c7a2712":"6669","4ea803ac":"6687","4b639b25":"6764",dcb2e8c7:"6940",ea93c7b3:"7107",a5729acb:"7115",dbf625af:"7171","19a2c222":"7183",fbc1f8fb:"7237",c07aea4f:"7276","1c31b64e":"7375",f08a2f54:"7377",f1bf7357:"7486",b08a213b:"7576","1df3966d":"7589",bd3a4226:"7659","0a7c8034":"7675",efe2235d:"7729",e30cae1b:"7738",e9983e96:"7830","3b51d116":"7834","9fbf4630":"7838","1a4e3797":"7920","5a953e7b":"8022","5e2780d8":"8153",ebd5d117:"8185","4bda6eaa":"8284","1a10c538":"8328",c98aa57c:"8366","89036fc8":"8507","0384c02d":"8582",a244c921:"8823",a7d7b407:"8990","49e877e5":"9021","656ce29e":"9140","033687ee":"9171",e5e28cfb:"9185",c48a0e59:"9203","41b747ea":"9255","1e52a0cb":"9289","119ced30":"9306","49eb50e5":"9312",eee74f5b:"9323",e5dea4dd:"9434","1be78505":"9514","7ab463df":"9581",e5338e34:"9606","23a43357":"9673",ee3aa6c4:"9716","4f59a190":"9786","89fafebb":"9940"}[e]||e,r.p+r.u(e)},(()=>{var e={6552:0,532:0};r.f.j=(a,b)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)b.push(d[2]);else if(/^(53|655)2$/.test(a))e[a]=0;else{var f=new Promise(((b,f)=>d=e[a]=[b,f]));b.push(d[2]=f);var c=r.p+r.u(a),t=new Error;r.l(c,(b=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=b&&("load"===b.type?"missing":b.type),c=b&&b.target&&b.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",t.name="ChunkLoadError",t.type=f,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,b)=>{var d,f,c=b[0],t=b[1],o=b[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(b);n<c.length;n++)f=c[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},b=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];b.forEach(a.bind(null,0)),b.push=a.bind(null,b.push.bind(b))})()})();