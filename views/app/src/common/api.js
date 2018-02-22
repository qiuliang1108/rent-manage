import Vue from 'vue';

import path from 'path';

const config = {
  ext:'/api'
};

class Api{
  constructor(opts){
    this.config = Object.assign(config,opts);
    this.ext = this.config.ext;
  }
  getApi(api = ''){
    //dev
    if(process.env.NODE_ENV === 'development'){
      return path.join(this.ext,api);
    }else if(process.env.NODE_ENV === 'production'){
      return api;
    }
  }
  static install(Vue,opts){
    Vue.prototype.$api = new this();
  }
}

Vue.use(Api);

export default Api;
