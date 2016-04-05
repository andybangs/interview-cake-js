'use strict'

// 2016-04-05
// O(n) time and O(n) additional space, where n is the number of nodes in the
// tree. Additional space is O(lg n) if the tree is balanced.

module.exports = function isBST(rootNode) {
  const nodeObjs = []

  nodeObjs.push({ node: rootNode , lowerBound: -Infinity, upperBound: Infinity })

  while (nodeObjs.length) {
    const nodeObj = nodeObjs.pop()
    const node = nodeObj.node
    const lowerBound = nodeObj.lowerBound
    const upperBound = nodeObj.upperBound

    if (node.value < lowerBound || node.value > upperBound) {
      return false
    } else {
      if (node.left) {
        nodeObjs.push({ node: node.left , lowerBound, upperBound: node.value })
      }

      if (node.right) {
        nodeObjs.push({ node: node.right, lowerBound: node.value, upperBound })
      }
    }
  }

  return true
}
