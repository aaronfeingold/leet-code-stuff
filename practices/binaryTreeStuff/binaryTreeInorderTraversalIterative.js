function TreeNode (val, left, right) {
    this.val = (val ? val : 0);
    this.left = (left ?  left : null);
    this.right = (right ? right : null);
};

function inorderTraversal (root) {
    // step one: initialize empty stack
    const stack = []
    const data = []
    // step two: initialize the current as root
    let current = root
    while (current || stack.length) {
        // step three: if current exists, push it into our stack, and traverse left
        while (current) {
            stack.push(current)
            current = current.left
        }
        // step four: pop from stack, push to data (to be returned)
        const tmp = stack.pop()
        data.push(tmp.val)
        // and set the current to the pop node's right
        current = tmp.right
    }

    return data;
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
