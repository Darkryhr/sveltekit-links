import{s as h,n as v,v as _,p as d,g,h as b,i as y,k as w,u as D,q as L,r as S}from"../chunks/scheduler.d978c4dc.js";import{S as k,i as q,d as p,v as C,e as m,g as E,a as O,b as R,t as $}from"../chunks/index.7cd3bf66.js";import{u,a as c}from"../chunks/firebase.312fba77.js";const j="src/routes/+layout.svelte";function f(o){let a,n;const i=o[1].default,s=v(i,o,o[0],null),l={c:function(){a=g("div"),s&&s.c(),this.h()},l:function(e){a=b(e,"DIV",{class:!0});var t=y(a);s&&s.l(t),t.forEach(m),this.h()},h:function(){E(a,"class","min-h-screen flex flex-col"),w(a,j,8,0,118)},m:function(e,t){O(e,a,t),s&&s.m(a,null),n=!0},p:function(e,[t]){s&&s.p&&(!n||t&1)&&D(s,i,e,e[0],n?S(i,e[0],t,null):L(e[0]),null)},i:function(e){n||(R(s,e),n=!0)},o:function(e){$(s,e),n=!1},d:function(e){e&&m(a),s&&s.d(e)}};return p("SvelteRegisterBlock",{block:l,id:f.name,type:"component",source:"",ctx:o}),l}function B(o,a,n){let i,s;_(c,"userData"),d(o,c,t=>n(2,i=t)),_(u,"user"),d(o,u,t=>n(3,s=t));let{$$slots:l={},$$scope:r}=a;C("Layout",l,["default"]);const e=[];return Object.keys(a).forEach(t=>{!~e.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Layout> was created with unknown prop '${t}'`)}),o.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},o.$capture_state=()=>({user:u,userData:c,$userData:i,$user:s}),[r,l]}class z extends k{constructor(a){super(a),q(this,a,B,f,h,{}),p("SvelteRegisterComponent",{component:this,tagName:"Layout",options:a,id:f.name})}}export{z as component};
