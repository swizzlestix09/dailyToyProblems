
const maxSumSubArraySzK = (array, k)=> {
  if ( k > array.length ) return 0;
  let sumSubArr = 0;
  //var beggining sub array
  let begSubArr = 0;
  let endSubArr = k;
  //var end sub array
  while (begSubArr < endSubArr && endSubArr <= array.length) {
    let subArray = array.slice(begSubArr, endSubArr);
   // while  beggining sub array < endsubarray end && sub array <= array.length

   //slice array from beggining sub array to end sub array
   //add those numbers
   let sum = subArray.reduce((a, b) => a + b, 0)
   sumSubArr = Math.max(sumSubArr, sum);
  //increase beginning sub array
  //increase end sub array
   ++begSubArr;
   ++endSubArr;
 }
  //return the sum of the subarray
  return sumSubArr;
};

console.log(maxSumSubArraySzK( [2, 1, 5, 1, 3, 2], 3 ))
module.exports = maxSumSubArraySzK;