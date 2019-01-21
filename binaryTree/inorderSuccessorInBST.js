// 448. Inorder Successor in BST
// Given a binary search tree(See Definition) and a node in it, find the in -order successor of that node in the BST.

// If the given node has no in -order successor in the tree, return null.

//   Notice
// It's guaranteed p is one node in the given tree. (You can directly compare the memory address to find p)

const inorderSuccessor = (root, p) => {
  if (!root || !p) return null
  const stack = []
  let node = root
  while (node) { // 把左边的点都压入栈，直到最左叶子节点的左空儿子
    stack.push(node)
    node = node.left
  }
  while (stack.length > 0) {
    node = stack.pop()
    if (node.val > p.val) return node // 找中序遍历中第一个比 p 大的节点。结合 BST 性质。

    if (node.right) {
      node = node.right
      while (node) {  // 把左边的点都压入栈，直到最左叶子节点的左空儿子
        stack.push(node)
        node = node.left
      }
    }
  }
  return null
}
