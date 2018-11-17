# Description
# Given a binary tree, return the preorder traversal of its nodes' values.

# Example
# Given:
#     1
#    / \
#   2   3
#  / \
# 4   5
# return [1,2,4,5,3]

"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: A Tree
    @return: Preorder in ArrayList which contains node values.
    """
    def preorderTraversal(self, root):
        # write your code here
        res = []
        self.logger(root, res)
        return res
        
    def logger(self, root, res):
        if root is None:
            return
        res.append(root.val)
        self.logger(root.left, res)
        self.logger(root.right, res)
        
