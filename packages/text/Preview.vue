<template>
  <div :class="['x-form-preview-group', field.notNull ? 'x-form-not-null' : null]">
    <label class="x-form-preview-label">
      <span>{{ field.title }}</span>
      <sup class="x-form-star">*</sup>
    </label>
    <div class="x-form-preview-content">
      <input type="text" class="x-form-preview-mock" :placeholder="field.placeholder">
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-form-text-preview',
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