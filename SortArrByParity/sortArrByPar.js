/**Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.
Example 1:
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:
Input: nums = [2,3]
Output: [2,3]

Constraints:
2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000

 * @param {number[]} nums
 * @return {number[]}
 *We take an array, and create a new empty array with the same length as the array passed in. Two variables are initialized, one for the odd indicies and one for even. We then iterate through the array, determining whether or not the number we're on is odd or even. if its odd, store the number in the array at the indicies stored in the variable, then increment by 2. Same for even, returning array at the end of this operation.
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

module.exports = sortArrayByParityII;