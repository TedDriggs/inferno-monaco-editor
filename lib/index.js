module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(63);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(5);
var ctx = __webpack_require__(30);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(16);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(69);
var enumBugKeys = __webpack_require__(16);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(62).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(2);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(27);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(52);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(51);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(58);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(38);
var hide = __webpack_require__(6);
var has = __webpack_require__(2);
var Iterators = __webpack_require__(17);
var $iterCreate = __webpack_require__(65);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(20);
var createDesc = __webpack_require__(13);
var toIObject = __webpack_require__(4);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(32);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(37);
var hiddenKeys = __webpack_require__(16).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIObject = __webpack_require__(4);
var arrayIndexOf = __webpack_require__(60)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91).default;
module.exports.default = module.exports;



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(49);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(50);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(48);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(88);
var isArguments = __webpack_require__(87);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89).default;
module.exports.default = module.exports;



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90).default;
module.exports.default = module.exports;



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(42);

var _inherits3 = _interopRequireDefault(_inherits2);

var _deepEqual = __webpack_require__(44);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _infernoCreateElement = __webpack_require__(46);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _infernoComponent = __webpack_require__(45);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonacoEditor = function (_Component) {
    (0, _inherits3.default)(MonacoEditor, _Component);

    function MonacoEditor(props) {
        (0, _classCallCheck3.default)(this, MonacoEditor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MonacoEditor.__proto__ || Object.getPrototypeOf(MonacoEditor)).call(this, props));

        _this.performMerges(props);
        return _this;
    }

    (0, _createClass3.default)(MonacoEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.afterViewInit();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _performMerges = this.performMerges(nextProps),
                didOptionsChange = _performMerges.didOptionsChange;

            var props = this.props,
                _editor = this._editor,
                settings = this.settings;

            var widthChanged = props.width !== nextProps.width;
            var heightChanged = props.height !== nextProps.height;
            if (widthChanged || heightChanged) {
                this.layout();
            }
            if (_editor) {
                if (didOptionsChange) {
                    _editor.updateOptions(this.mergedOptions);
                }
                if (settings.theme !== nextProps.theme) {
                    monaco.editor.setTheme(nextProps.theme);
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.dispose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (0, _infernoCreateElement2.default)("div", { ref: function ref(elem) {
                    return _this2.element = elem;
                }, style: this.mergedStyle, className: "inferno-monaco-container" });
        }
    }, {
        key: 'layout',

        /**
         * Update the size of the editor to fill its container; call after changing
         * the size of the element.
         */
        value: function layout() {
            if (this._editor) {
                this._editor.layout();
            }
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            if (this._editor) {
                this._editor.dispose();
            }
            this._editor = undefined;
        }
    }, {
        key: 'performMerges',
        value: function performMerges(props) {
            var didStyleChange = false;
            var didOptionsChange = false;
            var width = props.width,
                height = props.height,
                style = props.style,
                readOnly = props.readOnly,
                options = props.options;

            var incomingStyle = Object.assign({ width: width, height: height }, style);
            var incomingOptions = options;
            if (typeof readOnly !== 'undefined') {
                incomingOptions = Object.assign({}, options, { readOnly: readOnly });
            }
            if (!(0, _deepEqual2.default)(incomingStyle, this.mergedStyle)) {
                didStyleChange = true;
                this.mergedStyle = incomingStyle;
            }
            if (!(0, _deepEqual2.default)(incomingOptions, this.mergedOptions)) {
                didOptionsChange = true;
                this.mergedOptions = incomingOptions;
            }
            return {
                didStyleChange: didStyleChange,
                didOptionsChange: didOptionsChange
            };
        }
    }, {
        key: 'afterViewInit',
        value: function afterViewInit() {
            var _this3 = this;

            var requireConfig = this.settings.requireConfig;

            var loaderUrl = requireConfig.url || 'vs/loader.js';
            var w = window;
            var onGotAmdLoader = function onGotAmdLoader() {
                if (w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__) {
                    // Do not use webpack
                    if (requireConfig.paths && requireConfig.paths.vs) {
                        w.require.config(requireConfig);
                    }
                }
                // Load monaco
                w.require(['vs/editor/editor.main'], function () {
                    _this3.initMonaco();
                });
                // Call the delayed callbacks when AMD loader has been loaded
                if (w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__) {
                    w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__ = false;
                    var loaderCallbacks = w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__;
                    if (loaderCallbacks && loaderCallbacks.length) {
                        var currentCallback = loaderCallbacks.shift();
                        while (currentCallback) {
                            currentCallback.fn.call(currentCallback.context);
                            currentCallback = loaderCallbacks.shift();
                        }
                    }
                }
            };
            // Load AMD loader if necessary
            if (w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__) {
                // We need to avoid loading multiple loader.js when there are multiple editors loading concurrently
                //  delay to call callbacks except the first one
                w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__ = w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__ || [];
                w.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__.push({
                    context: this,
                    fn: onGotAmdLoader
                });
            } else {
                if (typeof w.require === 'undefined') {
                    var loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = loaderUrl;
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                    w.__REACT_MONACO_EDITOR_LOADER_ISPENDING__ = true;
                } else {
                    onGotAmdLoader();
                }
            }
        }
    }, {
        key: 'initMonaco',
        value: function initMonaco() {
            var _settings = this.settings,
                value = _settings.value,
                language = _settings.language,
                theme = _settings.theme,
                onMonacoAvailable = _settings.onMonacoAvailable;

            if (typeof monaco !== 'undefined') {
                onMonacoAvailable(monaco);
                this._editor = monaco.editor.create(this.element, Object.assign({ value: value,
                    language: language,
                    theme: theme }, this.mergedOptions));
                // After monaco editor has been initialized
                this.onDidMount();
            }
        }
        /** Gets the component props with defaults applied. */

    }, {
        key: 'onDidMount',
        value: function onDidMount() {
            var _settings2 = this.settings,
                onDidMount = _settings2.onDidMount,
                onChange = _settings2.onChange;

            var editor = this._editor;
            onDidMount(editor);
            editor.onDidChangeModelContent(function (evt) {
                return onChange(editor.getValue(), evt);
            });
        }
    }, {
        key: 'editor',
        get: function get() {
            return this._editor;
        }
    }, {
        key: 'model',
        get: function get() {
            var editor = this.editor;

            if (editor) return editor.getModel();
        }
    }, {
        key: 'settings',
        get: function get() {
            return this.props;
        }
    }]);
    return MonacoEditor;
}(_infernoComponent2.default); /// <reference types="monaco-editor" />


exports.default = MonacoEditor;

MonacoEditor.defaultProps = {
    width: '100%',
    height: '500px',
    value: '',
    language: 'javascript',
    theme: 'vs',
    style: {},
    options: {},
    onMonacoAvailable: noop,
    onChange: noop,
    onDidMount: noop,
    requireConfig: {}
};
function noop(_) {}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
module.exports = __webpack_require__(5).Object.setPrototypeOf;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
__webpack_require__(81);
__webpack_require__(84);
__webpack_require__(85);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(86);
module.exports = __webpack_require__(27).f('iterator');


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4);
var toLength = __webpack_require__(75);
var toAbsoluteIndex = __webpack_require__(74);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(20);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(19);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(12);
var toIObject = __webpack_require__(4);
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(2);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(12);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4);
var gOPN = __webpack_require__(35).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(2);
var toObject = __webpack_require__(76);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(8);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(30)(Function.call, __webpack_require__(34).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(59);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(17);
var toIObject = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(19) });


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });


/***/ }),
/* 81 */
/***/ (function(module, exports) {



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(73)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(1);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(38);
var META = __webpack_require__(68).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(23);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(14);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(27);
var wksDefine = __webpack_require__(26);
var keyOf = __webpack_require__(67);
var enumKeys = __webpack_require__(61);
var isArray = __webpack_require__(64);
var anObject = __webpack_require__(8);
var toIObject = __webpack_require__(4);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(13);
var _create = __webpack_require__(19);
var gOPNExt = __webpack_require__(70);
var $GOPD = __webpack_require__(34);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(12);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(35).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('asyncIterator');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('observable');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var global = __webpack_require__(0);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(17);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 87 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(39);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var noOp = ERROR_MSG;
if (undefined !== "production") {
    noOp =
        "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.";
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
        var parentVNode = vNode.parentVNode;
        if (parentVNode) {
            parentVNode.dom = dom;
            updateParentComponentVNodes(parentVNode, dom);
        }
    }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then((function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, (function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            }));
            component._updating = false;
        }));
    }
    if (!isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (isNullOrUndef(pending)) {
        component._pendingState = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        }
        else {
            addToQueue(component, false, callback);
        }
    }
    else {
        component._pendingSetState = true;
        if (!isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = null;
        var nextInput;
        var renderOutput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (isInvalid(renderOutput)) {
            nextInput = inferno.createVNode(4096 /* Void */, null);
        }
        else if (renderOutput === NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (isStringOrNumber(renderOutput)) {
            nextInput = inferno.createVNode(1 /* Text */, null, null, renderOutput);
        }
        else if (isArray(renderOutput)) {
            if (undefined !== "production") {
                throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
            }
            return throwError();
        }
        else {
            nextInput = renderOutput;
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = (lastInput.dom && lastInput.dom.parentNode) ||
            (lastInput.dom = vNode.dom);
        if (nextInput.flags & 28 /* Component */) {
            nextInput.parentVNode = vNode;
        }
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext;
            if (!isNullOrUndef(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (isNullOrUndef(childContext)) {
                childContext = component._childContext;
            }
            else {
                childContext = combineFrom(context, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            // If this component was unmounted by its parent, do nothing. This is no-op
            if (component._unmounted) {
                return;
            }
            lifeCycle.trigger();
            if (!isNullOrUndef(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            if (!isNull(inferno.options.afterUpdate)) {
                inferno.options.afterUpdate(vNode);
            }
        }
        var dom = (vNode.dom = nextInput.dom);
        if (inferno.options.findDOMNodeEnabled) {
            inferno.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        updateParentComponentVNodes(vNode, dom);
    }
    else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    this._blockRender = false;
    this._blockSetState = true;
    this._pendingSetState = false;
    this._pendingState = null;
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = false;
    this._lifecycle = null;
    this._childContext = null;
    this._isSVG = false;
    this._updating = true;
    /** @type {object} */
    this.props = props || inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || inferno.EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this._unmounted) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        queueStateChanges(this, newState, callback);
    }
    else {
        if (undefined !== "production") {
            throwError("cannot update state via setState() in componentWillUpdate() or constructor.");
        }
        throwError();
    }
};
Component.prototype._updateComponent = function _updateComponent (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        if (undefined !== "production") {
            throwError(noOp);
        }
        throwError();
    }
    if (prevProps !== nextProps ||
        nextProps === inferno.EMPTY_OBJ ||
        prevState !== nextState ||
        force) {
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
            if (!isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                // If this component was removed during its own update do nothing...
                if (this._unmounted) {
                    return NO_OP;
                }
                this._blockRender = false;
            }
            if (this._pendingSetState) {
                nextState = combineFrom(nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = null;
            }
        }
        /* Update if scu is not defined, or it returns truthy value or force */
        if (force ||
            isNullOrUndef(this.shouldComponentUpdate) ||
            (this.shouldComponentUpdate &&
                this.shouldComponentUpdate(nextProps, nextState, context))) {
            if (!isNullOrUndef(this.componentWillUpdate)) {
                this._blockSetState = true;
                this.componentWillUpdate(nextProps, nextState, context);
                this._blockSetState = false;
            }
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
            if (inferno.options.beforeRender) {
                inferno.options.beforeRender(this);
            }
            var render = this.render(nextProps, nextState, context);
            if (inferno.options.afterRender) {
                inferno.options.afterRender(this);
            }
            return render;
        }
        else {
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
        }
    }
    return NO_OP;
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };

exports['default'] = Component;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(39);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isString(o) {
    return typeof o === "string";
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function isObject(o) {
    return typeof o === "object";
}

/**
 * @module Inferno-Create-Element
 */ /** TypeDoc Comment */
var componentHooks = new Set();
componentHooks.add("onComponentWillMount");
componentHooks.add("onComponentDidMount");
componentHooks.add("onComponentWillUnmount");
componentHooks.add("onComponentShouldUpdate");
componentHooks.add("onComponentWillUpdate");
componentHooks.add("onComponentDidUpdate");
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    if (isInvalid(type) || isObject(type)) {
        throw new Error("Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.");
    }
    var children = _children;
    var ref = null;
    var key = null;
    var className = null;
    var flags = 0;
    var newProps;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (isString(type)) {
        flags = inferno.getFlagsForElementVnode(type);
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === "className" || prop === "class") {
                    className = props[prop];
                }
                else if (prop === "key") {
                    key = props.key;
                }
                else if (prop === "children" && isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (prop === "ref") {
                    ref = props.ref;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    else {
        flags = 16 /* ComponentUnknown */;
        if (!isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop$1 in props) {
                if (componentHooks.has(prop$1)) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop$1] = props[prop$1];
                }
                else if (prop$1 === "key") {
                    key = props.key;
                }
                else {
                    newProps[prop$1] = props[prop$1];
                }
            }
        }
    }
    return inferno.createVNode(flags, type, className, children, newProps, key, ref);
}

exports['default'] = createElement;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o;
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
}
function isString(o) {
    return typeof o === "string";
}
function isNumber(o) {
    return typeof o === "number";
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function isObject(o) {
    return typeof o === "object";
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while ((listener = listeners.shift())) {
        listener();
    }
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var svgNS = "http://www.w3.org/2000/svg";
var strictProps = new Set();
strictProps.add("volume");
strictProps.add("defaultChecked");
var booleanProps = new Set();
booleanProps.add("muted");
booleanProps.add("scoped");
booleanProps.add("loop");
booleanProps.add("open");
booleanProps.add("checked");
booleanProps.add("default");
booleanProps.add("capture");
booleanProps.add("disabled");
booleanProps.add("readOnly");
booleanProps.add("required");
booleanProps.add("autoplay");
booleanProps.add("controls");
booleanProps.add("seamless");
booleanProps.add("reversed");
booleanProps.add("allowfullscreen");
booleanProps.add("novalidate");
booleanProps.add("hidden");
booleanProps.add("autoFocus");
booleanProps.add("selected");
booleanProps.add("indeterminate");
var namespaces = new Map();
namespaces.set("xlink:href", xlinkNS);
namespaces.set("xlink:arcrole", xlinkNS);
namespaces.set("xlink:actuate", xlinkNS);
namespaces.set("xlink:show", xlinkNS);
namespaces.set("xlink:role", xlinkNS);
namespaces.set("xlink:title", xlinkNS);
namespaces.set("xlink:type", xlinkNS);
namespaces.set("xml:base", xmlNS);
namespaces.set("xml:lang", xmlNS);
namespaces.set("xml:space", xmlNS);
var isUnitlessNumber = new Set();
isUnitlessNumber.add("animationIterationCount");
isUnitlessNumber.add("borderImageOutset");
isUnitlessNumber.add("borderImageSlice");
isUnitlessNumber.add("borderImageWidth");
isUnitlessNumber.add("boxFlex");
isUnitlessNumber.add("boxFlexGroup");
isUnitlessNumber.add("boxOrdinalGroup");
isUnitlessNumber.add("columnCount");
isUnitlessNumber.add("flex");
isUnitlessNumber.add("flexGrow");
isUnitlessNumber.add("flexPositive");
isUnitlessNumber.add("flexShrink");
isUnitlessNumber.add("flexNegative");
isUnitlessNumber.add("flexOrder");
isUnitlessNumber.add("gridRow");
isUnitlessNumber.add("gridColumn");
isUnitlessNumber.add("fontWeight");
isUnitlessNumber.add("lineClamp");
isUnitlessNumber.add("lineHeight");
isUnitlessNumber.add("opacity");
isUnitlessNumber.add("order");
isUnitlessNumber.add("orphans");
isUnitlessNumber.add("tabSize");
isUnitlessNumber.add("widows");
isUnitlessNumber.add("zIndex");
isUnitlessNumber.add("zoom");
isUnitlessNumber.add("fillOpacity");
isUnitlessNumber.add("floodOpacity");
isUnitlessNumber.add("stopOpacity");
isUnitlessNumber.add("strokeDasharray");
isUnitlessNumber.add("strokeDashoffset");
isUnitlessNumber.add("strokeMiterlimit");
isUnitlessNumber.add("strokeOpacity");
isUnitlessNumber.add("strokeWidth");
var skipProps = new Set();
skipProps.add("children");
skipProps.add("childrenType");
skipProps.add("defaultValue");
skipProps.add("ref");
skipProps.add("key");
skipProps.add("checked");
skipProps.add("multiple");
var delegatedEvents = new Set();
delegatedEvents.add("onClick");
delegatedEvents.add("onMouseDown");
delegatedEvents.add("onMouseUp");
delegatedEvents.add("onMouseMove");
delegatedEvents.add("onSubmit");
delegatedEvents.add("onDblClick");
delegatedEvents.add("onKeyDown");
delegatedEvents.add("onKeyUp");
delegatedEvents.add("onKeyPress");

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var isiOS = isBrowser &&
    !!navigator.platform &&
    /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents$1 = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents$1.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents$1.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === "onClick") {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents$1.delete(name);
            }
        }
    }
}
function dispatchEvents(event, target, items, count, isClick, eventData) {
    var dom = target;
    while (count > 0) {
        var eventsToTrigger = items.get(dom);
        if (eventsToTrigger) {
            count--;
            // linkEvent object
            eventData.dom = dom;
            if (eventsToTrigger.event) {
                eventsToTrigger.event(eventsToTrigger.data, event);
            }
            else {
                eventsToTrigger(event);
            }
            if (event.cancelBubble) {
                return;
            }
        }
        dom = dom.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (dom === null || (isClick && dom.disabled)) {
            return;
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function (event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData = {
                dom: document
            };
            try {
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function get() {
                        return eventData.dom;
                    }
                });
            }
            catch (e) {
                /* safari7 and phantomJS will crash */
            }
            dispatchEvents(event, event.target, delegatedRoots.items, count, event.type === "click", eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() { }
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function isCheckedType(type) {
    return type === "checkbox" || type === "radio";
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    if (props.onClick) {
        var event = props.onClick;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    applyValue(newProps, dom);
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = onCheckboxChange;
                dom.onclick.wrapped = true;
            }
            else {
                dom.oninput = onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute("type", type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + "";
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === "optgroup") {
        var children = vNode.children;
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (isVNode(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) ||
        props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event = props.onChange;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$1(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$1(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
function applyValue$1(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function wrappedOnChange$1(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$2(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$2(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange$1;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue$2(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            }
            else if (domValue !== "") {
                dom.defaultValue = "";
                dom.value = "";
            }
        }
    }
    else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
        processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 2048 /* SelectElement */) {
        processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 1024 /* TextareaElement */) {
        processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type)
        ? !isNullOrUndef(nextPropsOrEmpty.checked)
        : !isNullOrUndef(nextPropsOrEmpty.value);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === "!") {
                var placeholder = document.createTextNode("");
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            }
            else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        }
        else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === svgNS;
        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (undefined !== "production") {
            warning("Inferno hydration: Server-side markup doesn't match client-side markup or Initial render target is not empty");
        }
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (!isInvalid(children)) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    else if (dom.firstChild !== null && !isSamePropsInnerHTML(dom, props)) {
        dom.textContent = ""; // dom has content, but VNode has no children remove everything from DOM
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute("class", className);
        }
        else {
            dom.className = className;
        }
    }
    else {
        if (dom.className !== "") {
            dom.removeAttribute("class");
        }
    }
    if (ref) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (isStringOrNumber(children)) {
        if (!isNull(dom) && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children === "") {
            parentDom.appendChild(document.createTextNode(""));
        }
        else {
            parentDom.textContent = children;
        }
        if (!isNull(dom)) {
            dom = dom.nextSibling;
        }
    }
    else if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isNull(child) && isObject(child)) {
                if (!isNull(dom)) {
                    var nextSibling = dom.nextSibling;
                    hydrate(child, dom, lifecycle, context, isSVG);
                    dom = nextSibling;
                }
                else {
                    mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else {
        // It's VNode
        if (!isNull(dom)) {
            hydrate(children, dom, lifecycle, context, isSVG);
            dom = dom.nextSibling;
        }
        else {
            mount(children, parentDom, lifecycle, context, isSVG);
        }
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling$1 = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling$1;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 3970 /* Element */) {
        hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        hydrateVoid(vNode, dom);
    }
    else {
        if (undefined !== "production") {
            throwError(("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
        }
        throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!isNull(dom)) {
            hydrate(input, dom, lifecycle, EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while ((dom = dom.nextSibling)) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks &&
        (hooks.onComponentWillMount ||
            hooks.onComponentWillUnmount ||
            hooks.onComponentDidMount ||
            hooks.onComponentWillUpdate ||
            hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    var dom = vNode.dom;
    if (flags & 28 /* Component */) {
        var instance = vNode.children;
        var isStatefulComponent$$1 = (flags & 4 /* ComponentClass */) > 0;
        var props = vNode.props || EMPTY_OBJ;
        var ref = vNode.ref;
        if (!isRecycling) {
            if (isStatefulComponent$$1) {
                if (!instance._unmounted) {
                    if (!isNull(options.beforeUnmount)) {
                        options.beforeUnmount(vNode);
                    }
                    if (!isUndefined(instance.componentWillUnmount)) {
                        instance.componentWillUnmount();
                    }
                    if (ref && !isRecycling) {
                        ref(null);
                    }
                    instance._unmounted = true;
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.delete(instance);
                    }
                    unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
                }
            }
            else {
                if (!isNullOrUndef(ref)) {
                    if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                        ref.onComponentWillUnmount(dom, props);
                    }
                }
                unmount(instance, null, lifecycle, false, isRecycling);
            }
        }
        if (options.recyclingEnabled &&
            !isStatefulComponent$$1 &&
            (parentDom || canRecycle)) {
            poolComponent(vNode);
        }
    }
    else if (flags & 3970 /* Element */) {
        var ref$1 = vNode.ref;
        var props$1 = vNode.props;
        if (!isRecycling && isFunction(ref$1)) {
            ref$1(null);
        }
        var children = vNode.children;
        if (!isNullOrUndef(children)) {
            if (isArray(children)) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (!isInvalid(child) && isObject(child)) {
                        unmount(child, null, lifecycle, false, isRecycling);
                    }
                }
            }
            else if (isObject(children)) {
                unmount(children, null, lifecycle, false, isRecycling);
            }
        }
        if (!isNull(props$1)) {
            for (var name in props$1) {
                // do not add a hasOwnProperty check here, it affects performance
                if (props$1[name] !== null && isAttrAnEvent(name)) {
                    patchEvent(name, props$1[name], null, dom);
                    // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                    props$1[name] = null;
                }
            }
        }
        if (options.recyclingEnabled && (parentDom || canRecycle)) {
            poolElement(vNode);
        }
    }
    if (!isNull(parentDom)) {
        removeChild(parentDom, dom);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var componentToDOMNodeMap = new Map();
var roots = options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options.findDOMNodeEnabled) {
        if (undefined !== "production") {
            throwError("findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!");
        }
        throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (undefined !== "production") {
    if (isBrowser && document.body === null) {
        warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (undefined !== "production") {
            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        throwError();
    }
    if (input === NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (isNull(root)) {
        var lifecycle = new Lifecycle();
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (!hydrateRoot(input, parentDom, lifecycle)) {
                mount(input, parentDom, lifecycle, EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (isNullOrUndef(input)) {
            unmount(root.input, parentDom, lifecycle$1, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(root.input, input, parentDom, lifecycle$1, EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle$1.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
            return rootInput.children;
        }
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
            }
            else {
                replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (isVNode(children)) {
        unmount(children, dom, lifecycle, true, isRecycling);
    }
    else if (isArray(children)) {
        removeAllChildren(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = "";
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    }
    else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            var childrenIsSVG = isSVG === true && nextVNode.type !== "foreignObject";
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, childrenIsSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1]) &&
                        !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        removeProp(prop$1, lastPropsOrEmpty[prop$1], dom, nextFlags);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute("class");
            }
            else {
                if (isSVG) {
                    dom.setAttribute("class", nextClassName);
                }
                else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 &&
        (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (isInvalid(lastChildren)) {
        if (isStringOrNumber(nextChildren)) {
            setTextContent(dom, nextChildren);
        }
        else {
            if (isArray(nextChildren)) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (isStringOrNumber(nextChildren)) {
        if (isStringOrNumber(lastChildren)) {
            updateTextContent(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            setTextContent(dom, nextChildren);
        }
    }
    else if (isArray(nextChildren)) {
        if (isArray(lastChildren)) {
            patchArray = true;
            if (isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (isArray(lastChildren)) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mount(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (isVNode(nextChildren)) {
        if (isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        var lastLength = lastChildren.length;
        var nextLength = nextChildren.length;
        // Fast path's for both algorithms
        if (lastLength === 0) {
            if (nextLength > 0) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
        else if (nextLength === 0) {
            removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        }
        else if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling, lastLength, nextLength);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling, lastLength, nextLength);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (isNull(parentDom)) {
                    return true;
                }
                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            }
            else {
                var hasComponentDidUpdate = !isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate
                    ? combineFrom(nextState, null)
                    : nextState;
                var lastProps = instance.props;
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                // If this component was destroyed by its parent do nothing, this is no-op
                // It can happen by using external callback etc during render / update
                if (instance._unmounted) {
                    return false;
                }
                var didUpdate = true;
                // Update component before getting child context
                var childContext;
                if (!isNullOrUndef(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                if (isNullOrUndef(childContext)) {
                    childContext = context;
                }
                else {
                    childContext = combineFrom(context, childContext);
                }
                instance._childContext = childContext;
                if (isInvalid(nextInput)) {
                    nextInput = createVoidVNode();
                }
                else if (nextInput === NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                }
                else if (isStringOrNumber(nextInput)) {
                    nextInput = createTextVNode(nextInput, null);
                }
                else if (isArray(nextInput)) {
                    if (undefined !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                }
                else if (isObject(nextInput)) {
                    if (!isNull(nextInput.dom)) {
                        nextInput = directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                    nextInput.parentVNode = nextVNode;
                }
                else if (lastInput.flags & 28 /* Component */) {
                    lastInput.parentVNode = nextVNode;
                }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate && instance.componentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!isNull(options.afterUpdate)) {
                        options.afterUpdate(nextVNode);
                    }
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput$1 = lastVNode.children;
            var nextInput$1 = lastInput$1;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$1;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined &&
                    !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined &&
                    !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$1 = nextType(nextProps, context);
                if (isInvalid(nextInput$1)) {
                    nextInput$1 = createVoidVNode();
                }
                else if (isStringOrNumber(nextInput$1) && nextInput$1 !== NO_OP) {
                    nextInput$1 = createTextVNode(nextInput$1, null);
                }
                else if (isArray(nextInput$1)) {
                    if (undefined !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                }
                else if (isObject(nextInput$1)) {
                    if (!isNull(nextInput$1.dom)) {
                        nextInput$1 = directClone(nextInput$1);
                    }
                }
                if (nextInput$1 !== NO_OP) {
                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$1;
                    if (nextHooksDefined &&
                        !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            }
            if (nextInput$1.flags & 28 /* Component */) {
                nextInput$1.parentVNode = nextVNode;
            }
            else if (lastInput$1.flags & 28 /* Component */) {
                lastInput$1.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength
        ? nextChildrenLength
        : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = directClone(bEndNode);
    }
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = new Array(bLeft);
        // Mark all nodes as inserted.
        for (i = 0; i < bLeft; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLeft <= 4 || aLeft * bLeft <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex.get(aNode.key);
                    if (!isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLeft === aLength && patched === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLeft) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLeft - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            insertOrAppend(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== -1) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === "o" && attr[1] === "n";
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (skipProps.has(prop) || (hasControlledValue && prop === "value")) {
            return;
        }
        else if (booleanProps.has(prop)) {
            prop = prop === "autoFocus" ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        }
        else if (strictProps.has(prop)) {
            var value = isNullOrUndef(nextValue) ? "" : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        }
        else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === "style") {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === "dangerouslySetInnerHTML") {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces.get(prop), prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (delegatedEvents.has(name)) {
            handleEvent(name, lastValue, nextValue, dom);
        }
        else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
                var linkEvent = nextValue.event;
                if (linkEvent && isFunction(linkEvent)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent(nextValue.data, e);
                    };
                }
                else {
                    if (undefined !== "production") {
                        throwError(("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent."));
                    }
                    throwError();
                }
            }
            else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle[style] =
                    !isNumber(value) || isUnitlessNumber.has(style)
                        ? value
                        : value + "px";
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = "";
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] =
                !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
        }
    }
}
function removeProp(prop, lastValue, dom, nextFlags) {
    if (prop === "value") {
        // When removing value of select element, it needs to be set to null instead empty string, because empty string is valid value for option which makes that option selected
        // MS IE/Edge don't follow html spec for textArea and input elements and we need to set empty string to value in those cases to avoid "null" and "undefined" texts
        dom.value = nextFlags & 2048 /* SelectElement */ ? null : "";
    }
    else if (prop === "style") {
        dom.removeAttribute("style");
    }
    else if (isAttrAnEvent(prop)) {
        handleEvent(prop, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        if (undefined !== "production") {
            if (typeof vNode === "object") {
                throwError(("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + (JSON.stringify(vNode)) + "\"."));
            }
            else {
                throwError(("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
            }
        }
        throwError();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode("");
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleElement(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    dom = documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!isInvalid(children)) {
        if (isStringOrNumber(children)) {
            setTextContent(dom, children);
        }
        else {
            var childrenIsSVG = isSVG === true && vNode.type !== "foreignObject";
            if (isArray(children)) {
                mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
            }
            else if (isVNode(children)) {
                mount(children, dom, lifecycle, context, childrenIsSVG);
            }
        }
    }
    if (!isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute("class", className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!isInvalid(child)) {
            if (child.dom) {
                children[i] = child = directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleComponent(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (isFunction(ref)) {
            ref(instance);
        }
        else {
            if (undefined !== "production") {
                if (isStringOrNumber(ref)) {
                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                }
                else if (isObject(ref) && vNode.flags & 4 /* ComponentClass */) {
                    throwError("functional component lifecycle events are not supported on ES2015 class components.");
                }
                else {
                    throwError(("a bad value for \"ref\" was used on component: \"" + (JSON.stringify(ref)) + "\""));
                }
            }
            throwError();
        }
    }
    var hasDidMount = !isUndefined(instance.componentDidMount);
    var afterMount = options.afterMount;
    if (hasDidMount || !isNull(afterMount)) {
        lifecycle.addListener((function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        }));
    }
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (ref) {
        if (!isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (!isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener((function () { return ref.onComponentDidMount(dom, props); }));
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (isFunction(value)) {
        lifecycle.addListener((function () { return value(dom); }));
    }
    else {
        if (isInvalid(value)) {
            return;
        }
        if (undefined !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
if (undefined !== "production") {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (isUndefined(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._isSVG = isSVG;
    if (!isNullOrUndef(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        if (instance._pendingSetState) {
            var state = instance.state;
            var pending = instance._pendingState;
            if (state === null) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance._pendingSetState = false;
            instance._pendingState = null;
        }
        instance._blockRender = false;
    }
    var childContext;
    if (!isNullOrUndef(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance._childContext = context;
    }
    else {
        instance._childContext = combineFrom(context, childContext);
    }
    if (!isNull(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!isNull(options.afterRender)) {
        options.afterRender(instance);
    }
    if (isArray(input)) {
        if (undefined !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    }
    else if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (isArray(input)) {
        if (undefined !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    }
    else if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== "") {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(""));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, newDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!options.recyclingEnabled || (options.recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = "";
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isInvalid(child)) {
            unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return (nextChildren.length > 0 &&
        !isNullOrUndef(nextChildren[0]) &&
        !isNullOrUndef(nextChildren[0].key) &&
        lastChildren.length > 0 &&
        !isNullOrUndef(lastChildren[0]) &&
        !isNullOrUndef(lastChildren[0].key));
}
function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement("i");
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props &&
        props.dangerouslySetInnerHTML &&
        props.dangerouslySetInnerHTML.__html &&
        isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
        flags = isStatefulComponent(type)
            ? 4 /* ComponentClass */
            : 8 /* ComponentFunction */;
    }
    var vNode = {
        children: children === void 0 ? null : children,
        className: className === void 0 ? null : className,
        dom: null,
        flags: flags,
        key: key === void 0 ? null : key,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
    if (noNormalise !== true) {
        normalize(vNode);
    }
    if (options.createVNode !== null) {
        options.createVNode(vNode);
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (isNull(propsToClone)) {
            props = EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
        var newProps = newVNode.props;
        var newChildren = newProps.children;
        // we need to also clone component children that are in props
        // as the children may also have been hoisted
        if (newChildren) {
            if (isArray(newChildren)) {
                var len = newChildren.length;
                if (len > 0) {
                    var tmpArray = [];
                    for (var i = 0; i < len; i++) {
                        var child = newChildren[i];
                        if (isStringOrNumber(child)) {
                            tmpArray.push(child);
                        }
                        else if (!isInvalid(child) && isVNode(child)) {
                            tmpArray.push(directClone(child));
                        }
                    }
                    newProps.children = tmpArray;
                }
            }
            else if (isVNode(newChildren)) {
                newProps.children = directClone(newChildren);
            }
        }
        newVNode.children = null;
    }
    else if (flags & 3970 /* Element */) {
        var children = vNodeToClone.children;
        var props$1;
        var propsToClone$1 = vNodeToClone.props;
        if (propsToClone$1 === null) {
            props$1 = EMPTY_OBJ;
        }
        else {
            props$1 = {};
            for (var key$1 in propsToClone$1) {
                props$1[key$1] = propsToClone$1[key$1];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props$1, vNodeToClone.key, vNodeToClone.ref, !children);
    }
    else if (flags & 1 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [], len$2 = arguments.length - 2;
    while ( len$2-- > 0 ) _children[ len$2 ] = arguments[ len$2 + 2 ];

    var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className;
        var key = vNodeToClone.key;
        var ref = vNodeToClone.ref;
        if (props) {
            if (props.hasOwnProperty("className")) {
                className = props.className;
            }
            if (props.hasOwnProperty("ref")) {
                ref = props.ref;
            }
            if (props.hasOwnProperty("key")) {
                key = props.key;
            }
        }
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, className, null, !vNodeToClone.props && !props
                ? EMPTY_OBJ
                : combineFrom(vNodeToClone.props, props), key, ref, true);
            var newProps = newVNode.props;
            if (newProps) {
                var newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (isArray(newChildren)) {
                        var len$1 = newChildren.length;
                        if (len$1 > 0) {
                            var tmpArray$1 = [];
                            for (var i$1 = 0; i$1 < len$1; i$1++) {
                                var child = newChildren[i$1];
                                if (isStringOrNumber(child)) {
                                    tmpArray$1.push(child);
                                }
                                else if (!isInvalid(child) && isVNode(child)) {
                                    tmpArray$1.push(directClone(child));
                                }
                            }
                            newProps.children = tmpArray$1;
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = directClone(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children =
                props && !isUndefined(props.children)
                    ? props.children
                    : vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, className, children, !vNodeToClone.props && !props
                ? EMPTY_OBJ
                : combineFrom(vNodeToClone.props, props), key, ref, false);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, key);
        }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
function isVNode(o) {
    return !!o.flags;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (isNumber(key)) {
        key = "." + key;
    }
    if (isNull(vNode.key) || vNode.key[0] === ".") {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!isInvalid(n)) {
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, null);
                }
                else if ((isVNode(n) && n.dom) || (n.key && n.key[0] === ".")) {
                    n = directClone(n);
                }
                if (isNull(n.key) || n.key[0] === ".") {
                    n = applyKey(key, n);
                }
                else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes["$"] === true) {
        nodes = nodes.slice();
    }
    else {
        nodes["$"] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (isInvalid(n) || isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        }
        else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, createTextVNode(n, null)));
        }
        else if ((isVNode(n) && n.dom !== null) ||
            (isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (isArray(children)) {
        return normalizeVNodes(children);
    }
    else if (isVNode(children) && children.dom !== null) {
        return directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
        if (isNullOrUndef(children) && props.hasOwnProperty("children")) {
            vNode.children = props.children;
        }
        if (props.hasOwnProperty("className")) {
            vNode.className = props.className || null;
            delete props.className;
        }
    }
    if (props.hasOwnProperty("ref")) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.hasOwnProperty("key")) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === "svg") {
        return 128 /* SvgElement */;
    }
    else if (type === "input") {
        return 512 /* InputElement */;
    }
    else if (type === "select") {
        return 2048 /* SelectElement */;
    }
    else if (type === "textarea") {
        return 1024 /* TextareaElement */;
    }
    else if (type === "media") {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
        // set default props
        var type = vNode.type;
        var defaultProps = type.defaultProps;
        if (!isNullOrUndef(defaultProps)) {
            if (!props) {
                props = vNode.props = defaultProps; // Create new object if only defaultProps given
            }
            else {
                for (var prop in defaultProps) {
                    if (isUndefined(props[prop])) {
                        props[prop] = defaultProps[prop];
                    }
                }
            }
        }
        if (isString(type)) {
            vNode.flags = getFlagsForElementVnode(type);
            if (props && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
    }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (undefined !== "production") {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function (vNodes) {
            var keyValues = vNodes.map((function (vnode) {
                return vnode.key;
            }));
            keyValues.some((function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    warning("Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:" +
                        item);
                }
                return hasDuplicate;
            }));
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/* tslint:disable:object-literal-sort-keys */
if (undefined !== "production") {
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() { };
    if ((testFunc.name || testFunc.toString()).indexOf("testFn") ===
        -1) {
        warning("It looks like you're using a minified copy of the development build " +
            "of Inferno. When deploying Inferno apps to production, make sure to use " +
            "the production build which skips development warnings and is faster. " +
            "See http://infernojs.org for more details.");
    }
}
var version = "3.9.0";
// we duplicate it so it plays nicely with different module loading systems
var index = {
    EMPTY_OBJ: EMPTY_OBJ,
    NO_OP: NO_OP,
    cloneVNode: cloneVNode,
    createRenderer: createRenderer,
    createVNode: createVNode,
    findDOMNode: findDOMNode,
    getFlagsForElementVnode: getFlagsForElementVnode,
    internal_DOMNodeMap: componentToDOMNodeMap,
    internal_isUnitlessNumber: isUnitlessNumber,
    internal_normalize: normalize,
    internal_patch: patch,
    linkEvent: linkEvent,
    options: options,
    render: render,
    version: version
};

exports['default'] = index;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.NO_OP = NO_OP;
exports.cloneVNode = cloneVNode;
exports.createRenderer = createRenderer;
exports.createVNode = createVNode;
exports.findDOMNode = findDOMNode;
exports.getFlagsForElementVnode = getFlagsForElementVnode;
exports.internal_DOMNodeMap = componentToDOMNodeMap;
exports.internal_isUnitlessNumber = isUnitlessNumber;
exports.internal_normalize = normalize;
exports.internal_patch = patch;
exports.linkEvent = linkEvent;
exports.options = options;
exports.render = render;
exports.version = version;


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map