<template>
  <div class="designer">
    <x-form-designer :value="fields" @input="update" ref="designer"/>
    <modal title="designer value" :show.sync="show">
      <textarea :value="json" class="designer-value"/>
    </modal>
  </div>
</template>

<script>
import XForm from '../../src/index';

export default {
  name: 'designer',
  inject: ['fieldKey'],
  data(){
    return {
      show: false,
      fields: XForm.adapter.toDesignFields(this.getLocalFields())
    }
  },
  computed: {
    json(){
      const fields = XForm.adapter.toFields(this.fields)
      return JSON.stringify(fields, null ,'  ');
    }
  },
  methods: {
    update(value){
      this.fields = value;

      // 本地存储
      const key = this.fieldKey;
      const data = XForm.adapter.toFields(value)
      localStorage.setItem(key, JSON.stringify(data));
    },
    preview(){
      this.show = true;
    },
    getLocalFields(){
      const key = this.fieldKey;
      const str = localStorage.getItem(key);
      
      try {
        return JSON.parse(str) || []
      } catch (error) {
        return []
      }
    }
  }
}
</script>

<style>
.designer-value{
  height: 480px;
}
</style>