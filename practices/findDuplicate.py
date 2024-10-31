from typing import List


class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # understand: edge cases
        # strategy: Floyd Tortoise and Hare 2-Pointer
        slow = nums[0]
        fast = nums[0]

        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:  # cycle detected
                break

        # reset
        slow = nums[0]

        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]

        return slow


# nums = [1, 3, 4, 2, 2]
nums = [3, 1, 3, 4, 2]

solution = Solution()

print(solution.findDuplicate(nums))  # 3
