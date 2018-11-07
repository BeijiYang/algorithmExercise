# root of quadratic equation of one unknown
import math

def rootOfEquation (a, b, c):
    delta = b * b - 4 * a * c
    if delta < 0:
        return []
    else:
        sqrtedDelta = math.sqrt(delta)
        rootOne = ( -b + sqrtedDelta ) / 2.0 * a
        rootTwo = ( -b - sqrtedDelta ) / 2.0 * a
        return sorted([rootOne, rootTwo])

print rootOfEquation(1, -5, 6)