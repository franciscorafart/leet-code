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

// Test cases
// [3,9,20,null,null,15,7] -> 2
// [] -> 0
// [0] -> 1
// [3,9,20,null,11,15,7,6,9] -> 3

const isLeaf = node => node && !node.right && !node.left

const minDepth = root => {
    if(!root)
        return 0;

    const queue = [[root, 0]];
    let depth = 0;

    while (queue.length>0){
        let [node, localDepth] = queue.shift();
        depth=localDepth+1;

        if (isLeaf(node))
            return depth;

        if (node.left)
            queue.push([node.left, depth]);

        if (node.right)
            queue.push([node.right, depth]);
    }

    return depth;
};