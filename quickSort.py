# coding=UTF-8
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
            while left <= right and A[left] < pivot: # 为什么不能 = ，因为当 p 正好为最值，指针会一路运动到数组外空处
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
        # 与 merge sort 归并排序比，由于左边的 list 已经通过 partition 确定小于右边的 list，所以不用再对两个有序数组进行排序 即归并排序里最后的 merge 操作