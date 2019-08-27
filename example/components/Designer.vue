<template>
  <div class="designer">
    <x-form-designer :value="fields" @input="update" ref="designer"/>
    <modal title="designer value" :show.sync="show">
      <textarea :value="json" class="designer-value"/>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'designer',
  data(){
    return {
      show: false,
      fields: []
    }
  },
  computed: {
    json(){
      return JSON.stringify(this.fields, null ,' ');
    }
  },
  methods: {
    update(value){
      this.fields = value;
    },
    preview(){
      this.show = true;
    }
  }
}
</script>

<style>
.designer-value{
  height: 480px;
}
</style>