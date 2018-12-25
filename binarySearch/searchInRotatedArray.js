// Description
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
// You are given a target value to search.If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.

//   Example
// For[4, 5, 1, 2, 3] and target = 1, return 2.
// For[4, 5, 1, 2, 3] and target = 0, return -1.

const search = function (A, target) {
  if (!Array.isArray(A) || A.length == 0) return -1
  let start = 0, end = A.length - 1, mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (A[mid] == target) return mid
    // 为什么要以未知断点为中心分左右段，因为两边的处理是不一样的。
    if (A[mid] > A[start]) { // 在左段
      if (A[start] <= target && target < A[mid]) { // 注意边界，target 有可能正好是 start 或者 end 处的值
        end = mid
      } else {
        start = mid
      }
    } else { // 右段
      if (A[mid] < target && target <= A[end]) { // 注意边界，target 有可能正好是 start 或者 end 处的值
        start = mid
      } else {
        end = mid
      }
    }
  }
  if (A[start] == target) return start
  if (A[end] == target) return end
  return -1
}