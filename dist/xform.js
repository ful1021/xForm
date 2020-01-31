/*!
 * xform v0.4.1 (https://github.com/dongls/xForm)
 * Copyright 2019 dongls
 * Released under the MIT License
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("xForm",[],t):"object"==typeof exports?exports.xForm=t():e.xForm=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=2)}([function(e,t,n){"use strict";function r(e){if(null==e)return"";var t=e.required?"select"==e.type?"[必选] ":"[必填] ":"",n=e.placeholder||"";return"".concat(t).concat(n)||null}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["xform-designer","xform-builder","xform-viewer"];if(null==e)return null;for(var r=e.$root,i=e.$parent;null!=i&&i!=r;){if(i.$options.name==t)return i;if(n.indexOf(i.$options.name)>=0)return null;i=i.$parent}return null}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t);var l={RegExp:"[object RegExp]"};function s(e){return null==e||"string"==typeof e&&0==e.length}function a(e){return function(e){return null!=e&&("object"==o(e)||"function"==typeof e)}(e)&&Object.prototype.toString.call(e)==l.RegExp}function u(e){if(null==e||"object"!=o(e))return e;if(Array.isArray(e))return e.map(u);var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=e[n];t[n]=null==r||"object"!=o(e)?r:u(r)}return t}function f(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&null!=t[n]){var r=t[n];if("object"!=o(r)||Array.isArray(r))e[n]=r;else{var i=e[n];e[n]=f("object"!=o(i)?{}:i,r)}}return e}function c(e,t){if(null==t||""==t)return null;for(var n=e,r=t.split("."),i=0;i<r.length;i++){var o=r[i];if(null==n[o])return null;n=n[o]}return n}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t.type,this.title=t.title,this.icon=t.icon,this.custom=!0===t.custom,this.attributes=t.attributes,this.component=t.component||{},this.extension=t.extension||{},this.validator=t.validator}var t,n,r;return t=e,(n=[{key:"available",get:function(){return null!=this.type}}])&&d(t.prototype,n),r&&d(t,r),e}();var m={config:u({icons:{designerRemove:"",designerCopy:"",builderHelp:""},modes:{},label:{position:"left",width:null},designer:{label:{position:"left",width:null}},builder:{label:{position:"left",width:null}},viewer:{label:{position:"left",width:null}},validator:{immediate:!0},formatter:function(e,t){return t[e.name]}}),types:{}};function v(){var e=u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});m.config=function(){if(arguments.length<2)return arguments.length<=0?void 0:arguments[0];for(var e=arguments.length<=0?void 0:arguments[0],t=1;t<arguments.length;t++)e=f(e,t<0||arguments.length<=t?void 0:arguments[t]);return e}(m.config,e)}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length<=0||t.reduce((function(e,t){return(Array.isArray(t)?e=e.concat(t):e.push(t))&&e}),[]).map((function(e){return new p(e)})).filter((function(e){return e.available})).forEach((function(e){m.types[e.type]=e}))}var y={use:function(e){v(e.config),h(Object.keys(e.types).map((function(t){return e.types[t]})))},register:h,setConfig:v,findConfigProp:function(){for(var e=0;e<arguments.length;e++){var t=e<0||arguments.length<=e?void 0:arguments[e],n=c(m.config,t);if(null!=n)return n}return null},findFieldType:function(e){return m.types[e]},findFieldTypes:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce((function(e,t){return(Array.isArray(t)?e=e.concat(t):e.push(t))&&e}),[]).filter((function(e){return null!=e}));return 0==r.length&&(r=Object.keys(m.types)),r.map((function(e){return m.types[e]})).filter((function(e){return null!=e}))},findMode:function(e){var t=c(m.config,"modes.".concat(e));return Array.isArray(t)?t.filter((function(e){return null!=e})):[]}};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b={validate:{bind:function(e,t,n){var r=n.context,o=i(n.componentInstance,"xform-item"),l=("object"==g(t.value)?t.value:{key:t.value}).key||r.field&&r.field.name;null!=o&&null!=l&&(o.$emit("xform.builder.field.add",{key:l,context:r}),y.findConfigProp("validator.immediate")&&r.$watch("value",(function(){return o.$emit("xform.builder.validate")}),{deep:!0}),r.__xform_directive_validate_key__=l,r.__xform_directive_xform_item_instance__=o)},unbind:function(e,t,n){var r=n.context,i=r.__xform_directive_validate_key__,o=r.__xform_directive_xform_item_instance__;null!=i&&null!=o&&o.$emit("xform.builder.field.remove",{key:i})}}},x={bind:function(e,t,n){var r=t.arg,i=b[r];return null==i?null:i.bind(e,t,n)},unbind:function(e,t,n){var r=t.arg,i=b[r];return null==i?null:i.unbind(e,t,n)}},w={beforeCreate:function(){var e=this.$options.static;if("function"==typeof e){var t=e.call(this);this.$static=Object.assign(this.$static||{},t)}}};function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t.type,this.name=t.name||"field_".concat(Math.random().toString(16).slice(-8)),this.title=t.title,this.placeholder=t.placeholder,this.help=t.help,this.defaultValue=t.defaultValue,this.required=!0===t.required,this.options=function(e){if(["select","checkbox","radio"].indexOf(e.type)<0)return[];var t=Array.isArray(e.options)?e.options:[];return 0==t.length&&t.push({value:"选项1"}),t}(t),this.attributes="function"==typeof t.attributes?t.attributes():t.attributes||{},this.designer={dragging:!1},Object.defineProperty(this,"_exclude_props",{enumerable:!1,value:["designer","storage"]}),Object.defineProperty(this,"_storage",{enumerable:!1,value:{fieldType:null}})}var t,n,r;return t=e,(n=[{key:"toJSON",value:function(){for(var e=this._exclude_props||[],t=Object.keys(this).filter((function(t){return e.indexOf(t)<0})),n={},r=0;r<t.length;r++){var i=t[r];n[i]=this[i]}return n}},{key:"findFieldType",value:function(){if(null==this.type)return null;var e=this._storage;if(e.fieldType instanceof p)return e.fieldType;var t=y.findFieldType(this.type);return null!=t&&(e.fieldType=t),t}},{key:"copy",value:function(){var t=JSON.parse(JSON.stringify(this));return delete t.name,new e(t)}}])&&A(t.prototype,n),r&&A(t,r),e}(),S={nonReactive:w,setting:{props:{field:{type:P,default:null}},methods:{updateProp:function(e){var t=e.target,n=t.tagName.toLowerCase(),r=t.dataset.prop,i=t.value;"input"==n&&"checkbox"==t.type&&(i=t.checked),this.update(r,i)},updateAttrs:function(e,t){if(null!=this.field){var n=this.field.attributes;this.$set(n,e,t),this.update("attributes",n)}},update:function(e,t){this.$emit("update",{prop:e,value:t})}}},builder:{props:{field:{type:P,default:null,required:!0},placeholder:{type:String,default:null}},computed:{prettyPlaceholder:function(){return this.placeholder?this.placeholder:r(this.field)}},methods:{input:function(e){this.$emit("input",e)}}},preview:{props:{field:{type:P,default:null},placeholder:{type:String,default:null}},computed:{prettyPlaceholder:function(){return this.placeholder?this.placeholder:r(this.field)}}}},F={XField:P,XFieldType:p},k=n(1),E=n.n(k);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var $=[".xform-designer-mark",".xform-droppable",".xform-designer-list",".xform-designer-zone"],j={name:"xform-designer",mixins:[w],props:{value:{type:Array,default:function(){return[]}},mode:{type:String,default:null}},static:function(){return{dragEvent:null}},data:function(){return{selectedField:null}},computed:{isEmpty:function(){return!Array.isArray(this.value)||0==this.value.length},icons:function(){return y.findConfigProp("icons")}},methods:{showSelected:function(){var e=this.$refs.scroll,t=this.$refs.list.querySelector(".xform-is-selected");(function(e,t){return e.offsetTop<t.scrollTop||e.offsetTop>t.scrollTop+t.offsetHeight})(t,e)&&(e.scrollTop=t.offsetTop)},scroll:function(e){var t=function(e){var t=e.deltaX,n=e.deltaY,r=0==e.deltaMode?1:1==e.deltaMode?40:800;return{pixelX:t*r,pixelY:n*r}}(e).pixelY;this.$refs.scroll.scrollTop+=t},chooseField:function(e){this.selectedField=e,this.$nextTick(this.showSelected)},copy:function(e,t){var n=t.copy(),r=this.value.indexOf(t);this.value.splice(r+1,0,n),this.$emit("input",this.value),this.chooseField(n)},remove:function(e,t){if(confirm("该字段删除后不可恢复，是否继续？")){var n=this.value.findIndex((function(e){return e==t}));n>=0&&(this.selectedField=null,this.value.splice(n,1),this.$emit("input",this.value))}},insert:function(e){var t=this.$static.dragEvent,n=new P(t.target._xform_field_type);return this.value.splice(e,0,n),this.$emit("input",this.value),n},sort:function(e,t){if(!(e<0||t<0||e==t)){var n=this.value,r=n.splice(e,1)[0];n.splice(t>e?t-1:t,0,r),this.$emit("input",n)}},dragstart:function(e){if(0===e.button){var t=this.createDragEvent(e);this.$static.dragEvent=t,document.addEventListener("mousemove",this.dragging),document.addEventListener("mouseup",this.dragend)}},dragging:function(e){var t=this.$static.dragEvent,n=this.$refs.ghost;t.init||(this.$refs.list.classList.add("xform-designer-silence"),n.querySelector(".xform-designer-ghost-template").innerHTML=this.createGhostTemplate(t),n.style.display="block","sort"==t.mode&&t.target.classList.add("xform-is-dragging"),t.init=!0);var r=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop;if(n.style.transform="translate(".concat(r,"px, ").concat(i,"px)"),!(Math.abs(e.clientY-t.prevY)<2)){var o=e.clientY-t.prevY<0?"up":"down";t.prevY=e.clientY;var l=this.$refs.mark,s=this.$refs.list,a=this.$refs.zone,u=function(e,t,n){var r=document.elementsFromPoint||document.msElementsFromPoint;if("function"!=typeof r)return null;var i=r.call(document,e,t);if(null==i)return null;for(var o=Array.isArray(i)?i:Array.prototype.slice.call(i),l=function(e){var t=o[e];if(n.some((function(e){return t.matches(e)})))return{v:t}},s=0;s<o.length;s++){var a=l(s);if("object"===O(a))return a.v}return null}(e.clientX,e.clientY,$);if(null==u)return a.appendChild(l),n.classList.add("xform-designer-not-allowed");if(n.classList.remove("xform-designer-not-allowed"),u==a)return!s.contains(l)&&s.appendChild(l);if(u!=s){var f="up"==o?u:u.nextElementSibling;f==l||null!=f&&f.previousElementSibling==l||s.insertBefore(l,f)}}},dragend:function(e){var t=this,n=this.$static.dragEvent,r="insert"!=n.mode||n.init?Array.from(this.$refs.list.children).findIndex((function(e){return e==t.$refs.mark})):this.value.length;if(r>=0){if("sort"==n.mode){var i=n.target._xform_field,o=this.value.indexOf(i);this.sort(o,r),this.chooseField(i)}if("insert"==n.mode){var l=this.insert(r);this.chooseField(l)}}n.target.classList.remove("xform-is-dragging"),this.$refs.list.classList.remove("xform-designer-silence"),this.$refs.zone.appendChild(this.$refs.mark),this.$refs.ghost.style.display="none",this.$static.dragEvent=null,document.removeEventListener("mousemove",this.dragging),document.removeEventListener("mouseup",this.dragend)},createGhostTemplate:function(e){var t=e.target;if("insert"==e.mode)return t.matches(".xform-template")?t.outerHTML:t.querySelector(".xform-template").outerHTML;var n=t._xform_field,r=n.findFieldType(),i=this.$el.querySelector('.xform-designer-field-type[data-field-type="'.concat(r.type,'"]')),o=null;if(null!==i){var l=i.querySelector(".xform-icon");null!=l&&(o=l.outerHTML)}return'\n        <div class="xform-designer-field-type">\n          <strong>'.concat(n.title,"</strong>\n          ").concat(o,"\n        </div>\n      ")},createDragEvent:function(e){var t=e.target.closest(".xform-draggable"),n=t._xform_mode,r=t.getBoundingClientRect();return{init:!1,mode:n,target:t,prevY:e.clientY,offsetLeft:"insert"==n?e.clientX-r.left:72,offsetTop:"insert"==n?e.clientY-r.top:17}},renderFieldPreview:function(e){var t=this,n=this.$createElement,r=e.findFieldType(),i=this.createComponent("preview",e,{props:{field:e}}),o={"xform-designer-preview":!0,"xform-draggable":!0,"xform-droppable":!0,"xform-is-selected":this.selectedField==e},l={_xform_field:e,_xform_mode:"sort"};return n("div",E()([{class:o},{domProps:l},{key:e.name}]),[r&&r.custom?i:n("xform-item",{class:"xform-template",attrs:{field:e,validation:!1,behavior:"designer","label-position":y.findConfigProp("designer.label.position"),"label-width":y.findConfigProp("designer.label.width")}},[i]),n("div",{class:"xform-designer-operate"},[n("button",{attrs:{type:"button",title:"复制"},on:{click:function(n){return t.copy(n,e)}}},[n("i",{class:this.icons.designerCopy})]),n("button",{attrs:{type:"button",title:"删除"},on:{click:function(n){return t.remove(n,e)}}},[n("i",{class:this.icons.designerRemove})])]),n("div",{class:"xform-designer-cover",on:{mousedown:this.dragstart,click:function(){return t.chooseField(e)}}})])},renderPreview:function(){var e=this.$createElement;return e("div",{class:"xform-designer-zone",ref:"zone"},[e("div",{class:"xform-designer-list",ref:"list"},[this.value.map(this.renderFieldPreview)]),e("div",{class:"xform-designer-mark",ref:"mark",key:"xform-mark"}),this.isEmpty&&e("div",{class:"xform-designer-preview-tip"},[e("img",{attrs:{src:"data:image/png;base64,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"}}),e("p",["请将左侧控件拖动到此处"])])])},renderSetting:function(){var e=this,t=this.$createElement;if(null==this.selectedField)return t("div",{class:"xform-setting-tip"},["点击字段设置属性"]);var n=this.selectedField,r={field:n},i={update:function(t){n[t.prop]=t.value,e.$emit("input",e.value)}};return this.createComponent("setting",n,{props:r,on:i})},createComponent:function(e,t,n){var r="type_".concat(t.type,"_").concat(e);if(this.$scopedSlots[r])return this.$scopedSlots[r]({field:t});var i=t.findFieldType();if(null==i)return console.warn("[xform]: ".concat(t.title,"(").concat(t.type,") not implement")),null;var o=i.extension["".concat(this.mode,"_").concat(e)]||i.component[e];return this.$createElement(o,n)},renderFieldType:function(e){var t=this.$createElement,n={_xform_field_type:e,_xform_mode:"insert"},r="function"==typeof e.icon?e.icon(this.$createElement):t("i",{class:[e.icon,"xform-icon"]});return t("div",{class:"xform-designer-field-type-wrap"},[t("div",E()([{class:"xform-designer-field-type xform-draggable xform-template"},{domProps:n},{on:{mousedown:this.dragstart},attrs:{"data-field-type":e.type}}]),[t("strong",[e.title]),r])])},renderFieldTypePanel:function(){var e=this,t=this.$createElement,n=y.findMode(this.mode);return 0!=n.length&&"object"==T(n[0])||(n=[{types:n}]),n.map((function(n){var r=n.group?t("h3",[n.group]):null,i=y.findFieldTypes(n.types);return t("div",{class:"xform-designer-field-type-group"},[r,t("div",{class:"xform-designer-field-types"},[i.map(e.renderFieldType)])])}))}},render:function(){var e=arguments[0];return e("div",{class:"xform-designer"},[e("div",{class:"xform-designer-panel"},[this.renderFieldTypePanel()]),e("div",{class:"xform-designer-main"},[this.$slots.tool,e("div",{class:"xform-designer-scroll",ref:"scroll"},[this.renderPreview()])]),e("div",{class:"xform-designer-setting"},[this.renderSetting()]),e("div",{class:"xform-designer-ghost",ref:"ghost",key:"xform-ghost",on:{wheel:this.scroll}},[e("div",{class:"xform-designer-ghost-template"}),e("div",{class:"xform-designer-cover"})])])}},X={name:"xform-builder",mixins:[w],props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},mode:{type:String,default:null},tag:{type:String,default:"form"}},static:function(){return{validators:{}}},data:function(){return{pending:!1}},methods:{validate:function(){var e=this;if(this.pending)return Promise.reject("[xform error]: validate pending...");this.pending=!0;var t=this.$static.validators,n=Object.keys(t).map((function(e){return t[e]()}));return Promise.all(n).then((function(e){return{messages:e,status:e.every((function(e){return!0===e}))}})).catch((function(e){console.error("[xform error]: ",e)})).finally((function(){e.pending=!1}))},addField:function(e){var t=e.key,n=e.validate;this.$static.validators[t]=n},removeField:function(e){var t=e.key;delete this.$static.validators[t]},fillDefaultValue:function(e,t){return null==e?{}:(t.forEach((function(t){var n=t.name,r=e[n];"select"==t.type&&(!0!==t.attributes.multiple&&Array.isArray(r)&&(r=r[0]),1!=t.attributes.multiple||Array.isArray(r)||null==r||(r=[r])),null!=r||s(t.defaultValue)||(r=t.defaultValue),e[n]=r})),e)},renderFormItem:function(e){var t=this.$createElement,n=this.createComponent(e),r=e.findFieldType();return r&&r.custom?n:t("xform-item",{attrs:{field:e,"label-position":y.findConfigProp("builder.label.position"),"label-width":y.findConfigProp("builder.label.width")},key:e.name},[n])},createComponent:function(e){var t=this,n="name_".concat(e.name);if(this.$scopedSlots[n])return this.$scopedSlots[n]({field:e});var r="type_".concat(e.type);if(this.$scopedSlots[r])return this.$scopedSlots[r]({field:e});var i=e.findFieldType();if(null==i)return console.warn("[xform]: ".concat(e.title,"(").concat(e.type,") not implement"));var o={field:e,value:this.value[e.name]},l={input:function(n){t.$set(t.value,e.name,n),t.$emit("input",t.value)}},s=i.extension["".concat(this.mode,"_builder")]||i.component.builder;return null==s?null:this.$createElement(s,{props:o,on:l})},buildBuilderData:function(e){var t=this,n=null;return"form"==e&&(n={submit:function(e){e.preventDefault(),t.validate().then((function(e){e.status&&t.$emit("submit")}))}}),{class:"xform-builder",on:n}}},render:function(e){var t=(this.tag||"form").toLowerCase(),n=this.buildBuilderData(t),r=e("div",{class:"xform-builder-main"},[this.$slots.top,this.fields.map(this.renderFormItem),this.$slots.bottom]);return e(t,n,[r])},created:function(){var e=this.fillDefaultValue(this.value,this.fields);this.$emit("input",e),this.$on("xform.builder.field.add",this.addField),this.$on("xform.builder.field.remove",this.removeField)},destroyed:function(){this.$off("xform.builder.field.add",this.addField),this.$off("xform.builder.field.remove",this.removeField)}},C={name:"xform-viewer",props:{fields:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},formatter:{type:Function,default:function(e,t){return y.findConfigProp("viewer.formatter","formatter").call(this,e,t)}},labelWidth:{type:String,default:function(){return y.findConfigProp("viewer.label.width","label.width")}},labelPosition:{type:String,default:function(){var e=["left","right","top"],t=y.findConfigProp("viewer.label.position","label.position");return e.indexOf(t)>=0?t:e[0]}},mode:{type:String,default:null}},methods:{renderItem:function(e){var t=this.$createElement;if(!1===e.attributes.viewer)return null;var n=this.createComponent(e),r=e.findFieldType();return r&&r.custom?n:t("xform-item",{attrs:{field:e,validation:!1,behavior:"viewer","label-position":y.findConfigProp("viewer.label.position"),"label-width":y.findConfigProp("viewer.label.width")}},[n])},createComponent:function(e){var t=this.formatter(e,this.value),n={field:e,value:t,model:this.value},r="name_".concat(e.name);if(this.$scopedSlots[r])return this.$scopedSlots[r](n);var i="type_".concat(e.type);if(this.$scopedSlots[i])return this.$scopedSlots[i](n);var o=e.findFieldType();if(null==o)return console.warn("[xform]: ".concat(e.title,"(").concat(e.type,") not implement")),null;var l=o.extension["".concat(this.mode,"_viewer")]||o.component.viewer;return null!=l?this.$createElement(l,{props:n}):Array.isArray(t)?t.join(", "):t}},render:function(){var e=arguments[0];return e("div",{class:"xform-viewer"},[e("div",{class:"xform-viewer-main"},[this.fields.map(this.renderItem)])])}};function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n){Array.isArray(e)||(e=[e]);for(var r=0;r<e.length;r++){var i=L(e[r],t,n);if(null!=i)return Promise.reject(i)}return Promise.resolve()}function L(e,t,n){if(!0!==t.required&&s(n))return null;if("function"==typeof e.test)return e.test(n,t);if(null!=e.type){var r=function(e,t){if(null==t)return null;if(e.type!=V(t))return"格式有误，请检查";return null}(e,n);if(null!==r)return e.message||r}if(a(e.pattern)&&!e.pattern.test(n))return e.message||"格式有误，请检查";var i=function(e,t){if(e.length>0&&t.length!=e.length)return"长度需要为".concat(e.length,"个字符");if(null==t||0==t.toString().length||t.length<e.min||t.length>e.max)return function(e){if(e.min>0&&e.max>0&&e.max>e.min)return"长度在".concat(e.min,"~").concat(e.max,"个字符之间");if(e.min>0)return"至少".concat(e.min,"个字符");if(e.max>0)return"最多".concat(e.max,"个字符");return"不能为空"}(e);return null}(e,n);return null!==i?e.message||i:null}var B={validate:function(e,t,n,r){if(null==e||null==e.type)return Promise.resolve();var i=e.findFieldType();if(null==i)return Promise.resolve();if("function"==typeof r)return r(e,t,n);if(null==i.validator)return Promise.resolve();var o=i.validator;return"function"==typeof o?o(e,t,n):z(o,e,t)},validateRule:L,validateRules:z};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M={name:"xform-item",mixins:[w],props:{field:{type:P,default:null},validation:{type:[Boolean,Function],default:!0},labelWidth:{type:String,default:function(){return y.findConfigProp("label.width")}},labelPosition:{type:String,default:function(){var e=["left","right","top"],t=y.findConfigProp("label.position");return e.indexOf(t)>=0?t:e[0]}},behavior:{type:String,default:"builder"}},static:function(){return{key:null,context:null,builder:null}},data:function(){return{message:null,status:null}},computed:{isNeedValidation:function(){var e=this.validation;return"boolean"==typeof e&&e||"function"==typeof e},icons:function(){return y.findConfigProp("icons")}},methods:{getField:function(){var e=this.field||this.$static.context.field;return e instanceof P?e:new P(e)},getValue:function(){return this.$static.context.value},renderErrorMessage:function(){var e=this.$createElement;return null==this.message?null:e("p",{class:"xform-item-message"},[this.message])},changeMessage:function(e){this.message=s(e)?null:e},validate:function(e){var t=this;if(this.isNeedValidation){var n=this.getField(),r=this.getValue();return B.validate(n,r,this,this.validation).then((function(){return t.message=null,t.status=null,!0})).catch((function(e){var n=t.parseError(e);return t.message=n,t.status="error",n}))}},addField:function(e){if(this.isNeedValidation){var t=e.key,n=e.context,r=this.$static.builder;this.$static.key=t,this.$static.context=n,null!=r&&r.$emit("xform.builder.field.add",{key:t,validate:this.validate})}},removeField:function(e){var t=e.key;if(this.isNeedValidation&&t==this.$static.key){var n=this.$static.builder;null!=n&&n.$emit("xform.builder.field.remove",{key:t}),this.$static.key=null,this.$static.context=null}},parseError:function(e){return null==e?null:e instanceof Error?e.message:e},renderTooltip:function(){var e=this.$createElement;if(null==this.field||null==this.field.help||"viewer"==this.behavior)return null;var t=e("i",{class:[this.icons.builderHelp,"xform-item-help-icon"]});return"designer"==this.behavior?t:e("el-tooltip",[t,e("pre",{slot:"content",class:"xform-item-help-content"},[this.field.help])])}},render:function(){var e,t=arguments[0],n=this.getField(),r=(q(e={"xform-item":!0},"xform-item-".concat(this.labelPosition),!0),q(e,"xform-is-required",n.required),q(e,"xform-is-".concat(this.status),null!=this.status),e),i={width:this.labelWidth};return t("div",{class:r,attrs:{"data-behavior":this.behavior}},[t("label",{class:"xform-item-label",style:i},[t("span",[n.title]),this.renderTooltip()]),t("div",{class:"xform-item-content"},[this.$slots.default,this.renderErrorMessage()])])},created:function(){this.$static.builder=i(this,"xform-builder"),this.isNeedValidation&&(this.$on("xform.builder.field.add",this.addField),this.$on("xform.builder.field.remove",this.removeField),this.$on("xform.builder.validate",this.validate))},destroyed:function(){this.isNeedValidation&&(this.$off("xform.builder.validate",this.validate),this.$off("xform.builder.field.add",this.addField),this.$off("xform.builder.field.remove",this.removeField))}};n.d(t,"components",(function(){return W})),n.d(t,"store",(function(){return y})),n.d(t,"mixin",(function(){return S})),n.d(t,"model",(function(){return F}));var W={XFormDesigner:j,XFormBuilder:X,XFormViewer:C,XFormItem:M},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.setConfig(t),Object.keys(W).forEach((function(t){var n=W[t];e.component(n.name,n)})),e.directive("xform",x)},H={name:"xForm",version:"0.4.1",install:_,use:y.use,register:y.register,store:y,mixin:S,model:F,components:W};"undefined"!=typeof window&&window.Vue&&_(window.Vue);t.default=H},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var i=["attrs","props","domProps"],o=["class","style","directives"],l=["on","nativeOn"],s=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==i.indexOf(n))e[n]=r({},e[n],t[n]);else if(-1!==o.indexOf(n)){var a=e[n]instanceof Array?e[n]:[e[n]],u=t[n]instanceof Array?t[n]:[t[n]];e[n]=a.concat(u)}else if(-1!==l.indexOf(n))for(var f in t[n])if(e[n][f]){var c=e[n][f]instanceof Array?e[n][f]:[e[n][f]],d=t[n][f]instanceof Array?t[n][f]:[t[n][f]];e[n][f]=c.concat(d)}else e[n][f]=t[n][f];else if("hook"==n)for(var p in t[n])e[n][p]=e[n][p]?s(e[n][p],t[n][p]):t[n][p];else e[n]=t[n];else e[n]=t[n];return e}),{})}},function(e,t,n){n(0),e.exports=n(3)},function(e,t,n){}]).default}));