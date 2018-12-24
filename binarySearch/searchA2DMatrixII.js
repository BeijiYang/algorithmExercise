// Description
// Write an efficient algorithm that searches for a value in an m x n matrix, return the occurrence of it.

// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// Integers in each column are sorted from up to bottom.
// No duplicate integers in each row or column.

//   Example
// Consider the following matrix:

// [
//   [1, 3, 5, 7],
//   [2, 4, 7, 8],
//   [3, 5, 9, 10]
// ]
// Given target = 3, return 2.

const searchMatrix = function (matrix, target) {
  if (!Array.isArray(matrix)) return false
  if (matrix.length == 0) return 0
  let rowNum = matrix.length
  let columnNum = matrix[0].length
  if (matrix[0][0] > target || matrix[rowNum - 1][columnNum - 1] < target) return 0

  let row = rowNum - 1
  let column = 0
  let count = 0

  // from left bottom to right top
  // row: row-1 => 0 递减
  // column: 0 => column - 1 递增
  while (row >= 0 && column <= columnNum - 1) {
    let t = matrix[row][column]
    if (t < target) column++
    if (t > target) row--
    if (t == target) {
      row--
      column++
      count++
    }
  }
  return count
}
