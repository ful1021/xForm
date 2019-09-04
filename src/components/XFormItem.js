import store from '../util/store';
import NonReactive from '../mixin/non-reactive'

const XFormItem = {
  name: 'x-form-item',
  mixins: [NonReactive],
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    },
    validation: {
      type: [Boolean, Function],
      default: true
    }
  },
  static(){
    return {
      field: null,
      value: null
    }
  },
  data(){
    return {
      message: null
    };
  },
  computed: {
    isNeedValidation(){
      const validation = this.validation;
      return (typeof validation == 'boolean' && validation) || typeof validation == 'function';
    }
  },
  methods: {
    renderErrorMessage(){
      if(this.message == null) return null;

      return (
        <p class="x-form-item-error-message">{this.message}</p>
      )
    },
    validate(event){
      if(!this.isNeedValidation){
        return event.stopPropagation();
      }

      const field = event && event.detail && event.detail.field || this.$static.field || this.field;
      if(null == field) return Promise.resolve();

      const validator = store.findFieldValidator(field);
      if(null == validator) return Promise.resolve();

      const value = typeof this.$static.value == 'function' ? this.$static.value() : this.$static.value;
      return validator(field, value)
        .then(() => {
          this.message = null;
          return true;
        })
        .catch(error => {
          const message = this.parseError(error);
          this.message = message;
          return message;
        })
    },
    addField(event){
      if(!this.isNeedValidation){
        return event.stopPropagation();
      }

      event.detail.validate = this.validate;

      this.$static.value = event.detail.value;
      this.$static.field = event.detail.field;
    },
    removeField(event){
      if(!this.isNeedValidation){
        return event.stopPropagation();
      }

      this.$static.value = null;
      this.$static.field = null;
    },
    parseError(error){
      if(null == error) return null;
      if(error instanceof Error) return error.message;

      return error;
    }
  },
  render(){
    return (
      <div class={['x-form-item', this.field.required ? 'x-form-is-required' : null]}>
        <label class="x-form-item-label">
          <span>{this.field.title}</span>
          {this.field.required ? <sup class="x-form-star">*</sup> : null}
        </label>
        <div class="x-form-item-content">
          {this.$slots.default}
          {this.renderErrorMessage()}
        </div>
      </div>
    )
  },
  mounted(){
    this.$el.addEventListener('xform.builder.validate', this.validate);
    this.$el.addEventListener('xform.builder.field.add', this.addField);
    this.$el.addEventListener('xform.builder.field.remove', this.removeField);

  },
  beforeDestroy(){
    this.$el.removeEventListener('xform.builder.validate', this.validate);
    this.$el.removeEventListener('xform.builder.field.add', this.addField);
    this.$el.removeEventListener('xform.builder.field.remove', this.removeField);
  }
}

export default XFormItem;