<template>
  <el-radio-group class="xform-el-radio" :value="value" @input="input" >
    <el-radio :label="option" v-for="option in field.options" :key="option"/>
  </el-radio-group>
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-radio',
  mixins: [mixin.builder],
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.xform-el-radio .el-radio{
  line-height: 32px;
}
</style>