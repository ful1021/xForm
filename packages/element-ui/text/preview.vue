<template>
  <input type="text" class="xform-el-text-preview xform-el-preview-mock" :placeholder="field.placeholder">
</template>

<script>
export default {
  name: 'xform-el-text-preview',
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

<style lang="scss">
.xform-el-text-preview.xform-el-preview-mock{
  width: 100%;
  padding: 3px 10px; 
}
</style>