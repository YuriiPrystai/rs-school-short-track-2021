/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let result = l;
  let list = l;
  while (list) {
    if (list.next) {
      if (list.value === k && list === l) {
        result = list.next;
      }
      if (list.next.value === k) {
        if (list.next.next) {
          list.next = list.next.next;
        } else {
          list.next = null;
          break;
        }
      }
      list = list.next;
    } else if (list === l && list.value === k) {
      list = null;
      break;
    } else {
      break;
    }
  }
  return result;
}

module.exports = removeKFromList;
