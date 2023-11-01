/**
 * @param {string} s
 * @return {boolean}
 */

// run time = 78ms, beats 12.97%
// memory = 53.98, beats 5.08 %
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase()

    return str.split("").reverse().join("") === str;
};

// should be false...but why?
const test = "0P";

console.log(isPalindrome(test))
