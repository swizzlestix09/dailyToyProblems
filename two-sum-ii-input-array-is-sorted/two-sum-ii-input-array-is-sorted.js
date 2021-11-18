/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


// var twoSum = function(numbers, target) {
//     let len = numbers.length;
//     let j = 1
    
//     for (let i = 0; i < len; i++) {
//       for (let j = i+1; j < len; j++) {
//         let total = numbers[i] + numbers[j]
//         if ( total === target) 
//           return [i+1, j+1]
//       }
//     }
//     return []
// };

function twoSum(numbers, target) {
  let min = 0;
  let max = numbers.length -1;

  while(min < max) {
    //if number[max] > target; max--
    //if number[min] + number[max] < target - min++
    //if number[min] + number[max] > target - max--
    //if number[min] + number[max] === target - return [min, max]
    if ( (numbers[min] + numbers[max]) > target) {
      max--;
    } else if ( (numbers[min] + numbers[max]) < target)  {
      min++;
    } else if (numbers[min] + numbers[max] === target) {
      return [min+1, max+1]
    }

      
  }
};