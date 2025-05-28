function twoSum(nums: number[], target: number): number[] {
  const compliments = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliments.has(compliment)) {
      return [compliments.get(compliment)!, i];
    }
    compliments.set(nums[i], i);
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // [0, 1]
