const reverseListHelper = (previous, head) => {
    nextHead = head.next;
    head.next = previous;

    return nextHead? reverseListHelper(head, nextHead): head;
}

const reverseList = head => (!head || !head.next)? head: reverseListHelper(null, head);
