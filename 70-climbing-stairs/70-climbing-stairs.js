/**
 * @param {number} n
 * @return {number}
 */

/* 
Input - how many steps 
Output - number of ways 
Constraints - n will be between 1 - 45 , can only climb one or two steps 
Edge Cases - 
*/
var climbStairs = function(n, cache = []) {
    //counter for return 
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2 
    }
    if (cache[n] !== undefined) {
        return cache[n]
    }
    let counter = climbStairs(n-1, cache) + climbStairs(n-2, cache)
    cache[n] = counter
    
    return counter 
};