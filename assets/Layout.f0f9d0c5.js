var Ve=Object.defineProperty,Xe=Object.defineProperties;var Je=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Te=(n,t,e)=>t in n?Ve(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ge=(n,t)=>{for(var e in t||(t={}))Ye.call(t,e)&&Te(n,e,t[e]);if(Se)for(var e of Se(t))Qe.call(t,e)&&Te(n,e,t[e]);return n},me=(n,t)=>Xe(n,Je(t));import{_ as T,r as J,o as l,c as d,e as w,f as I,i as q,j as y,k as Fe,h as a,F as A,l as W,a as c,t as N,m as E,n as re,p as be,q as P,w as R,s as Ie,v as M,b as Y,x as _e,y as Ze,z as et,A as tt,B as ke,C as ye,D as K,E as pe,G as He,H as Oe,I as H,J as nt,K as ae,L as ot,M as Q,N as G,O as Be,P as at,Q as rt,u as Re,g as j,T as ze,R as he,S as lt,U as st,V as $e,W as We,X as je,d as ut,Y as Ce,Z as ve,$ as Le,a0 as it,a1 as ct,a2 as dt,a3 as vt}from"./app.f4949af6.js";const ft={},pt={class:"theme-default-content custom"};function ht(n,t){const e=J("Content");return l(),d("div",pt,[w(e)])}var _t=T(ft,[["render",ht],["__file","HomeContent.vue"]]);const gt={key:0,class:"features"},mt=I({setup(n){const t=q(),e=y(()=>Fe(t.value.features)?t.value.features:[]);return(u,r)=>a(e).length?(l(),d("div",gt,[(l(!0),d(A,null,W(a(e),h=>(l(),d("div",{key:h.title,class:"feature"},[c("h2",null,N(h.title),1),c("p",null,N(h.details),1)]))),128))])):E("",!0)}});var bt=T(mt,[["__file","HomeFeatures.vue"]]);const kt=["innerHTML"],yt=["textContent"],$t=I({setup(n){const t=q(),e=y(()=>t.value.footer),u=y(()=>t.value.footerHtml);return(r,h)=>a(e)?(l(),d(A,{key:0},[a(u)?(l(),d("div",{key:0,class:"footer",innerHTML:a(e)},null,8,kt)):(l(),d("div",{key:1,class:"footer",textContent:N(a(e))},null,8,yt))],64)):E("",!0)}});var Ct=T($t,[["__file","HomeFooter.vue"]]);const Lt=["href","rel","target","aria-label"],xt=I({inheritAttrs:!1}),wt=I(me(ge({},xt),{props:{item:{type:Object,required:!0}},setup(n){const t=n,e=re(),u=tt(),{item:r}=be(t),h=y(()=>_e(r.value.link)),g=y(()=>Ze(r.value.link)||et(r.value.link)),p=y(()=>{if(!g.value){if(r.value.target)return r.value.target;if(h.value)return"_blank"}}),i=y(()=>p.value==="_blank"),s=y(()=>!h.value&&!g.value&&!i.value),f=y(()=>{if(!g.value){if(r.value.rel)return r.value.rel;if(i.value)return"noopener noreferrer"}}),v=y(()=>r.value.ariaLabel||r.value.text),_=y(()=>{const L=Object.keys(u.value.locales);return L.length?!L.some(S=>S===r.value.link):r.value.link!=="/"}),b=y(()=>_.value?e.path.startsWith(r.value.link):!1),x=y(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(L,S)=>{const k=J("RouterLink"),B=J("AutoLinkExternalIcon");return a(s)?(l(),P(k,Ie({key:0,class:{"router-link-active":a(x)},to:a(r).link,"aria-label":a(v)},L.$attrs),{default:R(()=>[M(L.$slots,"before"),Y(" "+N(a(r).text)+" ",1),M(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(l(),d("a",Ie({key:1,class:"external-link",href:a(r).link,rel:a(f),target:a(p),"aria-label":a(v)},L.$attrs),[M(L.$slots,"before"),Y(" "+N(a(r).text)+" ",1),a(i)?(l(),P(B,{key:0})):E("",!0),M(L.$slots,"after")],16,Lt))}}}));var V=T(wt,[["__file","AutoLink.vue"]]);const St={class:"hero"},Tt={key:0,id:"main-title"},It={key:1,class:"description"},Bt={key:2,class:"actions"},Nt=I({setup(n){const t=q(),e=ke(),u=ye(),r=y(()=>u.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),h=y(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),g=y(()=>t.value.heroAlt||h.value||"hero"),p=y(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),i=y(()=>Fe(t.value.actions)?t.value.actions.map(({text:f,link:v,type:_="primary"})=>({text:f,link:v,type:_})):[]),s=()=>{if(!r.value)return null;const f=pe("img",{src:He(r.value),alt:g.value});return t.value.heroImageDark===void 0?f:pe(Oe,()=>f)};return(f,v)=>(l(),d("header",St,[w(s),a(h)?(l(),d("h1",Tt,N(a(h)),1)):E("",!0),a(p)?(l(),d("p",It,N(a(p)),1)):E("",!0),a(i).length?(l(),d("p",Bt,[(l(!0),d(A,null,W(a(i),_=>(l(),P(V,{key:_.text,class:K(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):E("",!0)]))}});var Pt=T(Nt,[["__file","HomeHero.vue"]]);const Et={class:"home"},Dt=I({setup(n){return(t,e)=>(l(),d("main",Et,[w(Pt),w(bt),w(_t),w(Ct)]))}});var Mt=T(Dt,[["__file","Home.vue"]]);const At={},Ft={class:"timeline"},Ht=c("div",null,"\u5F52\u6863",-1),Ot=[Ht];function Rt(n,t){return l(),d("main",Ft,Ot)}var zt=T(At,[["render",Rt],["__file","TimeLine.vue"]]);const Wt={},jt={class:"timeline"};function Ut(n,t){return l(),d("main",jt," \u5206\u7C7B ")}var Gt=T(Wt,[["render",Ut],["__file","Catgory.vue"]]),qt=Object.defineProperty,Kt=Object.defineProperties,Vt=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Pe=(n,t,e)=>t in n?qt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ee=(n,t)=>{for(var e in t||(t={}))Xt.call(t,e)&&Pe(n,e,t[e]);if(Ne)for(var e of Ne(t))Jt.call(t,e)&&Pe(n,e,t[e]);return n},Yt=(n,t)=>Kt(n,Vt(t));const Qt=typeof window!="undefined",oe=[],z="@@clickContext";let De,Zt=0;Qt&&(document.addEventListener("mousedown",n=>De=n),document.addEventListener("mouseup",n=>{oe.forEach(t=>t[z].documentHandler(n,De))}));function Me(n,t,e){return function(u={},r={}){!e||!u.target||!r.target||n.contains(u.target)||n.contains(r.target)||n===u.target||(t.expression&&n[z].methodName&&e.context[n[z].methodName]?e.context[n[z].methodName]():n[z].bindingFn&&n[z].bindingFn())}}var en={mounted(n,t,e){oe.push(n);const u=Zt++;n[z]={id:u,documentHandler:Me(n,t,e),methodName:t.expression,bindingFn:t.value}},updated(n,t,e){n[z].documentHandler=Me(n,t,e),n[z].methodName=t.expression,n[z].bindingFn=t.value},unmounted(n){let t=oe.length;for(let e=0;e<t;e++)if(oe[e][z].id===n[z].id){oe.splice(e,1);break}delete n[z]}},tn=(n,t)=>{const e=n.__vccOpts||n;for(const[u,r]of t)e[u]=r;return e};const xe=n=>(at("data-v-87d63fa8"),n=n(),rt(),n),nn={class:"panel-header"},on={class:"color-view-bg"},an={class:"panel-main"},rn=xe(()=>c("h3",null,"\u4E3B\u9898\u989C\u8272",-1)),ln={class:"theme-color"},sn=["onMouseover","onClick"],un={class:"standard-color"},cn=["onMouseover","onClick"],dn=xe(()=>c("h3",null,"\u6807\u51C6\u989C\u8272",-1)),vn={class:"theme-color"},fn=["onMouseover","onClick"],pn=xe(()=>c("h3",null,"\u900F\u660E\u5EA6",-1)),hn=I({name:"colorPicker",directives:{clickoutside:en}}),_n=I(Yt(Ee({},hn),{props:{hex:{type:[String,void 0]},modelValue:{type:String},rgba:{type:String},defaultColor:{type:String,default:"#000000"},btnStyle:{type:[Object]},opacity:{type:[Number,String],default(){return 1}},showOpacity:{type:Boolean,default(){return!0}},standardColor:{type:Array,default(){return["#c21401","#ff1e02","#ffc12a","#ffff3a","#90cf5b","#00af57","#00afee","#0071be","#00215f","#72349d"]}},themeColor:{type:Array,default(){return["#000000","#ffffff","#eeece1","#1e497b","#4e81bb","#e2534d","#9aba60","#8165a0","#47acc5","#f9974c"]}}},emits:["input","change","finish","update:hex","update:rgba","close","update:modelValue"],setup(n,{emit:t}){const e=n,u=H(!1),r=H(""),h=H(null),g=H(Number(e.opacity)),p=H(e.standardColor),i=nt({visible:!1,html5Color:e.hex,tColor:e.themeColor,colorConfig:[["#7f7f7f","#f2f2f2"],["#0d0d0d","#808080"],["#1c1a10","#ddd8c3"],["#0e243d","#c6d9f0"],["#233f5e","#dae5f0"],["#632623","#f2dbdb"],["#4d602c","#eaf1de"],["#3f3150","#e6e0ec"],["#1e5867","#d9eef3"],["#99490f","#fee9da"]]}),s=H(k(e.hex!==""&&e.hex?e.hex:e.defaultColor,g.value));e.rgba&&e.rgba.length&&(s.value=e.rgba),ae(r,()=>{r.value?s.value=r.value:s.value=_.value}),ae(()=>e.hex,(o,m)=>{(/^#?[0-9a-fA-F]{3}$/.test(o)||/^#?[0-9a-fA-F]{4}$/.test(o)||/^#?[0-9a-fA-F]{5}$/.test(o)||/^#?[0-9a-fA-F]{6}$/.test(o)||/^#?[0-9a-fA-F]{8}$/.test(o))&&o.trim().length<=9&&o.trim().length!=6&&o.trim().length!=8&&(_.value=k(o,1),s.value=k(o,1)),(o.length===0||o=="")&&(_.value="",s.value="")});function f(o){let m;/^rgb\(/.test(o)?m="^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$":/^rgba\(/.test(o)&&(m="^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$");const C=new RegExp(m);return!!o.match(C)}ae(()=>e.rgba,(o,m)=>{f(o)&&(s.value=o,_.value=o),(o.length===0||o=="")&&(_.value="",s.value="")});const v=H(e.hex!==""&&e.hex?e.hex:e.defaultColor),_=H(k(e.hex!==""&&e.hex?e.hex:e.defaultColor,g.value));e.rgba&&e.rgba.length&&(_.value=e.rgba);const b=y(()=>{const o=[];for(let m of i.colorConfig)o.push(le(m[1],m[0],5));return o}),x=o=>{if(o.length===4)o="#"+o[1]+o[1]+o[2]+o[2]+o[3]+o[3];else return o},L=o=>{o=x(o);const m=[];for(let C=1;C<7;C+=2)m.push(parseInt("0x"+o.slice(C,C+2)));return m};function S(o){if(/^#?[0-9a-fA-F]{3}$/.test(o)){let m=o.substring(o.length-1,o.length),C=o.substring(o.length-2,o.length-1),$=o.substring(o.length-3,o.length-2);return S(`${$+$}${C+C}${m+m}`)}if(/^#?[0-9a-fA-F]{4}$/.test(o)){let m=o.substring(o.length-1,o.length),C=o.substring(o.length-2,o.length-1),$=o.substring(o.length-3,o.length-2),O=o.substring(o.length-4,o.length-3);return S(`${O+O}${$+$}${C+C}${m+m}`)}if(/^#?[0-9a-fA-F]{6}$/.test(o)){let m=parseInt("0x"+o.substring(o.length-2,o.length)),C=parseInt("0x"+o.substring(o.length-4,o.length-2));return{r:parseInt("0x"+o.substring(o.length-6,o.length-4)),g:C,b:m,a:1}}if(/^#?[0-9a-fA-F]{8}$/.test(o)){let m=parseInt("0x"+o.substring(o.length-2,o.length));m=m/255;let C=parseInt("0x"+o.substring(o.length-4,o.length-2)),$=parseInt("0x"+o.substring(o.length-6,o.length-4));return{r:parseInt("0x"+o.substring(o.length-8,o.length-6)),g:$,b:C,a:m}}}function k(o,m){const{r:C,g:$,b:O,a:F}=S(o);let X=F;return F===1&&m===1?X=1:F!==1&&m===1?X=F:F===1&&m!==1&&(X=m),`rgba(${C},${$},${O},${X})`}const B=o=>{v.value=o,_.value=k(o,g.value),s.value=k(o,g.value),t("input",o),t("update:hex",o),t("update:rgba",k(o,g.value)),t("change",{hex:o,rgba:k(o,g.value)})},D=(o,m,C)=>{const $=(o<<16|m<<8|C).toString(16);return"#"+new Array(Math.abs($.length-7)).join("0")+$},U=()=>{u.value=!u.value},le=(o,m,C)=>{const $=L(o),O=L(m),F=(O[0]-$[0])/C,X=(O[1]-$[1])/C,de=(O[2]-$[2])/C,we=[];for(let ne=0;ne<C;ne++)we.push(D(parseInt(F*ne+$[0]),parseInt(X*ne+$[1]),parseInt(de*ne+$[2])));return we},se=()=>{u.value=!1,t("close",{hex:v.value,rgba:k(v.value,g.value)})},ee=o=>{r.value=k(o,g.value)},Z=()=>{h.value.click()},ue=()=>{B(e.defaultColor)},te=o=>{B(h.value.value)},ie=()=>{B(v.value)},ce=()=>{u.value=!1,t("finish",{hex:v.value,rgba:k(v.value,g.value)})};return(o,m)=>{const C=ot("clickoutside");return Q((l(),d("div",{class:"zs-color-picker",ref:"colorPicker",onClick:m[7]||(m[7]=$=>$.stopPropagation())},[c("div",{class:"zs-color-picker-btn",style:G(Ee({},n.btnStyle)),onClick:U},[c("div",{class:"zs-color-picker-btn-color",style:G({backgroundColor:_.value})},null,4)],4),c("div",{class:K(["zs-color-picker-panel",u.value?"zs-color-picker-panel__visible":""])},[c("div",nn,[c("div",on,[c("div",{class:"color-view",style:G(`background-color: ${s.value}`)},null,4)]),c("div",{class:"default-color",onMouseover:m[0]||(m[0]=$=>r.value=n.defaultColor),onMouseout:m[1]||(m[1]=$=>r.value=null),onClick:ue},"\u9ED8\u8BA4\u989C\u8272",32)]),c("div",an,[rn,c("ul",ln,[(l(!0),d(A,null,W(a(i).tColor,($,O)=>(l(),d("li",{key:O,style:G({backgroundColor:$}),onMouseover:F=>ee($),onMouseout:m[2]||(m[2]=F=>r.value=null),onClick:F=>B($)},null,44,sn))),128))]),c("ul",un,[(l(!0),d(A,null,W(a(b),($,O)=>(l(),d("li",{key:O},[c("ul",null,[(l(!0),d(A,null,W($,(F,X)=>(l(),d("li",{key:X,style:G({backgroundColor:F}),onMouseover:de=>ee(F),onMouseout:m[3]||(m[3]=de=>r.value=null),onClick:de=>B(F)},null,44,cn))),128))])]))),128))]),dn,c("ul",vn,[(l(!0),d(A,null,W(p.value,($,O)=>(l(),d("li",{key:O,style:G({backgroundColor:$}),onMouseover:F=>ee($),onMouseout:m[4]||(m[4]=F=>r.value=null),onClick:F=>B($)},null,44,fn))),128))]),n.showOpacity?(l(),d(A,{key:0},[pn,Q(c("input",{type:"range",max:"1",min:"0",step:"0.0001","onUpdate:modelValue":m[5]||(m[5]=$=>g.value=$),class:"gradient",onInput:ie},null,544),[[Be,g.value]]),Y(" "+N(g.value),1)],64)):E("",!0),c("div",{class:"bottom-btn"},[c("h3",{onClick:Z,style:{cursor:"pointer"}},"\u66F4\u591A\u989C\u8272"),c("div",{class:"finsh",onClick:ce},"\u5B8C\u6210")]),Q(c("input",{class:"color-input",type:"color",ref_key:"html5ColorRef",ref:h,"onUpdate:modelValue":m[6]||(m[6]=$=>a(i).html5Color=$),onChange:te,onInput:te},null,544),[[Be,a(i).html5Color]])])],2)])),[[C,se]])}}}));var fe=tn(_n,[["__scopeId","data-v-87d63fa8"]]);fe.install=n=>n.component(fe.name,fe);typeof window!="undefined"&&window.Vue&&install(window.Vue);const gn={class:"config"},mn={class:"color-table"},bn=c("tr",null,[c("th",null,"\u5C5E\u6027"),c("th",null,"\u9ED8\u8BA4\u914D\u8272"),c("th",null,"\u5F53\u524D\u914D\u8272"),c("th",null,"\u65B0\u5EFA\u914D\u8272")],-1),kn=I({setup(n){var t=localStorage.getItem("themeColor"),e=H([]);if(t==null){var u=["--c-brand","--c-bg","--c-text","--c-text-accent","--c-text-quote","--c-border","--c-tip","--c-warning","--c-danger","--code-bg-color","--code-ln-color"],r=[],h=window.getComputedStyle(document.documentElement);for(let v=0;v<u.length;v++){const _=u[v];var g=h.getPropertyValue(_),p={name:_,default_color:g,current_color:g};r.push(p)}e.value=r,localStorage.setItem("themeColor",JSON.stringify(r))}else e.value=JSON.parse(t);const i=v=>{},s=(v,_)=>{for(let b=0;b<e.value.length;b++){const x=e.value[b];if(x.name==_){x.current_color=v.hex,e.value.splice(b,1,x),localStorage.setItem("themeColor",JSON.stringify(e.value));break}}document.getElementsByTagName("body")[0].style.setProperty(_,v.hex)},f=["#c21401","#ff1e02","#ffc12a","#ffff3a","#90cf5b","#00af57","#00afee","#0071be","#00215f","#72349d"];return(v,_)=>(l(),d("main",gn,[c("table",mn,[bn,(l(!0),d(A,null,W(a(e),(b,x)=>(l(),d("tr",{key:b.name},[c("td",null,N(b.name),1),c("td",null,[c("span",{class:"default-color",style:G({background:b.default_color})},null,4),Y(" "+N(b.default_color),1)]),c("td",null,[c("span",{class:"default-color",style:G({background:b.current_color})},null,4),Y(" "+N(b.current_color),1)]),c("td",null,[w(a(fe),{"standard-color":f,onClose:i,onFinish:L=>s(L,b.name)},null,8,["onFinish"])])]))),128))])]))}});var yn=T(kn,[["__file","Config.vue"]]);const $n=I({setup(n){const t=Re(),e=ke(),u=j(),r=ye(),h=y(()=>u.value.home||t.value),g=y(()=>e.value.title),p=y(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),i=()=>{if(!p.value)return null;const s=pe("img",{class:"logo",src:He(p.value),alt:g.value});return u.value.logoDark===void 0?s:pe(Oe,()=>s)};return(s,f)=>{const v=J("RouterLink");return l(),P(v,{to:a(h)},{default:R(()=>[w(i),a(g)?(l(),d("span",{key:0,class:K(["site-name",{"can-hide":a(p)}])},N(a(g)),3)):E("",!0)]),_:1},8,["to"])}}});var Cn=T($n,[["__file","NavbarBrand.vue"]]);const Ln=I({setup(n){const t=u=>{u.style.height=u.scrollHeight+"px"},e=u=>{u.style.height=""};return(u,r)=>(l(),P(ze,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:R(()=>[M(u.$slots,"default")]),_:3}))}});var Ue=T(Ln,[["__file","DropdownTransition.vue"]]);const xn=["aria-label"],wn={class:"title"},Sn=c("span",{class:"arrow down"},null,-1),Tn=["aria-label"],In={class:"title"},Bn={class:"navbar-dropdown"},Nn={class:"navbar-dropdown-subtitle"},Pn={key:1},En={class:"navbar-dropdown-subitem-wrapper"},Dn=I({props:{item:{type:Object,required:!0}},setup(n){const t=n,{item:e}=be(t),u=y(()=>e.value.ariaLabel||e.value.text),r=H(!1),h=re();ae(()=>h.path,()=>{r.value=!1});const g=i=>{i.detail===0?r.value=!r.value:r.value=!1},p=(i,s)=>s[s.length-1]===i;return(i,s)=>(l(),d("div",{class:K(["navbar-dropdown-wrapper",{open:r.value}])},[c("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(u),onClick:g},[c("span",wn,N(a(e).text),1),Sn],8,xn),c("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(u),onClick:s[0]||(s[0]=f=>r.value=!r.value)},[c("span",In,N(a(e).text),1),c("span",{class:K(["arrow",r.value?"down":"right"])},null,2)],8,Tn),w(Ue,null,{default:R(()=>[Q(c("ul",Bn,[(l(!0),d(A,null,W(a(e).children,f=>(l(),d("li",{key:f.text,class:"navbar-dropdown-item"},[f.children?(l(),d(A,{key:0},[c("h4",Nn,[f.link?(l(),P(V,{key:0,item:f,onFocusout:v=>p(f,a(e).children)&&f.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(l(),d("span",Pn,N(f.text),1))]),c("ul",En,[(l(!0),d(A,null,W(f.children,v=>(l(),d("li",{key:v.link,class:"navbar-dropdown-subitem"},[w(V,{item:v,onFocusout:_=>p(v,f.children)&&p(f,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(l(),P(V,{key:1,item:f,onFocusout:v=>p(f,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[he,r.value]])]),_:1})],2))}});var Mn=T(Dn,[["__file","NavbarDropdown.vue"]]);const Ae=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),An=(n,t)=>{if(t.hash===n)return!0;const e=Ae(t.path),u=Ae(n);return e===u},Ge=(n,t)=>n.link&&An(n.link,t)?!0:n.children?n.children.some(e=>Ge(e,t)):!1,qe=n=>!_e(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,Fn={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Hn=({docsRepo:n,editLinkPattern:t})=>{if(t)return t;const e=qe(n);return e!==null?Fn[e]:null},On=({docsRepo:n,docsBranch:t,docsDir:e,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const h=Hn({docsRepo:n,editLinkPattern:r});return h?h.replace(/:repo/,_e(n)?n:`https://github.com/${n}`).replace(/:branch/,t).replace(/:path/,lt(`${st(e)}/${u}`)):null},Rn={key:0,class:"navbar-items"},zn=I({setup(n){const t=()=>{const s=$e(),f=Re(),v=ke(),_=j();return y(()=>{var k,B;const b=Object.keys(v.value.locales);if(b.length<2)return[];const x=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(k=_.value.selectLanguageText)!=null?k:"unknown language",ariaLabel:(B=_.value.selectLanguageAriaLabel)!=null?B:"unkown language",children:b.map(D=>{var ue,te,ie,ce,o,m;const U=(te=(ue=v.value.locales)==null?void 0:ue[D])!=null?te:{},le=(ce=(ie=_.value.locales)==null?void 0:ie[D])!=null?ce:{},se=`${U.lang}`,ee=(o=le.selectLanguageName)!=null?o:se;let Z;if(se===v.value.lang)Z=L;else{const C=x.replace(f.value,D);s.getRoutes().some($=>$.path===C)?Z=C:Z=(m=le.home)!=null?m:D}return{text:ee,link:Z}})}]})},e=()=>{const s=j(),f=y(()=>s.value.repo),v=y(()=>f.value?qe(f.value):null),_=y(()=>f.value&&!_e(f.value)?`https://github.com/${f.value}`:f.value),b=y(()=>_.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return y(()=>!_.value||!b.value?[]:[{text:b.value,link:_.value}])},u=s=>We(s)?je(s):s.children?me(ge({},s),{children:s.children.map(u)}):s,h=(()=>{const s=j();return y(()=>(s.value.navbar||[]).map(u))})(),g=t(),p=e(),i=y(()=>[...h.value,...g.value,...p.value]);return(s,f)=>a(i).length?(l(),d("nav",Rn,[(l(!0),d(A,null,W(a(i),v=>(l(),d("div",{key:v.text,class:"navbar-item"},[v.children?(l(),P(Mn,{key:0,item:v},null,8,["item"])):(l(),P(V,{key:1,item:v},null,8,["item"]))]))),128))])):E("",!0)}});var Ke=T(zn,[["__file","NavbarItems.vue"]]);const Wn=["title"],jn={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Un=ut('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Gn=[Un],qn={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Kn=c("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Vn=[Kn],Xn=I({setup(n){const t=j(),e=ye(),u=()=>{e.value=!e.value};return(r,h)=>(l(),d("button",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:u},[Q((l(),d("svg",jn,Gn,512)),[[he,!a(e)]]),Q((l(),d("svg",qn,Vn,512)),[[he,a(e)]])],8,Wn))}});var Jn=T(Xn,[["__file","ToggleDarkModeButton.vue"]]);const Yn=["title"],Qn=c("div",{class:"icon","aria-hidden":"true"},[c("span"),c("span"),c("span")],-1),Zn=[Qn],eo=I({emits:["toggle"],setup(n){const t=j();return(e,u)=>(l(),d("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>e.$emit("toggle"))},Zn,8,Yn))}});var to=T(eo,[["__file","ToggleSidebarButton.vue"]]);const no=I({emits:["toggle-sidebar"],setup(n){const t=j(),e=H(null),u=H(null),r=H(0),h=y(()=>r.value?{maxWidth:r.value+"px"}:{}),g=y(()=>t.value.darkMode);Ce(()=>{const s=p(e.value,"paddingLeft")+p(e.value,"paddingRight"),f=()=>{var v;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-s-(((v=u.value)==null?void 0:v.offsetWidth)||0)};f(),window.addEventListener("resize",f,!1),window.addEventListener("orientationchange",f,!1)});function p(i,s){var _,b,x;const f=(x=(b=(_=i==null?void 0:i.ownerDocument)==null?void 0:_.defaultView)==null?void 0:b.getComputedStyle(i,null))==null?void 0:x[s],v=Number.parseInt(f,10);return Number.isNaN(v)?0:v}return(i,s)=>{const f=J("NavbarSearch");return l(),d("header",{ref_key:"navbar",ref:e,class:"navbar blur no-print"},[w(to,{onToggle:s[0]||(s[0]=v=>i.$emit("toggle-sidebar"))}),c("span",{ref_key:"navbarBrand",ref:u},[w(Cn)],512),c("div",{class:"navbar-items-wrapper",style:G(a(h))},[M(i.$slots,"before"),w(Ke,{class:"can-hide"}),M(i.$slots,"after"),a(g)?(l(),P(Jn,{key:0})):E("",!0),w(f)],4)],512)}}});var oo=T(no,[["__file","Navbar.vue"]]);const ao={class:"page-meta"},ro={key:0,class:"meta-item edit-link"},lo={key:1,class:"meta-item last-updated"},so={class:"meta-item-label"},uo={class:"meta-item-info"},io={key:2,class:"meta-item contributors"},co={class:"meta-item-label"},vo={class:"meta-item-info"},fo=["title"],po=Y(", "),ho=I({setup(n){const t=()=>{const i=j(),s=ve(),f=q();return y(()=>{var B,D,U;if(!((D=(B=f.value.editLink)!=null?B:i.value.editLink)!=null?D:!0))return null;const{repo:_,docsRepo:b=_,docsBranch:x="master",docsDir:L="docs",editLinkText:S}=i.value;if(!b)return null;const k=On({docsRepo:b,docsBranch:x,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(U=f.value.editLinkPattern)!=null?U:i.value.editLinkPattern});return k?{text:S!=null?S:"Edit this page",link:k}:null})},e=()=>{const i=j(),s=ve(),f=q();return y(()=>{var b,x,L,S;return!((x=(b=f.value.lastUpdated)!=null?b:i.value.lastUpdated)!=null?x:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((S=s.value.git)==null?void 0:S.updatedTime).toLocaleString()})},u=()=>{const i=j(),s=ve(),f=q();return y(()=>{var _,b,x,L;return((b=(_=f.value.contributors)!=null?_:i.value.contributors)!=null?b:!0)&&(L=(x=s.value.git)==null?void 0:x.contributors)!=null?L:null})},r=j(),h=t(),g=e(),p=u();return(i,s)=>{const f=J("ClientOnly");return l(),d("footer",ao,[a(h)?(l(),d("div",ro,[w(V,{class:"meta-item-label",item:a(h)},null,8,["item"])])):E("",!0),a(g)?(l(),d("div",lo,[c("span",so,N(a(r).lastUpdatedText)+": ",1),w(f,null,{default:R(()=>[c("span",uo,N(a(g)),1)]),_:1})])):E("",!0),a(p)&&a(p).length?(l(),d("div",io,[c("span",co,N(a(r).contributorsText)+": ",1),c("span",vo,[(l(!0),d(A,null,W(a(p),(v,_)=>(l(),d(A,{key:_},[c("span",{class:"contributor",title:`email: ${v.email}`},N(v.name),9,fo),_!==a(p).length-1?(l(),d(A,{key:0},[po],64)):E("",!0)],64))),128))])])):E("",!0)])}}});var _o=T(ho,[["__file","PageMeta.vue"]]);const go={key:0,class:"page-nav"},mo={class:"inner"},bo={key:0,class:"prev"},ko={key:1,class:"next"},yo=I({setup(n){const t=i=>i===!1?null:We(i)?je(i):it(i)?i:!1,e=(i,s,f)=>{const v=i.findIndex(_=>_.link===s);if(v!==-1){const _=i[v+f];return _!=null&&_.link?_:null}for(const _ of i)if(_.children){const b=e(_.children,s,f);if(b)return b}return null},u=q(),r=Le(),h=re(),g=y(()=>{const i=t(u.value.prev);return i!==!1?i:e(r.value,h.path,-1)}),p=y(()=>{const i=t(u.value.next);return i!==!1?i:e(r.value,h.path,1)});return(i,s)=>a(g)||a(p)?(l(),d("nav",go,[c("p",mo,[a(g)?(l(),d("span",bo,[w(V,{item:a(g)},null,8,["item"])])):E("",!0),a(p)?(l(),d("span",ko,[w(V,{item:a(p)},null,8,["item"])])):E("",!0)])])):E("",!0)}});var $o=T(yo,[["__file","PageNav.vue"]]);const Co={class:"page"},Lo={class:"theme-default-content"},xo={class:"page-bar no-print",style:{"padding-top":"1rem"}},wo=Y(" \xA0 "),So={style:{float:"right",color:"#999"}},To=I({setup(n){const t=q(),e=t.value.author.name;var u=t.value.date;u=u.toString().substring(0,10);function r(h,g){var p=document.createElement("textarea");p.value=h,document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p)}return Ce(()=>{var h=document.getElementsByClassName("shiki");for(let i=0;i<h.length;i++){var g=h[i],p=document.createElement("div");p.classList.add("code-copy"),p.setAttribute("title","\u590D\u5236\u4EE3\u7801"),p.innerText="\u590D\u5236",g.appendChild(p),p.onclick=function(){var s=this.previousSibling.textContent;r(s),this.innerText="\u590D\u5236\u6210\u529F"},p.onmouseleave=function(){let s=this;setTimeout(function(){s.innerText="\u590D\u5236"},5e3)}}}),(h,g)=>{const p=J("Content");return l(),d("main",Co,[M(h.$slots,"top",{},void 0,!0),c("div",Lo,[c("div",xo,[wo,c("span",So," \u{1F464}"+N(a(e))+" \xA0\xA0 \u{1F4C5}"+N(a(u)),1)]),w(p)]),w(_o),w($o),M(h.$slots,"bottom",{},void 0,!0)])}}});var Io=T(To,[["__scopeId","data-v-4e075743"],["__file","Page.vue"]]);const Bo={class:"sidebar-item-children"},No=I({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(n){var v;const t=n,{item:e,depth:u}=be(t),r=re(),h=$e(),g=y(()=>Ge(e.value,r)),p=y(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:g.value,collapsible:e.value.collapsible})),i=H(!0),s=H(void 0);var f=(v=e.value.children)==null?void 0:v.length;return f&&(e.value.collapsible=!0),e.value.collapsible&&(i.value=g.value,s.value=()=>{i.value=!i.value},h.afterEach(()=>{i.value=g.value})),(_,b)=>{var L;const x=J("SidebarItem",!0);return l(),d("li",null,[a(e).link?(l(),P(V,{key:0,class:K(a(p)),item:a(e)},null,8,["class","item"])):(l(),d("p",{key:1,tabindex:"0",class:K(a(p)),onClick:b[0]||(b[0]=(...S)=>s.value&&s.value(...S)),onKeydown:b[1]||(b[1]=ct((...S)=>s.value&&s.value(...S),["enter"]))},[a(e).collapsible?(l(),d("span",{key:0,class:K(["arrow",i.value?"down":"right"])},null,2)):E("",!0),Y(" "+N(a(e).text),1)],34)),(L=a(e).children)!=null&&L.length?(l(),P(Ue,{key:2},{default:R(()=>[Q(c("ul",Bo,[(l(!0),d(A,null,W(a(e).children,S=>(l(),P(x,{key:`${a(u)}${S.text}${S.link}`,item:S,depth:a(u)+1},null,8,["item","depth"]))),128))],512),[[he,i.value]])]),_:1})):E("",!0)])}}});var Po=T(No,[["__file","SidebarItem.vue"]]);const Eo={key:0,class:"sidebar-items"},Do=I({setup(n){const t=re(),e=Le();return ae(()=>t.hash,u=>{const r=document.querySelector(".sidebar");if(!r)return;const h=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${u}"]`);if(!h)return;const g=r.getBoundingClientRect().top,p=r.getBoundingClientRect().height,i=h.getBoundingClientRect().top,s=h.getBoundingClientRect().height;i<g?h.scrollIntoView(!0):i+s>g+p&&h.scrollIntoView(!1)}),(u,r)=>a(e).length?(l(),d("ul",Eo,[(l(!0),d(A,null,W(a(e),h=>(l(),P(Po,{key:h.link||h.text,item:h},null,8,["item"]))),128))])):E("",!0)}});var Mo=T(Do,[["__file","SidebarItems.vue"]]);const Ao={class:"sidebar no-print"},Fo=I({setup(n){return(t,e)=>(l(),d("aside",Ao,[w(Ke),M(t.$slots,"top"),w(Mo),M(t.$slots,"bottom")]))}});var Ho=T(Fo,[["__file","Sidebar.vue"]]);const Oo=["title"],Ro=c("div",{class:"icon","aria-hidden":"true"},[c("span"),c("span"),c("span")],-1),zo=[Ro],Wo=I({emits:["toggle"],setup(n){const t=j();return(e,u)=>(l(),d("div",{class:"toggle-menu",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>e.$emit("toggle"))},zo,8,Oo))}});var jo=T(Wo,[["__file","ToggleMenu.vue"]]);const Uo=I({setup(n){const t=ve(),e=q(),u=j(),r=y(()=>e.value.navbar!==!1&&u.value.navbar!==!1),h=Le(),g=H(!1),p=k=>{g.value=typeof k=="boolean"?k:!g.value};window.onresize=function(){var k=document.body.clientWidth;if(k<=718){var B=document.getElementsByClassName("page")[0],D=document.getElementsByClassName("sidebar")[0],U=D.clientWidth;U==0&&(D.style.display="translateX(-100%);",D.style.transform="translateX(-100%);",D.style.width="20rem"),B.style.paddingLeft=0}};const i=()=>{var k=document.getElementsByClassName("sidebar")[0],B=k.clientWidth,D=document.getElementsByClassName("page")[0];window.getComputedStyle(D,null);var U=document.body.clientWidth;B>0?(p(!1),k.style.width="0",D.style.paddingLeft=0):(p(!0),k.style.width="20rem",U>719&&(D.style.paddingLeft="20rem"))},s={x:0,y:0},f=k=>{s.x=k.changedTouches[0].clientX,s.y=k.changedTouches[0].clientY},v=k=>{const B=k.changedTouches[0].clientX-s.x,D=k.changedTouches[0].clientY-s.y;Math.abs(B)>Math.abs(D)&&Math.abs(B)>40&&(B>0&&s.x<=80?p(!0):p(!1))},_=y(()=>[{"no-navbar":!r.value,"no-sidebar":!h.value.length,"sidebar-open":g.value},e.value.pageClass]);let b;Ce(()=>{b=$e().afterEach(()=>{p(!1)})}),dt(()=>{b()});const x=vt(),L=x.resolve,S=x.pending;return(k,B)=>(l(),d("div",{class:K(["theme-container",a(_)]),onTouchstart:f,onTouchend:v},[M(k.$slots,"navbar",{},()=>[w(jo,{onToggle:i}),a(r)?(l(),P(oo,{key:0,onToggleSidebar:p},{before:R(()=>[M(k.$slots,"navbar-before")]),after:R(()=>[M(k.$slots,"navbar-after")]),_:3})):E("",!0)]),M(k.$slots,"sidebar",{},()=>[w(Ho,null,{top:R(()=>[M(k.$slots,"sidebar-top")]),bottom:R(()=>[M(k.$slots,"sidebar-bottom")]),_:3})]),M(k.$slots,"page",{},()=>[a(e).home?(l(),P(Mt,{key:0})):a(e).catgory?(l(),P(Gt,{key:1})):a(e).timeline?(l(),P(zt,{key:2})):a(e).config?(l(),P(yn,{key:3})):(l(),P(ze,{key:4,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(L),onBeforeLeave:a(S)},{default:R(()=>[(l(),P(Io,{key:a(t).path},{top:R(()=>[M(k.$slots,"page-top")]),bottom:R(()=>[M(k.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ko=T(Uo,[["__file","Layout.vue"]]);export{Ko as default};
