class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const getLeafsSum = node => (node ? (!node.left && !node.right) ? node.value : getLeafsSum(node.left) + getLeafsSum(node.right) : 0)
/*
// normal code here
const getLeafsSum = (node) => {
  if (!node) return 0
  if (!node.left && !node.right) return node.value
  return getLeafsSum(node.left) + getLeafsSum(node.right)
}
*/
const node3 = new TreeNode(3)
const node1 = new TreeNode(1)
const node6 = new TreeNode(6)
const node4 = new TreeNode(4)


node3.left = node1
node3.right = node6
node6.left = node4

console.log(getLeafsSum(node3))