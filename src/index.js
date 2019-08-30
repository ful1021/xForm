import XForm from './core';

import Text from '../packages/text';
import Textarea from '../packages/textarea';

XForm.store.register(Text, Textarea);

export * from './core';
export default XForm;