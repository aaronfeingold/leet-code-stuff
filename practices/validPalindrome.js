/**
 * @param {string} s
 * @return {boolean}
 */

// run time = 52ms, beats 94.59%
// memory = 46.58, beats 40.67 %
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase()

    return str.split("").reverse().join("") === str;
};

// should be false...but why?
const test = "0P";

console.log(isPalindrome(test))
