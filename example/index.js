import './app.css';

import Vue from 'vue';
import App from './App.vue';
import Modal from './components/Modal.vue'
import XForm from '../src/base';

Vue.component(Modal.name, Modal);
Vue.use(XForm, {
  
});

const app = new Vue({
  provide: {
    storageKey: '__x_form_storage_key__'
  },
  render(h){
    return h(App);
  }
});

app.$mount('#app');