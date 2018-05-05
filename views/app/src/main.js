import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from '@Common/axios';
import api from '@Common/api';
import bluelayer from '@Common/blue-layer';
import blueAsk from '@Common/blue-ask';
import blueValidate from '@Common/blue-validate';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
