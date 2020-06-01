// 445. Add Two Numbers II
// https://leetcode.com/problems/add-two-numbers-ii/

// You are given two non - empty linked lists representing two non - negative integers.The most significant digit comes first and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists ? In other words, reversing the lists is not allowed.

//   Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

// 翻转链表
const addTwoNumbers = (l1, l2) => {
  const reverseList = head => {
    if (!head || !head.next) return head;
    let prev = null;
    let cur = head;

    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }

  if (!l1 || !l2) return l1 || l2;

  let reversedL1 = reverseList(l1);
  let reversedL2 = reverseList(l2);

  let dummy = new ListNode(null);
  let prev = dummy;
  let add = 0;

  while (reversedL1 || reversedL2) { // 检查中加一步，while 或者 递归 的跳出步骤漏了没有
    let sum = (reversedL1 ? reversedL1.val : 0)
      + (reversedL2 ? reversedL2.val : 0)
      + add;

    add = sum > 9 ? 1 : 0;
    const nodeVal = add ? sum - 10 : sum;

    const curNode = new ListNode(nodeVal);
    prev.next = curNode;
    prev = curNode;

    if (reversedL1) reversedL1 = reversedL1.next;
    if (reversedL2) reversedL2 = reversedL2.next;
  }

  if (add) {
    const curNode = new ListNode(1);
    prev.next = curNode;
    prev = curNode;
  }

  return reverseList(dummy.next);
};


