(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{1878:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,4839,23)),Promise.resolve().then(a.bind(a,9326)),Promise.resolve().then(a.t.bind(a,347,23)),Promise.resolve().then(a.t.bind(a,1776,23)),Promise.resolve().then(a.t.bind(a,1622,23))},9326:(e,t,a)=>{"use strict";a.d(t,{default:()=>F});var r=a(5155),i=a(2115);class o{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let s={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},l=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},n=async(e,t,a={})=>{let r=await fetch(s.origin+e,{method:"POST",headers:a,body:t}),i=await r.text(),l=new o(r.status,i);if(r.ok)return l;throw l},m=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},_=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new o(451,"Unavailable For Headless Browser"),p=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},g=e=>!e.list?.length||!e.watchVariable,h=(e,t)=>e instanceof FormData?e.get(t):e[t],d=(e,t)=>{if(g(e))return!1;p(e.list,e.watchVariable);let a=h(t,e.watchVariable);return"string"==typeof a&&e.list.includes(a)},b=()=>new o(403,"Forbidden"),u=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},f=async(e,t,a)=>{let r=Number(await a.get(e)||0);return t-Date.now()+r},v=async(e,t,a)=>{if(!t.throttle||!a)return!1;u(t.throttle,t.id);let r=t.id||e;return await f(r,t.throttle,a)>0||(await a.set(r,Date.now().toString()),!1)},x=()=>new o(429,"Too Many Requests"),C=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},w=e=>"string"==typeof e?document.querySelector(e):e,y={sendForm:async(e,t,a,r)=>{let i=l(r),o=i.publicKey||s.publicKey,p=i.blockHeadless||s.blockHeadless,g=s.storageProvider||i.storageProvider,h={...s.blockList,...i.blockList},u={...s.limitRate,...i.limitRate};if(p&&_(navigator))return Promise.reject(c());let f=w(a);m(o,e,t),C(f);let y=new FormData(f);return d(h,y)?Promise.reject(b()):await v(location.pathname,u,g)?Promise.reject(x()):(y.append("lib_version","4.4.1"),y.append("service_id",e),y.append("template_id",t),y.append("user_id",o),n("/api/v1.0/email/send-form",y))}};var j=a(4317),k=a.n(j);a(1622);let F=()=>{let[e,t]=(0,i.useState)(!1),[a,o]=(0,i.useState)(""),[s,l]=(0,i.useState)(""),[n,m]=(0,i.useState)(""),_=(0,i.useRef)();return(0,r.jsx)("div",{className:k().formWrapperInner,children:(0,r.jsx)("div",{className:k().formContainer,children:(0,r.jsxs)("form",{ref:_,className:k().form,onSubmit:e=>{e.preventDefault(),y.sendForm("service_e5oyn6o","template_oajhg4k",_.current,{publicKey:"9sgmp-ExbSw-RZ1rp"}).then(()=>{console.log("SUCCESS!")},e=>{console.log("FAILED...",e.text)})},children:[(0,r.jsx)("div",{className:k().formControl,children:(0,r.jsxs)("fieldset",{className:k().fieldset,children:[(0,r.jsx)("label",{className:k().label,htmlFor:"user_name",children:"Name"}),(0,r.jsx)("input",{className:k().input,type:"text",name:"user_name",placeholder:"Name",value:a,onChange:e=>o(e.target.value)})]})}),(0,r.jsxs)("fieldset",{className:k().fieldset,children:[(0,r.jsx)("label",{className:k().label,htmlFor:"user_email",children:"Email"}),(0,r.jsx)("input",{className:k().input,type:"email",name:"user_email",placeholder:"Email address",value:s,onChange:e=>l(e.target.value)})]}),(0,r.jsxs)("fieldset",{className:k().fieldset,children:[(0,r.jsx)("label",{className:k().label,htmlFor:"message",children:"Message"}),(0,r.jsx)("textarea",{className:k().textarea,name:"message",placeholder:"Enter your message",value:n,onChange:e=>m(e.target.value)})]}),(0,r.jsx)("input",{className:k().submit,type:"submit",value:"Send me a message",disabled:!a||!s||!n})]})})})}},347:()=>{},4317:e=>{e.exports={formWrapper:"ContactForm_formWrapper__BraxF",formWrapperInner:"ContactForm_formWrapperInner__qlm6O",title:"ContactForm_title__Km5RE",formText:"ContactForm_formText__42DMf",formContainer:"ContactForm_formContainer__8BH0Z",form:"ContactForm_form__CytUN",fieldset:"ContactForm_fieldset____Lqv",label:"ContactForm_label__VZZEP",input:"ContactForm_input__gV_cg",textarea:"ContactForm_textarea__Z51X4",submit:"ContactForm_submit__v6nMc"}},1776:e=>{e.exports={name:"contact_name__Fj_OK",personalDetailsContainer:"contact_personalDetailsContainer__EMn4C",socialLinksUl:"contact_socialLinksUl__3Tx8R",socialLinksLi:"contact_socialLinksLi__0UBz1",socialLinkLi:"contact_socialLinkLi__joZj_",socialLinksSVG:"contact_socialLinksSVG__PI15z"}},1622:e=>{e.exports={container:"global_container__DNVUb",innerContainer:"global_innerContainer__8z_Mm",siteWrapper:"global_siteWrapper__nTb5j",siteWrapperInner:"global_siteWrapperInner__vGGPa",siteWrapperBreakout:"global_siteWrapperBreakout__MPF9V",pageTitle:"global_pageTitle___0BzT",xxxsectionTitle:"global_xxxsectionTitle__dsMeQ",highlight:"global_highlight__Y9dZL",pageContainer:"global_pageContainer__nbh0j",pageSidebar:"global_pageSidebar__pA1BO",pageContent:"global_pageContent__JPLQg",pageRightContainer:"global_pageRightContainer__B4H_w",pageRightTitle:"global_pageRightTitle__xQlIr",pageRightH1:"global_pageRightH1__WB3_n",pageRightSidebar:"global_pageRightSidebar__WPtz1",pageRightContent:"global_pageRightContent__klebf"}}},e=>{var t=t=>e(e.s=t);e.O(0,[642,839,441,517,358],()=>t(1878)),_N_E=e.O()}]);