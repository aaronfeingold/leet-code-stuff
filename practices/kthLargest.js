/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.stream = []
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // if the value is not already in the stream (ie no duplicates)
        if (!this.sortedNums.includes(val)) {
            // push it in as last in array
            this.sortedNums.push(val);
            // now set the reset length
            this.length = this.sortedNums.length
            // reorder with largest element as last element
            this.sortedNums = this.sortedNums.sort(function(a,b) { return a-b});
        }

        // now sorted
        return this.length - 1;
    };
};


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const obj = new KthLargest(3, [4,5,8,2]);
obj.add(3) // return 4
