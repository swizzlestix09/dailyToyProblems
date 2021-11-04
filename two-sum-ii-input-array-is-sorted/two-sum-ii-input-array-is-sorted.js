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
    for(let start = 0, end = numbers.length-1; start < end;){
        let sum = numbers[start] + numbers[end]
        if(sum === target)return [++start, ++end]
        else sum > target ? end-- : start++
    }
};