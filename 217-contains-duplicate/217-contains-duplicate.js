/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let contents = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (!contents[nums[i]]) {
            contents[nums[i]] = 1;
        } else {
            return true 
        }
    }
   
    return false
};
