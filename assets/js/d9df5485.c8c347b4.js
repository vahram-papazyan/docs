"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9656],{3905:(e,t,n)=>{n.d(t,{kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,g=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"Adding a language feature"},l=void 0,d={unversionedId:"contributing/adding-a-language-feature",id:"contributing/adding-a-language-feature",title:"Adding a language feature",description:"There are a number of",source:"@site/docs/contributing/adding-a-language-feature.md",sourceDirName:"contributing",slug:"/contributing/adding-a-language-feature",permalink:"/contributing/adding-a-language-feature",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/adding-a-language-feature.md",tags:[],version:"current",frontMatter:{title:"Adding a language feature"},sidebar:"Contributing",previous:{title:"Adding a built-in function",permalink:"/contributing/adding-a-function"},next:{title:"Adding a refactoring",permalink:"/contributing/adding-a-refactoring"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"Backend",id:"backend",level:2},{value:"Execution",id:"execution",level:3},{value:"Serialization",id:"serialization",level:3},{value:"Expressions are add-only",id:"expressions-are-add-only",level:4},{value:"Editor support",id:"editor-support",level:2},{value:"Fluid Editor",id:"fluid-editor",level:3},{value:"Adding tokens",id:"adding-tokens",level:4},{value:"AST transformations",id:"ast-transformations",level:3},{value:"Client/backend communication",id:"clientbackend-communication",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are a number of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues?q=is%3Aissue+is%3Aopen+label%3Alanguage-feature"},"language features that we'd like to add"),"\nto Dark. While there a quite a few steps involved in adding a language feature,\nthey're typically relatively straightforward to add once you've figured out the\nDark codebase."),(0,r.kt)("p",null,"It's important to note that the most important part of a language feature is\ngetting agreement on what it does. We typically write specs for features, and\nensure that we have resolved how edge cases should work, as well as ensuring it\nmeshes with the rest of the language and language definition. If you're\ninterested in creating a language feature, you should engage with Paul Biggar\nearly and often."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:\n",(0,r.kt)("a",{parentName:"em",href:"https://www.youtube.com/watch?v=HZk4yCF8DWQL"},"a pairing session where we added Tuples to the Dark client and backend"))),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Most language features will need to be added to our language definition. The\nlanguage definition is ",(0,r.kt)("inlineCode",{parentName:"p"},"Expr")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/ProgramTypes.fs"},"F#"),",\nor\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/client/src/core/ProgramTypes.res"},"ReScript"),',\nwhich represent a Dark expression (which in turn contains other Dark\nexpressions). This is commonly known as an "Abstract Syntax Tree" (or AST).'),(0,r.kt)("p",null,"At time of writing, the definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"Expr")," was"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"type Expr =\n  | EInteger of id * bigint\n  | EBool of id * bool\n  | EString of id * string\n  | ECharacter of id * string\n  // allow the user to have arbitrarily big numbers, even if they don't make sense as floats\n  | EFloat of id * Sign * bigint * bigint\n  | ENull of id\n  | EBlank of id\n  | ELet of id * string * Expr * Expr\n  | EIf of id * Expr * Expr * Expr\n  | EBinOp of id * FQFnName.T * Expr * Expr * SendToRail\n  | ELambda of id * List<id * string> * Expr\n  | EFieldAccess of id * Expr * string\n  | EVariable of id * string\n  | EFnCall of id * FQFnName.T * List<Expr> * SendToRail\n  | EPartial of id * string * Expr\n  | ERightPartial of id * string * Expr\n  | ELeftPartial of id * string * Expr\n  | EList of id * List<Expr>\n  | ERecord of id * List<string * Expr>\n  | EPipe of id * Expr * Expr * List<Expr>\n  | EConstructor of id * string * List<Expr>\n  | EMatch of id * Expr * List<Pattern * Expr>\n  | EPipeTarget of id\n  | EFeatureFlag of id * string * Expr * Expr * Expr\n")),(0,r.kt)("p",null,"The backend does the work of executing the expressions, and saving programs. The\nexecution engine is also compiled to Javascript in order to be available in the\nclient."),(0,r.kt)("p",null,'The client is responsible for editing programs. Typically, adding a language\nfeature means adding support for it to the many transformations that the client\ndoes, including refactorings, renamings, etc. It will also need support in the\n"Fluid" editor, which is where users actually type code.'),(0,r.kt)("h2",{id:"backend"},"Backend"),(0,r.kt)("h3",{id:"execution"},"Execution"),(0,r.kt)("p",null,"The execution of the language is defined in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/Interpreter.fs"},(0,r.kt)("inlineCode",{parentName:"a"},"fsharp-backend/src/LibExecution/Interpreter.fs:eval")),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," does the work of converting an expressions into a ",(0,r.kt)("inlineCode",{parentName:"p"},"dval")," -- a Dark value."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"DInt")," is the run-time value of an integer, while ",(0,r.kt)("inlineCode",{parentName:"p"},"EInteger")," is the\nexpression that represents an integer. ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," converts from an ",(0,r.kt)("inlineCode",{parentName:"p"},"EInteger")," that\nthe programmer added to their program, into a ",(0,r.kt)("inlineCode",{parentName:"p"},"DInt")," that can be operated on\n(added, subtracted, etc)."),(0,r.kt)("p",null,"As another example, an ",(0,r.kt)("inlineCode",{parentName:"p"},"ELet")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," statement in Dark. When you see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = 6\nx + 4\n")),(0,r.kt)("p",null,"you have an ",(0,r.kt)("inlineCode",{parentName:"p"},'ELet ("x", EInteger 6, EBinOp ("+", EVariable "x", EInteger 4))'),".\nWhen we execute this ",(0,r.kt)("inlineCode",{parentName:"p"},"ELet"),", we first execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),", creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"dval")," of\n",(0,r.kt)("inlineCode",{parentName:"p"},"DInt 6"),", which we then store as ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),' in a "symbol table". We then execute\n',(0,r.kt)("inlineCode",{parentName:"p"},"x + 4")," using the symbol table with our known value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x = 6"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dval"),"s are defined in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/RuntimeTypes.fs"},(0,r.kt)("inlineCode",{parentName:"a"},"fsharp-backend/src/LibExecution/RuntimeTypes.fs")),"\nand expressions are defined in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/client/src/libshared/FluidExpression.res"},(0,r.kt)("inlineCode",{parentName:"a"},"libshared/FluidExpression.res")),"."),(0,r.kt)("h3",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"The other main purpose of the backend is to save programs. Dark uses a fast\nbinary serialization format, derived directly from expressions. This means you\ndo not have to do anything special to allow users to save your new expression."),(0,r.kt)("h4",{id:"expressions-are-add-only"},"Expressions are add-only"),(0,r.kt)("p",null,"The automatic serialization has a caveat: the serializer has some rules to\nmaintain compatibility with existing Dark programs. You can add new expression\ntypes to it, but you can't change existing ones. This means that if you want to\nchange a language feature to make it more powerful, you need to instead add a\nnew version of it, rather than editing the current version."),(0,r.kt)("p",null,"We do have the ability to remove old formats, but it is a little challenging to\ncoordinate. Whenever we do this, it is always after the new replacement feature\nis live and stable, and then we go in and remove the old one."),(0,r.kt)("p",null,"These rules apply to anything using the serializers, which currently includes\nboth ",(0,r.kt)("inlineCode",{parentName:"p"},"expr"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"tipe"),"s."),(0,r.kt)("h2",{id:"editor-support"},"Editor support"),(0,r.kt)("p",null,"The editor is where the developer (a Dark user) actually creates code."),(0,r.kt)("h3",{id:"fluid-editor"},"Fluid Editor"),(0,r.kt)("p",null,'The "fluid" editor is the subpart of the client where users type code. It\nhandles keypresses and the AST transformations that they cause.'),(0,r.kt)("p",null,"For example: if you have the code (with the cursor denoted as ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let x = |6\nx + 4\n")),(0,r.kt)("p",null,"Pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," with your cursor here makes the editor look up the current\nexpression, and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to the front of it. Here that converts ",(0,r.kt)("inlineCode",{parentName:"p"},"6")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"16"),"."),(0,r.kt)("p",null,'Over time we intend to expand the Fluid Editor for all "coding" text entry.'),(0,r.kt)("h4",{id:"adding-tokens"},"Adding tokens"),(0,r.kt)("p",null,'The FluidEditor works as a sort of "reverse parser". Instead of reading text and\nfiguring out meaning, it instead takes the AST and pretty-prints it into a set\nof ',(0,r.kt)("inlineCode",{parentName:"p"},"FluidToken"),"s. These tokens are stringified, showing the user textual code."),(0,r.kt)("p",null,"The tokens also tied the current edit back to an expression. In the example\nabove, the cursor is at the start of a ",(0,r.kt)("inlineCode",{parentName:"p"},"TInteger")," token, which ties the current\nposition back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EInteger")," expression that defines it."),(0,r.kt)("p",null,"To add a language feature, you will often need to add new tokens. You will\noccasionally reuse some tokens, but most features use dedicated tokens so that\nthere's no ambiguity."),(0,r.kt)("p",null,"You add tokens in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/client/src/core/Types.res"},(0,r.kt)("inlineCode",{parentName:"a"},"client/src/core/Types.res")),"\nand keystrokes are handled in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/client/src/fluid/Fluid.res"},(0,r.kt)("inlineCode",{parentName:"a"},"client/src/fluid/Fluid.res:updateKey")),"."),(0,r.kt)("h3",{id:"ast-transformations"},"AST transformations"),(0,r.kt)("p",null,"Once you have added the expression and the tokens, you will need to support\nexisting features. Mostly, this means that existing AST transformations and\nrefactorings should continue to work. These are typically either explicit (via\nthe command palette) or implicit (by renaming a variable)."),(0,r.kt)("p",null,"You will be able to find almost everywhere that this is needed when you add the\ndefinition to ",(0,r.kt)("inlineCode",{parentName:"p"},"Expr"),". The compiler will warn you at every place that you have\nnot handled it."),(0,r.kt)("h2",{id:"clientbackend-communication"},"Client/backend communication"),(0,r.kt)("p",null,"The client sends ASTs to the backend to save and to run the programs in the\ncloud. The client also fetches expressions from the backend to display and edit\nthem. It does this over JSON."),(0,r.kt)("p",null,"The F# backend has automatic JSON serializers and deserializers, using automatic\nserializers of types in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api"},"Api"),".\nThe client has hand-written serializers in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/client/src/core/Encoders.res"},(0,r.kt)("inlineCode",{parentName:"a"},"client/src/core/Encoders.res")),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/client/src/core/Decoders.res"},(0,r.kt)("inlineCode",{parentName:"a"},"client/src/core/Decoders.res")),".\nThe OCaml compiler will prompt you to add new encoders, but not decoders.\nWriting new ones is straightforward by following other examples there."))}h.isMDXComponent=!0}}]);