/* maxSubArraySum - Colt Steele - DS & A course
 * given an array of intergers and a num, write function which
 * finds the maximum sum of a subarray with the length of the
 * number passed to the function. Subarray must consist of consecutive
 * intergers from array.
 * I -array, number of elements of subarray
 * O - number of max total of subarray
 * C - always numbers, O(N)
 * E - negatives, empty array, if array is shorter than nums
*/

const maxSubarraySum = (arr, nums) => {

  if (arr.length < nums) return null;

  let maxTotal, total1, total = 0;
  for (let i = 0; i < nums; i++) {
    total += arr[i];
  }
  maxTotal = total;

  for (let i = nums; i < arr.length; i++) {
    total = (total - arr[i-nums]) + arr[i];

    maxTotal = Math.max(maxTotal, total);
  }
  return maxTotal;
};


module.exports = maxSubarraySum;