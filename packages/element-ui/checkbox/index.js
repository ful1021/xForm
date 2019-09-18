import {mixin} from '@src/index';

import setting from './setting.vue';
import builder from './builder.vue';

export default {
  type: 'checkbox',
  title: '复选框',
  icon: 'iconfont icon-xform-checkbox',
  maxLength: 20,
  component: {
    setting,
    builder,
    preview: {
      name: 'xform-el-select-preview',
      mixins: [mixin.preview],
      render(){
        return (
          <select class="xform-el-mock">
            <option disabled selected>{this.prettyPlaceholder}</option>
          </select>
        )
      }
    }
  },
  validator: {
    message: '至少选择一项'
  }
}