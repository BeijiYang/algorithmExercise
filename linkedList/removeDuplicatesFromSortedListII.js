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
// 二刷
// 注意错点！
const reverseBetween = (head, m, n) => {
  const dummy = new ListNode(0)
  dummy.next = head

  head = dummy // 为了取 preM 的位置

  // 取 preM mNode
  let mNode, preM
  for (let i = 1; i < m; i++) {
    if (head == null) return null
    head = head.next
  }
  preM = head
  mNode = head.next

  // 翻转 m - n 
  let nNode = mNode
  let postN = mNode.next
  // mNode as prev; postN as curt // 错点！nNode as prev 而非 mNode! 后者要里留下来链接大链表！新变量用到这里！！
  for (let i = m; i < n; i++) {
    if (postN == null) return null
    let temp = postN.next
    postN.next = nNode
    nNode = postN
    postN = temp
  }
  // now postN == null || on the n+1 th position

  // 链接大链表
  preM.next = nNode
  mNode.next = postN

  return dummy.next
}