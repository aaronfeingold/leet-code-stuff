class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    // insert the head, essentially:
    insertFirst(data) {
        // if there is already something in the head, we want to push it to the next
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // handle edge cases
        // if nothing here, the make it the head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                // traverse through the list
                current = current.next;
            }

            current.next = node;
        }

        this.size++
    }
    // Insert at index
    insertAt(data, index) {
        // handle edge cases
        // if we try to put an index that does not exist (out of range), don't do anything, maybe throw an error
        if (index > 0 && index > this.size) {
            return;
        }

        // if first index, then just set as head
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);

        let current, previous;
        // start loop from head
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count ++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size ++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            count ++;
            current = current.next
        }
    }

    // Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count ++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            this.size --;
        }
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 4);

// ll.removeAt(2);
ll.clearList();
ll.printListData();
// ll.getAt(3);
