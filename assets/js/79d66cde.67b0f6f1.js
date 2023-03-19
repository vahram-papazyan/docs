"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6564],{3905:(e,t,n)=>{n.d(t,{kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"General concepts"},l=void 0,d={unversionedId:"contributing/general-concepts",id:"contributing/general-concepts",title:"General concepts",description:"Editor vs Production (how code runs)",source:"@site/docs/contributing/general-concepts.md",sourceDirName:"contributing",slug:"/contributing/general-concepts",permalink:"/contributing/general-concepts",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/general-concepts.md",tags:[],version:"current",frontMatter:{title:"General concepts"},sidebar:"Contributing",previous:{title:"ReScript and F# for Dark developers",permalink:"/contributing/rescript-and-fsharp-for-dark-developers"},next:{title:"A tour of the Backend",permalink:"/contributing/tour-of-backend"}},p={},c=[{value:"Editor vs Production (how code runs)",id:"editor-vs-production-how-code-runs",level:2},{value:"Traces &amp; Live values",id:"traces--live-values",level:2},{value:"Toplevels",id:"toplevels",level:2},{value:"The path of an edit",id:"the-path-of-an-edit",level:2},{value:"Sending the change to the server",id:"sending-the-change-to-the-server",level:3},{value:"ASTs",id:"asts",level:2}],h={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"editor-vs-production-how-code-runs"},"Editor vs Production (how code runs)"),(0,a.kt)("p",null,"Code runs in two places in Dark: in the Editor, and in Production. In\nproduction, we have a Kubernetes cluster of interpreters with HTTP servers which\nare connected to a database, connected to the internet via Google Cloud\ninfrastructure, that run Dark programs."),(0,a.kt)("p",null,'When requests are made in production we save their inputs and intermediate\nvalues (combined, these form a "trace", discussed below). Those are sent to the\nclient.'),(0,a.kt)("p",null,"The Dark interpreter is also compiled to WebAssembly and is available in the\nbrowser in the client. The traces are sent to the WASM-compiled interpreter,\nwhich uses their results to fill in for functions which can't be run on the\nclient (such as DB functions)."),(0,a.kt)("h2",{id:"traces--live-values"},"Traces & Live values"),(0,a.kt)("p",null,"When a request is made to a production server, the inputs (typically a HTTP\nrequest) are saved. We also save intermediate results of functions which are\ncalled during the request. Together, these comprise a trace. Traces are shown in\nthe editor and users can choose between them."),(0,a.kt)("h2",{id:"toplevels"},"Toplevels"),(0,a.kt)("p",null,'"Toplevel" is the generic name for a part of a Dark program, either a handler\n(whether a HTTP handler, a Cron or a worker), a function, a type, or a database.'),(0,a.kt)("p",null,"Structural toplevels are toplevels which are part of the structure of your\nprogram: handlers and DBs. These live on the canvas."),(0,a.kt)("p",null,'Other toplevels are non-structural, and they don\'t live on the canvas or really\nanywhere. We have started to affectionately refer to the display for these as\nthe "function space". (There is a design for what should happen here, but we\nhave not done it yet).'),(0,a.kt)("h2",{id:"the-path-of-an-edit"},"The path of an edit"),(0,a.kt)("p",null,'Most characters that you type are immediately saved in our production database\n(in, according to our claim, 50ms). Edits are either made to program code, which\nis part of the "Fluid" editing system, or to handlers, databases, function\nparameters, or similar metadata, which is part of the "Forms" editing system\n(originally, all edits were of the "forms" variety - the name was added post-hoc\nto differentiate it from "fluid").'),(0,a.kt)("p",null,"For Fluid, this is the journey:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the event processed by ",(0,a.kt)("inlineCode",{parentName:"li"},"FluidKeyboard.res"),", creating a ",(0,a.kt)("inlineCode",{parentName:"li"},"FluidMsg")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Fluid.res")," recognized the ",(0,a.kt)("inlineCode",{parentName:"li"},"FluidMsg"),", calling ",(0,a.kt)("inlineCode",{parentName:"li"},"updateKey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateKey"),' looks at the current caret position, and at the "tokens" before\nand after the caret, to figure out what\'s happening'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateKey")," makes a transformation based on whatever it decided"),(0,a.kt)("li",{parentName:"ul"},"the AST for that code is transformed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FluidAutocomplete")," may be regenerated, if necessary"),(0,a.kt)("li",{parentName:"ul"},'the browser\'s animation event fires, causing a re-render. The AST is\n"tokenized", essentially pretty-printing it as HTML, which then renders'),(0,a.kt)("li",{parentName:"ul"},"an API call is made to send the change to the server (detailed below)")),(0,a.kt)("p",null,"For forms, the journey is similar:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the event is processed by ",(0,a.kt)("inlineCode",{parentName:"li"},"KeyPress.res")),(0,a.kt)("li",{parentName:"ul"},"the contents of ",(0,a.kt)("inlineCode",{parentName:"li"},"m.complete.value")," are updated (this is where the value in the\nforms box is stored)"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"Autocomplete")," values are regenerated"),(0,a.kt)("li",{parentName:"ul"},"after pressing enter, or clicking away, the change is made"),(0,a.kt)("li",{parentName:"ul"},"an API call is made to send the change to the server (detailed below)")),(0,a.kt)("h3",{id:"sending-the-change-to-the-server"},"Sending the change to the server"),(0,a.kt)("p",null,"When a change is made, typically an ",(0,a.kt)("inlineCode",{parentName:"p"},"AddOp")," ",(0,a.kt)("inlineCode",{parentName:"p"},"modification")," is made. That\n",(0,a.kt)("inlineCode",{parentName:"p"},"modification")," is returned by many of the functions that edit programs, and it's\nprocessed in ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.res"),". This passes into ",(0,a.kt)("inlineCode",{parentName:"p"},"API.res"),", where it serializes the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Op")," change into a JSON via encoders (see ",(0,a.kt)("inlineCode",{parentName:"p"},"Enconders.res")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Decoders.res"),")."),(0,a.kt)("p",null,"The change is accepted by ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiServer.fs")," in the backend, where it is decoded,\napplied to the program, and then saved into the database. Saving the program\ninvolves a special binary serialization format, in ",(0,a.kt)("inlineCode",{parentName:"p"},"BinarySerialization.fs"),"."),(0,a.kt)("p",null,"After being saved, it is sent to Pusher.com, the websockets vendor we use. This\nis sent to other clients which then update their programs. It is also sent to\nthe original editor, who ignores it."),(0,a.kt)("h2",{id:"asts"},"ASTs"),(0,a.kt)("p",null,'An "AST" is an "Abstract syntax tree". The simple explanation is that it\'s a set\nof "classes" and "objects" representing programs. (Abstract syntax tree means\nthe programs representation (the "syntax tree") without the annoying syntactic\ndetails like commas and semi-colons (hence "abstract")).'),(0,a.kt)("p",null,"In Dark, it's defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"FluidExpression.res"),", and at time of writing looks\nlike this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"type sendToRail =\n  | Rail\n  | NoRail\n\ntype expr  =\n  | EInteger of id * string\n  | EBool of id * bool\n  | EString of id * string\n  | EFloat of id * string * string\n  | ENull of id\n  | EBlank of id\n  | ELet of id * string * expr * expr\n  | EIf of id * expr * expr * expr\n  | EBinOp of id * string * expr * expr * sendToRail\n  | ELambda of id * (id * string) list * expr\n  | EFieldAccess of id * expr * string\n  | EVariable of id * string\n  | EFnCall of id * string * expr list * sendToRail\n\n  | EPartial of id * string * expr\n  | ERightPartial of id * string * expr\n  | ELeftPartial of id * string * expr\n  | EList of id * expr list\n  | ERecord of id * (string * expr) list\n  | EPipe of id * expr list\n  | EConstructor of id * string * expr list\n  | EMatch of id * expr * (matchPattern * expr) list\n  | EPipeTarget of id\n  | EFeatureFlag of id * string * expr * expr * expr\n  | ETuple of id * expr * expr * expr list\n\ntype matchPattern =\n  | MPNull of id * id\n  | MPBlank of id * id\n  | MPBool of id * id * bool\n  | MPVariable of id * id * string\n  | MPInteger of id * id * string\n  | MPFloat of id * id * string * string\n  | MPString of id * id * string\n  | MPConstructor of id * id * string * matchPattern list\n  | MPTuple of id * id * matchPattern * matchPattern * matchPattern list\n")),(0,a.kt)("p",null,"These definitions are in ReScript (we have a\n",(0,a.kt)("a",{parentName:"p",href:"rescript-and-fsharp-for-dark-developers"},"guide to ReScript for Dark developers"),").\nBriefly, this means that an ",(0,a.kt)("inlineCode",{parentName:"p"},"expr")," is an integer (which is made up of an id and\na string) or a bool (made up of an id and a string), or a ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," (which is an\nid, an expression to match on, and a list of patterns and expressions), etc"),(0,a.kt)("p",null,"This definition is slightly simplified, but it's close. There's definitions for\nliterals like ints and strings, for definitions like ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"s, for function calls\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"EBinOp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EFnCall"),", and also for various editor-specific intermediate\nstates like ",(0,a.kt)("inlineCode",{parentName:"p"},"EPartial")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ERightPartial"),"."),(0,a.kt)("p",null,"Each expression has an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," that is used to uniquely refer to the expression.\nThis is used when editing programs, and to relate live values from the analysis\nengine to the display in the editor. If an ID is duplicated by accident, the\neditor will act weirdly, but the program will work fine."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FluidMatchPattern.res")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FluidExpression.res")," also contain functions for\nchanging match patterns and expressions easily, either by changing the by ID or\nby traversing across the entire structure. Traversing the structure is generally\npretty fast."))}u.isMDXComponent=!0}}]);