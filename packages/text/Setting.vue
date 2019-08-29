<template>
  <div class="x-form-setting">
    <h3 class="x-form-setting-head">单行文本</h3>
    <section class="x-form-setting-group">
      <header>标题：</header>
      <input type="text" class="x-form-setting-control" data-prop="title" :value="field.title" @input="updateProp">
    </section>
    <section class="x-form-setting-group">
      <header>提示：</header>
      <textarea class="x-form-setting-control" data-prop="placeholder" :value="field.placeholder" @input="updateProp" rows="3" placeholder="请输入提示信息..."/>
    </section>
    <section class="x-form-setting-group">
      <header>验证：</header>
      <label class="x-form-setting-checkbox">
        <input type="checkbox" data-prop="notNull" :checked="field.notNull" @input="updateProp">
        <span>必填</span>
      </label>
    </section>
  </div>
</template>

<script>
import {mixin} from '../../src/index';

export default {
  name: 'x-form-text-setting',
  mixins: [mixin.setting]
}
</script>