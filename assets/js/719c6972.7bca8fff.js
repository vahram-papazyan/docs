"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3390],{3905:(e,t,a)=>{a.d(t,{kt:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(a),d=n,h=s["".concat(o,".").concat(d)]||s[d]||k[d]||l;return a?r.createElement(h,p(p({ref:t},u),{},{components:a})):r.createElement(h,p({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),p=["components"],i={},o="Darklang Release 3",m={unversionedId:"changelog/release-3",id:"changelog/release-3",title:"Darklang Release 3",description:"July 1, 2022",source:"@site/docs/changelog/release-3.md",sourceDirName:"changelog",slug:"/changelog/release-3",permalink:"/changelog/release-3",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/changelog/release-3.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Darklang Release 4",permalink:"/changelog/release-4"},next:{title:"Darklang Release 2",permalink:"/changelog/release-2"}},k={},u=[{value:"Language improvements",id:"language-improvements",level:2},{value:"Stdlib improvements",id:"stdlib-improvements",level:2},{value:"Editor improvements",id:"editor-improvements",level:2},{value:"HTTP Framework improvements",id:"http-framework-improvements",level:2},{value:"Internal improvements",id:"internal-improvements",level:2}],s={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"darklang-release-3"},"Darklang Release 3"),(0,l.kt)("p",null,"July 1, 2022"),(0,l.kt)("p",null,"Darklang Release 3 is focused primarily on taking advantage of the recent\nchanges, including new StdLib functions, small languages changes, and sunsetting\nold features."),(0,l.kt)("h2",{id:"language-improvements"},"Language improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When a function is called with a runtime error as an argument, return the\nruntime error instead of a new error\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4095"},"#4095"),"). This was a significant\nsource of annoyance for devs trying to figure out why their code wasn't\nworking.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"64-bit ints now work end-to-end (previously we had two separate issues with\nnumbers above ",(0,l.kt)("inlineCode",{parentName:"p"},"2^53")," and numbers above ",(0,l.kt)("inlineCode",{parentName:"p"},"2^63"),")\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4209"},"#4209"),")"))),(0,l.kt)("h2",{id:"stdlib-improvements"},"Stdlib improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Allow ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient::basicAuth_v0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient::basicAuth_v1")," to run in the\neditor (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4147"},"#4147"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Allow ",(0,l.kt)("inlineCode",{parentName:"p"},"Crypto::sha256_v0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Crypto::sha384_v0")," to run in the editor\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4146"},"#4146"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rename ",(0,l.kt)("inlineCode",{parentName:"p"},"String::toInt")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Int::parse_v0"),", making it work for 64 bit ints\n(previous version only supported 63-bit ints)\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4191"},"#4191"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"add ",(0,l.kt)("inlineCode",{parentName:"p"},"List::all")," (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4150"},"#4150"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mark ",(0,l.kt)("inlineCode",{parentName:"p"},"Date::today")," as impure\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4149"},"#4149"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add new versions of Date functions ",(0,l.kt)("inlineCode",{parentName:"p"},"Date::hour_v1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Date::minute_v1"),", and\n",(0,l.kt)("inlineCode",{parentName:"p"},"Date::second_v1"),", which unlike the previous versions do not return negative\nresults for dates before 1970!\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4133"},"#4133"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rename the ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," parameter of functions using first-class functions to ",(0,l.kt)("inlineCode",{parentName:"p"},"fn"),"\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4156"},"#4156"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4150"},"#4150"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use camelCase in all standard library parameters\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4201"},"#4201"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix typos and poor wording in a lot of error messages and functions\ndescriptions (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4096"},"#4096"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4200"},"#4200"),")"))),(0,l.kt)("h2",{id:"editor-improvements"},"Editor improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix using secrets when run in the editor\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4128"},"#4128"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues/4129"},"#4129"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix occasional crash in editor analysis\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4117"},"#4117"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4089"},"#4098"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4070"},"#4070"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove the old (OCaml-based) analysis, reducing the size of the editor\ndownload and speeding up startup\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4158"},"#4148"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove the canvas minimap which was causing a long hang when switching to edit\nfunctions (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4106"},"#4106"),")"))),(0,l.kt)("h2",{id:"http-framework-improvements"},"HTTP Framework improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Load programs faster by removing 3-4 fewer DB requests during load\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4051"},"#4051"),")")),(0,l.kt)("h2",{id:"internal-improvements"},"Internal improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Make the Dark repo build on Mac with M1/M2 (arm) chips\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4237"},"#4237"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove a lot of old OCaml code\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4140"},"#4140"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4138"},"#4138"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4195"},"#4195"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4158"},"#4158"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4074"},"#4074"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4225"},"#4225"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove all Rust from the codebase\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4057"},"#4057"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove all Go from the codebase\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4039"},"#4039"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Refactor the client (Rescript) codebase\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4199"},"#4199"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4203"},"#4203"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4206"},"#4206"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4218"},"#4218"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4220"},"#4220"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Many steps to speed up the CI/CD pipeline\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4090"},"#4090"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4088"},"#4088"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4087"},"#4087"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4083"},"#4083"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4068"},"#4068"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Allow multiple deploys more safely in our CI/CD pipeline\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4082"},"#4082"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4076"},"#4076"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4073"},"#4073"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4072"},"#4072"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4067"},"#4067"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Refactor integration tests away from being one big file\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4167"},"#4167"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fail deploy if assets don't upload\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4186"},"#4186"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix flaky tests (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4205"},"#4205"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4207"},"#4207"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4222"},"#4222"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove unused DarkInternal functions\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4056"},"#4056"),")"))))}d.isMDXComponent=!0}}]);