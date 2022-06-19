/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let current = Math.max(maxSum, 0)
    
    for (let i = 1; i < nums.length ;i++) {
        current += nums[i];
        maxSum = Math.max(maxSum, current)
        current = Math.max(current, 0)
    }
    return maxSum
};
