from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diffs = {}

        for i, num in enumerate(nums):
            diff = target - num
            if diff in diffs:
                return [i, diffs[diff]]
            diffs[num] = i


solution = Solution()

print(solution.twoSum([2, 7, 11, 15], 9))  # [1, 0])
