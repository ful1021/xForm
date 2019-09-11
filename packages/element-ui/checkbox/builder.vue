<template>
  <el-checkbox-group class="xform-el-checkbox" :value="value" @input="input" >
    <el-checkbox :label="option" v-for="option in field.options" :key="option"/>
  </el-checkbox-group>
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-checkbox',
  mixins: [mixin.builder],
  props: {
    value: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.xform-el-checkbox .el-checkbox{
  line-height: 32px;
}
</style>