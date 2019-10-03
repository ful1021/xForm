import Text from './text';
import Textarea from './textarea';
import Number from './number';
import Select from './select';
import Checkbox from './checkbox';
import Radio from './radio';
import Date from './date';
import Divider from './divider';
import Info from './info'

export default {
  types: [
    Text, 
    Textarea, 
    Number, 
    Select, 
    Checkbox, 
    Radio, 
    Date,
    Divider,
    Info
  ],
  config: {
    icons: {
      designerRemove: 'el-icon-close',
      designerCopy: 'el-icon-copy-document',
      builderTooltip: 'el-icon-info'
    }
  }
}