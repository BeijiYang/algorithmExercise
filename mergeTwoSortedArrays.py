class Solution:
    """
    @param A: sorted integer array A
    @param B: sorted integer array B
    @return: A new sorted integer array
    """
    def mergeSortedArray(self, A, B):
        # write your code here
        C = []
        left, right = 0, 0
        while left < len(A) and right < len(B):
            if A[left] < B[right]:
                C.append(A[left])
                left += 1
            else:
                C.append(B[right])
                right += 1
        if left < len(A):
            for _ in xrange(left, len(A)):
                C.append(A[_])
        if right < len(B):
            for _ in xrange(right, len(B)):
                C.append(B[_])
        return C