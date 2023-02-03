"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9077],{3905:(e,t,a)=>{a.d(t,{kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p="Darklang Release 5",s={unversionedId:"changelog/release-5",id:"changelog/release-5",title:"Darklang Release 5",description:"September 1, 2022",source:"@site/docs/changelog/release-5.md",sourceDirName:"changelog",slug:"/changelog/release-5",permalink:"/changelog/release-5",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/changelog/release-5.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Darklang Release 6",permalink:"/changelog/release-6"},next:{title:"Darklang Release 4",permalink:"/changelog/release-4"}},u={},m=[{value:"Major feature: experimental Tuple support",id:"major-feature-experimental-tuple-support",level:2},{value:"Major feature: Contributor settings",id:"major-feature-contributor-settings",level:2},{value:"Language improvements",id:"language-improvements",level:2},{value:"Editor improvements",id:"editor-improvements",level:2},{value:"In-progress features - <code>HttpClient</code> and HTTP framework",id:"in-progress-features---httpclient-and-http-framework",level:2},{value:"Internal improvements",id:"internal-improvements",level:2}],d={toc:m};function k(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"darklang-release-5"},"Darklang Release 5"),(0,l.kt)("p",null,"September 1, 2022"),(0,l.kt)("p",null,"Darklang Release 5 includes support for Tuples, a revamped settings panel with\nnew settings for contributors, and significant internal reworks."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See the ",(0,l.kt)("a",{parentName:"em",href:"https://blog.darklang.com/darklang-release-5/"},"blog post")," for further\ndiscussion.")),(0,l.kt)("h2",{id:"major-feature-experimental-tuple-support"},"Major feature: experimental Tuple support"),(0,l.kt)("p",null,"Dark now has work-in-progress support for tuples\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues/4265"},"#4265"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4425"},"#4425"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4404"},"#4404"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4311"},"#4311"),") - unstructured lists of\nheterogeneous data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tuple expressions can be created by entering ",(0,l.kt)("inlineCode",{parentName:"li"},"(")," in a blank expression"),(0,l.kt)("li",{parentName:"ul"},"Tuples may be deconstructed in ",(0,l.kt)("inlineCode",{parentName:"li"},"match")," patterns"),(0,l.kt)("li",{parentName:"ul"},"New standard library functions have been added to work with Tuples:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tuple2::create"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::first"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::second"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::swap"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::mapFirst"),",\n",(0,l.kt)("inlineCode",{parentName:"li"},"::mapSecond"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::mapBoth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tuple3::create"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::first"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::second"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::third"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::mapFirst"),",\n",(0,l.kt)("inlineCode",{parentName:"li"},"::mapSecond"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::mapThird"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"::mapAllThree")))),(0,l.kt)("li",{parentName:"ul"},"Tuple deconstruction (",(0,l.kt)("inlineCode",{parentName:"li"},"let (lat long) = (39.9526, 75.1652)"),") is not yet\navailable, so creating tuples of size greater than 3 is not recommended at\nthis time, unless you plan to use ",(0,l.kt)("inlineCode",{parentName:"li"},"match")," expressions to deconstruct the\nvalues."),(0,l.kt)("li",{parentName:"ul"},"Tuples are only available after opting in via Settings (see next section)"),(0,l.kt)("li",{parentName:"ul"},"More details on using tuples can be found in\n",(0,l.kt)("a",{parentName:"li",href:"/reference/languagedetails###Tuples"},"Language Details"),".")),(0,l.kt)("h2",{id:"major-feature-contributor-settings"},"Major feature: Contributor settings"),(0,l.kt)("p",null,"A new Contributor Settings page has been added, allowing devs to look under the\nhood and use the same tools that employees are using to develop Darklang."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"contributor settings and tuple demo",src:a(3286).Z,width:"1498",height:"1014"})),(0,l.kt)("p",null,"In particular, devs can now build a local version of the Darklang editor, and\nuse it against their production Darklang codebase\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4387"},"#4387"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4402"},"#4402"),")"),(0,l.kt)("p",null,"We have also made it possible to enable the in-Editor debugger (note: this is\nuseful for the debugging the Darklang editor, not for debugging Darklang\nprograms) (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4343"},"#4343"),")"),(0,l.kt)("p",null,"Finally, in-progress features can now be enabled for devs, starting with Tuples\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4429"},"#4429"),")"),(0,l.kt)("h2",{id:"language-improvements"},"Language improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow floats where the whole number part is empty\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4371"},"#4371"),")")),(0,l.kt)("h2",{id:"editor-improvements"},"Editor improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Allow pressing enter in more expression bodies\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4438"},"#4438"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed Undo functionality, which was briefly broken\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4392"},"#4392"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed display of Error rail, which was briefly broken\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4373"},"#4373"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Prevent Analysis errors due to using Tasks incorrectly\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4436"},"#4436"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Revamping settings UI, adding reusuable form components, animations, toggle\nswitches, and switching to TailwindCSS\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4375"},"#4375"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4401"},"#4401"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4420"},"#4420"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4426"},"#4426"),")"))),(0,l.kt)("h2",{id:"in-progress-features---httpclient-and-http-framework"},"In-progress features - ",(0,l.kt)("inlineCode",{parentName:"h2"},"HttpClient")," and HTTP framework"),(0,l.kt)("p",null,"The current ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient")," and HTTP framework are quite limited, only supporting\ntext request/response bodies, among many other problems. They also lack the\nflexibility to control and compose their behavior."),(0,l.kt)("p",null,"As part of rewriting the Static Assets feature in Dark itself\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues/4259"},"#4259"),'), we are creating\n"thinner", more flexible, and more composable HttpClient\n(',(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4366"},"#4366"),") and HTTP handlers\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/pull/4353"},"#4353"),")"),(0,l.kt)("h2",{id:"internal-improvements"},"Internal improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Huge refactor of client types\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4326"},"#4326"),")"),(0,l.kt)("li",{parentName:"ul"},"Remove OCamlTypes (used for interop with the old OCaml backend)\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4396"},"#4396"),",\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4398"},"#4398"),")"),(0,l.kt)("li",{parentName:"ul"},"Add internal function to load Ops for a TopLevel\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4391"},"#4391"),")"),(0,l.kt)("li",{parentName:"ul"},"Test file cleanups (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4412"},"#4412"),",\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/pull/4411"},"#4411"),")")))}k.isMDXComponent=!0},3286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/release-5-contrib-settings-1fbdfb8c4c95fcb87b66761cf7a6e9d3.gif"}}]);