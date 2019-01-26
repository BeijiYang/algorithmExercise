// 63. Unique Paths II
// Medium

// A robot is located at the top - left corner of a m x n grid(marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time.The robot is trying to reach the bottom - right corner of the grid(marked 'Finish' in the diagram below).
// Now consider if some obstacles are added to the grids.How many unique paths would there be ?

//   An obstacle and empty space is marked as 1 and 0 respectively in the grid.

//     Note: m and n will be at most 100.

// Example 1:
// Input:
// [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom - right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

/**
 * @param obstacleGrid: A list of lists of integers
 * @return: An integer
 */
const uniquePathsWithObstacles = obstacleGrid => {
  const n = obstacleGrid.length
  if (!n) return 0
  const m = obstacleGrid[0].length
  if (!m) return 0

  // 创建初始元素都为 0 的 m * n 的辅助二维数组
  const dpArr = [], insideArr = []
  for (let i = 0; i < m; i++) {
    insideArr[i] = 0
  }
  for (let i = 0; i < n; i++) {
    dpArr[i] = insideArr.slice() // 注意！！ 每次都用一个新的副本！
  }

  // 初始化
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[i][0] != 1) {
      dpArr[i][0] = 1;
    } else {
      break; // 避开空格
    }
  }

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[0][i] != 1) {
      dpArr[0][i] = 1;
    } else {
      break;
    }
  }

  // 计算各有多种可能性的点
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        dpArr[i][j] = 0
      } else {
        dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - 1]
      }
    }
  }

  return dpArr[n - 1][m - 1]
}

/**
 * tip:
 * 创建初始元素都为 0 的 m * n 的辅助二维数组时，一定注意，内层数组每次都要用新的副本！
 * 否则，都成了一个相同的引用。外层数组里小数组（指针存储的地址都指向）为同一个实际数组对象。
 * 带来的问题是，改其中一个小数组，其他小数组也都跟着改了。
 */