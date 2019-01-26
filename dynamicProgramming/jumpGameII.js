// 45. Jump Game II
// Hard

// Given an array of non - negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.

//   Example:
// Input: [2, 3, 1, 1, 4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.
//   Note:
// You can assume that you can always reach the last index.

/**
 * @param A: A list of integers
 * @return: An integer
 */
// SOLUTION ONE
// DP
const jump = A => {
  if (!A.length) return 0
  // state: F[I] 表示跳到第 i 个位置最少需要几步
  const dpArr = []
  // initialize 初始化
  dpArr[0] = 0
  // 对于每一个点，要求跳到它需要的最少步数，可以通过 j 点求，后者满足：在 i 前；本身可跳到；能从 j 跳到 i; 求法为 F[I] = MIN(F[J]) + 1
  for (let i = 1; i < A.length; i++) {
    dpArr[i] = Infinity
    let jArr = [] // 取一个最小值。因为可能有多个 J 点能跳到 i
    for (let j = 0; j < i; j++) {
      if (dpArr[j] != Infinity && j + A[j] >= i) {
        jArr.push(dpArr[j])
      }
    }
    dpArr[i] = jArr.sort((a, b) => (a - b))[0] + 1  // F[I] = MIN(F[J]) + 1
  }
  return dpArr[A.length - 1]
}
