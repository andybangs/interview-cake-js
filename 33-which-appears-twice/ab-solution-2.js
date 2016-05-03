'use strict'

// 2016-05-03
// O(n) time & O(1) space!

module.exports = function findDuplicate(arr) {
  const dupSum = arr.reduce((a, b) => a + b)
  const n = arr.length - 1
  let nonDupSum = (n * n + n) / 2

  return dupSum - nonDupSum
}
