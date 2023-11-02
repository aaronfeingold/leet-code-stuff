/**
 * @param {Function[]} functions
 * @return {Function}
 */
/**
Runtime
- 52ms
- Beats 96.40%of users with JavaScript
Memory
- 43.50MB
- Beats 25.76%of users with JavaScript */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
// if looping from right to left (instead of left to right)
// you can reverse the array, then reduce it
// so return a function that takes in x
// make x the initial accumulator
// apply x to first function (from r to l)
// x will accumulate
// and continue to apply that accumulation to each function
var compose = function(functions) {
    return function (x) {
      return functions.reverse().reduce((acc, fn) => fn(acc), x);
    };
};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const test = [x => 10 * x, x => 10 * x, x => 10 * x]

const fn = compose(test)

console.log(fn(1))
