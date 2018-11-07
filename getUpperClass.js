// letter = 'p'

const getUpperClass = (letter) => {
  const charCodeOfTheLetter = letter.charCodeAt() + 'A'.charCodeAt() - 'a'.charCodeAt()
  const upperClassedLetter = String.fromCharCode(charCodeOfTheLetter)
  return upperClassedLetter
}

console.log(getUpperClass('p'))
