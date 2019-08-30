/*!
 * xForm v0.0.4 (https://github.com/dongls/xForm)
 * Copyright 2019 dongls
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("xForm",[],e):"object"==typeof exports?exports.xForm=e():t.xForm=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=48)}([function(t,e,n){"use strict";n.r(e);n(11);var r=n(10),i=n.n(r),o={beforeCreate:function(){var t=this.$options.static;if("function"==typeof t){var e=t.call(this);this.$static=Object.assign(this.$static||{},e)}}},s=n(4),a=n.n(s);function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,t),this.type=e.type,this.title=e.title,this.components=e.components},c={},f={config:{modes:{all:[]}},fields:{}};var d={register:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.length<=0||Array.from(arguments).reduce(function(t,e){return(Array.isArray(e)?t=t.concat(e):t.push(e))&&t},[]).filter(function(t){return t instanceof u}).forEach(function(t){return f.fields[t.type]=t})},setConfig:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f.config=Object.assign(f.config,a()(c),a()(t))},findFieldDef:function(t){return f.fields[t]},findFieldDefs:function(t){var e=function(t){var e=(f.config.modes||{})[t];return Array.isArray(e)?e:[]}(t),n=Object.keys(f.fields);return e.length>0&&(n=n.filter(function(t){return e.includes(t)})),n.map(function(t){return f.fields[t]})}};var p=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e.type,this.name=e.name||"field_".concat(Math.random().toString(16).slice(-8)),this.title=e.title,this.placeholder=e.placeholder,this.notNull=!0===e.notNull};function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e.type,this.name=e.name,this.title=e.title,this.placeholder=e.placeholder,this.notNull=!0===e.notNull,this.dragging=!1}var e,n,r;return e=t,r=[{key:"fromXField",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new t(e)}}],(n=[{key:"toXField",value:function(){return new p(this)}}])&&v(e.prototype,n),r&&v(e,r),t}();function h(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o=Array.from(n.children),s=n.getBoundingClientRect();if(t<=0)for(var a=e-s.top+n.scrollTop,l=0;l<o.length;l++){var u=o[l];if(u.offsetTop+u.offsetHeight/2>a)return l-1==i?i:l}if(t>0){for(var c=e-s.top+n.scrollTop+r.offsetHeight,f=-1,d=0;d<o.length;d++){var p=o[d];p.offsetTop+p.offsetHeight/2<c&&(f=d)}return f+1==i?i:f}return-1}var x={name:"x-form-designer",mixins:[o],props:{value:{type:Array,default:function(){return[]}},mode:{type:String,default:"all"}},static:function(){return{container:null,ghost:null,dragEvent:{mode:"sort",target:null,direction:0,init:!1,offsetLeft:0,offsetTop:0,prevClientY:0,data:null,inserted:null}}},data:function(){return{fields:d.findFieldDefs(this.mode),selectedField:null}},computed:{isEmpty:function(){return!Array.isArray(this.value)||0==this.value.length}},methods:{remove:function(t,e){if(confirm("该字段删除后不可恢复，是否继续？")){var n=this.value.findIndex(function(t){return t==e});n>=0&&(this.value.splice(n,1),this.$emit("input",this.value))}},quickInsert:function(t,e){var n=new m(e),r=this.value.concat(n);this.selectedField=n,this.$emit("input",r)},insert:function(t){var e=this.$static.dragEvent,n=this.$static.ghost,r=h(e.direction,t,this.$refs.list,n),i=new m(e.data);this.value.splice(r,0,i),this.$emit("input",this.value),this.selectedField=i,e.mode="sort",e.inserted=i},sort:function(t){var e=this,n=this.$static.dragEvent,r=this.$static.ghost,i=this.value.findIndex(function(t){return t==e.selectedField}),o=h(n.direction,t,this.$refs.list,r,i),s=this.value.length;if(!(i<0||o<0||i>s||o>s||i==o)){var a=this.value;a[i]=a.splice(o,1,a[i])[0],this.$emit("input",a)}},dragstart:function(t,e,n){if(0===t.button){var r=this.$static.dragEvent,i=t.target.closest(".x-form-draggable"),o=i.getBoundingClientRect();r.mode=n,r.target=i,r.offsetLeft=t.clientX-o.left,r.offsetTop=t.clientY-o.top,r.data=e,e instanceof m&&(this.selectedField=e),document.addEventListener("mousemove",this.dragging),document.addEventListener("mouseup",this.dragend)}},dragging:function(t){var e=this.$static.dragEvent,n=this.$static.ghost,r=this.$refs.list;e.init||(n.style.display="block",n.querySelector(".x-form-designer-template").innerHTML=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".x-form-template";if(t.matches(e))return t.outerHTML;var n=t.querySelector(e);return null==n?"":n.outerHTML}(e.target),n.style.width="".concat(e.target.offsetWidth,"px"),e.init=!0,e.data instanceof m&&(e.data.dragging=!0));var i=t.clientX-e.offsetLeft,o=t.clientY-e.offsetTop;if(n.style.transform="translate(".concat(i,"px, ").concat(o,"px)"),e.direction=t.clientY-e.prevClientY>=0?1:-1,e.prevClientY=t.clientY,!function(t,e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.right<r.left||n.left>r.right||n.top>r.bottom||n.bottom<r.top}(n,r))return"sort"==e.mode?this.sort(o):"insert"==e.mode?this.insert(o):void 0;if(e.inserted){var s=this.value.findIndex(function(t){return t==e.inserted});this.value.splice(s,1),this.$emit("input",this.value),e.mode="insert",e.inserted=null}},dragend:function(t){this.$static.ghost.style.display="none";var e=this.$static.dragEvent;e.init=!1,e.inserted=null,e.data instanceof m&&(e.data.dragging=!1),document.removeEventListener("mousemove",this.dragging),document.removeEventListener("mouseup",this.dragend)},renderField:function(t){var e=this,n=this.$createElement;return n("div",{class:"x-form-field x-form-draggable",on:{mousedown:function(n){return e.dragstart(n,t,"insert")},click:function(n){return e.quickInsert(n,t)}}},[n("div",{class:"x-form-field-content x-form-template"},[n("i",{class:["iconfont","icon-xform-".concat(t.type)]}),n("span",[t.title])])])},renderFieldPreview:function(t){var e=this,n=this.$createElement,r=d.findFieldDef(t.type);if(null==r)return console.warn("[not implement]: ".concat(t.title,"(").concat(t.type,") ")),null;var i=this.$createElement(r.components.preview,{class:["x-form-template"],props:{field:t}});return n("div",{class:{"x-form-field-preview":!0,"x-form-draggable":!0,"x-form-is-selected":this.selectedField==t,"x-form-is-dragging":t.dragging}},[i,n("button",{attrs:{type:"button"},class:"x-form-designer-delete",on:{click:function(n){return e.remove(n,t)}}},[n("i",{class:"iconfont icon-xform-close"})]),n("div",{class:"x-form-designer-cover",on:{mousedown:function(n){return e.dragstart(n,t,"sort")}}})])},renderPreview:function(){var t=this.$createElement,e=this.isEmpty?t("div",{class:"x-form-preview-tip"},[t("img",{attrs:{src:i.a}}),t("p",["请将左侧控件拖动到此处"])]):this.value.map(this.renderFieldPreview);return t("div",{class:"x-form-designer-list",ref:"list"},[e])},renderSetting:function(){var t=this;if(null==this.selectedField)return null;var e=this.selectedField,n=d.findFieldDef(e.type),r={field:e},i={update:function(n){var r=n.prop,i=n.value;e[r]=i,t.$emit("input",t.value)}};return this.$createElement(n.components.setting,{props:r,on:i})}},render:function(t){return t("div",{class:"x-form-designer"},[t("div",{class:"x-form-designer-fields"},[this.fields.map(this.renderField)]),t("div",{class:"x-form-designer-main"},[this.renderPreview()]),t("div",{class:["x-form-designer-setting",null==this.selectedField?null:"x-form-is-active"]},[this.renderSetting()]),t("div",{class:"x-form-designer-ghost",key:"x-form-designer-ghost"},[t("div",{class:"x-form-designer-template"}),t("div",{class:"x-form-designer-cover"})])])},mounted:function(){this.$static.ghost=this.$el.querySelector(".x-form-designer-ghost")}},g={name:"x-form-builder",props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{submit:function(){},create:function(t){var e=this,n=d.findFieldDef(t.type),r={field:t,value:this.value[t.name]},i={input:function(n){e.$set(e.value,t.name,n),e.$emit("input",e.value)}};return this.$createElement(n.components.builder,{props:r,on:i})},renderFormItem:function(t){return(0,this.$createElement)("x-form-item",{attrs:{field:t}},[this.create(t)])}},render:function(){var t=arguments[0];return t("div",{class:"x-form-builder"},[t("div",{class:"x-form-builder-main"},[this.fields.map(this.renderFormItem)])])}};var y={name:"x-form-viewer",props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},formatter:{type:Function,default:function(t,e){return e[t.name]}}},methods:{renderItem:function(t){var e=this.$createElement,n=this.formatter(t,this.value);return e("div",{class:["x-form-viewer-item",t.notNull?"x-form-not-null":null]},[e("label",{class:"x-form-viewer-label"},[t.title]),e("div",{class:"x-form-viewer-content"},[n])])}},render:function(){var t=arguments[0];return t("div",{class:"x-form-viewer"},[t("div",{class:"x-form-viewer-main"},[this.fields.map(this.renderItem)])])}},b={name:"x-form-item",props:{field:{type:Object,default:function(){return{}}}},methods:{renderErrorMessage:function(){var t=this.$createElement;return Math.random()>0?null:t("div",{class:"x-form-item-error-message"},["error message. 错误信息。"])}},render:function(){var t=arguments[0];return t("div",{class:["x-form-item",this.field.notNull?"x-form-not-null":null]},[t("label",{class:"x-form-item-label"},[t("span",[this.field.title]),t("sup",{class:"x-form-star"},["*"])]),t("div",{class:"x-form-item-content"},[this.$slots.default,this.renderErrorMessage()])])}};var w={toFields:function(t,e){return Array.isArray(t)?t.map(function(t){var n=t instanceof m?t.toXField():new p(t);return"function"==typeof e?e(n,t):n}):[]},toDesignFields:function(t,e){return Array.isArray(t)?t.map(function(t){var n=t instanceof p?m.fromXField(t):new m(t);return"function"==typeof e?e(n,t):n}):[]}},A={nonReactive:o,setting:{props:{field:{type:Object,default:function(){return{}}}},methods:{updateProp:function(t){var e=t.target,n=e.tagName.toLowerCase(),r=e.dataset.prop,i=e.value;"input"==n&&"checkbox"==e.type&&(i=e.checked),this.$emit("update",{prop:r,value:i})}}},builder:{props:{field:{type:Object,default:function(){return{}}}},computed:{placeholder:function(){return this.field.placeholder}},methods:{inputForDom:function(t){this.input(t.target.value)},input:function(t){this.$emit("input",t)}}}},j={XField:p,XFieldDef:u,XDesignField:m};n.d(e,"components",function(){return P}),n.d(e,"store",function(){return d}),n.d(e,"adapter",function(){return w}),n.d(e,"mixin",function(){return A}),n.d(e,"model",function(){return j});var P={XFormDesigner:x,XFormBuilder:g,XFormViewer:y,XFormItem:b},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};d.setConfig(e),Object.keys(P).forEach(function(e){var n=P[e];t.component(n.name,n)})},F={name:"xForm",version:"0.0.1",install:C,store:d,adapter:w,mixin:A,model:j,components:P};"undefined"!=typeof window&&window.Vue&&C(window.Vue);e.default=F},function(t,e,n){var r=n(5);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(6),i=n(7);t.exports=function(t,e,n,o){var s=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var u=e[a],c=o?o(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),s?i(n,u,c):r(n,u,c)}return n}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(12),i=1,o=4;t.exports=function(t){return r(t,i|o)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(7),i=n(5),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(20);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(3)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){},function(t,e,n){var r=n(13),i=n(19),o=n(6),s=n(22),a=n(23),l=n(25),u=n(30),c=n(31),f=n(33),d=n(35),p=n(36),v=n(37),m=n(38),h=n(39),x=n(40),g=n(44),y=n(45),b=n(46),w=n(9),A=n(47),j=n(8),P=1,C=2,F=4,O="[object Arguments]",E="[object Function]",X="[object GeneratorFunction]",_="[object Object]",z={};z[O]=z["[object Array]"]=z["[object ArrayBuffer]"]=z["[object DataView]"]=z["[object Boolean]"]=z["[object Date]"]=z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Map]"]=z["[object Number]"]=z[_]=z["[object RegExp]"]=z["[object Set]"]=z["[object String]"]=z["[object Symbol]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z["[object Error]"]=z[E]=z["[object WeakMap]"]=!1,t.exports=function t(e,n,k,B,V,S){var L,D=n&P,T=n&C,M=n&F;if(k&&(L=V?k(e,B,V,S):k(e)),void 0!==L)return L;if(!w(e))return e;var N=g(e);if(N){if(L=m(e),!D)return u(e,L)}else{var q=v(e),W=q==E||q==X;if(y(e))return l(e,D);if(q==_||q==O||W&&!V){if(L=T||W?{}:x(e),!D)return T?f(e,a(L,e)):c(e,s(L,e))}else{if(!z[q])return V?e:{};L=h(e,q,D)}}S||(S=new r);var R=S.get(e);if(R)return R;S.set(e,L),A(e)?e.forEach(function(r){L.add(t(r,n,k,r,e,S))}):b(e)&&e.forEach(function(r,i){L.set(i,t(r,n,k,i,e,S))});var K=M?T?p:d:T?keysIn:j,H=N?void 0:K(e);return i(H||e,function(r,i){H&&(r=e[i=r]),o(L,i,t(r,n,k,i,e,S))}),L}},function(t,e,n){var r=n(14),i=n(15),o=n(16),s=n(17),a=n(18);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=i,l.prototype.get=o,l.prototype.has=s,l.prototype.set=a,t.exports=l},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(1),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(1);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(1);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(1);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},function(t,e,n){var r=n(21),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(2),i=n(8);t.exports=function(t,e){return t&&r(e,i(e),t)}},function(t,e,n){var r=n(2),i=n(24);t.exports=function(t,e){return t&&r(e,i(e),t)}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){(function(t){var r=n(27),i=e&&!e.nodeType&&e,o=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===i?r.Buffer:void 0,a=s?s.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=a?a(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(26)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(28),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(29))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(2),i=n(32);t.exports=function(t,e){return r(t,i(t),e)}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(2),i=n(34);t.exports=function(t,e){return r(t,i(t),e)}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(3)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(41),i=n(42),o=n(43);t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:r(i(t))}},function(t,e,n){var r=n(9),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=o},function(t,e,n){var r=n(3)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){t.exports=function(){return!1}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(){return!1}},function(t,e,n){t.exports=n(50)},,function(t,e,n){"use strict";n.r(e);var r=n(0);function i(t,e,n,r,i,o,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:u}}var o=i({name:"x-form-text-setting",mixins:[r.mixin.setting]},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-form-setting"},[n("h3",{staticClass:"x-form-setting-head"},[t._v("单行文本")]),t._v(" "),n("section",{staticClass:"x-form-setting-group"},[n("header",[t._v("标题：")]),t._v(" "),n("input",{staticClass:"x-form-setting-control",attrs:{type:"text","data-prop":"title"},domProps:{value:t.field.title},on:{input:t.updateProp}})]),t._v(" "),n("section",{staticClass:"x-form-setting-group"},[n("header",[t._v("提示：")]),t._v(" "),n("textarea",{staticClass:"x-form-setting-control",attrs:{"data-prop":"placeholder",rows:"3",placeholder:"请输入提示信息..."},domProps:{value:t.field.placeholder},on:{input:t.updateProp}})]),t._v(" "),n("section",{staticClass:"x-form-setting-group"},[n("header",[t._v("验证：")]),t._v(" "),n("label",{staticClass:"x-form-setting-checkbox"},[n("input",{attrs:{type:"checkbox","data-prop":"notNull"},domProps:{checked:t.field.notNull},on:{input:t.updateProp}}),t._v(" "),n("span",[t._v("必填")])])])])},[],!1,null,null,null).exports,s=i({name:"x-form-text-preview",props:{field:{type:Object,default:function(){return{}}}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["x-form-preview-group",t.field.notNull?"x-form-not-null":null]},[n("label",{staticClass:"x-form-preview-label"},[n("span",[t._v(t._s(t.field.title))]),t._v(" "),n("sup",{staticClass:"x-form-star"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"x-form-preview-content"},[n("input",{staticClass:"x-form-preview-mock",attrs:{type:"text",placeholder:t.field.placeholder}})])])},[],!1,null,null,null).exports,a=i({name:"x-form-text",mixins:[r.mixin.builder],props:{value:{type:String,default:null}}},function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"x-form-text",attrs:{type:"text",name:this.field.name,placeholder:this.placeholder},domProps:{value:this.value},on:{input:this.inputForDom}})},[],!1,null,null,null).exports,l=new r.model.XFieldDef({type:"text",title:"单行文本",components:{setting:o,preview:s,builder:a}}),u=i({name:"x-form-textarea-setting",mixins:[r.mixin.setting]},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-form-setting"},[n("h3",{staticClass:"x-form-setting-head"},[t._v("多行文本")]),t._v(" "),n("section",{staticClass:"x-form-setting-group"},[n("header",[t._v("标题：")]),t._v(" "),n("input",{staticClass:"x-form-setting-control",attrs:{type:"text","data-prop":"title"},domProps:{value:t.field.title},on:{input:t.updateProp}})]),t._v(" "),n("section",{staticClass:"x-form-setting-group"},[n("header",[t._v("提示：")]),t._v(" "),n("textarea",{staticClass:"x-form-setting-control",attrs:{"data-prop":"placeholder",rows:"3",placeholder:"请输入提示信息..."},domProps:{value:t.field.placeholder},on:{input:t.updateProp}})]),t._v(" "),n("section",{staticClass:"x-form-setting-group"},[n("header",[t._v("验证：")]),t._v(" "),n("label",{staticClass:"x-form-setting-checkbox"},[n("input",{attrs:{type:"checkbox","data-prop":"notNull"},domProps:{checked:t.field.notNull},on:{input:t.updateProp}}),t._v(" "),n("span",[t._v("必填")])])])])},[],!1,null,null,null).exports,c=i({name:"x-form-textarea-preview",props:{field:{type:Object,default:function(){return{}}}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["x-form-preview-group",t.field.notNull?"x-form-not-null":null]},[n("label",{staticClass:"x-form-preview-label"},[n("span",[t._v(t._s(t.field.title))]),t._v(" "),n("sup",{staticClass:"x-form-star"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"x-form-preview-content"},[n("textarea",{staticClass:"x-form-preview-mock",attrs:{rows:"3",placeholder:t.field.placeholder}})])])},[],!1,null,null,null).exports,f=i({name:"x-form-textarea",mixins:[r.mixin.builder],props:{value:{type:String,default:null}}},function(){var t=this.$createElement;return(this._self._c||t)("textarea",{staticClass:"x-form-textarea",attrs:{name:this.field.name,placeholder:this.placeholder},domProps:{value:this.value},on:{input:this.inputForDom}})},[],!1,null,null,null).exports,d=new r.model.XFieldDef({type:"textarea",title:"多行文本",components:{setting:u,preview:c,builder:f}});n.d(e,"store",function(){return r.store}),n.d(e,"adapter",function(){return r.adapter}),n.d(e,"mixin",function(){return r.mixin}),n.d(e,"model",function(){return r.model}),n.d(e,"components",function(){return r.components}),r.default.store.register(l,d);e.default=r.default}]).default});