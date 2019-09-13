<template>
  <el-select 
    class="xform-el-select" 
    :name="field.name" :placeholder="prettyPlaceholder" 
    :value="value" @input="input"
    :multiple="field.attributes.multiple"
    clearable 
  >
    <el-option v-for="option in field.options" :key="option.value" :value="option.value" :label="option.label || option.value"/>
  </el-select>
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-select',
  mixins: [mixin.builder],
  props: {
    value: {
      type: [String, Array],
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