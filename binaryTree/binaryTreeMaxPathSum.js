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
  if (!node) return -Infinity // 要比较，可能与负数比较。如 [-3, null, null]，左右子树为空，其 sum 值与根节点比，取最大的。设为零就 bug 了。

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

/*
any to any 的三种可能情况：
  完全在左子树内(left any2any )；
  完全在右子树内(right any2any )；
  跨过根节点，两边都有(left root2any + root + right root2any)(注意子树为负的情况)
*/
// 二刷
// 注意三种可能
/*
tip:
此处设置当节点为空时的返回值。
需注意
1 不是取深度，而是取 node.val，有可能是负数。
2 当前规则是 左子树内部 右子树内部 通过根节点三种情况的累加值 比较，选大的。
    如 [-3, null, null] ，设为零的话，就是 Math.max(-3, 0 ,0)。结果成 0 了。
    其实，只有根节点的情况，当然是 node.val 即 -3。
    所以设置为空时为负无穷，比负数都小。
*/
const maxPathSum = root => (anyToAny(root))


const anyToAny = node => {
  if (!node) return -Infinity // tip
  // if (!node.left && !node.right) return node.val

  const leftAnyToAny = anyToAny(node.left)
  const rightAnyToAny = anyToAny(node.right)
  const crossRoot = Math.max(0, rootToAny(node.left)) + Math.max(0, rootToAny(node.right)) + node.val
  return Math.max(leftAnyToAny, rightAnyToAny, crossRoot)
}

const rootToAny = node => {
  if (!node) return 0
  // if (!node.left && !node.right) return node.val
  const leftRootToAny = rootToAny(node.left)
  const rightRootToAny = rootToAny(node.right)

  return Math.max(0, Math.max(leftRootToAny, rightRootToAny)) + node.val
}
