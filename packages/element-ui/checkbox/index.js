import {mixin} from '@src/index';

import setting from './setting.vue';
import builder from './builder.vue';

export default {
  type: 'checkbox',
  title: '多选框',
  icon: 'iconfont icon-xform-select',
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
  }
}