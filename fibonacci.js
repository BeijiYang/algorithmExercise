/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
const fibonacci = function (n) {
  let a = 0
  let b = 1
  let c
  for (let i = 1; i < n; i++) {
    c = a + b
    a = b
    b = c
  }
  return a
}
// a, b=>c       //a,b 往前平移了零次
//    a, b=>c    //a,b 往前平移了一次
//       a, b=>c //a,b 往前平移了两次
// 0, 1, 1, 2, 3

// 递归性能差
// const fibonacci = function (n) {
//   if (n === 1) return 0
//   if (n === 2) return 1
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }