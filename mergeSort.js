// Description
// Given an integer array, sort it in ascending order.Use quick sort, merge sort, heap sort or any O(nlogn) algorithm.

// Example
// Given[3, 2, 1, 4, 5], return [1, 2, 3, 4, 5].

var sortIntegers2 = function (A) {
  if (A.length === 1) return A
  let mid = Math.floor(A.length / 2)
  let left = A.slice(0, mid)
  let right = A.slice(mid)

  return merge(sortIntegers2(left), sortIntegers2(right))
}

var merge = (arrLeft, arrRight) => {
  let i = 0
  let j = 0
  let temp = []
  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      temp.push(arrLeft[i])
      i++
    } else {
      temp.push(arrRight[j])
      j++
    }
  }
  return temp.concat(arrLeft.slice(i)).concat(arrRight.slice(j))
}

console.log(sortIntegers2([3, 2, 1, 4, 5]))