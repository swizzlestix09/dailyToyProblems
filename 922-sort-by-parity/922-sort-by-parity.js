**
* @param {number[]} nums
* @return {number[]}
*/
//lol, zero is even
//if number is even, pair with even indicies
//if number odd, pair with odd indicies
//iterate through array
//seperate odd from even
// in new array, order as described above
var sortArrayByParityII = function(nums) {
   let evens = [];
   let odds = [];
   let evensIndicies = 0;
   let oddIndicies = 0;
   let sorted = new Array(nums.length).fill('');

   for (let i = 0; i < nums.length; i++) {
   let unknownParity = nums[i]
        if(unknownParity % 2 === 0) {
           evens.push(unknownParity)
        } else {
           odds.push(unknownParity)
        }
   }

   for (let i = 0; i < sorted.length; i++) {
       if (i % 2 === 0) {
         sorted[i] = evens[evensIndicies]
         evensIndicies++
       } else {
         sorted[i] = odds[oddIndicies]
         oddIndicies++
       }

   }
   return sorted;
  }