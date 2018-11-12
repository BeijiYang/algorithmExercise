# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Note that an empty string is also considered valid.

# Example 1:

# Input: "()"
# Output: true
# Example 2:

# Input: "()[]{}"
# Output: true
# Example 3:

# Input: "(]"
# Output: false
# Example 4:

# Input: "([)]"
# Output: false
# Example 5:

# Input: "{[]}"
# Output: true

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        for i in xrange(len(s)):
            cur = s[i]
            if len(stack) == 0:
                pre = None
            else:
                pre = stack[-1]
            if self.match(pre, cur):
                stack.pop()
            else:
                stack.append(cur)

        return len(stack) == 0
        
    def match(self, pre, cur):
        return (pre == "(" and cur == ")") or (pre == "[" and cur == "]") or (pre == "{" and cur == "}")