// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//   Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//   Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

const match = (pre, cur) => {
  if ((pre === "{" && cur === "}") || (pre === "[" && cur === "]") || (pre === "(" && cur === ")")) return true
}

const isValid = s => {
  const stack = []
  s.split("").forEach(curItem => {
    const prevItem = stack[stack.length - 1]
    match(prevItem, curItem) ? stack.pop() : stack.push(curItem)
  })
  return stack.length === 0 ? true : false
};

// another solution of match function
const match = (pre, cur) => {
  switch (pre + cur) {
    case "{}":
    case "[]":
    case "()":
      return true

    default:
      return false
  }
}