'use strict'

// 2016-04-25
// O(n) time and O(1) space

module.exports = function kthToLastNode(k, headNode) {
  var p1 = headNode
  var p2 = headNode

  for (var i = 0; i < k; i++) {
    if (!p1) return null
    p1 = p1.next
  }

  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }

  return p2
}
