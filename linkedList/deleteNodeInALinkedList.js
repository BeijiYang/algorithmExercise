// 237. delete node in a linked list
// write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
// do not return anything from your function.
// e.g.
//   head = [4, 5, 1, 9] node = 5; output [4, 1, 9]

const deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
}