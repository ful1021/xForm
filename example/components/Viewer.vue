<template>
  <div class="viewer">
    <x-form-viewer :fields="fields" :value="model"/>
  </div>
</template>

<script>
import XForm from '../../src/index';

export default {
  name: 'viewer',
  inject: ['fieldKey', 'modelKey'],
  data(){
    return {
      fields: XForm.adapter.toFields(this.getLocalFields()),
      model: this.getLocalModel()
    }
  },
  methods: {
    getLocalFields(){
      const key = this.fieldKey;
      const str = localStorage.getItem(key);
      
      try {
        return JSON.parse(str) || []
      } catch (error) {
        return []
      }
    },
    getLocalModel(){
      const key = this.modelKey;
      const str = localStorage.getItem(key);
      
      try {
        return JSON.parse(str) || {}
      } catch (error) {
        return []
      }
    }
  },
  activated(){
    this.fields = XForm.adapter.toFields(this.getLocalFields())
    this.model = this.getLocalModel()
  }
}
</script>

<style>
.viewer .x-form-viewer{
  padding: 10px 0;
}
</style>