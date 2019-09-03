<template>
  <div :class="['x-form-preview-group', field.required ? 'x-form-is-required' : null]">
    <label class="x-form-preview-label">
      <span>{{ field.title }}</span>
      <sup class="x-form-star">*</sup>
    </label>
    <div class="x-form-preview-content">
      <textarea rows="3" class="x-form-preview-mock" :placeholder="field.placeholder"/>   
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