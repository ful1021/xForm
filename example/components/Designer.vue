<template>
  <div>
    <x-form-designer :value="fields" @input="update" ref="designer"/>
  </div>
</template>

<script>
export default {
  name: 'designer',
  data(){
    return {
      fields: []
    }
  },
  methods: {
    update(value){
      this.fields = value;
    },
    submit(){
      return this.fields;
    }
  }
}
</script>