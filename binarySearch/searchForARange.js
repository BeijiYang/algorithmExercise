// Description
// Given a sorted array of n integers, find the starting and ending position of a given target value.

// If the target is not found in the array, return [-1, -1].

//   Example
// Given[5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

const searchRange = function (A, target) {
  if (!Array.isArray(A)) throw Error('A should be an array')
  let start, end, mid
  let bound = [-1, -1]
  if (A.length == 0) return bound

  // find the fisrt position
  start = 0
  end = A.length - 1
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (A[mid] == target) end = mid
    if (A[mid] < target) start = mid
    if (A[mid] > target) end = mid
  }
  if (A[start] == target) {
    bound[0] = start
  } else if (A[end] == target) {
    bound[0] = end
  }

  // find the last position
  start = 0
  end = A.length - 1
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (A[mid] == target) start = mid
    if (A[mid] < target) start = mid
    if (A[mid] > target) end = mid
  }
  if (A[end] == target) {
    bound[1] = end
  } else if (A[start] == target) {
    bound[1] = start
  }

  return bound
}

// let A = [5, 7, 7, 8, 8, 10]
// let target = 8
let A = [5, 5, 5]
let target = 5
console.log(searchRange(A, target))

// 问题拆分：其实就是找到第一个匹配位置 + 找到最后一个匹配位置。
// 就变成了使用两次经典二分搜索

// 二刷
const searchRange = (A, target) => {
  if (A.length == 0) return [-1, -1]
  if (target > A[A.length - 1] || target < A[0]) return [-1, -1]
  // find the first and last position
  const firstPosition = findFirstPosition(A, target)
  const lastPosition = findLastPosition(A, target)
  return [firstPosition, lastPosition]
}

const findFirstPosition = (A, target) => {
  let start = 0, end = A.length - 1, mid
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (A[mid] === target) end = mid
    if (A[mid] < target) start = mid
    if (A[mid] > target) end = mid
  }
  if (A[start] === target) return start
  if (A[end] === target) return end
  return -1
}

const findLastPosition = (A, target) => {
  let start = 0, end = A.length - 1, mid
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (A[mid] === target) start = mid
    if (A[mid] < target) start = mid
    if (A[mid] > target) end = mid
  }
  if (A[end] === target) return end
  if (A[start] === target) return start
  return -1
}