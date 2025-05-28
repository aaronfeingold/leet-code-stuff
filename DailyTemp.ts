function dailyTemperatures(temperatures: number[]): number[] {
  // next greater element problem
  // create an array the length of temps for our answers
  // use a stack to store the indexes
  // iterate over the list of temps
  // pop off the stack when current temp is greater than temp at top of stack
  // find the difference between indexes and store in answers
  const answer: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    // continue to drain the stack
    // if curr temp is great than val
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // add exclamation point to assert we know that the stack can be popped here
      const previousIndex = stack.pop()!;
      answer[previousIndex] = i - previousIndex; // days to wait
    }

    stack.push(i);
  }

  return answer;
}
