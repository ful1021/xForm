
<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-radio',
  mixins: [mixin.builder],
  props: {
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    layout(){
      const field = this.field;
      return field.attributes.layout || 'inline';
    }
  },
  methods: {
    renderOption(option){
      if(this.layout == 'button') return <el-radio-button label={option.value} key={option.value}>{option.label || option.value}</el-radio-button>;

      const className = [];
      if(this.layout == 'block'){
        className.push('xform-el-radio-block');
      }

      return <el-radio class={className} label={option.value} key={option.value}>{option.label || option.value}</el-radio>
    }
  },
  render(){
    const options = this.field.options || [];
    return (
      <el-radio-group class="xform-el-radio" value={this.value} onInput={this.input}>
        {options.map(this.renderOption)}
      </el-radio-group>
    )
  }
}
</script>