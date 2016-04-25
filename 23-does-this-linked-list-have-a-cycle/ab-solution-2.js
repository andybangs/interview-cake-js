'use strict'

// 2016-04-25
// O(n) time and O(1) space

module.exports = function containsCycle(headNode) {
  var fastRunner = headNode
  var slowRunner = headNode

  while (fastRunner && fastRunner.next) {
    fastRunner = fastRunner.next.next
    slowRunner = slowRunner.next
    if (fastRunner === slowRunner) return true
  }

  return false
}
