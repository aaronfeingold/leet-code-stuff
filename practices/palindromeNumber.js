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