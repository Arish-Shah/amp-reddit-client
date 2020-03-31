parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OnpJ":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.html=exports.default=void 0;var a=Math.random().toString(36).slice(2).padStart(10,"0"),s="font-family:".concat(a),h="font-family: ".concat(a,";"),l="comment-".concat(a),u="node-".concat(a),c="".concat(u,'" ').concat(u," "),f=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=$/,d=[].filter,p=function(e,t){var n=[];if(function t(r,i){if(8===r.nodeType)r.nodeValue===l?n.push({type:U,path:i}):r.nodeValue===c&&n.push({type:J,path:i});else{if(1===r.nodeType){if(r.hasAttribute(u))throw new Error("The '>' character is not allowed in attribute literals. Replace with '&gt;");if(r.hasAttribute(s)){r.removeAttribute(s);var o=d.call(r.attributes,function(e){return e.value===s}).length;r.getAttribute("style")===h&&(o+=1);for(var a=0;a<o;a++){var p=f.exec(e[n.length])[1];n.push({type:$,path:i,attribute:p})}}}for(var v=r.childNodes,m=v.length,b=0;b<m;b++)t(v[b],i.concat([b]))}}(t.content,[]),n.length<e.length-1)throw new Error("Double attribute assignments are not allowed: '<div a=${0} a=${0}>'");return n},v="".concat(s," ").concat(s),m="--\x3e\x3c!--".concat(l,"--\x3e\x3c!-- "),b="\x3c!--".concat(c,"--\x3e"),y={},g={},x={},w={},N=new Map;N.set(y,v),N.set(g,m),N.set(x,b);var O=function(e){var t,n=e.lastIndexOf("\x3c!--"),r=e.indexOf("--\x3e",n+1)>-1;if(n>-1&&!r)t=g;else{var i=e.lastIndexOf(">");t=e.indexOf("<",i+1)>-1?y:i>-1?x:w}return{commentClosed:r,context:t}},_=function(e){for(var t=[],n=e.length-1,r=x,i=0;i<n;i++){var o=e[i],a=O(o),s=a.commentClosed,h=a.context;if(r===g&&!s||h===w||(r=h),r===y&&"="!==o.slice(-1))throw new Error("Only bare attribute parts are allowed: `<div a=${0}>`");t.push(o+N.get(r))}return t.push(e[n]),t.join("")},P=function(e){var t=document.createElement("template");return t.innerHTML=_(e),t},k=new Map,E=function t(n){e(this,t),this.strings=n,this.element=P(n),this.parts=p(n,this.element)},S=function(){function t(n,r){e(this,t),this.strings=n,this.values=r,this._template=void 0}return n(t,[{key:"template",get:function(){if(this._template)return this._template;var e=k.get(this.strings);return e||(e=new E(this.strings),k.set(this.strings,e)),this._template=e,e}}]),t}(),j=function(){function t(n,r,i,o){var a=this;e(this,t),this.template=n,this.fragment=n.element.content.cloneNode(!0);var s=this.template.parts.map(function(e){var t=a.fragment;return e.path.forEach(function(e){t=t.childNodes[e]}),e.node=t,e.type===J&&(1===e.path.length?(e.parent=r,e.before=t.previousSibling||i,e.after=t.nextSibling||o):e.parent=t.parentNode),e});this.parts=s.map(function(e){return new e.type(e)})}return n(t,[{key:"render",value:function(e){this.parts.map(function(t,n){return t.render(e[n])})}}]),t}(),A=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,s=r?r.nextSibling:e.firstChild;if(null!==s)for(t=o instanceof Node?function(){return o.insertBefore(s,a)}:function(){return e.removeChild(s)};s!==i;)n=s.nextSibling,t(s),s=n},T=new WeakMap,M=function(e){return T.has(e)},C=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e},I=function(e){return Array.isArray(e)||e[Symbol.iterator]},D={},B={},F={},J=function(){function t(n){var r=n.node,i=n.parent,o=n.before,a=n.after;e(this,t),this.node=r||B,this.value=D,this.parentNode=i||r&&r.parentNode,this.beforeNode=o||r&&r.previousSibling,this.afterNode=a||r&&r.nextSibling}return n(t,[{key:"render",value:function(e){if(M(e))e(this);else if(e!==D){if(null==e)this.clear();else if(C(e))this._renderText(e);else if(e instanceof S)this._renderTemplateResult(e);else if(I(e))this._renderIterable(e);else if(e instanceof Node)this._renderNode(e);else{if(void 0!==e.then)return void this._renderPromise(e);e=String(e),this._renderText(e)}this.promise=void 0,this.value=e}}},{key:"_renderText",value:function(e){this.value!==e&&(3===this.node.nodeType?this.node.textContent=e:this._renderNode(document.createTextNode(e)))}},{key:"_renderTemplateResult",value:function(e){this.templateInstances=this.templateInstances||new Map;var t=this.templateInstances.get(e.template);t||(t=new j(e.template,this.parentNode,this.beforeNode,this.afterNode),this.templateInstances.set(e.template,t)),this.node!==t.fragment&&(this.clear(),this.parentNode.insertBefore(t.fragment,this.afterNode),this.node=t.fragment),t.render(e.values)}},{key:"_renderIterable",value:function(e){this.node!==F&&(this.clear(),this.node=F,this.iterableParts?this.iterableParts.length=0:this.iterableParts=[]);var n,r=0,i=this.afterNode?this.afterNode.previousSibling:this.parentNode.lastChild,o=this.parentNode,a=!0,s=!1,h=void 0;try{for(var l,u=e[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var c=l.value,f=this.iterableParts[r];void 0===f&&(n=document.createTextNode(""),this.parentNode.insertBefore(n,this.afterNode),f=new t({before:i,after:n,parent:o}),this.iterableParts.push(f),i=n),f.render(c),r++}}catch(p){s=!0,h=p}finally{try{a||null==u.return||u.return()}finally{if(s)throw h}}if(0===r)A(this.parentNode,this.beforeNode,this.afterNode);else if(r<this.iterableParts.length){var d=this.iterableParts[r-1];A(this.parentNode,d.afterNode,this.afterNode)}this.iterableParts.length=r}},{key:"_renderNode",value:function(e){this.node!==e&&(this.clear(),this.parentNode.insertBefore(e,this.afterNode),this.node=e)}},{key:"_renderPromise",value:function(e){var t=this;this.promise!==e&&(this.promise=e,e.then(function(n){t.promise===e&&(t.promise=void 0,t.render(n))}))}},{key:"clear",value:function(){A(this.parentNode,this.beforeNode,this.afterNode,this.node instanceof DocumentFragment&&this.node),this.node=B}}]),t}(),U=function(){function t(n){var r=n.node;e(this,t),this.node=r}return n(t,[{key:"render",value:function(e){this.node.textContent=e}}]),t}(),$=function(){function t(n){var r=n.node,i=n.attribute;switch(e(this,t),this.node=r,i[0]){case".":this._render=this._renderProperty;break;case"?":this._render=this._render||this._renderBoolean;break;case"@":this._render=this._render||this._renderEvent,this.node.removeAttribute(i),this.name=i.slice(1);break;default:this._render=this._renderAttribute,this.name=i}}return n(t,[{key:"render",value:function(e){M(e)?e(this):e!==D&&this._render(e)}},{key:"_renderProperty",value:function(e){this.node[this.name]=e}},{key:"_renderBoolean",value:function(e){this.value!==!!e&&(e?this.node.setAttribute(this.name,""):this.node.removeAttribute(this.name),this.value=!!e)}},{key:"_renderEvent",value:function(e){this.value!==e&&(this.node.removeEventListener(this.name,this.value),this.node.addEventListener(this.name,e),this.value=e)}},{key:"_renderAttribute",value:function(e){this.value!==e&&(this.node.setAttribute(this.name,e),this.value=e)}}]),t}(),L=new WeakMap,R=function(e,t){var n=L.get(t);n||(n=new J({parent:t}),L.set(t,n)),n.render(e)};exports.render=R;var q=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new S(e,n)};exports.html=q;var V={component:function(e,t){var n=t.data,r=t.methods,i=t.props,a=t.template;if(e.indexOf("<")>-1||e.indexOf(">")>-1)throw new Error("Do not use < or > while declaring component");if(!a)throw new Error('"template" is required for creating components');if("function"!=typeof a)throw new Error('"template" should be a function');var s=document.querySelectorAll(e);if(!s.length)throw new Error("<".concat(e,"> was not found."));s.forEach(function(e){var t={};n&&(t=o({},JSON.parse(JSON.stringify(n)))),r&&(t=o({},t,{},r));var s={onMount:null,onUpdate:null};("{}"!==JSON.stringify(t)&&Object.keys(t).forEach(function(n){if("function"==typeof t[n])t[n]=t[n].bind(t),"onmount"===n&&(s.onMount=t[n]),"onupdate"===n&&(s.onUpdate=t[n]);else{var r=t[n];Object.defineProperty(t,n,{get:function(){return r},set:function(n){r=n,R(a(t),e),s.onUpdate&&s.onUpdate()}})}}),i&&i.length)&&(t.props={},Array.from(e.attributes).forEach(function(n){i.indexOf(n.name)>-1&&(t.props[n.name]=n.value,e.removeAttribute(n.name))}),"{}"===JSON.stringify(t.props)&&delete t.props);R(a(t),e),s.onMount&&s.onMount()})}},W=V;exports.default=W;
},{}],"Efqd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.actualDate=exports.dateFormat=void 0;const t=t=>{let e=new Date(0);return e.setUTCSeconds(t),o(e)};exports.dateFormat=t;const e=e=>{let o=new Date(0);o.setUTCSeconds(e);const a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(o),r=new Intl.DateTimeFormat("en",{month:"long"}).format(o),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(o);return[t(e),`${n} ${r} ${a}`]};function o(t){const e=Math.floor((new Date-t)/1e3);let o=Math.floor(e/31536e3);return o>1?o+" years ago":(o=Math.floor(e/2592e3))>1?o+" months ago":(o=Math.floor(e/86400))>1?o+" days ago":(o=Math.floor(e/3600))>1?o+" hours ago":(o=Math.floor(e/60))>1?o+" minutes ago":Math.floor(e)+" seconds ago"}exports.actualDate=e;
},{}],"o6O2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Item=void 0;var e=require("@arish-shah/amp"),a=require("../util/date");const t=a=>e.html`
  <ol>
    ${a.map(a=>e.html`
          <li>${s(a)}</li>
        `)}
  </ol>
`,s=t=>{t=t.data;let s=new URL(t.url);s=s.hostname.indexOf("www")>-1?s.hostname.substring(4):s.hostname;let n=null;+t.total_awards_received>0&&(n=e.html`
      <span>|</span>
      <span>${t.total_awards_received}🎖</span>
    `);let r=t.permalink,p=r.indexOf("/comments/");r=r.substring(p);let l=(0,a.dateFormat)(t.created_utc);return e.html`
    <div id="title">
      <a href=${t.url}>${t.title}</a>
      <span id="url">(${s})</span>
    </div>
    <div id="meta">
      <span>${t.ups} upvotes</span>
      <span>
        by
        <b><a href=${`#/user/${t.author}`}>${t.author}</a></b>
      </span>
      <span>${l}</span>
      <span></span>
      <span>|</span>
      <span>
        <a href=${`#${r}`}>
          ${t.num_comments} comments
        </a>
      </span>
      ${n}
    </div>
  `};exports.Item=s;var n=t;exports.default=n;
},{"@arish-shah/amp":"OnpJ","../util/date":"Efqd"}],"Z8nw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("@arish-shah/amp"),t=require("./Posts");const a=a=>{const d=a[0].data.children[0];return e.html`
    <div id="post-title">
      ${(0,t.Item)(d)}
    </div>
    <div id="comments">
      ${a[1].data.children.map(e=>r(e.data))}
    </div>
  `},r=t=>{let a,d="[—]";return t.replies&&(d=`[${t.replies.data.children.length}]`,a=t.replies.data.children.map(e=>{if(e.data.author&&e.data.body)return r(e.data)})),e.html`
    <div id="comment">
      <span>${d}</span>
      <b><a href=${`#/user/${t.author}`}>${t.author}</a></b>
      <span>${t.ups} upvotes</span>
      <p>${t.body}</p>
      <div id="replies">
        ${a}
      </div>
    </div>
  `};var d=a;exports.default=d;
},{"@arish-shah/amp":"OnpJ","./Posts":"o6O2"}],"fbXP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d=require("@arish-shah/amp"),e=require("../util/date");const t=t=>{const[i,a]=(0,e.actualDate)(t.created_utc);return d.html`
    <div id="user">
      <div class="img-wrapper">
        <img src=${t.icon_img} alt="Not Found" />
      </div>
      <div id="details">
        <div id="name">
          <b>${t.name}</b>
        </div>
        <dl>
          <dt>Joined</dt>
          <dd>${a} (${i})</dd>
        </dl>
        <dl>
          <dt>Karma</dt>
          <dd>
            Comment: ${t.comment_karma} <br />
            Link: ${t.link_karma}
          </dd>
        </dl>
      </div>
    </div>
  `};var i=t;exports.default=i;
},{"@arish-shah/amp":"OnpJ","../util/date":"Efqd"}],"inq6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("@arish-shah/amp");const a=e.html`
  <div id="about">
    <h3>About</h3>
    <p>This application is built using amp-js.</p>
    <p>
      amp-js is a front-end JavaScript library we built as a part of our Major Project.
    </p>
    <p>
      The source code of this application can be found 
      <a 
        href="https://github.com/Arish-Shah/amp-reddit-client"
        target="_blank"
        rel="noopener noreferrer"
      >here</a>.
    </p>
  </about>
`;var r=a;exports.default=r;
},{"@arish-shah/amp":"OnpJ"}],"oZDS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Error=exports.Loading=void 0;var r=require("@arish-shah/amp");const o=r.html`
  <div id="loader">Loading...</div>
`;exports.Loading=o;const e=o=>r.html`
  <div id="loading">${o}</div>
`;exports.Error=e;
},{"@arish-shah/amp":"OnpJ"}],"ncTK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getData=void 0;const t=async t=>{let e=localStorage.getItem(t);return e?JSON.parse(e):(e=await fetch(t),e=await e.json(),localStorage.setItem(t,JSON.stringify(e)),e)};exports.getData=t;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("@arish-shah/amp"),t=c(require("./components/Posts")),r=c(require("./components/Comments")),n=c(require("./components/User")),a=c(require("./components/About")),o=require("./components/Display"),d=require("./util/cache");function c(e){return e&&e.__esModule?e:{default:e}}const s=document.getElementById("root"),i=()=>{(0,e.render)(o.Loading,s);const t=window.location.hash.slice(2);""===t?l("hot"):t.indexOf("comments")>-1?u(t):t.indexOf("user")>-1?h(t):t.indexOf("about")>-1?(0,e.render)(a.default,s):l(`r/${t}`)},l=async r=>{try{let a=await(0,d.getData)(`https://www.reddit.com/${r}.json`);(0,e.render)((0,t.default)(a.data.children),s)}catch(n){(0,e.render)((0,o.Error)(n),s)}},u=async t=>{try{let a=await(0,d.getData)(`https://www.reddit.com/${t}.json`);(0,e.render)((0,r.default)(a),s)}catch(n){(0,e.render)((0,o.Error)(n),s)}},h=async t=>{try{let a=await(0,d.getData)(`https://www.reddit.com/${t}/about.json`);(0,e.render)((0,n.default)(a.data),s)}catch(r){(0,e.render)((0,o.Error)(r),s)}};window.addEventListener("hashchange",i),window.addEventListener("load",i),document.getElementById("refresh").addEventListener("click",()=>{localStorage.clear(),i()}),document.getElementById("home").addEventListener("click",()=>{window.location.hash="#/",i()});
},{"@arish-shah/amp":"OnpJ","./components/Posts":"o6O2","./components/Comments":"Z8nw","./components/User":"fbXP","./components/About":"inq6","./components/Display":"oZDS","./util/cache":"ncTK"}]},{},["A2T1"], null)
//# sourceMappingURL=app.b87a58a1.js.map