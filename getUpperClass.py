# letter = 't'

def getUpperClass(letter):
    charCodeOfLetter = ord(letter) + ord('A') - ord('a')
    return chr(charCodeOfLetter)

print getUpperClass('a')
