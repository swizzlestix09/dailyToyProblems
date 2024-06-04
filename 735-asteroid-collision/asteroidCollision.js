//using a stack
//if number is positive, move into stack.
//if number is negative, check stack.
//is positive number is larger than negative, stays in stack
//if positive number is smaller or equal to negative, remove from stack.
// check next value in stack, using logic above

//iterate through asteroid stack
//using logic above, start storing variables in stack

var asteroidCollision = function (asteroids) {
  let stack = [];

  for (const asteroidSz of asteroids) {
    if (asteroidSz > 0) {
      stack.push(asteroidSz);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < -asteroidSz
      ) {
        stack.pop();
      }
      if (stack.length && stack[stack.length - 1] === -asteroidSz) {
        stack.pop();
      } else if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroidSz);
      }
    }
  }
  return stack;
};
