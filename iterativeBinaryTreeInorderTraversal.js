// Given a binary tree, return the inorder traversal of its nodes' values.

// Recursive solution is trivial, could you do it iteratively ?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const handleLeftTree = (root, stack = [], res = []) => {
  if (!root) return
  while (root.left) {
    stack.push(root)
    root = root.left
  }
  res.push(root.val)
  return root
}

const inorderTraversal = function (root) {
  let stack = []
  let res = []

  root = handleLeftTree(root, stack, res)

  while (root) {
    if (root.right) {
      root = root.right
      root = handleLeftTree(root, stack, res)
    } else {
      root = stack.pop()
      if (root) res.push(root.val)
    }
  }
  return res
}
