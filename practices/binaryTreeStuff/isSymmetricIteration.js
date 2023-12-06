/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 // BFS with a queue iteratively
 var isSymmetric = function(root) {
    const queue = [root.left, root.right];

    while (queue.length) {
        const leftNode = queue.shift()
        const rightNode = queue.shift()
        // if both are null, short cicruit
        if (!leftNode && !rightNode) {
            continue;
        }
        // but if only one is null but no the other, this is not symmetrical
        // also if the value of leftnode is not that of the right node being compared, it is not symmetical
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false
        }
        // what is the order push into the queue?
        // since BFS, look at left's left and right's right
        // then left's right, and right's left
        queue.push(leftNode.left)
        queue.push(rightNode.right)
        queue.push(leftNode.right)
        queue.push(rightNode.left)

    }

    return true
};
