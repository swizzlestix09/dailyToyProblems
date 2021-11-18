/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


 //base case - if num === 0 return string 
    //divide string length by 2 - math floor store in var
   //for each instance switch letters 
  //decrement var
  //call function again 

// var reverseString = function(s) {
//   let num = Math.floor(s.length/2);
//   let start = 0; 
//   let end = s.length - 1;
  
//   let reverser = (n, st, ed) => {
//     if (n === 0) {
//       return s
//     }
//     let temp = s[st]
//     s[st] = s[ed]
//     s[ed] = temp

//     st++
//     n--
//     ed--
//     reverser(n, st, ed)
//   }
  
//   return reverser(num, start, end)
// };

var reverseString = function(str, st= 0, ed = str.length - 1) {
 if (st > ed) {
   return;
 }
 let temp = str[st];
  str[st] = str[ed];
  str[ed] = temp;
  
  let revWd = reverseString(str, st+1, ed-1);
  return revWd
};