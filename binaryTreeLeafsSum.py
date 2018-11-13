class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

node3 = TreeNode(3)
node1 = TreeNode(1)
node6 = TreeNode(6)
node4 = TreeNode(4)

node3.left = node1
node3.right = node6
node6.left = node4

def getTreeLeafsSum(node):
    if node is None:
        return 0
    if node.left is None and node.right is None:
        return node.value
    return getTreeLeafsSum(node.left) + getTreeLeafsSum(node.right)

print getTreeLeafsSum(node3)