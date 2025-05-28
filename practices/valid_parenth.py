class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {')': '(', ']': '[', '}': '{'}

        for char in s:
            if char in pairs.values():
                stack.append(char)
            elif char in pairs:
                if not stack or stack.pop() != pairs[char]: # calling pop on empty list will raise an error, but we short circuit it
                    return False
            else:
                return False  # invalid character

        return not stack
