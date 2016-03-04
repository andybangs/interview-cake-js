'use strict'

// 2016-03-03
// O(n) time and space!

module.exports = function getProductsOfAllIntsExceptAtIndex(arr) {
  let products = []
  let productSoFar = 1

  for (let i = 0; i < arr.length; i++) {
    products[i] = productSoFar
    productSoFar *= arr[i]
  }

  productSoFar = 1

  for (let i = arr.length - 1; i >= 0; i--) {
    products[i] *= productSoFar
    productSoFar *= arr[i]
  }

  return products
}
