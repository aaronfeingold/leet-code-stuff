var MyLinkedList = function() {
    this.head = null
};

var Node = function (val) {
    this.val = val;
    this.next = null
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // handle invalid cases
    if (index < 0 || this.head === null) {
        return -1
    }

    // initialize an iteration in O(N) time
    let current = this.head;
    let count = 0;

    // while the count is less than the given index
    // and while the value of the current node's next prop is not null
    while (count < index && current.next !== null) {
        current = current.next;
        count ++;
    }

    if (count === index) {
        return current.val;
    } else {
        return -1
    }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // first if no head, make it
    // otherwise, iterate while the current node has a non-null next
    // when the current node's next points to nothing, point it to the new node

    var newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;

        while (current.next !== null) {
            current = current.next
        }

        current.next = newNode;
    }

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // first, if index is zero, then we are really just 'adding to head'
    if (index === 0) {
        this.addAtHead(val);
    }

    // next, lets make the node, start counting, and begin our iteration from the head
    var newNode = new Node(val);
    var count = 0;
    var current = this.head;

    // when we are at the node before the index
    while (count < index - 1 && current) {
        current = current.next
        count ++
    }

    if (count === index - 1 && current) {
        // the new node now needs a next
        // set it to the next value for the current node
        newNode.next = current.next
        // and replace the current's next value with the new node
        current.next = newNode;
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // similar to above
    // if index is 0, we are deleting the head, and need to set the head's next as the new head
    if (index === 0) {
        this.head = this.head.next;

        return;
    }

    // otherwise, we iterate up to the node before the index we are going to delete
    var count = 0;
    var current = this.head;

    while (count < index - 1 && current.next !== null) {
        current = current.next;
        count ++;
    }

    if (count > index - 1 || current.next === null) {
        return;
    }

    current.next = current.next.next;

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
