/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// this of the triangle as a matrix
/**
    [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]
 */
// in each row, the value at index i is the previous row's i and the one before it (i -1)
// so create each row, then return the request row
// however, in order to get, let's say row 100, we'd have to do all the math all the way up to it
// so how could use dynamic programming and recursion here?
var getRow = function(rowIndex) {
    let matrix = []
    // build the matrix off of the base up to the rowIndex requested
    for (let rowNum = 0; rowNum <= rowIndex; rowNum++) {
        // initialize each new row with an empty array
        const rowArr = [];
        for (let indexOfRow = 0; indexOfRow <= rowNum; indexOfRow++) {
            // start adding to the array, if the fist index or last index of the array
            if (indexOfRow === 0 || indexOfRow == rowNum) {
                rowArr.push(1)
            }
            // otherwise, do some basic math, then push
            else {
                // the new value is the sum of the previous row's value at same index
                // plus the previous row's value at the previous index
                rowArr.push(matrix[rowNum - 1][indexOfRow] + matrix[rowNum - 1][indexOfRow - 1]);
            }
        }
        matrix.push(rowArr)
    }

    return matrix[rowIndex]
};

console.log(getRow(5))
