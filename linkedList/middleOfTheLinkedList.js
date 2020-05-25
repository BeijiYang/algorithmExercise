// 876. Middle of the linked list
// Given a non-empty, singly linked list with head node `head`, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

// 测量长度，取其一半
const middleNode = head => {
  let length = 0;
  let mid = head;
  while (head) {
    head = head.next;
    length++;
  }
  let midLen = Math.floor(length / 2);
  while (midLen > 0) {
    mid = mid.next;
    midLen--;
  }
  return mid;
}

// 快慢指针
const middleNode = head => {
  // if (!head.next) return head;
  let slow = head;
  let fast = head;
  while (fast && fast.next) { // 边界，快指针一次走两步
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}