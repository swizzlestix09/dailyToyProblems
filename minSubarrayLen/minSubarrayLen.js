/*minSubarrayLen - Colt Steele - DS & A course
 * function should return the minimal length of a contigous subarray which sums up to or greater than the given target. if there isnt one return 0.
 * I - array of postivie ints and a target interger
 * O - amount of elements inside array that is greater than or equal to target || 0
 * C - O(N) time - O(1) space
 * E - if array is empty,
 */

// let arrSz = 1;
// let sum = 0;

// while (arrSz < array.length) {
//   for (let i = 0; i < arrSz; i++) {
//     sum += array[i];
//   }

//   for (let i = arrSz; i < array.length; i++) {
//     sum = sum - array[i - arrSz] + array[i];
//     if (sum >= target) {
//       return arrSz;
//     }
//   }
//   arrSz++;
// }
// return 0;

const minSubarrayLen = (nums, sum) => {
  let total= 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};



console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
