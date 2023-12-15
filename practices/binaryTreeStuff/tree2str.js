function TreeNode (val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
};

var tree2str = function(root) {
    if (!root) {
        return '';
    }
    if (!root.left && !root.right) {
        return `${root.val.toString()}`;
    } else if (!root.right) {
        return `${root.val.toString()}(${tree2str(root.left)})`;
    } else {
        return`${root.val.toString()}(${tree2str(root.left)})(${tree2str(root.right)})`;
    }
};

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

console.log(tree2str(newRoot))
