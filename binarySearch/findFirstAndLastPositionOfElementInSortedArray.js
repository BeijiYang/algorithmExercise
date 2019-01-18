// 34. Find First and Last Position of Element in Sorted Array
// Medium

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

//   Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]
// Accepted
// 253, 959
// Submissions
// 776, 612

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const firstPosition = getFirstPosition(nums, target)
  const lastPosition = getLastPosition(nums, target)

  return [firstPosition, lastPosition]
};

const getFirstPosition = (nums, target) => {
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (nums[mid] == target) end = mid
    if (nums[mid] < target) start = mid
    if (nums[mid] > target) end = mid
  }
  if (nums[start] == target) return start
  if (nums[end] == target) return end
  return -1
}

const getLastPosition = (nums, target) => {
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (nums[mid] == target) start = mid // 差异1
    if (nums[mid] < target) start = mid
    if (nums[mid] > target) end = mid
  }
  if (nums[end] == target) return end // 差异2
  if (nums[start] == target) return start
  return -1
}