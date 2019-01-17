// Description
// Given a binary search tree and a range[k1, k2], return all elements in the given range.

//   Example
// If k1 = 10 and k2 = 22, then your function should return [12, 20, 22].

//      20
//     /  \
//    8   22
//   / \
// 4   12

/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
const searchRange = function (root, k1, k2) {
  // write your code here
  let resList = []

  const helper = function (node, k1, k2) {
    if (!node) return
    if (k1 <= node.val && node.val <= k2) resList.push(node.val)

    if (node.val < k1) {
      helper(node.right, k1, k2)
    } else if (node.val > k2) {
      helper(node.left, k1, k2)
    } else {
      helper(node.left, k1, node.val)
      helper(node.right, node.val, k2)
    }

  }
  helper(root, k1, k2)

  return resList.sort((a, b) => (a - b))
}

// almost the same as rangeSumOfBST.js