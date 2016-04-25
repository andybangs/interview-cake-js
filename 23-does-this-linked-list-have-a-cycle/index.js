'use strict'

const containsCycle = require('./ab-solution-2')

/**
 * You have a singly-linked list ↴ and want to check if it contains a cycle.
 * A singly-linked list is built with nodes, where each node has:
 * - node.next—the next node in the list.
 * - node.data—the data held in the node. For example, if our linked list stores
 *   people in line at the movies, node.data might be the person's name.
 *
 * For example:
 *
 * function LinkedListNode(value) {
 *   this.value = value;
 *   this.next = null;
 * }
 *
 * A cycle occurs when a node’s next points back to a previous node in the list.
 * The linked list is no longer linear with a beginning and end—instead, it
 * cycles through a loop of nodes.
 *
 * Write a function containsCycle() that takes the first node in a singly-linked
 * list and returns a boolean indicating whether the list contains a cycle.
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

console.log(containsCycle(a));  // false

var d = new LinkedListNode('D');
var e = new LinkedListNode('E');
var f = new LinkedListNode('F');
var g = new LinkedListNode('G');

d.next = e;
e.next = f;
f.next = g;
g.next = d;

console.log(containsCycle(d));  // true

var h = new LinkedListNode('H');
var i = new LinkedListNode('I');
var j = new LinkedListNode('J');
var k = new LinkedListNode('K');
var l = new LinkedListNode('L');

h.next = i;
i.next = j;
j.next = i;
k.next = l;

console.log(containsCycle(h));  // true
