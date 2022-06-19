/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let indexToExclude = 0;
  let products = [];
  
  while(indexToExclude < nums.length) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
      if (i !== indexToExclude) {
        product = product * nums[i]
      }
    }
    products.push(product)
    indexToExclude++;
  }
  
  return products; 
};