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

/*
分治法
对比 maxDepthOfBinaryTree 那道题
从 root => leaf 
变为 root => any

思路上，依然是 一棵二叉树的最大深度 = <左右子树中更大的那个> + <根节点>（1 or root.val）
区别在于，不一定是叶子节点。所以，求的是最大值，当 <左右子树中更大的那个> 小于零时时，就不要该子树的部分了，加上了值会减小。停留在该树根节点就好。
体现在代码上，就是多了一个与 0 比大小的步骤
*/