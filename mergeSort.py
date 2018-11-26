# Description
# Given an integer array, sort it in ascending order. Use quick sort, merge sort, heap sort or any O(nlogn) algorithm.

# Example
# Given [3, 2, 1, 4, 5], return [1, 2, 3, 4, 5].

class Solution:
    """
    @param A: an integer array
    @return: nothing
    """
    def sortIntegers2(self, A):
        # write your code here
        # temp = [] # list out of range
        temp = [0 for _ in range(len(A))]
        self.merge_sort(0, len(A) - 1, A, temp)

    def merge_sort(self, start, end, A, temp):
        if start >= end:
            return
        mid = (start + end) / 2
        self.merge_sort(start, mid, A, temp)
        self.merge_sort(mid + 1, end, A, temp)
        self.merge(start, mid, end, A, temp)
        
    def merge(self, start, mid, end, A, temp):
        left, right = start, mid + 1 # !!!
        index = start
        
        while left <= mid and right <= end:
            if A[left] < A[right]:
                temp[index] = A[left]
                left += 1
            else:
                temp[index] = A[right]
                right += 1

            index += 1
        
        while left <= mid:
            temp[index] = A[left]
            left += 1
            index += 1
        while right <= end:
            temp[index] = A[right]
            right += 1
            index += 1

        for index in xrange(start, end + 1):
            A[index] = temp[index]