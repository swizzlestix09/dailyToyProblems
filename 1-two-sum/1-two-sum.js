/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let objOfNums = nums.reduce( (acc, num, i) => {
        acc[num] = i
        return acc
    }, {})

    for ( let i = 0; i < nums.length; i++ ) {
        let diff = target - nums[i]
        if (objOfNums[diff] && objOfNums[diff] !== i ) {
            return [objOfNums[diff], i]
        }
    }
    
};

//make an object with each value in the array 
//iterate over array 
//gather the difference of the target - num[i]
//if difference exists in object 
//return both in an array 
//will always have an match 