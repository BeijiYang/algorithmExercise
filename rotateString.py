# Given a string and an offset, rotate string by offset. routate from left to right.
# Given 'abcdefg'
# offset=0 => 'abcdefg'
# offset=1 => 'gabcdef'
# offset=2 => 'fgabcde'
# offset=3 => 'efgabcd'

def rotate(str, offset):
    assert offset >= 0
    if offset > len(str):
        offset = offset % len(str)
    doubledStr = str * 2
    start = len(str) - offset
    end = len(str) - offset + len(str)
    result = doubledStr[start:end]
    return result

print rotate('abc', 1)
print rotate('abcdef', 13)

# @parama: str: an array of char # list
# @parama: offset: an integer
# @return: nothing
def rotateTheStr(str, offset):
    assert offset >= 0
    if offset > len(str):
        offset = offset % len(str)
    start = len(str) - offset
    end = 2 * len(str) - offset
    result = (str * 2)[start:end]
    # str = result # wrong on lintcode because of the reference thing
    for index in xrange(len(str)):
        str[index] = result[index]
