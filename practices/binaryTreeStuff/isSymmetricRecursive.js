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
    return helper(root.left, root.right)
};

var helper = (t1, t2) => {
    if (!t1 && !t2) return true
    if (!t1 || !t2 || t1.val !== t2.val) return false

    return helper(t1.left, t2.right) && helper(t1.right, t2.left)
}
