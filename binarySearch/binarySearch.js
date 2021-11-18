/*Colt Steele DS & A
 */

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let midpoint = Math.floor(((end + start) / 2) * 1);

    if (arr[midpoint] === target) {
      return midpoint;
    } else if (arr[midpoint] > target) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
