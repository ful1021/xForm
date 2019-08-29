<template>
  <input type="text" :name="field.name" :value="value" @input="inputForDom">
</template>

<script>
import {mixin} from '../../src/index';

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