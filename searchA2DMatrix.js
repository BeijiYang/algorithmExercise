// Description
// Write an efficient algorithm that searches for a value in an m x n matrix.

// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

//   Example
// Consider the following matrix:

// [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// Given target = 3, return true.

const searchMatrix = function (matrix, target) {
  if (!Array.isArray(matrix)) throw Error('need an array')
  if (matrix.length == 0) return false
  let m = matrix.length
  let n = matrix[0].length
  let start = 0
  let end = m - 1
  let mid, row

  // if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) return false // 特殊情况的处理 // 数组的下标与长度

  // 确定行数
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (matrix[mid][0] == target) return true
    if (matrix[mid][0] < target) start = mid
    if (matrix[mid][0] > target) end = mid
  }

  // if (matrix[start][0] > target) {
  //   console.log("+")
  //   if (start - 1 >= 0) { row = start - 1 } else { return false }
  // } else if (matrix[start][0] <= target && target <= matrix[start][n - 1]) {
  //   console.log("++")
  //   row = start
  // } else if (matrix[start][n - 1] < target && target < matrix[end][0]) {
  //   console.log("+++")
  //   return false
  // } else if (matrix[end][0] <= target && target <= matrix[end][n - 1]) {
  //   console.log("++++")
  //   row = end
  // } else {
  //   console.log("++++++")
  //   row = end + 1
  // }
  // 不用那么细 重复了
  if (matrix[end][0] <= target) {
    row = end;
  } else if (matrix[start][0] <= target) {
    row = start;
  } else {
    return false;
  }

  // 该行内寻找
  start = 0
  end = n - 1
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (matrix[row][mid] == target) return true
    if (matrix[row][mid] < target) start = mid
    if (matrix[row][mid] > target) end = mid
  }
  if (matrix[row][start] == target) return true
  if (matrix[row][end] == target) return true
  return false
}

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
let target = 3

matrix = [[5]]
target = 2

console.log(searchMatrix(matrix, target))