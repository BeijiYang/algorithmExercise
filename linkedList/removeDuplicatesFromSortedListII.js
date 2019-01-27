// 82. Remove Duplicates from Sorted List II
// Medium

// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
//   Example 1:
// Input: 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
// Output: 1 -> 2 -> 5
// Example 2:
// Input: 1 -> 1 -> 1 -> 2 -> 3
// Output: 2 -> 3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  if (!head) return null
  const dummy = new ListNode()
  dummy.next = head

  let prev = dummy
  let curt = head

  while (curt != null) { // 遍历链表
    if (curt.next && curt.val === curt.next.val) { // 当发现两个相同节点
      const val = curt.val
      while (curt && curt.val === val) { // 当有连续的相同节点
        curt = curt.next
      }
      // now: curt == null || curt.val !== val
      prev.next = curt // 删了中间一大堆
    } else { // 小心走不出循环
      prev = curt
      curt = curt.next
    }
  }

  return dummy.next
}