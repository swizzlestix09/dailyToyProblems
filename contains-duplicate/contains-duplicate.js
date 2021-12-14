/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //create an object
    let contents = {};
    //create for loop 
    for (let i = 0; i < nums.length; i++) {
        if (!contents[nums[i]]) {
            contents[nums[i]] = 1;
        } else {
            return true 
        }
    }
    //if not in object add 
    //if is in objects return true 
    
    //return false on bottom 
    return false
};