(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{925:(e,n,i)=>{Promise.resolve().then(i.t.bind(i,7970,23)),Promise.resolve().then(i.t.bind(i,4839,23)),Promise.resolve().then(i.bind(i,8020)),Promise.resolve().then(i.bind(i,6188)),Promise.resolve().then(i.t.bind(i,6423,23)),Promise.resolve().then(i.t.bind(i,2566,23))},5565:(e,n,i)=>{"use strict";i.d(n,{default:()=>t.a});var a=i(4146),t=i.n(a)},7396:(e,n,i)=>{"use strict";i.d(n,{default:()=>t.a});var a=i(4839),t=i.n(a)},4146:(e,n,i)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i(5849);Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{default:function(){return _},getImageProps:function(){return l}});var t=i(306),c=i(666),o=i(7970),r=t._(i(6623));function l(e){var n=(0,c.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[480,1300],imageSizes:[190,256,384,480,768,1024,1200],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}}).props,i=!0,t=!1,o=void 0;try{for(var l,_=Object.entries(n)[Symbol.iterator]();!(i=(l=_.next()).done);i=!0){var s=a._(l.value,2),p=s[0],g=s[1];void 0===g&&delete n[p]}}catch(e){t=!0,o=e}finally{try{i||null==_.return||_.return()}finally{if(t)throw o}}return{props:n}}var _=o.Image},8020:(e,n,i)=>{"use strict";i.d(n,{default:()=>g});var a=i(5849),t=i(5155),c=i(2115),o=i(5565),r=i(7396),l=i(6133),_=i.n(l),s=i(7579),p=i.n(s);let g=function(e){var n=e.items,i=e.linkUrl,l=e.topSpacing,s=e.btmSpacing,g=e.children,d=(0,a._)((0,c.useState)(null),2),m=d[0],v=d[1],h=function(e){v(m===e?null:e)},u=function(e){var n=/^[a-zA-Z0-9-_\.]+$/,i=Array.from(e).map(function(e){return n.test(e)?e:"_"}).join("");return/^\d/.test(i)&&(i="_"+i),i=i.slice(0,20)};return(0,t.jsxs)("div",{className:[_().accordion,l?p()[l+"TopSpacing"]:"",s?p()[s+"BtmSpacing"]:""].filter(Boolean).join(" "),children:[(0,t.jsx)("h3",{className:_().sectionTitle,children:g}),(0,t.jsxs)("div",{className:_().accordionContainer,children:[n.map(function(e,n){return(0,t.jsxs)("div",{className:"".concat(_().item," ").concat(_()[e.className]),children:[(0,t.jsxs)("button",{id:"title_".concat(u(e.title)),className:"".concat(_().header," ").concat(m===n?_().active:""),onClick:function(){return h(n)},"aria-expanded":m===n?"true":"false","aria-controls":"sect_".concat(u(e.title)),children:[(0,t.jsxs)("h4",{className:_().title,children:[(0,t.jsx)("span",{className:_().serviceIcon,children:(0,t.jsx)(o.default,{src:e.icon,width:"200",height:"200",alt:"",unoptimized:!0})}),e.title]}),(0,t.jsx)("span",{className:_().iconContainer,children:(0,t.jsxs)("span",{className:_().icon,children:[(0,t.jsx)("span",{className:"".concat(_().bar," ").concat(_().horizontal)}),(0,t.jsx)("span",{className:"".concat(_().bar," ").concat(_().vertical)})]})})]}),(0,t.jsx)("div",{id:"sect_".concat(u(e.title)),className:"".concat(_().contentContainer," ").concat(m===n?_().show:""," accordion-content"),role:"region","aria-labelledby":"title_".concat(u(e.title)),inert:m!==n,children:(0,t.jsx)("div",{className:_().content,dangerouslySetInnerHTML:{__html:e.content}})})]},n)}),i&&(0,t.jsxs)(r.default,{href:i,className:_().accordionServiceLink,children:["view all bookkeeping services",(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})]})]})]})}},6188:(e,n,i)=>{"use strict";i.d(n,{default:()=>_});var a=i(5155),t=i(454),c=i(8493),o=i.n(c),r=i(7579),l=i.n(r);let _=function(e){var n=e.style,i=e.topSpacing,c=e.btmSpacing;return(0,a.jsx)("div",{className:[o().ctaContainer,"full-width"===n?o().fullWidth:"",i?l()[i+"TopSpacing"]:"",c?l()[c+"BtmSpacing"]:""].filter(Boolean).join(" "),children:(0,a.jsxs)("p",{className:o().cta,children:["Schedule a ",(0,a.jsx)("button",{className:o().zoom,onClick:function(){Calendly.initPopupWidget({url:"https://calendly.com/ort-brenna/accounting-discussion"})},"aria-label":"Schedule a virtual meeting",role:"button",children:"virtual meeting "}),(0,a.jsxs)("span",{className:"noBreak",children:[" or call",(0,a.jsxs)("a",{className:o().callMe,href:"tel:".concat(t.jn),"aria-label":"Call us at ".concat(t.jn),children:[" ",t.jn]})]})]})})}},454:(e,n,i)=>{"use strict";i.d(n,{DX:()=>c,F3:()=>o,Gz:()=>t,_Q:()=>l,jn:()=>r,o2:()=>a});var a="",t="https://x.com/brennaort",c="https://www.linkedin.com/in/brenna-s-ort-524541298",o="https://www.facebook.com/profile.php?id=61571977112638",r="256-344-4635";"".concat("https://www.brennaort.com").concat(a,"/images/brenna-ort-logo.svg");var l=[{title:"Home",link:"".concat(a,"/")},{title:"Services",link:"".concat(a,"/services/")},{title:"About Me",link:"".concat(a,"/about-me/")},{title:"Contact",link:"".concat(a,"/contact/")},{title:"Resume",link:"".concat(a,"/brenna-ort-resume-2025.pdf")}]},6623:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>t});var a=i(5849);function t(e){var n=e.src,i=e.width,t=(0,a._)(n.split(/\.(?=[^\.]+$)/),2),c=t[0],o=t[1];return"".concat(c,"-").concat(i,".").concat(o)}},6133:e=>{e.exports={accordion:"Accordion_accordion__mZ_hq",item:"Accordion_item__Z8aEq",sectionTitle:"Accordion_sectionTitle__9leAE",accordionServiceLink:"Accordion_accordionServiceLink__pCW02",header:"Accordion_header__pwNT3",active:"Accordion_active__Sxdwh",title:"Accordion_title__ElhT5",iconContainer:"Accordion_iconContainer__NtzYg",icon:"Accordion_icon__sG3l0",bar:"Accordion_bar__yKvma",vertical:"Accordion_vertical__Mo0ex",horizontal:"Accordion_horizontal__ifT9d",contentContainer:"Accordion_contentContainer__pVrK6",content:"Accordion_content__7i9wD",generalLedger:"Accordion_generalLedger__NKSiB",apAr:"Accordion_apAr__PwV0O",reconciliations:"Accordion_reconciliations__yeo7J",expenseTracking:"Accordion_expenseTracking__hWlO_",financialReporting:"Accordion_financialReporting__4o8TI",payrollAssistance:"Accordion_payrollAssistance__QrHrV",show:"Accordion_show__Kfn94",serviceIcon:"Accordion_serviceIcon__ZkG54"}},8493:e=>{e.exports={ctaContainer:"InlineBannerCta_ctaContainer__8Tzpe",fullWidth:"InlineBannerCta_fullWidth__7kpQ7",cta:"InlineBannerCta_cta__8Jr3s",zoom:"InlineBannerCta_zoom__92NH0",callMe:"InlineBannerCta_callMe__D81gL",zoomIcon:"InlineBannerCta_zoomIcon__7P5Hz"}},6423:e=>{e.exports={serviceContainer:"ServiceBlock_serviceContainer__1fknL",service:"ServiceBlock_service__ebhCU",serviceTitleContainer:"ServiceBlock_serviceTitleContainer__RGY7s",serviceSubTitle:"ServiceBlock_serviceSubTitle__lzwoI",serviceTitle:"ServiceBlock_serviceTitle__E9l3v",serviceListUl:"ServiceBlock_serviceListUl__Z29U2",serviceListLi:"ServiceBlock_serviceListLi__jdQrC",bgImage:"ServiceBlock_bgImage__Y6hGF",serviceLink:"ServiceBlock_serviceLink__wrNSK",phoneNumberContainer:"ServiceBlock_phoneNumberContainer___Lfm4",phoneNumber:"ServiceBlock_phoneNumber__SC4r0"}},7579:e=>{e.exports={container:"global_container__dlz_z",innerContainer:"global_innerContainer__ySM_j",siteWrapper:"global_siteWrapper__iiGvj",siteWrapperInner:"global_siteWrapperInner__CvFB3",siteWrapperBreakout:"global_siteWrapperBreakout__2EfIw",highlight:"global_highlight__jqyPV",pageContainer:"global_pageContainer__9VKuL",singleColumn:"global_singleColumn__JC_E1",pageSidebar:"global_pageSidebar__1x4VE",pageContent:"global_pageContent__PyJk6",pageRightContainer:"global_pageRightContainer__tzC7g",pageRightTitle:"global_pageRightTitle__PPGuy",pageRightSidebar:"global_pageRightSidebar__8omWA",pageRightContent:"global_pageRightContent__avTGe",pageRightH1:"global_pageRightH1__p2tgU",xsmTopSpacing:"global_xsmTopSpacing__ZAMGK",smTopSpacing:"global_smTopSpacing__2vsAm",mdTopSpacing:"global_mdTopSpacing__0Eu_X",lgTopSpacing:"global_lgTopSpacing__e45zq",xlgTopSpacing:"global_xlgTopSpacing__xo47P",xsmBtmSpacing:"global_xsmBtmSpacing__iIpWc",smBtmSpacing:"global_smBtmSpacing__iNhw7",mdBtmSpacing:"global_mdBtmSpacing__RMIST",lgBtmSpacing:"global_lgBtmSpacing__N8EjA",xlgBtmSpacing:"global_xlgBtmSpacing__TGVlf"}},2566:e=>{e.exports={pageContainer:"services_pageContainer__54kTn",pageContent:"services_pageContent__AR7w7",services:"services_services__5okBJ",banner:"services_banner__SEoEM",bannerContent:"services_bannerContent__cf95D",bannerTitle:"services_bannerTitle__qYEBr",phraseNotary:"services_phraseNotary__Pr8Ya",phraseBookkeeping:"services_phraseBookkeeping__P6Qml",phraseEtowah:"services_phraseEtowah__MKLQW",bannerBG:"services_bannerBG__SDGYN",bannerBGImage:"services_bannerBGImage__Q_EB_",contactFormHR:"services_contactFormHR__TRwE1",spacerBlocks:"services_spacerBlocks__42fHz",spacerAccordion:"services_spacerAccordion__MDm6q"}}},e=>{var n=n=>e(e.s=n);e.O(0,[909,74,441,517,358],()=>n(925)),_N_E=e.O()}]);