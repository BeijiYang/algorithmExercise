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

// 本题利用了二分法的思想。
// 怎么想到二分法：题目要求 O(log(m + n))。 要求从 m + n => log(m + n), 即 n => log(n), 想到二分法
// 二分法的本质：（根据 T(n) = T(n/2) + O(1) = log(n)    ??), 需要在 O(1) 的时间内，扔掉 n/2 个数，缩小规模
// tip: 有序数组扔数的时候，可以直接用一个 start 指针，表示它前面的数都扔掉了，不用操作数组本身
// 两个有序数组，如何确定扔哪 k/2 个数？ 比较两个数组的第 k/2 个数，谁小扔谁的前 k/2个。画图理解，30度三角形，和60度三角形，同一位置切一刀。看谁小。

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
// 思路：把问题扩展到 寻找合并后数组的第 k 个数（C[K - 1]）。再回头找中点处就好找了。
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
