import {model} from '../../src/core';

import setting from './Setting.vue';
import preview from './Preview.vue';
import builder from './Builder.vue';

export default new model.XFieldDef({
  type: 'text',
  title: '单行文本',
  components: {
    setting,
    preview,
    builder
  }
})