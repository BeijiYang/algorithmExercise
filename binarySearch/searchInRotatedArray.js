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

// 本题条件是 you may assume no duplicate exists in the array
// 当有重复的时候，最坏条件下，时间复杂度一定 O(n)
// （假设 2 会变动）只有访问全部数据后，才知道最后一个才是 2
// 如：1, 1, 1, 1, 1, 1, 2
// 所以 binary search ，for loop 就好


/*
二刷：
tips: 
1 分段后的处理不够精炼。其实就是，左段时，只有 （nums[start] <= target < nums[mid]）才能夹住，此时 end 左移到 mid，否则，由于切口不确定，而 target 肯定不在 mid 左侧，可以放心的让 start 右移，丢掉左边的数。
2 二刷做题的出错点：nums[start] <= target 丢了等号。注意移动 start end 指针时丢掉解。
*/
var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (nums[mid] == target) return mid

    if (nums[mid] > nums[start]) {// 左段
      if (nums[mid] < target) start = mid
      if (nums[mid] > target) {
        if (target >= nums[start]) {
          end = mid
        } else {
          start = mid
        }
      }
    } else { // 右段
      if (nums[mid] > target) {
        end = mid
      } else {
        if (target <= nums[end]) {
          start = mid
        } else {
          end = mid
        }
      }
    }
  }
  if (nums[start] == target) return start
  if (nums[end] == target) return end
  return -1
};