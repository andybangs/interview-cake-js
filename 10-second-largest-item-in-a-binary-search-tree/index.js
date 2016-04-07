'use strict'

const findSecondLargest = require('./ab-solution-1')

/**
 * Write a function to find the 2nd largest element in a binary search tree.
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

const testTree1 = new BinaryTreeNode(5)
testTree1.insertLeft(3)
testTree1.insertRight(7)
testTree1.left.insertLeft(2)
testTree1.left.insertRight(4)
testTree1.right.insertLeft(6)
testTree1.right.insertRight(8)

const testTree2 = new BinaryTreeNode(5)
testTree2.insertLeft(3)
testTree2.left.insertLeft(2)
testTree2.left.insertRight(4)
testTree2.insertRight(90)
testTree2.right.insertLeft(85)

console.log(findSecondLargest(testTree1))   // 7
console.log(findSecondLargest(testTree2))   // 4
