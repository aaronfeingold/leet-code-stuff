/**
 * @param {number} x
 * @return {number}
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