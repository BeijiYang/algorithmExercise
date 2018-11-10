// Given an array and a value, remove all occurrences of that value in place and return the new length.
// Example
// Given an array [0,4,4,0,0,2,4,4], value=4
// return 4 and front four elements of the array is [0,0,0,2]


const removeElement = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === value) {
      arr.splice(i, 1)
      i = i - 1
    }
  }
  console.log(arr)
  return arr.length
}

console.log(removeElement([0, 4, 4, 0, 0, 2, 4, 4], 4))

  // arr.filter(i => (i !== value)).length 
  // 能得到正确的返回值，但不会改变 arr 数组。filter 方法返回了新的数组。

