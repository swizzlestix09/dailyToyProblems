function countUniqueValues(arr) {
  let uniq = 0
  for (let i =0; i < arr.length; i++) {
      if (arr[uniq] !== arr[i]) {
          uniq++
          arr[uniq] = arr[i]
      }
  }
  return uniq > 0 ? uniq + 1 : uniq
  }

  module.exports = countUniqueValues;