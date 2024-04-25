/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const array = [];
    let count = 0;

    while (head != null) {
        array.push(head);
        head = head.next;
        count++;
    }

    return (array[Math.floor(array.length / 2)]);
};

//Runtime: 46ms
//Memory: 49.1 MB