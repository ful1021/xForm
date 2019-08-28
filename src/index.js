import './assets/css/index.css';

import XFormDesigner from './components/XFormDesigner';
import XFormBuilder from './components/XFormBuilder';
import XFormView from './components/XFormView';
import XFormItem from './components/XFormItem';

import store from './util/store';
import adapter from './util/adapter';

export const components = {XFormDesigner, XFormBuilder, XFormView, XFormItem};

const install = function(Vue){
  Object.keys(components).forEach(key => {
    const component = components[key];
    Vue.component(component.name, component);
  })
}

const XForm = {
  name: 'xForm',
  version: '0.0.1',
  install,
  store,
  adapter
} 

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default XForm;