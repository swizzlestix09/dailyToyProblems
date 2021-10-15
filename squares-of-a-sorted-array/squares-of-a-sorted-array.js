/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    let squares = [];
    let min = null; 
    let max = 0; 
    let j = 0;
    nums.forEach(num => {
        let sq = Math.pow(num, 2)
        if (min === null || min > sq) {
            min = num
        }
        if (max < sq) {
            max = sq
        }
        squares.push(sq)
    })
    
    return squares.sort( (a, b) => a-b);
};