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
    }
  },
  methods: {
    renderItem(field){
      const value = this.formatter(field, this.value);
      return (
        <div class={['x-form-viewer-item', field.required ? 'x-form-not-null' : null]}>
          <label class="x-form-viewer-label">{field.title}</label>
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