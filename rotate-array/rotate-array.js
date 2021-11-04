/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => {
    let [start, count] = [0, 0];
    while (count < nums.length) {
        let [current, prev] = [start, nums[start]];
        do {
            current = (current + k) % nums.length;
            [nums[current], prev] = [prev, nums[current]];
            count++;
        } while (current !== start)
        start++
    }
};