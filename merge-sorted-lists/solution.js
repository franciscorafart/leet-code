/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Test Cases
//[1,2,3] [1,2,3,4,5]
// [1,2,3] [6,7,8,9]
// [][]
// [1,2][]
// [][3,4]

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(null)
    let currentNode = new ListNode(null);

    // first node
    if (l1 && l2){
        if (l1.val < l2.val){
            l3.val = l1.val;
            l1 = l1.next;
        } else {
            l3.val = l2.val;
            l2 = l2.next;
        }
        l3.next = currentNode;
    } else {
        return l1? l1: l2;
    }

    while(l1 || l2){
        if (l1 && l2){
            if (l1.val < l2.val){
                currentNode.val = l1.val;
                l1 = l1.next;
            } else {
                currentNode.val = l2.val;
                l2 = l2.next;
            }

            currentNode.next = new ListNode(null);
            currentNode = currentNode.next;
        } else {
            if (l1){
                currentNode.val = l1.val;
                currentNode.next = l1.next;
            } else {
                currentNode.val = l2.val;
                currentNode.next = l2.next;
            }
            break;
        }
    }

    return l3
};