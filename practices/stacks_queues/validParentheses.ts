/**
 *
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

 */

/**
 * Understand, Plan, Design, Code, Test, Refactor.

i want to approach this first with a naive solution:

what we could do is for each opener we find, we need to go through the list to find its closer. this would be like O(n**2), right?

but with a stack, if we are pushing in all the openers as they appear, and when we hit a closer, take the top of the stack and see if it is the corresponding closer. if it is not, then invalid. if there are any items left in the queue, then we have no found closers. or if the queue is empty and the the string is not, then it is a fail as well, right?

so that's my pseudo code view of things.

i understand the failing cases. the edge cases would be if the stack overflows, so considering the constraints of 1 <= s.length <= 104, couldn't that happen? what can we do to ensure the stack is ok?


 */

function isValid(s: string): boolean {
  // short circuit cases
  // emtpy string is valid
  if (!s.length) return true;
  // map opening chars to closer chars
  const map: Record<string, string> = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const openers = new Set(Object.keys(map));
  const closers = new Set(Object.values(map));
  // starts with a closing char, is invlaid
  if (closers.has(s[0])) return false;
  // use a stack: fill with opening chars, check top against the current closing char
  const stack: string[] = [];
  // loop through the string at this point
  for (const char of s) {
    // if opening
    if (openers.has(char)) {
      // push into stack
      stack.push(char);
    } else {
      // since string is guaranteed consist of chars of only '()[]{}'.
      if (!stack.length) {
        return false;
      }
      const opener = stack.pop();
      // use the non-null assertion, although we already checked the stack length exists before poping
      if (map[opener!] !== char) {
        return false;
      }
    }
  }
  // if there are still opening chars in the stack
  return stack.length === 0;
}
