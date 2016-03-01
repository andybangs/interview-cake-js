'use strict'

// 2016-03-01
// O(m^2) runtime for m function calls... We can do better.

module.exports = function Queue() {
  let stack1 = []
  let stack2 = []

  function isEmpty(arr) {
    return arr.length === 0
  }

  function enqueue(item) {
    while (!isEmpty(stack2)) {
      stack1.push(stack2.pop())
    }
    stack1.push(item)
  }

  function dequeue() {
    while (!isEmpty(stack1)) {
      stack2.push(stack1.pop())
    }
    return stack2.pop()
  }

  return { enqueue, dequeue }
}
