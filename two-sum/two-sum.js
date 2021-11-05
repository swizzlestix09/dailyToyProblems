/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     var sum = 0; 
//     var placeholder = 0
//     var len = nums.length
//     while (placeholder < len - 1) {
//         var i = placeholder++;
//         for ( i; i <= len; i++) {
//             var secondary = nums[i];
//             if (target === (secondary + nums[placeholder]) ){
//                 console.log(i, placeholder)
//             return [i, placeholder]
//             }
                
//         }
//       placeholder++;  
//     }
// };

var twoSum = (array, target) => {

  var indicies = [];

  for (var i = 0; i < array.length; i++) {
    var firstNum = array[i]
    for (var j = i + 1; j < array.length; j++) {
      var secondNum = array[j];
      if (firstNum + secondNum === target)
      indicies.push(i, j)
    }
  }

  return indicies
};
