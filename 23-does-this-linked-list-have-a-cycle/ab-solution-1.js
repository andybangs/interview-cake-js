'use strict'

// 2016-04-25
// O(n) time and O(n) space

module.exports = function containsCycle(headNode) {
  var seen = {}
  var currentNode = headNode

  while (currentNode.next) {
    var nodeString = currentNode.value

    if (seen.hasOwnProperty(nodeString)) return true

    seen[nodeString] = true
    currentNode = currentNode.next
  }

  return false
}
