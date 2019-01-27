// 83. Remove Duplicates from Sorted List
// Easy

// Given a sorted linked list, delete all duplicates such that each element appear only once.

//   Example 1:
// Input: 1 -> 1 -> 2
// Output: 1 -> 2

// Example 2:
// Input: 1 -> 1 -> 2 -> 3 -> 3
// Output: 1 -> 2 -> 3

const deleteDuplicates = head => {
  if (!head) return null

  const dummy = new ListNode()
  dummy.next = head

  let prev = dummy
  let curt = head

  while (curt !== null) {
    if (curt.next && curt.val === curt.next.val) { // 解决发现相邻两节点相同的问题
      let val = curt.val
      while (curt.next && curt.next.val == val) { // 解决一串相同节点的问题
        curt = curt.next
      }
      // now: curt.next == null || curt.next.val !== val
      prev.next = curt
    } else {
      prev = curt
      curt = curt.next
    }
  }

  return dummy.next
}