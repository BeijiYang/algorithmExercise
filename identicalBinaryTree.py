#  Given two binary trees, write a function to check if they are the same or not.
#  Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param a: the root of binary tree a.
    @param b: the root of binary tree b.
    @return: true if they are identical, or false.
    """
    def isIdentical(self, a, b):
        # write your code here
        if a is None and b is None:
            return True
        if a is None and b is not None:
            return False
        if b is None and a is not None:
            return False
        return a.val == b.val and self.isIdentical(a.left, b.left) and self.isIdentical(a.right, b.right)
        