import setting from './setting.vue';
import preview from './preview.vue';
import builder from './builder.vue';
import viewer from './viewer.vue';

export default {
  type: 'textarea',
  title: '多行文本',
  icon: 'iconfont icon-xform-textarea',
  maxLength: 150,
  component: {
    setting,
    preview,
    builder,
    viewer
  },
  validator(field, value){
    return new Promise((resolve, reject) => {
      if(value != null && value.toString().length > this.maxLength) return reject(`${field.title}长度不能超过${this.maxLength}个字符`);
      if(field.required && (value == null || value.toString().length == 0)) return reject(`请输入${field.title}`);
      
      return resolve();
    })
  }
}