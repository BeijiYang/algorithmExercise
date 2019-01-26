// 116. Jump Game
// Given an array of non - negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

//   Example
// A = [2, 3, 1, 1, 4], return true.
// A = [3, 2, 1, 0, 4], return false.

//     Notice
// This problem have two method which is Greedy and Dynamic Programming.
// The time complexity of Greedy method is O(n).
// The time complexity of Dynamic Programming method is O(n ^ 2).
// We manually set the small data set to allow you pass the test in both ways.This is just to let you learn how to use this problem in dynamic programming ways.If you finish it in dynamic programming ways, you can try greedy method to make it accept again.

/**
 * @param A: A list of integers
 * @return: A boolean
 */
// dp 用 can[i] 表示第 i 个点能不能跳到
const canJump = A => {
  // write your code here
  if (!A.length) return false
  // state 构建辅助数组
  const can = []
  for (let i = 0; i < A.length; i++) can[i] = false

  // 初始化起点，第0个点一定能到，本来就在
  can[0] = true

  for (let i = 1; i < A.length; i++) { // 对于第 i 个点，能否从起点 0 跳到第 I 个点，取决于是否存在这样一个点，它在第 i个点前面， 命名为第 J 个，它本身是能从起点跳到的，而且能从 J 出发跳到 I 。
    for (let j = 0; j < i; j++) { // 错点，j 从 0 起始。它在 I 前嘛，i从1开始
      if (can[j] && j + A[j] >= i) { // 能从 J 出发跳到 I
        can[i] = true
        break
      }
    }
  }

  return can[A.length - 1]
}
