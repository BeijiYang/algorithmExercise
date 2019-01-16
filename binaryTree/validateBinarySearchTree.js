// 98. Validate Binary Search Tree
// Medium

// Given a binary tree, determine if it is a valid binary search tree(BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
//   Example 1:

// Input:
//   2
//   / \
//   1   3
// Output: true
// Example 2:

//   5
//   / \
//   1   4
//   / \
//   3   6
// Output: false
// Explanation: The input is: [5, 1, 4, null, null, 3, 6].The root node's value
// is 5 but its right child's value is 4.
var isValidBST = function (root) {
  return divConquer(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};

var divConquer = function (node, min, max) {
  if (!node) return true
  if ((node.val <= min || node.val > max) || (node.val < min || node.val >= max)) return false
  // divConquer(node.left, min, node.value)
  // divConquer(node.right, node.value, max)
  return divConquer(node.left, min, node.val) && divConquer(node.right, node.val, max)
}
