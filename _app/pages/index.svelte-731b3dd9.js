import{S as t,i as e,s,e as a,t as r,k as n,c as o,a as c,g as l,d as h,n as f,b as i,f as u,G as d,h as p,j as v,J as m,m as g,F as E,o as b,v as $,r as y,w,K as x}from"../chunks/vendor-ab208dc6.js";import{B as j}from"../chunks/Bio-9303181a.js";function k(t,e,s){const a=t.slice();return a[1]=e[s],a}function I(t){let e,s,v,m,g,E,b,$,y,w=t[1].title+"",x=t[1].created+"";return{c(){e=a("li"),s=a("a"),v=a("h2"),m=r(w),E=n(),b=a("div"),$=r(x),y=n(),this.h()},l(t){e=o(t,"LI",{});var a=c(e);s=o(a,"A",{rel:!0,href:!0});var r=c(s);v=o(r,"H2",{});var n=c(v);m=l(n,w),n.forEach(h),r.forEach(h),E=f(a),b=o(a,"DIV",{class:!0});var i=c(b);$=l(i,x),i.forEach(h),y=f(a),a.forEach(h),this.h()},h(){i(s,"rel","prefetch"),i(s,"href",g="blog/"+t[1].slug),i(b,"class","date")},m(t,a){u(t,e,a),d(e,s),d(s,v),d(v,m),d(e,E),d(e,b),d(b,$),d(e,y)},p(t,e){1&e&&w!==(w=t[1].title+"")&&p(m,w),1&e&&g!==(g="blog/"+t[1].slug)&&i(s,"href",g),1&e&&x!==(x=t[1].created+"")&&p($,x)},d(t){t&&h(e)}}}function D(t){let e,s,p,D,H,V,A,B,L,R,F,G,J,K;p=new j({});let P=t[0],S=[];for(let a=0;a<P.length;a+=1)S[a]=I(k(t,P,a));return{c(){e=n(),s=a("div"),v(p.$$.fragment),D=n(),H=a("h3"),V=a("a"),A=r("/resume/"),B=n(),L=a("div"),R=a("h2"),F=r("Recent posts"),G=n(),J=a("ul");for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){m('[data-svelte="svelte-b2pdby"]',document.head).forEach(h),e=f(t),s=o(t,"DIV",{});var a=c(s);g(p.$$.fragment,a),D=f(a),H=o(a,"H3",{style:!0});var r=c(H);V=o(r,"A",{href:!0,style:!0});var n=c(V);A=l(n,"/resume/"),n.forEach(h),r.forEach(h),B=f(a),L=o(a,"DIV",{});var i=c(L);R=o(i,"H2",{});var u=c(R);F=l(u,"Recent posts"),u.forEach(h),G=f(i),J=o(i,"UL",{class:!0});var d=c(J);for(let e=0;e<S.length;e+=1)S[e].l(d);d.forEach(h),i.forEach(h),a.forEach(h),this.h()},h(){document.title="unstack.in blog",i(V,"href","/resume"),E(V,"box-shadow","none"),E(H,"margin-bottom","2rem"),i(J,"class","posts")},m(t,a){u(t,e,a),u(t,s,a),b(p,s,null),d(s,D),d(s,H),d(H,V),d(V,A),d(s,B),d(s,L),d(L,R),d(R,F),d(L,G),d(L,J);for(let e=0;e<S.length;e+=1)S[e].m(J,null);K=!0},p(t,[e]){if(1&e){let s;for(P=t[0],s=0;s<P.length;s+=1){const a=k(t,P,s);S[s]?S[s].p(a,e):(S[s]=I(a),S[s].c(),S[s].m(J,null))}for(;s<S.length;s+=1)S[s].d(1);S.length=P.length}},i(t){K||($(p.$$.fragment,t),K=!0)},o(t){y(p.$$.fragment,t),K=!1},d(t){t&&h(e),t&&h(s),w(p),x(S,t)}}}var H=function(t,e,s,a){return new(s||(s=Promise))((function(r,n){function o(t){try{l(a.next(t))}catch(e){n(e)}}function c(t){try{l(a.throw(t))}catch(e){n(e)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,c)}l((a=a.apply(t,e||[])).next())}))};function V({page:t,fetch:e}){return H(this,void 0,void 0,(function*(){const t=yield e("/blog.json"),{posts:s}=yield t.json();return{props:{posts:s}}}))}function A(t,e,s){let{posts:a}=e;return t.$$set=t=>{"posts"in t&&s(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),e(this,t,A,D,s,{posts:0})}}export{V as load};