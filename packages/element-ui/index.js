import './index.scss';

import XForm from '@src/';

import Text from './text';
import Textarea from './textarea'

XForm.store.register(Text, Textarea);

export * from '@src/';
export default XForm;