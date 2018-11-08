# string to integer
# Given a string, convert it to a integer.

# @param: str: a string
# @return:  an integer

def stringToInteger(str):
    sig = 1
    start = 0
    if str[0] == '-':
        sig = -1
        start = 1
    number = 0
    for index in xrange(start, len(str)):
        item = str[index]
        assert ord(item) >= ord('0') and ord(item) <= ord('9') # need a integer string
        itemNum = ord(item) - ord('0') # int(str)
        number = number * 10 + itemNum
    return number * sig

print stringToInteger('2323')
print stringToInteger('-2333')
print stringToInteger('232=3')
        