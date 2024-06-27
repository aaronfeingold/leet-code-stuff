/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
    // sort the array, keeping track of the indexes
    const indexedNums = [];
    for (let i = 0; i < nums.length; i++) {
        indexedNums.push([nums[i], i])
    }

    const sortedNums = mergeSort(indexedNums)

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = sortedNums[left][0] + sortedNums[right][0]
        if (sum === target) {
            return [sortedNums[left][1], sortedNums[right][1]]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

function mergeSort (arr) {
    // base case of recursion
    // if one item or none
    if (arr.length <= 1) {
        return arr;
    }
    // constant computation
    let mid = Math.floor(arr.length / 2)

    // recursive step
    let left = mergeSort(sliceArr(arr, 0, mid))
    let right = mergeSort(sliceArr(arr, mid, arr.length))

    return merge(left, right)
}

function merge (left, right) {
    let sortedArr = [];

    // while both arrays have elements
    // compare the 0th indexed element
    // shift the array which has the lesser value
    // and push that value into the sortedArr
    while (left.length && right.length) {
        if (left[0][0] < right[0][0]) {
            sortedArr.push(shiftArr(left))
        } else {
            sortedArr.push(shiftArr(right))
        }
    }

    // when loop terminates, return the sorted array and the remainders of each
    return [ ...sortedArr, ...left, ...right ]
}

function shiftArr(arr) {
    if (arr.length === 0) return undefined;

    const first = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // modifies the array in place by moving each element to the left adjacent index
        arr[i - 1] = arr[i];
    }

    // a trick to change its length and remove the last undefined element
    arr.length = arr.length - 1;

    return first;
}

function sliceArr(arr, a, b) {
    const slice = [];

    for (let i = a; i < b; i++) {
        slice.push(arr[i]);
    }

    return slice;
}
