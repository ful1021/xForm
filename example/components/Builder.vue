<template>
  <div class="builder">
    <xform-builder :fields="fields" :value="model" @input="update" ref="builder">
      <!-- <template #top>
        <xform-item :field="customField" :validation="validateCustomFiled">
          <c-text :field="customField" v-model="model.no"/>
        </xform-item>
      </template> -->
    </xform-builder>
    <modal title="form json value" :show.sync="show">
      <textarea :value="json" class="example-value" rows="45" readonly/>
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
      customField: {
        name: 'no',
        type: 'text',
        title: '编号'
      },
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
    validateCustomFiled(field, value, changeMessage){
      return new Promise((resolve, reject) => {
        changeMessage('正在验证...')
        setTimeout(() => {
          changeMessage()
          value == null || value.length < 10 ? resolve() : reject('长度过长')
        }, 500);
      })
    },
    update(value){
      this.model = Object.assign({}, this.model, value);
    },
    submit(){
      this.$refs.builder.validate().then(result => {
        console.log(result)
        if(result.status) this.show = true;
      }).catch(err => {
        console.error(err)
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
  },
  watch: {
    model: {
      deep: true,
      handler(){
        // 本地存储
        const key = this.modelKey;
        localStorage.setItem(key, JSON.stringify(this.model));
      }
    }
  },
  components: {
    'c-text': {
      name: 'c-text',
      mixins: [XForm.mixin.builder],
      props: {
        value: {
          type: String,
          default: null
        }
      },
      render(){
        const field = this.field;

        return (
          <input 
            type="text" id={field.name} name={field.name} 
            class="xform-text xform-item-control" placeholder={this.placeholder} 
            value={this.value} onInput={this.inputForDom}/>
        )
      }
    }
  }
}
</script>

<style>
.builder .xform-builder{
  padding: 10px 0;
}
</style>