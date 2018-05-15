function A() {
  this.a = 1;
  this.b = 2;
}

A.prototype.mc0 = function () {
}
A.prototype.mc1 = function () {
}

function B() {
}

B.prototype.md0 = function () {
}

B.prototype.md1 = function () {
}


function createClass(opts) {

  createClass.defineProperty = function (obj, key, value) {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: value
    });
  };

  opts = opts ? opts : {};

  function Obj() {
  }

  var prototype = opts.prototype || {},
    _static = opts.static,
    extendClass = opts.extendClass;

  //生成
  var _Class = new Function('extendClass' , 'opts' , '' +
    'return function ' + (opts.name || '_Class') + '() {\n' +
    '   if (extendClass) {\n' +
    '    extendClass.apply(this, arguments);\n' +
    '   }\n' +
    '    opts.constructor.apply(this,arguments);\n' +
    '}')(extendClass,opts);

  //设置继承原型
  if (extendClass) {
    Obj.prototype = extendClass.prototype;
    _Class.prototype = new Obj();
    createClass.defineProperty(_Class.prototype, 'constructor', _Class);
  }

  //设置原型
  if (prototype instanceof Object) {
    for (var i in prototype) {
      createClass.defineProperty(_Class.prototype, i, prototype[i]);
    }
  }

  //静态方法
  if (_static instanceof Object) {
    for (var j in _static) {
      createClass.defineProperty(_Class, j, _static[j]);
    }
  }

  return _Class;
}

var a = createClass({
  name:"A"
});

console.log(new a());

var B = createClass({
  name: 'B',
  extendClass: A,
  constructor:function(a,b,c){
    console.log(a,b,c);
  },
  prototype: {
    a: function () {
    },
    b: function () {
    }
  }
});

var C = createClass({
  extendClass: B,
  name:'C',
  constructor: function () {
    this.aaa = 1;
  },
  prototype: {
    cc: function () {
    },
    cd: function () {
    }
  }
})

console.log(new B(1,2,3));

console.log(new C());