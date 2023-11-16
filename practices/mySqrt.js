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
    if (x === 1) {
        return x
    }
    // a square root of any number cannot be greater than the number divided in half
    // this eliminates half the numbers we have to iterate over
    let upperBound = x/2 + 1

    let lowerBound = 0

    // binary search at O(log(n))
    while (lowerBound <= upperBound) {
        let midPoint = Math.floor((lowerBound + upperBound) /2)
        let squared = midPoint * midPoint
        if (squared <= x) {
            lowerBound = midPoint + 1
        } else {
            upperBound = midPoint - 1
        }
    }

    return upperBound
};

x = 8

console.log(mySqrt(x))
