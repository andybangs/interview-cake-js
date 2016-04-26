'use strict'

const reverseLinkedList = require('./ab-solution-1')

/**
 * Hooray! It's opposite day. Linked lists go the opposite way today.
 * Write a function for reversing a linked list. Do it in-place.
 *
 * Your function will have one input: the head of the list.
 *
 * Your function should return the new head of the list.
 *
 * Here's a sample linked list node class:
 *
 * function LinkedListNode(value) {
 *   this.value = value;
 *   this.next = null;
 * }
 */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log('a', a);
console.log(reverseLinkedList(a));

var e = new LinkedListNode('E');
console.log(reverseLinkedList(e));

console.log(reverseLinkedList());
