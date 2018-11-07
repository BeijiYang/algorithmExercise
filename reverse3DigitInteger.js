/*描述
反转一个只有3位数的整数。
你可以假设输入一定是一个只有三位数的整数，这个整数大于等于100，小于1000。
样例
123 反转之后是 321。
900 反转之后是 9。*/

const reverse = num => {
  // const string = num + '';
  const string = num.toString()
  let tempArr = string.split('')
  let reversedArr = tempArr.reverse()
  while (reversedArr[0] == 0) {
    reversedArr.shift()
  }
  let reversedString = reversedArr.join('')
  return reversedString
}
console.log(reverse(123))
console.log(reverse(900))
