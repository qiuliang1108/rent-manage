import headerStore from './header';

import indexStore from './store/index';

export default {
  namespaced: true,
  state: {
    header: headerStore
  },
  modules: {
    index: indexStore
  }
}
