<template>
  <el-date-picker
    class="xform-el-date" :type="type"
    :name="field.name" :placeholder="prettyPlaceholder"
    :value="value" @input="input" 
    :value-format="formatter"
    default-time="08:00:00"
    clearable
  />
</template>

<script>
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
      return this.type == 'date' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'
    },
    type(){
      return this.field.attributes.type || 'date'
    }
  }
}
</script>


<style lang="scss">
.xform-el-date.el-date-editor{
  width: 100%;
}
</style>