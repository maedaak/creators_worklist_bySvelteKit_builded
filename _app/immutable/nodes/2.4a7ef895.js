import{s as F,n as j}from"../chunks/scheduler.a7e64d23.js";import{S as G,i as J,g as m,s as B,h as d,y as K,c as R,j as A,f as _,k as q,a as v,A as N,m as b,n as p,z as c}from"../chunks/index.86c1c9b9.js";import{e as U}from"../chunks/each.e59479a4.js";function w(o,a,l){const r=o.slice();return r[2]=a[l],r}function O(o){let a,l=o[2].isbn+"",r,n,s,i,e,f;return{c(){a=b("isbn: "),r=b(l),n=B(),s=m("a"),i=b("詳細"),e=B(),f=m("br"),this.h()},l(t){a=p(t,"isbn: "),r=p(t,l),n=R(t),s=d(t,"A",{href:!0});var h=A(s);i=p(h,"詳細"),h.forEach(_),e=R(t),f=d(t,"BR",{}),this.h()},h(){q(s,"href","book/"+o[2].isbn)},m(t,h){v(t,a,h),v(t,r,h),v(t,n,h),v(t,s,h),c(s,i),v(t,e,h),v(t,f,h)},p:j,d(t){t&&(_(a),_(r),_(n),_(s),_(e),_(f))}}}function D(o){let a,l,r,n=o[2].title+"",s,i,e,f=o[2].date+"",t,h,E,z=o[2].creator+"",L,P,C,I=o[2].publisher[0]+"",H,M,S,T,g=o[2].isbn&&O(o);return{c(){a=m("li"),l=m("p"),r=b("title: "),s=b(n),i=m("br"),e=b(`
                date: `),t=b(f),h=m("br"),E=b(`
                creator: `),L=b(z),P=m("br"),C=b(`
                publisher: `),H=b(I),M=m("br"),S=B(),g&&g.c(),T=B(),this.h()},l(k){a=d(k,"LI",{class:!0});var y=A(a);l=d(y,"P",{});var u=A(l);r=p(u,"title: "),s=p(u,n),i=d(u,"BR",{}),e=p(u,`
                date: `),t=p(u,f),h=d(u,"BR",{}),E=p(u,`
                creator: `),L=p(u,z),P=d(u,"BR",{}),C=p(u,`
                publisher: `),H=p(u,I),M=d(u,"BR",{}),S=R(u),g&&g.l(u),u.forEach(_),T=R(y),y.forEach(_),this.h()},h(){q(a,"class","list-group-item")},m(k,y){v(k,a,y),c(a,l),c(l,r),c(l,s),c(l,i),c(l,e),c(l,t),c(l,h),c(l,E),c(l,L),c(l,P),c(l,C),c(l,H),c(l,M),c(l,S),g&&g.m(l,null),c(a,T)},p(k,y){k[2].isbn&&g.p(k,y)},d(k){k&&_(a),g&&g.d()}}}function Q(o){let a,l='<a href="about">このサイトについて</a>',r,n,s=U(o[0]),i=[];for(let e=0;e<s.length;e+=1)i[e]=D(w(o,s,e));return{c(){a=m("p"),a.innerHTML=l,r=B(),n=m("ul");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){a=d(e,"P",{["data-svelte-h"]:!0}),K(a)!=="svelte-s417ut"&&(a.innerHTML=l),r=R(e),n=d(e,"UL",{class:!0});var f=A(n);for(let t=0;t<i.length;t+=1)i[t].l(f);f.forEach(_),this.h()},h(){q(n,"class","list-group")},m(e,f){v(e,a,f),v(e,r,f),v(e,n,f);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(n,null)},p(e,[f]){if(f&1){s=U(e[0]);let t;for(t=0;t<s.length;t+=1){const h=w(e,s,t);i[t]?i[t].p(h,f):(i[t]=D(h),i[t].c(),i[t].m(n,null))}for(;t<i.length;t+=1)i[t].d(1);i.length=s.length}},i:j,o:j,d(e){e&&(_(a),_(r),_(n)),N(i,e)}}}function V(o,a,l){let{data:r}=a,n=r.dataArray;return o.$$set=s=>{"data"in s&&l(1,r=s.data)},[n,r]}class Z extends G{constructor(a){super(),J(this,a,V,Q,F,{data:1})}}export{Z as component};
