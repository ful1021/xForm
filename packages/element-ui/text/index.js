import {mixin} from '@src/index'

import setting from './setting.vue';
import builder from './builder.vue';

const MAX_LENGTH = 20;

export default {
  type: 'text',
  title: '单行文本',
  icon: 'iconfont icon-xform-text',
  component: {
    setting,
    builder,
    preview: {
      name: 'xform-el-text-preview',
      mixins: [mixin.preview],
      render(){
        return <input type="text" class="xform-el-mock" placeholder={this.prettyPlaceholder}/>
      }
    }
  },
  extension: {
    'ext_viewer': {
      name: 'ext-viewer',
      render(){
        return <div>ext text viewer</div>
      }
    }
  },
  validator:{
    max: MAX_LENGTH
  }
}