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

// 二刷
// tip: 二叉树的分治法，跳出递归的条件处，return 的东西要注意。这里求 depth ，一个数字，返回 0 。
const maxDepth = root => {
  if (!root) return 0

  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)

  return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1
}