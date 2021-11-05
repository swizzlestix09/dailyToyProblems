/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var howMany = {};
    for (var i = 0; i < nums.length; i++) {
        howMany[nums[i]] ? howMany[nums[i]] ++ : howMany[nums[i]] = 1
    }
    
    for (var num in howMany ) {
        if (howMany[num] === 1) {
            return parseInt(num)
        }
    }
    return 0
};