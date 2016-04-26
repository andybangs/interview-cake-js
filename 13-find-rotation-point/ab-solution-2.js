'use strict'

// 2016-04-26
// O(lg n) time and O(1) space, just like binary search.

module.exports = function findRotationPoint(arr) {
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((end - start) / 2)


  while (start < end) {
    if (arr[mid] < arr[mid - 1]) return mid

    if (arr[mid] > arr[start]) start = mid
    else end = mid

    mid = Math.floor((end - start) / 2)
  }

  // input arr is not rotated
  return 0
}
