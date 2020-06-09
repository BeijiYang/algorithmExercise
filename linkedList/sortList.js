// 148. Sort List
// Medium

// Sort a linked list in O(n log n) time using constant space complexity.

//   Example 1:

// Input: 4 -> 2 -> 1 -> 3
// Output: 1 -> 2 -> 3 -> 4
// Example 2:

// Input: -1 -> 5 -> 3 -> 4 -> 0
// Output: -1 -> 0 -> 3 -> 4 -> 5

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
/**
 * tips:
 *    时间 O(n log n) 的常见 sort 算法，快排、归并。
 *    空间 O(1) constant space 的，对于数组，只有快排，归并 O(n)；对于链表，归并也可以 O(1)。
 *    对于链表的归并排序如下，一个递归的主函数，一个归并排序方法，一个链表找中点的方法。
 */
// merge sort
// 一分为二，左边递归排序，右边递归排序，整体归并，先菊后整。
const sortList = head => {
  if (head == null || head.next == null) return head // 递归的退出条件，为什么 head.next 也不能为空？ 因为这个时候，只剩下一个节点了，可以直接返回了吧。
  const mid = getMiddle(head)

  let right = sortList(mid.next)

  mid.next = null
  let left = sortList(head)

  return mergeLists(left, right)
};

// get the middle of the linked list
const getMiddle = head => {
  let slow = head, fast = head.next // 相比同起点时，偶数时中点位置偏左。如此，可以在利用 mid 与 mid.next，而不用去前继节点（m-1 与 m）。

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

// 两边一个一个取，比大小
const mergeLists = (firstHead, secondHead) => {
  const dummy = new ListNode()
  let tail = dummy

  while (firstHead != null && secondHead != null) {
    if (firstHead.val < secondHead.val) {
      tail.next = firstHead
      firstHead = firstHead.next
    } else {
      tail.next = secondHead
      secondHead = secondHead.next
    }
    tail = tail.next; // 漏
  }
  if (firstHead != null) tail.next = firstHead
  if (secondHead != null) tail.next = secondHead

  return dummy.next
}