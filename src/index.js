import './assets/css/index.css';

import XFormDesigner from './components/XFormDesigner';
import XFormBuilder from './components/XFormBuilder';
import XFormView from './components/XFormView';
import XFormItem from './components/XFormItem';

import store from './util/store';
import adapter from './util/adapter';
import config from './config';
import mixin from './mixin';
import model from './model';

import {cloneDeep} from 'lodash'

const components = {XFormDesigner, XFormBuilder, XFormView, XFormItem};
const install = function(Vue, options = {}){
  Vue.prototype.$xform = Object.assign(Vue.prototype.$xform || {}, config, cloneDeep(options));

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
  adapter,
  mixin,
  model,
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