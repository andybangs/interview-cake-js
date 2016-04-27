'use strict'

// 2016-04-27
// O(n) time and O(n) space
// This recursive variation prints the k to last node, but returns its index
// because we can't pass back a node and a counter using normal return
// statements

module.exports = function kthToLastNode(k, headNode) {
  if (!headNode) return 0
  var index = kthToLastNode(k, headNode.next) + 1
  if (index === k) console.log(headNode.value)
  return index
}
