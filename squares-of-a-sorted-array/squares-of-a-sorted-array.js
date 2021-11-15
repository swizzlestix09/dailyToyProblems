/**
 * @param {number[]} nums
 * @return {number[]}
 */

// var sortedSquares = function(nums) {
//     let squares = [];
//     let min = null; 
//     let max = 0; 
//     let j = 0;
    
//     nums.forEach(num => {
//         let sq = Math.pow(num, 2)
//         if (min === null || min > sq) {
//             min = num
//         }
//         if (max < sq) {
//             max = sq
//         }
//         squares.push(sq)
//     })
    
//     return squares.sort( (a, b) => a-b);
// };

const sorted = (arr) => {
  let isSorted = 1;
  
  while(isSorted > 0) {
    isSorted = 0;
    let temp;
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        isSorted++;
      }
    }
  }
  
  return arr;
};

var sortedSquares = function(nums) {
    let squares = [];
    let min = null; 
    let max = 0; 
    let j = 0;
    
    nums.forEach(num => {
        let sq = Math.pow(num, 2)
        squares.push(sq)
    })
    
  return sorted(squares); 
};