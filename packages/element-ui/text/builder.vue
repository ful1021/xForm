<template>
  <el-input 
    :name="field.name" :placeholder="placeholder" 
    :value="value" @input="input" 
    clearable
  />
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-text',
  mixins: [mixin.builder],
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>