/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length 
    let nObj = {}
    for (let i = 0; i < nums.length; i++) {
        nObj[nums[i]] = 1
    }
    console.log(nObj)
    for( let i = 0; i <= nums.length; i++ ) {
        if (!nObj[i]) return i 
    }
    
};