// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (p && !q || !p && q) return false

  if (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true
  } else {
    return false
  }
};