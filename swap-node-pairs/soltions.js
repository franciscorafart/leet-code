/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


const swapPairs = function(head) {

    if (!head || !head.next)
        return head;

    const finalHead = head.next;

    const swapPairsRec = (previous, currentHead, last) => {
        const nextHead = last.next;

        last.next = currentHead;
        currentHead.next = nextHead;

        if (previous) {
            previous.next = last;
        }

        if (nextHead && nextHead.next){
            swapPairsRec(currentHead, nextHead, nextHead.next);
        }
    }

    swapPairsRec(null, head, head.next);

    return finalHead;
};