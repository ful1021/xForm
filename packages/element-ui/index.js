import XForm from '@src/';

import Text from './text';
import Textarea from './textarea';
import Number from './number';

import Select from './select';
import Checkbox from './checkbox';
import Radio from './radio';

import Date from './date';

XForm.store.register(Text, Textarea, Number, Select, Checkbox, Radio, Date);

export * from '@src/';
export default XForm;