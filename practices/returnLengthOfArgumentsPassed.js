/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
/**
Runtime
- 49 ms
- Beats - 66.34%
Memory
- 41.9 MB
- Beats - 40.73%
 */
// Time is O(n) since it we count in constant time
// Space is O(1) since we do not increase space from running the function, space stays constant
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

const test = [{},null,"3"];
console.log(argumentsLength(...test))
