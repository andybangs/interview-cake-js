'use strict'

// 2016-02-29
// O(n) time & O(1) space... But this func does an in-place sort on its input
// and changes it, instead of creating and returning a new object. Destroying
// the input might cause problems elsewhere in our code.

module.exports = function findDuplicate(arr) {
  let duplicateInt;

  arr.sort((a, b) => a - b)
    .forEach((el, i) => {
      if (el === arr[i + 1]) duplicateInt = el
    })

  return duplicateInt
}
