export default {
  type: 'text',
  name: '单行文本',
  components: {
    setting: {
      name: 'x-form-text-setting',
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
          <div class="x-form-preview">
            <h3>x-form-text-setting</h3>
            <label>名称：</label>
            <input type="text" value={this.field.name} onInput={e => this.$emit('input', e.target.value)}/>
          </div>
        )
      }
    },
    preview: {
      name: 'x-form-text-preview',
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
              <input type="text" class="x-form-preview-mock"/>
            </div>
          </div>
        )
      }
    }
  }
}