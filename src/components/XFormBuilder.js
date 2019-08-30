import store from '../util/store';

const XFormBuilder = {
  name: 'x-form-builder',
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
  data(){
    return {}
  },
  methods: {
    submit(){
      return 
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
  }
}

export default XFormBuilder;