<template>
  <pre class="xform-textarea-viewer">{{ value }}</pre>
</template>

<script>

export default {
  name: 'xform-text-viewer',
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
pre.xform-textarea-viewer{
  margin: 0;
  font-family: inherit;
}
</style>