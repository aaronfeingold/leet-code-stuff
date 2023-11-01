/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const string = s.trim().toLowerCase()
    console.log(`string: ${string}`);
    // string: 0p

    const arr = []
    for (const char of string) {
        if (char.match(/[a-z]/i)) {
            arr.push(char)
        }
    }

    const fwd = arr.join("")
    const rvs = arr.reverse().join("")
    console.log(`fwd: ${fwd}`)
    // fwd: p
    console.log(`rvs: ${rvs}`)
    // rvs: p
    if (fwd === rvs) {
        return true
    }

    return false
};

// should be false...but why?
const test = "0P";

console.log(isPalindrome(test))
