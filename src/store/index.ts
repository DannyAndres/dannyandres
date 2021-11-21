import { createStore } from 'vuex';

import authentication from './modules/authentication';
import loading from './modules/loading';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication,
    loading,
  },
});
