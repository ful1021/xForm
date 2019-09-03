<template>
  <div :class="['x-form-item', field.required ? 'x-form-is-required' : null]">
    <label class="x-form-item-label">
      <span>{{ field.title }}</span>
      <sup class="x-form-star" v-if="field.required">*</sup>
    </label>
    <div class="x-form-item-content">
      <textarea rows="3" class="x-form-designer-preview-mock" :placeholder="field.placeholder"/>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-form-textarea-preview',
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>