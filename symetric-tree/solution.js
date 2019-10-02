/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Test cases
// [1,2,2,3,4,4,3] -> true
// [1,2,2,null,3,null,3] -> false
// [] ->
// [1] -> true
// [1,0] -> false
// [2,3,3,4,5,5,4,null,null,8,9,null,null,9,8] -> false

var isSymmetric = function(root) {
    let queue1 = [];
    let queue2 = [];

    if (root && root.left)
        queue1.push([root.left, 'left', root.val]);

    if (root && root.right)
        queue2.push([root.right, 'right', root.val]);

    while (queue1.length>0 && queue2.length>0){
        const [root1, root1Position, parentVal1] = queue1.shift();
        const [root2, root2Position, parentVal2] = queue2.shift();

        // Values must be equal, parent's value must be equal, and position (left / right) must be opposite
        if ((root1.val !== root2.val) || (parentVal1 !== parentVal2)|| (root1Position === root2Position)){
            return false;
        }

        //queue1 traverses left first
        if (root1.left){
            queue1.push([root1.left, 'left', root1.val]);
        }
        if(root1.right){
            queue1.push([root1.right, 'right', root1.val]);
        }

        //queue2 traverses right first
        if(root2.right){
            queue2.push([root2.right, 'right', root2.val]);
        }
        if(root2.left){
            queue2.push([root2.left, 'left', root2.val]);
        }
    }

    return (root && queue1.length === 0 && queue2.length === 0);
};