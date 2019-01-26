// 70. Climbing Stairs
// Easy

// You are climbing a stair case.It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?
//   Note : Given n will be a positive integer.
//     Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param n: An integer
 * @return: An integer
 */
const climbStairs = n => {
  if (!n) return 0
  const dpArr = []

  dpArr[0] = 1
  dpArr[1] = 2

  for (let i = 2; i < n; i++) {
    dpArr[i] = dpArr[i - 1] + dpArr[i - 2]
  }

  return dpArr[n - 1]
}

