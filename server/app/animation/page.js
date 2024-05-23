(()=>{var e={};e.id=584,e.ids=[584],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},45:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>c,routeModule:()=>x,tree:()=>d}),s(5542),s(8890),s(5866);var r=s(3191),i=s(8716),a=s(7922),n=s.n(a),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["animation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5542)),"C:\\Users\\Korisnik\\Desktop\\my-portfolio\\src\\app\\animation\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8890)),"C:\\Users\\Korisnik\\Desktop\\my-portfolio\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\Korisnik\\Desktop\\my-portfolio\\src\\app\\animation\\page.jsx"],h="/animation/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/animation/page",pathname:"/animation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2444:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},7856:(e,t,s)=>{Promise.resolve().then(s.bind(s,8658))},1566:(e,t,s)=>{Promise.resolve().then(s.bind(s,4217))},4217:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(326),i=s(4858);let a=()=>r.jsx("div",{className:"h-full flex items-center justify-center",children:r.jsx(i.E.div,{className:"w-96 h-96 bg-red-400 rounded",variants:{variant1:{x:400,y:300,opacity:.5,transition:{duration:3}},variant2:{x:100,y:-300,rotation:90}},animate:"variant1"})})},8658:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var r=s(326),i=s(6462),a=s(6226),n=s(434),o=s(7577),l=s(5047);let d=({link:e})=>{let t=(0,l.usePathname)();return r.jsx(n.default,{className:`rounded p-1 ${t===e.url&&"bg-black text-white"}`,href:e.url,children:e.title})};var c=s(4858);let h=[{url:"/",title:"Home"},{url:"/about",title:"About"},{url:"/projects",title:"Projects"},{url:"/contact",title:"Contact"}],p=()=>{let[e,t]=(0,o.useState)(!1),s={closed:{x:-10,opacity:0},opened:{x:0,opacity:1}};return(0,r.jsxs)("div",{className:"h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl",children:[r.jsx("div",{className:"hidden md:flex gap-4 w-1/3",children:h.map(e=>r.jsx(d,{link:e},e.title))}),(0,r.jsxs)("div",{className:"hidden md:flex gap-4 w-1/3",children:[r.jsx(n.default,{href:"https://www.linkedin.com/in/ana-novkovic/",children:r.jsx(a.default,{src:"/linkedin.png",alt:"",width:24,height:24})}),r.jsx(n.default,{href:"https://github.com/a9na",children:r.jsx(a.default,{src:"/github.png",alt:"",width:24,height:24})}),r.jsx(n.default,{href:"https://www.goodreads.com/user/show/101703919-ana",children:r.jsx(a.default,{src:"/goodreads.png",alt:"",width:24,height:24})}),r.jsx(n.default,{href:"https://www.instagram.com/novkovic.anaa/",children:r.jsx(a.default,{src:"/instagram.png",alt:"",width:24,height:24})}),r.jsx(n.default,{href:"https://x.com/anaiscoding",children:r.jsx(a.default,{src:"/x.png",alt:"",width:24,height:24})}),r.jsx(n.default,{href:"https://www.strava.com/athletes/113486741",children:r.jsx(a.default,{src:"/strava.png",alt:"",width:24,height:24})})]}),(0,r.jsxs)("div",{className:"md:hidden",children:[(0,r.jsxs)("button",{className:"w-10 h-8 flex flex-col justify-between z-50 relative",onClick:()=>t(e=>!e),children:[r.jsx(c.E.div,{variants:{closed:{rotate:0},opened:{rotate:45,backgroundColor:"rgb(255,255,255)"}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded origin-left"}),r.jsx(c.E.div,{variants:{closed:{opacity:1},opened:{opacity:0}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded"}),r.jsx(c.E.div,{variants:{closed:{rotate:0},opened:{rotate:-45,backgroundColor:"rgb(255,255,255)"}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded origin-left"})]}),e&&r.jsx(c.E.div,{variants:{closed:{x:"100vw"},opened:{x:0,transition:{when:"beforeChildren",staggerChildren:.2}}},initial:"closed",animate:"opened",className:"absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40",children:h.map(e=>r.jsx(c.E.div,{variants:s,className:"",children:r.jsx(n.default,{href:e.url,children:e.title})},e.title))})]})]})},x=({children:e})=>{let t=(0,l.usePathname)();return r.jsx(i.M,{mode:"wait",children:(0,r.jsxs)("div",{className:"w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100",children:[r.jsx(c.E.div,{className:"h-screen w-screen fixed bg-black rounded-b-[100px] z-40",animate:{height:"0vh"},exit:{height:"140vh"},transition:{duration:.5,ease:"easeOut"}}),r.jsx(c.E.div,{className:"fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit",initial:{opacity:1},animate:{opacity:0},exit:{opacity:0},transition:{duration:.8,ease:"easeOut"},children:t.substring(1)}),r.jsx(c.E.div,{className:"h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30",initial:{height:"140vh"},animate:{height:"0vh",transition:{delay:.5}}}),r.jsx("div",{className:"h-24",children:r.jsx(p,{})}),r.jsx("div",{className:"h-[calc(100vh-6rem)]",children:e})]},t)})}},5542:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>o});var r=s(8570);let i=(0,r.createProxy)(String.raw`C:\Users\Korisnik\Desktop\my-portfolio\src\app\animation\page.jsx`),{__esModule:a,$$typeof:n}=i;i.default;let o=(0,r.createProxy)(String.raw`C:\Users\Korisnik\Desktop\my-portfolio\src\app\animation\page.jsx#default`)},8890:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>h});var r=s(9510),i=s(1723),a=s.n(i);s(5023);var n=s(8570);let o=(0,n.createProxy)(String.raw`C:\Users\Korisnik\Desktop\my-portfolio\src\components\transitionProvider.jsx`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,n.createProxy)(String.raw`C:\Users\Korisnik\Desktop\my-portfolio\src\components\transitionProvider.jsx#default`),h={title:"Ana Novkovic Portfolio",description:"My portfolio page"};function p({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:a().className,children:r.jsx(c,{children:e})})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[479],()=>s(45));module.exports=r})();