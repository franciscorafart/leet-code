var deleteNode = function(node) {
    if (node.next){
        node.val = node.next.val;
        if(node.next.next){
            deleteNode(node.next);
        } else {
            node.next = null
        }
    }
};