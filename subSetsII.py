# Given a collection of integers that might contain duplicates, nums, return all possible subsets(the power set).
#   Note: The solution set must not contain duplicate subsets.
# Example:
# Input: [1, 2, 2]
# Output:
# [
#   [2],
#   [1],
#   [1, 2, 2],
#   [2, 2],
#   [1, 2],
#   []
# ]

class Solution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if nums is None:
            return
        if len(nums) == 0:
            return [[]]
        self.result = []
        self.search(sorted(nums), [], 0) # sorted
        return self.result
    def search(self, nums, subset, startIndex):
        self.result.append(list(subset)) # list() cp
        for i in xrange(startIndex, len(nums)):
            if i > startIndex and nums[i] == nums[i - 1]: # filter
                continue
            subset.append(nums[i])
            self.search(nums, subset, i + 1)
            subset.pop()