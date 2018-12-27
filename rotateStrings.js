
// We are given two strings, A and B.
// A shift on A consists of taking string A and moving the leftmost character to the rightmost position.For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.Return True if and only if A can become B after some number of shifts on A.

//   Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true
// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:
// A and B will have length at most 100.

var rotateString = function (A, B) {
  if (typeof A !== 'string' || typeof B !== 'string') return false
  if (A.length !== B.length) return false
  if (A === '') return B == ''
  for (let offset = 1; offset < A.length; offset++) {
    let newStr = rotate(A, offset)
    if (newStr == B) return true
  }
  return false
};

var rotate = (str, offset) => {
  let tempArr = str.split('')
  let frontArr = tempArr.slice(0, offset).reverse()
  let backArr = tempArr.slice(offset).reverse()
  let resultArr = frontArr.concat(backArr).reverse()
  return resultArr.join('')
}