/*!
 * xform v0.4.1 (https://github.com/dongls/xForm)
 * Copyright 2019 dongls
 * Released under the MIT License
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("xForm",[],t):"object"==typeof exports?exports.xForm=t():e.xForm=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";function n(e){if(null==e)return"";var t=e.required?"select"==e.type?"[必选] ":"[必填] ":"",r=e.placeholder||"";return"".concat(t).concat(r)||null}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["xform-designer","xform-builder","xform-viewer"];if(null==e)return null;for(var n=e.$root,i=e.$parent;null!=i&&i!=n;){if(i.$options.name==t)return i;if(r.indexOf(i.$options.name)>=0)return null;i=i.$parent}return null}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.r(t);var l={validate:{bind:function(e,t,r){var n=r.context,l=i(r.componentInstance,"xform-item"),a=("object"==o(t.value)?t.value:{key:t.value}).key||n.field&&n.field.name;null!=l&&null!=a&&(l.$emit("xform.builder.field.add",{key:a,context:n}),n.$watch("value",(function(){return l.$emit("xform.builder.validate")}),{deep:!0}),n.__xform_directive_validate_key__=a,n.__xform_directive_xform_item_instance__=l)},unbind:function(e,t,r){var n=r.context,i=n.__xform_directive_validate_key__,o=n.__xform_directive_xform_item_instance__;null!=i&&null!=o&&o.$emit("xform.builder.field.remove",{key:i})}}},a={bind:function(e,t,r){var n=t.arg,i=l[n];return null==i?null:i.bind(e,t,r)},unbind:function(e,t,r){var n=t.arg,i=l[n];return null==i?null:i.unbind(e,t,r)}};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u={RegExp:"[object RegExp]"};function f(e){return null==e||"string"==typeof e&&0==e.length}function c(e){return function(e){return null!=e&&("object"==s(e)||"function"==typeof e)}(e)&&Object.prototype.toString.call(e)==u.RegExp}function d(e){if(null==e||"object"!=s(e))return e;if(Array.isArray(e))return e.map(d);var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=e[r];t[r]=null==n||"object"!=s(e)?n:d(n)}return t}function p(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&null!=t[r]){var n=t[r];if("object"!=s(n)||Array.isArray(n))e[r]=n;else{var i=e[r];e[r]=p("object"!=s(i)?{}:i,n)}}return e}function m(e,t){if(null==t||""==t)return null;for(var r=e,n=t.split("."),i=0;i<n.length;i++){var o=n[i];if(null==r[o])return null;r=r[o]}return r}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t.type,this.title=t.title,this.icon=t.icon,this.custom=!0===t.custom,this.attributes=t.attributes,this.component=t.component||{},this.extension=t.extension||{},this.validator=t.validator}var t,r,n;return t=e,(r=[{key:"available",get:function(){return null!=this.type}}])&&v(t.prototype,r),n&&v(t,n),e}();var y={modes:{},label:{position:"left",width:null},designer:{label:{position:"left",width:null}},builder:{label:{position:"left",width:null}},viewer:{label:{position:"left",width:null}},formatter:function(e,t){return t[e.name]}},g={config:{},types:{}};var b={register:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.length<=0||t.reduce((function(e,t){return(Array.isArray(t)?e=e.concat(t):e.push(t))&&e}),[]).map((function(e){return new h(e)})).filter((function(e){return e.available})).forEach((function(e){g.types[e.type]=e}))},setConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=d(y),r=d(e);g.config=function(){if(arguments.length<2)return arguments.length<=0?void 0:arguments[0];for(var e=arguments.length<=0?void 0:arguments[0],t=1;t<arguments.length;t++)e=p(e,t<0||arguments.length<=t?void 0:arguments[t]);return e}(g.config,t,r)},findConfigProp:function(){for(var e=0;e<arguments.length;e++){var t=e<0||arguments.length<=e?void 0:arguments[e],r=m(g.config,t);if(null!=r)return r}return null},findFieldType:function(e){return g.types[e]},findFieldTypes:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.reduce((function(e,t){return(Array.isArray(t)?e=e.concat(t):e.push(t))&&e}),[]).filter((function(e){return null!=e}));return 0==n.length&&(n=Object.keys(g.types)),n.map((function(e){return g.types[e]})).filter((function(e){return null!=e}))},findMode:function(e){var t=m(g.config,"modes.".concat(e));return Array.isArray(e)?t.filter((function(e){return null!=e})):[]}};function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t.type,this.name=t.name||"field_".concat(Math.random().toString(16).slice(-8)),this.title=t.title,this.placeholder=t.placeholder,this.tooltip=t.tooltip,this.defaultValue=t.defaultValue,this.required=!0===t.required,this.options=function(e){if(["select","checkbox","radio"].indexOf(e.type)<0)return[];var t=Array.isArray(e.options)?e.options:[];return 0==t.length&&t.push({value:"选项1"}),t}(t),this.attributes="function"==typeof t.attributes?t.attributes():t.attributes||{},this.designer={dragging:!1},Object.defineProperty(this,"_exclude_props",{enumerable:!1,value:["designer","storage"]}),Object.defineProperty(this,"_storage",{enumerable:!1,value:{fieldType:null}})}var t,r,n;return t=e,(r=[{key:"toJSON",value:function(){for(var e=this._exclude_props||[],t=Object.keys(this).filter((function(t){return e.indexOf(t)<0})),r={},n=0;n<t.length;n++){var i=t[n];r[i]=this[i]}return r}},{key:"findFieldType",value:function(){if(null==this.type)return null;var e=this._storage;if(e.fieldType instanceof h)return e.fieldType;var t=b.findFieldType(this.type);return null!=t&&(e.fieldType=t),t}}])&&x(t.prototype,r),n&&x(t,n),e}();var A={toFields:function(e,t){return Array.isArray(e)?e.map((function(e){if(e instanceof w)return e;var r="function"==typeof t?t(e):e;return new w(r)})):[]}},P={beforeCreate:function(){var e=this.$options.static;if("function"==typeof e){var t=e.call(this);this.$static=Object.assign(this.$static||{},t)}}},F={nonReactive:P,setting:{props:{field:{type:w,default:null}},methods:{updateProp:function(e){var t=e.target,r=t.tagName.toLowerCase(),n=t.dataset.prop,i=t.value;"input"==r&&"checkbox"==t.type&&(i=t.checked),this.update(n,i)},updateAttrs:function(e,t){if(null!=this.field){var r=this.field.attributes;this.$set(r,e,t),this.update("attributes",r)}},update:function(e,t){this.$emit("update",{prop:e,value:t})}}},builder:{props:{field:{type:w,default:null,required:!0},placeholder:{type:String,default:null}},computed:{prettyPlaceholder:function(){return this.placeholder?this.placeholder:n(this.field)}},methods:{input:function(e){this.$emit("input",e)}}},preview:{props:{field:{type:w,default:null},placeholder:{type:String,default:null}},computed:{prettyPlaceholder:function(){return this.placeholder?this.placeholder:n(this.field)}}}},S={XField:w,XFieldType:h},E=r(1),k=r.n(E),O=r(2),T=r.n(O);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var $=[".xform-designer-mark",".xform-droppable",".xform-designer-list",".xform-designer-zone"],V={name:"xform-designer",mixins:[P],props:{value:{type:Array,default:function(){return[]}},mode:{type:String,default:null}},static:function(){return{dragEvent:null}},data:function(){return{selectedField:null}},computed:{isEmpty:function(){return!Array.isArray(this.value)||0==this.value.length}},methods:{scroll:function(e){var t=function(e){var t=e.deltaX,r=e.deltaY,n=0==e.deltaMode?1:1==e.deltaMode?40:800;return{pixelX:t*n,pixelY:r*n}}(e).pixelY;this.$refs.scroll.scrollTop+=t},chooseField:function(e){var t=this;this.selectedField=e,this.$nextTick((function(){var e=t.$refs.scroll,r=t.$refs.list.querySelector(".xform-is-selected");(function(e,t){return e.offsetTop<t.scrollTop||e.offsetTop>t.scrollTop+t.offsetHeight})(r,e)&&(e.scrollTop=r.offsetTop)}))},remove:function(e,t){if(confirm("该字段删除后不可恢复，是否继续？")){var r=this.value.findIndex((function(e){return e==t}));r>=0&&(this.selectedField=null,this.value.splice(r,1),this.$emit("input",this.value))}},insert:function(e){var t=this.$static.dragEvent,r=new w(t.target._xform_field_type);return this.value.splice(e,0,r),this.$emit("input",this.value),r},sort:function(e,t){if(!(e<0||t<0||e==t)){var r=this.value,n=r.splice(e,1)[0];r.splice(t>e?t-1:t,0,n),this.$emit("input",r)}},dragstart:function(e){if(0===e.button){var t=this.createDragEvent(e);this.$static.dragEvent=t,document.addEventListener("mousemove",this.dragging),document.addEventListener("mouseup",this.dragend)}},dragging:function(e){var t=this.$static.dragEvent,r=this.$refs.ghost;t.init||(this.$refs.list.classList.add("xform-designer-silence"),r.querySelector(".xform-designer-ghost-template").innerHTML=this.createGhostTemplate(t),r.style.display="block","sort"==t.mode&&t.target.classList.add("xform-is-dragging"),t.init=!0);var n=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop;if(r.style.transform="translate(".concat(n,"px, ").concat(i,"px)"),!(Math.abs(e.clientY-t.prevY)<2)){var o=e.clientY-t.prevY<0?"up":"down";t.prevY=e.clientY;var l=this.$refs.mark,a=this.$refs.list,s=this.$refs.zone,u=function(e,t,r){var n=document.elementsFromPoint||document.msElementsFromPoint;if("function"!=typeof n)return null;var i=n.call(document,e,t);if(null==i)return null;for(var o=Array.isArray(i)?i:Array.prototype.slice.call(i),l=function(e){var t=o[e];if(r.some((function(e){return t.matches(e)})))return{v:t}},a=0;a<o.length;a++){var s=l(a);if("object"===X(s))return s.v}return null}(e.clientX,e.clientY,$);if(null==u)return s.appendChild(l),r.classList.add("xform-designer-not-allowed");if(r.classList.remove("xform-designer-not-allowed"),u==s)return!a.contains(l)&&a.appendChild(l);if(u!=a){var f="up"==o?u:u.nextElementSibling;f==l||null!=f&&f.previousElementSibling==l||a.insertBefore(l,f)}}},dragend:function(e){var t=this,r=this.$static.dragEvent,n="insert"!=r.mode||r.init?Array.from(this.$refs.list.children).findIndex((function(e){return e==t.$refs.mark})):this.value.length;if(n>=0){if("sort"==r.mode){var i=r.target._xform_field,o=this.value.indexOf(i);this.sort(o,n),this.chooseField(i)}if("insert"==r.mode){var l=this.insert(n);this.chooseField(l)}}r.target.classList.remove("xform-is-dragging"),this.$refs.list.classList.remove("xform-designer-silence"),this.$refs.zone.appendChild(this.$refs.mark),this.$refs.ghost.style.display="none",this.$static.dragEvent=null,document.removeEventListener("mousemove",this.dragging),document.removeEventListener("mouseup",this.dragend)},createGhostTemplate:function(e){var t=e.target;if("insert"==e.mode)return t.querySelector(".xform-template").outerHTML;var r=t._xform_field,n=r.findFieldType();return'\n        <div class="xform-designer-field-type">\n          <i class="'.concat(n.icon,'"></i>\n          <span>').concat(r.title,"</span>\n        </div>\n      ")},createDragEvent:function(e){var t=e.target.closest(".xform-draggable"),r=t._xform_mode,n=t.getBoundingClientRect();return{init:!1,mode:r,target:t,prevY:e.clientY,offsetLeft:"insert"==r?e.clientX-n.left:72,offsetTop:"insert"==r?e.clientY-n.top:17}},renderFieldPreview:function(e){var t=this,r=this.$createElement,n=e.findFieldType(),i=this.createComponent("preview",e,{props:{field:e}}),o={"xform-designer-preview":!0,"xform-draggable":!0,"xform-droppable":!0,"xform-is-selected":this.selectedField==e},l={_xform_field:e,_xform_mode:"sort"};return r("div",k()([{class:o},{domProps:l},{key:e.name}]),[n&&n.custom?i:r("xform-item",{class:"xform-template",attrs:{field:e,validation:!1,behavior:"designer","label-position":b.findConfigProp("designer.label.position"),"label-width":b.findConfigProp("designer.label.width")}},[i]),r("button",{attrs:{type:"button"},class:"xform-designer-delete",on:{click:function(r){return t.remove(r,e)}}},[r("i",{class:"iconfont icon-xform-remove"})]),r("div",{class:"xform-designer-cover",on:{mousedown:this.dragstart,click:function(){return t.chooseField(e)}}})])},renderPreview:function(){var e=this.$createElement;return e("div",{class:"xform-designer-zone",ref:"zone"},[e("div",{class:"xform-designer-list",ref:"list"},[this.value.map(this.renderFieldPreview)]),e("div",{class:"xform-designer-mark",ref:"mark",key:"xform-mark"}),this.isEmpty&&e("div",{class:"xform-designer-preview-tip"},[e("img",{attrs:{src:T.a}}),e("p",["请将左侧控件拖动到此处"])])])},renderSetting:function(){var e=this,t=this.$createElement;if(null==this.selectedField)return t("div",{class:"xform-setting-tip"},["点击字段设置属性"]);var r=this.selectedField,n={field:r},i={update:function(t){r[t.prop]=t.value,e.$emit("input",e.value)}};return this.createComponent("setting",r,{props:n,on:i})},createComponent:function(e,t,r){var n="type_".concat(t.type,"_").concat(e);if(this.$scopedSlots[n])return this.$scopedSlots[n]({field:t});var i=t.findFieldType();if(null==i)return console.warn("[xform]: ".concat(t.title,"(").concat(t.type,") not implement")),null;var o=i.extension["".concat(this.mode,"_").concat(e)]||i.component[e];return this.$createElement(o,r)},renderFieldType:function(e){var t=this.$createElement,r={_xform_field_type:e,_xform_mode:"insert"};return t("div",k()([{class:"xform-designer-field-type-wrap xform-draggable"},{domProps:r},{on:{mousedown:this.dragstart}}]),[t("div",{class:"xform-designer-field-type xform-template"},[t("i",{class:e.icon}),t("span",[e.title])])])},renderFieldTypePanel:function(){var e=this,t=this.$createElement,r=b.findMode(this.mode);return 0!=r.length&&"object"==j(r[0])||(r=[{types:r}]),r.map((function(r){var n=r.group?t("h3",[r.group]):null,i=b.findFieldTypes(r.types);return t("div",{class:"xform-designer-field-type-group"},[n,t("div",{class:"xform-designer-field-types"},[i.map(e.renderFieldType)])])}))}},render:function(){var e=arguments[0];return e("div",{class:"xform-designer"},[e("div",{class:"xform-designer-panel"},[this.renderFieldTypePanel()]),e("div",{class:"xform-designer-main"},[this.$slots.tool,e("div",{class:"xform-designer-scroll",ref:"scroll"},[this.renderPreview()])]),e("div",{class:"xform-designer-setting"},[this.renderSetting()]),e("div",{class:"xform-designer-ghost",ref:"ghost",key:"xform-ghost",on:{wheel:this.scroll}},[e("div",{class:"xform-designer-ghost-template"}),e("div",{class:"xform-designer-cover"})])])}},z={name:"xform-builder",mixins:[P],props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},mode:{type:String,default:null},tag:{type:String,default:"form"}},static:function(){return{validators:{}}},data:function(){return{pending:!1}},methods:{validate:function(){var e=this;if(this.pending)return Promise.reject("[xform error]: validate pending...");this.pending=!0;var t=this.$static.validators,r=Object.keys(t).map((function(e){return t[e]()}));return Promise.all(r).then((function(e){return{messages:e,status:e.every((function(e){return!0===e}))}})).catch((function(e){console.error("[xform error]: ",e)})).finally((function(){e.pending=!1}))},addField:function(e){var t=e.key,r=e.validate;this.$static.validators[t]=r},removeField:function(e){var t=e.key;delete this.$static.validators[t]},fillDefaultValue:function(e,t){return null==e?{}:(t.forEach((function(t){var r=t.name,n=e[r];"select"==t.type&&(!0!==t.attributes.multiple&&Array.isArray(n)&&(n=n[0]),1!=t.attributes.multiple||Array.isArray(n)||null==n||(n=[n])),null!=n||f(t.defaultValue)||(n=t.defaultValue),e[r]=n})),e)},renderFormItem:function(e){var t=this.$createElement,r=this.createComponent(e),n=e.findFieldType();return n&&n.custom?r:t("xform-item",{attrs:{field:e,"label-position":b.findConfigProp("builder.label.position"),"label-width":b.findConfigProp("builder.label.width")},key:e.name},[r])},createComponent:function(e){var t=this,r="name_".concat(e.name);if(this.$scopedSlots[r])return this.$scopedSlots[r]({field:e});var n="type_".concat(e.type);if(this.$scopedSlots[n])return this.$scopedSlots[n]({field:e});var i=e.findFieldType();if(null==i)return console.warn("[xform]: ".concat(e.title,"(").concat(e.type,") not implement"));var o={field:e,value:this.value[e.name]},l={input:function(r){t.$set(t.value,e.name,r),t.$emit("input",t.value)}},a=i.extension["".concat(this.mode,"_builder")]||i.component.builder;return null==a?null:this.$createElement(a,{props:o,on:l})},buildBuilderData:function(e){var t=this,r=null;return"form"==e&&(r={submit:function(e){e.preventDefault(),t.validate().then((function(e){e.status&&t.$emit("submit")}))}}),{class:"xform-builder",on:r}}},render:function(e){var t=(this.tag||"form").toLowerCase(),r=this.buildBuilderData(t),n=e("div",{class:"xform-builder-main"},[this.$slots.top,this.fields.map(this.renderFormItem),this.$slots.bottom]);return e(t,r,[n])},created:function(){var e=this.fillDefaultValue(this.value,this.fields);this.$emit("input",e),this.$on("xform.builder.field.add",this.addField),this.$on("xform.builder.field.remove",this.removeField)},destroyed:function(){this.$off("xform.builder.field.add",this.addField),this.$off("xform.builder.field.remove",this.removeField)}},C={name:"xform-viewer",props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},formatter:{type:Function,default:function(e,t){return b.findConfigProp("viewer.formatter","formatter").call(this,e,t)}},labelWidth:{type:String,default:function(){return b.findConfigProp("viewer.label.width","label.width")}},labelPosition:{type:String,default:function(){var e=["left","right","top"],t=b.findConfigProp("viewer.label.position","label.position");return e.indexOf(t)>=0?t:e[0]}},mode:{type:String,default:null}},methods:{renderItem:function(e){var t=this.$createElement,r=this.createComponent(e),n=e.findFieldType();return n&&n.custom?r:t("xform-item",{attrs:{field:e,validation:!1,behavior:"viewer","label-position":b.findConfigProp("viewer.label.position"),"label-width":b.findConfigProp("viewer.label.width")}},[r])},createComponent:function(e){var t=this.formatter(e,this.value),r={field:e,value:t,model:this.value},n="name_".concat(e.name);if(this.$scopedSlots[n])return this.$scopedSlots[n](r);var i="type_".concat(e.type);if(this.$scopedSlots[i])return this.$scopedSlots[i](r);var o=e.findFieldType();if(null==o)return console.warn("[xform]: ".concat(e.title,"(").concat(e.type,") not implement")),null;var l=o.extension["".concat(this.mode,"_viewer")]||o.component.viewer;return null!=l?this.$createElement(l,{props:r}):Array.isArray(t)?t.join(", "):t}},render:function(){var e=arguments[0];return e("div",{class:"xform-viewer"},[e("div",{class:"xform-viewer-main"},[this.fields.map(this.renderItem)])])}};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t,r){Array.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++){var i=q(e[n],t,r);if(null!=i)return Promise.reject(i)}return Promise.resolve()}function q(e,t,r){if(!0!==t.required&&f(r))return null;if("function"==typeof e.test)return e.test(r,t);if(null!=e.type){var n=function(e,t){if(null==t)return null;if(e.type!=B(t))return"格式有误，请检查";return null}(e,r);if(null!==n)return e.message||n}if(c(e.pattern)&&!e.pattern.test(r))return e.message||"格式有误，请检查";var i=function(e,t){if(e.length>0&&t.length!=e.length)return"长度需要为".concat(e.length,"个字符");if(null==t||0==t.toString().length||t.length<e.min||t.length>e.max)return function(e){if(e.min>0&&e.max>0&&e.max>e.min)return"长度在".concat(e.min,"~").concat(e.max,"个字符之间");if(e.min>0)return"至少".concat(e.min,"个字符");if(e.max>0)return"最多".concat(e.max,"个字符");return"不能为空"}(e);return null}(e,r);return null!==i?e.message||i:null}var M={validate:function(e,t,r,n){if(null==e||null==e.type)return Promise.resolve();var i=e.findFieldType();if(null==i)return Promise.resolve();if("function"==typeof n)return n(e,t,r);if(null==i.validator)return Promise.resolve();var o=i.validator;return"function"==typeof o?o(e,t,r):L(o,e,t)},validateRule:q,validateRules:L};function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _={name:"xform-item",mixins:[P],props:{field:{type:w,default:null},validation:{type:[Boolean,Function],default:!0},labelWidth:{type:String,default:function(){return b.findConfigProp("label.width")}},labelPosition:{type:String,default:function(){var e=["left","right","top"],t=b.findConfigProp("label.position");return e.indexOf(t)>=0?t:e[0]}},behavior:{type:String,default:"builder"}},static:function(){return{key:null,context:null,builder:null}},data:function(){return{message:null,status:null}},computed:{isNeedValidation:function(){var e=this.validation;return"boolean"==typeof e&&e||"function"==typeof e}},methods:{getField:function(){var e=this.field||this.$static.context.field;return e instanceof w?e:new w(e)},getValue:function(){return this.$static.context.value},renderErrorMessage:function(){var e=this.$createElement;return null==this.message?null:e("p",{class:"xform-item-message"},[this.message])},changeMessage:function(e){this.message=f(e)?null:e},validate:function(e){var t=this;if(this.isNeedValidation){var r=this.getField(),n=this.getValue();return M.validate(r,n,this,this.validation).then((function(){return t.message=null,t.status=null,!0})).catch((function(e){var r=t.parseError(e);return t.message=r,t.status="error",r}))}},addField:function(e){if(this.isNeedValidation){var t=e.key,r=e.context,n=this.$static.builder;this.$static.key=t,this.$static.context=r,null!=n&&n.$emit("xform.builder.field.add",{key:t,validate:this.validate})}},removeField:function(e){var t=e.key;if(this.isNeedValidation&&t==this.$static.key){var r=this.$static.builder;null!=r&&r.$emit("xform.builder.field.remove",{key:t}),this.$static.key=null,this.$static.context=null}},parseError:function(e){return null==e?null:e instanceof Error?e.message:e},renderTooltip:function(){var e=this.$createElement;if(null==this.field||null==this.field.tooltip||"viewer"==this.behavior)return null;var t=e("i",{class:"iconfont icon-xform-tishi xform-item-tooltip-icon"});return"designer"==this.behavior?t:e("el-tooltip",[t,e("pre",{slot:"content",class:"xform-item-tooltip-content"},[this.field.tooltip])])}},render:function(){var e,t=arguments[0],r=this.getField(),n=(W(e={"xform-item":!0},"xform-item-".concat(this.labelPosition),!0),W(e,"xform-is-required",r.required),W(e,"xform-is-".concat(this.status),null!=this.status),e),i={width:this.labelWidth};return t("div",{class:n,attrs:{"data-behavior":this.behavior}},[t("label",{class:"xform-item-label",style:i},[t("span",[r.title]),this.renderTooltip()]),t("div",{class:"xform-item-content"},[this.$slots.default,this.renderErrorMessage()])])},created:function(){this.$static.builder=i(this,"xform-builder"),this.isNeedValidation&&(this.$on("xform.builder.field.add",this.addField),this.$on("xform.builder.field.remove",this.removeField),this.$on("xform.builder.validate",this.validate))},destroyed:function(){this.isNeedValidation&&(this.$off("xform.builder.validate",this.validate),this.$off("xform.builder.field.add",this.addField),this.$off("xform.builder.field.remove",this.removeField))}};r.d(t,"components",(function(){return K})),r.d(t,"store",(function(){return b})),r.d(t,"adapter",(function(){return A})),r.d(t,"mixin",(function(){return F})),r.d(t,"model",(function(){return S}));var K={XFormDesigner:V,XFormBuilder:z,XFormViewer:C,XFormItem:_},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b.setConfig(t),Object.keys(K).forEach((function(t){var r=K[t];e.component(r.name,r)})),e.directive("xform",a)},R={name:"xForm",version:"0.4.1",install:D,store:b,adapter:A,mixin:F,model:S,register:b.register,components:K};"undefined"!=typeof window&&window.Vue&&D(window.Vue);t.default=R},function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var i=["attrs","props","domProps"],o=["class","style","directives"],l=["on","nativeOn"],a=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var r in t)if(e[r])if(-1!==i.indexOf(r))e[r]=n({},e[r],t[r]);else if(-1!==o.indexOf(r)){var s=e[r]instanceof Array?e[r]:[e[r]],u=t[r]instanceof Array?t[r]:[t[r]];e[r]=s.concat(u)}else if(-1!==l.indexOf(r))for(var f in t[r])if(e[r][f]){var c=e[r][f]instanceof Array?e[r][f]:[e[r][f]],d=t[r][f]instanceof Array?t[r][f]:[t[r][f]];e[r][f]=c.concat(d)}else e[r][f]=t[r][f];else if("hook"==r)for(var p in t[r])e[r][p]=e[r][p]?a(e[r][p],t[r][p]):t[r][p];else e[r]=t[r];else e[r]=t[r];return e}),{})}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd4AAADABAMAAABYGx+vAAAAElBMVEX29vbr6+v////y8vLZ2dnk5OQZBXI3AAAMPklEQVR42u1dTXebOhAlkO6jEvaK87IXlbNva7N/tPD//8qTZiQhOWCEgCDyGNuJT3JyyPWdb4lRcvp/SXLgPfAeeA+8B94D74E3SrxXIbv43uYL4KVJdW2qREjs3wXsai7ep2RHkhVz8b5Vya4kS+fhbf4mO5NZeF8qtje86Ry8j5ck+VoE3/9187Q/vOkMvNf9wU3e03C8DzvE2/wIx7tDuMn5z4H3K+N9/H3g/cp4vx38fmm8WXj8fft3j4DD86t/fh54vzLet4PfA++Bd894WRbHc0J+FV4vUHGlWLIIb+Bz8itmXSgWftmKeJMsi41floyQPAsvY3xz6eGXrVAfpfSU8izbXJMZz8Sz+wHwmy3Mr8AK9svU5bZ7MhSecU9+A/AKavGL5DfbFLAlWrPhlS2HN001vymPRABvInxJx2+2VP2bnlCX0zR9u2ytzYZaLvVMvDS/i+VXqeJYqvPjJRJ+pfkqO2aK3+FUaApeAZJSrdHpP7HgBcharZfll8IzBXmMCC/XzhptOBsmeAJedMwpVRIXXskxAl7UfqlUZXpS/JY831gsghVgpuyXzcRLESxgTZDfXAAWz60eUhzIAJgvyC9VpisQi9B92ZbaEkR84GVpeWoh9/j1rn8lvfACkQRn8qKk3EqIuLYgNyec89JJPpbLnwGyJJfKvxVYBeCtRMAV/wCBD5xrijN0WcPFvy9epPYEppuk+LfyYmRDxATRSh2zKAaXtRS/ErTF73ZQifUxKzvOOwse5te3/sUYhGA1vyQKEfwSpLgjeBF+U3DOAixNYsKLpqw4VgTzufabGtec6r/kHC9Wb/ZwIFuB+B7B/vwiYk2uKMIyccmCFFsJqWsHtE630IKHCParfzG30nDHdpluIpllwvf6pr75Fagzeqs49+I/aJ3OoKE1VCF54VVlAqXjWy63E8uE7xB88s43wDdHjPeBEC4RM34vAPvglf25VPvmNFa8rx2/dzz0BH7RN0eLl8rcA120lBn8qjIBAcd79xDEpDED9uRX1bwigEWMF/KsrihkofWvtF9tvixmfkmJVQNnQ/06n/yKWvxmPGq8ovpXHnrAfv3ySagDIRqxuPGaJCubkz+nhl+RNseNN89LlWIN2K8H3hRLX1DnmPW5gMrwvoP2rY9UMOIx81sTHYEzzKCD/ZWOvVnU+lzXnQEPJVh+/OrsKoua38IYsEqhA+tfrH0h+HKeRwDs1e5sdABaAHyfX896ULlnHgXeV7d79cPwKxVapdCDAXgcL1RHxnxL80u/buwKn085cAXFb3k3AHvVg2C/YL450b978Wwefl+Z3o7gFgCbHkd/SumBV6Yb0HRmcnFqGr0rEPziNEWtT7SV+qxb0eH8po75EjubkRceeRKysjrX5hNtETCuMzAezO9Juecsc/EWpBgjt1gBL7EvW1ifKOqzARzKr0k3pLcqb/iVF7zzJKvgvRWH31LWhKpCCl3/Nfx+xDsm9Sp4C/W4wduSeoRfj/yKavsVcHlHl486r2K/t+pcW/y2puYf4Nez/tXZlfXva0Aj2ry2Phcuv2Q+v7Z7tvS5tCgcZrdePh4RcqtYHd6uZBiy398e8agLvznpyTeGQ9Eq+YazKnmDtzAJ9EAA9qoHVXoFcMnm+aSjU4Vlv1WrMw4s+LNQf6WySXDPi5vjkvEIDVjzG1zvYy8Ww2/EeBuhz4XcxVION3Q86t+045eTOPBa6XPx0V9hDxruVgleT4H0StJbbI+3cGNAZ79owLADbbBh55FPqoV9wW9OItdncNAcS8Lw9bKTTp/zKPgdwltJhdYOS/IbpM8U4pHyz/HZr8uv3MOiFgkzFlwfIb+wEzUGfms3ibPjr0o4clgDDq1/KZZH7EafF9pNmM/R58KJvxXqc3O9VoMNDn9+Zfy18L4stTvu+5L2C2sqcuTkXx5Y/1KX33pheqcT/MF87XgE+vwOgGfsJ1Tlr6PPJnud+WWyB7ytB4tb+83zZwn4KTB/Tq3FBYtfMl7u+/U/ZuB1O0bafkteSrxVML9U5VeO/S63vXWOf65d+62xAOaNBHwJqn/pSS3+MohHtZPWzVboIH12u1e39ivjL1jwNdx+e/KrkeaGnxQBDb0bdS4+5FeyPAK8/wbbr/LP5W3/agt9LoccfGP8Vc6fByw43D+b/tVcdZ4aj15usisTwCuroXMGgllQ/UtN+9muj16cLtUMhZ6ab7ze2u8Pi1/TrwO8P8Pyyf76aKt8cnA9VPir2qwgAd5fwfW+rH95HPVvtyBau+vdLeozrg82Ax7aZz1UKXQk/aubFWADF+tBSbgE/DxgwF7roWi/XPavilO0ovqTWP+eByKSn/2Cfxb+Ko+C3wFR/UlsuIfjNbtzotHnYX5xx0oXkC7B/UnjoOPFq8pBbD+/9wek8foXbx1M1HpZ7PwWUB6J//S9PyBNyK9i55e2Fr/8sV+fvdaP1L0puID0I1a8r3q/SiEdNcbfq+R8ev1rtl/x6enfp8mbKn9LDL2dTF3/BbiqYMjJU6x43/X6/tmFWwXsbzcLZqW9QTM688X9OaWL9+dk+6UmoZQO6ylueoW7chWaBexvx5txGALOY2T3vW11dZQ7BF8C9j/rChgrJNK2lgeMQxrZnGzxjhxdHKE8hdxf1t2+IFNKUkQGt6oqaG7obs77gLfy3k/otKBJXcfFb9M0bevsvhrwVt77RbsMCzVaAo6K30abL5aDz73B178eVDcPwpYV2dQpinj4lcrctKY3Cdlk2e+tJtgvVkgZ1gwScSz8VlKfAS4Wv6jQz33ByL+fo25ggAicQ1uxjoTf5toKX9XovTkE7w9V5WBPB9qTX6smVBOCiijwNuCaKyv4qju8e4OR3/5nejL8gj5jSCKN9IvVxpYLvrky3hl7dZLgx/7+pGd9ZC96iyIJO8BwMXHJrR4NfOIYigS9WPvqG/h5f7/dM5/ULVm8hwFjkkizKvyEt3o1Lehy1dq5hh7QcO5tx3r2N/SkLzBgjEmEiOvhNTcUpcsq9pqxQVmWPPQuAH/zqwfNIj+GJMwqW+kWZewTmOFL+5nvG3DKBq6e/NWNOHv+6K0mzYMyd/BzmDuJZYO6rvXvfNJ79RalwNhrz6Ngyfuv4P0MlgGrnEMCbo1U7We/b+wf160Z7Mb1vJGBeUF+/FIz3cxotIDcRiKFXkouLXeV9A+B9pz/TLt5MiomlfxcxQC2llKoSXYWvUMDN73yq/RkJqkawPy5KjZnVnDb6pXv0p4HNXNeEO2aHAbwuSpUJdxawOv2M97XhtqadHAVvXqcTPj+Z6qblLbTev4FmwpqWTu4g+XkE16rvIevtf6B2daQ28kGmzvvKz1Rm2ABOJP84rw+gv8OPLWYmXqrvMfLdmAVWjNyM5k3zw3H1JsbCXEe4/mX2VPw8S6rYrWvtXlb2wMozTRomFw/e14f7nLv0MpQVjmbGG/2+JGPv1zqfc+2oDx35ouyefPc3CRLY0Z+YxgvqsZBdyOg559/ZCYUShNGwA+RjI/Faao8t+cDs2xWfqVDkuEX5wPLAdBks3nIpRyVW1qWawZALzEvN7UVWnXfJdicbDTOnCikqMi5fbjIML0T+AUHTdXNhFRihrnaMFp8k4cRzrvEaoTeCecfpSoimSnBFA4jkJUS3+Shrsx56Y5vz+6MM5/Crwv5lCZwLXm17Q5fyJ0DCZBdps/4momXqsa7vqGQgh6VznT8zxX77IWO3Xv0TuNXHhWjD9igEq916Q0eH07JUaPb757slk7SZ8Uw+OhvFwttNCfkmNPq5p4nooOwep1oTOcBmROQRg9dnISXWt2OiM4/Ylgk6ETy7lGT0/hF0z1FxG8Gp1sZuMvy6zD9uP35ZRKrVmQIRMzwuxzeFI/0EvqcbX3ApHMmH4TctfgVgAXerYXZ3CYr8asRR4C3o1adpTnKr2/922fCLAaxjsG1+J1fD9Ke38YgqvRjnvxOyyddieioY4ff1c7/jYhfY79j53fPwBvRSdZs7BxcLeed8zv1fPbzn53r80R5noH3dY+A03C8168GdwTv89P/C+/jZX94TzPwvlTsa9E7gvfU/P1a9I7hfbvui+CHP/Pwnsie0GbF9TITryib5D5FuO10B9+rdDZe4bWuTXXZw/fq7+idgBEf3rWKHHgPvAfeA++B98B74D3wHngPvAdef/kPur4HCyP/8nEAAAAASUVORK5CYII="},function(e,t,r){r(0),e.exports=r(4)},function(e,t,r){}]).default}));