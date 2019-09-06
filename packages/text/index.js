import {model} from '../../src/core';

import setting from './Setting.vue';
import preview from './Preview.vue';
import builder from './Builder.vue';

export default new model.XFieldDef({
  type: 'text',
  title: '单行文本',
  maxLength: 20,
  component: {
    setting,
    preview,
    builder
  },
  extension: {
    'ext_builder': {
      name: 'ext_preview',
      render(){
        return <div>ext preview</div>
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
})