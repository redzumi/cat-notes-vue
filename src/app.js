import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './components/App';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
