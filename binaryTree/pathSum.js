// 112. Path Sum
// Easy
// Given a binary tree and a sum, determine if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.
//   Note: A leaf is a node with no children.

//     Example:
// Given the below binary tree and sum = 22,
//    5
//   / \
//  4   8
// /   / \
// 11  13  4
//    /  \    \
//  7    2      1
// return true, as there exist a root - to - leaf path 5 -> 4 -> 11 -> 2 which sum is 22.

// 思路
// div and conquer. 
// 分解：sum 就是路径上各个节点的 val 的和。
// 治：分解到最后，仅有一个节点时，sum 就是 该节点的 val
const hasPathSum = (root, sum) => {
  if (!root) return false
  if (!root.left & !root.right) return root.val == sum

  // hasPathSum(root.left, sum - root.val)
  // hasPathSum(root.right, sum - root.left)
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
