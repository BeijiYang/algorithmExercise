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

/*
balanced tree
整棵树是不是 balanced ，取决于 左子树是不是 balanced & 右子树是不是balanced ，及其高度差
所以定义：
左右子树高度差小等于 1
左子树是 balanced
右子树是balanced

另，本题技巧为
  设定取深度函数的规则：当平衡，返回高度；当不平衡，返回 -1
*/

// 二刷
/*
tips: 
1 注意技巧。外面辅助值的引用。本例是 -1。求高度。高度是数字，-1 是数字。在比大小的情况下，引入最大值最小值辅助。

2 当前树不平衡，或当前树的子树不平衡
*/
const isBalanced = node => {
  return getDepth(node) !== -1
}
// const determineIsBalanced = (node, result) => {
//     console.log(result)
//     if (!node) return true
//     const leftDepth = getDepth(node.left)
//     const rightDepth = getDepth(node.right)

//     if (Math.abs(leftDepth - rightDepth) > 1) {
//         console.log('!!!!!!!!!!!!!!!!!!!!1')
//         result = false
//     }
//     determineIsBalanced(node.left, result)
//     determineIsBalanced(node.right, result)
//     return result
// }
const getDepth = node => {
  if (!node) return 0

  const leftDepth = getDepth(node.left)
  const rightDepth = getDepth(node.right)
  // 当前树不平衡，或当前树的子树不平衡
  if (Math.abs(leftDepth - rightDepth) > 1 || leftDepth == -1 || rightDepth == -1) return -1

  return Math.max(leftDepth, rightDepth) + 1
}
