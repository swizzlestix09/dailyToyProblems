function sameFrequency(a, b){
  a = a.toString();
  b = b.toString();

if (a.length !== b.length) {
   return false
}
let objA = {};
let objB = {};

for (let i = 0; i < a.length; i++) {
   objA[a[i]] ? objA[a[i]]++ : objA[a[i]] = 1
   objB[b[i]] ? objB[b[i]]++ : objB[b[i]] = 1
}

for (let num in objA) {
if (objA[num] !== objB[num]){
 return false;
}
}
return true;
}

module.exports = sameFrequency;