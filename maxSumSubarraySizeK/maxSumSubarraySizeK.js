
const maxSumSubArraySzK = (array, k) => {
  if ( k > array.length ) return 0;
  let sumSubArr = 0;
  let begSubArr = 0;
  let endSubArr = k;
  while (begSubArr < endSubArr && endSubArr <= array.length) {
    let subArray = array.slice(begSubArr, endSubArr);
    let sum = subArray.reduce((a, b) => a + b, 0)
    sumSubArr = Math.max(sumSubArr, sum);
    ++begSubArr;
    ++endSubArr;
  }
  return sumSubArr;
};

module.exports = maxSumSubArraySzK;



//var beggining sub array
//var end sub array
// while  beggining sub array < endsubarray end && sub array <= array.length

//slice array from beggining sub array to end sub array
//add those numbers
//increase beginning sub array
//increase end sub array
//return the sum of the subarray