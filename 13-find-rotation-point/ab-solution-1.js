'use strict'

// 2016-04-26
// O(n) time and O(1) space

module.exports = function findRotationPoint(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return i + 1
  }
}
