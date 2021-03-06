
//Definition for singly-linked list.
//  function ListNode(val) {
//      this.val = val;
//      this.next = null;
//  }

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 1->2->3->2->1 true
// 1->2->1->2 false
// 1->2->3->2->2 false
// 1->2->2->1 true
// 1->2->1 true
// null true

// Solution uses deep copy of object
const isPalindrome = head => {
    if (!head || head.next==null)
        return true;

    let headB=JSON.parse(JSON.stringify(head))
    let previousNode = null
    let size = 1;

    // reverse in headB. Two headers. One an begining and one in the end.
    while(headB.next != null){
        const next = headB.next
        headB.next = previousNode
        previousNode = headB
        headB = next

        size++
    }
    headB.next = previousNode

    for (let i=1; i<=size/2;i++){
        if (head.val != headB.val){
            return false
        }
        head = head.next;
        headB = headB.next;
    }
    return true
};