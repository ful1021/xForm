<template>
  <textarea rows="3" class="x-form-designer-preview-mock" :placeholder="field.placeholder"/>   
</template>

<script>
export default {
  name: 'x-form-textarea-preview',
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>