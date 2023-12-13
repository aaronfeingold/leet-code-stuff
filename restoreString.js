/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const newS = {};
    for (let i = 0; i < s.length; i++) {
        newS[indices[i]] = s[i]
    }
    console.log(newS)
    return Object.values(newS).join("");
};

const indices = [4,5,6,7,0,2,1,3];
const s = "codeleet";

console.log(restoreString(s, indices))
