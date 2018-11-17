// Description
// Given a binary tree, return the preorder traversal of its nodes' values.

// Example
// Given:
//     1
//    / \
//   2   3
//  / \
// 4   5
// return [1, 2, 4, 5, 3]

/**
 * @param root: A Tree
 * @return: Preorder in ArrayList which contains node values.
 */

const preorderTraversal = function (root) {
  // write your code here
  let res = []
  const logger = (root) => {
    if (!root) return
    res.push(root.val)
    logger(root.left)
    logger(root.right)
  }
  logger(root)
  return res
}
