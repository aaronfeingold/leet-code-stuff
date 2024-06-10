const isPalindrome = function(x) {
  const a = Array.from(String(x), Number)
  const b = a.reverse()
  const c = parseInt(b.join(''))
  if(x !== c){
    return false
  }
  return true
};

console.log(isPalindrome(1000021))

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeTwoPointers = function(x) {
    // two pointer technique
    // step one, convert number to array
    // step two, compare pointers and move them along
    const arr = Array.from(String(x));
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] === arr[j]) {
            // loop housekeeping
            i++;
            j--;
            continue;
        } else {
            return false;
        }
    }

    return true;
}
