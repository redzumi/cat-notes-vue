import Vue from 'vue';
import Vuex from 'vuex';

// modules
import notes from './modules/notes';

// plugins
import createLogger from 'vuex/dist/logger';

import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    notes
  },
  plugins: [createLogger({})]
});
