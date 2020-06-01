// Given a singly linked list, determine if it is a palindrome.

//   Example 1:

// Input: 1 -> 2
// Output: false
// Example 2:

// Input: 1 -> 2 -> 2 -> 1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space ?

// 快慢针找到中间节点，然后 reverse the 后半段 of the linked list 
// O(n) O(1) space 因为只在本链表里折腾没多申请空间

const isPalindrome = head => {
  const reverseLinkedList = node => {
    let prev = null
    let cur = node;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }

  const findMid = node => {
    if (!node) return -1;
    let fast = node;
    let slow = node;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  if (!head) return true;
  const mid = findMid(head); // 同下，拿到的不是长度数值，而是链表指针。
  let reversedSecondHalf = reverseLinkedList(mid); // 给该变量赋的值就是翻转后链表的头结点
  while (reversedSecondHalf) { // 如果 dummy node 是 new ListNode()nullr, dummy node d reversedSecondHalf 是节点，非空，会转换为 true。reversedSecondHalf.val 是节点值，null
    if (head.val !== reversedSecondHalf.val) return false;
    head = head.next; // while 时注意退出条件的达成
    reversedSecondHalf = reversedSecondHalf.next;
  }
  return true;
}
