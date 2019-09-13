<template>
  <div class="xform-setting">
    <h3 class="xform-setting-head">单选框</h3>
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
      <header>布局：</header>
      <el-radio-group :value="field.attributes.layout || 'inline'" @input="val => updateAttrs('layout', val)">
        <el-radio-button label="inline">行内</el-radio-button>
        <el-radio-button label="block">换行</el-radio-button>
        <el-radio-button label="button">按钮</el-radio-button>
      </el-radio-group>
    </section>
    <section class="xform-setting-group">
      <header>选项：</header>
      <div>
        <div v-for="(option, i) in field.options" :key="i">
          <input type="text" :value="option.value" @input="updateOption(option)" >
          <button type="button" @click="delOption(option)">删除</button>
        </div>
      </div>
      <button type="button" @click="addOption">添加选项</button>
      <!-- <button type="button" @click="batchEdit">批量编辑</button> -->
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
      options.push({value: `选项${options.length + 1}`});

      this.update('options', options)
    },
    updateOption(option){
      const value = event.target.value;
      const options = this.field.options;

      this.$set(option, 'value', value);
      this.update('options', options);
    },
    delOption(option){
      const options = this.field.options;
      const index = options.findIndex(o => o == option);
      options.splice(index, 1);

      this.update('options', options)
    }
  }
}
</script>