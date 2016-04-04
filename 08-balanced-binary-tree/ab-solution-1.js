'use strict'

// 2016-04-04
// O(n) time and O(n) space.

module.exports = function isBalanced(treeRoot) {
  const depths = []
  const nodesAndDepths = []

  nodesAndDepths.push([treeRoot, 0])

  while (nodesAndDepths.length) {
    let nodeAndDepth = nodesAndDepths.pop()
    let node = nodeAndDepth[0]
    let depth = nodeAndDepth[1]

    if (!node.left && !node.right) {
      if (depths.indexOf(depth) === -1) {
        depths.push(depth)

        if (depths.length > 2 ||
          depths.length === 2 && Math.abs(depths[1] - depths[0]) > 1
        ) {
          return false
        }
      }
    } else {
      node.left && nodesAndDepths.push([node.left, depth + 1])
      node.right && nodesAndDepths.push([node.right, depth + 1])
    }
  }

  return true
}
