import {mixin} from '@src/index';

import setting from './setting.vue';
import builder from './builder.vue';

export default {
  type: 'number',
  title: '数字',
  icon: 'iconfont icon-xform-number',
  maxLength: 20,
  component: {
    setting,
    builder,
    preview: {
      name: 'xform-el-number-preview',
      mixins: [mixin.preview],
      render(){
        return (
          <div class="xform-el-input-group">
            <input type="text" class="xform-el-mock" placeholder={this.prettyPlaceholder}/>
            <div class="xform-el-input-append">
              <i class="iconfont icon-xform-number"></i>
            </div>
          </div>
        )
      }
    }
  },
  validator: {
    type: 'number',
    message: '请输入数字'
  }
}