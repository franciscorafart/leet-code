// Iteration
const reverseList = head => {
    if (head){
        let previous = null;
        let following = null;

        while(head.next){
            following = head.next;
            head.next=previous;
            previous = head;
            head = following;
        }

        head.next = previous;

        return head;
    }

    return null
}