'use strict'

// 2016-04-06

function findLargest(rootNode) {
  let currentNode = rootNode

  while (currentNode) {
    if (!currentNode.right) return currentNode.value
    currentNode = currentNode.right
  }
}

// O(h) time, where h is the height of the tree and O(1) space.
module.exports = function findSecondLargest(rootNode) {
  if (!rootNode.left && !rootNode.right) {
    return new Error('There is only one node in this tree.')
  }

  let currentNode = rootNode

  while (currentNode) {
    if (currentNode.left && !currentNode.right) {
      return findLargest(currentNode.left)
    }

    if (currentNode.right &&
      !currentNode.right.left &&
      !currentNode.right.right
    ) {
      return currentNode.value
    }

    currentNode = currentNode.right
  }
}
