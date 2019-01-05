// 124. Binary Tree Maximum Path Sum
// Hard

// Given a non - empty binary tree, find the maximum path sum.
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent - child connections.The path must contain at least one node and does not need to go through the root.

//   Example 1:
// Input: [1, 2, 3]
//    1
//   / \
//  2   3
// Output: 6

// Example 2:
// Input: [-10, 9, 20, null, null, 15, 7]
//  - 10
//   / \
//  9  20
//    /  \
//   15   7
// Output: 42

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getRoot2Any = node => {
  if (!node) return 0
  let leftRoot2Any = getRoot2Any(node.left)
  let rightRoot2Any = getRoot2Any(node.right)

  return Math.max(0, Math.max(leftRoot2Any, rightRoot2Any)) + node.val
}

const getAny2Any = node => {
  if (!node) return -Infinity // 要比较，可能与负数比较

  let leftAny2Any = getAny2Any(node.left)
  let rightAny2Any = getAny2Any(node.right)
  let crossRoot
  // 横跨根节点的情况下，root 一定得有，但子树的 sum 为负的话就不要了（因为求的是最大 sum）
  let leftRoot2Any, rightRoot2Any
  leftRoot2Any = getRoot2Any(node.left)
  rightRoot2Any = getRoot2Any(node.right)
  crossRoot = node.val + Math.max(0, leftRoot2Any) + Math.max(0, rightRoot2Any)

  return Math.max(leftAny2Any, rightAny2Any, crossRoot)
}

const maxPathSum = root => getAny2Any(root)
