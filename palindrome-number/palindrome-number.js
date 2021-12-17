/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   x = x.toString()
   let bizzaroX = [...x].reverse()
   console.log(x, bizzaroX)
   for (let i = 0; i < bizzaroX.length; i++) {
     if (x[i] !== bizzaroX[i]) {
         return false;
     }
   }
    return true;
};