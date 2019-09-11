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
  </div>
</template>

<script>
import {mixin} from '@src/index';

export default {
  name: 'xform-el-number-setting',
  mixins: [mixin.setting]
}
</script>