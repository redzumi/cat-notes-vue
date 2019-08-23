import Vue from 'vue';
import Vuex from 'vuex';

// modules
import notes from './modules/notes';

// plugins
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notes
  },
  plugins: [createLogger({})]
});
