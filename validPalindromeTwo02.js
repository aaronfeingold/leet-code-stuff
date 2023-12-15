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
            return validPalindrome(s.slice(i + 1, j + 1), true) || validPalindrome(s.slice(i, j - 1), true);
        }

        i++;
        j--;
    }

    return true;
};

console.log(validPalindrome("ebcbbececabbacecbbcbe"))
