// 120. Triangle
// Medium

// Given a triangle, find the minimum path sum from top to bottom.Each step you may move to adjacent numbers on the row below.
// For example, given the following triangle

// [
//   [2],
//   [3, 4],
//   [6, 5, 7],
//   [4, 1, 8, 3]
// ]
// The minimum path sum from top to bottom is 11(i.e., 2 + 3 + 5 + 1 = 11).

//   Note:
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

// solution 1
// divide and conquer + memrise
// 分治法，把问题分解到最小最后；需要返回值，层层返回；
// 动态规划，用一个对象做存储记忆，避免重复计算，提高性能。从 too much time 到 优于 89%
const minimumTotal = function (triangle) {
  const tempObj = {}

  const divConquer = (i, j) => {
    if (i == triangle.length) { // 超出了 triangle.length - 1 的范围！
      // return triangle[i][j]
      return 0
    }

    const left = tempObj[`${i + 1},${j}`] || divConquer(i + 1, j)
    const right = tempObj[`${i + 1},${j + 1}`] || divConquer(i + 1, j + 1)
    tempObj[`${i + 1},${j}`] = left
    tempObj[`${i + 1},${j + 1}`] = right

    return Math.min(left, right) + triangle[i][j]
  }
  return divConquer(0, 0)
}

// solution 2
// 动态规划，自顶向下 top down
// 画个小三角会清楚很多
const minimumTotal = triangle => {
  if (!triangle) return null

  let i, j
  const len = triangle.length
  // let arr = []
  // let tempArr = initialize2DArray(len,len,)
  let tempArr = []
  for (i = 0; i < len; i++) {
    tempArr[i] = []

  }
  let minTotal = Infinity
  // 初始化起点
  tempArr[0][0] = triangle[0][0]
  // 初始化路径可能性唯一的两边；而且这些点的坐标代入计算会越界，而且能直接算出来(只有一条路)。
  for (i = 1; i < len; i++) {
    tempArr[i][0] = tempArr[i - 1][0] + triangle[i][0]
    // tempArr[i][i] = tempArr[i-1][j-1] + triangle[i-1][j-1]
    tempArr[i][i] = tempArr[i - 1][i - 1] + triangle[i][i] // 坐标下标的想不清的，举个例子就明白了
  }
  // 中间的多种可能的点，二维数组，双重循环
  for (i = 2; i < len; i++) {
    for (j = 1; j < i; j++) {
      tempArr[i][j] = Math.min(tempArr[i - 1][j - 1], tempArr[i - 1][j]) + triangle[i][j]
    }
  }

  // console.log(tempArr)
  for (i = 0; i < len; i++) {
    minTotal = tempArr[len - 1][i] < minTotal ? tempArr[len - 1][i] : minTotal
  }
  return minTotal
}
/**
 * 方案类统计的动态规划
 * 初始化的思路：
 * 一开始能把哪些东西变成 1，即哪些东西有且只有一个方案。
 * 有两个方案的，多半可以用公式套出来。
 */
