
# 448. Inorder Successor in BST
# Given a binary search tree (See Definition) and a node in it, find the in-order successor of that node in the BST.

# If the given node has no in-order successor in the tree, return null.

# Example
# Given tree = [2,1] and node = 1:

#   2
#  /
# 1
# return node 2.

# Given tree = [2,1,3] and node = 2:

#   2
#  / \
# 1   3
# return node 3.

# Challenge
# O(h), where h is the height of the BST.

# Notice
# It's guaranteed p is one node in the given tree. (You can directly compare the memory address to find p)

"""
Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
"""
# tip: 从 BST 的性质出发。
# BST 的中序遍历是渐增的 list，所以给定节点 p 的下一个节点，一定是第一个比 p 大的节点。
class Solution:
    """
    @param root: A Tree
    @return: Inorder in ArrayList which contains node values.
    """
    def inorderSuccessor(self, root, p):
        # write your code here
        if not root or not p:
            return None
        
        stack = []
        
        while root:
            stack.append(root)
            root = root.left
        
        while stack:
            curNode = stack.pop()
            if curNode.val > p.val: # 这一句，与二叉树中序遍历算法的唯一区别
                return curNode
            
            if curNode.right:
                curNode = curNode.right
                while curNode:
                    stack.append(curNode)
                    curNode = curNode.left
        
        return None