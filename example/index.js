import './app.css';

import Vue from 'vue';
import App from './App.vue';
import Modal from './components/Modal.vue'
import XForm from '../src';

Vue.component(Modal.name, Modal);
Vue.use(XForm, {
  
});

const app = new Vue({
  provide: {
    fieldKey: '__x_form_field_key__',
    modelKey: '__x_form_model_key__'
  },
  render(h){
    return h(App);
  }
});

app.$mount('#app');