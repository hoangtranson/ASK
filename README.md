
A super-simple &lt;1KB type checking module for JavaScript that returns a `Boolean` for each type check.

```js
import ASK from '../src/index';

ASK.isArray([]); // true
ASK.isObject({}); // true
ASK.isString(''); // true
ASK.isDate(new Date()); // true
ASK.isRegExp(/test/i); // true
ASK.isFunction(function () {}); // true
ASK.isBoolean(true); // true
ASK.isNumber(1); // true
ASK.isNull(null); // true
ASK.isUndefined(); // true
ASK.isMap(new Map()) // true
ASK.isWeakMap(new WeakMap()) // true
ASK.isGeneratorFn(function* (){}) // true
ASK.isEmpty('') // true
ASK.isSet(new Set()) // true
ASK.isWeakSet(new WeakSet()) // true
```

## Installing with npm

```
  npm i what-data-type
```

## Release history
- 1.3.0
  - Add method check empty string
  - Add method check set
  - Add method check weakset
- 1.2.1
  - Updated new function description
- 1.2.0
  - Refractor code
  - Added method check isMap
  - Added method check isWeakMap
  - Added method check isGeneratorFn
- 1.1.0
  - Updated Readme.md
- 1.0.0
  - Initial release
