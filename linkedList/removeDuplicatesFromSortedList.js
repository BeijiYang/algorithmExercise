// 83. Remove Duplicates from Sorted List
// Easy

// Given a sorted linked list, delete all duplicates such that each element appear only once.

//   Example 1:
// Input: 1 -> 1 -> 2
// Output: 1 -> 2

// Example 2:
// Input: 1 -> 1 -> 2 -> 3 -> 3
// Output: 1 -> 2 -> 3

// 循环
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

// 递归
const deleteDuplicates = head => {
  if (!head || !head.next) return head;
  head.next = deleteDuplicates(head.next); // 链表递归常用思路：当前节点的 next 是其余所有节点的 xx 操作的结果。
  return head.val === head.next.val
    ? head.next
    : head;
}

  // while(head) {     // 先抽象递归三要素列出来，不要受循环思路影响先上 while
  //   if (head.val === head.next.val) {
  //     head.next = deleteDuplicates(head.next.next);
  //     return head
  //   } else {
  //     return head.next
  //   }
  // }
// }

