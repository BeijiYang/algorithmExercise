# Sort Integers II
# Given an integer array, sort it in ascending order. Use quick sort, merge sort, heap sort or any O(nlogn) algorithm.

# Example
# Given [3, 2, 1, 4, 5], return [1, 2, 3, 4, 5].

# QUICK SORT
class Solution:
    """
    @param A: an integer array
    @return: nothing
    """
    def sortIntegers2(self, A):
        self.quickSort(A, 0, len(A) - 1)
        
    # def quickSort(self, A, left, right):
    def quickSort(self, A, start, end):
        if start >= end:
            return
        # partition
        left, right = start, end
        pivot = A[left]
        
        while left <= right:
            while left <= right and A[left] < pivot:
                left += 1
                
            while left <= right and A[right] > pivot:
                right -= 1
                
            if left <= right:
                A[left], A[right] = A[right], A[left]
                left += 1
                right -= 1
        # [start, end] => [start, right] [left, end]
        
        # quickSort
        # quickSort
        self.quickSort(A, start, right)
        self.quickSort(A, left, end)