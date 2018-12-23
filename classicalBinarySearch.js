// Given a sorted(in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const search = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2)
    if (nums[mid] == target) end = mid
    if (nums[mid] < target) start = mid
    if (nums[mid] > target) end = mid
  }
  if (nums[start] == target) return start
  if (nums[end] == target) return end
  return -1
}

let nums = [-1, 0, 3, 5, 9, 12]
let target = 9
// let nums = [-1, 0, 3, 5, 9, 12]
// let target = 2
console.log(search(nums, target))