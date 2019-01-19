// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//   Note: A leaf is a node with no children.

//     Example:
// Given binary tree[3, 9, 20, null, null, 15, 7],
//     3
//   / \
//   9  20
//     /  \
//     15   7
// return its minimum depth = 2.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0

  return getMinDepth(root)

};

const getMinDepth = root => {
  if (!root) return Number.MAX_VALUE // I

  if (root.left == null && root.right == null) return 1 // II

  let leftDepth = getMinDepth(root.left)
  let rightDepth = getMinDepth(root.right)

  return Math.min(leftDepth, rightDepth) + 1;
}
/*
tips:
1 难点应该在于深度的定义 rom the root node down to the nearest leaf node.。当仅有一边的子树，其深度就成了该子树的深度+1。因为只有该子树有叶子节点。
2 技巧：正常逻辑：比大小，用小的。特情：当一边没有子树（深度为0），应该用另一边子树的高度，后者更大。
       特情出现时，定义为最大值。就可以沿用大路逻辑。
*/
