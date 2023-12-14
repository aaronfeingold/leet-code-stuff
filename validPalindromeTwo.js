/**
 * @param {string} s
 * @return {boolean}
 */
// two pointer technique
var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            // let's treat the subsection of the string where the comparison fails as its own mini palindrome
            // if we were to skip one from the left, would it still be valid?
            // or what about if skipping one from right?
            // if either is true, then we are valid
            // but both false, then for sure this palindrome is invalid even if we remove 1 or the other
            return checkSubPalidromeValidity(s, i, j-1) || checkSubPalidromeValidity(s, i+1, j);
        }

        i++;
        j--;
    }

    return true;
};

var checkSubPalidromeValidity = (string, start, end) => {
    while (start < end) {
        if (string[start] !== string[end]) {
            // note: if we use recursion, we could check the subSubString if we allow 2 removals lol
            return checkSubPalidromeValidity(string, start, end-1) || checkSubPalidromeValidity(string, start+1, end);
        }

        start ++;
        end --;
    }

    return true;
}

console.log(validPalindrome("abc"))
