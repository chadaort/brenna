(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9968:(e,a,n)=>{Promise.resolve().then(n.bind(n,7242))},3704:(e,a,n)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var n in a)Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}(a,{default:function(){return f},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return p}});let t=n(306),s=n(9955),r=n(5155),l=t._(n(7650)),i=s._(n(2115)),o=n(1147),c=n(2815),_=n(8571),d=new Map,h=new Set,u=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let a=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,a.appendChild(n)})}},m=e=>{let{src:a,id:n,onLoad:t=()=>{},onReady:s=null,dangerouslySetInnerHTML:r,children:l="",strategy:i="afterInteractive",onError:o,stylesheets:_}=e,m=n||a;if(m&&h.has(m))return;if(d.has(a)){h.add(m),d.get(a).then(t,o);return}let g=()=>{s&&s(),h.add(m)},p=document.createElement("script"),v=new Promise((e,a)=>{p.addEventListener("load",function(a){e(),t&&t.call(this,a),g()}),p.addEventListener("error",function(e){a(e)})}).catch(function(e){o&&o(e)});r?(p.innerHTML=r.__html||"",g()):l?(p.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",g()):a&&(p.src=a,d.set(a,v)),(0,c.setAttributesFromProps)(p,e),"worker"===i&&p.setAttribute("type","text/partytown"),p.setAttribute("data-nscript",i),_&&u(_),document.body.appendChild(p)};function g(e){let{strategy:a="afterInteractive"}=e;"lazyOnload"===a?window.addEventListener("load",()=>{(0,_.requestIdleCallback)(()=>m(e))}):m(e)}function p(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let a=e.id||e.getAttribute("src");h.add(a)})}function v(e){let{id:a,src:n="",onLoad:t=()=>{},onReady:s=null,strategy:c="afterInteractive",onError:d,stylesheets:u,...g}=e,{updateScripts:p,scripts:v,getIsSsr:f,appDir:N,nonce:x}=(0,i.useContext)(o.HeadManagerContext),j=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=a||n;j.current||(s&&e&&h.has(e)&&s(),j.current=!0)},[s,a,n]);let y=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!y.current&&("afterInteractive"===c?m(e):"lazyOnload"===c&&("complete"===document.readyState?(0,_.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,_.requestIdleCallback)(()=>m(e))})),y.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(p?(v[c]=(v[c]||[]).concat([{id:a,src:n,onLoad:t,onReady:s,onError:d,...g}]),p(v)):f&&f()?h.add(a||n):f&&!f()&&m(e)),N){if(u&&u.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(l.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:x,crossOrigin:g.crossOrigin}:{as:"script",nonce:x,crossOrigin:g.crossOrigin}),(0,r.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...g,id:a}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,r.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:a}])+")"}}));"afterInteractive"===c&&n&&l.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:x,crossOrigin:g.crossOrigin}:{as:"script",nonce:x,crossOrigin:g.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let f=v;("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},2815:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"setAttributesFromProps",{enumerable:!0,get:function(){return r}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},t=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function s(e){return["async","defer","noModule"].includes(e)}function r(e,a){for(let[r,l]of Object.entries(a)){if(!a.hasOwnProperty(r)||t.includes(r)||void 0===l)continue;let i=n[r]||r.toLowerCase();"SCRIPT"===e.tagName&&s(i)?e[i]=!!l:e.setAttribute(i,String(l)),(!1===l||"SCRIPT"===e.tagName&&s(i)&&(!l||"false"===l))&&(e.setAttribute(i,""),e.removeAttribute(i))}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},454:(e,a,n)=>{"use strict";n.d(a,{DX:()=>r,Gz:()=>s,hS:()=>l,o2:()=>t});let t="/brenna",s="https://x.com/brennaort",r="https://www.linkedin.com/in/brenna-s-ort-524541298",l="https://bookkeeper.community/members/30420221"},7242:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>R});var t=n(5155),s=n(2115),r=n(3704),l=n.n(r),i=n(532),o=n.n(i),c=n(8815),_=n.n(c),d=n(1771),h=n.n(d),u=n(2528),m=n.n(u),g=n(9084),p=n.n(g),v=n(6658),f=n(4839),N=n.n(f),x=n(5565),j=n(454),y=n(2237),b=n.n(y),M=n(4352),w=n.n(M);function C(e){let{menuOpen:a,setMenuOpen:n,toggleMenu:s}=e,r=(0,v.usePathname)();return(0,t.jsx)("header",{className:"".concat(b().header," ").concat(a?b().menuOpen:""," ").concat("/hire-me/"===r?b().openBottom:""),children:(0,t.jsx)("div",{className:w().siteWrapperInner,children:(0,t.jsx)("div",{className:b().headerContainer,children:(0,t.jsxs)("div",{className:b().headerWrapper,children:[(0,t.jsx)("div",{className:b().leftSide,children:(0,t.jsxs)(N(),{className:b().alt_menuToggle,onClick:s,href:"#",children:[(0,t.jsxs)("div",{className:"".concat(b().alt_menuToggleIconContainer," ").concat(a?b().active:""),children:[(0,t.jsx)("div",{className:b().bar}),(0,t.jsx)("div",{className:b().bar}),(0,t.jsx)("div",{className:b().bar})]}),(0,t.jsx)("span",{className:b().alt_menuToggleText,children:"Menu"})]})}),(0,t.jsx)("div",{className:b().alt_logo,children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/"),className:b().alt_logo,onClick:()=>n(!1),children:(0,t.jsx)(x.default,{src:"".concat(j.o2,"/images/brenna-ort-logo-alt-3.svg"),width:"244",height:"107",alt:"Brenna Ort Logo"})})}),(0,t.jsx)("div",{className:b().rightSide,children:(0,t.jsx)("div",{className:b().hireMe,children:(0,t.jsxs)(N(),{href:"".concat(j.o2,"/hire-me/"),className:b().hireMeA,onClick:()=>n(!1),children:[(0,t.jsxs)("span",{className:b().hireMeIcon,children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:b().svgIcon,viewBox:"0 0 60 60",children:(0,t.jsx)("path",{className:"stroke-path",d:"M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"})}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(b().svgIcon," ").concat(b().svgIconOutline),viewBox:"0 0 60 60",children:(0,t.jsx)("path",{className:"stroke-path",d:"M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"})})]}),(0,t.jsx)("span",{className:b().hireMeText,children:"Hire Me"})]})})})]})})})})}var I=n(2929),H=n.n(I);function O(){return(0,t.jsxs)("footer",{className:H().footer,children:[(0,t.jsxs)("div",{className:H().copyright,children:["\xa9 ",new Date().getFullYear(),(0,t.jsx)("span",{className:H().copyrightLogo,children:(0,t.jsx)(x.default,{className:H().copyrightLogoImg,src:"".concat(j.o2,"/images/brenna-ort-logo-basic.svg"),width:"330",height:"83",alt:"Brenna S. Ort"})}),(0,t.jsx)("span",{className:"noBreak",children:"All rights reserved."})]}),(0,t.jsx)("nav",{className:H().nav,children:(0,t.jsxs)("ul",{className:H().menu,children:[(0,t.jsx)("li",{children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/"),children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/about-me/"),children:"About Me"})}),(0,t.jsx)("li",{children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/contact/"),children:"Contact"})}),(0,t.jsx)("li",{children:(0,t.jsx)(N(),{href:"#",children:"Resume"})})]})})]})}var S=n(5029),L=n.n(S);function T(e){let{menuOpen:a,setMenuOpen:n,menuGotClosed:r}=e,[l,i]=(0,s.useState)(!1),[o,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{r&&(i(!1),c(!1))},[r]),(0,t.jsx)("div",{className:"".concat(L().mainMenu," ").concat(a?L().mainMenuOpen:""," "),onTransitionEnd:()=>{a&&i(!0)},children:a&&(0,t.jsxs)("div",{className:w().siteWrapperInner,children:[a&&(0,t.jsx)("hr",{className:L().headerBorder}),(0,t.jsxs)("div",{className:"".concat(L().mainMenuContainer," ").concat(l?L().mainMenuActive:""),children:[(0,t.jsx)("nav",{className:"".concat(L().mainNav," ").concat(o?L().mainNavReady:""),children:(0,t.jsxs)("ul",{className:L().mainNavUl,children:[(0,t.jsx)("li",{className:L().mainNavLi,children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/"),className:L().mainNavA,onClick:()=>n(!1),children:"Home"})}),(0,t.jsx)("li",{className:L().mainNavLi,children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/about-me/"),className:L().mainNavA,onClick:()=>n(!1),children:"About Me"})}),(0,t.jsx)("li",{className:L().mainNavLi,children:(0,t.jsx)(N(),{href:"".concat(j.o2,"/contact/"),className:L().mainNavA,onClick:()=>n(!1),children:"Contact"})}),(0,t.jsx)("li",{className:L().mainNavLi,children:(0,t.jsx)(N(),{href:"#",className:L().mainNavA,children:"Resume"})})]})}),(0,t.jsxs)("nav",{className:L().socialNav,children:[(0,t.jsx)("span",{className:"".concat(L().socialNavBar," ").concat(l?L().socialNavBarReady:""),onTransitionEnd:()=>c(!0),children:"Find me online"}),(0,t.jsxs)("ul",{className:"".concat(L().socialNavUl," ").concat(o?L().socialNavUlReady:""),children:[(0,t.jsx)("li",{className:L().socialNavLi,children:(0,t.jsx)(N(),{href:j.DX,className:L().socialNavA,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(L().socialNavSVG," ").concat(L().LinkedIn),viewBox:"0 0 448 512",children:(0,t.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})})}),(0,t.jsx)("li",{className:L().socialNavLi,children:(0,t.jsx)(N(),{href:j.Gz,className:L().socialNavA,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(L().socialNavSVG," ").concat(L().twitter),viewBox:"0 0 512 512",children:(0,t.jsx)("path",{d:"M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"})})})}),(0,t.jsx)("li",{className:L().socialNavLi,children:(0,t.jsx)(N(),{href:j.hS,className:L().socialNavA,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(L().socialNavSVG," ").concat(L().bookkeeper),viewBox:"0 0 368.000000 381.000000",preserveAspectRatio:"xMidYMid meet",children:(0,t.jsx)("g",{transform:"translate(0.000000,381.000000) scale(0.100000,-0.100000)",children:(0,t.jsx)("path",{d:"M1335 3672 c-225 -70 -619 -193 -874 -272 l-463 -145 5 -660 c6 -683 14 -847 47 -975 61 -239 220 -537 403 -757 286 -342 670 -604 1177 -803 174 -68 219 -70 364 -15 427 160 788 387 1076 675 189 189 304 349 421 585 132 268 151 401 169 1190 5 253 11 525 14 605 l3 145 -186 59 c-190 60 -421 128 -477 140 l-32 7 -5 -878 c-6 -789 -12 -991 -31 -1010 -12 -13 -99 37 -314 180 l-223 149 -137 -90 c-247 -160 -374 -232 -414 -232 -35 0 -36 19 -47 1041 -5 498 -13 969 -17 1047 -6 136 -8 142 -28 141 -12 0 -205 -57 -431 -127z"})})})})})]})]})]})]})})}function R(e){let{children:a}=e,[n,r]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1);return(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("link",{href:"https://assets.calendly.com/assets/external/widget.css",rel:"stylesheet"}),(0,t.jsx)(l(),{src:"https://assets.calendly.com/assets/external/widget.js"})]}),(0,t.jsx)("body",{className:"".concat(m().className," ").concat(p().className," ").concat(h().className," ").concat(_().className," ").concat(o().className),style:{overflow:n?"hidden":""},children:(0,t.jsxs)("div",{className:w().siteWrapper,children:[(0,t.jsx)(T,{menuOpen:n,setMenuOpen:r,menuGotClosed:i}),(0,t.jsx)(C,{toggleMenu:()=>{c(n),r(!n),n||window.scrollTo({top:0,behavior:"smooth"})},menuOpen:n,setMenuOpen:r}),(0,t.jsx)("div",{className:w().siteWrapperInner,children:a}),(0,t.jsx)(O,{})]})})]})}n(2032)},2032:()=>{},2929:e=>{e.exports={footer:"Footer_footer__sX4Wr",copyright:"Footer_copyright__Bdlh1",copyrightLogo:"Footer_copyrightLogo__UZT8o",copyrightLogoImg:"Footer_copyrightLogoImg__dqwOo",nav:"Footer_nav__ZHn1S",menu:"Footer_menu__YqEKw"}},2237:e=>{e.exports={headerWrapper:"Header_headerWrapper__12MrI",alt_menu:"Header_alt_menu__Pn_Cd",alt_menuUl:"Header_alt_menuUl___IDYr",alt_menuLi:"Header_alt_menuLi__Tgf23",alt_menuA:"Header_alt_menuA__Po6_A",alt_logo:"Header_alt_logo__e_qI1",hireMe:"Header_hireMe__y_JoL",alt_menuToggle:"Header_alt_menuToggle__eiFYh",alt_menuToggleText:"Header_alt_menuToggleText__oOzwh",menuOpen:"Header_menuOpen__7WFXO",alt_menuToggleIconContainer:"Header_alt_menuToggleIconContainer__mVQWP",alt_menuToggleIcon:"Header_alt_menuToggleIcon__n318i",bar:"Header_bar__AThDk",active:"Header_active__rWiBf",rightSide:"Header_rightSide__UQkkX",header:"Header_header__kbMt1",openBottom:"Header_openBottom__6_uR7",headerContainer:"Header_headerContainer___7RT1",logoMenu:"Header_logoMenu__AidNg",menu:"Header_menu__2Be3s",menuToggle:"Header_menuToggle__r_aEH",logo:"Header_logo__aQUE4",hireMeA:"Header_hireMeA__Ph6j3",hireMeIcon:"Header_hireMeIcon__la6bm",hireMeText:"Header_hireMeText__dsSbk",svgIcon:"Header_svgIcon__garUz",svgIconOutline:"Header_svgIconOutline__B3_DG"}},5029:e=>{e.exports={mainMenu:"Menu_mainMenu__GmKTP",headerBorder:"Menu_headerBorder__s2tyf",mainMenuOpen:"Menu_mainMenuOpen__IiSRR",mainMenuContainer:"Menu_mainMenuContainer___2Rxj",mainNav:"Menu_mainNav___KHXH",mainNavUl:"Menu_mainNavUl__XdbLy",mainNavLi:"Menu_mainNavLi__NWB16",mainNavReady:"Menu_mainNavReady__stQCS",mainNavA:"Menu_mainNavA__KtOFn",socialNav:"Menu_socialNav__lBqpy",socialNavBar:"Menu_socialNavBar__Jrucx",socialNavBarReady:"Menu_socialNavBarReady__Uh2qk",socialNavUl:"Menu_socialNavUl__2M40H",socialNavLi:"Menu_socialNavLi__IcwZ_",socialNavUlReady:"Menu_socialNavUlReady__REvTb",ready:"Menu_ready__JAzu6",socialNavSVG:"Menu_socialNavSVG__Tg9ny",socialReady:"Menu_socialReady__FC_lE",socialNavA:"Menu_socialNavA__4ywtJ"}},4352:e=>{e.exports={container:"global_container__U8osQ",innerContainer:"global_innerContainer__m3BS1",siteWrapper:"global_siteWrapper__RR_96",siteWrapperInner:"global_siteWrapperInner__UhDps",siteWrapperBreakout:"global_siteWrapperBreakout__gs0wa",xxxsectionTitle:"global_xxxsectionTitle__m2ASi",highlight:"global_highlight__50kaY",pageContainer:"global_pageContainer__huh_O",pageSidebar:"global_pageSidebar__dOfXM",pageContent:"global_pageContent__26xIc",pageRightContainer:"global_pageRightContainer__dYbEu",pageRightTitle:"global_pageRightTitle__3_r52",pageRightSidebar:"global_pageRightSidebar__7cUPR",pageRightContent:"global_pageRightContent__ANJ5j",pageRightH1:"global_pageRightH1__LCVji"}},532:e=>{e.exports={style:{fontFamily:"'Lora', 'Lora Fallback'"},className:"__className_2d8e5f"}},8815:e=>{e.exports={style:{fontFamily:"'Merriweather', 'Merriweather Fallback'"},className:"__className_40d8fe"}},2528:e=>{e.exports={style:{fontFamily:"'Open Sans', 'Open Sans Fallback'"},className:"__className_70314f"}},1771:e=>{e.exports={style:{fontFamily:"'Playfair Display', 'Playfair Display Fallback'"},className:"__className_971cf4"}},9084:e=>{e.exports={style:{fontFamily:"'Roboto', 'Roboto Fallback'"},className:"__className_1ba784"}}},e=>{var a=a=>e(e.s=a);e.O(0,[948,333,922,303,392,565,839,441,517,358],()=>a(9968)),_N_E=e.O()}]);