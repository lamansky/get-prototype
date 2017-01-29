'use strict'

const assert = require('assert')
const getPrototype = require('.')

describe('getPrototype', function () {
  it('should return the prototype of a function', function () {
    function Test () {}
    assert.strictEqual(getPrototype(Test), Test.prototype)
  })

  it('should return the prototype of a class', function () {
    class Test {}
    assert.strictEqual(getPrototype(Test), Test.prototype)
  })

  it('should return an object as-is', function () {
    class Test {}
    assert.strictEqual(getPrototype(Test.prototype), Test.prototype)
  })

  it('should throw an error if the argument is not a function or object', function () {
    assert.throws(() => { getPrototype('not a function or object') })
  })

  it('should throw an error if the argument is null', function () {
    assert.throws(() => { getPrototype(null) })
  })

  it('should throw an error if the function’s prototype is null', function () {
    function Test () {}
    Test.prototype = null
    assert.throws(() => { getPrototype(Test) })
  })

  it('should throw an error if the function’s prototype is not an object', function () {
    function Test () {}
    Test.prototype = 'not an object'
    assert.throws(() => { getPrototype(Test) })
  })
})
