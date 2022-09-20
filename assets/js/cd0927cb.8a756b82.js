"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8240],{3905:(e,t,a)=>{a.d(t,{kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=d(a),g=i,h=k["".concat(o,".").concat(g)]||k[g]||c[g]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},44595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],s={},o="Packages",d={unversionedId:"reference/packages",id:"reference/packages",title:"Packages",description:"Overview",source:"@site/docs/reference/packages.md",sourceDirName:"reference",slug:"/reference/packages",permalink:"/reference/packages",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/reference/packages.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Built-in Function reference",permalink:"/reference/function-reference"},next:{title:"HTTP Client",permalink:"/reference/httpclient"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Slack",id:"slack",level:2},{value:"<code>getAllConversations</code>",id:"getallconversations",level:3},{value:"<code>getConversations</code>",id:"getconversations",level:3},{value:"<code>getConversationsWithDetails</code>",id:"getconversationswithdetails",level:3},{value:"<code>getNewConversations</code>",id:"getnewconversations",level:3},{value:"<code>getPrivateConversations</code>",id:"getprivateconversations",level:3},{value:"<code>oauth</code>",id:"oauth",level:3},{value:"<code>postMarkdownMessage</code>",id:"postmarkdownmessage",level:3},{value:"<code>postMessage</code>",id:"postmessage",level:3},{value:"<code>scheduleMessage</code>",id:"schedulemessage",level:3},{value:"Asana Package",id:"asana-package",level:2},{value:"<code>createProject</code>",id:"createproject",level:3},{value:"<code>createTask</code>",id:"createtask",level:3},{value:"<code>createTaskWithDueDate</code>",id:"createtaskwithduedate",level:3},{value:"<code>getAllProjects</code>",id:"getallprojects",level:3},{value:"<code>getAllWorkspaces</code>",id:"getallworkspaces",level:3},{value:"Mailchimp Package",id:"mailchimp-package",level:2},{value:"<code>subscribe</code>",id:"subscribe",level:3},{value:"Stripe Package",id:"stripe-package",level:2},{value:"<code>createCharge</code>",id:"createcharge",level:3},{value:"<code>createCheckoutSession</code>",id:"createcheckoutsession",level:3},{value:"<code>createCustomer</code>",id:"createcustomer",level:3},{value:"<code>createFullRefund</code>",id:"createfullrefund",level:3},{value:"<code>createPartialRefund</code>",id:"createpartialrefund",level:3},{value:"<code>getAllCharges</code>",id:"getallcharges",level:3},{value:"<code>getAllCustomers</code>",id:"getallcustomers",level:3},{value:"<code>getAllTransactions</code>",id:"getalltransactions",level:3},{value:"<code>getAvailableBalance</code>",id:"getavailablebalance",level:3},{value:"<code>getCustomer</code>",id:"getcustomer",level:3},{value:"<code>getPendingBalance</code>",id:"getpendingbalance",level:3},{value:"Trello Package",id:"trello-package",level:2},{value:"<code>addBoardstoDB</code>",id:"addboardstodb",level:3},{value:"<code>addListstoDB</code>",id:"addliststodb",level:3},{value:"<code>createNewCard</code>",id:"createnewcard",level:3},{value:"<code>getAllBoardsWithDetails</code>",id:"getallboardswithdetails",level:3},{value:"<code>getAllListsWithDetails</code>",id:"getalllistswithdetails",level:3},{value:"<code>getAllOpenCardsForMemberWithDetails</code>",id:"getallopencardsformemberwithdetails",level:3},{value:"<code>lookUpBoardID</code>",id:"lookupboardid",level:3},{value:"<code>lookUpListID</code>",id:"lookuplistid",level:3},{value:"Contributions",id:"contributions",level:2}],k={toc:p};function g(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packages"},"Packages"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Dark's alpha package manager allows re-using Dark functions from other users or\ncanvases. Today, only Dark employees can add functions to the package manager.\nPackages are named by the creator, package, function, and version and are\naccessible via autocomplete. The package manager today is intended for\nconnections to third party services and APIs."),(0,r.kt)("p",null,"In the future, packages will be imported vs. being continually accessible, and\ncommunity members will be able to contribute directly. If you would like to\nrequest or contribute a package today, please reach out via\n",(0,r.kt)("a",{parentName:"p",href:"https://darklang.com/discord-invite"},"Discord"),"."),(0,r.kt)("h2",{id:"slack"},"Slack"),(0,r.kt)("h3",{id:"getallconversations"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllConversations")),(0,r.kt)("p",null,"Takes your Slack token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of records containing\nboth your public and private Slack channel names and ids."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllConversations",src:a(77495).Z,width:"1042",height:"454"})),(0,r.kt)("h3",{id:"getconversations"},(0,r.kt)("inlineCode",{parentName:"h3"},"getConversations")),(0,r.kt)("p",null,"Takes your Slack token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of records containing\nyour public Slack channel names and ids."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getConversations",src:a(54998).Z,width:"990",height:"654"})),(0,r.kt)("h3",{id:"getconversationswithdetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"getConversationsWithDetails")),(0,r.kt)("p",null,"Takes your Slack token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of records containing\nthe channel name, id, created at date (in Epoch seconds), creator, count of\nmembers, purpose and current topic. Does not include archived channels."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getConversationsWithDetails",src:a(20528).Z,width:"982",height:"1024"})),(0,r.kt)("h3",{id:"getnewconversations"},(0,r.kt)("inlineCode",{parentName:"h3"},"getNewConversations")),(0,r.kt)("p",null,"Takes your Slack token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"checkFromSeconds")," as an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),", and\nreturns a list of conversations (as records) where the created at date is\ngreater than the current time minus the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkFromSeconds")," time. Each entry\ncontains the channel name, id, created at date (in Epoch seconds), creator,\ncount of members, purpose and current topic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getNewConversations",src:a(89747).Z,width:"1176",height:"648"})),(0,r.kt)("h3",{id:"getprivateconversations"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPrivateConversations")),(0,r.kt)("p",null,"Takes your Slack token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of records containing\nyour private Slack channel names and ids."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getPrivateConversations",src:a(59141).Z,width:"1068",height:"936"})),(0,r.kt)("h3",{id:"oauth"},(0,r.kt)("inlineCode",{parentName:"h3"},"oauth")),(0,r.kt)("p",null,"Takes your Slack client ID (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), client secret (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), token datastore\n(",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," - but should be the name of your datastore), and OAuth code (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),")\nand returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),". Using this function enables you to easily set up Slack\nOAuth."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"oauth",src:a(46384).Z,width:"1104",height:"1084"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"oauth example",src:a(62690).Z,width:"1270",height:"212"})),(0,r.kt)("h3",{id:"postmarkdownmessage"},(0,r.kt)("inlineCode",{parentName:"h3"},"postMarkdownMessage")),(0,r.kt)("p",null,"Takes your Slack token, channel id and text as ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"s and posts the text to\nthe Slack channel as a markdown message."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"postMarkdownMessage",src:a(44406).Z,width:"998",height:"712"})),(0,r.kt)("h3",{id:"postmessage"},(0,r.kt)("inlineCode",{parentName:"h3"},"postMessage")),(0,r.kt)("p",null,"Takes your Slack token, channel id and text as ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"s and posts the text to\nthe Slack channel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"postMessage",src:a(12746).Z,width:"1070",height:"968"})),(0,r.kt)("h3",{id:"schedulemessage"},(0,r.kt)("inlineCode",{parentName:"h3"},"scheduleMessage")),(0,r.kt)("p",null,"Takes an Epoch time (",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),"), Slack token (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), channel id (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and\ntext (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and schedules a message to be posted at the time specified."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"scheduleMessage",src:a(19615).Z,width:"1614",height:"1052"})),(0,r.kt)("h2",{id:"asana-package"},"Asana Package"),(0,r.kt)("h3",{id:"createproject"},(0,r.kt)("inlineCode",{parentName:"h3"},"createProject")),(0,r.kt)("p",null,"Takes a name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), notes (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), workspace (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and Asana token\n(",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and creates a new project in the specified workspace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createProject",src:a(73605).Z,width:"974",height:"1082"})),(0,r.kt)("h3",{id:"createtask"},(0,r.kt)("inlineCode",{parentName:"h3"},"createTask")),(0,r.kt)("p",null,"Takes a name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), assignee (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), project (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), notes\n(",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and Asana token (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and creates a new task in the specified\nworkspace. The assignee can be a user gid, email or null."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createTask",src:a(28311).Z,width:"968",height:"1242"})),(0,r.kt)("h3",{id:"createtaskwithduedate"},(0,r.kt)("inlineCode",{parentName:"h3"},"createTaskWithDueDate")),(0,r.kt)("p",null,"Takes a name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), assignee (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), due date (",(0,r.kt)("inlineCode",{parentName:"p"},"String")," - 'YYYY-MM-DD'\nformat) project (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), notes (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and Asana token (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and\ncreates a new task in the specified workspace. The assignee can be a user gid,\nemail or null."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createTaskWithDueDate",src:a(17216).Z,width:"974",height:"1362"})),(0,r.kt)("h3",{id:"getallprojects"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllProjects")),(0,r.kt)("p",null,"Takes an Asana token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and returns details of all projects that\ntoken has access to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllProjects",src:a(51720).Z,width:"970",height:"508"})),(0,r.kt)("h3",{id:"getallworkspaces"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllWorkspaces")),(0,r.kt)("p",null,"Takes an Asana token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and returns details of all workspaces that\ntoken has access to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllWorkspaces",src:a(9455).Z,width:"972",height:"480"})),(0,r.kt)("h2",{id:"mailchimp-package"},"Mailchimp Package"),(0,r.kt)("h3",{id:"subscribe"},(0,r.kt)("inlineCode",{parentName:"h3"},"subscribe")),(0,r.kt)("p",null,"Takes an audience ID (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), email (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), first name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), last\nname (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), Mailchimp username (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), Mailchimp API key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"),\nand Mailchimp data center (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and posts to the\n",(0,r.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/#Add_a_contact_to_a_list%2Faudience"},"Mailchimp Subscribers API"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"subscribe",src:a(95896).Z,width:"1612",height:"1146"})),(0,r.kt)("h2",{id:"stripe-package"},"Stripe Package"),(0,r.kt)("h3",{id:"createcharge"},(0,r.kt)("inlineCode",{parentName:"h3"},"createCharge")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), the amount for the charge (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), the\ncurrency (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), a customer id (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and a card id (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and\ncreates a charge on that customer's card."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createCharge",src:a(19383).Z,width:"906",height:"1078"})),(0,r.kt)("h3",{id:"createcheckoutsession"},(0,r.kt)("inlineCode",{parentName:"h3"},"createCheckoutSession")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of line items (amount, name, quantity, price, and currency), a\ncustomer ID (",(0,r.kt)("inlineCode",{parentName:"p"},"Any"),"), a stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), a ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelUrl")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and a\n",(0,r.kt)("inlineCode",{parentName:"p"},"successUrl")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createCheckout",src:a(79629).Z,width:"1150",height:"1492"})),(0,r.kt)("h3",{id:"createcustomer"},(0,r.kt)("inlineCode",{parentName:"h3"},"createCustomer")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), a description (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), an email address\n(",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), a name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and a phone number (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and creates a\ncustomer in Stripe."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createCustomer",src:a(48469).Z,width:"904",height:"1088"})),(0,r.kt)("h3",{id:"createfullrefund"},(0,r.kt)("inlineCode",{parentName:"h3"},"createFullRefund")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and charge id (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and issues a full refund\nfor that charge."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createFullRefund",src:a(5037).Z,width:"900",height:"808"})),(0,r.kt)("h3",{id:"createpartialrefund"},(0,r.kt)("inlineCode",{parentName:"h3"},"createPartialRefund")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), charge id (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and amount (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and\nissues a refund of that amount to the charge."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createPartialRefund",src:a(83877).Z,width:"906",height:"886"})),(0,r.kt)("h3",{id:"getallcharges"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllCharges")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns all charges for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllCharges",src:a(14133).Z,width:"906",height:"548"})),(0,r.kt)("h3",{id:"getallcustomers"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllCustomers")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns all customers for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllCustomers",src:a(80792).Z,width:"900",height:"548"})),(0,r.kt)("h3",{id:"getalltransactions"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllTransactions")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns all transactions for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllTransactions",src:a(52730).Z,width:"910",height:"620"})),(0,r.kt)("h3",{id:"getavailablebalance"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAvailableBalance")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns the available balance for that\naccount."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAvailableBalance",src:a(16125).Z,width:"998",height:"672"})),(0,r.kt)("h3",{id:"getcustomer"},(0,r.kt)("inlineCode",{parentName:"h3"},"getCustomer")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and a customer id (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns\ninformation about that customer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getCustomer",src:a(36786).Z,width:"1030",height:"616"})),(0,r.kt)("h3",{id:"getpendingbalance"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPendingBalance")),(0,r.kt)("p",null,"Takes a Stripe key (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns the pending balance for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getPendingBalance",src:a(42311).Z,width:"990",height:"676"})),(0,r.kt)("h2",{id:"trello-package"},"Trello Package"),(0,r.kt)("h3",{id:"addboardstodb"},(0,r.kt)("inlineCode",{parentName:"h3"},"addBoardstoDB")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of boards and a board Datastore. Adds the name and ID of each of\nthe boards to the datastore."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"addBoardstoDB",src:a(66695).Z,width:"814",height:"666"})),(0,r.kt)("h3",{id:"addliststodb"},(0,r.kt)("inlineCode",{parentName:"h3"},"addListstoDB")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of Trello lists and a list Datastore. Adds the name and id of\neach of the lists to the datastore."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"addListstoDB",src:a(12364).Z,width:"818",height:"670"})),(0,r.kt)("h3",{id:"createnewcard"},(0,r.kt)("inlineCode",{parentName:"h3"},"createNewCard")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"listID")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloKey")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloToken")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"),\nname (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and description (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"). Adds card with that name and\ndescription to the list specified."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"createNewCard",src:a(94229).Z,width:"974",height:"1138"})),(0,r.kt)("h3",{id:"getallboardswithdetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllBoardsWithDetails")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloOrgID")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloKey")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloToken"),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns all boards for that Trello org."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllBoardsWithDetails",src:a(86966).Z,width:"1378",height:"922"})),(0,r.kt)("h3",{id:"getalllistswithdetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllListsWithDetails")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloKey")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloToken")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and Trello board id\n(",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and returns all lists for that Trello board."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllListsWithDetails",src:a(5744).Z,width:"1178",height:"930"})),(0,r.kt)("h3",{id:"getallopencardsformemberwithdetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllOpenCardsForMemberWithDetails")),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloKey")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"trelloToken")," (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and username (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),")\nand returns all open cards for that Trello user."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getAllOpenCardsForMembersWithDetails",src:a(87305).Z,width:"1402",height:"1126"})),(0,r.kt)("h3",{id:"lookupboardid"},(0,r.kt)("inlineCode",{parentName:"h3"},"lookUpBoardID")),(0,r.kt)("p",null,"Takes a board Datastore (containing names & ids) and a name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and\nreturns the board id matching the name."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lookUpBoardID",src:a(1768).Z,width:"1110",height:"478"})),(0,r.kt)("h3",{id:"lookuplistid"},(0,r.kt)("inlineCode",{parentName:"h3"},"lookUpListID")),(0,r.kt)("p",null,"Takes a list Datastore (containing names & ids) and a name (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),") and\nreturns the list id matching the name."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lookUpListID",src:a(52152).Z,width:"1086",height:"476"})),(0,r.kt)("h2",{id:"contributions"},"Contributions"),(0,r.kt)("p",null,"If you'd like to share a function to the community, please send us a link to the\nfunction and we will set it up to be shared back! We love contributions for\nthird party APIs."))}g.isMDXComponent=!0},73605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createProject-09f7cc57d1e06394cfcc3cde517972bc.png"},28311:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createTask-d430ee1c6311907db15b3def81270c97.png"},17216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createTaskWithDueDate-54c34a0b615f4081d5001d253bdf1931.png"},51720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllProjects-e4897f369e497a15589ade8253cbcd57.png"},9455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllWorkspaces-89fad98a0d420f2fa0f2265ac0bcc910.png"},95896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subscribe-563297eec03365cb65b1b5c3e1b8def2.png"},77495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllConversations-1beddd0ca23a5115322d5d05aea1317b.png"},54998:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getConversations-aa6760960ca9a75b4dc35b34d5ce0cf6.png"},20528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getConversationsWithDetails-8635d9d7705050ae92634b4a92b7d2fb.png"},89747:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getNewConversations-ae77179cf06ed672a22c97f60916d69c.png"},59141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getPrivateConversations-7c47a55b1c48981c3c54e28e649ef5cf.png"},46384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth-541bb4b1abcbe72a98806f8ccc426b1b.png"},62690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauthexample-fbc913c587d73ac001edbc12e2b169f5.png"},44406:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postMarkdownMessage-9b8d8106f2939915d83cdf599e4694fb.png"},12746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postMessage-a003776ef2d449200873ea881efa50dc.png"},19615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scheduleMessage-d131885f47531e6ebf889089f4ae9c77.png"},19383:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createCharge-823c4e6c4771014108377be56a866b9f.png"},79629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createCheckout-28a281402d4f4258c3fc1b822ff9e608.png"},48469:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createCustomer-25bb74bb7332bd89c38366720b4a5af0.png"},5037:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createFullRefund-702d0ef339b8adc42d0da822a11a698a.png"},83877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createPartialRefund-7cf5ffdfd8b2ae5416fd87afaeaace73.png"},14133:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllCharges-a636a4b6130f58b181fc1221652045eb.png"},80792:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllCustomers-67e12b52c47a9488b93470d671448d12.png"},52730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllTransactions-20af0a89d81bdf9ceb28d0dafc406031.png"},16125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAvailableBalance-ceedab558879461375990507fb9df45f.png"},36786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getCustomer-667183cea8afe982c2e5643a1316d67d.png"},42311:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getPendingBalance-5f7da2ca8c8c546ccb8020aee2b544c6.png"},66695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addBoardsToDB-85cbe023f4a8d0f97e45da1386619dae.png"},12364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addListsToDB-0942409292978292a4a42aa6bfb5b859.png"},94229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createNewCard-e24343b1d8f37e7308088224190cd6cc.png"},86966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllBoardsWithDetails-7495cbd9a80b7f2fa611bccf17b8a6d3.png"},5744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllListsWithDetails-07f03ea570897ff0e0f8b0d2ef48dc9a.png"},87305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/getAllOpenCardsForMembersWithDetails-c01eea9fc3718c5ec0f87ec6cdd1e598.png"},1768:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lookUpBoardID-b7e8ced1382e75ac987e5ee25af3cec9.png"},52152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lookUpListID-24c67e0f7f71b2141d564fed2a1aa4ee.png"}}]);