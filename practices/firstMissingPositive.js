/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // instead of O(nlogn) sorting, we can swap in place cyclicly O(n)
  // by putting the positive numbers into their corresponding indexes
  // then we check if the value at each index is also its index + 1
  // we can iterate 2x (two loops is fine)
  // we can ignore negative numbers after sorting
  // only concerned with numbers in range of 1 to n
  // n being the length of the array
  // why this? -> at worse case the array contains every number 1 to n (in any order), then the next smallest positive is n+1**

  let l = nums.length;

  for (let i = 0; i < l; i++) {
    // if all conditions met
    // if positive, less than the length (in range), and not in its corresponding index
    const valAtI = nums[i] - 1;
    if (valAtI > 0 && valAtI < l && nums[valAtI] !== nums[i]) {
      // example nums = [3,4,-1,1]
      // if it is true, for example, nums[nums[3]-1] -> nums[0] !== nums[3] -> 3 !== 1
      // then swap
      [nums[i], nums[valAtI]] = [nums[valAtI], nums[i]];
    }
  }

  // next iterate through to see if the value at each index is also its index + 1
  // if not, then the success number would be the smallest
  for (let i = 0; i < l; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // remember the edge case**
  return l + 1;
};

// nums = [1, 2, 0];
nums = [3, 4, -1, 1];
// nums = [7, 8, 9, 11, 12];

// console.log(firstMissingPositive(nums)); // 3
console.log(firstMissingPositive(nums)); // 2
// console.log(firstMissingPositive(nums)); // 1
