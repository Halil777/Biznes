import{r as f,b as P,d as U}from"./index-UFafr9tN.js";const $=(...e)=>{console!=null&&console.warn&&(g(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},j={},b=(...e)=>{g(e[0])&&j[e[0]]||(g(e[0])&&(j[e[0]]=new Date),$(...e))},M=(e,n)=>()=>{if(e.isInitialized)n();else{const s=()=>{setTimeout(()=>{e.off("initialized",s)},0),n()};e.on("initialized",s)}},k=(e,n,s)=>{e.loadNamespaces(n,M(e,s))},F=(e,n,s,a)=>{g(s)&&(s=[s]),s.forEach(m=>{e.options.ns.indexOf(m)<0&&e.options.ns.push(m)}),e.loadLanguages(n,M(e,a))},A=(e,n,s={})=>!n.languages||!n.languages.length?(b("i18n.languages were undefined or empty",n.languages),!0):n.hasLoadedNamespace(e,{lng:s.lng,precheck:(a,m)=>{var t;if(((t=s.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!m(a.isLanguageChangingTo,e))return!1}}),g=e=>typeof e=="string",G=e=>typeof e=="object"&&e!==null,J=f.createContext();class W{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(s=>{var a;(a=this.usedNamespaces)[s]??(a[s]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Y=(e,n)=>{const s=f.useRef();return f.useEffect(()=>{s.current=e},[e,n]),s.current},v=(e,n,s,a)=>e.getFixedT(n,s,a),q=(e,n,s,a)=>f.useCallback(v(e,n,s,a),[e,n,s,a]),H=(e,n={})=>{var z,R,L,I;const{i18n:s}=n,{i18n:a,defaultNS:m}=f.useContext(J)||{},t=s||a||U();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new W),!t){b("You will need to pass in an i18next instance by using initReactI18next");const i=(c,u)=>g(u)?u:G(u)&&g(u.defaultValue)?u.defaultValue:Array.isArray(c)?c[c.length-1]:c,r=[i,{},!1];return r.t=i,r.i18n={},r.ready=!1,r}(z=t.options.react)!=null&&z.wait&&b("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const N={...P(),...t.options.react,...n},{useSuspense:T,keyPrefix:x}=N;let o=m||((R=t.options)==null?void 0:R.defaultNS);o=g(o)?[o]:o||["translation"],(I=(L=t.reportNamespaces).addUsedNamespaces)==null||I.call(L,o);const l=(t.isInitialized||t.initializedStoreOnce)&&o.every(i=>A(i,t,N)),O=q(t,n.lng||null,N.nsMode==="fallback"?o:o[0],x),C=()=>O,w=()=>v(t,n.lng||null,N.nsMode==="fallback"?o:o[0],x),[S,h]=f.useState(C);let y=o.join();n.lng&&(y=`${n.lng}${y}`);const E=Y(y),d=f.useRef(!0);f.useEffect(()=>{const{bindI18n:i,bindI18nStore:r}=N;d.current=!0,!l&&!T&&(n.lng?F(t,n.lng,o,()=>{d.current&&h(w)}):k(t,o,()=>{d.current&&h(w)})),l&&E&&E!==y&&d.current&&h(w);const c=()=>{d.current&&h(w)};return i&&(t==null||t.on(i,c)),r&&(t==null||t.store.on(r,c)),()=>{d.current=!1,t&&(i==null||i.split(" ").forEach(u=>t.off(u,c))),r&&t&&r.split(" ").forEach(u=>t.store.off(u,c))}},[t,y]),f.useEffect(()=>{d.current&&l&&h(C)},[t,x,l]);const p=[S,t,l];if(p.t=S,p.i18n=t,p.ready=l,l||!l&&!T)return p;throw new Promise(i=>{n.lng?F(t,n.lng,o,()=>i()):k(t,o,()=>i())})};export{H as u};
