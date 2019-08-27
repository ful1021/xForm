import './app.css';

import Vue from 'vue';
import App from './App.vue';
import Modal from './components/Modal.vue'
import XForm from '../src/base';

Vue.component(Modal.name, Modal);
Vue.use(XForm);
Vue.prototype.$xform = {};

const app = new Vue({
  render(h){
    return h(App);
  }
});

app.$mount('#app');