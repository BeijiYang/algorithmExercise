// Median of Two Sorted Arrays
// Hard

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).
// You may assume nums1 and nums2 cannot be both empty.

//   Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is(2 + 3) / 2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length
  if (len % 2 != 0) {
    let k = Math.floor(len / 2) // 第 1 个数； 下标为 0 的数
    return findKth(nums1, 0, nums2, 0, k + 1)
  } else {
    let k1 = Math.floor(len / 2)
    let k2 = Math.floor(len / 2) - 1
    return ((findKth(nums1, 0, nums2, 0, k1 + 1) + findKth(nums1, 0, nums2, 0, k2 + 1)) / 2)
  }
};

var findKth = function (A, A_start, B, B_start, k) {// 两数组的首指针
  if (A_start > A.length - 1) return B[B_start + k - 1]// 当 A 空了，返回 B 的第 k 个数
  if (B_start > B.length - 1) return A[A_start + k - 1]
  if (k == 1) return Math.min(A[A_start], B[B_start]) // 合并数组的第一个数，都是 sorted array, 故为 A or B 的第一个
  console.log('k =    ' + k)
  let A_half_k = A_start + Math.floor(k / 2) - 1 < A.length ? A[A_start + Math.floor(k / 2) - 1] : Infinity
  // let B_half_k = B[B_start + Math.floor(k / 2) - 1] || Infinity // 有零就 bug 的原因！动态类型！数字零被转成false了！！！
  let B_half_k = typeof B[B_start + Math.floor(k / 2) - 1] == "number" ? B[B_start + Math.floor(k / 2) - 1] : Infinity

  if (A_half_k < B_half_k) { // 如果 A 的第 k/2 个数更小，可以扔掉 A 的前 k/2 个数(通过指针后移)，由此规模减半。因为合并有序数组 C 时，A[K/2 - 1] 进 C 的时候，B[K/2 -1] 一定还没进来。即，此时 C 中还没有第 k 个数。它一定不在 A 从开始到 [k/2 - 1] 这个范围里
    return findKth(A, A_start + Math.floor(k / 2), B, B_start, k - Math.floor(k / 2))
  } else {
    return findKth(A, A_start, B, B_start + Math.floor(k / 2), k - Math.floor(k / 2))
  }
}
let n1 = [1, 2]
let n2 = [0, 9]
console.log(findMedianSortedArrays(n1, n2))
