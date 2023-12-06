/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode (val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
};

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

// get the height of BT
var getHeight = (node) => {
    if (!node) return 0;

    var lH = getHeight(node.left);
    var RH = getHeight(node.right);

    return Math.max(lH, RH) + 1;
}

const newRoot = new TreeNode(1);
const nodeOne = new TreeNode(2);
const nodeTwo = new TreeNode(3);
newRoot.left = nodeOne;
newRoot.right = nodeTwo
nodeOne.left = new TreeNode(4);
nodeOne.right = new TreeNode(5)
nodeTwo.right = new TreeNode(6)
nodeTwo.right.right = new TreeNode(7);
nodeTwo.right.right.right = new TreeNode(8);

// expect 5
console.log(getHeight(newRoot))
