function kthPalindrome(queries: number[], intLength: number): number[] {
  // for the query, does there exist an answer? is there a 99th of k = 3?
  // controlling palindrome generation
  // odd k: control (L+1)/2
  // aXa -> a = 1 x = 9 -> 191
  // since it cannot end in 0, a is thus 1-9 and x is 0-9
  // even k: control exactly L/2
  // ax flip -> xa -> combined
  // cannot end in a 0, ie queries[i] cannot be greater than 10^(half_length - 1)

  // step one: determine if k odd or even

  // step two: find the half size

  // step three: is query greater than largest possible first half; define the limits

  // if not, find the queries[i]-th first half, mirror it, return the palindome
  const answer: number[] = [];
  const halfLength = Math.floor((intLength + 1) / 2); // Control the half of the palindrome
  const start = Math.pow(10, halfLength - 1); // Start of the first half
  const end = Math.pow(10, halfLength) - 1; // End of the first half
  const maxCount = end - start + 1;

  for (const q of queries) {
    if (q > maxCount) {
      answer.push(-1);
    }

    const firstHalf = start + q - 1;

    if (firstHalf > end) {
      answer.push(-1); // No palindrome for this query
    } else {
      let secondHalf = 0;
      let tempFirstHalf = firstHalf;
      if (intLength % 2 !== 0) {
        tempFirstHalf = Math.floor(firstHalf / 10);
      }

      // Reverse the digits of the first half to form the second half
      while (tempFirstHalf > 0) {
        secondHalf = secondHalf * 10 + (tempFirstHalf % 10);
        tempFirstHalf = Math.floor(tempFirstHalf / 10);
      }
      answer.push(parseInt(`${firstHalf}${secondHalf}`)); // Generate the palindrome
    }
  }

  return answer;
}

const queries = [
  2, 201429812, 8, 520498110, 492711727, 339882032, 462074369, 9, 7, 6,
];
const intLength = 1;

console.log(kthPalindrome(queries, intLength)); // [2,-1,8,-1,-1,-1,-1,9,7,6]
