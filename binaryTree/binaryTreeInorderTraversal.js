// 94. Binary Tree Inorder Traversal
// Medium

// Given a binary tree, return the inorder traversal of its nodes' values.
// Example:
// Input: [1, null, 2, 3]
//   1
//     \
//     2
//   /
//   3
// Output: [1, 3, 2]

// NON-RECURSION
const inorderTraversal = root => { // 左 根 右
  const resList = []
  if (!root) return resList
  const stack = []
  let node = root

  while (node) { // 把左边的点都压入栈，直到最左叶子节点的左空儿子
    stack.push(node)
    node = node.left
  }
  while (stack.length > 0) {
    node = stack.pop()
    resList.push(node.val) // 第一次到这儿 左（最左叶子），第二次到这儿 根（其父节点）
    if (node.right) { // 处理右，把它视为一个子树的根节点，那又跟最开始一样了
      node = node.right
      while (node) {  // 把左边的点都压入栈，直到最左叶子节点的左空儿子
        stack.push(node)
        node = node.left
      }
    }
  }
  return resList
}
