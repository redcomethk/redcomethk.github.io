(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function a(){}function H(e){return e()}function M(){return Object.create(null)}function m(e){e.forEach(H)}function L(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function S(e){return Object.keys(e).length===0}function z(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function A(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function P(){return I(" ")}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e){return Array.from(e.childNodes)}let _;function f(e){_=e}const d=[],E=[],g=[],C=[],T=Promise.resolve();let w=!1;function q(){w||(w=!0,T.then(N))}function b(e){g.push(e)}const v=new Set;let h=0;function N(){const e=_;do{for(;h<d.length;){const t=d[h];h++,f(t),K(t.$$)}for(f(null),d.length=0,h=0;E.length;)E.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];v.has(n)||(v.add(n),n())}g.length=0}while(d.length);for(;C.length;)C.pop()();w=!1,v.clear(),f(e)}function K(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const W=new Set;function D(e,t){e&&e.i&&(W.delete(e),e.i(t))}function G(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||b(()=>{const s=e.$$.on_mount.map(H).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...s):m(s),e.$$.on_mount=[]}),o.forEach(b)}function J(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(d.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,l,r,o,s,O=[-1]){const u=_;f(e);const i=e.$$={fragment:null,ctx:[],props:o,update:a,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:M(),dirty:O,skip_bound:!1,root:t.target||u.$$.root};s&&s(i.root);let x=!1;if(i.ctx=n?n(e,t.props||{},(c,y,...k)=>{const $=k.length?k[0]:y;return i.ctx&&r(i.ctx[c],i.ctx[c]=$)&&(!i.skip_bound&&i.bound[c]&&i.bound[c]($),x&&Q(e,c)),y}):[],i.update(),x=!0,m(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const c=R(t.target);i.fragment&&i.fragment.l(c),c.forEach(p)}else i.fragment&&i.fragment.c();t.intro&&D(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),N()}f(u)}class V{$destroy(){J(this,1),this.$destroy=a}$on(t,n){if(!L(n))return a;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!S(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(e){let t,n,l;return{c(){t=A("html"),n=P(),l=A("main"),l.innerHTML=`<div class="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500"><div class="rounded-lg bg-white md:w-1/2 w-full h-2/3 lg:h-3/4 flex flex-col"><div class="p-3 grow-[7] bg-[url(&#39;./assets/background.png&#39;)] bg-center bg-cover rounded-tl-lg rounded-tr-lg flex flex-col justify-end items-center"><div class="font-bold text-grey">RALPH CHAN</div> 
        <div class="font-bold text-grey">Software Engineer</div></div> 
      <div class="p-3 grow-[2] flex flex-col items-center justify-center"><div class="px-10">Full-stack developer. Apart from different web and mobile
          applications, currently I&#39;m going all-in on Web3 and Solidity. Let&#39;s
          explore the new world together.</div> 
        <div class="flex items-center mt-5"><div class="px-3"><a href="https://stackoverflow.com/users/534503/ralphchan" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-stackoverflow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"></path><path d="M8 16h8"></path><path d="M8.322 12.582l7.956 .836"></path><path d="M8.787 9.168l7.826 1.664"></path><path d="M10.096 5.764l7.608 2.472"></path></svg></a></div> 
          <div class="px-3"><a href="https://github.com/redcomethk" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></div> 
          <div class="px-3"><a href="https://t.me/redcomethk" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path></svg></a></div> 
          <div class="px-3"><a href="mailto:chan.wai.fu.ralph@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg></a></div></div></div></div></div>`,document.title="Hello! I'm Ralph",F(t,"lang","en")},m(r,o){z(document.head,t),j(r,n,o),j(r,l,o)},p:a,i:a,o:a,d(r){p(t),r&&p(n),r&&p(l)}}}class Y extends V{constructor(t){super(),U(this,t,null,X,B,{})}}new Y({target:document.getElementById("app")});