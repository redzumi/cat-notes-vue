import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './components/App';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
