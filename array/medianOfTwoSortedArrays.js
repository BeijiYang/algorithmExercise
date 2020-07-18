// Median of Two Sorted Arrays
// Hard

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).
// You may assume nums1 and nums2 cannot be both empty.

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is(2 + 3) / 2 = 2.5

// 比较暴力的方法，把两个  Sorted Arrays 直接合并成一个无序数组，然后利用 找数组 kth 元素的算法，找 (mid + 1)th 的元素。注意 k 从 1 开始。
// 即 215. Kth Largest Element in an Array      ./kthLargestElementInAnArray.js
// 快排是 NlogN, 本题要求是 logN。所以需要更快的解法。 ??? 为何实测这个比下面那个更快

const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2];
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return getKthElement(arr, 0, arr.length - 1, mid + 1);
  } else {
    const midLeft = getKthElement(arr, 0, arr.length - 1, mid);
    const midRight = getKthElement(arr, 0, arr.length - 1, mid + 1);
    return (midLeft + midRight) / 2
  }

}
// 注意，这个算法里有个别扭的地方，k 是从 1 开始的。0是第一个数。
const getKthElement = (arr, start, end, k) => {
  if (start === end) return arr[start];

  const mid = start + Math.floor((end - start) / 2);
  let i = start, j = end, t = arr[mid];
  // partition
  while (i <= j) {
    while (i <= j && arr[j] > t) j--;
    while (i <= j && arr[i] < t) i++;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
      i++;
    }
  }
  // start j   i  end
  if (start + k - 1 <= j) {
    return getKthElement(arr, start, j, k);
  }
  if (start + k - 1 >= i) {
    return getKthElement(arr, i, end, k - (i - start));
  }
  return arr[j + 1];
}

// 同时参考 ./medianOfTwoSortedArrays.js 注释
const findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const mid = Math.floor((len1 + len2) / 2);
  if ((len1 + len2) % 2 !== 0) {
    return findKth(nums1, nums2, 0, 0, mid + 1);
  } else {
    const midLeft = findKth(nums1, nums2, 0, 0, mid);
    const midRight = findKth(nums1, nums2, 0, 0, mid + 1);
    console.log(midLeft, midRight)
    return (midLeft + midRight) / 2;
  }
}

const findKth = (nums1, nums2, start1, start2, k) => {
  // 边边角角
  if (start1 > nums1.length - 1) return nums2[start2 + k - 1]; // 当一个空了，另一个还有。直接返回还有的那个数组的从小到大第k个。 + start2 是因为，去掉已经被抛去的数；-1 是因为从 kth 第k个转为下标
  if (start2 > nums2.length - 1) return nums1[start1 + k - 1];
  if (k === 1) return Math.min(nums1[start1], nums2[start2]);  // k 一直减小到 1，没办法再减 (k/2) 了。那就是返回从小到大第一个。看两个数组的头谁最小就行了。
  const mid1 = nums1[start1 + Math.floor(k / 2) - 1] === undefined ? Infinity : nums1[start1 + Math.floor(k / 2) - 1];
  const mid2 = nums2[start2 + Math.floor(k / 2) - 1] === undefined ? Infinity : nums2[start2 + Math.floor(k / 2) - 1];

  if (mid1 < mid2) {
    start1 = start1 + Math.floor(k / 2);
    k = k - Math.floor(k / 2);
    return findKth(nums1, nums2, start1, start2, k);
  } else {
    start2 = start2 + Math.floor(k / 2);
    k = k - Math.floor(k / 2);
    return findKth(nums1, nums2, start1, start2, k);
  }

}