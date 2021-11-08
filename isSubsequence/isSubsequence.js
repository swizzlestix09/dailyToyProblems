/*
 * Colt Steele - DS & A course
 * isSubsequence takes int wo strings and check whether the
 * 'str1' is a subsequence of 'str2' - function should check whetehr the characters in the first string appear somwhere in the second string in the same order.
 * I - 2 strings
 * O - boolean
 * E - empty strings, nul/undef, non alphabet - lower/upper case shouldnt matter
 * C - O (N+M)
*/

const isSubsequence = (str1, str2) => {
  let firstWd = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[firstWd].toLowerCase() === str2[i].toLowerCase() ) {
      firstWd++;
    }
    if (firstWd === str1.length) {
      return true;
    }
  }
  return false;
}

// isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }
// isSubsequence Solution - Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//   return isSubsequence(str1, str2.slice(1))
// }

module.exports = isSubsequence;