(()=>{var e={};e.id=888,e.ids=[888],e.modules={6955:e=>{e.exports={button:"Button_button__aJ0V6",buttonPrimary:"Button_buttonPrimary__oyIwZ",buttonOutline:"Button_buttonOutline__EUnWU",buttonMedium:"Button_buttonMedium__Nx8_3",buttonLarge:"Button_buttonLarge__BfAxG"}},6433:e=>{e.exports={footerContainer:"Footer_footerContainer__0uLcn",footerSubscription:"Footer_footerSubscription__GEC9o",footerSubscriptionHeading:"Footer_footerSubscriptionHeading__aMfuD",footerSubscriptionText:"Footer_footerSubscriptionText__88GQM",footerInput:"Footer_footerInput__WOTqX",footerLinks:"Footer_footerLinks__4RPn7",footerLinkWrapper:"Footer_footerLinkWrapper__k4f6y",footerLinkItems:"Footer_footerLinkItems__vJqD8",footerLinkItemsHeader:"Footer_footerLinkItemsHeader__J3DBy",footerEmailForm:"Footer_footerEmailForm__e47rg",socialIconLink:"Footer_socialIconLink__DraHO",socialMedia:"Footer_socialMedia__CYoOd",socialMediaWrap:"Footer_socialMediaWrap__XYq3Q",socialIcons:"Footer_socialIcons__P2yvi",websiteRights:"Footer_websiteRights__JFfu3",btn:"Footer_btn__9IAlu"}},6567:e=>{e.exports={navbar:"Navbar_navbar__fk_p7",navbarContainer:"Navbar_navbarContainer__WLqsU",navbarLogo:"Navbar_navbarLogo__5jox1",faTypo3:"Navbar_faTypo3__fhpY7",navMenu:"Navbar_navMenu__45Z1_",navItem:"Navbar_navItem__mQUmI",navLinks:"Navbar_navLinks__F_HK7",faXmark:"Navbar_faXmark__VMB_y",faBars:"Navbar_faBars__pmQW2",navLinksMobile:"Navbar_navLinksMobile__o9_8f",menuIcon:"Navbar_menuIcon__zLcNv",navbarItems:"Navbar_navbarItems__mf__B",active:"Navbar_active__ZTgb8"}},7073:(e,r,t)=>{"use strict";t.d(r,{z:()=>u});var n=t(997);t(6689);var s=t(6955),a=t.n(s),o=t(1664),i=t.n(o);let c=["buttonPrimary","buttonOutline"],l=["buttonMedium","buttonLarge"],u=({children:e,type:r,onClick:t,buttonStyle:s,buttonSize:o})=>{let u=c.includes(s)?s:c[0],_=l.includes(o)?o:l[0];return n.jsx(i(),{href:"/signup",passHref:!0,className:a().btnMobile,children:n.jsx("button",{className:`${a().button} ${a()[u]} ${a()[_]}`,onClick:t,type:r,children:e})})}},33:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var n=t(997);t(6689);var s=t(7073),a=t(6433),o=t.n(a),i=t(1664),c=t.n(i);let l=function(){return(0,n.jsxs)("div",{className:o().footerContainer,children:[(0,n.jsxs)("section",{className:o().footerSubscription,children:[n.jsx("p",{className:o().footerSubscriptionHeading,children:"Join the Landscaping newsletter to receive our best deals"}),n.jsx("p",{className:o().footerSubscriptionText,children:"You can unsubscribe at any time."}),n.jsx("div",{className:o().inputAreas,children:(0,n.jsxs)("form",{name:"newsletter-signup",method:"POST","data-netlify":"true",onSubmit:e=>{e.preventDefault();let r=new FormData(e.target),t=Object.fromEntries(r);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(t).toString()}).then(()=>console.log("Form successfully submitted")).catch(e=>alert(e))},children:[n.jsx("input",{type:"hidden",name:"form-name",value:"newsletter-signup"}),n.jsx("input",{className:o().footerInput,name:"email",type:"email",placeholder:"Your Email",required:!0}),n.jsx(s.z,{type:"submit",buttonStyle:"buttonOutline",children:"Subscribe"})]})})]}),(0,n.jsxs)("div",{className:o().footerLinks,children:[n.jsx("div",{className:o().footerLinkItemsHeader,children:n.jsx("p",{children:n.jsx("strong",{children:"Socials"})})}),n.jsx("div",{className:o().footerLinkWrapper,children:(0,n.jsxs)("div",{className:o().footerLinkItems,children:[n.jsx("a",{href:"https://instagram.com/greenacres_yardcare",target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),n.jsx("a",{href:"https://www.facebook.com/GreenAcresYardcare",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})})]}),n.jsx("section",{className:o().socialMedia,children:(0,n.jsxs)("div",{className:o().socialMediaWrap,children:[n.jsx("div",{children:n.jsx(c(),{href:"/",children:"GreenAcres"})}),n.jsx("small",{className:o().websiteRights,children:"GreenAcres Yardcare \xa9 2023"})]})})]})}},1977:(e,r,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.d(r,{Z:()=>b});var s=t(997),a=t(6689),o=t(1664),i=t.n(o),c=t(7197),l=t(4563),u=t(7073),_=t(6567),d=t.n(_),m=e([l]);l=(m.then?(await m)():m)[0];let b=function(){let[e,r]=(0,a.useState)(!1),[t,n]=(0,a.useState)(!0),o=()=>r(!1),_=()=>{n(!0)};return(0,a.useEffect)(()=>{_();let e=()=>_();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),s.jsx("nav",{className:d().navbar,children:(0,s.jsxs)("div",{className:d().navbarContainer,children:[s.jsx(i(),{href:"/",className:d().navbarLogo,onClick:o,children:"GreenAcres"}),s.jsx("div",{className:d().menuIcon,onClick:()=>r(!e),children:s.jsx(c.FontAwesomeIcon,{icon:e?l.faXmark:l.faBars})}),(0,s.jsxs)("ul",{className:e?`${d().navMenu} ${d().active}`:d().navMenu,children:[s.jsx("li",{children:s.jsx(i(),{href:"/home",className:d().navLinks,onClick:o,children:"Home"})}),s.jsx("li",{children:s.jsx(i(),{href:"/services",className:d().navLinks,onClick:o,children:"Services"})}),s.jsx("li",{children:s.jsx(i(),{href:"/aboutus",className:d().navLinks,onClick:o,children:"About Us"})}),s.jsx("li",{children:s.jsx(i(),{href:"/signup",className:d().navLinksMobile,onClick:o,children:"Request Quote"})})]}),t&&s.jsx(u.z,{buttonStyle:"buttonOutline",children:"Contact Us"})]})})};n()}catch(e){n(e)}})},8680:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var n=t(6689),s=t(1163);function a(){let e=(0,s.useRouter)();return(0,n.useEffect)(()=>{let r=()=>{window.scrollTo(0,0)};return e.events.on("routeChangeComplete",r),()=>{e.events.off("routeChangeComplete",r)}},[e.events]),null}},8397:(e,r,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.r(r),t.d(r,{default:()=>d});var s=t(997);t(6448),t(108),t(4597);var a=t(1977),o=t(33),i=t(8680);t(5800);var c=t(2210),l=t(968),u=t.n(l),_=e([a,c]);[a,c]=_.then?(await _)():_;let d=function({Component:e,pageProps:r}){return(0,s.jsxs)(c.ChakraProvider,{children:[s.jsx(u(),{children:s.jsx("title",{children:"GreenAcres Yardcare - Franklin, TN | Lawn Care and Landscaping Services"})}),s.jsx(a.Z,{}),s.jsx(i.Z,{}),s.jsx(e,{...r}),s.jsx(o.Z,{})]})};n()}catch(e){n(e)}})},6448:()=>{},108:()=>{},4597:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2210:e=>{"use strict";e.exports=import("@chakra-ui/react")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[428,31],()=>t(8397));module.exports=n})();