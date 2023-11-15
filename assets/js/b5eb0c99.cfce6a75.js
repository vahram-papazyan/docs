"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2249],{74209:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(85893),a=n(11151);const l={id:"static-assets",title:"How to host Static Assets on Darklang",sidebar_label:"How to host Static Assets"},i=void 0,o={id:"how-to/static-assets",title:"How to host Static Assets on Darklang",description:"Darklang supports hosting your static assets.",source:"@site/docs-classic/how-to/static-assets.md",sourceDirName:"how-to",slug:"/how-to/static-assets",permalink:"/how-to/static-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs-classic/how-to/static-assets.md",tags:[],version:"current",frontMatter:{id:"static-assets",title:"How to host Static Assets on Darklang",sidebar_label:"How to host Static Assets"},sidebar:"docs",previous:{title:"How-to Guides",permalink:"/category/how-to"},next:{title:"How to set up a custom domain",permalink:"/how-to/custom-domains"}},r={},c=[{value:"Simple Use Case",id:"simple-use-case",level:2},{value:"Deploying Assets",id:"deploying-assets",level:2},{value:"Installation",id:"installation",level:3},{value:"Configure your client",id:"configure-your-client",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Set up your App to Load your Assets",id:"set-up-your-app-to-load-your-assets",level:2},{value:"Implementing a Fallback in the Case of a 404",id:"implementing-a-fallback-in-the-case-of-a-404",level:2},{value:"Advanced: Feature Flags and Continuous Delivery",id:"advanced-feature-flags-and-continuous-delivery",level:2},{value:"Reference",id:"reference",level:2},{value:"Functions",id:"functions",level:3},{value:"Command line reference",id:"command-line-reference",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Darklang supports hosting your static assets."}),"\n",(0,t.jsx)(s.p,{children:"Our static assets service is designed to be simple, easy to understand, as well\nas composable and configurable. As such, a static assets deploy uploads your\nassets to our cloud CDN, and we provide powerful tools in Darklang to serve and\nconfigure them."}),"\n",(0,t.jsxs)(s.p,{children:["A\n",(0,t.jsx)(s.a,{href:"https://github.com/marketplace/actions/upload-static-assets-to-dark-canvas",children:"GitHub Action"}),"\nto automate this process is now available thanks to one of our fantastic\ncommunity members, Greg Brimble!"]}),"\n",(0,t.jsx)(s.h2,{id:"simple-use-case",children:"Simple Use Case"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Note: You can see the finished product at\n",(0,t.jsx)(s.a,{href:"https://darklang.com/a/sample-static-assets",children:"https://darklang.com/a/sample-static-assets"})]})}),"\n",(0,t.jsx)(s.p,{children:"We have a single page app, written in react. It talks to our API, written in\nDarklang. Now we\u2019d like to deploy that app so that customers can use it too.\nThis also works in a similar way for Vue applications, with a few caveats called\nout in line."}),"\n",(0,t.jsx)(s.p,{children:"Here\u2019s how we want our app to work:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["we have an API, served from ",(0,t.jsx)(s.code,{children:"/api/"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/"})," serves our ",(0,t.jsx)(s.code,{children:"index.html"})," page from our assets"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"index.html"})," should point to our static assets host to fetch other assets"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"We\u2019ll focus on the last two things we want our app to do in this document."})}),"\n",(0,t.jsx)(s.p,{children:"At a high level, here are the steps:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"deploy the assets using the dark-cli app"}),"\n",(0,t.jsx)(s.li,{children:"load the index page"}),"\n",(0,t.jsx)(s.li,{children:"configure your react app"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"deploying-assets",children:"Deploying Assets"}),"\n",(0,t.jsx)(s.p,{children:"We have a command-line app to allow you to deploy your assets."}),"\n",(0,t.jsx)(s.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to\n",(0,t.jsx)(s.a,{href:"https://dark-cli.storage.googleapis.com/index.html",children:"https://dark-cli.storage.googleapis.com/index.html"}),",\nand download the appropriate binary for macOS, Windows, or Linux."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"On macOS or Linux,"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"chmod +x dark-cli-apple\n"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"chmod +x dark-cli-linux\n"})}),"\n",(0,t.jsx)(s.p,{children:"to make it executable."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To confirm it works, run it with ",(0,t.jsx)(s.code,{children:"-\u2014help"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"macOS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"./dark-cli-apple --help\n"})}),"\n",(0,t.jsx)(s.p,{children:"Linux:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"./dark-cli-linux --help\n"})}),"\n",(0,t.jsx)(s.p,{children:"Windows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"./dark-cli.exe --help\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"On some versions of macOS, you may get one of the the following popups:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Not downloaded from the app store popup",src:n(80943).Z+"",width:"842",height:"394"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Developer cannot be verified popup",src:n(7457).Z+"",width:"850",height:"402"})}),"\n",(0,t.jsxs)(s.p,{children:["to resolve this, press ",(0,t.jsx)(s.code,{children:"Ok"})," or ",(0,t.jsx)(s.code,{children:"Cancel"})," and open\n",(0,t.jsx)(s.code,{children:"System Preferences -> Security & Privacy -> General"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"System Preferences -&gt; Security &amp; Privacy -&gt; General -&gt; Allow Anyway",src:n(49145).Z+"",width:"1328",height:"1140"})}),"\n",(0,t.jsxs)(s.p,{children:["Press ",(0,t.jsx)(s.code,{children:"Allow Anyway"})," and repeat step 3."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"configure-your-client",children:"Configure your client"}),"\n",(0,t.jsxs)(s.p,{children:["At the moment, our CDN does not support the use of absolute URLs in the\ngenerated files. For example, if your CSS file links an image at\n",(0,t.jsx)(s.code,{children:"/static/myimage.png"}),", that file will not load. You need to use relative URLs\ninstead, in this case ",(0,t.jsx)(s.code,{children:"./myimage.png"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Your ",(0,t.jsx)(s.code,{children:"index.html"})," likely loads other assets, such as ",(0,t.jsx)(s.code,{children:"app.css"})," or ",(0,t.jsx)(s.code,{children:"app.js"}),". For\nspeed, you will load these directly from the Darklang CDN, not via your Darklang\nhandler. As such, we\u2019ll need to make some edits to your assets to ensure they\u2019re\nalways pointing at the CDN for other assets."]}),"\n",(0,t.jsxs)(s.p,{children:["During the deployment of the assets, our backend replaces the string\n",(0,t.jsx)(s.code,{children:"DARK_STATIC_ASSETS_BASE_URL"})," in all of your assets with the actual URL of this\ndeployment."]}),"\n",(0,t.jsx)(s.p,{children:"When not using a framework, prefix asset paths with Darklang's magic string, for\nexample:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<img src="DARK_STATIC_ASSETS_BASE_URL/logo.svg" />\n'})}),"\n",(0,t.jsxs)(s.p,{children:["In React, when compiling your react application, you can use ",(0,t.jsx)(s.code,{children:"PUBLIC_URL"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"PUBLIC_URL=DARK_STATIC_ASSETS_BASE_URL npm run build\n"})}),"\n",(0,t.jsx)(s.p,{children:"If using Angular, you can run the following command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ng build --prod --deploy-url DARK_STATIC_ASSETS_BASE_URL/\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If using Vue, you likely want to set ",(0,t.jsx)(s.code,{children:"PUBLIC_PATH"})," instead:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"PUBLIC_PATH=DARK_STATIC_ASSETS_BASE_URL\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Additionally, Vue assumes relative paths. If you are having an issue with your\nassets, check to make sure that ",(0,t.jsx)(s.code,{children:"index.html"})," has not added leading path notation\n(",(0,t.jsx)(s.code,{children:"/PUBLIC_PATH"}),"). If it has, you can manually remove and redeploy. More on using\nthis for Vue here:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/vuejs/vue-cli/tree/dev/docs/config#publicpath",children:"vuejs/vue-cli"})}),"\n",(0,t.jsx)(s.h3,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To deploy, select the directory you want to upload. In this case, we\u2019ll use\nReact\u2019s default directory ",(0,t.jsx)(s.code,{children:"build"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Run:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:" # The single quotes - around mypass help protect against shell escaping and interpolation.\n # If your password contains a single quote or a backslash don't forget to escape it with a \\\n./dark-cli-apple --canvas myusername-mycanvas --password 'mypass' --user myusername build\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["(If you want to avoid shell escaping issues entirely, we also support putting\nyour creds in ",(0,t.jsx)(s.code,{children:"~/.netrc"}),"; the format for that is documented at\n",(0,t.jsx)(s.a,{href:"https://ec.haxx.se/usingcurl/usingcurl-netrc",children:"https://ec.haxx.se/usingcurl/usingcurl-netrc"}),"\nfor machine ",(0,t.jsx)(s.code,{children:"darklang.com"}),")."]}),"\n",(0,t.jsx)(s.p,{children:"On success, we\u2019ll show you the deploy hash, a URL, and a long URL. These are\nwhere your static assets now live! You can see your static assets in the Routing\ntable in your canvas:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ticassets/image1.png",src:n(46898).Z+"",width:"405",height:"113"})}),"\n",(0,t.jsx)(s.h2,{id:"set-up-your-app-to-load-your-assets",children:"Set up your App to Load your Assets"}),"\n",(0,t.jsxs)(s.p,{children:["If your SPA framework generates an ",(0,t.jsx)(s.code,{children:"index.html"}),", or you write one yourself, you\ncan load that for the ",(0,t.jsx)(s.code,{children:"/"})," route in Darklang."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a handler for ",(0,t.jsx)(s.code,{children:"/"})," to load your ",(0,t.jsx)(s.code,{children:"index.html"})," page using\n",(0,t.jsx)(s.code,{children:'StaticAssets::serveLatest "index.html"'}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["If you\u2019re using client-side routing, you can also add a handler serving\n",(0,t.jsx)(s.code,{children:"index.html"})," for ",(0,t.jsx)(s.code,{children:"/:rest"})," which will be a catch-all handler for any URL\n(besides ",(0,t.jsx)(s.code,{children:"/"}),") that doesn\u2019t have another handler defined for it. This will\nallow your users to load your assets from any of your app\u2019s URLs."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You can copy and paste this example from\n",(0,t.jsx)(s.a,{href:"https://darklang.com/a/sample-static-assets",children:"https://darklang.com/a/sample-static-assets"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"implementing-a-fallback-in-the-case-of-a-404",children:"Implementing a Fallback in the Case of a 404"}),"\n",(0,t.jsx)(s.p,{children:"If you\u2019re looking to serve a fallback asset, you can use a match statement:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ticassets/image2.png",src:n(83217).Z+"",width:"928",height:"244"})}),"\n",(0,t.jsx)(s.h2,{id:"advanced-feature-flags-and-continuous-delivery",children:"Advanced: Feature Flags and Continuous Delivery"}),"\n",(0,t.jsx)(s.p,{children:"We\u2019ve shown you how to deploy new assets that appear immediately. However, you\noften want to control the rollout of those assets, perhaps seeing them yourself,\nor only showing them to users who have opted into beta features. As a result, it\nis easy to use Darklang Static Assets with feature flags."}),"\n",(0,t.jsxs)(s.p,{children:["Instead of calling ",(0,t.jsx)(s.code,{children:"HttpClient::serveLatest"}),", you can call ",(0,t.jsx)(s.code,{children:"HttpClient::serve"}),",\nand use the deploy hash from your command line."]}),"\n",(0,t.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"urlFor <deployHash : String> <file : String> -> String"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Returns a URL to a file for the current canvas and the given ",(0,t.jsx)(s.code,{children:"deployHash"}),":"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'StaticAssets::urlFor "o6vs1aqcbx" "foo.html"'})," ->\n",(0,t.jsx)(s.code,{children:'"https://ismith-staticassets.darksa.com/stgbcg3kez_zb9-wlbtgta563t8/o6vs1aqcbx/foo.html"'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"urlForLatest <file : String> -> String"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Returns a URL to a file for the current canvas and the latest deploy:"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'StaticAssets::urlForLatest "foo.html"'})," ->\n",(0,t.jsx)(s.code,{children:'"https://ismith-staticassets.darksa.com/stgbcg3kez_zb9-wlbtgta563t8/o6vs1aqcbx/foo.html"'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"fetch <deployHash : String> <file : String> -> String"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Returns the contents of a file for the current canvas and the given\n",(0,t.jsx)(s.code,{children:"deployHash"}),":"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'StaticAssets::fetch "o6vs1aqcbx" "foo.html"'})," ->\n",(0,t.jsx)(s.code,{children:'"<html><body>Hello, world!</body></html>"'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"fetchLatest <file : String> -> String"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Returns a URL to a file for the current canvas and the latest deploy:"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'StaticAssets::fetchLatest "foo.html"'})," ->\n",(0,t.jsx)(s.code,{children:'"<html><body>Hello, world!</body></html>"'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"serve <deployHash : String> <file : String> -> String"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Returns the contents of a file for the current canvas and the given\n",(0,t.jsx)(s.code,{children:"deployHash"}),":"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'StaticAssets::serve "o6vs1aqcbx" "foo.html"'})," -> responds with the file\n",(0,t.jsx)(s.code,{children:"foo.html"})," and the headers that the static assets CDN provided"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"serveLatest <file : String> -> String"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Returns a URL to a file for the current canvas and the latest deploy:"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'StaticAssets::serveLatest "foo.html"'})," -> responds with the file ",(0,t.jsx)(s.code,{children:"foo.html"}),"\nand the headers that the static assets CDN provided"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"command-line-reference",children:"Command line reference"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"./dark-cli-apple\nerror: The following required arguments were not provided:\n  <paths>\n  --canvas <canvas>\n  --password <password>\n  --user <user>\n\nUSAGE:\ndark-cli-apple [FLAGS] <paths> --canvas <canvas> --password <password> --user <user>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},46898:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/image1-e708b4d9886a41df524a6461418504ec.png"},83217:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/image2-ebd1ec60f75253503cdfe34b84f07fb4.png"},49145:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/macos-allow-f2da8f4cd07ce38b10610a76c7252db0.png"},80943:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/macos-popup1-ba4ccd3405f2bdb18c30a6946442d4f5.png"},7457:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/macos-popup2-af313e1a00f130745cda7bf4262e33f8.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var t=n(67294);const a={},l=t.createContext(a);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);