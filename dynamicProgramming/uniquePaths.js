// 62. Unique Paths
// Medium

// A robot is located at the top - left corner of a m x n grid(marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time.The robot is trying to reach the bottom - right corner of the grid(marked 'Finish' in the diagram below).
// How many possible unique paths are there ?

//   Above is a 7 x 3 grid.How many possible unique paths are there ?

//     Note : m and n will be at most 100.

// Example 1:
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// 
// Example 2:
// Input: m = 7, n = 3
// Output: 28

/**
 * @param m: positive integer (1 <= m <= 100)
 * @param n: positive integer (1 <= n <= 100)
 * @return: An integer
 */
const uniquePaths = (m, n) => {
  if (!m || !n) return 0
  let i, j
  let dpArr = []
  for (i = 0; i < n; i++) dpArr[i] = []
  // 初始化
  // 起点
  dpArr[0][0] = 1
  // 0 行
  for (i = 1; i < m; i++) dpArr[0][i] = 1
  // 0 列
  for (i = 1; i < n; i++) dpArr[i][0] = 1
  // console.log(dpArr)
  // 多种情况
  for (i = 1; i < n; i++) {
    for (j = 1; j < m; j++) {
      dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - 1]
    }
  }
  // console.log(dpArr)
  return dpArr[n - 1][m - 1]
}

/**
 * tips:
 * 1. m * n 的矩阵，m 是列，n 是行。画出来，m 是横，n 是竖；
 * 2. 双循环计算内部点的时候，先 n 后 m 
 */