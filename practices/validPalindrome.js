/**
 * @param {string} s
 * @return {boolean}
 */

// run time = 78ms, beats 12.97%
// memory = 53.98, beats 5.08 %
var isPalindrome = function(s) {
    const string = s.trim().toLowerCase()

    const arr = []
    for (const char of string) {
        if (char.match(/[a-z0-9]/i)) {
            arr.push(char)
        }
    }

    const fwd = arr.join("")
    const rvs = [ ...arr ].reverse().join("")

    if (fwd === rvs) {
        return true
    }

    return false
};

// should be false...but why?
const test = "0P";

console.log(isPalindrome(test))
