// 143. Reorder List
// Medium

// Given a singly linked list L: L0→L1→…→Ln - 1→Ln,
//   reorder it to: L0→Ln→L1→Ln - 1→L2→Ln - 2→…
// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:
// Given 1 -> 2 -> 3 -> 4, reorder it to 1 -> 4 -> 2 -> 3.
// Example 2:
// Given 1 -> 2 -> 3 -> 4 -> 5, reorder it to 1 -> 5 -> 2 -> 4 -> 3.
/**
 * tips:
 *  1 看题意：奇数位：0,1,2,3... 偶数位：n, n-1, n-2...
 *  2 链表单向，想要回溯，只能反转之
 *  3 两条链表，按某种条件，组合成一个大的，想到归并排序算法（最关键）
 * 
 *  4 本题由若干常用操作组成
 *  
 * 
 */
const reorderList = head => {
  if (head == null || head.next == null) return head

  const mid = getMid(head)
  const tail = reverseList(mid.next)
  mid.next = null // 前半段也有了

  merge(head, tail)
}

const getMid = head => {
  let slow = head, fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

const reverseList = head => {
  let prev = null
  let curt = head
  while (curt != null) {
    let temp = curt.next
    curt.next = prev
    prev = curt
    curt = temp
  }
  return prev
}
// 奇数位：0,1,2,3... 偶数位：n, n-1, n-2...
const merge = (head, tail) => {
  let dummy = new ListNode(0)
  let newHead = dummy
  let count = 0

  while (head != null && tail != null) {
    if (count % 2 != 0) {
      newHead.next = tail
      tail = tail.next
    } else {
      newHead.next = head
      head = head.next
    }
    count++
    newHead = newHead.next
  }
  if (head != null) newHead.next = head
  if (tail != null) newHead.next = tail

  return newHead
}
