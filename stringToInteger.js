// string to integer
// Given a string, convert it to a integer.

// @param: str: a string
// @return:  an integer

const isIntString = (str) => {
  const charCode = str.charCodeAt()
  if (charCode >= '0'.charCodeAt() && charCode <= '9'.charCodeAt()) return true
  return false
}
const strToNum = (str) => (str.charCodeAt() - '0'.charCodeAt())

const stringToInteger = (str) => {
  let start = 0, sig = 1
  if (str[0] === '-') { start = 1, sig = -1 }
  let number = 0
  for (let i = start; i < str.length; i++) {
    const item = str[i];
    if (!isIntString(item)) throw Error('not a integer string')
    const itemNum = strToNum(item)
    number = number * 10 + itemNum
  }
  return number * sig
}


console.log(stringToInteger('123'))
console.log(stringToInteger('-3123'))
console.log(typeof stringToInteger('-3123'))
console.log(stringToInteger('121aaa=222'))
