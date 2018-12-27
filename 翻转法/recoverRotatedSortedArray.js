// Description
// Given a rotated sorted array, recover it to sorted array in -place.
//   Clarification
// What is rotated array ?
//   For example, the orginal array is[1, 2, 3, 4], The rotated array of it can be[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]
// Example
// [4, 5, 1, 2, 3] -> [1, 2, 3, 4, 5]

/**
 * @param nums: An integer array
 * @return: 
 */
const recoverRotatedSortedArray = function (nums) {
  if (!Array.isArray(nums)) return false
  if (nums.length == 0) return nums

  console.log('-------')
  // find the min
  let minIndex
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) minIndex = i + 1
  }

  console.log(minIndex)
  // reverse reverse reverse
  let frontArr = nums.slice(0, minIndex).reverse()
  let endArr = nums.slilce(minIndex).reverse()
  let wholeArr = frontArr.concat(endArr).reverse()
  return wholeArr
}

console.log(recoverRotatedSortedArray([4, 5, 1, 2, 3]))


