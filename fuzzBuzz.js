/* 问题:给你一个整数n。从 1 到 n 按照下面的规则打印每个数: 如果这个数被3整除，打印fizz 如果这个数被5整除，打印buzz 如果这个数能同时被3和5整除，打印fizz buzz
样例:
输入:n = 15
输出:["1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz", "buzz", "11", "fizz", "13", "14", "fizz buzz"]*/

const checkThree = i => (i % 3 === 0)
const checkFive = i => (i % 5 === 0)

const test = n => {
  let tempList = []
  for (let i = 1; i <= n; i++) {
    let item = ''
    if (checkThree(i)) item = "fizz"
    if (checkFive(i)) item = item + "buzz"
    if (!checkThree(i) && !checkFive(i)) item = i
    tempList.push(item)
  }
  return tempList
}
console.log(test(15))
