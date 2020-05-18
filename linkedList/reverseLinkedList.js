// 206. Reverse Linked List
// Easy

// Reverse a singly linked list.

//   Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
/**
 * @param head: n
 * @return: The new head of reversed linked list.
 */
const reverse = head => {
  let prev = null
  let curt = head

  while (curt !== null) {
    let temp = curt.next
    curt.next = prev
    prev = curt
    curt = temp
  }
  // curt == null
  return prev
}

const reverseList = head => {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
