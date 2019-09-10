<template>
  <el-select 
    class="xform-el-select" 
    :name="field.name" :placeholder="placeholder" 
    :value="value" @input="input"
    clearable 
  >
    <el-option v-for="o in field.options" :value="o"/>
  </el-select>
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-select',
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
.xform-el-select{
  width: 100%;
}
</style>