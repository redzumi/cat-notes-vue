import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';

import store from './store';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
});
