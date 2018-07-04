import { assert, expect } from 'chai';
import ASK from '../src/index';

describe('ASK module PASS cases', () => {
  let _arr, _obj, _string, _date, _regExp, _function, _boolean, _number, _null, _undefined, _generator, _map, _weekMap;
  beforeEach( () => {
    _arr = [];
    _obj = {};
    _string = '';
    _date = new Date();
    _regExp = /[0-9]/gi;
    _function = () => true;
    _boolean = true;
    _number = 0;
    _null = null;
    _undefined = undefined;
    _generator = function* (){};
    _map = new Map();
    _weekMap = new WeakMap();
  })

  it('ASK.isArray([]) => true', () => {
    expect(ASK.isArray(_arr)).to.equal(true);
  });

  it('ASK.isObject({}) => true', () => {
    expect(ASK.isObject(_obj)).to.equal(true);
  });

  it('ASK.isString("") => true', () => {
    expect(ASK.isString(_string)).to.equal(true);
  });

  it('ASK.isDate([new Date()]) => true', () => {
    expect(ASK.isDate(_date)).to.equal(true);
  });

  it('ASK.isRegExp(/[0-9]/gi) => true', () => {
    expect(ASK.isRegExp(_regExp)).to.equal(true);
  });

  it('ASK.isFunction(() => true) => true', () => {
    expect(ASK.isFunction(_function)).to.equal(true);
  });

  it('ASK.isBoolean(true) => true', () => {
    expect(ASK.isBoolean(_boolean)).to.equal(true);
  });

  it('ASK.isNumber(0) => true', () => {
    expect(ASK.isNumber(_number)).to.equal(true);
  });

  it('ASK.isNull(null) => true', () => {
    expect(ASK.isNull(_null)).to.equal(true);
  });

  it('ASK.isUndefined(undefined) => true', () => {
    expect(ASK.isUndefined(_undefined)).to.equal(true);
  });

  it('ASK.isGeneratorFn(function* (){}) => true', () => {
    expect(ASK.isGeneratorFn(_generator)).to.equal(true);
  });

  it('ASK.isMap(new Map()) => true', () => {
    expect(ASK.isMap(_map)).to.equal(true);
  });

  it('ASK.isWeakMap(new WeakMap()) => true', () => {
    expect(ASK.isWeakMap(_weekMap)).to.equal(true);
  });
});


describe('ASK module FAIL cases', () => {
  let _arr, _obj, _string, _date, _regExp, _function, _boolean, _number, _null, _undefined, _generator, _map, _weekMap;
  beforeEach( () => {
    _arr = {};
    _obj = [];
    _string = false;
    _date = 1;
    _regExp = 'a';
    _function = {};
    _boolean = 1;
    _number = 'a';
    _null = 1;
    _undefined = null;
    _generator = function (){};
    _map = {};
    _weekMap = new Set();
  })

  it('ASK.isArray({}) => false', () => {
    expect(ASK.isArray(_arr)).to.equal(false);
  });

  it('ASK.isObject([]) => false', () => {
    expect(ASK.isObject(_obj)).to.equal(false);
  });

  it('ASK.isString(false) => false', () => {
    expect(ASK.isString(_string)).to.equal(false);
  });

  it('ASK.isDate(1) => false', () => {
    expect(ASK.isDate(_date)).to.equal(false);
  });

  it('ASK.isRegExp("a") => false', () => {
    expect(ASK.isRegExp(_regExp)).to.equal(false);
  });

  it('ASK.isFunction({}) => false', () => {
    expect(ASK.isFunction(_function)).to.equal(false);
  });

  it('ASK.isBoolean(1) => false', () => {
    expect(ASK.isBoolean(_boolean)).to.equal(false);
  });

  it('ASK.isNumber("a") => false', () => {
    expect(ASK.isNumber(_number)).to.equal(false);
  });

  it('ASK.isNull(1) => false', () => {
    expect(ASK.isNull(_null)).to.equal(false);
  });

  it('ASK.isUndefined(null) => false', () => {
    expect(ASK.isUndefined(_undefined)).to.equal(false);
  });

  it('ASK.isGeneratorFn(function (){}) => false', () => {
    expect(ASK.isGeneratorFn(_generator)).to.equal(false);
  });

  it('ASK.isMap(new Map()) => false', () => {
    expect(ASK.isMap(_map)).to.equal(false);
  });

  it('ASK.isWeakMap(new WeakMap()) => false', () => {
    expect(ASK.isWeakMap(_weekMap)).to.equal(false);
  });
});
