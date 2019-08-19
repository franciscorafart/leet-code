/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Test cases:
// [] => 0
// [1,23,34,53,76,23,15,56,7] => 4
// [1,23,34,null,76,23,15,null,7, 12,45,23,12,54] => 5

var maxDepth = function(root) {
    // using a queue push and take elements from top
    // keep track of elements pushed per level
    let currentLevel = 0;
    let elementsLevel = 1;

    let queue = root? [root]:[]

    while(queue.length>0){
        const element = queue.shift();
        elementsLevel--

        if (element.right){
            queue.push(element.right);
        }

        if (element.left){
            queue.push(element.left);
        }

        if (elementsLevel == 0) {
            currentLevel++;
            elementsLevel = queue.length;
        }
    }

    return currentLevel
};