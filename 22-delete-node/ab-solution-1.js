'use strict'

// 2016-04-25
// O(1) time and O(1) space

// Side effects / limitations:
// 1. Can't delete the last node of the linked list
// 2. References elsewhere to the deleted node will now point to the next node
// 3. If there are pointers to the input node's original next node, those
//    pointers now point to a "dangling" node

module.exports = function deleteNode(node) {
  node.value = node.next.value
  node.next = node.next.next
}
