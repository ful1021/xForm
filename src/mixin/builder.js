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
    inputForDom(event){
      this.input(event.target.value)
    },
    input(value){
      this.$emit('input', value)
    }
  }
}