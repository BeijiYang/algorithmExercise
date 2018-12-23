// Description
// Given a sorted array and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// You may assume NO duplicates in the array.

// Example
// [1, 3, 5, 6], 5 → 2

// [1, 3, 5, 6], 2 → 1

// [1, 3, 5, 6], 7 → 4

// [1, 3, 5, 6], 0 → 0

const searchInsert = function (A, target) {
  if (!Array.isArray(A)) throw Error('A is supposed to be an array')

  let start, end, mid
  start = 0
  end = A.length - 1

  if (A[end] < target) return end + 1

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (A[mid] == target) return mid
    if (A[mid] < target) start = mid
    if (A[mid] > target) end = mid
  }

  // think about all the possibilities
  if (A[start] >= target) { // to find the FIRST position >= target, A[start] goes first
    return start
  } else if (A[end] >= target) { // A[end] is right after the A[left]
    return end
  } else {
    return end + 1
  }
}
let A = [1, 3, 5, 6]
let target = 7

console.log(searchInsert(A, target))

/*
前两个都是要找到 第一个 大等于target 的数
这种思路下，特殊情况是，数组中最大的都比target小，返回值超出范围，特殊处理一下

也可以找 最后一个 小于target 的数，返回的下边需要加一
这种思路下 要特判一下target小于所有数组里面的元素
*/