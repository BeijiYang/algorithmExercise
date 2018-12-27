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
const findMinIndex = nums => {
  let minIndex
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) minIndex = i + 1
  }
  return minIndex ? minIndex : 0
}
Array.prototype.reverseArray = function () {
  // const reverseArray = nums => { // 注意箭头函数的 this 问题
  let nums = this
  let start = 0
  let end = nums.length - 1
  let temp
  while (start < end) {
    temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
  return nums
}

const recoverRotatedSortedArray = function (nums) {
  if (!Array.isArray(nums)) return false
  if (nums.length == 0) return nums
  // find the min
  let minIndex = findMinIndex(nums)
  // reverse reverse reverse
  let frontArr = nums.slice(0, minIndex).reverseArray()
  let endArr = nums.slice(minIndex).reverseArray()
  let wholeArr = frontArr.concat(endArr).reverseArray()

  for (let i = 0; i < wholeArr.length; i++) {
    nums[i] = wholeArr[i]
  }
  return nums
}
let nums = [4, 5, 1, 2, 3]
// let nums = [1, 2, 3]
// let nums = [2, 3, 1]
console.log(recoverRotatedSortedArray(nums))

