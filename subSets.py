# Given a set of distinct integers, nums, return all possible subsets (the power set).
# Note: The solution set must not contain duplicate subsets.
# Example:
# Input: nums = [1,2,3]
# Output:
# [
#   [3],
#   [1],
#   [2],
#   [1,2,3],
#   [1,3],
#   [2,3],
#   [1,2],
#   []
# ]

class Solution:
    """
    @param nums: A set of numbers
    @return: A list of lists
    """
    def subsets(self, nums):
        if nums is None:
            return
        self.results = []
        self.search(nums, [], 0)
        return self.results
        
    def search(self, nums, subset, startIndex):
        self.results.append(subset)
        for i in xrange(startIndex, len(nums)):
            subset.append(nums[i])
            self.search(nums, subset, i+1)
            subset.pop()