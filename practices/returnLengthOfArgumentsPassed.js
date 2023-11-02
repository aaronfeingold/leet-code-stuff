/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
/**
Runtime
- 51ms
- Beats 55.46%of users with JavaScript
Memory
- 41.98MB
- Beats 40.73%of users with JavaScript
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
