/**
 * @param root: The root of binary tree.
 * @return: An integer
 */
const maxDepth = root => (root ? ((!root.left && !root.right) ? 1 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1) : 0)

// normal code style
const maxDepth = function (root) {
  if (root == null) return 0
  // if (!root.left && !root.right) return 1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

/*
分治法
整棵树的高度为 较高的子树的高度+1
分为 左子树的高度 与 右子树的高度
细分到当一颗树根节点为空时，高度为零
*/
