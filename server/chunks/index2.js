function m(){}function E(t){return t()}function h(){return Object.create(null)}function y(t){t.forEach(E)}function C(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function O(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function S(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function q(t){const e={};for(const n in t)e[n]=!0;return e}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function L(t){return function(e){return e.preventDefault(),t.call(this,e)}}function R(t){return function(e){return e.stopPropagation(),t.call(this,e)}}let i;function l(t){i=t}function a(){if(!i)throw new Error("Function called outside component initialization");return i}function T(t){a().$$.on_destroy.push(t)}function B(t,e){return a().$$.context.set(t,e),e}function G(t){return a().$$.context.get(t)}function I(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const $=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],g=new Set([...$]),w=/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;function M(t){return w.test(t)||t.toLowerCase()==="!doctype"}const x=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;function N(t,e){const n=Object.assign({},...t);if(e){const o=e.classes,r=e.styles;o&&(n.class==null?n.class=o:n.class+=" "+o),r&&(n.style==null?n.style=f(r):n.style=f(k(n.style,r)))}let s="";return Object.keys(n).forEach(o=>{if(x.test(o))return;const r=n[o];r===!0?s+=" "+o:g.has(o.toLowerCase())?r&&(s+=" "+o):r!=null&&(s+=` ${o}="${r}"`)}),s}function k(t,e){const n={};for(const s of t.split(";")){const o=s.indexOf(":"),r=s.slice(0,o).trim(),u=s.slice(o+1).trim();r&&(n[r]=u)}for(const s in e){const o=e[s];o?n[s]=o:delete n[s]}return n}const j=/[&"]/g,v=/[&<]/g;function d(t,e=!1){const n=String(t),s=e?j:v;s.lastIndex=0;let o="",r=0;for(;s.test(n);){const u=s.lastIndex-1,c=n[u];o+=n.substring(r,u)+(c==="&"?"&amp;":c==='"'?"&quot;":"&lt;"),r=u+1}return o+n.substring(r)}function p(t){return typeof t=="string"||t&&typeof t=="object"?d(t,!0):t}function X(t){const e={};for(const n in t)e[n]=p(t[n]);return e}function z(t,e){let n="";for(let s=0;s<t.length;s+=1)n+=e(t[s],s);return n}const P={$$render:()=>""};function Y(t,e){if(!t||!t.$$render)throw e==="svelte:component"&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${e}>.`);return t}let F;function H(t){function e(n,s,o,r,u){const c=i,_={on_destroy:F,context:new Map(u||(c?c.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:h()};l({$$:_});const b=t(n,s,o,r);return l(c),b}return{render:(n={},{$$slots:s={},context:o=new Map}={})=>{F=[];const r={title:"",head:"",css:new Set},u=e(r,n,{},s,o);return y(F),{html:u,css:{code:Array.from(r.css).map(c=>c.code).join(`
`),map:null},head:r.title+r.head}},$$render:e}}function J(t,e,n){if(e==null||n&&!e)return"";const s=n&&e===!0?"":`="${d(e,!0)}"`;return` ${t}${s}`}function f(t){return Object.keys(t).filter(e=>t[e]).map(e=>`${e}: ${p(t[e])};`).join(" ")}export{O as a,I as b,H as c,R as d,d as e,S as f,G as g,a as h,N as i,X as j,J as k,A as l,P as m,M as n,T as o,L as p,p as q,q as r,B as s,z as t,m as u,Y as v,y as w,D as x,C as y};
