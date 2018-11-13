/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
const fibonacci = function (n) {
  let a = 0
  let b = 1
  let c

  if (n == 1) return a
  if (n == 2) return b
  if (n > 2) {
    for (var i = 3; i <= n; i++) {
      c = a + b
      a = b
      b = c
    }
    return c
  }
}