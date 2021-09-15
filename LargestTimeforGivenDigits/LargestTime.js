var largestTimeFromDigits = function(arr) {

  let hrs = [], mins = [];
  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
      if(num <= 2) {
          hrs[0] = num
          if (hrs[0] < num) {
              hrs[0] = num
          }
      }
  }

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
         if(num < 4) {
          hrs[1] = num
          if (hrs[1] < num) {
              hrs[1] = num
          }
      }

  }

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
      if(num <= 5 && !(hrs.includes(num)) ) {
          mins[0] = num
          if (mins[0] < num) {
              mins[0] = num
          }
      }
  }

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
          if (mins[0] && !(hrs.includes(num)) ) {
              mins[0] > num ? mins.push(num) : mins.unshift(num)
          }
         if(num <= 9 && !(hrs.includes(num)) ) {
          mins[0] = num
      }

  }


  return `${hrs.join('')}:${mins.join('')}`

};

module.exports = largestTime;


