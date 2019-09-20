import './app.scss';

import Vue from 'vue';
import router from './router';

// TODO: 按需导入
import ElementUI from 'element-ui';

import Modal from './components/Modal.vue'
import XForm from '../packages/element-ui';
import App from './App.vue';

Vue.use(ElementUI, {size: 'small'});
Vue.component(Modal.name, Modal);
Vue.use(XForm, {
  modes: {
    
  }
});

const app = new Vue({
  router,
  provide: {
    fieldKey: '__x_form_field_key__',
    modelKey: '__x_form_model_key__'
  },
  render(h){
    return h(App);
  }
});

app.$mount('#app');