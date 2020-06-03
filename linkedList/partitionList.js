// 86. Partition List
// Medium

// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

//   Example:
// Input: head = 1 -> 4 -> 3 -> 2 -> 5 -> 2, x = 3
// Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5

// 本题其实就是快排的一个重要步骤。 
// 先整体有序，再局部有序。即先整个一分为二，使得左边小右边大。（接着两边再递归进行）

// 快排不稳定

// time 平均 nlogn （最坏 n2 平方）
// space O(1) 在数组上
/**
 * @param head: The first node of linked list
 * @param x: An integer
 * @return: A ListNode
 */
/**
 * tip:
 *  构建两条链表，一条链比 x 小的；一条链大的
 *  最后连起两条链表，注意头尾值，尤其尾部的 null。
 */
const partition = (head, x) => {
  const lowerDummy = new ListNode(0)
  const higherDummy = new ListNode(0)

  let lower = lowerDummy
  let higer = higherDummy

  while (head !== null) {
    if (head.val < x) {
      lower.next = head
      lower = head
    } else {
      higer.next = head
      higer = head
    }
    head = head.next
  }

  lower.next = higherDummy.next
  higer.next = null // 勿漏掉头尾！2020.6.重写，也丢了尾部的 null。造成了返回的链表有环，内存堆溢出。注意哦。

  return lowerDummy.next
}

