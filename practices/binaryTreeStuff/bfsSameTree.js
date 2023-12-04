function TreeNode (val, left, right) {
    this.val = (val ? val : 0);
    this.left = (left ? left : null);
    this.right = (right ? right : null);
};

function isSameTree (p, q) {
    const queue = [p,q];

    while (queue.length > 0) {
        const nodeP = queue.shift();
        const nodeQ = queue.shift();

        if (!nodeP && !nodeQ) {
            continue;
        }

        if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
            return false;
        }

        queue.push(nodeP.left);
        queue.push(nodeQ.left);
        queue.push(nodeP.right);
        queue.push(nodeQ.right);
    }

    return true;
};



const newTreeP = new TreeNode(1);
const treePOne = new TreeNode(2);
const treePTwo = new TreeNode(3);
newTreeP.left = treePOne;
newTreeP.right = treePTwo
treePOne.left = new TreeNode(4);
treePOne.right = new TreeNode(5)
treePTwo.right = new TreeNode(6)
treePTwo.right.right = new TreeNode(7);

const newTreeQ = new TreeNode(1);
const nodeOne = new TreeNode(2);
const nodeTwo = new TreeNode(3);
newTreeQ.left = nodeOne;
newTreeQ.right = nodeTwo
nodeOne.left = new TreeNode(4);
nodeOne.right = new TreeNode(5)
nodeTwo.right = new TreeNode(6)
nodeTwo.right.right = new TreeNode(7);

console.log(isSameTree(newTreeP, newTreeQ));
