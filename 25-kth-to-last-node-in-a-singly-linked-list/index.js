'use strict'

const kthToLastNode = require('./ab-solution-1')

/**
 * You have a linked list and want to find the kth to last node.
 * Write a function kthToLastNode() that takes an integer k and the headNode of
 * a singly linked list, and returns the kth to last node in the list.
 *
 * For example:
 *
 * function LinkedListNode(value) {
 *   this.value = value;
 *   this.next = null;
 * }
 *
 * var a = new LinkedListNode("Angel Food");
 * var b = new LinkedListNode("Bundt");
 * var c = new LinkedListNode("Cheese");
 * var d = new LinkedListNode("Devil's Food");
 * var e = new LinkedListNode("Eccles");
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(3, a));
