export default {
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    placeholder(){
      return this.field.placeholder;
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