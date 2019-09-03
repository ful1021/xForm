import store from '../util/store';
import NonReactive from '../mixin/non-reactive';

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
    return {}
  },
  methods: {
    validate(){
      const validators = this.$static.validators;
      const promises = Object.keys(validators).map(key => validators[key]());

      return Promise.all(promises)
        .then(function(messages){
          return {messages, status: messages.every(m => m === true)}
        })
        .catch(err => console.error('xform validate error', err))
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
    }
  },
  render(){
    return (
      <div class="x-form-builder">
        <div class="x-form-builder-main">
          {this.fields.map(this.renderFormItem)}
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