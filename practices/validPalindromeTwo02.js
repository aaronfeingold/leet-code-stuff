/**
 * @param {string} s
 * @return {boolean}
 */
// two pointer technique
var validPalindrome = function(s, deletions = false) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            if (deletions) {
                return false;
            }
            // scenario 1:
            // move the pointer at i to the right 1 so we cut off i
            // but in order to include the letter at j in the new slice, we need to slice up to 1 index after
            // scenario 2:
            // leave i where it is so we include the letter there
            // but to cut off the letter at j, we slice up to the index
            return validPalindrome(s.slice(i + 1, j + 1), true) || validPalindrome(s.slice(i, j), true);
        }

        i++;
        j--;
    }

    return true;
};

console.log(validPalindrome("ebcbbececabbacecbbcbe"))
