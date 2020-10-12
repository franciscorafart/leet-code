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

// [2,1,3] -> True
// [5,1,4,null,null,3,6] -> False
// [] -> True
// [1] -> True
// [1,1] -> False
// [10,5,15,null,null,6,20] -> False
// [10,5,15,null,null,11,20, null,12] -> True


const isValidBST = (root) => {
    if (root){
        // traverse breadth first
        let queue = [{node: root, min: Number.NEGATIVE_INFINITY, max: Number.POSITIVE_INFINITY}];

        while(queue.length>0){
            const {node, min, max} = queue.shift();

            const curVal = node.val;
            if (node.left){
                const thisMin = min;
                const thisMax = node.val;

                if (node.left.val>=curVal || node.left.val<= thisMin || node.left.val >= thisMax)
                    return false;

                queue.push({node: node.left, min: thisMin, max: thisMax});

            }
            if (node.right){
                const thisMin = node.val;
                const thisMax = max;

                if (node.right.val<=curVal || node.right.val<= thisMin || node.right.val >= thisMax)
                    return false;

                queue.push({node: node.right, min: thisMin, max: thisMax});
            }
        }
    }

    return true;
};