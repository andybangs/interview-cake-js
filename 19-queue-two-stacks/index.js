'use strict'

const Queue = require('./ab-solution-2')

/**
 * Implement a queue with 2 stacks. Your queue should have an enqueue and a
 * dequeue function and it should be "first in first out" (FIFO).
 *
 * Optimize for the time cost of mm function calls on your queue. These can be
 * any mix of enqueue and dequeue calls.
 *
 * Assume you already have a stack implementation and it gives O(1)O(1) time
 * push and pop.
 */

const queue = Queue();

console.log('queue.enqueue(1)', queue.enqueue(1))
console.log('queue.enqueue(2)', queue.enqueue(2))

console.log('queue.dequeue()', queue.dequeue())   // 1

console.log('queue.enqueue(3)', queue.enqueue(3))

console.log('queue.dequeue()', queue.dequeue())   // 2
console.log('queue.dequeue()', queue.dequeue())   // 3
