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
// Time and Space are both O(n) since it we traverse the arguments given
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

const test = [{},null,"3"];
console.log(argumentsLength(...test))
