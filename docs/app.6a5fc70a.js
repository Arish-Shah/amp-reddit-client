parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OnpJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.html=exports.default=void 0;const e=Math.random().toString(36).slice(2).padStart(10,"0"),t=`font-family:${e}`,n=`font-family: ${e};`,r=`comment-${e}`,s=`node-${e}`,o=`${s}" ${s} `,i=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=$/,a=[].filter,h=(e,h)=>{let l=[];const d=(h,c)=>{if(8===h.nodeType)h.nodeValue===r?l.push({type:M,path:c}):h.nodeValue===o&&l.push({type:I,path:c});else{if(1===h.nodeType){if(h.hasAttribute(s))throw new Error('The ">" character is not allowed in attribute literals. Replace with "&gt;"');if(h.hasAttribute(t)){h.removeAttribute(t);let r=a.call(h.attributes,e=>e.value===t).length;h.getAttribute("style")===n&&(r+=1);for(let t=0;t<r;t++){const t=i.exec(e[l.length])[1];l.push({type:j,path:c,attribute:t})}}}const r=h.childNodes,o=r.length;for(let e=0;e<o;e++)d(r[e],c.concat([e]))}};if(d(h.content,[]),l.length<e.length-1)throw new Error('Double attribute assignments are not allowed: "<div a=${0} a=${0}>"');return l},l=`${t} ${t}`,d=`--\x3e\x3c!--${r}--\x3e\x3c!-- `,c=`\x3c!--${o}--\x3e`,p={},f={},u={},m={},b=new Map;b.set(p,l),b.set(f,d),b.set(u,c);const g=e=>{const t=e.lastIndexOf("\x3c!--"),n=e.indexOf("--\x3e",t+1)>-1;let r;if(t>-1&&!n)r=f;else{const t=e.lastIndexOf(">");r=e.indexOf("<",t+1)>-1?p:t>-1?u:m}return{commentClosed:n,context:r}},x=e=>{const t=[],n=e.length-1;let r=u;for(let s=0;s<n;s++){const n=e[s],{commentClosed:o,context:i}=g(n);if(r===f&&!o||i===m||(r=i),r===p&&"="!==n.slice(-1))throw new Error("Only bare attribute parts are allowed: `<div a=${0}>`");t.push(n+b.get(r))}return t.push(e[n]),t.join("")},w=e=>{const t=document.createElement("template");return t.innerHTML=x(e),t},v=new Map;class N{constructor(e){this.strings=e,this.element=w(e),this.parts=h(e,this.element)}}class y{constructor(e,t){this.strings=e,this.values=t,this._template=void 0}get template(){if(this._template)return this._template;let e=v.get(this.strings);return e||(e=new N(this.strings),v.set(this.strings,e)),this._template=e,e}}class _{constructor(e,t,n,r){this.template=e,this.fragment=e.element.content.cloneNode(!0);const s=this.template.parts.map(e=>{let s=this.fragment;return e.path.forEach(e=>{s=s.childNodes[e]}),e.node=s,e.type===I&&(1===e.path.length?(e.parent=t,e.before=s.previousSibling||n,e.after=s.nextSibling||r):e.parent=s.parentNode),e});this.parts=s.map(e=>new e.type(e))}render(e){this.parts.map((t,n)=>t.render(e[n]))}}const E=(e,t=null,n=null,r,s)=>{let o=t?t.nextSibling:e.firstChild;if(null!==o){let t,i;for(t=r instanceof Node?()=>r.insertBefore(o,s):()=>e.removeChild(o);o!==n;)i=o.nextSibling,t(o),o=i}},$=new WeakMap,A=e=>$.has(e),S=e=>"string"==typeof e||"number"==typeof e||"boolean"==typeof e,P=e=>Array.isArray(e)||e[Symbol.iterator],O={},T={},C={};class I{constructor({node:e,parent:t,before:n,after:r}){this.node=e||T,this.value=O,this.parentNode=t||e&&e.parentNode,this.beforeNode=n||e&&e.previousSibling,this.afterNode=r||e&&e.nextSibling}render(e){if(A(e))e(this);else if(e!==O){if(null==e)this.clear();else if(S(e))this._renderText(e);else if(e instanceof y)this._renderTemplateResult(e);else if(P(e))this._renderIterable(e);else if(e instanceof Node)this._renderNode(e);else{if(void 0!==e.then)return void this._renderPromise(e);e=String(e),this._renderText(e)}this.promise=void 0,this.value=e}}_renderText(e){this.value!==e&&(3===this.node.nodeType?this.node.textContent=e:this._renderNode(document.createTextNode(e)))}_renderTemplateResult(e){this.templateInstances=this.templateInstances||new Map;let t=this.templateInstances.get(e.template);t||(t=new _(e.template,this.parentNode,this.beforeNode,this.afterNode),this.templateInstances.set(e.template,t)),this.node!==t.fragment&&(this.clear(),this.parentNode.insertBefore(t.fragment,this.afterNode),this.node=t.fragment),t.render(e.values)}_renderIterable(e){this.node!==C&&(this.clear(),this.node=C,this.iterableParts?this.iterableParts.length=0:this.iterableParts=[]);let t,n=0,r=this.afterNode?this.afterNode.previousSibling:this.parentNode.lastChild;const s=this.parentNode;for(const o of e){let e=this.iterableParts[n];void 0===e&&(t=document.createTextNode(""),this.parentNode.insertBefore(t,this.afterNode),e=new I({before:r,after:t,parent:s}),this.iterableParts.push(e),r=t),e.render(o),n++}if(0===n)E(this.parentNode,this.beforeNode,this.afterNode);else if(n<this.iterableParts.length){const e=this.iterableParts[n-1];E(this.parentNode,e.afterNode,this.afterNode)}this.iterableParts.length=n}_renderNode(e){this.node!==e&&(this.clear(),this.parentNode.insertBefore(e,this.afterNode),this.node=e)}_renderPromise(e){this.promise!==e&&(this.promise=e,e.then(t=>{this.promise===e&&(this.promise=void 0,this.render(t))}))}clear(){E(this.parentNode,this.beforeNode,this.afterNode,this.node instanceof DocumentFragment&&this.node),this.node=T}}class M{constructor({node:e}){this.node=e}render(e){this.node.textContent=e}}class j{constructor({node:e,attribute:t}){switch(this.node=e,t[0]){case":":this._render=this._renderProperty;case"?":this._render=this._render||this._renderBoolean;case"@":this._render=this._render||this._renderEvent,this.node.removeAttribute(t),this.name=t.slice(1);break;default:this._render=this._renderAttribute,this.name=t}}render(e){A(e)?e(this):e!==O&&this._render(e)}_renderProperty(e){if(void 0===e)throw new Error(`undefined cannot be assigned to ".${this.name}"`);this.node[this.name]=e}_renderBoolean(e){this.value!==!!e&&(e?this.node.setAttribute(this.name,""):this.node.removeAttribute(this.name),this.value=!!e)}_renderEvent(e){if(void 0===e)throw new Error(`undefined cannot be assigned to "@${this.name}"`);this.value!==e&&(this.node.removeEventListener(this.name,this.value),this.node.addEventListener(this.name,e),this.value=e)}_renderAttribute(e){if(void 0===e)throw new Error(`undefined cannot be assigned to "${this.name}"`);this.value!==e&&(this.node.setAttribute(this.name,e),this.value=e)}}const k=new WeakMap,B=(e,t)=>{let n=k.get(t);n||(n=new I({parent:t}),k.set(t,n)),n.render(e)};exports.render=B;const q=(e,...t)=>new y(e,t);exports.html=q;const F=(e,t)=>{if(!e)throw new Error("Component name is not assigned");if(e.indexOf("-")<=0)throw new Error("Component name must contain a dash, e.g., amp-root");if(!t)throw new Error("Declare component definition");if(!t.template)throw new Error("template is required for creating components");if("function"!=typeof t.template)throw new Error("template must be a function")},D=e=>{let t={};if(e&&Object.keys(e).length>0){if(Object.keys(e).some(t=>"function"==typeof e[t]))throw new Error('"data" property should not contain methods');t={...JSON.parse(JSON.stringify(e))}}return t},L=e=>{e&&e()},R=(e,t)=>{if(e&&e.length){let n={};return e.forEach(e=>{e in t&&(n[e]=t[e])}),n}},J=(e,t)=>{const n=r=>{F(e,t);const{oncreate:s,onmount:o,onupdate:i,data:a,methods:h,props:l,components:d,template:c}=t;r.forEach(t=>{const r={get:function(e,t){return"object"==typeof e[t]&&null!==e[t]?new Proxy(e[t],r):e[t]},set:function(e,n,r){let s=n in e;return e[n]=r,s&&(B(c.call(f),t),p(d),L(m.onupdate)),!0}},p=r=>{r&&r.length>0&&r.forEach(e=>{document.querySelectorAll(e.id).length>0&&e.generate()});const s=t.querySelectorAll(e);s.length>0&&n(s)};let f=D(a);f.attr=(e=>t.getAttribute(e)),f=new Proxy(f,r);const u={...h};if(u){const e=Object.keys(u);if(e.some(e=>"function"!=typeof u[e]))throw new Error('"methods" property should not contain data');e.length>0&&e.forEach(e=>{f[e]=u[e].bind(f)})}f.props=R(l,t);let m={};s&&(m.oncreate=s.bind(f)),o&&(m.onmount=o.bind(f)),i&&(m.onupdate=i.bind(f)),L(m.oncreate),B(c.call(f),t),p(d),L(m.onmount)})};return{id:e,generate:()=>n(document.querySelectorAll(e))}};var V={component:J},W=V;exports.default=W;
},{}],"Efqd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.actualDate=exports.dateFormat=void 0;const t=t=>{let e=new Date(0);return e.setUTCSeconds(t),o(e)};exports.dateFormat=t;const e=e=>{let o=new Date(0);o.setUTCSeconds(e);const a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(o),r=new Intl.DateTimeFormat("en",{month:"long"}).format(o),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(o);return[t(e),`${n} ${r} ${a}`]};function o(t){const e=Math.floor((new Date-t)/1e3);let o=Math.floor(e/31536e3);return o>1?o+" years ago":(o=Math.floor(e/2592e3))>1?o+" months ago":(o=Math.floor(e/86400))>1?o+" days ago":(o=Math.floor(e/3600))>1?o+" hours ago":(o=Math.floor(e/60))>1?o+" minutes ago":Math.floor(e)+" seconds ago"}exports.actualDate=e;
},{}],"mjuw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("@arish-shah/amp")),t=require("../util/date");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=p?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}return a.default=e,t&&t.set(e,a),a}const p=e.default.component("amp-post-item",{props:["post","index"],template(){const{title:r,ups:a,author:p,created_utc:o,num_comments:n,url:s,permalink:u,domain:i}=this.props.post;return e.html`
      <h2><a href=${s}>${r}</a> <small>(${i})</small></h2>
      <p class="meta">
        ${a} upvotes by
        <a href=${`#/user/${p}`}>${p}</a>
        ${(0,t.dateFormat)(o)} |
        <a href=${`#${u}`}>${n} comments</a>
      </p>
      <span class="index">${this.props.index+1}</span>
    `}}),o=e.default.component("amp-feed-page",{props:["data"],components:[p],template(){const t=this.props.data.data.children;return e.html`
      ${t.map((t,r)=>e.html`<amp-post-item
            :index=${r}
            :post=${t.data}
          ></amp-post-item>`)}
    `}});var n=o;exports.default=n;
},{"@arish-shah/amp":"OnpJ","../util/date":"Efqd"}],"vrWX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("@arish-shah/amp"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=t();if(a&&a.has(e))return a.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if(Object.prototype.hasOwnProperty.call(e,p)){var o=i?Object.getOwnPropertyDescriptor(e,p):null;o&&(o.get||o.set)?Object.defineProperty(r,p,o):r[p]=e[p]}return r.default=e,a&&a.set(e,r),r}const r=e.default.component("amp-about-page",{template:()=>(document.title="About • amp-js Reddit Client",e.html`
      <h1>About this site</h1>
      <p>
        This is a simple Reddit client app, built with components created using
        <a href="https://npmjs.com/@arish-shah/amp">amp-js</a>.
      </p>
      <p>
        amp-js makes use of HTML templates to create user interfaces. These
        templates are generated by tagging the ES6 template literal. The static
        and dynamic part of the templates are separated allowing creation of
        reactive applications easier. You can read more about the desing and
        philosophy in the
        <a href="https://github.com/Arish-Shah/amp-js">github repo</a>.
      </p>
      <p>
        We're using <a href="https://www.reddit.com/dev/api/">Reddit API</a> as
        a backend. The app is hosted on
        <a href="https://www.netlify.com/">Netlify</a>. The souce code is
        <a href="https://github.com/Arish-Shah/amp-reddit-client">here</a>.
      </p>
    `)});var i=r;exports.default=i;
},{"@arish-shah/amp":"OnpJ"}],"ERL0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("@arish-shah/amp")),t=require("../util/date");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var p=o?Object.getOwnPropertyDescriptor(e,n):null;p&&(p.get||p.set)?Object.defineProperty(a,n,p):a[n]=e[n]}return a.default=e,t&&t.set(e,a),a}const o=e.default.component("amp-user-page",{props:["data"],template(){const{name:r,created_utc:a,link_karma:o,comment_karma:n,subreddit:p}=this.props.data;document.title=`${r} • amp-js Reddit Client`;const s=`https://old.reddit.com/user/${r}`,i=`https://reddit.com/user/${r}`;return e.html`
      <h1>${r}</h1>
      <p>
        ...joined
        <b> ${(0,t.dateFormat)(a)}</b>, and has
        <b>${o+n} </b>
        karma
      </p>
      <p>
        <a href=${`${i}/posts`}>posts</a>
        /
        <a href=${`${i}/comments`}>comments</a>
        /
        <a href=${`${s}/gilded`}>awards</a>
      </p>
      <p>${p.public_description}</p>
    `}});var n=o;exports.default=n;
},{"@arish-shah/amp":"OnpJ","../util/date":"Efqd"}],"Wnbu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.copy=void 0;const e=e=>JSON.parse(JSON.stringify(e));exports.copy=e;
},{}],"Wtfl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=void 0;const e=e=>{const r=document.createElement("textarea");return r.innerHTML=e,r.value.replace(/href="\/r\//g,'href="#/r/')};exports.parse=e;
},{}],"Z8nw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@arish-shah/amp")),t=require("../util/copy"),r=require("../util/date"),a=require("../util/parse");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var p=a?Object.getOwnPropertyDescriptor(e,o):null;p&&(p.get||p.set)?Object.defineProperty(r,o,p):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}const p=e.default.component("amp-replies",{props:["data"],template(){const t=this.props.data,{author:n,body_html:o,created_utc:p}=t,s=document.createElement("div");return s.className="body",s.innerHTML=(0,a.parse)(o),e.html`
      <span class="meta">
        <a href=${`#/user/${n}`}>${n}</a>
        ${(0,r.dateFormat)(p)}
      </span>
      ${s}
    `}}),s=e.default.component("amp-comments",{props:["data"],components:[p],template(){let r=(0,t.copy)(this.props.data.data.children);return r=r.slice(0,r.length-2),e.html`
      ${r.map(t=>e.html`<amp-replies :data=${t.data}></amp-replies>`)}
    `}});var u=s;exports.default=u;
},{"@arish-shah/amp":"OnpJ","../util/copy":"Wnbu","../util/date":"Efqd","../util/parse":"Wtfl"}],"PhRy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("@arish-shah/amp")),t=n(require("../components/Comments")),r=require("../util/parse"),a=require("../util/date");function n(e){return e&&e.__esModule?e:{default:e}}function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var u=a?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(r,n,u):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}const s=e.default.component("amp-commments-page",{props:["data"],components:[t.default],template(){const t=this.props.data[0],n=this.props.data[1],{title:o,author:u,ups:s,url:l,created_utc:p,domain:i,selftext_html:c}=t.data.children[0].data;let d;return document.title=o,c&&((d=document.createElement("div")).className="body",d.innerHTML=(0,r.parse)(c)),e.html`
      <article class="item">
        <h1><a href=${l}>${o}</a></h1>
        <small>${i}</small>
        <p class="meta">
          ${s} upvotes by
          <a href=${`#/user/${u}`}>${u}</a>
          ${(0,a.dateFormat)(p)}
        </p>
        ${d}
      </article>
      <amp-comments :data=${n}></amp-comments>
    `}});var l=s;exports.default=l;
},{"@arish-shah/amp":"OnpJ","../components/Comments":"Z8nw","../util/parse":"Wtfl","../util/date":"Efqd"}],"SuqF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@arish-shah/amp"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(a,i,n):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}const a=e.default.component("amp-navbar",{onmount(){let e=window.location.hash;""!==e&&"#/"!==e||(e="#/hot"),document.querySelectorAll("nav a").forEach(t=>{t.getAttribute("href")===e?t.classList.add("active"):t.classList.remove("active")})},template:()=>e.html`
      <nav>
        <div class="icon">&</div>
        <ul>
          <li><a href="#/hot">hot</a></li>
          <li><a href="#/new">new</a></li>
          <li><a href="#/top">top</a></li>
          <li><a href="#/r/pics">pics</a></li>
          <li><a href="#/r/askreddit">ask</a></li>
          <li class="about"><a href="#/about">about</a></li>
        </ul>
      </nav>
    `});var o=a;exports.default=o;
},{"@arish-shah/amp":"OnpJ"}],"RRhu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@arish-shah/amp"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var p=n?Object.getOwnPropertyDescriptor(e,a):null;p&&(p.get||p.set)?Object.defineProperty(o,a,p):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}const o=e.default.component("amp-progress",{props:["show"],template:()=>e.html`<div class="progress"></div>`});var n=o;exports.default=n;
},{"@arish-shah/amp":"OnpJ"}],"Wr30":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getURL=exports.getData=void 0;const t=async t=>{let e=await fetch(t);return e=await e.json()};exports.getData=t;const e=t=>{const e="https://www.reddit.com";return""===(t=t.slice(2))&&(t="hot"),t.indexOf("user/")>-1?`${e}/${t}/about.json`:`${e}/${t}.json`};exports.getURL=e;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=p(require("@arish-shah/amp")),t=u(require("./pages/Feed")),r=u(require("./pages/About")),a=u(require("./pages/User")),n=u(require("./pages/Comments")),o=u(require("./components/Navbar")),i=u(require("./components/Progress")),s=require("./util/getURL");function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=a?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}const d=e.default.component("amp-root",{onmount(){window.addEventListener("load",this.router),window.addEventListener("hashchange",this.router)},data:{cache:{},current:null},methods:{router(){const e=window.location.hash;if(e.indexOf("/about")>-1)return this.current="about",void this.hideLoading();this.updateCache((0,s.getURL)(e))},updateCache(e){this.cache[e]?(this.current=this.cache[e],this.hideLoading()):(this.showLoading(),fetch(e).then(e=>e.json()).then(t=>{this.cache[e]=t,this.current=this.cache[e]}).catch(e=>console.log(e)).finally(()=>this.hideLoading()))},getPage(){if("about"===this.current)return e.html`<amp-about-page></amp-about-page>`;if(this.current){const t=window.location.hash;return t.indexOf("/user/")>-1?e.html`<amp-user-page
            :data=${this.current.data}
          ></amp-user-page>`:t.indexOf("/comments/")>-1?e.html`<amp-commments-page
            :data=${this.current}
          ></amp-comments-page>`:e.html`<amp-feed-page :data=${this.current}></amp-feed-page>`}},showLoading(){document.querySelector("amp-progress").style.display="block"},hideLoading(){document.querySelector("amp-progress").style.display="none"}},components:[o.default,i.default,t.default,n.default,r.default,a.default],template(){return document.title="amp-js Reddit Client",e.html`
      <amp-progress></amp-progress>
      <amp-navbar></amp-navbar>
      <main class="page">
        ${this.getPage()}
      </main>
    `}});d.generate();
},{"@arish-shah/amp":"OnpJ","./pages/Feed":"mjuw","./pages/About":"vrWX","./pages/User":"ERL0","./pages/Comments":"PhRy","./components/Navbar":"SuqF","./components/Progress":"RRhu","./util/getURL":"Wr30"}]},{},["A2T1"], null)