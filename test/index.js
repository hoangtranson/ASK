import { assert, expect } from 'chai';
import ASK from '../src/index';

describe('ASK module', () => {
  let _arr, _obj, _string, _date, _regExp, _function, _boolean, _number, _null, _undefined;
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
});
