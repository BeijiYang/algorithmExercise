// 14. First Position of Target
// Description
// For a given sorted array(ascending order) and a target number, find the first index of this number in O(log n) time complexity.
// If the target number does not exist in the array, return -1.

//   Example
// Example 1:
// Input: [1, 4, 4, 5, 7, 7, 8, 9, 9, 10]，1
// Output: 0

// Explanation:
// the first index of  1 is 0.

// Example 2:
// Input: [1, 2, 3, 3, 4, 5, 10]，3
// Output: 2

// Explanation:
// the first index of 3 is 2.

// Example 3:
// Input: [1, 2, 3, 3, 4, 5, 10]，6
// Output: -1

// Explanation:
// Not exist 6 in array.


/**
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {
  // write your code here
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)

    if (nums[mid] == target) end = mid // !
    if (nums[mid] < target) start = mid
    if (nums[mid] > target) end = mid
  }
  if (nums[start] == target) return start
  if (nums[end] == target) return end
  return -1
}

// tip:第一个 或 最后一个 的问题
// 1 while 循环内 当 if (nums[mid] == target) end = mid
// 这里不能直接返回 mid 而是要缩小范围。可能第一刀切到的 mid 就是数组中第二个符合的数。当要求第一个数时，就错了
