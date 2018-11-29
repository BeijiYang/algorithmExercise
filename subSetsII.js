// Given a collection of integers that might contain duplicates, nums, return all possible subsets(the power set).
//   Note: The solution set must not contain duplicate subsets.
// Example:
// Input: [1, 2, 2]
// Output:
// [
//   [2],
//   [1],
//   [1, 2, 2],
//   [2, 2],
//   [1, 2],
//   []
// ]

var subsetsWithDup = function (nums) {
  if (!nums) return
  if (nums.length === 0) return [[]]
  let results = []
  nums.sort((a, b) => (a - b))
  search(nums, results, [], 0)
  return results
}

var search = function (nums, results, subset, startIndex) {
  results.push(subset.slice())
  for (let i = startIndex; i < nums.length; i++) {
    if (i > startIndex && nums[i] == nums[i - 1]) continue; // the only differenct between subSets1 and subSets2.
    subset.push(nums[i])
    search(nums, results, subset, i + 1) // 递归，startIndex 后移一位
    subset.pop()
  }
}
