/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

	let count = 0;

    while (args[count]) {
        count ++
    }

    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

const test = [{},null,"3"];
console.log(argumentsLength(...test))
