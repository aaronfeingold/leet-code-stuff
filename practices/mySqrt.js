/**
 * @param {number} x
 * @return {number}
 */

/**
 *
Runtime
- 104ms
- Beats 6.39%of users with JavaScript
Memory
- 43.60MB
- Beats 64.91%of users with JavaScript
 */
var mySqrt = function(x) {
    // define some boundaries
    if (x === 1) {
        return x
    }

    let upperBound = x/2 + 1

    let sqrt = 0

    while (sqrt <= upperBound) {
        let math = sqrt * sqrt
        if (math === x) {
            return sqrt
        }
        if (math > x) {
            return sqrt - 1
        }
        sqrt += 1
        continue;
    }
};

x = 4

console.log(mySqrt(x))
