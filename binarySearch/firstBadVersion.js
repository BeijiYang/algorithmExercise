// Description
// The code base version is an integer start from 1 to n.One day, someone committed a bad version in the code case, so it caused this version and the following versions are all failed in the unit tests.Find the first bad version.

// You can call isBadVersion to help you determine which version is the first bad one.The details interface can be found in the code's annotation part.

// Example:
// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// 1 2 3 4 5 6
// O O O X X X
// Then 4 is the first bad version. 
/**
  * @param {integer} n Total versions
  * @return {integer} The first bad version
*/

const solution = isBadVersion => n => {
  let start = 1, end = n, mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2)
    if (isBadVersion(mid)) {
      end = mid
    } else {
      start = mid
    }
  }
  if (isBadVersion(start)) return start
  // if (isBadVersion(end)) return end
  return end // 保证有解
}
