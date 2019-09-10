export default {
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    updateProp(event){
      const target = event.target;
      const tag = target.tagName.toLowerCase();

      const prop = target.dataset.prop;
      let value = target.value;

      if(tag == 'input' && target.type == 'checkbox'){
        value = target.checked;
      }
      
      this.update(prop, value);
    },
    update(prop, value){
      this.$emit('update', {prop, value})
    }
  }
}