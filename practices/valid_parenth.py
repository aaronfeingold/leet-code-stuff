class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            '[':']',
            '{':'}',
            '(':')'
        }

        for char in s:
            if char in map.keys():
                stack.append(char)
            else:
                popped = stack.pop()
                if map[popped] != char:
                    return False

        return len(stack) == 0
