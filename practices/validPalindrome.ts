function isPalindrome(x: number): boolean {
  // understand
  // what is a palindrome?
  // has a remainder if divided by 10
  // it is non-negative
  // fwd = back
  // control first half
  // treat it like a queue, dequeue the first digit till you have the first half
  if (x < 0 && x % 10 == 0) {
    return false;
  }

  let back = 0;
  while (x > back) {
    back = back * 10 + (x % 10);
    x = Math.floor(x % 10);
  }

  return x === back || x === Math.floor(back / 10);
}

const x = 121;
console.log(isPalindrome(x)); // true
