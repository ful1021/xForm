import setting from './setting.vue';
import builder from './builder.vue';
import preview from './preview.vue';

/**
 * TODO:
 * 1. 支持全选
 */
export default {
  type: 'checkbox',
  title: '复选框',
  icon: 'iconfont icon-xform-checkbox',
  maxLength: 20,
  component: {
    setting,
    builder,
    preview
  },
  validator: {
    message: '至少选择一项'
  }
}