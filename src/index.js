import directive from './directive'
import store from './util/store';
import adapter from './util/adapter';
import mixin from './mixin';
import model from './model';

import XFormDesigner from './components/XFormDesigner';
import XFormBuilder from './components/XFormBuilder';
import XFormViewer from './components/XFormViewer';
import XFormItem from './components/XFormItem';

const components = {XFormDesigner, XFormBuilder, XFormViewer, XFormItem};
const install = function(Vue, options = {}){
  store.setConfig(options);

  Object.keys(components).forEach(key => {
    const component = components[key];
    Vue.component(component.name, component);
  })

  Vue.directive('xform', directive)
}

const XForm = {
  name: 'xForm',
  install,
  store,
  adapter,
  mixin,
  model,
  register: store.register,
  components
} 

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  store,
  adapter,
  mixin,
  model,
  components
};

export default XForm;