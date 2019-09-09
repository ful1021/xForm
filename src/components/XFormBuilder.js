import Store from '../util/store';
import NonReactive from '../mixin/non-reactive';

import {isEmptyStr} from '../util/lang';

const XFormBuilder = {
  name: 'xform-builder',
  mixins: [NonReactive],
  props: {
    fields: {
      type: Array,
      default(){
        return [];
      }
    },
    value: {
      type: Object,
      default(){
        return {}
      }
    },
    mode: {
      type: String,
      default: null
    }
  },
  static(){
    return {
      validators: {}
    }
  },
  data(){
    return {
      pending: false
    }
  },
  methods: {
    validate(){
      if(this.pending) return Promise.reject('[xform error]: validate pending...');

      this.pending = true;
      const validators = this.$static.validators;
      const promises = Object.keys(validators).map(key => validators[key]());

      return Promise.all(promises)
        .then(function(messages){
          return {messages, status: messages.every(m => m === true)}
        })
        .catch(err => {
          console.error('[xform error]: ', err)
        })
        .finally(() => {
          this.pending = false
        })
    },
    addField(event){
      let {field, validate} = event.detail;
      this.$static.validators[field.name] = validate;
    },
    removeField(){
      let {field} = event.detail;
      delete this.$static.validators[field.name];
    },
    fillDefaultValue(value, fields){
      if(null == value) return {};
      
      fields.forEach(field => {
        const prop = field.name;
        if(!Object.prototype.hasOwnProperty.call(value, prop) && !isEmptyStr(field.defaultValue)){
          value[prop] = field.defaultValue;
        }
      })

      return value;
    },
    renderFormItem(field){
      return (
        <xform-item field={field}>
          {this.createComponent(field)}
        </xform-item>
      )
    },
    /**
     * 根据字段对象创建对应的组件
     * 
     * 组件按以下顺序匹配，如有任一情况匹配，则创建对应组件：
     * 1. 检索是否有名为`name_${field.name}`的作用域插槽
     * 2. 检索是否有名为`type_{field.type}`的作用域插槽
     * 3. 检索是否有名为`${mode}_builder`的扩展组件
     * 4. 检索默认的`builder`组件
     * 
     * @param {XField} field -- 字段
     * @returns 组件 
     */
    createComponent(field){
      const namedSlot = `name_${field.name}`;
      if(this.$scopedSlots[namedSlot]) {
        return this.$scopedSlots[namedSlot]({field});
      }

      const typedSlot = `type_${field.type}`;
      if(this.$scopedSlots[typedSlot]) {
        return this.$scopedSlots[typedSlot]({field});
      }

      const fieldDef = Store.findFieldDef(field.type);
      if(fieldDef == null){
        return console.warn(`[xform]: ${field.title}(${field.type}) not implement`)
      }
      
      const props = {field, value: this.value[field.name]};
      const on = {
        input: val => {
          this.$set(this.value, field.name, val);
          this.$emit('input', this.value);
        }
      }
      
      const component = fieldDef.extension[`${this.mode}_builder`] || fieldDef.component.builder;
      return null == component ? null : this.$createElement(component, {props, on});
    }
  },
  render(){
    return (
      <div class="xform-builder">
        <div class="xform-builder-main">
          {this.$slots.top}
          {this.fields.map(this.renderFormItem)}
          {this.$slots.bottom}
        </div>
      </div>
    )
  },
  created(){
    // 补全默认值
    const value = this.fillDefaultValue(this.value, this.fields);
    this.$emit('input', value)
  },
  mounted(){
    this.$el.addEventListener('xform.builder.field.add', this.addField);
    this.$el.addEventListener('xform.builder.field.remove', this.removeField);
  },
  beforeDestroy(){
    this.$el.removeEventListener('xform.builder.field.add', this.addField);
    this.$el.removeEventListener('xform.builder.field.remove', this.removeField);
  }
}

export default XFormBuilder;