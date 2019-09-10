import {mixin} from '@src/index';

import setting from './setting.vue';
import builder from './builder.vue';

export default {
  type: 'select',
  title: '下拉选择',
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
  },
  // validator(field, value){
  //   return new Promise((resolve, reject) => {
  //     if(value != null && value.toString().length > this.maxLength) return reject(`${field.title}长度不能超过${this.maxLength}个字符`);
  //     if(field.required && (value == null || value.toString().length == 0)) return reject(`请输入${field.title}`);
      
  //     return resolve();
  //   })
  // }
}