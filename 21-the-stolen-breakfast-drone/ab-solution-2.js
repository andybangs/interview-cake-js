'use strict'

// 2016-03-09
// O(n) time and O(1) space.

module.exports = function findUnique(arr) {
  let uniqId = 0

  arr.forEach(id => uniqId ^= id)

  return uniqId;
}
