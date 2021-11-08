//colt steele - given a sorted array of ints and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

/*
I - array, target average
O - bool
C - always an array, might have more than one pair
E - empty array, no target average / 0
*/

// start variable, end var - end var is array.length -1, start 0
// while start < end
// if start + end / 2 > target end --
// if start + end / 2 < target start ++
//else if start + end /2 === target, return true
//outside while loop return fals e- no matches made.

const averagePair = (array, target) => {
  let st = 0;
  let end = array.length - 1;

  while (st < end) {
    let ave = (array[st] + array[end])/2;
    if (ave > target) {
      end--;
    } else if (ave < target) {
      st++;
    } else {
      return true;
    }
  }
  return false;
};

module.exports = averagePair;