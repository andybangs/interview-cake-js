'use strict'

// 2016-05-03
// O(n) time & O(n) space

module.exports = function findDuplicate(arr) {
  const seen = {}

  for (let i = 0; i < arr.length; i++) {
    if (seen.hasOwnProperty(arr[i].toString())) return arr[i]
      seen[arr[i].toString()] = true
  }
  
  return false
}
