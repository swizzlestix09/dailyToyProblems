
//frequency counter pattern
// let areThereDuplicates = () => {
//    let obj = {};

//    let variables = [ ...arguments ];

//    for (let i = 0; i < variables.length; i++) {
//      obj[variables[i]] = obj[variables[i]] + 1 || 1;
//    }

//    for (let key in obj) {
//      if (obj[key] > 1) {
//        return true;
//      }
//    }
//    return false;
// };

//multiple pointers pattern
let areThereDuplicates = () => {
  let items = [...arguments];
  items = items.sort((a, b) => a - b);
  let ct = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[ct] !== items[i]) {
      ct++;
    }
  }
  return ct > 0;
};

module.exports = areThereDuplicates;