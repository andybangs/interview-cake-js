'use strict'

// 2016-03-01
// O(m) runtime for m function calls!

module.exports = function Queue() {
  let inStack = []
  let outStack = []

  function isEmpty(arr) {
    return arr.length === 0
  }

  function enqueue(item) {
    inStack.push(item)
  }

  function dequeue() {
    if (isEmpty(outStack)) {
      while (!isEmpty(inStack)) {
        outStack.push(inStack.pop())
      }
    }
    return outStack.pop()
  }

  return { enqueue, dequeue }
}
