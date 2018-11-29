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
  result.push(subset.slice(0))
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
  subsetHelper(nums.sort((a, b) => (a - b)), [], result, 0)
  return result
}
