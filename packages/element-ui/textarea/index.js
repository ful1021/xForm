import {mixin} from '@src/index'

import setting from './setting.vue';
import builder from './builder.vue';
import viewer from './viewer.vue';

const MAX_LENGTH = 150;

export default {
  type: 'textarea',
  title: '多行文本',
  icon: 'iconfont icon-xform-textarea',
  maxLength: MAX_LENGTH,
  component: {
    setting,
    builder,
    viewer,
    preview: {
      name: 'xform-textarea-preview',
      mixins: [mixin.preview],
      render(){
        return <textarea rows="3" class="xform-el-mock" placeholder={this.prettyPlaceholder}/>
      }
    }
  },
  validator: {
    max: MAX_LENGTH
  }
}