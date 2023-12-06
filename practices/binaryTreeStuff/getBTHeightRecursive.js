function TreeNode (val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
};

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
