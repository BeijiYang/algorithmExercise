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


// 不翻转链表，利用数组存值
// 代码封装性更好
const addTwoNumbers = (l1, l2) => {
  const getValuesOfLinkedList = head => {
    const values = [];
    let cur = head;
    while (cur) {
      values.push(cur.val);
      cur = cur.next;
    }
    return values;
  }

  const getReslutValues = (arr1, arr2) => {
    if (!arr1.length || !arr2.length) return arr1 || arr2;
    const result = [];
    let add = 0;

    for (let i = 0; i < arr1.length || arr2.length; i++) {
      const cur1 = arr1[i] || 0;
      const cur2 = arr2[i] || 0;
      const sum = cur1 + cur2 + add;
      add = (sum > 9) ? 1 : 0; // 进位是加上一步的 add，故先求 sum 再更新 add
      const val = add ? (sum - 10) : sum
      result.push(val);
    }
    if (add) result.push(add);
    return result;
  }

  const generateLinkedListFromArr = (arr = []) => {
    if (!arr.length) return null;
    const dummy = new ListNode(null);
    let prevNode = dummy;
    arr.forEach(val => {
      const curNode = new ListNode(val);
      prevNode.next = curNode;
      prevNode = prevNode.next;
    })
    prevNode.next = null;
    return dummy.next;
  }

  const reversedValues1 = getValuesOfLinkedList(l1).reverse();
  const reversedValues2 = getValuesOfLinkedList(l2).reverse();
  const resultArr = getReslutValues(reversedValues1, reversedValues2).reverse();
  return generateLinkedListFromArr(resultArr);
};