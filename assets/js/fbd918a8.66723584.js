"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3748],{3905:(e,t,n)=>{n.d(t,{kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"languagedetails",title:"Language Details",sidebar_label:"Language Details"},o=void 0,p={unversionedId:"reference/languagedetails",id:"reference/languagedetails",title:"Language Details",description:"This doc describes the Dark language. Dark is really a system - a combination of",source:"@site/docs/reference/languagedetails.md",sourceDirName:"reference",slug:"/reference/languagedetails",permalink:"/reference/languagedetails",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/reference/languagedetails.md",tags:[],version:"current",frontMatter:{id:"languagedetails",title:"Language Details",sidebar_label:"Language Details"},sidebar:"docs",previous:{title:"Sample Canvases",permalink:"/reference/sample-canvases"},next:{title:"Keyboard Mapping",permalink:"/reference/keyboard-mapping"}},u={},d=[{value:"Type system",id:"type-system",level:3},{value:"Built-in types",id:"built-in-types",level:2},{value:"Integers",id:"integers",level:3},{value:"Floats",id:"floats",level:3},{value:"Booleans",id:"booleans",level:3},{value:"Strings",id:"strings",level:3},{value:"Characters",id:"characters",level:3},{value:"Lists/Arrays",id:"listsarrays",level:3},{value:"Tuples (In-Progress)",id:"tuples-in-progress",level:3},{value:"Binary",id:"binary",level:3},{value:"Options",id:"options",level:3},{value:"Results",id:"results",level:3},{value:"Dicts",id:"dicts",level:3},{value:"UUID",id:"uuid",level:3},{value:"Null",id:"null",level:3},{value:"User defined types",id:"user-defined-types",level:2},{value:"Records",id:"records",level:3},{value:"Enums",id:"enums",level:3},{value:"Types unique to Dark",id:"types-unique-to-dark",level:2},{value:"Incompletes",id:"incompletes",level:3},{value:"Error rail",id:"error-rail",level:3},{value:"Sensitive Types",id:"sensitive-types",level:3},{value:"Expressions",id:"expressions",level:2},{value:"Let",id:"let",level:3},{value:"Variable Scope",id:"variable-scope",level:4},{value:"If",id:"if",level:3},{value:"Match",id:"match",level:3},{value:"Functions",id:"functions",level:3},{value:"Lambda",id:"lambda",level:3},{value:"Pipelining",id:"pipelining",level:3},{value:"Feature Flags",id:"feature-flags",level:3},{value:"Planned language features",id:"planned-language-features",level:2},{value:"Tuples",id:"tuples",level:3},{value:"Sets",id:"sets",level:3},{value:"Unit",id:"unit",level:3},{value:"Imperative programming (Statements and refs)",id:"imperative-programming-statements-and-refs",level:3}],c={toc:d};function m(e){var t=e.components,s=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This doc describes the Dark language. Dark is really a system - a combination of\nthe language, editor, framework and infrastructure. In this doc, we'll focus on\ndiscussing the language itself, ignoring where possible the editor and\ninfrastructure."),(0,r.kt)("p",null,"This discusses both the language and the ",(0,r.kt)("strong",{parentName:"p"},"intended")," language. We have taken\nmany shortcuts to be able to ship Dark, and so many parts of the language are\nnot currently at their end state. Here we discuss both what the language is, and\nwhat we intend it to be."),(0,r.kt)("p",null,"Dark is a statically-typed functional/imperative hybrid, based loosely on ML. It\nis a high-level language, with immutable values, garbage collection, and support\nfor generics/polymorphic types."),(0,r.kt)("p",null,"Dark is somewhat similar to OCaml or Elm. It has many similarities to Rust and\nHaskell, and is also influenced by Clojure, Ruby, Python, CoffeeScript, as well\nas our experience with (alphabetically) Bash, C, Clojure, CoffeeScript, C++,\nElm, Javascript, Java, Haskell, OCaml, Perl, PHP, Python, ReasonML, Ruby/Rails,\nReact, and Rust."),(0,r.kt)("h3",{id:"type-system"},"Type system"),(0,r.kt)("p",null,"Dark\u2019s type system is most similar to Elm, Haskell, ReasonML, OCaml or Rust:\nbased on records, enums, list, and built-in generics/polymorphism. All values in\nDark are immutable, except refs."),(0,r.kt)("p",null,"Dark has some standard basic types: ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),",\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"dicts"),"."),(0,r.kt)("p",null,"We support typical functional types: ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"."),(0,r.kt)("p",null,"Currently, Dark has a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," type to support JSON values directly. In the\nfuture, we intend to deprecate ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"Options"),"."),(0,r.kt)("h2",{id:"built-in-types"},"Built-in types"),(0,r.kt)("h3",{id:"integers"},"Integers"),(0,r.kt)("p",null,"Integers are signed 63-bit integer."),(0,r.kt)("p",null,"In the future, Dark will use infinite-precision integers. We also intend to add\nunsigned 8-bit integers and bit-manipulation functions."),(0,r.kt)("h3",{id:"floats"},"Floats"),(0,r.kt)("p",null,"Floats are double-precision 64-bit floating-point values (IEEE 754)."),(0,r.kt)("p",null,"We intend for numeric operations to return Results, to handle situations which\nare undefined on the datatype. For example, integer division would return\n",(0,r.kt)("inlineCode",{parentName:"p"},"Result Error Int"),". Similarly, floating point values would never be ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),", and\ninstead would return ",(0,r.kt)("inlineCode",{parentName:"p"},"Result Error Float"),". See\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.darklang.com/discussion/error-handling"},"Error Handling in Dark"),"\nfor more."),(0,r.kt)("h3",{id:"booleans"},"Booleans"),(0,r.kt)("p",null,"Booleans are true or false."),(0,r.kt)("h3",{id:"strings"},"Strings"),(0,r.kt)("p",null,"Strings are unicode, and character are unicode \u201ccharacters\u201d (if it appears as\none character on the screen, that\u2019s a \u201ccharacter\u201d in Dark)."),(0,r.kt)("p",null,"Specifically, string are immutable UTF-8 encoded sequences of Unicode code\npoints. Chars are \u201cExtended Grapheme Clusters\u201d. (A codepoint is some bytes that\nimplement unicode characters, a grapheme is some codepoints forming a unicode\nentity, such as an emoji; an EGC is some graphemes, used to handle things like\nemojis which combine to form a single emoji)."),(0,r.kt)("p",null,"Dark doesn't currently support string interpolation, but we plan to in the\nfuture."),(0,r.kt)("h3",{id:"characters"},"Characters"),(0,r.kt)("p",null,"In the future, Dark will support individual characters."),(0,r.kt)("h3",{id:"listsarrays"},"Lists/Arrays"),(0,r.kt)("p",null,"Lists and Arrays use the same datatype, called Lists. The Dark compiler will in\nthe future optimize their implementation to support good algorithmic complexity\nand performance for whatever you use them for."),(0,r.kt)("p",null,"Lists should be used for all \u201cI want a sequence of things\u201d situations, including\niterating across them, random access, push/pop, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"let x = [8]\nlet y = List::append x [6]\ny\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"[8, 6]\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List Example",src:n(833).Z,width:"994",height:"200"})),(0,r.kt)("h3",{id:"tuples-in-progress"},"Tuples (In-Progress)"),(0,r.kt)("p",null,"Dark supports tuples: lists of defined length supporting heterogeneous types."),(0,r.kt)("p",null,"Tuple support is currently a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues/4265"},"work-in-progress"),", and only\navailable in the editor after opting in via the Settings dialog. Feedback is\nwelcome!"),(0,r.kt)("p",null,"See Release 5 in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.darklang.com/reference/changelog"},"changelog"),"\nfor a demo of opting in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let x = (1, "string", { name: "Sam" })\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tuples can be created in the editor by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"(")," in a blank.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting additional separators (",(0,r.kt)("inlineCode",{parentName:"p"},","),") extends the size of the tuple; removing\nseparators/elements reduces the size, generally removing the element to the\nleft of the separator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dark's Standard Library includes ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple3")," modules, which provide\nfunctions used to work with tuples of size 2 and 3.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pattern matching with ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," supports tuples:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let headers = Dict::toList request.headers\nlet contentTypePlain =\n  List::findFirst headers \\header ->\n    let (key, value) = Tuple2::mapFirst (\\key -> String::toLower key) header\n    match (key, value)\n      ("content-type", "application/json") -> Just "json"\n      ("content-type", "text/html") -> Just "html"\n      _ -> Nothing\n')),(0,r.kt)("p",{parentName:"li"},"Tuple match patterns can be created and extended the same way as tuple\nexpressions."))),(0,r.kt)("p",null,"The following constructs are planned but not yet implemented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tuples can be deconstructable into their parts in a ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," expression:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},"let philadelphia = (39.9526, 75.1652)\nlet (lat, long) = philadelphia\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User functions may accept and return Tuples (TODO: I'm not sure how to phrase\nthis)"))),(0,r.kt)("h3",{id:"binary"},"Binary"),(0,r.kt)("p",null,"Non-unicode sequences of bytes are supported as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," type."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"Instead of allowing all values to potentially be null, as in most imperative\nlanguages, Dark uses an Option type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"Option a = Just a | Nothing\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Option Example",src:n(76947).Z,width:"1374",height:"402"})),(0,r.kt)("p",null,"This is intended to convert effortlessly to null in JSON, but we don't quite\nhave enough of the type system to remove null, so they both exist right now."),(0,r.kt)("p",null,"Functions which return ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," trigger the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.darklang.com/discussion/error-handling"},"Error Rail"),"."),(0,r.kt)("h3",{id:"results"},"Results"),(0,r.kt)("p",null,"Any functions which can have an error should use Results. We use results for Int\ndivision, Float operations, HTTP operations, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"Result a = Ok a | Err Error\n")),(0,r.kt)("p",null,"Dark has no exceptions - all errors go through Results. See\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.darklang.com/discussion/error-handling"},"error handling")," for more\ndetails."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Result Example",src:n(28143).Z,width:"1376",height:"414"})),(0,r.kt)("h3",{id:"dicts"},"Dicts"),(0,r.kt)("p",null,"Dicts are maps from a certain key type to a certain value type. The key must\ncurrently be a string. The value can be any type but all elements of the Dict\nare the same type (not currently enforced)."),(0,r.kt)("p",null,"Dicts are different than records: dicts can have arbitrary keys."),(0,r.kt)("h3",{id:"uuid"},"UUID"),(0,r.kt)("p",null,"Dark supports UUIDs directly."),(0,r.kt)("h3",{id:"null"},"Null"),(0,r.kt)("p",null,"As a temporary hack, Dark also supports ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". This allows us handle JSON while\nwe build out enough type-system support to allow them to be replaced by\n",(0,r.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,r.kt)("p",null,"Null is mostly useful for comparing against incoming JSON and results of\nHttpClient calls. When returning JSON or making HttpClient calls, you can use\nOptions instead and they will be converted properly to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," in the JSON\noutput."),(0,r.kt)("h2",{id:"user-defined-types"},"User defined types"),(0,r.kt)("p",null,"Dark currently has limited support for user-defined types. Currently, we support\ninline definition of records, but do not support defining record types\nexplicitly."),(0,r.kt)("p",null,"Record types are actually implemented under the hood, and we intend to use them\nto support typed Datastores, API contracts, and static types."),(0,r.kt)("p",null,"Dark does not currently support user-defined enums."),(0,r.kt)("p",null,"User-defined types will be either records or enums, or combinations of other\ntype expressions."),(0,r.kt)("p",null,"Types in Dark are out-of-line, meaning that they are not defined \u201con the\ncanvas\u201d, in a similar way to functions."),(0,r.kt)("p",null,"All types in Dark will be versioned."),(0,r.kt)("p",null,"In the future, we intend to support typeclasses or traits to allow ad-hoc\npolymorphism."),(0,r.kt)("h3",{id:"records"},"Records"),(0,r.kt)("p",null,"Records are most akin to Classes in an imperative language."),(0,r.kt)("p",null,"Records are a set of keys and values. Each key name and type are defined, and\nthe types do not have to be the same."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},'let x = { name: "Robin"\n          age: 32\n          gender: "Other"\n        }\n')),(0,r.kt)("p",null,"Records can not be accessed dynamically; they are not Maps/Hashtables/Dicts."),(0,r.kt)("p",null,"Records are structurally typed, and are equivalent to records of the same shape\nbut a different name."),(0,r.kt)("p",null,"Note that at the moment, Dicts and Records share the same implementation and can\nbe accessed and modified in the same way. We intend to break these apart in the\nfuture."),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("p",null,"Enums are a set of \u201cconstructors\u201d, each of which has a set of typed arguments."),(0,r.kt)("p",null,"Currently, Dark only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," built-in enums. In the\nfuture, we will support user-defined enums."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"type Person = Human {age: Int, name: String, itin: String }\n            | Corporation {age: Int, name: String, ein: String }\n            | Puppers Int String\n")),(0,r.kt)("p",null,"Enums can be made by building on existing types, especially records and other\nenums."),(0,r.kt)("p",null,"Enums are nominally typed. (Two enums with the same field names and types are\nnot equivalent)."),(0,r.kt)("h2",{id:"types-unique-to-dark"},"Types unique to Dark"),(0,r.kt)("h3",{id:"incompletes"},"Incompletes"),(0,r.kt)("p",null,"Programs in Dark start as a single empty expression. As they get built up in our\nstructured editor, they can never become syntactically invalid. However, a\nprogram may be incomplete if any its expressions are empty."),(0,r.kt)("p",null,"An empty expression is incomplete. A developer may write programs where some\nparts are incomplete as they build out the code. As such, incomplete values\nappear dynamically when the code is executed. Structures containing incompletes\nare themselves incomplete. For example functions with incomplete arguments do\nnot execute, and return incomplete; and records with an incomplete field are\nalso incomplete."),(0,r.kt)("p",null,"Incompletes are never returned to end users, and cannot be stored in a\ndatastore. Returning an incomplete via a HTTP handler causes a 500 error."),(0,r.kt)("h3",{id:"error-rail"},"Error rail"),(0,r.kt)("p",null,"You might occasionally see a value marked ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorRail>"),", this is used to\nindicate that a value is on the Error Rail. See\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.darklang.com/real-problems-with-functional-languages/"},"Railway Oriented Programming"),"\nfor more details."),(0,r.kt)("h3",{id:"sensitive-types"},"Sensitive Types"),(0,r.kt)("p",null,"Some values are sensitive, for example, passwords or credit card numbers."),(0,r.kt)("p",null,"Currently Dark supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"Password")," type, which is never saved directly or\nsent to the editor."),(0,r.kt)("p",null,"In the future, Dark will allow you to specify types of sensitive values,\npreventing them from being stored in logs, and allowing a team to limit who has\naccess to these values in the Dark editor."),(0,r.kt)("h2",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"All Dark language constructs are expressions. That means that they evaluate to a\nvalue, rather than being used to set state."),(0,r.kt)("h3",{id:"let"},"Let"),(0,r.kt)("p",null,"Lets creates a name with an immutable value, and a scope in which that is\ndefined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},'let name = "Stella"\nname\n')),(0,r.kt)("p",null,"We often refer to these names as variables, for simplicity. However, they never\nvary: once they are defined, they never have any other value."),(0,r.kt)("h4",{id:"variable-scope"},"Variable Scope"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"if age > 18\nthen\n  let height = 170\n  height + 12\nelse\n  let weight = 105\n  weight / 2\n")),(0,r.kt)("p",null,"In the example above, the scope of ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," only extends to within\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," block and ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," block respectively. You cannot use either variable\nbelow the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," expression."),(0,r.kt)("h3",{id:"if"},"If"),(0,r.kt)("p",null,"Dark supports if/else statement. The argument to an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," is a boolean. We\ncurrently support ",(0,r.kt)("inlineCode",{parentName:"p"},"truthy")," types but intend to remove that ability."),(0,r.kt)("p",null,"We support ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," - they do not currently short-circuit but we intend\nthem to in the future."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," is not currently allowed without a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," - we will relax\nthis after we introduce statements."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"If Example",src:n(43174).Z,width:"1384",height:"394"})),(0,r.kt)("h3",{id:"match"},"Match"),(0,r.kt)("p",null,"Dark supports pattern matching, in particular, matching on ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum"),"s."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-fsharp"},'let introduction =\n  match name with\n  | Nothing -> "Hi!"\n  | Just name -> "Dear " ++ name\n')),(0,r.kt)("p",null,"We expect to allow guards in the future. We also hope to add an ",(0,r.kt)("inlineCode",{parentName:"p"},"if-let"),"\nconstruct to support ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements that destructure from Enums."),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions must have type declarations for inputs. We intend to support types on\nreturn values soon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"fetch url name =\n  { url: url\n  , name: name\n  }\n")),(0,r.kt)("p",null,"Functions in Dark are simple, and do not currently support functional language\nconcepts, such as partial application, functions as first-class values, and\ndefining functions in using points-free style."),(0,r.kt)("p",null,"Functions do not live in the \u201cCanvas\u201d, but rather are a little bit ethereal."),(0,r.kt)("p",null,"Built-in functions are all versioned: we frequently deprecate old functions and\nadd updates. When we deprecate old versions, your code does ",(0,r.kt)("em",{parentName:"p"},"not")," change, and\nyou keep using the old ones. We intend to support automated refactoring and\nupdating in the future."),(0,r.kt)("p",null,"In the future, we intend to support partial application/currying, and\ndefault/optional parameters."),(0,r.kt)("h3",{id:"lambda"},"Lambda"),(0,r.kt)("p",null,"Lambdas are anonymous functions. They are used to pass to functions which take\n",(0,r.kt)("inlineCode",{parentName:"p"},"Block"),"s, typically used for iteration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"List::map [5, 10, 11] \\var -> var + 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"[7, 12, 13]\n")),(0,r.kt)("p",null,"In the future, we intend to support a syntax for shorthands for creating lambdas\nto access fields: ",(0,r.kt)("inlineCode",{parentName:"p"},".fieldname"),". This can be included in a pipe or used as a\nfirst class function."),(0,r.kt)("p",null,"We also intend to support passing functions where blocks are expected."),(0,r.kt)("p",null,"There is a syntax for shorthands for creating lambda\u2019s to call constructors:\n",(0,r.kt)("inlineCode",{parentName:"p"},"ConstructorName"),". This can be included in a pipe or used as a first class\nfunction."),(0,r.kt)("h3",{id:"pipelining"},"Pipelining"),(0,r.kt)("p",null,"Dark programs are intended to be written, as much as possible, as pipelines of\ndata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},'user\n|> getFriends\n|> List.map (\\f -> (f, getFriends f))\n|> List.filter (\\f -> f.name == "Kevin Bacon")\n|> (=) []\n')),(0,r.kt)("h3",{id:"feature-flags"},"Feature Flags"),(0,r.kt)("p",null,"Feature flags are similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"flag myCondition\nthen 5\nelse 6\n")),(0,r.kt)("p",null,"However, flags differ slightly from ifs in that any condition that is not ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\nwill cause the ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," block to activate. This is especially important around\n",(0,r.kt)("inlineCode",{parentName:"p"},"incomplete"),"s, allowing you to take working code and edit the feature flag\nwithout disturbing existing users. In an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement, neither branch would\nexecute."),(0,r.kt)("h2",{id:"planned-language-features"},"Planned language features"),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("p",null,"Dark intends to support tuples: lists of defined length supporting heterogeneous\ntypes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},'x = (1, "string", { name: "Sam" })\n')),(0,r.kt)("h3",{id:"sets"},"Sets"),(0,r.kt)("p",null,"We intend for Dark to support Sets: unordered collections of a single type."),(0,r.kt)("h3",{id:"unit"},"Unit"),(0,r.kt)("p",null,"We intend to support the unit type, which indicates something that have no type,\nsuch as an imperative function that doesn't return anything."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elm"},"x = ()\n")),(0,r.kt)("h3",{id:"imperative-programming-statements-and-refs"},"Imperative programming (Statements and refs)"),(0,r.kt)("p",null,"It is intended that you write the program as you think it, not to shoehorn your\nprogram into a functional style. As such, Dark is planning to add a number of\nimperative concepts to allow you to easily write imperative algorithms,\nincluding statements, refs, and mutable data structures."))}m.isMDXComponent=!0},43174:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/if_example-7fd9df71f9247946ff93674b1e87c783.png"},833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/list_example-721d3f85f7dc382b2d081d0c29f4196e.png"},76947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/option_example-292ccfa26e65d8f6efa608bcbbc2b296.png"},28143:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result_example-359f708d3638e84b636b27756288e886.png"}}]);