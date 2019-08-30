<template>
  <input type="text" :name="field.name" class="x-form-text" :placeholder="placeholder" :value="value" @input="inputForDom">
</template>

<script>
import {mixin} from '../../src/core';

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