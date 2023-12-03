const TreeNode = function(val, left, right) {
        this.val = (val ? val : 0);
        this.left = (left ? left : null);
        this.right = (right ? right : null);
};

const inorderTraversal = function(root) {
    const data = [];
    traverse(root, data);

    return data;
};

const traverse = (node, data) => {
    if (!node) {
        return;
    }

    traverse(node.left, data);
    data.push(node.val);
    traverse(node.right, data)
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


// expect [4,2,5,1,3,6,7]
console.log(inorderTraversal(newRoot))
