"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},c="Cron",u={unversionedId:"reference/framework/cron",id:"reference/framework/cron",title:"Cron",description:"Darklang supports scheduled jobs via a Cron component. Use a Cron when you want to",source:"@site/docs-classic/reference/framework/cron.md",sourceDirName:"reference/framework",slug:"/reference/framework/cron",permalink:"/reference/framework/cron",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/reference/framework/cron.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Workers",permalink:"/reference/framework/workers"},next:{title:"Sample Canvases",permalink:"/reference/sample-canvases"}},s={},p=[{value:"Cron Basics",id:"cron-basics",level:2},{value:"FAQ",id:"faq",level:2},{value:"Can I set the exact time my Cron will run?",id:"can-i-set-the-exact-time-my-cron-will-run",level:3},{value:"Can I pause a Cron to keep it from running?",id:"can-i-pause-a-cron-to-keep-it-from-running",level:3},{value:"Will a Cron ever be executed more than once in parallel?",id:"will-a-cron-ever-be-executed-more-than-once-in-parallel",level:3},{value:"Does the execution time of my Cron affect its scheduling?",id:"does-the-execution-time-of-my-cron-affect-its-scheduling",level:3},{value:"My <code>Every 1min</code> Cron is not running every minute. Help?",id:"my-every-1min-cron-is-not-running-every-minute-help",level:3},{value:"Future Improvements",id:"future-improvements",level:2}],m={toc:p};function d(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cron"},"Cron"),(0,a.kt)("p",null,"Darklang supports scheduled jobs via a Cron component. Use a Cron when you want to\nschedule something to occur on a timed interval."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cron Intervals",src:t(84961).Z,width:"522",height:"161"})),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2ffObUyM1jc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"cron-basics"},"Cron Basics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crons run automatically once per interval. (Note: due to the distributed\nnature of the Darklang platform, it's possible that a Cron may erroneously run\nmore than once per interval.)"),(0,a.kt)("li",{parentName:"ul"},"There is currently no guarantee when within an interval that the Cron will\nrun. Eg, A Cron created at ",(0,a.kt)("inlineCode",{parentName:"li"},"09:15")," and marked as ",(0,a.kt)("inlineCode",{parentName:"li"},"Every 1 hour")," will run\nroughly every hours, but there is no guarantee the next run will be at exactly\n",(0,a.kt)("inlineCode",{parentName:"li"},"10:15"),". We plan to eventually add more fine-grained scheduling."),(0,a.kt)("li",{parentName:"ul"},"The trace information on Cron will show the most recent 10 times the Cron has\nrun. A Cron never has input data, so the trace will always say\n",(0,a.kt)("inlineCode",{parentName:"li"},"No input parameters"),"."),(0,a.kt)("li",{parentName:"ul"},"To run a Cron on-demand, use the replay button the upper right. Running\non-demand does not affect the next scheduled runtime."),(0,a.kt)("li",{parentName:"ul"},"Crons will not alert you of failures unless you write logic to do so.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"can-i-set-the-exact-time-my-cron-will-run"},"Can I set the exact time my Cron will run?"),(0,a.kt)("p",null,"No, not currently. We plan to eventually support this."),(0,a.kt)("h3",{id:"can-i-pause-a-cron-to-keep-it-from-running"},"Can I pause a Cron to keep it from running?"),(0,a.kt)("p",null,"No, not currently. We plan to eventually support this."),(0,a.kt)("h3",{id:"will-a-cron-ever-be-executed-more-than-once-in-parallel"},"Will a Cron ever be executed more than once in parallel?"),(0,a.kt)("p",null,"Yes, if the cron takes longer to complete than its scheduling interval, multiple\nexecutions could overlap and be running in parallel. (See the next question\nalso.)"),(0,a.kt)("h3",{id:"does-the-execution-time-of-my-cron-affect-its-scheduling"},"Does the execution time of my Cron affect its scheduling?"),(0,a.kt)("p",null,"No. Scheduling happens independently from execution of the Cron's code. Even if\nexecution of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Every 1 min")," Cron takes 2 minutes to complete, the Cron will\nstill be scheduled every 1 minute."),(0,a.kt)("h3",{id:"my-every-1min-cron-is-not-running-every-minute-help"},"My ",(0,a.kt)("inlineCode",{parentName:"h3"},"Every 1min")," Cron is not running every minute. Help?"),(0,a.kt)("p",null,"Please let us know the canvas, Cron name, and approximate time of the problem\nand we can look into it."),(0,a.kt)("h2",{id:"future-improvements"},"Future Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Granular scheduling, allowing more complex and more precise scheduling (every\nother hour at 15 minutes past the hour)")))}d.isMDXComponent=!0},84961:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/intervals-4b9da0c92ab4b86f79fea1c9cdbfcb84.png"}}]);