// Description
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
// Find the minimum element.
// You may assume no duplicate exists in the array.
//   Example
// Given[4, 5, 6, 7, 0, 1, 2] return 0

/**
 * @param nums: a rotated sorted array
 * @return: the minimum number in the array
 */

const findMin = function (nums) {
  if (!Array.isArray(nums) || nums.length == 0) return false
  if (nums.length == 1) return nums[0]
  let start = 0
  let end = nums.length - 1
  let mid

  if (nums[start] < nums[end]) return nums[0] // not rotated

  while (start + 1 < end) { // 不用考虑长度为 2 的情况, 不会死循环
    mid = start + Math.floor((end - start) / 2)

    if (nums[mid] > nums[start]) start = mid // left side
    if (nums[mid] < nums[start]) end = mid // right side
  }
  return nums[start] <= nums[end] ? nums[start] : nums[end]
}



