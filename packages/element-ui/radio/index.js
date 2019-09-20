
import setting from './setting.vue';
import builder from './builder.vue';
import preview from './preview.vue';

export default {
  type: 'radio',
  title: '单选框',
  icon: 'iconfont icon-xform-radio',
  maxLength: 20,
  component: {
    setting,
    builder,
    preview
  },
  validator: {}
}