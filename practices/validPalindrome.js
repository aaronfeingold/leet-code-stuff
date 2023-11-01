/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const string = s.trim().toLowerCase()

    const arr = []
    for (const char of string) {
        if (char.match(/[a-z]/i)) {
            arr.push(char)
        }
    }

    const fwd = arr.join("")
    const rvs = arr.reverse().join("")

    if (fwd === rvs) {
        return true
    }

    return false
};

const test = "0P";

isPalindrome(test)
