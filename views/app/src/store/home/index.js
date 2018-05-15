import headerStore from './header';
import indexStore from './store/index';
import util from '@Common/util';

export default {
  namespaced: true,
  state: {
    header: headerStore
  },
  modules: {
    index: indexStore
  },
  mutations: {
    changeHeaderStore(state, data) {
      state.header = util.extend(state.header, data)
    }
  }
}
