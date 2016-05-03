'use strict'

// 2016-05-03
// O(n lg n) time and O(n) space

module.exports = function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b)
}
