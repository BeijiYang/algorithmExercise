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

//  Non-Recursion (Recommend)
// tip: 每次循环中，不断地把当前节点的右儿子压入栈存起来，而优先处理左儿子。先左再右。纸上画画很清晰。
const preorderTraversal = root => {
  const resList = []
  if (!root) return resList
  const stack = []
  let node = root

  while (node) {
    resList.push(node.val)
    if (node.right) stack.push(node.right)
    node = node.left || stack.pop()
  }
  return resList
}


// recursion
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

// iteration
const preorderTraversal = (root) => {
  let stack = []
  let res = []
  root = handleLeft(root, stack, res)
  while (root) {
    if (!root.right) {
      root = stack.pop()
    } else {
      root = root.right
      root = handleLeft(root, stack, res)
    }
  }
  return res
}
const handleLeft = (root, stack, res) => {
  if (!root) return
  res.push(root.val)
  while (root.left) {
    stack.push(root)
    root = root.left
    res.push(root.val)
  }
  return root
}

// 
