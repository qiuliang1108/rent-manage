import blueAsk from '../../../../../blue-ask/index'
import Vue from 'vue';

class Ask{
  static install(){
    Vue.prototype.ask = blueAsk;
  }
}

Vue.use(Ask);
