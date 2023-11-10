"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Tutorial: Create a HTTP handler",sidebar_label:"Create a HTTP handler",id:"create-http-handler"},s=void 0,c={unversionedId:"tutorials/create-http-handler",id:"tutorials/create-http-handler",title:"Tutorial: Create a HTTP handler",description:"Let's start by using the editor to write an API endpoint that responds to a",source:"@site/docs-classic/tutorials/02-create-http-handler.md",sourceDirName:"tutorials",slug:"/tutorials/create-http-handler",permalink:"/tutorials/create-http-handler",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/tutorials/02-create-http-handler.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Tutorial: Create a HTTP handler",sidebar_label:"Create a HTTP handler",id:"create-http-handler"},sidebar:"docs",previous:{title:"Your first Darklang application",permalink:"/tutorials/first-dark-application"},next:{title:"Create a tool in a REPL",permalink:"/tutorials/create-tool-repl"}},p={},d=[],u={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's start by using the editor to write an API endpoint that responds to a\nbrowser HTTP request."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To create a new HTTP endpoint, we first bring up the omnibox, by clicking\nanywhere on the screen, pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"Cmd-k"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl-k"),", or pressing the plus next\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP")," on the sidebar.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.10.26_AM.png",src:n(41385).Z,width:"1894",height:"726"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enter the HTTP method ",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),", and the HTTP route ",(0,o.kt)("inlineCode",{parentName:"li"},"/math"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_9.11.23_AM.png",src:n(11104).Z,width:"1942",height:"744"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can now write any code in the blank ","\u2013"," this is the return value of\nthe API endpoint that you've just created. To start with, let's just return\n",(0,o.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_9.12.02_AM.png",src:n(45621).Z,width:"2018",height:"760"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Click the handler\'s menu (\u2630) in the upper right and select "open in new tab",\nto see your API endpoint running in production.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img/gettingstarted/Screen_Shot_2020-02-11_at_9.12.43_AM.png",src:n(18306).Z,width:"1360",height:"326"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Go back to Darklang to edit your code. Add ",(0,o.kt)("inlineCode",{parentName:"li"},"+ 5")," to the end of the code and\nleave your cursor in line.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.14.25_AM.png",src:n(3268).Z,width:"1182",height:"322"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"9")," below the handler shows you the return value for the handler.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," on the left shows you the result of the expression where the cursor\ncurrently is (in this case, 5). This isn't very useful when it's an integer,\nbut if it's a variable it will show you the result of the variable."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.16.06_AM.png",src:n(78106).Z,width:"896",height:"270"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Hover your mouse over the white dots on the left. Each dot is a "trace",\nrepresenting a single request to your handler. Traces are fundamental to\ncoding in Darklang, and we\'ll come back to them later.')),(0,o.kt)("p",null,"Congratulations! You've now created (and deployed) a HTTP endpoint on Darklang."))}h.isMDXComponent=!0},41385:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.10.26_AM-d9307639745ba56ddd56ce3638cd5a4e.png"},11104:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.11.23_AM-52a170256b0442e84200534340a34287.png"},45621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.12.02_AM-ffb4fbad637bef2cd449efce8582f5be.png"},18306:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.12.43_AM-1b0d3e237f2ddc78a714a4781f179490.png"},3268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.14.25_AM-39d55c2c61b61a7b7b8e489df64a02ee.png"},78106:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.16.06_AM-340c777ca7937f0baa98bc2907362ec8.png"}}]);