from typing import List

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        # each row has 1 more item than the index
        # ie i = 0, len(row) = 1
        row = [0] * (rowIndex + 1)
        # set first item in row to 1
        row[0] = 1

        # iterate from second item in the row
        for i in range(1, rowIndex + 1):
            # do math from right to left to preserve the previous item
            for j in range(i, 0, -1):
                # modify the row in space
                row[j] = row[j] + row[j-1]

        return row

print(Solution().getRow(5))
