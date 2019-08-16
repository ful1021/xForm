import './index.css';

import XFormDesign from './components/XFormDesign';
import XFormBuilder from './components/XFormBuilder';
import XFormView from './components/XFormView';
import XFormItem from './components/XFormItem';

export const components = {XFormDesign, XFormBuilder, XFormView, XFormItem};

const install = function(Vue){
  Object.keys(components).forEach(key => {
    const component = components[key];
    Vue.component(component.name, component);
  })
}

const XForm = {
  name: 'xForm',
  version: '0.0.1',
  install
} 

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default XForm;