import './app.css';

import Vue from 'vue';
import App from './App.vue';
import XForm from '../src/index';

Vue.use(XForm)

const app = new Vue({
  render(h){
    return h(App);
  }
});

app.$mount('#app');