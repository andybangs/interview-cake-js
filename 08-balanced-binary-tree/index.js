'use strict'

const isBalanced = require('./ab-solution-1')

/**
 * Write a function to see if a binary tree is "superbalanced" (a new tree
 * property we just made up).
 *
 * A tree is "superbalanced" if the difference between the depths of any two
 * leaf nodes is no greater than one.
 */

function BinaryTreeNode(value) {
  this.value = value
  this.left  = null
  this.right = null
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value)
  return this.left
}

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value)
  return this.right;
}

const testTree1 = new BinaryTreeNode(true)
testTree1.insertLeft(true)
testTree1.insertRight(true)
testTree1.right.insertLeft(true)
testTree1.right.left.insertLeft(true)

const testTree2 = new BinaryTreeNode(true)
testTree2.insertLeft(true)
testTree2.insertRight(true)
testTree2.left.insertLeft(true)
testTree2.left.insertRight(true)
testTree2.right.insertLeft(true)
testTree2.right.insertRight(true)

console.log(isBalanced(testTree1))   // false
console.log(isBalanced(testTree2))   // true
