import {mixin} from '@src/index'

import setting from './setting.vue';
import builder from './builder.vue';

export default {
  type: 'date',
  title: '日期',
  icon: 'iconfont icon-xform-text',
  maxLength: 20,
  component: {
    setting,
    builder,
    preview: {
      name: 'xform-el-text-date',
      mixins: [mixin.preview],
      render(){
        return (
          <div class="xform-el-input-group">
            <input type="text" class="xform-el-mock" placeholder={this.prettyPlaceholder}/>
            <div class="xform-el-input-append">
              <i class="iconfont icon-xform-text"></i>
            </div>
          </div>
        )
      }
    }
  }
}