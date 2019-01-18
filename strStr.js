// 28. Implement strStr()
// Easy

// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.
//   Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Solution I
// const strStr = (haystack, needle) => (haystack.indexOf(needle))

// Solution II
// 思路 不断切相同长度的子串下来进行比较，直到主串长度不够
const strStr = (haystack, needle) => {
  const haystackLen = haystack.length
  const needleLen = needle.length

  for (let i = 0; i <= haystackLen - needleLen; i++) {
    // const slicedStr = haystack.slice(i, i+needleLen)
    const slicedStr = haystack.subStr(i, needleLen)
    if (slicedStr == needle) return i
  }
  return -1
}

// Solution III
var strStr = function (haystack, needle) {
  if (needle === '') return 0
  if (needle.length > haystack.length) return -1
  if (haystack == needle) return 0

  for (let i = 0; i < haystack.length; i++) {
    // 找到每个匹配的位置
    if (haystack[i] === needle[0]) {
      if (needle.length == 1) return i

      // 看子串剩余部分是否也匹配
      let t = i + 1
      for (let j = 1; j < needle.length; j++ , t++) {
        if (haystack[t] !== needle[j]) break //return -1
        if (j == needle.length - 1) return t - j
      }
    }
  }
  return -1
};

//tip: JS + string  可以切啊