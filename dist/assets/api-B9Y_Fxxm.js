import{r as S,R as mt}from"./index-UFafr9tN.js";var Ut={exports:{}},Pt={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=S;function Qt(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:Qt,te=G.useState,ee=G.useEffect,ne=G.useLayoutEffect,se=G.useDebugValue;function re(t,e){var n=e(),o=te({inst:{value:n,getSnapshot:e}}),s=o[0].inst,i=o[1];return ne(function(){s.value=n,s.getSnapshot=e,lt(s)&&i({inst:s})},[t,n,e]),ee(function(){return lt(s)&&i({inst:s}),t(function(){lt(s)&&i({inst:s})})},[t]),se(n),n}function lt(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function oe(t,e){return e()}var ie=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?oe:re;Pt.useSyncExternalStore=G.useSyncExternalStore!==void 0?G.useSyncExternalStore:ie;Ut.exports=Pt;var ae=Ut.exports;const U=()=>{},D=U(),ft=Object,a=t=>t===D,N=t=>typeof t=="function",P=(t,e)=>({...t,...e}),ce=t=>N(t.then),rt=new WeakMap;let ue=0;const Z=t=>{const e=typeof t,n=t&&t.constructor,o=n==Date;let s,i;if(ft(t)===t&&!o&&n!=RegExp){if(s=rt.get(t),s)return s;if(s=++ue+"~",rt.set(t,s),n==Array){for(s="@",i=0;i<t.length;i++)s+=Z(t[i])+",";rt.set(t,s)}if(n==ft){s="#";const c=ft.keys(t).sort();for(;!a(i=c.pop());)a(t[i])||(s+=i+":"+Z(t[i])+",");rt.set(t,s)}}else s=o?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},W=new WeakMap,dt={},ot={},wt="undefined",it=typeof window!=wt,pt=typeof document!=wt,le=()=>it&&typeof window.requestAnimationFrame!=wt,qt=(t,e)=>{const n=W.get(t);return[()=>!a(e)&&t.get(e)||dt,o=>{if(!a(e)){const s=t.get(e);e in ot||(ot[e]=s),n[5](e,P(s,o),s||dt)}},n[6],()=>!a(e)&&e in ot?ot[e]:!a(e)&&t.get(e)||dt]};let _t=!0;const fe=()=>_t,[vt,St]=it&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[U,U],de=()=>{const t=pt&&document.visibilityState;return a(t)||t!=="hidden"},Ee=t=>(pt&&document.addEventListener("visibilitychange",t),vt("focus",t),()=>{pt&&document.removeEventListener("visibilitychange",t),St("focus",t)}),he=t=>{const e=()=>{_t=!0,t()},n=()=>{_t=!1};return vt("online",e),vt("offline",n),()=>{St("online",e),St("offline",n)}},Re={isOnline:fe,isVisible:de},pe={initFocus:Ee,initReconnect:he},xt=!mt.useId,tt=!it||"Deno"in window,_e=t=>le()?window.requestAnimationFrame(t):setTimeout(t,1),Et=tt?S.useEffect:S.useLayoutEffect,ht=typeof navigator<"u"&&navigator.connection,Ft=!tt&&ht&&(["slow-2g","2g"].includes(ht.effectiveType)||ht.saveData),gt=t=>{if(N(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Z(t):"",[t,e]};let ve=0;const Tt=()=>++ve,Ht=0,jt=1,kt=2,Se=3;var Q={__proto__:null,ERROR_REVALIDATE_EVENT:Se,FOCUS_EVENT:Ht,MUTATE_EVENT:kt,RECONNECT_EVENT:jt};async function Bt(...t){const[e,n,o,s]=t,i=P({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let c=i.populateCache;const h=i.rollbackOnError;let d=i.optimisticData;const y=g=>typeof h=="function"?h(g):h!==!1,T=i.throwOnError;if(N(n)){const g=n,R=[],V=e.keys();for(const _ of V)!/^\$(inf|sub)\$/.test(_)&&g(e.get(_)._k)&&R.push(_);return Promise.all(R.map(p))}return p(n);async function p(g){const[R]=gt(g);if(!R)return;const[V,_]=qt(e,R),[at,r,et,Y]=W.get(e),M=()=>{const b=at[R];return(N(i.revalidate)?i.revalidate(V().data,g):i.revalidate!==!1)&&(delete et[R],delete Y[R],b&&b[0])?b[0](kt).then(()=>V().data):V().data};if(t.length<3)return M();let m=o,C;const H=Tt();r[R]=[H,0];const E=!a(d),j=V(),I=j.data,k=j._c,q=a(k)?I:k;if(E&&(d=N(d)?d(q,I):d,_({data:d,_c:q})),N(m))try{m=m(q)}catch(b){C=b}if(m&&ce(m))if(m=await m.catch(b=>{C=b}),H!==r[R][0]){if(C)throw C;return m}else C&&E&&y(C)&&(c=!0,_({data:q,_c:D}));if(c&&!C)if(N(c)){const b=c(m,q);_({data:b,error:D,_c:D})}else _({data:m,error:D,_c:D});if(r[R][1]=Tt(),Promise.resolve(M()).then(()=>{_({_c:D})}),C){if(T)throw C;return}return m}}const Wt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},Te=(t,e)=>{if(!W.has(t)){const n=P(pe,e),o={},s=Bt.bind(D,t);let i=U;const c={},h=(T,p)=>{const g=c[T]||[];return c[T]=g,g.push(p),()=>g.splice(g.indexOf(p),1)},d=(T,p,g)=>{t.set(T,p);const R=c[T];if(R)for(const V of R)V(p,g)},y=()=>{if(!W.has(t)&&(W.set(t,[o,{},{},{},s,d,h]),!tt)){const T=n.initFocus(setTimeout.bind(D,Wt.bind(D,o,Ht))),p=n.initReconnect(setTimeout.bind(D,Wt.bind(D,o,jt)));i=()=>{T&&T(),p&&p(),W.delete(t)}}};return y(),[t,s,y,i]}return[t,W.get(t)[4]]},me=(t,e,n,o,s)=>{const i=n.errorRetryCount,c=s.retryCount,h=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!a(i)&&c>i||setTimeout(o,h,s)},we=(t,e)=>Z(t)==Z(e),[$t,ge]=Te(new Map),Oe=P({onLoadingSlow:U,onSuccess:U,onError:U,onErrorRetry:me,onDiscarded:U,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ft?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ft?5e3:3e3,compare:we,isPaused:()=>!1,cache:$t,mutate:ge,fallback:{}},Re),De=(t,e)=>{const n=P(t,e);if(e){const{use:o,fallback:s}=t,{use:i,fallback:c}=e;o&&i&&(n.use=o.concat(i)),s&&c&&(n.fallback=P(s,c))}return n},Ce=S.createContext({}),Ae="$inf$",zt=it&&window.__SWR_DEVTOOLS_USE__,ye=zt?window.__SWR_DEVTOOLS_USE__:[],be=()=>{zt&&(window.__SWR_DEVTOOLS_REACT__=mt)},Ve=t=>N(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Ie=()=>P(Oe,S.useContext(Ce)),Le=t=>(e,n,o)=>t(e,n&&((...i)=>{const[c]=gt(e),[,,,h]=W.get($t);if(c.startsWith(Ae))return n(...i);const d=h[c];return a(d)?n(...i):(delete h[c],d)}),o),Ne=ye.concat(Le),xe=t=>function(...n){const o=Ie(),[s,i,c]=Ve(n),h=De(o,c);let d=t;const{use:y}=h,T=(y||[]).concat(Ne);for(let p=T.length;p--;)d=T[p](d);return d(s,i||h.fetcher||null,h)},Fe=(t,e,n)=>{const o=e[t]||(e[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s>=0&&(o[s]=o[o.length-1],o.pop())}};be();const Mt=mt.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)}),Rt={dedupe:!0},We=(t,e,n)=>{const{cache:o,compare:s,suspense:i,fallbackData:c,revalidateOnMount:h,revalidateIfStale:d,refreshInterval:y,refreshWhenHidden:T,refreshWhenOffline:p,keepPreviousData:g}=n,[R,V,_,at]=W.get(o),[r,et]=gt(t),Y=S.useRef(!1),M=S.useRef(!1),m=S.useRef(r),C=S.useRef(e),H=S.useRef(n),E=()=>H.current,j=()=>E().isVisible()&&E().isOnline(),[I,k,q,b]=qt(o,r),B=S.useRef({}).current,Jt=a(c)?n.fallback[r]:c,Ot=(u,l)=>{for(const w in B){const f=w;if(f==="data"){if(!s(u[f],l[f])&&(!a(u[f])||!s(st,l[f])))return!1}else if(l[f]!==u[f])return!1}return!0},Dt=S.useMemo(()=>{const u=!r||!e?!1:a(h)?E().isPaused()||i?!1:a(d)?!0:d:h,l=O=>{const x=P(O);return delete x._k,u?{isValidating:!0,isLoading:!0,...x}:x},w=I(),f=b(),L=l(w),K=w===f?L:l(f);let v=L;return[()=>{const O=l(I());return Ot(O,v)?(v.data=O.data,v.isLoading=O.isLoading,v.isValidating=O.isValidating,v.error=O.error,v):(v=O,O)},()=>K]},[o,r]),$=ae.useSyncExternalStore(S.useCallback(u=>q(r,(l,w)=>{Ot(w,l)||u()}),[o,r]),Dt[0],Dt[1]),Ct=!Y.current,Kt=R[r]&&R[r].length>0,z=$.data,J=a(z)?Jt:z,nt=$.error,At=S.useRef(J),st=g?a(z)?At.current:z:J,yt=Kt&&!a(nt)?!1:Ct&&!a(h)?h:E().isPaused()?!1:i?a(J)?!1:d:a(J)||d,bt=!!(r&&e&&Ct&&yt),Gt=a($.isValidating)?bt:$.isValidating,Yt=a($.isLoading)?bt:$.isLoading,X=S.useCallback(async u=>{const l=C.current;if(!r||!l||M.current||E().isPaused())return!1;let w,f,L=!0;const K=u||{},v=!_[r]||!K.dedupe,O=()=>xt?!M.current&&r===m.current&&Y.current:r===m.current,x={isValidating:!1,isLoading:!1},It=()=>{k(x)},Lt=()=>{const A=_[r];A&&A[1]===f&&delete _[r]},Nt={isValidating:!0};a(I().data)&&(Nt.isLoading=!0);try{if(v&&(k(Nt),n.loadingTimeout&&a(I().data)&&setTimeout(()=>{L&&O()&&E().onLoadingSlow(r,n)},n.loadingTimeout),_[r]=[l(et),Tt()]),[w,f]=_[r],w=await w,v&&setTimeout(Lt,n.dedupingInterval),!_[r]||_[r][1]!==f)return v&&O()&&E().onDiscarded(r),!1;x.error=D;const A=V[r];if(!a(A)&&(f<=A[0]||f<=A[1]||A[1]===0))return It(),v&&O()&&E().onDiscarded(r),!1;const F=I().data;x.data=s(F,w)?F:w,v&&O()&&E().onSuccess(w,r,n)}catch(A){Lt();const F=E(),{shouldRetryOnError:ct}=F;F.isPaused()||(x.error=A,v&&O()&&(F.onError(A,r,F),(ct===!0||N(ct)&&ct(A))&&(!E().revalidateOnFocus||!E().revalidateOnReconnect||j())&&F.onErrorRetry(A,r,F,Xt=>{const ut=R[r];ut&&ut[0]&&ut[0](Q.ERROR_REVALIDATE_EVENT,Xt)},{retryCount:(K.retryCount||0)+1,dedupe:!0})))}return L=!1,It(),!0},[r,o]),Vt=S.useCallback((...u)=>Bt(o,m.current,...u),[]);if(Et(()=>{C.current=e,H.current=n,a(z)||(At.current=z)}),Et(()=>{if(!r)return;const u=X.bind(D,Rt);let l=0;const f=Fe(r,R,(L,K={})=>{if(L==Q.FOCUS_EVENT){const v=Date.now();E().revalidateOnFocus&&v>l&&j()&&(l=v+E().focusThrottleInterval,u())}else if(L==Q.RECONNECT_EVENT)E().revalidateOnReconnect&&j()&&u();else{if(L==Q.MUTATE_EVENT)return X();if(L==Q.ERROR_REVALIDATE_EVENT)return X(K)}});return M.current=!1,m.current=r,Y.current=!0,k({_k:et}),yt&&(a(J)||tt?u():_e(u)),()=>{M.current=!0,f()}},[r]),Et(()=>{let u;function l(){const f=N(y)?y(I().data):y;f&&u!==-1&&(u=setTimeout(w,f))}function w(){!I().error&&(T||E().isVisible())&&(p||E().isOnline())?X(Rt).then(l):l()}return l(),()=>{u&&(clearTimeout(u),u=-1)}},[y,T,p,r]),S.useDebugValue(st),i&&a(J)&&r){if(!xt&&tt)throw new Error("Fallback data is required when using suspense in SSR.");C.current=e,H.current=n,M.current=!1;const u=at[r];if(!a(u)){const l=Vt(u);Mt(l)}if(a(nt)){const l=X(Rt);a(st)||(l.status="fulfilled",l.value=!0),Mt(l)}else throw nt}return{mutate:Vt,get data(){return B.data=!0,st},get error(){return B.error=!0,nt},get isValidating(){return B.isValidating=!0,Gt},get isLoading(){return B.isLoading=!0,Yt}}},Me=xe(We),Ue="https://ikmaslahat.com/api/data",Pe=t=>fetch(t).then(e=>e.json()),He=t=>{const{data:e,error:n}=Me(Ue,Pe);return{data:Array.isArray(e)?e.filter(s=>s.type===t):[],error:n,isLoading:!e&&!n}};export{He as u};
