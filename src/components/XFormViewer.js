import store from '../util/store';

function formatter(field, value){
  return value[field.name];
}

const XFormView = {
  name: 'x-form-viewer',
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
    formatter: {
      type: Function,
      default: formatter
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
        const position = store.findConfigProp('viewer.label.position', 'label.position');
        return params.indexOf(position) >= 0 ? position : params[0];
      }
    }
  },
  methods: {
    renderItem(field){
      const value = this.formatter(field, this.value);
      const className = {
        'x-form-viewer-item': true,
        [`x-form-viewer-item-${this.labelPosition}`]: true,
        'x-form-is-required': field.required
      }

      const labelStyle = {
        width: this.labelWidth
      };

      return (
        <div class={className}>
          <label class="x-form-viewer-label" style={labelStyle}>{field.title}</label>
          <div class="x-form-viewer-content">{value}</div>
        </div>
      )
    }
  },
  render(){
    return (
      <div class="x-form-viewer">
        <div class="x-form-viewer-main">
          {this.fields.map(this.renderItem)}
        </div>
      </div>
    )
  }
}

export default XFormView;