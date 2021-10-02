/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //need the length of the number 
    //need to see if array has all the numbers between 0 and length 
    //put numbers in object and increment 
    //check object if any numbers === 0 push to return array 
    var numbers = {}
    for (var i = 0; i <= nums.length; i++) {
        numbers[i] = 0;
    }
    console.log(nums, numbers)
    for (var n in numbers) {
        if (nums.indexOf(parseInt(n)) === -1) return n 
    }

};