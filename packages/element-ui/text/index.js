import {mixin} from '@src/index'

import setting from './setting.vue';
import builder from './builder.vue';

export default {
  type: 'text',
  title: '单行文本',
  icon: 'iconfont icon-xform-text',
  maxLength: 20,
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
  validator(field, value){
    return new Promise((resolve, reject) => {
      if(value != null && value.toString().length > this.maxLength) return reject(`${field.title}长度不能超过${this.maxLength}个字符`);
      if(field.required && (value == null || value.toString().length == 0)) return reject(`请输入${field.title}`);
      
      return resolve();
    })
  }
}