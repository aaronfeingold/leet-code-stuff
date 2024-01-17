
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    var reverse = reverseList(copyList(head));
    while (head && reverse) {
        if (head.val !== reverse.val) {
            return false;
        }
        head = head.next;
        reverse = reverse.next;
    }

    return true;
}

var reverseList = function(head) {
    var previous = null;
    var current = head;

    while (current) {
        var nextNode = current.next;
        current.next = previous;

        previous = current;
        current = nextNode;
    }

    return previous;
};

var copyList = function(head) {
    var dummy = new ListNode();
    var current = dummy;

    while (head) {
        current.next = new ListNode(head.val);
        current = current.next;
        head = head.next;
    }

    return dummy.next;
}
const newHead = new ListNode(1)
const first = new ListNode(1)
newHead.next = first
const second = new ListNode(2)
first.next = second
const last = new ListNode(1)
second.next = last

// fwd: [1,1,2,1]
// rvs: [1,2,1,1]
console.log(isPalindrome(newHead))
