(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{9326:(e,t,a)=>{"use strict";a.d(t,{default:()=>R});var r=a(5155),s=a(2115),o=a(5565);class i{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let l={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},m=async(e,t,a={})=>{let r=await fetch(l.origin+e,{method:"POST",headers:a,body:t}),s=await r.text(),o=new i(r.status,s);if(r.ok)return o;throw o},c=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},g=e=>e.webdriver||!e.languages||0===e.languages.length,_=()=>new i(451,"Unavailable For Headless Browser"),d=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},h=e=>!e.list?.length||!e.watchVariable,p=(e,t)=>e instanceof FormData?e.get(t):e[t],u=(e,t)=>{if(h(e))return!1;d(e.list,e.watchVariable);let a=p(t,e.watchVariable);return"string"==typeof a&&e.list.includes(a)},b=()=>new i(403,"Forbidden"),f=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},C=async(e,t,a)=>{let r=Number(await a.get(e)||0);return t-Date.now()+r},x=async(e,t,a)=>{if(!t.throttle||!a)return!1;f(t.throttle,t.id);let r=t.id||e;return await C(r,t.throttle,a)>0||(await a.set(r,Date.now().toString()),!1)},y=()=>new i(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},F=e=>"string"==typeof e?document.querySelector(e):e,v={sendForm:async(e,t,a,r)=>{let s=n(r),o=s.publicKey||l.publicKey,i=s.blockHeadless||l.blockHeadless,d=l.storageProvider||s.storageProvider,h={...l.blockList,...s.blockList},p={...l.limitRate,...s.limitRate};if(i&&g(navigator))return Promise.reject(_());let f=F(a);c(o,e,t),w(f);let C=new FormData(f);return u(h,C)?Promise.reject(b()):await x(location.pathname,p,d)?Promise.reject(y()):(C.append("lib_version","4.4.1"),C.append("service_id",e),C.append("template_id",t),C.append("user_id",o),m("/api/v1.0/email/send-form",C))}};var j=a(454),S=a(9441),M=a.n(S);a(4352);let N={title:"Thanks for your message",body:"I normally respond within a couple of business hours."},k={title:"We ran into an error",body:"There was an error sending your message."},R=()=>{let[e,t]=(0,s.useState)(!1),[a,i]=(0,s.useState)(!1),[l,n]=(0,s.useState)(""),[m,c]=(0,s.useState)(""),[g,_]=(0,s.useState)(""),d=(0,s.useRef)();return(0,r.jsx)("div",{className:M().formWrapperInner,children:(0,r.jsxs)("div",{className:M().formContainer,children:[(e||a)&&(0,r.jsxs)("div",{className:"".concat(M().formMessage," ").concat(e?M().formMessageSuccess:M().formMessageError),children:[(0,r.jsx)("div",{className:M().formMessageIcon,children:(0,r.jsx)(o.default,{src:"".concat(j.o2,"/images/").concat(e?"success":"error","-msg-bg.png"),width:"300",height:"267",alt:""})}),(0,r.jsxs)("div",{className:M().formMessageContent,children:[(0,r.jsx)("h3",{className:M().formMessageTitle,children:e?N.title:k.title}),(0,r.jsx)("p",{className:M().formMessageBody,children:e?N.body:k.body})]})]}),(0,r.jsxs)("form",{ref:d,className:"".concat(M().form," ").concat(e||a?M().disabled:""),onSubmit:e=>{e.preventDefault(),v.sendForm("service_d7agxc3","template_oajhg4k",d.current,{publicKey:"9sgmp-ExbSw-RZ1rp"}).then(()=>t(!0),e=>i(!0))},children:[(0,r.jsx)("div",{className:M().formControl,children:(0,r.jsxs)("fieldset",{className:M().fieldset,children:[(0,r.jsx)("label",{className:M().label,htmlFor:"user_name",children:"Name"}),(0,r.jsx)("input",{className:M().input,type:"text",name:"user_name",placeholder:"Name",autoComplete:"name",value:l,onChange:e=>n(e.target.value),disabled:e||a})]})}),(0,r.jsxs)("fieldset",{className:M().fieldset,children:[(0,r.jsx)("label",{className:M().label,htmlFor:"user_email",children:"Email"}),(0,r.jsx)("input",{className:M().input,type:"email",name:"user_email",placeholder:"Email address",autoComplete:"email",value:m,onChange:e=>c(e.target.value),disabled:e||a})]}),(0,r.jsxs)("fieldset",{className:M().fieldset,children:[(0,r.jsx)("label",{className:M().label,htmlFor:"message",children:"Message"}),(0,r.jsx)("textarea",{className:M().textarea,name:"message",placeholder:"Enter your message",value:g,onChange:e=>_(e.target.value),disabled:e||a})]}),(0,r.jsx)("input",{className:M().submit,type:"submit",value:"Send me a message",disabled:!l||!m||!g||e||a})]})]})})}},454:(e,t,a)=>{"use strict";a.d(t,{DX:()=>o,Gz:()=>s,hS:()=>i,o2:()=>r});let r="/brenna",s="https://x.com/brennaort",o="https://www.linkedin.com/in/brenna-s-ort-524541298",i="https://bookkeeper.community/members/30420221"},9441:e=>{e.exports={formWrapper:"ContactForm_formWrapper__d2oSO",formWrapperInner:"ContactForm_formWrapperInner__VAlaB",title:"ContactForm_title__UznXr",formText:"ContactForm_formText__V0ADF",formContainer:"ContactForm_formContainer__m5Z_b",form:"ContactForm_form__PqJMt",disabled:"ContactForm_disabled__bshs2",formMessage:"ContactForm_formMessage__zc1nh",formMessageIcon:"ContactForm_formMessageIcon__RYWqd",formMessageContent:"ContactForm_formMessageContent__4LtCC",formMessageTitle:"ContactForm_formMessageTitle__SJMRO",formMessageBody:"ContactForm_formMessageBody__6kBFc",formMessageSuccess:"ContactForm_formMessageSuccess__Sx3MY",formMessageError:"ContactForm_formMessageError__PGPdV",fieldset:"ContactForm_fieldset__c6m04",label:"ContactForm_label__LFMmF",input:"ContactForm_input__euJwN",textarea:"ContactForm_textarea__Ys3Eg",submit:"ContactForm_submit__rHrBz",messageSuccess:"ContactForm_messageSuccess__DfQhf"}},4352:e=>{e.exports={container:"global_container__U8osQ",innerContainer:"global_innerContainer__m3BS1",siteWrapper:"global_siteWrapper__RR_96",siteWrapperInner:"global_siteWrapperInner__UhDps",siteWrapperBreakout:"global_siteWrapperBreakout__gs0wa",xxxsectionTitle:"global_xxxsectionTitle__m2ASi",highlight:"global_highlight__50kaY",pageContainer:"global_pageContainer__huh_O",pageSidebar:"global_pageSidebar__dOfXM",pageContent:"global_pageContent__26xIc",pageRightContainer:"global_pageRightContainer__dYbEu",pageRightTitle:"global_pageRightTitle__3_r52",pageRightSidebar:"global_pageRightSidebar__7cUPR",pageRightContent:"global_pageRightContent__ANJ5j",pageRightH1:"global_pageRightH1__LCVji"}}}]);