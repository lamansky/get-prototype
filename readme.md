# get-prototype

* When passed a function, returns its prototype.
* Throws an error if the prototype is null.
* When passed an object, assumes it’s a prototype and returns it as-is.

Packaged as a [Node.js](https://nodejs.org/en/) module.

## Installation

```
npm install get-prototype --save
```

## Usage

```javascript
const getPrototype = require('get-prototype')
class Test {}
getPrototype(Test) === Test.prototype // true
getPrototype(Test.prototype) === Test.prototype // true
```
