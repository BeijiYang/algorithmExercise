// 701. Insert into a Binary Search Tree
// Medium

// Given the root node of a binary search tree(BST) and a value to be inserted into the tree, insert the value into the BST.Return the root node of the BST after the insertion.It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion.You can return any of them.

// For example,

//   Given the tree:
//   4
//   / \
//   2   7
//   / \
//   1   3
// And the value to insert: 5
// You can return this binary search tree:

//     4
//   /   \
//   2     7
//   / \   /
//   1   3 5
// This tree is also valid:

//     5
//   /   \
//   2     7
//   / \
//   1   3
//         \
//           4
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val)
    return root
  }
  divConquer(root, val)
  // console.log(root)
  return root
};

var divConquer = function (node, val, pos, fatherNode) {
  if (!node) {
    fatherNode[pos] = new TreeNode(val)
    return
  }
  if (val >= node.val) {
    divConquer(node.right, val, 'right', node)
  } else {
    divConquer(node.left, val, 'left', node)
  }
}