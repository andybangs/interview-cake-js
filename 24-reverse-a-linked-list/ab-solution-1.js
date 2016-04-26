'use strict'

// 2016-04-25
// O(n) time and O(1) space

module.exports = function reverseLinkedList(headNode) {
  var currentNode = headNode
  var nextNode = null
  var prevNode = null

  while (currentNode) {
    nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = nextNode
  }

  return prevNode
}
