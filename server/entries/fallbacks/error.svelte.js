import{g as n,c as b,a as c,e as t}from"../../chunks/index2.js";const u=()=>{const s=n("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},p={subscribe(s){return u().page.subscribe(s)}},_=b((s,a,g,i)=>{let e,r;return r=c(p,o=>e=o),r(),`<h1>${t(e.status)}</h1>
<p>${t(e.error?.message)}</p>`});export{_ as default};
