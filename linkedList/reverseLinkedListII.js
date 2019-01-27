// 92. Reverse Linked List II
// Medium

// Reverse a linked list from position m to n.Do it in one - pass.
//   Note: 1 ≤ m ≤ n ≤ length of list.
//     Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL, m = 2, n = 4
// Output: 1 -> 4 -> 3 -> 2 -> 5 -> NULL

/**
 * @param head: ListNode head is the head of the linked list 
 * @param m: An integer
 * @param n: An integer
 * @return: The head of the reversed ListNode
 */

const reverseBetween = (head, m, n) => {
  if (!head) return null

  // dummy node
  let dummy = new ListNode(0)
  dummy.next = head

  head = dummy;

  // 先找到四个点 prem m n postn
  let preM, mNode
  for (let i = 1; i < m; i++) {
    if (head == null) return
    head = head.next
  }
  preM = head
  mNode = head.next

  let nNode = mNode
  let postN = mNode.next
  // mNode as prev; postN as curt 
  for (let i = m; i < n; i++) {
    if (postN == null) return
    let temp = postN.next
    postN.next = nNode
    nNode = postN
    postN = temp
  }
  // m - n 段完成了交换，而且 n 也找到了

  // 连接两头
  mNode.next = postN
  preM.next = nNode

  return dummy.next
}
