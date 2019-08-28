export default {
  type: 'textarea',
  name: '多行文本',
  components: {
    setting: {
      name: 'x-form-textarea-setting',
      render(){
        return <div>x-form-textarea-setting</div>
      }
    },
    preview: {
      name: 'x-form-textarea-preview',
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
          <div class={['x-form-preview-group', this.field.notNull ? 'x-form-not-null' : null]}>
            <label class="x-form-preview-label">
              <strong>{this.field.name}</strong>
              <sup class="x-form-preview-star">*</sup>
            </label>
            <div class="x-form-preview-content">
              <textarea rows="3" class="x-form-preview-mock"/>
            </div>
          </div>
        )
      }
    }
  }
}