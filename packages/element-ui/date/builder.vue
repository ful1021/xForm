<template>
  <el-date-picker
    class="xform-el-date" type="date"
    :name="field.name" :placeholder="prettyPlaceholder"
    :value="value" @input="input" 
    :value-format="formatter"
    clearable
  />
</template>

<script>
// TODO: 支持datetime
import {mixin} from '@src/index';

export default {
  name: 'xform-el-date',
  mixins: [mixin.builder],
  props: {
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    formatter(){
      return 'yyyy-MM-dd'
    }
  }
}
</script>


<style lang="scss">
.xform-el-date.el-date-editor{
  width: 100%;
}
</style>