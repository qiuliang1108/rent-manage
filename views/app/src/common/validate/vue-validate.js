function handler(el, binding) {

}

class Validate {
  constructor() {
    this.dataType = {
      "*": {
        type: /[\w\W]+/,
        info: '内容不能为空'
      },
      "n": {
        type: /^\d+$/,
        info: '请输入数字'
      },
      "m": {
        type: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/,
        info: '请输入手机号'
      },
      "e": {
        type: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        info: '请输入email'
      },
      "url": {
        type: /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
        info: '请数url'
      }
    }
    ;
  }

  each(obj, cb) { //遍历
    let i = 0,
      len = obj.length;
    if ( this.type(obj, 'array') ) {
      for (; i < len; i++) {
        cb(obj[i], i);
      }
    } else {
      for (i in obj) {
        if ( obj.hasOwnProperty(i) ) cb(obj[i], i);
      }
    }
  }

  type(obj, type) {
    switch (type) {
      case 'array':
        return obj instanceof Array || !!(obj && obj.length);
      case 'object' :
        return obj instanceof Object && !(obj instanceof Array) && obj !== null;
      case 'function':
        return typeof obj === 'function';
      case 'string':
        return typeof obj === 'string';
      case 'number':
        return typeof obj === 'number' || !isNaN(obj);
      case 'element':
        return !!(obj && obj.nodeType);
      default:
        return false;
    }
  }

  validateHandler(el, binding) {
    return () => {
      const tipExp = el.getAttribute('data-tip-elm'),
        tipElm = document.querySelector(tipExp),
        result = this.validate(el);
      if ( !(tipElm && tipElm.nodeType) ) return;
      if ( result.status ) {
        tipElm.display = 'none';
        tipElm.innerHTML = '';
      } else {
        tipElm.display = '';
        tipElm.innerHTML = result.info;
      }

      return result;
    }
  }

  bind(el) {
    const tagName = el.tagName.toLowerCase();
    if(tagName != 'select'){
      el.addEventListener('input', this.validateHandler(el, el.validate.binding));
      el.addEventListener('blur', this.validateHandler(el, el.validate.binding));
    }else{
      el.addEventListener('change', this.validateHandler(el, el.validate.binding));
    }
  }

  addDataType(exp, value) {
    this.dataType[exp] = value;
  }

  validate(el) {

    let result = {
      status: true,
      info: ''
    };

    const val = el.value,
      binding = el.validate.binding,
      dataType = binding.value;

    if ( !this.type(dataType, 'array') ) {
      console.warn(`v-validate value is Array`);
      result = {
        status: false,
        info: "v-validate value typeof not's Array"
      }
      return result;
    }

    this.each(dataType, (valid, index) => {
      if ( !result.status ) return;
      let validata = null,
        isValidateDataType = false;
      if ( valid.type instanceof RegExp ) {
        validata = valid.type;
      } else {
        validata = this.dataType[valid.type].type;
        isValidateDataType = true;
      }
      if ( !(validata.test(val)) ) {
        result = {
          status: false,
          info: valid.info || (isValidateDataType ? this.dataType[valid.type].info : 'error')
        }
      }
    });

    return result;
  }

  static install(Vue, opts) {

    const $vali = new this(opts);

    Vue.directive('validate', {
      bind(el, binding) {
        el.validate = {
          status: true,
          binding
        };
        $vali.bind(el);
      }
    });

    Vue.prototype.$validate = (event) => {
      const elm = event.target,
        valiStatus = [];
      [...elm.elements].forEach((el) => {
        if ( !el.validate || !el.validate.status ) return;
        const result = $vali.validateHandler(el, el.validate.binding)();
        valiStatus.push(result.status);
      });

      if(valiStatus.indexOf(false) != -1){
        console.log('error');
      }else{
        console.log('success');
      }

      event.preventDefault();
    }
  }
}

export default Validate;
