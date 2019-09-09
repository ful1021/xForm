<template>
  <el-input
    type="textarea"
    :name="field.name" :placeholder="placeholder"
    :value="value" @input="input" 
    :autosize="{minRows: 3, maxRows: 10}"
  />
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-textarea',
  mixins: [mixin.builder],
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.xform-textarea{
  width: 100%;
  min-height: 30px;
  line-height: 20px;
  padding: 4px 5px;
  border: 1px solid #aaa;
}

.xform-textarea{
  resize: vertical;
  max-height: 360px;
}
</style>