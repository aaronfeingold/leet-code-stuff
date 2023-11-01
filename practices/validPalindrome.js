/**
 * @param {string} s
 * @return {boolean}
 */

// run time = 52ms, beats 94.59%
// time complexity is O(n) since we predominantly linear scan the s
// memory = 46.58, beats 40.67 %
// space complexity if O(n) since the str and the reverse str all depend on the length of s
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase()

    return str.split("").reverse().join("") === str;
};
