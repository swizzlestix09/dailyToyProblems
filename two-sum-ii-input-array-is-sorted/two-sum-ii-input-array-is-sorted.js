/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(numbers, target) {
    let len = numbers.length;
    let j = 1
    
    for (let i = 0; i < len; i++) {
      for (let j = i+1; j < len; j++) {
        let total = numbers[i] + numbers[j]
        if ( total === target) 
          return [i+1, j+1]
      }
    }
    return []
};