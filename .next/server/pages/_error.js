(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6955:e=>{e.exports={button:"Button_button__aJ0V6",buttonPrimary:"Button_buttonPrimary__oyIwZ",buttonOutline:"Button_buttonOutline__EUnWU",buttonMedium:"Button_buttonMedium__Nx8_3",buttonLarge:"Button_buttonLarge__BfAxG"}},6433:e=>{e.exports={footerContainer:"Footer_footerContainer__0uLcn",footerSubscription:"Footer_footerSubscription__GEC9o",footerSubscriptionHeading:"Footer_footerSubscriptionHeading__aMfuD",footerSubscriptionText:"Footer_footerSubscriptionText__88GQM",footerInput:"Footer_footerInput__WOTqX",footerLinks:"Footer_footerLinks__4RPn7",footerLinkWrapper:"Footer_footerLinkWrapper__k4f6y",footerLinkItems:"Footer_footerLinkItems__vJqD8",footerLinkItemsHeader:"Footer_footerLinkItemsHeader__J3DBy",footerEmailForm:"Footer_footerEmailForm__e47rg",socialIconLink:"Footer_socialIconLink__DraHO",socialMedia:"Footer_socialMedia__CYoOd",socialMediaWrap:"Footer_socialMediaWrap__XYq3Q",socialIcons:"Footer_socialIcons__P2yvi",websiteRights:"Footer_websiteRights__JFfu3",btn:"Footer_btn__9IAlu"}},6567:e=>{e.exports={navbar:"Navbar_navbar__fk_p7",navbarContainer:"Navbar_navbarContainer__WLqsU",navbarLogo:"Navbar_navbarLogo__5jox1",faTypo3:"Navbar_faTypo3__fhpY7",navMenu:"Navbar_navMenu__45Z1_",navItem:"Navbar_navItem__mQUmI",navLinks:"Navbar_navLinks__F_HK7",faXmark:"Navbar_faXmark__VMB_y",faBars:"Navbar_faBars__pmQW2",navLinksMobile:"Navbar_navLinksMobile__o9_8f",menuIcon:"Navbar_menuIcon__zLcNv",navbarItems:"Navbar_navbarItems__mf__B",active:"Navbar_active__ZTgb8"}},8826:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>_,default:()=>d,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>f,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>b});var a=r(7093),o=r(5244),s=r(1323),i=r(4024),l=r(8397),c=r(6908),u=e([l]);l=(u.then?(await u)():u)[0];let d=(0,s.l)(c,"default"),f=(0,s.l)(c,"getStaticProps"),p=(0,s.l)(c,"getStaticPaths"),m=(0,s.l)(c,"getServerSideProps"),_=(0,s.l)(c,"config"),h=(0,s.l)(c,"reportWebVitals"),b=(0,s.l)(c,"unstable_getStaticProps"),v=(0,s.l)(c,"unstable_getStaticPaths"),g=(0,s.l)(c,"unstable_getStaticParams"),x=(0,s.l)(c,"unstable_getServerProps"),y=(0,s.l)(c,"unstable_getServerSideProps"),j=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:c});n()}catch(e){n(e)}})},6908:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let n=r(167),a=n._(r(6689)),o=n._(r(9201)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e,n=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:n}}let l={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||s[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:l.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:l.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:l.h1},e):null,a.default.createElement("div",{style:l.wrap},a.default.createElement("h2",{style:l.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=i,Error.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7543:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9201:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return m}});let n=r(167),a=r(8760),o=a._(r(6689)),s=n._(r(8955)),i=r(8039),l=r(1988),c=r(7543);function u(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1905);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,s=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){s=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6689),a=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1905:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},7073:(e,t,r)=>{"use strict";r.d(t,{z:()=>u});var n=r(997);r(6689);var a=r(6955),o=r.n(a),s=r(1664),i=r.n(s);let l=["buttonPrimary","buttonOutline"],c=["buttonMedium","buttonLarge"],u=({children:e,type:t,onClick:r,buttonStyle:a,buttonSize:s})=>{let u=l.includes(a)?a:l[0],d=c.includes(s)?s:c[0];return n.jsx(i(),{href:"/signup",passHref:!0,className:o().btnMobile,children:n.jsx("button",{className:`${o().button} ${o()[u]} ${o()[d]}`,onClick:r,type:t,children:e})})}},33:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(997);r(6689);var a=r(7073),o=r(6433),s=r.n(o),i=r(1664),l=r.n(i);let c=function(){return(0,n.jsxs)("div",{className:s().footerContainer,children:[(0,n.jsxs)("section",{className:s().footerSubscription,children:[n.jsx("p",{className:s().footerSubscriptionHeading,children:"Join the Landscaping newsletter to receive our best deals"}),n.jsx("p",{className:s().footerSubscriptionText,children:"You can unsubscribe at any time."}),n.jsx("div",{className:s().inputAreas,children:(0,n.jsxs)("form",{name:"contact v1",method:"POST","data-netlify":"true",children:[n.jsx("input",{type:"hidden",name:"form-name",value:"contact v1"}),n.jsx("input",{className:s().footerInput,name:"email",type:"email",placeholder:"Your Email"}),n.jsx(a.z,{type:"submit",buttonStyle:"buttonOutline",children:"Subscribe"})]})})]}),(0,n.jsxs)("div",{className:s().footerLinks,children:[n.jsx("div",{className:s().footerLinkItemsHeader,children:n.jsx("p",{children:n.jsx("strong",{children:"Socials"})})}),n.jsx("div",{className:s().footerLinkWrapper,children:(0,n.jsxs)("div",{className:s().footerLinkItems,children:[n.jsx("a",{href:"https://instagram.com/greenacres_yardcare",target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),n.jsx("a",{href:"https://www.facebook.com/GreenAcresYardcare",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})})]}),n.jsx("section",{className:s().socialMedia,children:(0,n.jsxs)("div",{className:s().socialMediaWrap,children:[n.jsx("div",{children:n.jsx(l(),{href:"/",children:"GreenAcres"})}),n.jsx("small",{className:s().websiteRights,children:"GreenAcres Yardcare \xa9 2023"})]})})]})}},1977:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>m});var a=r(997),o=r(6689),s=r(1664),i=r.n(s),l=r(7197),c=r(4563),u=r(7073),d=r(6567),f=r.n(d),p=e([c]);c=(p.then?(await p)():p)[0];let m=function(){let[e,t]=(0,o.useState)(!1),[r,n]=(0,o.useState)(!0),s=()=>t(!1),d=()=>{n(!0)};return(0,o.useEffect)(()=>{d();let e=()=>d();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),a.jsx("nav",{className:f().navbar,children:(0,a.jsxs)("div",{className:f().navbarContainer,children:[a.jsx(i(),{href:"/",className:f().navbarLogo,onClick:s,children:"GreenAcres"}),a.jsx("div",{className:f().menuIcon,onClick:()=>t(!e),children:a.jsx(l.FontAwesomeIcon,{icon:e?c.faXmark:c.faBars})}),(0,a.jsxs)("ul",{className:e?`${f().navMenu} ${f().active}`:f().navMenu,children:[a.jsx("li",{children:a.jsx(i(),{href:"/home",className:f().navLinks,onClick:s,children:"Home"})}),a.jsx("li",{children:a.jsx(i(),{href:"/services",className:f().navLinks,onClick:s,children:"Services"})}),a.jsx("li",{children:a.jsx(i(),{href:"/aboutus",className:f().navLinks,onClick:s,children:"About Us"})}),a.jsx("li",{children:a.jsx(i(),{href:"/signup",className:f().navLinksMobile,onClick:s,children:"Request Quote"})})]}),r&&a.jsx(u.z,{buttonStyle:"buttonOutline",children:"Contact Us"})]})})};n()}catch(e){n(e)}})},8680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(6689),a=r(1163);function o(){let e=(0,a.useRouter)();return(0,n.useEffect)(()=>{let t=()=>{window.scrollTo(0,0)};return e.events.on("routeChangeComplete",t),()=>{e.events.off("routeChangeComplete",t)}},[e.events]),null}},8397:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(997);r(6448),r(108),r(4597);var o=r(1977),s=r(33),i=r(8680);r(5800);var l=r(2210),c=e([o,l]);[o,l]=c.then?(await c)():c;let u=function({Component:e,pageProps:t}){return(0,a.jsxs)(l.ChakraProvider,{children:[a.jsx(o.Z,{}),a.jsx(i.Z,{}),a.jsx(e,{...t}),a.jsx(s.Z,{})]})};n()}catch(e){n(e)}})},4024:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(997),a=r(6859),o=r.n(a);class s extends o(){render(){return(0,n.jsxs)(a.Html,{lang:"en",children:[(0,n.jsxs)(a.Head,{children:[n.jsx("title",{children:"GreenAcres Yardcare - Franklin, TN | Lawn Care and Landscaping Services"}),n.jsx("meta",{charset:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx("meta",{name:"theme-color",content:"#000000"}),n.jsx("meta",{name:"description",content:"GreenAcres Yardcare in Franklin, TN offers professional lawn care, landscaping services, and christmas lights. We are your trusted partner for maintaining a beautiful and healthy yard. Contact us today for expert lawn care solutions."}),n.jsx("meta",{name:"keywords",content:"GreenAcres Yardcare, Franklin TN, lawn care, landscaping, yard maintenance, lawn services, Franklin landscaping, Tennessee yardcare, Middle TN, cutting grass, christmas lights"}),n.jsx("link",{rel:"icon",href:"/favicon.ico"}),n.jsx("link",{rel:"apple-touch-icon",href:"/logo192.png"}),n.jsx("link",{rel:"manifest",href:"/manifest.json"}),n.jsx("meta",{property:"og:title",content:"GreenAcres Yardcare - Franklin, TN | Lawn Care and Landscaping Services"}),n.jsx("meta",{property:"og:description",content:"GreenAcres Yardcare in Franklin, TN offers professional lawn care, landscaping services, and christmas lights. We are your trusted partner for maintaining a beautiful and healthy yard. Contact us today for expert lawn care solutions."}),n.jsx("meta",{property:"og:url",content:"https://www.greenacresyardcare.com/"})]}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}}let i=s},6448:()=>{},108:()=>{},4597:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2210:e=>{"use strict";e.exports=import("@chakra-ui/react")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[428,31,859],()=>r(8826));module.exports=n})();