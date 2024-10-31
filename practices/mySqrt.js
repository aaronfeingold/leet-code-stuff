/**
 * @param {number} x
 * @return {number}
 */

/**
 *
Runtime
- 66ms
- Beats 49.05%of users with JavaScript
Memory
- 44.19MB
- Beats 16.89%of users with JavaScript
 */
var mySqrt = function(x) {
  // define some boundaries
  if (x <= 1) {
    return x;
  }
  // a square root of any number cannot be greater than the number divided in half
  // this eliminates half the numbers we have to iterate over
  // use of a binary search algorithm improves the time complexity to O(log(n))
  let upperBound = Math.floor(x / 2) + 1;

  let lowerBound = 0;

  // binary search at O(log(n))
  while (lowerBound <= upperBound) {
    // the square root has to be somewhere between the lower and upper bounds
    // so start at the midpoint
    let midPoint = Math.floor((lowerBound + upperBound) / 2);
    let squared = midPoint * midPoint;
    // and if it is less than x, increase the the lower bound
    // and repeat till lower exceeds upper, then return the upper
    if (squared === x) {
      return midPoint;
    } else if (squared < x) {
      lowerBound = midPoint + 1;
    } else {
      upperBound = midPoint - 1;
    }
  }

  return upperBound;
};

x = 8

console.log(mySqrt(x))
