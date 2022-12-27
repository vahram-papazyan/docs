"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8668],{3905:(e,t,n)=>{n.d(t,{kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,m=d["".concat(u,".").concat(c)]||d[c]||g[c]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Debugging"},u=void 0,p={unversionedId:"contributing/debugging",id:"contributing/debugging",title:"Debugging",description:"Log statements",source:"@site/docs/contributing/debugging.md",sourceDirName:"contributing",slug:"/contributing/debugging",permalink:"/contributing/debugging",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/debugging.md",tags:[],version:"current",frontMatter:{title:"Debugging"},sidebar:"Contributing",previous:{title:"Glossary",permalink:"/contributing/glossary"},next:{title:"Troubleshooting",permalink:"/contributing/troubleshooting"}},g={},s=[{value:"Log statements",id:"log-statements",level:2},{value:"Client",id:"client",level:3},{value:"Backend",id:"backend",level:3},{value:"Fuzzer",id:"fuzzer",level:2},{value:"Contributor Editor Debugging Tools",id:"contributor-editor-debugging-tools",level:2}],d={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"log-statements"},"Log statements"),(0,o.kt)("p",null,"Both the frontend and backend have simple log statements used during local\ndevelopment, which return ",(0,o.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,o.kt)("h3",{id:"client"},"Client"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),", you may log with either of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'Js.log2("my message", anyValue)')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'Debug.loG("my message", anyValue)'))),(0,o.kt)("p",null,"Both of these print in the browser console, with ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug.loG")," being more\nflexible."),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," you may log with ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"printMetadata"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," takes a\nsingle ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," argument while ",(0,o.kt)("inlineCode",{parentName:"p"},"printMetadata")," allows you to pass in an\nadditional ",(0,o.kt)("inlineCode",{parentName:"p"},"List<string * obj>")," of metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-fsharp"},'print "Starting ApiServer"\nprintMetadata "Starting ApiServer" [("timestamp", DateTimeOffset.Now)]\n')),(0,o.kt)("p",null,"The logs may be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"rundir/logs"),", in a file corresponding to the\nexecutable that is logging. For example, ApiServer will log to\n",(0,o.kt)("inlineCode",{parentName:"p"},"rundir/logs/apiserver.log")),(0,o.kt)("h2",{id:"fuzzer"},"Fuzzer"),(0,o.kt)("h2",{id:"contributor-editor-debugging-tools"},"Contributor Editor Debugging Tools"),(0,o.kt)("p",null,"There are some tools built into the Editor to help with debugging. These include\na Fluid debugger and the ability to view the AST of your handlers' code. You may\nturn these on by going to the Contributing tab of the Settings menu within the\nEditor."))}c.isMDXComponent=!0}}]);