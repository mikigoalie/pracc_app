(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function _(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=_(o);fetch(o.href,r)}})();var V,a,$e,S,_e,xe,z,T={},Pe=[],Le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function C(e,t){for(var _ in t)e[_]=t[_];return e}function we(e){var t=e.parentNode;t&&t.removeChild(e)}function K(e,t,_){var n,o,r,l={};for(r in t)r=="key"?n=t[r]:r=="ref"?o=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?V.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return L(e,l,n,o,null)}function L(e,t,_,n,o){var r={type:e,props:t,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++$e};return o==null&&a.vnode!=null&&a.vnode(r),r}function A(e){return e.children}function P(e,t){this.props=e,this.context=t}function U(e,t){if(t==null)return e.__?U(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__d||_.__e;return typeof e.type=="function"?U(e):null}function Ce(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return Ce(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!I.__r++||_e!==a.debounceRendering)&&((_e=a.debounceRendering)||xe)(I)}function I(){var e,t,_,n,o,r,l,c,u;for(S.sort(z);e=S.shift();)e.__d&&(t=S.length,n=void 0,o=void 0,r=void 0,c=(l=(_=e).__v).__e,(u=_.__P)&&(n=[],o=[],(r=C({},l)).__v=l.__v+1,ee(u,l,r,_.__n,u.ownerSVGElement!==void 0,l.__h!=null?[c]:null,n,c??U(l),l.__h,o),Te(n,l,o),l.__e!=c&&Ce(l)),S.length>t&&S.sort(z));I.__r=0}function Se(e,t,_,n,o,r,l,c,u,m,h){var i,v,p,s,d,E,y,g,x,N=0,k=n&&n.__k||Pe,O=k.length,w=O,H=t.length;for(_.__k=[],i=0;i<H;i++)(s=_.__k[i]=(s=t[i])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?L(null,s,null,null,s):j(s)?L(A,{children:s},null,null,null):s.__b>0?L(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null?(s.__=_,s.__b=_.__b+1,(g=Me(s,k,y=i+N,w))===-1?p=T:(p=k[g]||T,k[g]=void 0,w--),ee(e,s,p,o,r,l,c,u,m,h),d=s.__e,(v=s.ref)&&p.ref!=v&&(p.ref&&te(p.ref,null,s),h.push(v,s.__c||d,s)),d!=null&&(E==null&&(E=d),(x=p===T||p.__v===null)?g==-1&&N--:g!==y&&(g===y+1?N++:g>y?w>H-y?N+=g-y:N--:N=g<y&&g==y-1?g-y:0),y=i+N,typeof s.type!="function"||g===y&&p.__k!==s.__k?typeof s.type=="function"||g===y&&!x?s.__d!==void 0?(u=s.__d,s.__d=void 0):u=d.nextSibling:u=He(e,d,u):u=Ee(s,u,e),typeof _.type=="function"&&(_.__d=u))):(p=k[i])&&p.key==null&&p.__e&&(p.__e==u&&(p.__=n,u=U(p)),G(p,p,!1),k[i]=null);for(_.__e=E,i=O;i--;)k[i]!=null&&(typeof _.type=="function"&&k[i].__e!=null&&k[i].__e==_.__d&&(_.__d=k[i].__e.nextSibling),G(k[i],k[i]))}function Ee(e,t,_){for(var n,o=e.__k,r=0;o&&r<o.length;r++)(n=o[r])&&(n.__=e,t=typeof n.type=="function"?Ee(n,t,_):He(_,n.__e,t));return t}function B(e,t){return t=t||[],e==null||typeof e=="boolean"||(j(e)?e.some(function(_){B(_,t)}):t.push(e)),t}function He(e,t,_){return _==null||_.parentNode!==e?e.insertBefore(t,null):t==_&&t.parentNode!=null||e.insertBefore(t,_),t.nextSibling}function Me(e,t,_,n){var o=e.key,r=e.type,l=_-1,c=_+1,u=t[_];if(u===null||u&&o==u.key&&r===u.type)return _;if(n>(u!=null?1:0))for(;l>=0||c<t.length;){if(l>=0){if((u=t[l])&&o==u.key&&r===u.type)return l;l--}if(c<t.length){if((u=t[c])&&o==u.key&&r===u.type)return c;c++}}return-1}function We(e,t,_,n,o){var r;for(r in _)r==="children"||r==="key"||r in t||R(e,r,null,_[r],n);for(r in t)o&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||_[r]===t[r]||R(e,r,t[r],_[r],n)}function re(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||Le.test(t)?_:_+"px"}function R(e,t,_,n,o){var r;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)_&&t in _||re(e.style,t,"");if(_)for(t in _)n&&_[t]===n[t]||re(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=_,_?n?_.u=n.u:(_.u=Date.now(),e.addEventListener(t,r?ie:oe,r)):e.removeEventListener(t,r?ie:oe,r);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function oe(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(a.event?a.event(e):e)}function ie(e){return this.l[e.type+!0](a.event?a.event(e):e)}function ee(e,t,_,n,o,r,l,c,u,m){var h,i,v,p,s,d,E,y,g,x,N,k,O,w,H,$=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(u=_.__h,c=t.__e=_.__e,t.__h=null,r=[c]),(h=a.__b)&&h(t);e:if(typeof $=="function")try{if(y=t.props,g=(h=$.contextType)&&n[h.__c],x=h?g?g.props.value:h.__:n,_.__c?E=(i=t.__c=_.__c).__=i.__E:("prototype"in $&&$.prototype.render?t.__c=i=new $(y,x):(t.__c=i=new P(y,x),i.constructor=$,i.render=Be),g&&g.sub(i),i.props=y,i.state||(i.state={}),i.context=x,i.__n=n,v=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),$.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,$.getDerivedStateFromProps(y,i.__s))),p=i.props,s=i.state,i.__v=t,v)$.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if($.getDerivedStateFromProps==null&&y!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,x),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,x)===!1||t.__v===_.__v)){for(t.__v!==_.__v&&(i.props=y,i.state=i.__s,i.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(D){D&&(D.__=t)}),N=0;N<i._sb.length;N++)i.__h.push(i._sb[N]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,x),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,s,d)})}if(i.context=x,i.props=y,i.__P=e,i.__e=!1,k=a.__r,O=0,"prototype"in $&&$.prototype.render){for(i.state=i.__s,i.__d=!1,k&&k(t),h=i.render(i.props,i.state,i.context),w=0;w<i._sb.length;w++)i.__h.push(i._sb[w]);i._sb=[]}else do i.__d=!1,k&&k(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++O<25);i.state=i.__s,i.getChildContext!=null&&(n=C(C({},n),i.getChildContext())),v||i.getSnapshotBeforeUpdate==null||(d=i.getSnapshotBeforeUpdate(p,s)),Se(e,j(H=h!=null&&h.type===A&&h.key==null?h.props.children:h)?H:[H],t,_,n,o,r,l,c,u,m),i.base=t.__e,t.__h=null,i.__h.length&&l.push(i),E&&(i.__E=i.__=null)}catch(D){t.__v=null,(u||r!=null)&&(t.__e=c,t.__h=!!u,r[r.indexOf(c)]=null),a.__e(D,t,_)}else r==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=Ie(_.__e,t,_,n,o,r,l,u,m);(h=a.diffed)&&h(t)}function Te(e,t,_){for(var n=0;n<_.length;n++)te(_[n],_[++n],_[++n]);a.__c&&a.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){a.__e(r,o.__v)}})}function Ie(e,t,_,n,o,r,l,c,u){var m,h,i,v=_.props,p=t.props,s=t.type,d=0;if(s==="svg"&&(o=!0),r!=null){for(;d<r.length;d++)if((m=r[d])&&"setAttribute"in m==!!s&&(s?m.localName===s:m.nodeType===3)){e=m,r[d]=null;break}}if(e==null){if(s===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,p.is&&p),r=null,c=!1}if(s===null)v===p||c&&e.data===p||(e.data=p);else{if(r=r&&V.call(e.childNodes),h=(v=_.props||T).dangerouslySetInnerHTML,i=p.dangerouslySetInnerHTML,!c){if(r!=null)for(v={},d=0;d<e.attributes.length;d++)v[e.attributes[d].name]=e.attributes[d].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(We(e,p,v,o,c),i)t.__k=[];else if(Se(e,j(d=t.props.children)?d:[d],t,_,n,o&&s!=="foreignObject",r,l,r?r[0]:_.__k&&U(_,0),c,u),r!=null)for(d=r.length;d--;)r[d]!=null&&we(r[d]);c||("value"in p&&(d=p.value)!==void 0&&(d!==e.value||s==="progress"&&!d||s==="option"&&d!==v.value)&&R(e,"value",d,v.value,!1),"checked"in p&&(d=p.checked)!==void 0&&d!==e.checked&&R(e,"checked",d,v.checked,!1))}return e}function te(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(n){a.__e(n,_)}}function G(e,t,_){var n,o;if(a.unmount&&a.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||te(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){a.__e(r,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&G(n[o],t,_||typeof e.type!="function");_||e.__e==null||we(e.__e),e.__=e.__e=e.__d=void 0}function Be(e,t,_){return this.constructor(e,_)}function Re(e,t,_){var n,o,r,l;a.__&&a.__(e,t),o=(n=typeof _=="function")?null:_&&_.__k||t.__k,r=[],l=[],ee(t,e=(!n&&_||t).__k=K(A,null,[e]),o||T,T,t.ownerSVGElement!==void 0,!n&&_?[_]:o?null:t.firstChild?V.call(t.childNodes):null,r,!n&&_?_:o?o.__e:t.firstChild,n,l),Te(r,e,l)}V=Pe.slice,a={__e:function(e,t,_,n){for(var o,r,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),l=o.__d),l)return o.__E=o}catch(c){e=c}throw e}},$e=0,P.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},_),this.props)),e&&C(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),ne(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},P.prototype.render=A,S=[],xe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z=function(e,t){return e.__v.__b-t.__v.__b},I.__r=0;var Q,b,q,le,X=0,Ae=[],M=[],ce=a.__b,ue=a.__r,ae=a.diffed,se=a.__c,fe=a.unmount;function Ve(e,t){a.__h&&a.__h(b,e,X||t),X=0;var _=b.__H||(b.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:M}),_.__[e]}function Y(e){return X=1,je(Oe,e)}function je(e,t,_){var n=Ve(Q++,2);if(n.t=e,!n.__c&&(n.__=[_?_(t):Oe(void 0,t),function(c){var u=n.__N?n.__N[0]:n.__[0],m=n.t(u,c);u!==m&&(n.__N=[m,n.__[1]],n.__c.setState({}))}],n.__c=b,!b.u)){var o=function(c,u,m){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(v){return v.__c});if(h.every(function(v){return!v.__N}))return!r||r.call(this,c,u,m);var i=!1;return h.forEach(function(v){if(v.__N){var p=v.__[0];v.__=v.__N,v.__N=void 0,p!==v.__[0]&&(i=!0)}}),!(!i&&n.__c.props===c)&&(!r||r.call(this,c,u,m))};b.u=!0;var r=b.shouldComponentUpdate,l=b.componentWillUpdate;b.componentWillUpdate=function(c,u,m){if(this.__e){var h=r;r=void 0,o(c,u,m),r=h}l&&l.call(this,c,u,m)},b.shouldComponentUpdate=o}return n.__N||n.__}function qe(){for(var e;e=Ae.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(J),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}}a.__b=function(e){b=null,ce&&ce(e)},a.__r=function(e){ue&&ue(e),Q=0;var t=(b=e.__c).__H;t&&(q===b?(t.__h=[],b.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=M,_.__N=_.i=void 0})):(t.__h.forEach(W),t.__h.forEach(J),t.__h=[],Q=0)),q=b},a.diffed=function(e){ae&&ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ae.push(t)!==1&&le===a.requestAnimationFrame||((le=a.requestAnimationFrame)||Ze)(qe)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==M&&(_.__=_.__V),_.i=void 0,_.__V=M})),q=b=null},a.__c=function(e,t){t.some(function(_){try{_.__h.forEach(W),_.__h=_.__h.filter(function(n){return!n.__||J(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],a.__e(n,_.__v)}}),se&&se(e,t)},a.unmount=function(e){fe&&fe(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{W(n)}catch(o){t=o}}),_.__H=void 0,t&&a.__e(t,_.__v))};var pe=typeof requestAnimationFrame=="function";function Ze(e){var t,_=function(){clearTimeout(n),pe&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(_,100);pe&&(t=requestAnimationFrame(_))}function W(e){var t=b,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),b=t}function J(e){var t=b;e.__c=e.__(),b=t}function Oe(e,t){return typeof t=="function"?t(e):t}function ze(e,t){for(var _ in t)e[_]=t[_];return e}function de(e,t){for(var _ in e)if(_!=="__source"&&!(_ in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function he(e){this.props=e}(he.prototype=new P).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(e,t){return de(this.props,e)||de(this.state,t)};var ve=a.__b;a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ve&&ve(e)};var Ke=a.__e;a.__e=function(e,t,_,n){if(e.then){for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return t.__e==null&&(t.__e=_.__e,t.__k=_.__k),o.__c(e,t)}Ke(e,t,_,n)};var me=a.unmount;function Ue(e,t,_){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=ze({},e)).__c!=null&&(e.__c.__P===_&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Ue(n,t,_)})),e}function De(e,t,_){return e&&_&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return De(n,t,_)}),e.__c&&e.__c.__P===t&&(e.__e&&_.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=_)),e}function Z(){this.__u=0,this.t=null,this.__b=null}function Fe(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function F(){this.u=null,this.o=null}a.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),me&&me(e)},(Z.prototype=new P).__c=function(e,t){var _=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(_);var o=Fe(n.__v),r=!1,l=function(){r||(r=!0,_.__R=null,o?o(c):c())};_.__R=l;var c=function(){if(!--n.__u){if(n.state.__a){var m=n.state.__a;n.__v.__k[0]=De(m,m.__c.__P,m.__c.__O)}var h;for(n.setState({__a:n.__b=null});h=n.t.pop();)h.forceUpdate()}},u=t.__h===!0;n.__u++||u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(l,l)},Z.prototype.componentWillUnmount=function(){this.t=[]},Z.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var _=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Ue(this.__b,_,n.__O=n.__P)}this.__b=null}var o=t.__a&&K(A,null,e.fallback);return o&&(o.__h=null),[K(A,null,t.__a?null:e.children),o]};var ye=function(e,t,_){if(++_[1]===_[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(_=e.u;_;){for(;_.length>3;)_.pop()();if(_[1]<_[0])break;e.u=_=_[2]}};(F.prototype=new P).__a=function(e){var t=this,_=Fe(t.__v),n=t.o.get(e);return n[0]++,function(o){var r=function(){t.props.revealOrder?(n.push(o),ye(t,e,n)):o()};_?_(r):r()}},F.prototype.render=function(e){this.u=null,this.o=new Map;var t=B(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var _=t.length;_--;)this.o.set(t[_],this.u=[1,0,this.u]);return e.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,_){ye(e,_,t)})};var Ge=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Xe=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ye=/[A-Z0-9]/g,Je=typeof document<"u",et=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var be=a.event;function tt(){}function _t(){return this.cancelBubble}function nt(){return this.defaultPrevented}a.event=function(e){return be&&(e=be(e)),e.persist=tt,e.isPropagationStopped=_t,e.isDefaultPrevented=nt,e.nativeEvent=e};var rt={enumerable:!1,configurable:!0,get:function(){return this.class}},ge=a.vnode;a.vnode=function(e){typeof e.type=="string"&&function(t){var _=t.props,n=t.type,o={};for(var r in _){var l=_[r];if(!(r==="value"&&"defaultValue"in _&&l==null||Je&&r==="children"&&n==="noscript"||r==="class"||r==="className")){var c=r.toLowerCase();r==="defaultValue"&&"value"in _&&_.value==null?r="value":r==="download"&&l===!0?l="":c==="ondoubleclick"?r="ondblclick":c!=="onchange"||n!=="input"&&n!=="textarea"||et(_.type)?c==="onfocus"?r="onfocusin":c==="onblur"?r="onfocusout":Xe.test(r)?r=c:n.indexOf("-")===-1&&Qe.test(r)?r=r.replace(Ye,"-$&").toLowerCase():l===null&&(l=void 0):c=r="oninput",c==="oninput"&&o[r=c]&&(r="oninputCapture"),o[r]=l}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=B(_.children).forEach(function(u){u.props.selected=o.value.indexOf(u.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=B(_.children).forEach(function(u){u.props.selected=o.multiple?o.defaultValue.indexOf(u.props.value)!=-1:o.defaultValue==u.props.value})),_.class&&!_.className?(o.class=_.class,Object.defineProperty(o,"className",rt)):(_.className&&!_.class||_.class&&_.className)&&(o.class=o.className=_.className),t.props=o}(e),e.$$typeof=Ge,ge&&ge(e)};var ke=a.__r;a.__r=function(e){ke&&ke(e),e.__c};var Ne=a.diffed;a.diffed=function(e){Ne&&Ne(e);var t=e.props,_=e.__e;_!=null&&e.type==="textarea"&&"value"in t&&t.value!==_.value&&(_.value=t.value==null?"":t.value)};var ot=0;function f(e,t,_,n,o,r){var l,c,u={};for(c in t)c=="ref"?l=t[c]:u[c]=t[c];var m={type:e,props:u,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ot,__source:o,__self:r};if(typeof e=="function"&&(l=e.defaultProps))for(c in l)u[c]===void 0&&(u[c]=l[c]);return a.vnode&&a.vnode(m),m}function it(){return f("h2",{children:"Finanční hlídač"})}function lt({TRANSACTIONS:e}){const _=e.map(n=>n.amount).reduce((n,o)=>o+n,0).toFixed(2);return f("div",{children:[f("h4",{children:"Aktuální zůstatek"}),f("h1",{children:[_," CZK"]})]})}function ct({TRANSACTIONS:e}){const t=e.map(o=>o.amount),_=t.filter(o=>o>=0).reduce((o,r)=>r+o,0).toFixed(2),n=t.filter(o=>o<0).reduce((o,r)=>r+o,0).toFixed(2);return f("div",{class:"inc-exp-container",children:[f("div",{children:[f("h4",{children:"Příjem"}),f("p",{className:"money plus",children:`+${_} CZK`})]}),f("div",{children:[f("h4",{children:"Výdaj"}),f("p",{className:"money minus",children:`${n} CZK`})]})]})}function ut({addNewTransaction:e}){const[t,_]=Y(""),[n,o]=Y(0);return f("div",{children:[f("h3",{children:"Přidat novou transakci"}),f("form",{children:[f("div",{className:"form-control",children:[f("label",{htmlFor:"text",children:"Položka"}),f("input",{type:"text",value:t,onChange:r=>_(r.target.value),placeholder:"Napište text..."})]}),f("div",{className:"form-control",children:[f("label",{htmlFor:"amount",children:"Částka"}),f("input",{type:"number",value:n,onChange:r=>o(parseFloat(r.target.value)),placeholder:"Enter amount..."})]}),f("button",{onClick:r=>{r.preventDefault(),t&&(e({item:t,price:n}),_(""),o(0))},className:"btn",children:"Přidat"})]})]})}function at({TRANSACTION:e,onDelete:t}){const _=e.amount>=0,n=_?"+":"-";return f("li",{className:_?"plus":"minus",children:[e.text," ",f("span",{children:`${n} ${Math.abs(e.amount)} CZK`}),f("button",{onClick:t,className:"delete-btn",children:"x"})]})}function st({TRANSACTIONS:e,deleteTransaction:t}){return e.length>0?f("div",{children:[f("h3",{children:"Přehled"}),f("ul",{className:"list",children:e.map((_,n)=>f(at,{onDelete:()=>t(_),TRANSACTION:_},n))})]}):f("div",{children:"Bez transakcí"})}function ft(){const[e,t]=Y([{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]),_=o=>{if(!o)return;const r=e.filter(l=>l.id!==o.id);t(r)},n=o=>{if(!o.item||!o.price)return;const r={id:Math.floor(Math.random()*9999999),text:o.item,amount:o.price},l=[...e,r];t(l)};return f("div",{children:[f(it,{}),f("div",{className:"container",children:[f(lt,{TRANSACTIONS:e}),f(ct,{TRANSACTIONS:e}),f(st,{TRANSACTIONS:e,deleteTransaction:_}),f(ut,{addNewTransaction:n})]})]})}function pt(){return f(ft,{})}Re(f(pt,{}),document.getElementById("root"));