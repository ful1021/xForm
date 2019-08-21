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
          <div>
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
          <div class="x-form-preview-group">
            <p>{this.field.name}: x-form-text-preview</p>
          </div>
        )
      }
    }
  }
}