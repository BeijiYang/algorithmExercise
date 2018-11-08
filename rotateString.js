// Given a string and an offset, rotate string by offset. routate from left to right.
// Given 'abcdefg'
// offset=0 => 'abcdefg'
// offset=1 => 'gabcdef'
// offset=2 => 'fgabcde'
// offset=3 => 'efgabcd'

// 当offset大于长度，是否考虑倍数？

const rotateStr = (str, offset) => {
  if (typeof offset !== 'number' || offset < 0 || offset > str.length) throw Error('invalid offset')
  const headStr = str.slice(str.length - offset)
  const rareStr = str.slice(0, str.length - offset)
  return headStr.concat(rareStr)
}

console.log(rotateStr('abcdefg', 3))

/*

substr()
* 第一个参数 起始位置 前闭
    * 当第一个参数为负，与 length 相加
* 第二个参数 截取的个数
    * 第二个参数为负，将其转为 0

substring()
* 两个参数 前闭后开
* 当第二个参数空缺，切到尾
* 当参数为负，将其转为 0

slice()
* 两个参数 前闭后开
* 当第二个参数空缺，切到尾
* 当参数为负，与 length 相加

*/
