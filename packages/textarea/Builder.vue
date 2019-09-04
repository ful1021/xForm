<template>
  <textarea :id="field.name" :name="field.name" class="x-form-textarea x-form-item-control" :placeholder="placeholder" :value="value" @input="inputForDom"/>
</template>

<script>
import {mixin} from '../../src/core';

export default {
  name: 'x-form-textarea',
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
.x-form-textarea{
  width: 100%;
  min-height: 30px;
  line-height: 20px;
  padding: 4px 5px;
  border: 1px solid #aaa;
}

.x-form-textarea{
  resize: vertical;
}
</style>