//  Sort Integers II
//  Given an integer array, sort it in ascending order.Use quick sort, merge sort, heap sort or any O(nlogn) algorithm.
//  Example
//  Given[3, 2, 1, 4, 5], return [1, 2, 3, 4, 5].

//  QUICK SORT
var sortIntegers2 = function (A) {
  quickSort(A, 0, A.length - 1)
}

var quickSort = (A, start, end) => {
  if (start >= end) return

  let left = start
  let right = end
  let pivot = A[start]

  // partition
  while (left <= right) {
    while (left <= right && A[left] < pivot) left++
    while (left <= right && A[right] > pivot) right--
    if (left <= right) {
      [A[left], A[right]] = [A[right], A[left]]
      left++
      right--
    }
  }
  // [start, end] => [start, right] [left, end]
  quickSort(A, start, right)
  quickSort(A, left, end)
}
