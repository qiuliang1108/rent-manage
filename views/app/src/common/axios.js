import axios from 'axios';

import Vue from 'vue';

axios.interceptors.request.use(function (config) {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config;
});

class Axios{
  static install(Vue,opts){
    Vue.prototype.$axios = axios;
  }
}

Vue.use(Axios);



