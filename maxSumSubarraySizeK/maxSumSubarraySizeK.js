
// const maxSumSubArraySzK = (array, k) => {
//   if ( k > array.length ) return 0;
//   let sumSubArr = 0;
//   let begSubArr = 0;
//   let endSubArr = k;
//   while (begSubArr < endSubArr && endSubArr <= array.length) {
//     let subArray = array.slice(begSubArr, endSubArr);
//     let sum = subArray.reduce((a, b) => a + b, 0)
//     sumSubArr = Math.max(sumSubArr, sum);
//     ++begSubArr;
//     ++endSubArr;
//   }
//   return sumSubArr;
// };

const maxSumSubArraySzK = (array, k) => {
  let tempSubSum = 0;
  let finalSum = 0;


  for ( let i = 0; i < k; i++) {
    tempSubSum += array[i];
  }

  let addIdx = k;
  let subIdx = 0;

  while(addIdx <= array.length - 1) {
    tempSubSum +=  array[addIdx] - array[subIdx];
    finalSum = Math.max(finalSum, tempSubSum);
    ++subIdx, ++addIdx;
  }

  return finalSum;
};


// add 0 to n together
//two vars = subIdx = 0, addIdx = k + 1
//while addIdx <= array.length
// subtract array[subIdx] from maxSubSum and add array[addIdx]
// ++ subIdx and ++addIdx
// check is tempSubSum is greater than finalSum, if so replace
// once iterations complete return finalSum.


module.exports = maxSumSubArraySzK;

console.log(maxSumSubArraySzK([2, 1, 5, 1, 3, 2], 3))

//var beggining sub array
//var end sub array
// while  beggining sub array < endsubarray end && sub array <= array.length

//slice array from beggining sub array to end sub array
//add those numbers
//increase beginning sub array
//increase end sub array
//return the sum of the subarray