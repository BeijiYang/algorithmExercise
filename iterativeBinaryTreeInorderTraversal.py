#  Given a binary tree, return the inorder traversal of its nodes' values.

#  Recursive solution is trivial, could you do it iteratively ?

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
    @return: Inorder in ArrayList which contains node values.
    """
    def inorderTraversal(self, root):
        # write your code here
        stack = []
        res = []
        root = self.handleLeftTree(root, stack, res)
        while root:
            if root.right:
                root = root.right
                root = self.handleLeftTree(root, stack, res)
            else:
                if len(stack) > 0:    # python can not pop an empty list
                    root = stack.pop(-1)
                    res.append(root.val)
                else: 
                    root = None    # the key to escape the while loop
        return res
        
    def handleLeftTree(self, root, stack, res):
        if root is None:
            return
        while root.left:
            stack.append(root)
            root = root.left
        res.append(root.val)
        return root
