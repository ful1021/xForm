<template>
  <pre class="x-form-textarea-viewer">{{ value }}</pre>
</template>

<script>

export default {
  name: 'x-form-text-viewer',
  props: {
    field: {
      type: Object,
      default(){
        return {};
      }
    },
    value: {
      type: String,
      default: null
    },
    model: {
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style lang="scss">
pre.x-form-textarea-viewer{
  margin: 0;
}
</style>