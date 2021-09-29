/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
  let result = new Array(nums.length);
  let odd = 1;
  let even = 0;

  nums.forEach( (number) => {
      if (number % 2 !== 0 ) {
          result[odd] = number;
          odd+=2;
      }
      if (number % 2 === 0 ) {
          result[even] = number;
          even+=2
      }

  })

  return result;
};