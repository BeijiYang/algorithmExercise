// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

var MinStack = function () {
  this.stack = []
}

MinStack.prototype.push = function (x) {
  this.stack.push(x)
}

MinStack.prototype.pop = function () {
  this.stack.pop()
}

MinStack.prototype.top = function () {
  let len = this.stack.length
  if (len !== 0) {
    return this.stack[len - 1]
  }
}

MinStack.prototype.getMin = function () {
  let stack = this.stack
  let tempMin = stack[0]
  for (let i = 1; i < stack.length; i++) {
    if (tempMin > stack[i]) {
      tempMin = stack[i]
    }
  }
  return tempMin
}
