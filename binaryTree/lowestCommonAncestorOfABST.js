// 235. Lowest Common Ancestor of a Binary Search Tree
// Easy

// Given a binary search tree(BST), find the lowest common ancestor(LCA) of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// Given binary search tree: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]

// Example 1:
// Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
// Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
//   Note:
// All of the nodes' values will be unique.
// p and q are different and both values will exist in the BST.

/**
 *从 BST 的定义出发，考虑大小关系。
 * 如果 p, q 都大于 root ，那它们都位于root的右子树，反之左子树。
 * 如果一个比 root 大，一个比 root小，那 LCA 就是 root，或者有一个等于root，那它就是答案了（也是root），另一个一定在它下面。
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root !== null) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return root;
};
