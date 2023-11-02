/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // use recursion
    // consider simple cases
    if (functions.length === 0) {
        return function(x) {
            return x
        }
    }

    else if (functions.length === 1) {
        return functions[0]
    }

    else {
        // get the first function
        const firstFunction = functions[0];
        // get the remaining functions
        const rest = functions.slice(1)
        // pass the result of the remaining ones to the first
        return function(x) {
            return firstFunction(compose(rest)(x))
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const test = [x => 10 * x, x => 10 * x, x => 10 * x]

const fn = compose(test)

console.log(fn(1))