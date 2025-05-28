/*
 *
 * a string that contains parenthsis:
 *
 * input:
 * "(e(dfas+@))fdafs)"
 * ((())))
 *
 * question to tell where to add MINIMAL parenthis to make it a valid expression.
 *
 * output:
 * [{10, '('}]
 */

// is it a valid sentence with parenthesis
// return an empty array

// memoize where the opening parenthesis and their index
// is there a corresponding closer
// count how many openers, how many closers
// if diff > 1 either way
// then we need to asses what the index is, and note the next index where the corresponding one needs to go

// for every opener, there must be a closer, openers must come first.
// if its nested, ")" => {0, "("}

// edge cases: if the string is only a closing parenthesis, then we need to add an opener at the beginning

const correctParenthesis = (s) => {
  // a list of corrections, if any
  // will be objects with the index and the character to add
  const corrections = [];
  // a stack of all the openers
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // if opener, push the index into the stack
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      // if closer, pop the last opener
      if (stack.length === 0) {
        corrections.push([i, "("]);
      } else {
        stack.pop();
      }
    }
  }

  // cleanup: Any unmatched opening parentheses left in the stack
  while (stack.length > 0) {
    corrections.push([stack.pop(), ")"]);
  }
};
