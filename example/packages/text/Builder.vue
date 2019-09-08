<template>
  <input type="text" :id="field.name" :name="field.name" class="x-form-text x-form-item-control" :placeholder="placeholder" :value="value" @input="inputForDom">
</template>

<script>
import {mixin} from '../../../src';

export default {
  name: 'x-form-text',
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
.x-form-text{
  width: 100%;
  line-height: 20px;
  padding: 4px 5px;
  border: 1px solid #aaa;
}
</style>