import * as lang from '../util/lang';

import store from '../util/store';
import NonReactive from '../mixin/non-reactive';
import Validator from '../util/validator';

import XField from '../model/XField';

const XFormItem = {
  name: 'xform-item',
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
        console.log(position)
        return params.indexOf(position) >= 0 ? position : params[0];
      }
    },
    behavior: {
      type: String,
      default: 'builder'
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
      status: null
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
      return field instanceof XField ? field : new XField(field);
    },
    renderErrorMessage(){
      if(null == this.message) return null;
      return <p class='xform-item-message'>{this.message}</p>;
    },
    changeMessage(message){
      this.message = lang.isEmptyStr(message) ? null : message;
    },
    validate(event){
      if(!this.isNeedValidation){
        return event.stopPropagation();
      }

      const field = this.getField(event);
      const value = typeof this.$static.value == 'function' ? this.$static.value() : this.$static.value;
      
      return Validator.validate(field, value, this, this.validation)
        .then(() => {
          this.message = null;
          this.status = null;

          return true;
        })
        .catch(error => {
          const message = this.parseError(error);

          this.message = message;
          this.status = 'error';

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
    },
    renderTooltip(){
      if(!this.field.tooltip) return null;

      const icon = <i class="iconfont icon-xform-tishi xform-item-tooltip-icon"></i>
      if(this.behavior == 'designer') return icon;

      return (
        <el-tooltip >
          {icon}
          <pre slot="content" class="xform-item-tooltip-content">{this.field.tooltip}</pre>
        </el-tooltip>
      )
    }
  },
  render(){
    const field = this.getField();

    const className = {
      'xform-item': true,
      [`xform-item-${this.labelPosition}`]: true,
      'xform-is-required': field.required,
      [`xform-is-${this.status}`]: null != this.status
    }

    const labelStyle = {
      width: this.labelWidth
    };

    return (
      <div class={className}>
        <label class="xform-item-label" style={labelStyle}>
          <span>{field.title}</span>
          {this.renderTooltip()}
        </label>
        <div class="xform-item-content">
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