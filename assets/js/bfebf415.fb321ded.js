"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1599],{1001:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(85893),a=s(11151);const o={id:"write-tests",title:"How to Write Tests in Darklang",sidebar_label:"How to write tests"},i=void 0,r={id:"how-to/write-tests",title:"How to Write Tests in Darklang",description:"At the moment, Darklang does not provide an out of the box testing framework.",source:"@site/docs-classic/how-to/write-tests.md",sourceDirName:"how-to",slug:"/how-to/write-tests",permalink:"/how-to/write-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/how-to/write-tests.md",tags:[],version:"current",frontMatter:{id:"write-tests",title:"How to Write Tests in Darklang",sidebar_label:"How to write tests"},sidebar:"docs",previous:{title:"How to use Feature Flags",permalink:"/how-to/feature-flags"},next:{title:"Discussion",permalink:"/category/discussion"}},c={},l=[];function h(e){const t={img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"At the moment, Darklang does not provide an out of the box testing framework.\nHowever, it's fairly straightforward to write tests using REPLs and Crons."}),"\n",(0,n.jsx)(t.p,{children:"Let's take a simple example: a character creation process where the creator\nenters the name of their character and allocates 15 skill points into three\npossible skills. There are a few constraints:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The name of the character must be more than 2 characters"}),"\n",(0,n.jsx)(t.li,{children:"All 15 skill points must be used, no more and no less."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"writing-tests/function.png",src:s(28519).Z+"",width:"746",height:"1242"})}),"\n",(0,n.jsx)(t.p,{children:"Let's say we want to write tests to make sure the proper messages are being\nprinted out. All we need to do is create a REPL and call functions that hit all\nof these cases:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"writing-tests/tests.png",src:s(64157).Z+"",width:"2538",height:"408"})}),"\n",(0,n.jsx)(t.p,{children:"Now, at a glance, we can see that the messages being printed out look the way we\nexpect them to."}),"\n",(0,n.jsx)(t.p,{children:"We can even get fancy, and write logic to check that the printed messages say\nexactly what we want them to without having to read every message. In this\nexample, a portion of the message that gets printed when the name is not long\nenough has been accidentally deleted, so a warning is displayed."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"writing-tests/namecheck.png",src:s(23131).Z+"",width:"1238",height:"1188"})}),"\n",(0,n.jsx)(t.p,{children:"In the examples above, the tests would need to be run by running the REPL\nmanually. However, the same logic can be written in a cron to make sure the\ntests run at whatever interval you'd prefer."}),"\n",(0,n.jsx)(t.p,{children:"If you're worried about missing a failing test, you can always set up alerts to\nlet you know. This is an example of a cron that runs once an hour and posts a\nmessage to Slack if an incorrect message is found:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"writing-tests/slack.png",src:s(42908).Z+"",width:"1252",height:"1192"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28519:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/function-0693187a6d94d20d9074482cede2e5d2.png"},23131:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/namecheck-a8c255053f3b784b5519bc5a66775684.png"},42908:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/slack-bc2f9a4b4c0f974eeff87d3d81e3ceb9.png"},64157:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/tests-a0752a5eb771c6ed29a1997238462fec.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var n=s(67294);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);