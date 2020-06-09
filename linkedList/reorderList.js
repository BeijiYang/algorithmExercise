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

// 2020.6
// 审题想思路时，用偶数个节点的链表为例子，想出了：链表按index奇数数分为两个链表，反正偶数链表，再 merge 的思路。
// 没有用奇数个节点的链表验证思路，就直接开写了。浪费了时间，后来才发现不对，应该是中间切一刀，翻转后半段。
// ~~不过总算是一次过。~~ 呃，并不是。忘了检验空链表等边界情况了。

const reorderList = head => {
  //     const splitToOddEven = head => {
  //         const dummyOdd = new ListNode(null);
  //         let odd = dummyOdd;
  //         const dummyEven = new ListNode(null);
  //         let even = dummyEven;
  //         let cur = head;

  //         while(cur && cur.next) {
  //             odd.next = cur;
  //             odd = cur;
  //             cur = cur.next;
  //             even.next = cur;
  //             even = cur;
  //             cur = cur.next;
  //         }
  //         if (cur) {
  //             odd.next = cur;
  //             odd = cur;
  //         }
  //         odd.next = null;
  //         even.next = null;
  //         return [odd, even]
  //     }
  const getMid = head => {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  const reverseList = head => {
    let prev = null;
    let cur = head;

    while (cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return prev;
  }

  const mergeList = (odd, even) => {
    const dummy = new ListNode(null);
    let prev = dummy;

    while (odd && even) {
      prev.next = odd;
      prev = odd;
      odd = odd.next;
      prev.next = even;
      prev = even;
      even = even.next;
    }
    if (odd || even) prev.next = odd || next;
    return dummy.next;
  }

  // const [odd, even] = splitToOddEven(head);
  const mid = getMid(head);
  const right = mid.next;
  mid.next = null;
  const left = head;
  // const reversedEven = reverseList(even);
  const reversedRight = reverseList(right);
  // return mergeList(odd, reversedEven);
  return mergeList(left, reversedRight);
};