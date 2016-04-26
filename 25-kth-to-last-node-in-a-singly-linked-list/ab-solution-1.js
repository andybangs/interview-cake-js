'use strict'

// 2016-04-25
// O(n) time and O(1) space

module.exports = function kthToLastNode(k, headNode) {
  var currentNode = headNode
  var length = 0
  var count

  while (currentNode) {
    length++
    currentNode = currentNode.next
  }

  currentNode = headNode
  count = length - k

  while (count > 0) {
    currentNode = currentNode.next
    count--
  }

  return currentNode
}
