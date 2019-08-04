// Recursive solution

let reverseListHelper = (head, previous) => {
    let originalNext = null;
    if (head.next)
        originalNext = head.next;

    head.next = previous

    if(originalNext)
        head = reverseListHelper(originalNext, head);

    return head;
}

let reverseList = head => {
    if (head)
        return reverseListHelper(head, null);

    return null
};