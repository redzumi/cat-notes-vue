import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './components/App';

import store from './store';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
});
