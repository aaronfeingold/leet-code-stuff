/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let deletions = 0;

    while (i <= j) {
        if (s[i] !== s[j]) {
            if (s[i] === s[j - 1]) {
                deletions ++
                if (deletions > 1) {
                    return false
                }
                i++;
                j = j - 2;
                continue;
            } else if (s[i + 1] === s[j]) {
                deletions ++
                if (deletions > 1) {
                    return false
                }
                i = i + 2
                j--
                continue;
            } else {
                return false;
            }
        }


        i++;
        j--;
    }

    return true

};

console.log(validPalindrome("ebcbbececabbacecbbcbe"));
