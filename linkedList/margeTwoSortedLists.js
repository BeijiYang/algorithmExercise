// 21.merge two sorted lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// 1 -> 2 -> 4; 1 -> 3 -> 4
// 1 -> 1 -> 2 -> 3-> 4 -> -> 4

// 递归
const mergeTwoLists = (h1, h2) => {
  if (!h1 || !h2) return h1 || h2;
  while (h1 && h2) {
    if (h1.val < h2.val) {
      h1.next = mergeTwoLists(h1.next, h2); // 链表递归常用思路，该节点的 next 是其余所有节点 xx 操作后的结果链表
      return h1; // 返回这一步的操作结果，所有节点 XX 操作后的完整链表
    } else {
      h2.next = mergeTwoLists(h1, h2.next);
      return h2;
    }
  }
}

// 循环
const mergeTwoLists = (h1, h2) => {
  if (!h1 || !h2) return h1 || h2;
  const empty = new listNode(null);
  let cur = empty; // 对于 const 的变量，查是否有改动
  while (h1 && h2) {
    if (h1.val < h2.val) {
      cur.next = h1;
      cur = h1;
      h1 = h1.next;
    } else {
      cur.next = h2;
      cur = h2;
      h2 = h2.next;
    }
  }
  cur.next = h1 || h2;
  return empty.next;
}

