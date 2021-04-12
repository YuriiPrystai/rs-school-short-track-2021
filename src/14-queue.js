const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let size = 0;
    let tmp = this.first;
    while (tmp) {
      size++;
      tmp = tmp.next;
    }
    return size;
  }

  enqueue(element) {
    if (!this.queue) {
      this.queue = new ListNode(element);
      this.first = this.queue;
    } else {
      while (this.queue.next) {
        this.queue = this.queue.next;
      }
      this.queue.next = new ListNode(element);
    }
  }

  dequeue() {
    const res = this.first.value;
    this.first = this.first.next;
    this.queue = this.first;
    return res;
  }
}

module.exports = Queue;
