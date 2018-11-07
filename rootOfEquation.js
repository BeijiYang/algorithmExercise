// root of quadratic equation of one unknown

const rootOfEquation = (a, b, c) => {
  const delta = b * b - 4 * a * c
  if (delta < 0) {
    return null
  } else {
    const sqrtedDelta = Math.sqrt(delta)
    const rootOne = (-b + sqrtedDelta) / 2 * a
    const rootTwo = (-b - sqrtedDelta) / 2 * a
    // const root = rootOne < rootTwo ? [rootOne, rootTwo] : [rootTwo, rootOne]
    // return root
    return [rootOne, rootTwo].sort()
  }
}

console.log(rootOfEquation(1, -5, 6))