"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3382],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},54735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Queues",sidebar_label:"Queues"},l=void 0,u={unversionedId:"discussion/queues",id:"discussion/queues",title:"Queues",description:"Darklang's built-in queues allow programs to be run in the background.",source:"@site/docs/discussion/queues.md",sourceDirName:"discussion",slug:"/discussion/queues",permalink:"/discussion/queues",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/discussion/queues.md",tags:[],version:"current",frontMatter:{title:"Queues",sidebar_label:"Queues"},sidebar:"docs",previous:{title:"When to use Darklang",permalink:"/discussion/when-dark"},next:{title:"Components",permalink:"/discussion/dark-backend-components"}},c={},d=[{value:"Running an event",id:"running-an-event",level:2},{value:"Success criteria",id:"success-criteria",level:3},{value:"Concurrency",id:"concurrency",level:3},{value:"Pausing",id:"pausing",level:2},{value:"Blocking",id:"blocking",level:3},{value:"Retries",id:"retries",level:2},{value:"Technical details",id:"technical-details",level:2}],p={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Darklang's built-in queues allow programs to be run in the background.\nDevelopers call ",(0,i.kt)("inlineCode",{parentName:"p"},"emit")," to add events into a named queue, which will be executed\nasynchronously by a handler of the same name."),(0,i.kt)("p",null,"Events are stored in a system-wide queue and run on separate worker machines,\nwhose capacity is shared with other users. We automatically scale these workers\nup, and you should expect your events to be run promptly."),(0,i.kt)("p",null,"Cron jobs are also run using the same infrastructure."),(0,i.kt)("h2",{id:"running-an-event"},"Running an event"),(0,i.kt)("p",null,"When a Worker handler runs, the event that was ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),"ed will be available as an\n",(0,i.kt)("inlineCode",{parentName:"p"},"event")," parameter available in the Worker."),(0,i.kt)("p",null,"When viewing a handler, you can see the number of items in the queue. When an\nevent is completed, a trace will be stored where you can view the execution."),(0,i.kt)("h3",{id:"success-criteria"},"Success criteria"),(0,i.kt)("p",null,"Events are considered successful if they run to completion, and will not be\nretried based on the result of the worker's expression, even if that value is a\nType error, ",(0,i.kt)("inlineCode",{parentName:"p"},"incomplete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),', or any other "negative value".'),(0,i.kt)("p",null,"If you wish to retry when there is an error of some sort, you should handle this\nexplicitly in your code, perhaps ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),"ing a new event."),(0,i.kt)("h3",{id:"concurrency"},"Concurrency"),(0,i.kt)("p",null,"Events are run as quickly as we can, you cannot be assured that an event will\nwait for a previous event to complete before running - in fact, it probably will\nnot."),(0,i.kt)("p",null,"Events are also not guaranteed to process in the order they are ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),"ed."),(0,i.kt)("h2",{id:"pausing"},"Pausing"),(0,i.kt)("p",null,"Handlers can be paused. When handlers are paused, they will continue to allow\nevents to be ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),"ed, but they will not run the event. When handlers are\nunpaused, all the events will start to run as soon as possible."),(0,i.kt)("h3",{id:"blocking"},"Blocking"),(0,i.kt)("p",null,"Darklang admins may ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," handlers that are causing operational issues. Queues\nthat are causing a operation issue (perhaps even just setting off an internal\nalarm) may be blocked while we investigate. When (and if) we rectify the issue,\nwe may unblock the problematic queue, which acts just like unpausing."),(0,i.kt)("h2",{id:"retries"},"Retries"),(0,i.kt)("p",null,"Events in the queue will be retried if something goes wrong in the\ninfrastructure. We will attempt to run an event until it succeeds, trying at\nmost 5 times for each event. This only happens with infrastructure issues, which\nyou do not have visibility into, so you cannot predict how many retries a event\nwill get."),(0,i.kt)("p",null,"The most common situation is if an event runs longer than 25 seconds, and runs\nwhile the Darklang infrastructure is being redeployed. In this case, some of the\ncode may be executed more than once - however much got completed on the first\ntry, and then however much got completed in the retry. While unlikely, events\nlike this could be retried more than once. The best way to avoid this is to have\nyour events complete more quickly."),(0,i.kt)("p",null,"Events which have no handler or where the canvas has been deleted will not be\nretried."),(0,i.kt)("h2",{id:"technical-details"},"Technical details"),(0,i.kt)("p",null,"You can read the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/blob/main/docs/eventsV2.md"},"technical detail and implementation of our queues"),"."))}h.isMDXComponent=!0}}]);