// Description
// Merge two given sorted integer array A and B into a new sorted integer array.

// Example
// A = [1, 2, 3, 4]
// B = [2, 4, 5, 6]
// return [1, 2, 2, 3, 4, 4, 5, 6]

/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
const mergeSortedArray = function (A, B) {
  let left = 0
  let right = 0
  let C = []
  while (left < A.length && right < B.length) {
    if (A[left] < B[right]) {
      C.push(A[left])
      left++
    } else {
      C.push(B[right])
      right++
    }
  }
  if (left < A.length) {
    let t = A.slice(left)
    C = C.concat(t)
  }
  if (right < B.length) {
    let t = B.slice(right)
    C = C.concat(t)
  }
  return C
}
