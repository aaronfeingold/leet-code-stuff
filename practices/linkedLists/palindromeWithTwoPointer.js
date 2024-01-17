
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// two pointer to find middle and cut in half
var isPalindrome = function(head) {
    // of course, consider base case first, since
    // empty or single node is a palindrome
    if (!head || !head.next) {
        return true;
    }

    // initialize pointers from the head
    var slow = head;
    var fast = head;

    // loop through the linked list with fast pointer going double speed
    // so we will break out fo the loop when the slow one is at halfway point
    // and this we have a pointer at the halfway mark
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    // now reverse the list that begins from where the slow pointer left off
    var reversedSecondHalf = reverse(slow)

    // if the second half reversed is not the same as the first half going forwards
    // it is not a palindrome
    // we only need to loop for the length of the reversed second half
    while (reversedSecondHalf) {
        if (head.val !== reversedSecondHalf.val) {
            return false;
        }
        // otherwise, move on the next node in each list
        head = head.next
        reversedSecondHalf = reversedSecondHalf.next;
    }

    return true;
};

var reverse = function(list) {
    var previous = null;
    var current = list

    while (current) {
        var nextNode = current.next
        current.next = previous

        previous = current
        current = nextNode
    }

    return previous
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
