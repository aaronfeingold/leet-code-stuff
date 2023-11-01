/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();

    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};

const test = "   fly  me   to   the moon  "

console.log(lengthOfLastWord(test))
