import {model} from '../../src/index';

import setting from './Setting.vue';
import preview from './Preview.vue';

export default new model.XFieldDef({
  type: 'text',
  name: '单行文本',
  components: {
    setting,
    preview
  }
})