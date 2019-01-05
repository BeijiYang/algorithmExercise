// Description
// Given a binary tree, find the maximum path sum from root.
// The path may end at any node in the tree and contain at least one node in it.

// Example
//   1
//  / \
// 2   3
// return  4 [1 -> 3]

const maxDepth = function (root) {
  if (root == null) return 0

  let leftSubTreeDepth = maxDepth(root.left)
  let rightSubTreeDepth = maxDepth(root.right)

  return Math.max(0, Math.max(leftSubTreeDepth, rightSubTreeDepth)) + root.val
}
