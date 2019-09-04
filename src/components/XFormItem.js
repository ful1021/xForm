import store from '../util/store';
import NonReactive from '../mixin/non-reactive';

import XField from '../model/XField';
import XDesignField from '../model/XDesignField';

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
    /** 
     * 是否启用验证，默认值为`true`
     * 如果传入`function`，将覆盖默认`validator`
     */
    validation: {
      type: [Boolean, Function],
      default: true
    },
    /** label 宽度 */
    labelWidth: {
      type: String,
      default(){
        return store.findConfigProp('viewer.label.width', 'label.width');
      }
    },
    /** label位置 */
    labelPosition: {
      type: String,
      default(){
        const params = ['left', 'right', 'top']
        const position = store.findConfigProp('label.position', 'builder.label.position');
        return params.indexOf(position) >= 0 ? position : params[0];
      }
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
      message: null,
      tip: null
    };
  },
  computed: {
    isNeedValidation(){
      const validation = this.validation;
      return (typeof validation == 'boolean' && validation) || typeof validation == 'function';
    }
  },
  methods: {
    getField(event){
      const field = event && event.detail && event.detail.field || this.$static.field || this.field;

      if(field instanceof XField) return field;
      if(field instanceof XDesignField) return field.toXField();
      
      return new XField(field);
    },
    getValidator(type){
      if(typeof this.validation == 'function') return this.validation;

      return store.findFieldValidator(type);
    },
    renderErrorMessage(){
      let message = null;

      if(null != this.tip) message = (
        <p class="x-form-item-tip">{this.tip}</p>
      )

      if(null != this.message) message = (
        <p class="x-form-item-error-message">{this.message}</p>
      );

      return message;
    },
    changeTip(tip = '正在验证...'){
      this.tip = tip;
    },
    validate(event){
      if(!this.isNeedValidation){
        return event.stopPropagation();
      }

      const field = this.getField(event);
      if(null == field) return Promise.resolve();

      const validator = this.getValidator(field);
      if(null == validator) return Promise.resolve();

      const value = typeof this.$static.value == 'function' ? this.$static.value() : this.$static.value;
      return validator(field, value, this.changeTip)
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
    const field = this.getField();

    const className = {
      'x-form-item': true,
      [`x-form-item-${this.labelPosition}`]: true,
      'x-form-is-required': field.required,
      'x-form-is-error': this.message != null
    }

    const labelStyle = {
      width: this.labelWidth
    };

    return (
      <div class={className}>
        <label class="x-form-item-label" style={labelStyle} for={field.name}>
          <span>{field.title}</span>
          {field.required ? <sup class="x-form-star">*</sup> : null}
        </label>
        <div class="x-form-item-content">
          {this.$slots.default}
          {this.renderErrorMessage()}
        </div>
      </div>
    )
  },
  mounted(){
    if(this.isNeedValidation) {
      this.$el.addEventListener('xform.builder.validate', this.validate);
      this.$el.addEventListener('xform.builder.field.add', this.addField);
      this.$el.addEventListener('xform.builder.field.remove', this.removeField);
    }
  },
  beforeDestroy(){
    if(this.isNeedValidation) {
      this.$el.removeEventListener('xform.builder.validate', this.validate);
      this.$el.removeEventListener('xform.builder.field.add', this.addField);
      this.$el.removeEventListener('xform.builder.field.remove', this.removeField);
    }
  }
}

export default XFormItem;