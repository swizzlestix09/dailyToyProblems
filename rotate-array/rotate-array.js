/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
let reverse = (start = 0, end = nums.length - 1 ) => {
    if (nums.length === 1) return nums
    while (start <= end) {

            let front = nums[start];
            let back = nums[end];
            
            nums[start] = back;
            nums[end] = front;
            start++;
            end--;
    }
}
 if ( k > nums.length - 1) k = k % nums.length
     reverse()
     reverse(k)
     reverse(0, k-1)
};