<template>
  <div class="builder">
    <xform-builder 
      :fields="fields" :value="model" @input="update" ref="builder" 
      @submit="submit" 
    >
      <template #top>
        <header class="builder-header">笔记本电脑报修单</header>
        <xform-item :field="customField" :validation="validateCustomFiled">
          <el-input v-model="model.no" v-xform:validate="customField.name"/>
        </xform-item>
      </template>
      <template #bottom>
        <div class="builder-bottom">
          <!-- <el-button type="text" @click="hidden">隐藏</el-button> -->
          <el-button type="primary" native-type="submit">提 交</el-button>
        </div>
      </template>
    </xform-builder>
   
    <modal title="form json value" :show.sync="show">
      <textarea :value="json" class="example-value" rows="45" readonly/>
    </modal>
  </div>
</template>

<script>
import localData from '../mixin/localData';
import {model} from '../../src'

export default {
  name: 'builder',
  inject: ['fieldKey', 'modelKey'],
  mixins: [localData],
  data(){
    return {
      customField: new model.XField({
        name: 'no',
        type: 'text',
        title: '编号'
      }),
      show: false,
      fields: this.getLocalFields(),
      model: this.getLocalModel()
    }
  },
  computed: {
    json(){
      return JSON.stringify(this.model, null, '  ');
    }
  },
  methods: {
    hidden(){
      this.fields = this.fields.filter(f => f.type != 'textarea');
    },
    validateCustomFiled(field, value, context){
      return new Promise((resolve, reject) => {
        context.changeMessage('正在验证...')
        setTimeout(() => {
          context.changeMessage()
          value == null || value.length < 10 ? resolve() : reject('长度过长')
        }, 500);
      })
    },
    update(value){
      this.model = Object.assign({}, this.model, value);
    },
    submit(){
      this.show = true;
    },
    getLocalModel(){
      const key = this.modelKey;
      const str = localStorage.getItem(key);
      
      try {
        return JSON.parse(str) || {}
      } catch (error) {
        return {}
      }
    }
  },
  activated(){
    this.fields = this.getLocalFields()
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
  }
}
</script>

<style lang="scss">
.builder .xform-builder{
  padding: 10px 0;
}

.builder-header{
  text-align: center;
  line-height: 24px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0 20px 0;

}

.builder-bottom{
  padding-top: 10px;
  text-align: right;
}
</style>