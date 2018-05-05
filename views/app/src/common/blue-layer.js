import bluelayer from 'blue-layer';
import Vue from 'vue';

class Layer {
  static install(Vue, opts) {
    Vue.prototype.bluelayer = bluelayer;
  }
}

Vue.use(Layer);
