// Find Peak Element （LeetCode）
// Share
// A peak element is an element that is greater than its neighbors.
// Given an input array nums, where nums[i]≠ nums[i + 1], find a peak element and return its index.
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
// You may imagine that nums[-1] = nums[n] = -∞.
// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
// Input: nums = [1, 2, 1, 3, 5, 6, 4]
// Output: 1 or 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
//   or index number 5 where the peak element is 6.
const findPeakElement = function (A) {
  if (!Array.isArray(A)) return false
  if (A.length <= 3) {
    let maxIndex = 0
    for (let i = 0; i < A.length; i++) {
      if (A[i] < A[i + 1]) maxIndex = i + 1
    }
    return maxIndex
  }

  let start = 0
  let end = A.length - 1
  let mid
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    // 不能求导，是比较两个点还是三个点？只要两个，具体哪两个？靠近起始端就 -1 的，靠近远端就 +1 的。
    // 如果三个点，左半边是 \ ，导数小于零，peak 在左边； 右半边 / ，peak在右边，如果都符合，即 V 型，两边都可以，如果都不符合，就是倒 V，那 mid 就是peak
    if (A[mid] < A[mid - 1]) {
      end = mid
    } else if (A[mid] < A[mid + 1]) {
      start = mid
    } else {
      end = mid
    }
  }
  return A[start] > A[end] ? start : end
};

// 二刷
// tip: 确定递增还是递减 只需要两个点 不需要三个点
const findPeakElement = A => {
  let start = 0
  let end = A.length - 1
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)

    if (A[mid] < A[mid + 1]) {
      start = mid
    } else {
      end = mid
    }

  }

  return A[start] < A[end] ? end : start
}
