export default {
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    },
    placeholder(){
      return this.field.placeholder || '';
    }
  },
  methods: {
    inputForDom(event){
      this.input(event.target.value)
    },
    input(value){
      this.$emit('input', value)
    },
    getValue(){
      return this.value;
    },
    dispatch(name, detail, async = false){
      let event = new CustomEvent(name, {detail, bubbles: true, cancelable: true})
      async ? this.$nextTick(() => this.$el.dispatchEvent(event)) : this.$el.dispatchEvent(event);
    }
  },
  mounted(){
    this.dispatch('xform.builder.field.add', {value: this.getValue, field: this.field}, true)
  },
  beforeDestroy(){
    this.dispatch('xform.builder.field.remove', {field: this.field})
  },
  watch: {
    value:{
      deep: true,
      handler() {
        this.dispatch('xform.builder.validate', {field: this.field});
      }
    }
  }
}