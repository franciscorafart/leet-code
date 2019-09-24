/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

// Test cases
// [1,2,3,null,5] -> ["1->2->5","1->3"]
// [] -> []
// [1,2,3,4,null,5,6,null,7] ->["1->2->4->7","1->3->5","1->3->6"]
// [1] -> ["1"]

const isLeaf = node => {
    if (node.left || node.right)
        return false;

    return true;
}

const traverseDepth = (node, path, paths) => {
    if (node.left) {
        const leftPath = path.concat([node.left.val]);
        if (isLeaf(node.left)){
            paths.push(leftPath);
        }
        traverseDepth(node.left, leftPath, paths);
    }
    if (node.right){
        const rightPath = path.concat([node.right.val]);
        if (isLeaf(node.right)){
            paths.push(rightPath);
        }
        traverseDepth(node.right, rightPath, paths);
    }
};

var binaryTreePaths = function(root) {
    let paths = [];
    if (root){
        if (isLeaf(root)){
            paths.push([root.val])
        } else {
            traverseDepth(root, [root.val], paths);
        }
    }

    return paths.map(path => path.join("->"))
};