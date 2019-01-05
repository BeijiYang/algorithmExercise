// Partition Array
// Given an array nums of integers and an int k, partition the array(i.e move the elements in "nums") such that:
// All elements < k are moved to the left
// All elements >= k are moved to the right
// Return the partitioning index, i.e the first index i nums[i] >= k.
//   Example
// If nums = [3, 2, 2, 1] and k = 2, a valid answer is 1.

const partitionArray = function (nums, k) {
  let left = 0
  let right = nums.length - 1

  if (!nums || nums.length === 0) return 0

  while (left <= right) {
    while (left <= right && nums[left] < k) left++
    while (left <= right && nums[right] >= k) right--
    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]] // deconstruction
      left++
      right--
    }
  }
  return left
}
