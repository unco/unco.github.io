function g(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function D(){return Object.create(null)}function x(t){t.forEach(O)}function A(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function P(t,...n){if(t==null)return g;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t){let n;return P(t,e=>n=e)(),n}function ot(t,n,e){t.$$.on_destroy.push(P(n,e))}function at(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,o){if(r){const c=B(n,e,i,o);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t,n,e){return t.set(e),n}function mt(t){return t&&A(t.destroy)?t.destroy:g}let E=!1;function W(){E=!0}function G(){E=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&u.push(f)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const s=n[u].claim_order,f=(r>0&&n[e[r]].claim_order<=s?r+1:J(1,r,$=>n[e[$]].claim_order,s))-1;i[u]=e[f]+1;const a=f+1;e[a]=u,r=Math.max(a,r)}const o=[],c=[];let l=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);l>=u;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);o.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<o.length&&c[u].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(c[u],f)}}function Q(t,n){if(E){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){E&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function bt(){return S("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t){return function(n){return n.preventDefault(),t.call(this,n)}}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t){return t===""?null:+t}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){X(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const u=e(l);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const u=e(l);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function wt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Nt(t){return Z(t," ")}function Ct(t,n){n=""+n,t.data!==n&&(t.data=n)}function kt(t,n){t.value=n??""}function At(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n,e){t.classList[e?"add":"remove"](n)}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function jt(t,n){return new t(n)}let b;function y(t){b=t}function p(){if(!b)throw new Error("Function called outside component initialization");return b}function Mt(t){p().$$.on_mount.push(t)}function Dt(t){p().$$.after_update.push(t)}function Lt(t){p().$$.on_destroy.push(t)}function Ot(){const t=p();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=tt(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Pt(t,n){return p().$$.context.set(t,n),n}function Bt(t){return p().$$.context.get(t)}function Tt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],L=[];let m=[];const N=[],q=Promise.resolve();let C=!1;function z(){C||(C=!0,q.then(F))}function qt(){return z(),q}function k(t){m.push(t)}function zt(t){N.push(t)}const w=new Set;let _=0;function F(){if(_!==0)return;const t=b;do{try{for(;_<h.length;){const n=h[_];_++,y(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(y(null),h.length=0,_=0;L.length;)L.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];w.has(e)||(w.add(e),e())}m.length=0}while(h.length);for(;N.length;)N.pop()();C=!1,w.clear(),y(t)}function nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function et(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const v=new Set;let d;function Ft(){d={r:0,c:[],p:d}}function Ht(){d.r||x(d.c),d=d.p}function it(t,n){t&&t.i&&(v.delete(t),t.i(n))}function It(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Wt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Gt(t){t&&t.c()}function Jt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const c=t.$$.on_mount.map(O).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(k)}function ct(t,n){const e=t.$$;e.fragment!==null&&(et(e.after_update),x(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Kt(t,n,e,i,r,o,c,l=[-1]){const u=b;y(t);const s=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:D(),dirty:l,skip_bound:!1,root:n.target||u.$$.root};c&&c(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,$,...j)=>{const M=j.length?j[0]:$;return s.ctx&&r(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&ut(t,a)),$}):[],s.update(),f=!0,x(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){W();const a=V(n.target);s.fragment&&s.fragment.l(a),a.forEach(R)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),G(),F()}y(u)}class Qt{$destroy(){ct(this,1),this.$destroy=g}$on(n,e){if(!A(e))return g;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{P as $,rt as A,ct as B,at as C,dt as D,_t as E,ft as F,Q as G,g as H,ot as I,lt as J,Lt as K,Pt as L,mt as M,xt as N,x as O,ht as P,Bt as Q,Ot as R,Qt as S,Wt as T,zt as U,Tt as V,St as W,$t as X,yt as Y,kt as Z,Et as _,gt as a,A as a0,pt as b,Nt as c,It as d,bt as e,Ht as f,it as g,R as h,Kt as i,Dt as j,U as k,wt as l,V as m,vt as n,Mt as o,At as p,S as q,Z as r,st as s,qt as t,Ct as u,Ft as v,L as w,jt as x,Gt as y,Jt as z};