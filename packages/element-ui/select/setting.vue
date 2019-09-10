<template>
  <div class="xform-setting">
    <h3 class="xform-setting-head">{{ field.title }}</h3>
    <section class="xform-setting-group">
      <header>标题：</header>
      <input type="text" class="xform-setting-control" data-prop="title" :value="field.title" @input="updateProp">
    </section>
    <section class="xform-setting-group">
      <header>提示：</header>
      <textarea class="xform-setting-control" data-prop="placeholder" :value="field.placeholder" @input="updateProp" rows="3" placeholder="请输入提示信息..."/>
    </section>
    <section class="xform-setting-group">
      <header>验证：</header>
      <el-checkbox :value="field.required" @input="val => update('required', val)">必填</el-checkbox>
    </section>
    <section class="xform-setting-group">
      <header>选项：</header>
      <div>
        <div v-for="(o, i) in field.options" :key="i">
          <input type="text" :value="field.options[i]" @input="updateOption($event, i)" >
          <button type="button" @click="delOption(i)">删除</button>
        </div>
        
      </div>
      <button type="button" @click="addOption">添加选项</button>
      <button type="button" @click="batchEdit">批量编辑</button>
    </section>
  </div>
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-select-setting',
  mixins: [mixin.setting],
  methods: {
    addOption(){
      const options = this.field.options;
      options.push(`选项${options.length + 1}`);

      this.update('options', options)
    },
    updateOption(event, index){
      const value = event.target.value;
      const options = this.field.options;

      this.$set(options, index, value);
      this.update('options', options)
    },
    delOption(index){
      const options = this.field.options;
      options.splice(index, 1);

      this.update('options', options)
    },
    batchEdit(){}
  }
}
</script>