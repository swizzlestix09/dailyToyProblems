// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// var twoSum = (array, target) => {

//   var indicies = [];

//   for (var i = 0; i < array.length; i++) {
//     var firstNum = array[i]
//     //if ( typeof firstNum !== 'Number') continue;
//     for (var j = i + 1; j < array.length; j++) {
//       var secondNum = array[j];
//       if (firstNum + secondNum === target)
//       indicies.push(i, j)
//     }
//   }

//   return indicies
// };

var twoSum = (array, target) => {
  if (target < 0) {
    target = Math.abs(target);
  }
  var nums = {}
  var indicies = [];
  for (var i = 0; i < array.length; i++) {
    nums[Math.abs(array[i])] = i;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = Math.abs(array[i]);
    }
      var difference = target - array[i];
      console.log(difference, nums)
      if (nums[difference] && i !== nums[difference]) {
        indicies.push(i, nums[difference])
        return indicies;
      }
  }
  return indicies;

}
console.log(twoSum([1, 5, 9, 76, 32, 3, 8, 9], 35)) //[4, 5]
console.log(twoSum([1, 5, 9, 76, 32, 3, 8, 9], 100)) // []
console.log(twoSum([2,7,11,15], 9)) //[0, 1]
console.log(twoSum([-1,-2,-3,-4,-5], -8)); // [2,4]
console.log(twoSum([1,3,4,2], 6)) //[2,3]
console.log(twoSum([2,1,9,4,4,56,90,3], 8)) //[3,4]
console.log(twoSum([-3,4,3,90], 0)) //[0, 2]