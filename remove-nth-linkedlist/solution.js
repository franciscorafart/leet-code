const removeHelper = (head, n, count) => {

    if (n==count){ // removes first or only element
        head = head.next
    } else if (n<count-1){
        head.next = removeHelper(head.next, n, count-1)
    } else if (n==count-1){
        if (head.next != null && head.next.next != null){
            head.next = head.next.next
        } else {
            head.next = null
        }
    }

    return head;
}

const removeNthFromEnd = (head, n) => {
    let count = 1;
    let thisHead = head;
    while(thisHead.next != null){
        thisHead = thisHead.next;
        count++
    }
    return removeHelper(head, n, count);
};
