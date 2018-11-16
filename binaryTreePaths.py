# coding=UTF-8
# Given a binary tree, return all root - to - leaf paths.
# Note: A leaf is a node with no children.
# Example:
# Input:
#      1
#    /   \
#   2     3
#    \
#      5

# Output: ["1->2->5", "1->3"]
# Explanation: All root - to - leaf paths are: 1 -> 2 -> 5, 1 -> 3

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def binaryTreePaths(self, root):
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        res = []
        self.pathLoger(root, '', res)
        return res
    
    def pathLoger(self, node, prePath, res):
        if node is None:
            return
        if prePath == '':
            curPath = str(node.val)
        else:
            curPath = str(prePath) + '->' + str(node.val)
        if node.left is None and node.right is None:
            res.append(curPath)
        self.pathLoger(node.left, curPath, res)
        self.pathLoger(node.right, curPath, res)

# 不能把存结果的 list res 挂在 self.res，这样作为参数传就可以。