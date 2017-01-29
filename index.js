'use strict'

const isObject = require('is-object')

/**
 * Validates and returns a function’s prototype.
 * @param  {function|object} func A function or a prototype object.
 * @return {object} A prototype object.
 */
module.exports = function getPrototype (func) {
  if (typeof func === 'function') {
    if (!isObject(func.prototype)) {
      throw new Error('`getPrototype()` was passed a function that has no prototype object')
    }
    return func.prototype
  } else if (isObject(func)) {
    // If it’s an object, assume it’s the prototype
    return func
  }

  throw new TypeError('The argument for `getPrototype()` must be a function or an object')
}
