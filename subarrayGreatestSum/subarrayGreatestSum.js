/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
*/

// const subarrayGreatestSum = (arr, target) => {
//   let arraySumLen = Infinity;
//   let startIdx = 0;
//   let movingIdx = 1;

//   while (startIdx <= arr.length - 2) {
//     let sum = 0;
//     for (let i = startIdx; i < movingIdx; i++) {
//       sum += arr[i];
//     }
//     if (sum >= target && (movingIdx - startIdx) < arraySumLen ) arraySumLen = (movingIdx - startIdx)
//     if (movingIdx === arr.length) {
//       startIdx++;
//       movingIdx = startIdx+1;
//     } else {
//       ++movingIdx;
//     }
//   }
//   return arraySumLen === Infinity ? 0 : arraySumLen;
// };

const subarrayGreatestSum = (arr, target) => {
  let windowSum = 0,
    minLength = Infinity,
    startIdx = 0;

    for (let i = 0; i < arr.length; i++) {
      windowSum += arr[i]
      while (windowSum >= target) {
        minLength = Math.min(minLength, i - startIdx);
        windowSum -= arr[startIdx]
        windowSum += 1;

      }
    }

    return minLength === Infinity ? 0 : minLength;
};

 console.log(subarrayGreatestSum([2, 1, 5, 2, 3, 2], 7)); //2
module.exports = subarrayGreatestSum;
