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
// merge sort
// 一分为二，左边递归排序，右边递归排序，整体归并，先菊后整。
const sortList = head => {
  if (head == null || head.next == null) return head // 递归的退出条件，为什么 head.next 也不能为空？ 因为这个时候，只剩下一个节点了，可以直接返回了吧。
  const mid = getMiddle(head)

  let right = sortList(mid.next)

  mid.next = null
  let left = sortList(head)

  return mergeSort(left, right)
};

// get the middle of the linked list
const getMiddle = head => {
  let slow = head, fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

// 两边一个一个取，比大小
const mergeSort = (firstHead, secondHead) => {
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