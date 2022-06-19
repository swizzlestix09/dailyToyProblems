/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0; 
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
            nums[++j] = nums[i];
        }
    }
    return ++j;
};


    

    //create new array of same length 
    //have two variable set to 0 
    //if nums[i] !== nums[i+1]
    //place into new array at j , j++
    //else dont do anything