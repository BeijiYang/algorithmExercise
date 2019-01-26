// 64. Minimum Path Sum
// Medium

// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
//   Note: You can only move either down or right at any point in time.
//     Example:
// Input:
// [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param grid: a list of lists of integers
 * @return: An integer, minimizes the sum of all numbers along its path
 */
const minPathSum = grid => {
  let m = grid.length
  if (!m) return 0
  let n = grid[0].length
  if (!n) return 0

  let i, j
  let dpArr = []
  for (i = 0; i < m; i++) {
    dpArr[i] = []
  }
  // 初始化起点
  dpArr[0][0] = grid[0][0]
  // 初始化可能性固定的0行0列
  // 0行
  for (i = 1; i < n; i++) {
    dpArr[0][i] = dpArr[0][i - 1] + grid[0][i]
  }
  // 0列
  for (i = 1; i < m; i++) {
    dpArr[i][0] = dpArr[i - 1][0] + grid[i][0]
  }

  // 多种可能的点
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      dpArr[i][j] = Math.min(dpArr[i][j - 1], dpArr[i - 1][j]) + grid[i][j]
    }
  }
  // 取出最小的解
  return dpArr[m - 1][n - 1]
}  
