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

/* 
BST 排序二叉树

左子树的节点的值 小等于 根 右子树的节点的值 都大于 根值
或
左子树的节点的值 都小于 根 右子树的节点的值 大等于 根值

技巧：引入 最小值 最大值
*/

// 二刷
/*
  二叉树的问题，多是分治法。把问题分解到一个小树乃至一个节点。

  分： 从定义出发，这个小的三个点的BST，其左儿子一定比根小，另一边一定更大。有比较大小，可以考虑引入最大最小值d的思路。在这颗小BST树里，最小值就是左儿子，最大值就是右儿子。如果没有左右叶子节点怎么处理，跳过。
      比较大小的情况下，对于不确定的值，用语言的最大最小值保证 min max 的含义。

  治： 对于分出来的小树的处理就简单了，违反定义（如比应该的最大值还大）就 false
*/
const isValidBST = root => (divConquer(root))

const divConquer = (node, min, max) => {
  if (!node) return true

  // if (node.val > max || node.val < min) return false
  if ((node.val >= max || node.val < min) || (node.val > max || node.val <= min)) return false // BST 子树，等号在左边或者在右边

  // if (node.left) divConquer(node.left, -Infinity, node.val) // 此处不用 if ，函数第一行已经考虑了这种情况
  // if (node.right) divConquer(node.right, node.val, Infinity)
  return divConquer(node.left, -Infinity, node.val) && divConquer(node.right, node.val, Infinity)
}
