(()=>{var e={};e.id=888,e.ids=[888],e.modules={6955:e=>{e.exports={button:"Button_button__aJ0V6",buttonPrimary:"Button_buttonPrimary__oyIwZ",buttonOutline:"Button_buttonOutline__EUnWU",buttonMedium:"Button_buttonMedium__Nx8_3",buttonLarge:"Button_buttonLarge__BfAxG"}},6433:e=>{e.exports={footerContainer:"Footer_footerContainer__0uLcn",footerSubscription:"Footer_footerSubscription__GEC9o",footerSubscriptionHeading:"Footer_footerSubscriptionHeading__aMfuD",footerSubscriptionText:"Footer_footerSubscriptionText__88GQM",footerInput:"Footer_footerInput__WOTqX",footerLinks:"Footer_footerLinks__4RPn7",footerLinkWrapper:"Footer_footerLinkWrapper__k4f6y",footerLinkItems:"Footer_footerLinkItems__vJqD8",footerLinkItemsHeader:"Footer_footerLinkItemsHeader__J3DBy",footerEmailForm:"Footer_footerEmailForm__e47rg",socialIconLink:"Footer_socialIconLink__DraHO",socialMedia:"Footer_socialMedia__CYoOd",socialMediaWrap:"Footer_socialMediaWrap__XYq3Q",socialIcons:"Footer_socialIcons__P2yvi",websiteRights:"Footer_websiteRights__JFfu3",button:"Footer_button__Lh4d_",buttonPrimary:"Footer_buttonPrimary__dA1xh",buttonOutline:"Footer_buttonOutline__QhOU7",buttonMedium:"Footer_buttonMedium__fvlwt",buttonLarge:"Footer_buttonLarge__p8zwW",btn:"Footer_btn__9IAlu"}},6567:e=>{e.exports={navbar:"Navbar_navbar__fk_p7",navbarContainer:"Navbar_navbarContainer__WLqsU",navbarLogo:"Navbar_navbarLogo__5jox1",faTypo3:"Navbar_faTypo3__fhpY7",navMenu:"Navbar_navMenu__45Z1_",navItem:"Navbar_navItem__mQUmI",navLinks:"Navbar_navLinks__F_HK7",faXmark:"Navbar_faXmark__VMB_y",faBars:"Navbar_faBars__pmQW2",navLinksMobile:"Navbar_navLinksMobile__o9_8f",menuIcon:"Navbar_menuIcon__zLcNv",navbarItems:"Navbar_navbarItems__mf__B",active:"Navbar_active__ZTgb8"}},7073:(e,r,t)=>{"use strict";t.d(r,{z:()=>u});var n=t(997);t(6689);var o=t(6955),s=t.n(o),a=t(1664),i=t.n(a);let c=["buttonPrimary","buttonOutline"],l=["buttonMedium","buttonLarge"],u=({children:e,type:r,onClick:t,buttonStyle:o,buttonSize:a})=>{let u=c.includes(o)?o:c[0],_=l.includes(a)?a:l[0];return n.jsx(i(),{href:"/signup",passHref:!0,className:s().btnMobile,children:n.jsx("button",{className:`${s().button} ${s()[u]} ${s()[_]}`,onClick:t,type:r,children:e})})}},33:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(997);t(6689);var o=t(6433),s=t.n(o),a=t(1664),i=t.n(a);let c=function(){return(0,n.jsxs)("div",{className:s().footerContainer,children:[(0,n.jsxs)("section",{className:s().footerSubscription,children:[n.jsx("p",{className:s().footerSubscriptionHeading,children:"Join the Landscaping newsletter to receive our best deals"}),n.jsx("p",{className:s().footerSubscriptionText,children:"You can unsubscribe at any time."}),n.jsx("div",{className:s().inputAreas,children:(0,n.jsxs)("form",{name:"newsletter-signup",method:"POST","data-netlify":"true",onSubmit:e=>{e.preventDefault();let r=new FormData(e.target),t=Object.fromEntries(r);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(t).toString()}).then(()=>console.log("Form successfully submitted")).catch(e=>alert(e))},children:[n.jsx("input",{type:"hidden",name:"form-name",value:"newsletter-signup"}),n.jsx("input",{className:s().footerInput,name:"email",type:"email",placeholder:"Your Email",required:!0}),n.jsx("button",{type:"submit",className:s().buttonOutline,children:"Subscribe"})]})})]}),(0,n.jsxs)("div",{className:s().footerLinks,children:[n.jsx("div",{className:s().footerLinkItemsHeader,children:n.jsx("p",{children:n.jsx("strong",{children:"Socials"})})}),n.jsx("div",{className:s().footerLinkWrapper,children:(0,n.jsxs)("div",{className:s().footerLinkItems,children:[n.jsx("a",{href:"https://instagram.com/greenacres_yardcare",target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),n.jsx("a",{href:"https://www.facebook.com/GreenAcresYardcare",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})})]}),n.jsx("section",{className:s().socialMedia,children:(0,n.jsxs)("div",{className:s().socialMediaWrap,children:[n.jsx("div",{children:n.jsx(i(),{href:"/",children:"GreenAcres"})}),n.jsx("small",{className:s().websiteRights,children:"GreenAcres Yardcare \xa9 2023"})]})})]})}},1977:(e,r,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.d(r,{Z:()=>b});var o=t(997),s=t(6689),a=t(1664),i=t.n(a),c=t(7197),l=t(4563),u=t(7073),_=t(6567),d=t.n(_),m=e([l]);l=(m.then?(await m)():m)[0];let b=function(){let[e,r]=(0,s.useState)(!1),[t,n]=(0,s.useState)(!0),a=()=>r(!1),_=()=>{n(!0)};return(0,s.useEffect)(()=>{_();let e=()=>_();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o.jsx("nav",{className:d().navbar,children:(0,o.jsxs)("div",{className:d().navbarContainer,children:[o.jsx(i(),{href:"/",className:d().navbarLogo,onClick:a,children:"GreenAcres"}),o.jsx("div",{className:d().menuIcon,onClick:()=>r(!e),children:o.jsx(c.FontAwesomeIcon,{icon:e?l.faXmark:l.faBars})}),(0,o.jsxs)("ul",{className:e?`${d().navMenu} ${d().active}`:d().navMenu,children:[o.jsx("li",{children:o.jsx(i(),{href:"/home",className:d().navLinks,onClick:a,children:"Home"})}),o.jsx("li",{children:o.jsx(i(),{href:"/services",className:d().navLinks,onClick:a,children:"Services"})}),o.jsx("li",{children:o.jsx(i(),{href:"/aboutus",className:d().navLinks,onClick:a,children:"About Us"})}),o.jsx("li",{children:o.jsx(i(),{href:"/signup",className:d().navLinksMobile,onClick:a,children:"Request Quote"})})]}),t&&o.jsx(u.z,{buttonStyle:"buttonOutline",children:"Contact Us"})]})})};n()}catch(e){n(e)}})},8680:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(6689),o=t(1163);function s(){let e=(0,o.useRouter)();return(0,n.useEffect)(()=>{let r=()=>{window.scrollTo(0,0)};return e.events.on("routeChangeComplete",r),()=>{e.events.off("routeChangeComplete",r)}},[e.events]),null}},8397:(e,r,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.r(r),t.d(r,{default:()=>d});var o=t(997);t(6448),t(108),t(4597);var s=t(1977),a=t(33),i=t(8680);t(5800);var c=t(2210),l=t(968),u=t.n(l),_=e([s,c]);[s,c]=_.then?(await _)():_;let d=function({Component:e,pageProps:r}){return(0,o.jsxs)(c.ChakraProvider,{children:[o.jsx(u(),{children:o.jsx("title",{children:"GreenAcres Yardcare - Franklin, TN | Lawn Care and Landscaping Services"})}),o.jsx(s.Z,{}),o.jsx(i.Z,{}),o.jsx(e,{...r}),o.jsx(a.Z,{})]})};n()}catch(e){n(e)}})},6448:()=>{},108:()=>{},4597:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2210:e=>{"use strict";e.exports=import("@chakra-ui/react")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[428,31],()=>t(8397));module.exports=n})();