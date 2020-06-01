// 203. Remove Linked List Elements

// Remove all elements from a linked list of integers that have value val.

// Example:
// Input: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, val = 6
// Output: 1 -> 2 -> 3 -> 4 -> 5

// 递归
const removeElements = (head, val) => {
  if (!head || !val) return head;
  head.next = removeElements(head.next, val);
  return (head.val === val)
    ? head.next
    : head;
}
// 链表的递归还是从那个思路入手：当前节点的 next 部分是余下所有节点的 XX 操作的结果。
// 而不是从循环的思路入手。
// 先圈住第一个节点以后的所有节点，而不是先画第一个节点的具体操作。