import Vuex from 'vuex';
import Vue from 'vue';
import homeStore from './home/index';
import manageStore from './manage/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: {
      member: false,
      manage: false
    }
  },
  modules: {
    home: homeStore,
    manage: manageStore
  }
});
