// 102. Binary Tree Level Order Traversal
// Medium

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree[3, 9, 20, null, null, 15, 7],
//   3
//   / \
// 9  20
//   /  \
// 15   7
// return its level order traversal as:
// [
//   [3],
//   [9, 20],
//   [15, 7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = []
  queue.push(root)
  const res = []

  while (queue.length != 0) {
    const len = queue.length
    const layer = []

    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      if (node) {
        layer.push(node.val)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    if (layer.length > 0) res.push(layer)
  }
  return res
};
