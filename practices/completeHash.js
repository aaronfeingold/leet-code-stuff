class MyHashSet {
    constructor() {
        // Initialize an array of buckets, each containing a linked list
        this.buckets = new Array(9).fill(null).map(() => new LinkedList());
    }

    add(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket.contains(key)) {
            bucket.addToTail(key);
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket.contains(key)) {
            bucket.remove(key);
        }
    }

    contains(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        return bucket.contains(key);
    }

    // Hash function
    hash(key) {
        return key % 9;
    }
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToTail(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

