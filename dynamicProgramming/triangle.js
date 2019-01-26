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
