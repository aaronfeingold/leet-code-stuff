/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        if (target > nums[nums.length - 1]) {
            return nums.length;
        }
        if (target < nums[0]) {
            return 0;
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < target && target < nums[i+1]) {
                console.log(`target is: ${target}`);
                console.log(`previous is: ${nums[i]}`);
                console.log(`next is: ${nums[i+1]}`);
                return i + 1;
            }
        }
    }
};

const nums = [1,3,5];
const target = 4;

console.log(searchInsert(nums, target));
