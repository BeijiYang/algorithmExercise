class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// here
const getLeafsSum = (node) => {
  if (!node.left && !node.right) return node.value
  return getLeafsSum(node.left) + getLeafsSum(node.right)
}

const node3 = new TreeNode(3)
const node1 = new TreeNode(1)
const node6 = new TreeNode(6)
const node4 = new TreeNode(4)
const node7 = new TreeNode(7)


node3.left = node1
node3.right = node6
node6.left = node4
node6.right = node7

console.log(getLeafsSum(node3))