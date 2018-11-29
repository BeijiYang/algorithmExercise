//  Given a set of distinct integers, nums, return all possible subsets(the power set).
//  Note: The solution set must not contain duplicate subsets.
//  Example:
//  Input: nums = [1, 2, 3]
//  Output:
// [
//   [3],
//   [1],
//   [2],
//   [1, 2, 3],
//   [1, 3],
//   [2, 3],
//   [1, 2],
//   []
//  ]
/**
 * @param nums: A set of numbers
 * @return: A list of lists
 */
const subsetHelper = (nums, subset, result, startIndex) => {
  result.push(subset.slice(0))) // 创建副本，及时捕获值。否则最后得到 m 个相同的[]。作用域的问题。
  for (let i = startIndex; i < nums.length; i++) {
    subset.push(nums[i])
    subsetHelper(nums, subset, result, i + 1)
    subset.pop()
  }
}

const subsets = function (nums) {
  if (!nums) return []
  if (nums.length === 0) return [[]]
  let result = []
  subsetHelper(nums.sort((a, b) => (a - b)), [], result, 0) // sort() 会按 ASKII 来排，2 > 10
  return result
}
