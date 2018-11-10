# coding=UTF-8

# Given an array and a value, remove all occurrences of that value in place and return the new length.
# Example
# Given an array [0,4,4,0,0,2,4,4], value=4
# return 4 and front four elements of the array is [0,0,0,2]

def removeElement(A, elem):
    length = len(A)
    for i in xrange(length-1, -1, -1):
    # for i in xrange(length-1):
        # print i
        c = A[i]
        if c == elem:
            A.remove(c)
            # print A
    print A
    return len(A)
        

print removeElement([0,4,4,0,0,2,4,4], 4)

"""
正序地删，下标越来越大，而 list 实际长度可能随着删除越来越短，可能造成下标越界。
而逆序地删，下标越来越小，list 实际长度可能减小可能不变，就安全了。
"""