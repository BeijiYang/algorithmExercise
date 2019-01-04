// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height - balanced.
// For this problem, a height - balanced binary tree is defined as:
// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:
// Given the following tree[3, 9, 20, null, null, 15, 7]:

//    3
//   / \
//  9  20
//    /  \
//   15   7
// Return true.

// Example 2:
// Given the following tree[1, 2, 2, 3, 3, null, null, 4, 4]:
//    1
//   / \
//  2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.


// 当平衡，返回高度；当不平衡，返回 -1
let getDepth = node => {
  if (node == null) return 0
  let leftSubTreeDepth = getDepth(node.left)
  let rightSubTreeDepth = getDepth(node.right)
  // 当不平衡
  if (leftSubTreeDepth == -1 || rightSubTreeDepth == -1 || Math.abs(leftSubTreeDepth - rightSubTreeDepth) > 1) return -1

  return Math.max(leftSubTreeDepth, rightSubTreeDepth) + 1
}

let isBalanced = root => (getDepth(root) != -1)