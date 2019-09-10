import {genPlaceholder} from '../util/form';

export default {
  props: {
    field: {
      type: Object,
      default(){
        return {}
      }
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
  }
}