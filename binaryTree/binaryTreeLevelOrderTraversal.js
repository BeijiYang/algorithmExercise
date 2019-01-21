// 102. Binary Tree Level Order Traversal
// Medium

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree[3, 9, 20, null, null, 15, 7],
//   3
//   / \
// 9  20
//   /  \
// 15   7
// return its level order traversal as:
// [
//   [3],
//   [9, 20],
//   [15, 7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = []
  queue.push(root)
  const res = []

  while (queue.length != 0) {
    const len = queue.length
    const layer = []

    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      if (node) {
        layer.push(node.val)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    if (layer.length > 0) res.push(layer)
  }
  return res
};
/**
 * level order 双重循环。第一重队列不空，第二重即 for 当前层，找出下一层的点
 */
// BFS 模板
const BFS = root => {
  const queue = []
  queue.push(root)

  while (queue.length != 0) {

    const len = queue.length // 重要操作！因为在下面的循环里，队列的长度是变化的。必须先取出来
    for (let i = 0; i < len; i++) { // 从队列里取出当前层的点
      const node = queue.shift()
      if (node) {

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
  }
};

// 二刷
const levelOrder = function (root) {
  const reslist = []
  const queue = []
  queue.push(root)

  while (queue.length !== 0) {
    let layer = []
    let len = queue.length

    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node) {
        layer.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
      // console.log(layer)

    }
    if (layer.length > 0) reslist.push(layer)
  }
  return reslist
}