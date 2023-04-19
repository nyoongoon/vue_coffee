// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

import state from './states.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

// Vuex를 사용하기 위해 Vue.use(Vuex)를 먼저 호출한다.

Vue.use(Vuex);
Vue.config.devtools = true

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
