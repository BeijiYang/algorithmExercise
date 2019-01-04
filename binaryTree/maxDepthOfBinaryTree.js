/**
 * @param root: The root of binary tree.
 * @return: An integer
 */
const maxDepth = root => (root ? ((!root.left && !root.right) ? 1 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1) : 0)

// normal code style
const maxDepth = function (root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
