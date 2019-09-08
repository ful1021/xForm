/*!
 * xform v0.2.0 (https://github.com/dongls/xForm)
 * Copyright 2019 dongls
 * Released under the MIT License
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("xForm",[],t):"object"==typeof exports?exports.xForm=t():e.xForm=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=10)}([function(e,t,n){var r=n(12),i=1,o=4;e.exports=function(e){return r(e,i|o)}},function(e,t,n){var r=n(4);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(5),i=n(6);e.exports=function(e,t,n,o){var a=!n;n||(n={});for(var s=-1,l=t.length;++s<l;){var u=t[s],f=o?o(n[u],e[u],u,n,e):void 0;void 0===f&&(f=e[u]),a?i(n,u,f):r(n,u,f)}return n}},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(6),i=n(4),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var a=e[t];o.call(e,t)&&i(a,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(20);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(3)(Object.keys,Object);e.exports=r},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n(48)},function(e,t,n){},function(e,t,n){var r=n(13),i=n(19),o=n(5),a=n(22),s=n(23),l=n(25),u=n(30),f=n(31),c=n(33),d=n(35),v=n(36),p=n(37),h=n(38),m=n(39),g=n(40),b=n(44),x=n(45),y=n(46),w=n(8),j=n(47),A=n(7),P=1,F=2,O=4,E="[object Arguments]",V="[object Function]",X="[object GeneratorFunction]",L="[object Object]",S={};S[E]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[L]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S["[object Error]"]=S[V]=S["[object WeakMap]"]=!1,e.exports=function e(t,n,z,C,B,q){var k,W=n&P,D=n&F,M=n&O;if(z&&(k=B?z(t,C,B,q):z(t)),void 0!==k)return k;if(!w(t))return t;var $=b(t);if($){if(k=h(t),!W)return u(t,k)}else{var T=p(t),K=T==V||T==X;if(x(t))return l(t,W);if(T==L||T==E||K&&!B){if(k=D||K?{}:g(t),!W)return D?c(t,s(k,t)):f(t,a(k,t))}else{if(!S[T])return B?t:{};k=m(t,T,W)}}q||(q=new r);var H=q.get(t);if(H)return H;q.set(t,k),j(t)?t.forEach(function(r){k.add(e(r,n,z,r,t,q))}):y(t)&&t.forEach(function(r,i){k.set(i,e(r,n,z,i,t,q))});var N=M?D?v:d:D?keysIn:A,R=$?void 0:N(t);return i(R||t,function(r,i){R&&(r=t[i=r]),o(k,i,e(r,n,z,i,t,q))}),k}},function(e,t,n){var r=n(14),i=n(15),o=n(16),a=n(17),s=n(18);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=i,l.prototype.get=o,l.prototype.has=a,l.prototype.set=s,e.exports=l},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(1),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)}},function(e,t,n){var r=n(1);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(1);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=this.__data__,i=r(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},function(e,t,n){var r=n(21),i=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(2),i=n(7);e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t,n){var r=n(2),i=n(24);e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){(function(e){var r=n(27),i=t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=s?s(n):new e.constructor(n);return e.copy(r),r}}).call(this,n(26)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(28),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(29))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},function(e,t,n){var r=n(2),i=n(32);e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(2),i=n(34);e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(3)(Object.keys,Object);e.exports=r},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(41),i=n(42),o=n(43);e.exports=function(e){return"function"!=typeof e.constructor||o(e)?{}:r(i(e))}},function(e,t,n){var r=n(8),i=Object.create,o=function(){function e(){}return function(t){if(!r(t))return{};if(i)return i(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=o},function(e,t,n){var r=n(3)(Object.getPrototypeOf,Object);e.exports=r},function(e,t){e.exports=function(){return!1}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict";n.r(t);n(11);var r=n(0),i=n.n(r);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e);var n=this;this.type=t.type,this.title=t.title,this.icon=t.icon,this.maxLength=t.maxLength,this.component=t.component||{},this.extension=t.extension||{},this.validator=function(){return"function"!=typeof t.validator?Promise.resolve():t.validator.apply(n,arguments)}},s={position:"left",width:null},l={modes:{},label:s,formatter:function(e,t){return t[e.name]},designer:{},builder:{className:null,label:i()(s)},viewer:{}},u={config:{},fields:{}};function f(e,t){if(null==t||""==t)return null;for(var n=e,r=t.split("."),i=0;i<r.length;i++){var o=r[i];if(null==n[o])return null;n=n[o]}return n}var c={register:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length<=0||Array.from(arguments).reduce(function(e,t){return(Array.isArray(t)?e=e.concat(t):e.push(t))&&e},[]).filter(function(e){return e instanceof a}).forEach(function(e){u.fields[e.type]=e})},setConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u.config=Object.assign(u.config,i()(l),i()(e))},findConfigProp:function(){for(var e=0;e<arguments.length;e++){var t=e<0||arguments.length<=e?void 0:arguments[e],n=f(u.config,t);if(null!=n)return n}return null},findFieldDef:function(e){return u.fields[e]},findFieldDefs:function(e){var t=function(e){return f(u.config,"modes.".concat(e))}(e),n=Object.keys(u.fields);return Array.isArray(t)&&(n=n.filter(function(e){return t.includes(e)})),n.map(function(e){return u.fields[e]})},findFieldValidator:function(e){return(u.fields[e]||{}).validator}};function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t.type,this.name=t.name||"field_".concat(Math.random().toString(16).slice(-8)),this.title=t.title,this.placeholder=t.placeholder,this.defaultValue=t.defaultValue,this.required=!0===t.required,this.designer={dragging:!1},Object.defineProperty(this,"_exclude_props",{enumerable:!1,value:["designer"]})}var t,n,r;return t=e,(n=[{key:"toJSON",value:function(){for(var e=this._exclude_props||[],t=Object.keys(this).filter(function(t){return e.indexOf(t)<0}),n={},r=0;r<t.length;r++){var i=t[r];n[i]=this[i]}return n}}])&&d(t.prototype,n),r&&d(t,r),e}();var p={toFields:function(e,t){return Array.isArray(e)?e.map(function(e){if(e instanceof v)return e;var n="function"==typeof t?t(e):e;return new v(n)}):[]}},h={beforeCreate:function(){var e=this.$options.static;if("function"==typeof e){var t=e.call(this);this.$static=Object.assign(this.$static||{},t)}}},m={nonReactive:h,setting:{props:{field:{type:Object,default:function(){return{}}}},methods:{updateProp:function(e){var t=e.target,n=t.tagName.toLowerCase(),r=t.dataset.prop,i=t.value;"input"==n&&"checkbox"==t.type&&(i=t.checked),this.$emit("update",{prop:r,value:i})}}},builder:{props:{field:{type:Object,default:function(){return{}}},placeholder:{type:String,default:function(){var e=this.field;if(null==e)return"";var t=e.required?"[必填] ":"",n=e.placeholder||"";return"".concat(t).concat(n)||null}}},methods:{inputForDom:function(e){this.input(e.target.value)},input:function(e){this.$emit("input",e)},getValue:function(){return this.value},dispatch:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});r?this.$nextTick(function(){return n.$el.dispatchEvent(i)}):this.$el.dispatchEvent(i)}},mounted:function(){this.dispatch("xform.builder.field.add",{value:this.getValue,field:this.field},!0)},beforeDestroy:function(){this.dispatch("xform.builder.field.remove",{field:this.field})},watch:{value:{deep:!0,handler:function(){this.dispatch("xform.builder.validate",{field:this.field})}}}}},g={XField:v,XFieldDef:a},b=n(9),x=n.n(b);function y(e,t,n,r){arguments.length>4&&void 0!==arguments[4]&&arguments[4];var i=Array.from(n.children),o=n.getBoundingClientRect();if(e<=0)for(var a=t-o.top+n.scrollTop,s=0;s<i.length;s++){var l=i[s];if(l.offsetTop+l.offsetHeight/2>a)return s}if(e>0)for(var u=t-o.top+n.scrollTop+r.offsetHeight,f=i.length-1;f>=0;f--){var c=i[f];if(c.offsetTop+c.offsetHeight/2<u)return f}return-1}var w={name:"x-form-designer",mixins:[h],props:{value:{type:Array,default:function(){return[]}},mode:{type:String,default:null}},static:function(){return{container:null,ghost:null,dragEvent:{mode:"sort",target:null,direction:0,init:!1,offsetLeft:0,offsetTop:0,prevClientY:0,data:null,inserted:null}}},data:function(){return{fields:c.findFieldDefs(this.mode),selectedField:null}},computed:{isEmpty:function(){return!Array.isArray(this.value)||0==this.value.length}},methods:{remove:function(e,t){if(confirm("该字段删除后不可恢复，是否继续？")){var n=this.value.findIndex(function(e){return e==t});n>=0&&(this.value.splice(n,1),this.$emit("input",this.value))}},quickInsert:function(e,t){var n=new v(t),r=this.value.concat(n);this.selectedField=n,this.$emit("input",r)},insert:function(e){var t=this.$static.dragEvent,n=this.$static.ghost,r=y(t.direction,e,this.$refs.list,n),i=new v(t.data);this.value.splice(r,0,i),this.$emit("input",this.value),this.selectedField=i,t.mode="sort",t.inserted=i},sort:function(e){var t=this,n=this.$static.dragEvent,r=this.$static.ghost,i=this.value.findIndex(function(e){return e==t.selectedField}),o=y(n.direction,e,this.$refs.list,r,i),a=this.value.length;if(!(i<0||o<0||i>a||o>a||i==o)){var s=this.value;s[i]=s.splice(o,1,s[i])[0],this.$emit("input",s)}},dragstart:function(e,t,n){if(0===e.button){var r=this.$static.dragEvent,i=e.target.closest(".x-form-draggable"),o=i.getBoundingClientRect();r.mode=n,r.target=i,r.offsetLeft=e.clientX-o.left,r.offsetTop=e.clientY-o.top,r.data=t,t instanceof v&&(this.selectedField=t),document.addEventListener("mousemove",this.dragging),document.addEventListener("mouseup",this.dragend)}},dragging:function(e){var t=this.$static.dragEvent,n=this.$static.ghost,r=this.$refs.list;t.init||(n.style.display="block",n.querySelector(".x-form-designer-template").innerHTML=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".x-form-template";if(e.matches(t))return e.outerHTML;var n=e.querySelector(t);return null==n?"":n.outerHTML}(t.target),n.style.width="".concat(t.target.offsetWidth,"px"),t.init=!0,t.data instanceof v&&(t.data.designer.dragging=!0));var i=e.clientX-t.offsetLeft,o=e.clientY-t.offsetTop;if(n.style.transform="translate(".concat(i,"px, ").concat(o,"px)"),t.direction=e.clientY-t.prevClientY>=0?1:-1,t.prevClientY=e.clientY,!function(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return n.right<r.left||n.left>r.right||n.top>r.bottom||n.bottom<r.top}(n,r))return"sort"==t.mode?this.sort(o):"insert"==t.mode?this.insert(o):void 0;if(t.inserted){var a=this.value.findIndex(function(e){return e==t.inserted});this.value.splice(a,1),this.$emit("input",this.value),t.mode="insert",t.inserted=null}},dragend:function(e){this.$static.ghost.style.display="none";var t=this.$static.dragEvent;t.init=!1,t.inserted=null,t.data instanceof v&&(t.data.designer.dragging=!1),document.removeEventListener("mousemove",this.dragging),document.removeEventListener("mouseup",this.dragend)},renderField:function(e){var t=this,n=this.$createElement;return n("div",{class:"x-form-designer-field x-form-draggable",on:{mousedown:function(n){return t.dragstart(n,e,"insert")},click:function(n){return t.quickInsert(n,e)}}},[n("div",{class:"x-form-designer-field-content x-form-template"},[n("i",{class:e.icon}),n("span",[e.title])])])},renderFieldPreview:function(e){var t=this,n=this.$createElement,r=this.createComponent("preview",e,{props:{field:e}});return n("div",{class:{"x-form-designer-preview":!0,"x-form-draggable":!0,"x-form-is-selected":this.selectedField==e,"x-form-is-dragging":e.designer.dragging}},[n("x-form-item",{class:"x-form-template",attrs:{field:e,validation:!1}},[r]),n("button",{attrs:{type:"button"},class:"x-form-designer-delete",on:{click:function(n){return t.remove(n,e)}}},[n("i",{class:"iconfont icon-xform-remove"})]),n("div",{class:"x-form-designer-cover",on:{mousedown:function(n){return t.dragstart(n,e,"sort")}}})])},renderPreview:function(){var e=this.$createElement,t=this.isEmpty?e("div",{class:"x-form-designer-preview-tip"},[e("img",{attrs:{src:x.a}}),e("p",["请将左侧控件拖动到此处"])]):this.value.map(this.renderFieldPreview);return e("div",{class:"x-form-designer-list",ref:"list"},[t])},renderSetting:function(){var e=this;if(null==this.selectedField)return null;var t=this.selectedField,n={field:t},r={update:function(n){var r=n.prop,i=n.value;t[r]=i,e.$emit("input",e.value)}};return this.createComponent("setting",t,{props:n,on:r})},createComponent:function(e,t,n){var r="type_".concat(t.type,"_").concat(e);if(this.$scopedSlots[r])return this.$scopedSlots[r]({field:t});var i=c.findFieldDef(t.type);if(null==i)return console.warn("[xform]: ".concat(t.title,"(").concat(t.type,") not implement")),null;var o=i.extension["".concat(this.mode,"_").concat(e)]||i.component[e];return this.$createElement(o,n)}},render:function(){var e=arguments[0];return e("div",{class:"x-form-designer"},[e("div",{class:"x-form-designer-field-panel"},[e("div",{class:"x-form-designer-fields"},[this.fields.map(this.renderField)])]),e("div",{class:"x-form-designer-main"},[this.renderPreview()]),e("div",{class:["x-form-designer-setting",null==this.selectedField?null:"x-form-is-active"]},[this.renderSetting()]),e("div",{class:"x-form-designer-ghost",key:"x-form-designer-ghost"},[e("div",{class:"x-form-designer-template"}),e("div",{class:"x-form-designer-cover"})])])},mounted:function(){this.$static.ghost=this.$el.querySelector(".x-form-designer-ghost")}};function j(e){return null==e||"string"==typeof e&&0==e.length}var A={name:"x-form-builder",mixins:[h],props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},mode:{type:String,default:null}},static:function(){return{validators:{}}},data:function(){return{pending:!1}},methods:{validate:function(){var e=this;if(this.pending)return Promise.reject("[xform error]: validate pending...");this.pending=!0;var t=this.$static.validators,n=Object.keys(t).map(function(e){return t[e]()});return Promise.all(n).then(function(e){return{messages:e,status:e.every(function(e){return!0===e})}}).catch(function(e){console.error("[xform error]: ",e)}).finally(function(){e.pending=!1})},addField:function(e){var t=e.detail,n=t.field,r=t.validate;this.$static.validators[n.name]=r},removeField:function(){var e=event.detail.field;delete this.$static.validators[e.name]},fillDefaultValue:function(e,t){return null==e?{}:(t.forEach(function(t){var n=t.name;Object.prototype.hasOwnProperty.call(e,n)||j(t.defaultValue)||(e[n]=t.defaultValue)}),e)},renderFormItem:function(e){return(0,this.$createElement)("x-form-item",{attrs:{field:e}},[this.createComponent(e)])},createComponent:function(e){var t=this,n="name_".concat(e.name);if(this.$scopedSlots[n])return this.$scopedSlots[n]({field:e});var r="type_".concat(e.type);if(this.$scopedSlots[r])return this.$scopedSlots[r]({field:e});var i=c.findFieldDef(e.type);if(null==i)return console.warn("[xform]: ".concat(e.title,"(").concat(e.type,") not implement"));var o={field:e,value:this.value[e.name]},a={input:function(n){t.$set(t.value,e.name,n),t.$emit("input",t.value)}},s=i.extension["".concat(this.mode,"_builder")]||i.component.builder;return null==s?null:this.$createElement(s,{props:o,on:a})}},render:function(){var e=arguments[0];return e("div",{class:"x-form-builder"},[e("div",{class:"x-form-builder-main"},[this.$slots.top,this.fields.map(this.renderFormItem),this.$slots.bottom])])},created:function(){var e=this.fillDefaultValue(this.value,this.fields);this.$emit("input",e)},mounted:function(){this.$el.addEventListener("xform.builder.field.add",this.addField),this.$el.addEventListener("xform.builder.field.remove",this.removeField)},beforeDestroy:function(){this.$el.removeEventListener("xform.builder.field.add",this.addField),this.$el.removeEventListener("xform.builder.field.remove",this.removeField)}};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F={name:"x-form-viewer",props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},formatter:{type:Function,default:function(e,t){return c.findConfigProp("viewer.formatter","formatter").call(this,e,t)}},labelWidth:{type:String,default:function(){return c.findConfigProp("viewer.label.width","label.width")}},labelPosition:{type:String,default:function(){var e=["left","right","top"],t=c.findConfigProp("viewer.label.position","label.position");return e.indexOf(t)>=0?t:e[0]}},mode:{type:String,default:null}},methods:{renderItem:function(e){var t,n=this.$createElement,r=this.createComponent(e);return n("div",{class:(P(t={"x-form-viewer-item":!0},"x-form-viewer-item-".concat(this.labelPosition),!0),P(t,"x-form-is-required",e.required),t)},[n("label",{class:"x-form-viewer-label",style:{width:this.labelWidth}},[e.title]),n("div",{class:"x-form-viewer-content"},[r])])},createComponent:function(e){var t=this.formatter(e,this.value),n={field:e,value:t,model:this.value},r="name_".concat(e.name);if(this.$scopedSlots[r])return this.$scopedSlots[r](n);var i="type_".concat(e.type);if(this.$scopedSlots[i])return this.$scopedSlots[i](n);var o=c.findFieldDef(e.type);if(null==o)return console.warn("[xform]: ".concat(e.title,"(").concat(e.type,") not implement")),null;var a=o.extension["".concat(this.mode,"_viewer")]||o.component.viewer;return null!=a?this.$createElement(a,{props:n}):t}},render:function(){var e=arguments[0];return e("div",{class:"x-form-viewer"},[e("div",{class:"x-form-viewer-main"},[this.fields.map(this.renderItem)])])}};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={name:"x-form-item",mixins:[h],props:{field:{type:Object,default:function(){return{}}},validation:{type:[Boolean,Function],default:!0},labelWidth:{type:String,default:function(){return c.findConfigProp("viewer.label.width","label.width")}},labelPosition:{type:String,default:function(){var e=["left","right","top"],t=c.findConfigProp("label.position","builder.label.position");return e.indexOf(t)>=0?t:e[0]}}},static:function(){return{field:null,value:null}},data:function(){return{message:null,status:null}},computed:{isNeedValidation:function(){var e=this.validation;return"boolean"==typeof e&&e||"function"==typeof e}},methods:{getField:function(e){var t=e&&e.detail&&e.detail.field||this.$static.field||this.field;return t instanceof v?t:new v(t)},getValidator:function(e){return"function"==typeof this.validation?this.validation:c.findFieldValidator(e)},renderErrorMessage:function(){var e=this.$createElement;return null==this.message?null:e("p",{class:"x-form-item-message"},[this.message])},changeMessage:function(e){this.message=j(e)?null:e},validate:function(e){var t=this;if(!this.isNeedValidation)return e.stopPropagation();var n=this.getField(e);if(null==n)return Promise.resolve();var r=this.getValidator(n.type);return null==r?Promise.resolve():r(n,"function"==typeof this.$static.value?this.$static.value():this.$static.value,this.changeMessage).then(function(){return t.message=null,t.status=null,!0}).catch(function(e){var n=t.parseError(e);return t.message=n,t.status="error",n})},addField:function(e){if(!this.isNeedValidation)return e.stopPropagation();e.detail.validate=this.validate,this.$static.value=e.detail.value,this.$static.field=e.detail.field},removeField:function(e){if(!this.isNeedValidation)return e.stopPropagation();this.$static.value=null,this.$static.field=null},parseError:function(e){return null==e?null:e instanceof Error?e.message:e}},render:function(){var e,t=arguments[0],n=this.getField(),r=(O(e={"x-form-item":!0},"x-form-item-".concat(this.labelPosition),!0),O(e,"x-form-is-required",n.required),O(e,"x-form-is-".concat(this.status),null!=this.status),e),i={width:this.labelWidth};return t("div",{class:r},[t("label",{class:"x-form-item-label",style:i,attrs:{for:n.name}},[t("span",[n.title]),n.required?t("sup",{class:"x-form-star"},["*"]):null]),t("div",{class:"x-form-item-content"},[this.$slots.default,this.renderErrorMessage()])])},mounted:function(){this.isNeedValidation&&(this.$el.addEventListener("xform.builder.validate",this.validate),this.$el.addEventListener("xform.builder.field.add",this.addField),this.$el.addEventListener("xform.builder.field.remove",this.removeField))},beforeDestroy:function(){this.isNeedValidation&&(this.$el.removeEventListener("xform.builder.validate",this.validate),this.$el.removeEventListener("xform.builder.field.add",this.addField),this.$el.removeEventListener("xform.builder.field.remove",this.removeField))}};n.d(t,"components",function(){return V}),n.d(t,"store",function(){return c}),n.d(t,"adapter",function(){return p}),n.d(t,"mixin",function(){return m}),n.d(t,"model",function(){return g});var V={XFormDesigner:w,XFormBuilder:A,XFormViewer:F,XFormItem:E},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c.setConfig(t),Object.keys(V).forEach(function(t){var n=V[t];e.component(n.name,n)})},L={name:"xForm",install:X,store:c,adapter:p,mixin:m,model:g,components:V};"undefined"!=typeof window&&window.Vue&&X(window.Vue);t.default=L}]).default});