'use strict'

// 2016-03-09
// O(n) time and O(n) additional space.

module.exports = function findUnique(arr) {
  const count = {}

  arr.forEach(id => {
    if (count[id]) count[id]++
    else count[id] = 1
  })

  for (let id in count) {
    if (count.hasOwnProperty(id) && count[id] === 1) return id
  }

  throw new Error('no unique ids')
}
