import {model} from '../../src/index';

import setting from './Setting.vue';
import preview from './Preview.vue';
import builder from './Builder.vue';

export default new model.XFieldDef({
  type: 'textarea',
  title: '多行文本',
  components: {
    setting,
    preview,
    builder
  }
})