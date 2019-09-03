<template>
  <div class="builder">
    <x-form-builder :fields="fields" :value="model" @input="update" ref="builder"/>
    <modal title="form value" :show.sync="show">
      <textarea :value="json" class="example-value"/>
    </modal>
  </div>
</template>

<script>
import XForm from '../../src/index';

export default {
  name: 'builder',
  inject: ['fieldKey', 'modelKey'],
  data(){
    return {
      show: false,
      fields: XForm.adapter.toFields(this.getLocalFields()),
      model: this.getLocalModel()
    }
  },
  computed: {
    json(){
      return JSON.stringify(this.model, null ,'  ');
    }
  },
  methods: {
    update(value){
      this.model = value;

      // 本地存储
      const key = this.modelKey;
      localStorage.setItem(key, JSON.stringify(this.model));
    },
    submit(){
      this.$refs.builder.validate().then(result => {
        if(result.status) this.show = true;
      }).catch(err => {
        console.log(err)
      })
    },
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
  }
}
</script>


<style>
.builder .x-form-builder{
  padding: 10px 0;
}
</style>