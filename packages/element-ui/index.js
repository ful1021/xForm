import XForm from '@src/';

import Text from './text';
import Textarea from './textarea';
import Select from './select'

XForm.store.register(Text, Textarea, Select);

export * from '@src/';
export default XForm;