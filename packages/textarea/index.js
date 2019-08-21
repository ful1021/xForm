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
      render(){
        return <div class="x-form-preview-group">x-form-textarea-preview</div>
      }
    }
  }
}