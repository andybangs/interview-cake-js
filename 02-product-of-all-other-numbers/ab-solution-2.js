'use strict'

// 2016-03-03
// O(n) time, but use of space can be improved.

module.exports = function getProductsOfAllIntsExceptAtIndex(arr) {
  let productsBeforeIndex = []
  let productsAfterIndex = []
  let combinedProducts = []
  let productSoFar = 1

  for (let i = 0; i < arr.length; i++) {
    productsBeforeIndex[i] = productSoFar
    productSoFar *= arr[i]
  }

  productSoFar = 1

  for (let i = arr.length - 1; i >= 0; i--) {
    productsAfterIndex[i] = productSoFar
    productSoFar *= arr[i]
  }

  for (let i = 0; i < arr.length; i++) {
    combinedProducts[i] = productsBeforeIndex[i] * productsAfterIndex[i]
  }

  return combinedProducts
}
