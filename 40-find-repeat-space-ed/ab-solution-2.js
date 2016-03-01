'use strict'

// 2016-02-29
// O(n^2) time & O(1) space... Too slow!

module.exports = function findDuplicate(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (j !== i && arr[j] === arr[i]) return arr[j];
    }
  }
}
