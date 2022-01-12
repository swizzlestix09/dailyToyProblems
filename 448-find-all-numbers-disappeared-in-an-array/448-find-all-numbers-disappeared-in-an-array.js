/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numbers = new Set()
    let missing = []
    
    for (let i = 0; i < nums.length; i++) {
        numbers.add(nums[i])
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!numbers.has(i)) {
            missing.push(i)
        }
    }
    
   
    return missing
};