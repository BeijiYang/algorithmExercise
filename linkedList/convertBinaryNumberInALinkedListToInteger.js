// 1290. convert binary number in a linked list to integer 

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list nodes holds the binary representation of a number.
// Return the decimal(十进制的) value of the number in the linked list.

const getDecimalValue = head => {
  if (!head) return null;
  let binaryStr = '';
  while (head) {
    binaryStr += head.val;
    head = head.next;
  }
  return parseInt(binaryStr, 2);
}

// 十进制转其他
// var x = 110;
// x.toString(8);

// 其他转十进制
// x.parseInt(x, 2);
// x.parseInt(x, 8);
// x.parseInt(x, 16);