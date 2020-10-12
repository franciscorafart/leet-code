/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Test cases
// head = [3,2,0,-4], pos = 1 => true
// head = [3,2,0,-4], pos = 2 => true
// head = [3,2,0,-4], pos = -1 => false
// head = [1,2], pos = 0 => true
// head = [1], pos=-1 => true
// head = [], pos = -1 => false

const hasCycle = head => {
    let visited = false;
    if (head){
        const visitedMemo = new Map();
        while (!visited && head.next != null){
            if (visitedMemo.get(head)){
                visited=true;
            } else {
                visitedMemo.set(head, true);
                head = head.next;
            }
        }
    }

    return visited
};