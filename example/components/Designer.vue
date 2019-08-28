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
  inject: ['storageKey'],
  data(){
    const fields = XForm.adapter.toDesignFields(this.getLocalData())

    return {
      show: false,
      fields
    }
  },
  computed: {
    json(){
      const fields = XForm.adapter.toFields(this.fields)
      return JSON.stringify(fields, null ,' ');
    }
  },
  methods: {
    update(value){
      this.fields = value;

      // 本地存储
      const key = this.storageKey;
      const data = XForm.adapter.toFields(value)
      localStorage.setItem(key, JSON.stringify(data));
    },
    preview(){
      this.show = true;
    },
    getLocalData(){
      const key = this.storageKey;
      const str = localStorage.getItem(key);
      
      try {
        return JSON.parse(str)
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