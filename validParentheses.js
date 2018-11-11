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