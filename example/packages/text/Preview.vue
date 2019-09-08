<template>
  <input type="text" class="x-form-designer-preview-mock" :placeholder="field.placeholder">
</template>

<script>
export default {
  name: 'x-form-text-preview',
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