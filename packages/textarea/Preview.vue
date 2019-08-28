<template>
  <div :class="['x-form-preview-group', field.notNull ? 'x-form-not-null' : null]">
    <label class="x-form-preview-label">
      <strong>{{ field.name }}</strong>
      <sup class="x-form-preview-star">*</sup>
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