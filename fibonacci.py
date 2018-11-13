def fibonacci(n):
  a = 0
  b = 1
  for i in xrange(1, n):
    c = a + b
    a = b
    b = c
return a