<template>
  <textarea :name="field.name" class="x-form-textarea" :placeholder="placeholder" :value="value" @input="inputForDom"/>
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