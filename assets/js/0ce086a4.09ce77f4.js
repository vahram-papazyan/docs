"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7360],{3905:(e,t,r)=>{r.d(t,{kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={},p="Darklang Release 4",s={unversionedId:"changelog/release-4",id:"changelog/release-4",title:"Darklang Release 4",description:"August 1, 2022",source:"@site/docs/changelog/release-4.md",sourceDirName:"changelog",slug:"/changelog/release-4",permalink:"/changelog/release-4",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/changelog/release-4.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Darklang Release 5",permalink:"/changelog/release-5"},next:{title:"Darklang Release 3",permalink:"/changelog/release-3"}},u={},m=[{value:"Standard library improvements",id:"standard-library-improvements",level:2},{value:"Contributor improvements",id:"contributor-improvements",level:2},{value:"Internal improvements",id:"internal-improvements",level:2}],d={toc:m};function c(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"darklang-release-4"},"Darklang Release 4"),(0,l.kt)("p",null,"August 1, 2022"),(0,l.kt)("h2",{id:"standard-library-improvements"},"Standard library improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Many standard library functions now have better descriptions, including much\nbetter formatting (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4273"},"#4273"),").\n",(0,l.kt)("img",{alt:"Better formatting",src:r(72439).Z,width:"738",height:"436"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add new version of ",(0,l.kt)("inlineCode",{parentName:"p"},"Result::fromOption"),", which allows non-string errors\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4272"},"#4272"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add new version of ",(0,l.kt)("inlineCode",{parentName:"p"},"Bytes::base64Decode"),", which fails properly on invalid\ninput (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4287"},"#4287"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bug fix: In the editor, Dates were incorrectly offset based on your timezone\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4260"},"#4260"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Improved handling of 64-bit ints in editor\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4257"},"#4257"),")."))),(0,l.kt)("h2",{id:"contributor-improvements"},"Contributor improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow contributors with ARM64 Macs to build Dark codebase\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4237"},"#4237"),").")),(0,l.kt)("h2",{id:"internal-improvements"},"Internal improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We are in the process of rewriting the backend of the editor on top of Dark,\nincluding exposing more Editor-related functions\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4278"},"#4278"),"), and moving existing\nfunctionality to the new ",(0,l.kt)("inlineCode",{parentName:"p"},"dark-editor")," canvas\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4294"},"#4294"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tuples are not ready ready to release, but much of the behind the scenes work\nis done, including adding standard library functions\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4311"},"#4311"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We are working to expose more useful information in the editor, especially\nmaking the backend metadata accessible from the client\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4277"},"#4277"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4254"},"#4254"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4284"},"#4284"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4288"},"#4288"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4281"},"#4281"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4282"},"#4282"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4252"},"#4252"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4256"},"#4256"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4279"},"#4279"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4331"},"#4331"),")."))))}c.isMDXComponent=!0},72439:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pretty-descriptions-9d25b2983d23520ab354012a89f54f1a.png"}}]);