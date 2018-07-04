function type() {
  return Object.prototype.toString.call(this).slice(8, -1);
}

const WHAT_DATA_TYPE = (() => {
  const CHECKLIST = {};

  const TYPES = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

  for (let i = 0; i < TYPES.length; i += 1) {
    CHECKLIST[`is${TYPES[i]}`] = (function (self) {
      return function (ele) {
        return type.call(ele) === self;
      };
    }(TYPES[i]));
  }
  return CHECKLIST;
})();

export default WHAT_DATA_TYPE;
