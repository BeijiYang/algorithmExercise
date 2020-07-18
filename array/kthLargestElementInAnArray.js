// https://leetcode.com/problems/kth-largest-element-in-an-array/
// 215. Kth Largest Element in an Array
// Medium

// Find the kth largest element in an unsorted array.Note that it is the kth largest element in the sorted order, not the kth distinct element.

//   Example 1:
// Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5

// Example 2:
// Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.
// 所以注意，这个算法里有个别扭的地方，k 是从 1 开始的。0是第一个数。

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (arr, k) => {
  return quickSort(arr, 0, arr.length - 1, arr.length - k + 1) // 伸出一只手，正数第一个，是倒数第5个。 5 - 1 + 1
};

const quickSort = (arr, low, high, k) => {
  if (low === high) return arr[high];

  let i = low, j = high, t = arr[i];
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
  // low j       i high
  if (low + k - 1 <= j) { // 原数组中第 k 个，是本小数组中的第 start + k - 1 个。举个例子很好想，如k是1，第一个。当low是0，low + 1 - 1 才是正确的 第一个的下标
    return quickSort(arr, low, j, k); // 如果k 是前半段的，还是第k 个
  }
  if (low + k - 1 >= i) {
    return quickSort(arr, i, high, k - (i - low)); // 如果k 是后半段的，扔掉前 i - low 个数，变成第 k - (i - low) 个
  }
  return arr[j + 1]; // 快排的结果，双指针有可能错开一位。j,j+1,i
}

// 更快的版本
const quickSelect = (arr, low, high, k) => {
  if (low === high) return arr[low];

  let mid = low + Math.floor((high - low) / 2);  // 更快的原因，记住 Math.floor()
  let i = low, j = high, t = arr[mid];

  while (i <= j) {
    while (i <= j && arr[j] > t) j--;
    while (i <= j && arr[i] < t) i++;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
      i++;
    }
  }

  // low j   i high   where is the kth position?
  if (low + k - 1 <= j) { // 这里需要每次的首位 low 或 start 参与计算新的 k 的位置。不行就记住。
    return quickSelect(arr, low, j, k);
  }
  if (low + k - 1 >= i) {
    return quickSelect(arr, i, high, k - (i - low));
  }
  return arr[j + 1];
}