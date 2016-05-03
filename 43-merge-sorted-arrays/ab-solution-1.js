'use strict'

// 2016-05-03
// O(n) time and space

module.exports = function mergeArrays(arr1, arr2) {
  const returnArr = []
  let p1 = 0
  let p2 = 0

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      returnArr.push(arr1[p1])
      p1++
    } else {
      returnArr.push(arr2[p2])
      p2++
    }
  }

  while (p1 < arr1.length) {
    returnArr.push(arr1[p1])
    p1++
  }

  while (p2 < arr2.length) {
    returnArr.push(arr2[p2])
    p2++
  }

  return returnArr
}
