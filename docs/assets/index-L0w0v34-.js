import{j as e}from"./jsx-runtime-eD_iBAx7.js";import{r as n}from"./index-y4MHPZnw.js";import{c as u}from"./classNames-pTwYsIK_.js";import{t as c}from"./transition-7SLoD2DB.js";import{_ as y}from"./index-gJTXK8Ty.js";import{N as d,C as N,a as q}from"./index-l9FB4KbY.js";function V({title:r,titleId:i,...a},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const _=n.forwardRef(V),C=_,g=({children:r,width:i="lg",overflowHidden:a=!0,...s})=>{const l=m=>{switch(m){case"xs":return"20rem";case"sm":return"24rem";case"md":return"28rem";case"lg":return"32rem";case"xl":return"36rem";case"2xl":return"42rem";case"3xl":return"48rem";case"4xl":return"56rem";case"5xl":return"64rem";case"6xl":return"72rem";case"7xl":return"80rem";case"w-full":return"100%";case"w-min":return"min-content";case"w-max":return"max-content";case"w-fit":return"fit-content";default:return"32rem"}};return e.jsx(c.Root,{show:s.open,as:n.Fragment,children:e.jsxs(y,{as:"div",className:"relative z-10",onClose:s.onClose,children:[e.jsx(c.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-slate-700/75"})}),e.jsx("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsx(c.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(y.Panel,{style:{maxWidth:l(i)},className:u(a?"overflow-hidden":"","relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 dark:bg-slate-800 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-200"),children:[e.jsx("div",{className:"absolute top-0 right-0 hidden pt-4 pr-4 sm:!block",children:e.jsxs("button",{type:"button",className:"rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 dark:bg-slate-800 dark:text-slate-200",onClick:s.onClose,children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(C,{className:"h-6 w-6","aria-hidden":"true"})]})}),r]})})})})]})})};try{g.displayName="Modal",g.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"Modal content",name:"children",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Is modal open",name:"open",required:!0,type:{name:"boolean"}},overflowHidden:{defaultValue:{value:"true"},description:"Optional if modal should have overflow hidden. Default is true",name:"overflowHidden",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"onClose function",name:"onClose",required:!0,type:{name:"() => void"}},width:{defaultValue:{value:"lg"},description:"Optional width of modal. Default is lg",name:"width",required:!1,type:{name:"string"}}}}}catch{}const v=({name:r,options:i,selected:a,valueIdentifier:s,keyIdentifier:l,disabled:m=!1,onChange:b,description:p,separator:f=", ",error:o})=>{const x=s.split(",");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative",children:e.jsx(d,{value:a,name:r,onChange:b,disabled:m,children:({open:w})=>{const h=a?x.map(t=>a[t]):null;return e.jsxs(e.Fragment,{children:[e.jsxs(d.Button,{className:u("relative w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm","focus:border-sky-600 focus:outline-none focus:ring-1","disabled:cursor-not-allowed disabled:opacity-50","dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400",o?"border-red-700 text-red-700 focus:ring-red-700":"border-gray-300 focus:ring-sky-600"),children:[e.jsx("span",{className:"block truncate font-roboto font-light",children:h?h.join(f):"Välj..."}),e.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e.jsx(N,{className:"h-5 w-5 text-gray-400 dark:text-white","aria-hidden":"true"})})]}),e.jsx(c,{show:w,as:n.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx(d.Options,{className:"absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-900 dark:ring-slate-200",children:i.map(t=>{const j=x.map(k=>t[k]);return e.jsxs(d.Option,{className:u("relative flex cursor-default select-none items-center py-2 pl-8 pr-4 ui-active:bg-sky-600 ui-active:text-white ui-not-active:text-gray-900 dark:ui-active:bg-sky-400 dark:ui-active:text-slate-900 dark:ui-not-active:text-white",t.unavailable?"cursor-not-allowed opacity-50":""),value:t,disabled:t.unavailable,children:[a&&t[l]===a[l]?e.jsx("span",{className:"absolute left-0 items-center pl-1.5",children:e.jsx(q,{className:"h-5 w-5","aria-hidden":"true"})}):null,e.jsx("span",{className:u(a&&t[l]===a[l]?"font-semibold":"font-light","block truncate font-roboto"),children:j.join(f)})]},t[l])})})})]})}})}),e.jsx("div",{className:"mx-2 flex justify-between text-xs text-gray-500 dark:text-slate-400",children:e.jsxs("div",{className:"grow",children:[!!o&&e.jsx("span",{className:"text-red-500",children:o}),p&&!o&&e.jsx("span",{children:p})]})})]})};try{v.displayName="SelectMenu",v.__docgenInfo={description:"",displayName:"SelectMenu",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"any"}},keyIdentifier:{defaultValue:null,description:"",name:"keyIdentifier",required:!0,type:{name:"string"}},valueIdentifier:{defaultValue:null,description:"",name:"valueIdentifier",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},separator:{defaultValue:{value:","},description:"",name:"separator",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: any) => void)"}}}}}catch{}export{g as M,v as S};
