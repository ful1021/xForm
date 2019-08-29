const XFormItem = {
  name: 'x-form-item',
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  render(){
    return (
      <div class={['x-form-item', this.field.notNull ? 'x-form-not-null' : null]}>
        <label class="x-form-item-label">
          <span>{this.field.title}</span>
          <sup class="x-form-star">*</sup>
        </label>
        <div class="x-form-item-content">
          {this.$slots.default}
          <div class="x-form-item-error-message">
            error message. 错误信息。
          </div>
        </div>
      </div>
    )
  }
}

export default XFormItem;