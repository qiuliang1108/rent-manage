import Dom from './dom';

class Util extends Dom {
  constructor() {
    super();
  }

  isStr(val) {
    return typeof val === 'string';
  }

  isPlainObject(val) {
    return val && val !== null && (val.toString() === '[object Object]');
  }

  isArray(val) {
    return val instanceof Array;
  }

  isObjcet(val) {
    return this.isPlainObject(val) || this.isArray(val);
  }

  isDef(val) {
    return val !== undefined && val !== null;
  }

  isUndef(val) {
    return val === undefined || val === null;
  }

  isBlankSpace(val) {
    return val.trim().length === 0;
  }

  isTrue(bool) {
    return bool === true;
  }

  isFalse(bool) {
    return bool === false;
  }

  each(obj, cb, isReturn = false) {
    if (this.isUndef(obj)) return;
    let i = 0,
      index = 0,
      newVal = [];

    const len = obj.length;

    if (this.isArray(obj)) {
      for (; i < len; i++) {
        if (isReturn) {
          newVal.push(cb(obj[i], i));
        } else {
          cb(obj[i], i);
        }
      }
    } else {
      for (i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (isReturn) {
          newVal.push(cb(obj[i], i, index++));
        } else {
          cb(obj[i], i, index++);
        }
      }
    }

    if (isReturn) return newVal;
  }

  definePropertyVal(obj, key, val) {
    Object.defineProperty(obj, key, {
      configurable: false,
      enumerable: false,
      value: val
    });
  }

  //获取表达式
  getRegExp(expr) {
    const tm = '\\/*.?+$^[](){}|\'\"';
    this.each(tm, (tmItem, index) => {
      expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
    });
    return expr;
  }

  deepCopy(obj) {
    if (!(obj instanceof Array) && !(obj.toString() === "[object Object]")) return obj;
    const _obj = obj instanceof Array ? [] : {};
    for (let key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      if ((obj instanceof Array) || (obj instanceof Object)) {
        _obj[key] = this.deepCopy(obj[key]);
      } else {
        _obj[key] = obj[key];
      }
    }
    return _obj;
  }

  extend(object, _object) {
    const newObj = this.deepCopy(object),
      _newObj = this.deepCopy(_object);
    this.each(_newObj, (obj, key) => {
      object[key] = obj;
    });
    return newObj;
  }
}

const util = new Util();

export default util;
