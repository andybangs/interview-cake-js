'use strict'

const deleteNode = require('./ab-solution-1')

/**
 * Delete a node from a singly-linked list, given only a variable pointing to
 * that node.
 *
 * The input could, for example, be the variable b below:
 *
 * function LinkedListNode(value) {
 *   this.value = value;
 *   this.next = null;
 * }
 *
 * var a = new LinkedListNode('A');
 * var b = new LinkedListNode('B');
 * var c = new LinkedListNode('C');
 *
 * a.next = b;
 * b.next = c;
 *
 * deleteNode(b);
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

deleteNode(b);

console.log(a);
