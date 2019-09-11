<template>
  <el-input-number 
    class="xform-el-number"
    :value="value" @input="input" 
    controls-position="right" :placeholder="prettyPlaceholder"
  />
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-number',
  mixins: [mixin.builder],
  props: {
    value: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss">
.xform-el-number{
  width: 100%;

  & .el-input__inner{
    text-align: left;
  }
}
</style>