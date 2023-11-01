/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// two pointer technique
const removeElement = function(nums, val) {
    // keep track of the index where the val is not the one we want to delete
    // it is a pointer, ie: it points to the last index where we had a val that we DO NOT want to delete
    let pointer = 0;
    // use a simple for loop
    for (let i = 0; i < nums.length; i++) {
        // and then when we find the one to remove, we won't change that pointer
        // we'll just move on to the next number in the list
        if (nums[i] === val) continue;
        // and if its one we want to keep
        // we'll set it as the value at the pointer
        nums[pointer] = nums[i]
        // and increase the pointer
        pointer++
    }
    // lastly, tell our judge the pointer, which is the number of indexes in the array that are not our val
    return pointer;
};
const testArray = [1,2,2,3,4,5,5];
const testVal = 2;

console.log(removeElement(testArray, testVal))
