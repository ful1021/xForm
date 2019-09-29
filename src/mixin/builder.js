import XField from '../model/XField';
import {genPlaceholder, dispatchEvent} from '../util/component';

export default {
  props: {
    field: {
      type: XField,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  computed: {
    prettyPlaceholder(){
      if(this.placeholder) return this.placeholder;
      
      return genPlaceholder(this.field);
    }
  },
  methods: {
    input(event){
      this.$emit('input', event);
    }
  },
  mounted(){
    this.field && dispatchEvent(this.$el, 'xform.builder.field.add', {key: this.field.name, context: this}, true)
  },
  beforeDestroy(){
    this.field && dispatchEvent(this.$el, 'xform.builder.field.remove', {key: this.field.name})
  },
  watch: {
    value: {
      deep: true,
      handler() {
        dispatchEvent(this.$el, 'xform.builder.validate');
      }
    }
  }
}