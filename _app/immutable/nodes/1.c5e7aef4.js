import{s as S,n as _,e as x}from"../chunks/scheduler.a7e64d23.js";import{S as j,i as q,g as f,m as g,s as y,h as d,j as h,n as v,f as u,c as z,a as m,z as $,o as E}from"../chunks/index.86c1c9b9.js";import{s as C}from"../chunks/singletons.6e6c37d7.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=g(r),n=y(),i=f("p"),l=g(c)},l(e){t=d(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=z(e),i=d(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function w(s,t,r){let o;return x(s,P,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),q(this,t,w,k,S,{})}};export{F as component};
