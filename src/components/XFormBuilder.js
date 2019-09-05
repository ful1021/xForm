import store from '../util/store';
import NonReactive from '../mixin/non-reactive';

import {isEmptyStr} from '../util/lang';

const XFormBuilder = {
  name: 'x-form-builder',
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
    create(field){
      const def = store.findFieldDef(field.type);
      const props = {field, value: this.value[field.name]};
      const on = {
        input: val => {
          this.$set(this.value, field.name, val);
          this.$emit('input', this.value);
        }
      }
      
      return this.$createElement(def.components.builder, {props, on})
    },
    renderFormItem(field){
      return (
        <x-form-item field={field}>
          {this.create(field)}
        </x-form-item>
      )
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
    }
  },
  created(){
    // 补全默认值
    const value = this.fillDefaultValue(this.value, this.fields);
    this.$emit('input', value)
  },
  render(){
    return (
      <div class="x-form-builder">
        <div class="x-form-builder-main">
          {this.$slots.top}
          {this.fields.map(this.renderFormItem)}
          {this.$slots.bottom}
        </div>
      </div>
    )
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