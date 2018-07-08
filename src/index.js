import { getObjectType } from './utils';

const WHAT_DATA_TYPE = (() => {
  const isArray = agrs => (typeof Array.isArray === 'function' && Array.isArray(agrs)) || getObjectType(agrs) === '[object Array]';
  const isObject = agrs => agrs !== null && typeof agrs === 'object' && Object.getPrototypeOf(agrs) === Object.prototype;
  const isString = agrs => typeof agrs === 'string' || getObjectType(agrs) === '[object String]';
  const isDate = agrs => getObjectType(agrs) === '[object Date]';
  const isRegExp = agrs => getObjectType(agrs) === '[object RegExp]';
  const isFunction = fn => getObjectType(fn) === '[object Function]' || getObjectType(fn) === '[object AsyncFunction]';
  const isBoolean = agrs => agrs === true || agrs === false || getObjectType(agrs) === '[object Boolean]';
  const isNumber = agrs => typeof agrs === 'number' || getObjectType(agrs) === '[object Number]';
  const isNull = agrs => agrs === null;
  const isUndefined = agrs => typeof agrs === 'undefined';
  const isMap = args => getObjectType(args) === '[object Map]';
  const isWeakMap = args => getObjectType(args) === '[object WeakMap]';
  const isGeneratorFn = (fn) => {
    if (typeof fn !== 'function') {
      return false;
    }

    const IsGeneratorFunction = fn.constructor && fn.constructor.name === 'GeneratorFunction';
    const IsGeneratorFunctionObj = Object.prototype.toString.call(fn) === '[object GeneratorFunction]';
    return IsGeneratorFunction || IsGeneratorFunctionObj;
  };
  const isEmpty = args => args === '';
  const isSet = args => getObjectType(args) === '[object Set]';
  const isWeakSet = args => getObjectType(args) === '[object WeakSet]';

  return {
    isArray,
    isObject,
    isString,
    isDate,
    isRegExp,
    isFunction,
    isBoolean,
    isNumber,
    isNull,
    isUndefined,
    isGeneratorFn,
    isMap,
    isWeakMap,
    isEmpty,
    isSet,
    isWeakSet
  };
})();

export default WHAT_DATA_TYPE;
