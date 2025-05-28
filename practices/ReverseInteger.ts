function reverse(x: number): number {
  // not using Math.pow() appears to be much faster.
  const max = 2 ** 31 - 1; // 2147483647
  const min = -(2 ** 31); // -2147483648

  let result = 0;

  while (x) {
    // pop off digit from 1s place
    const digit = x % 10;
    // truncate will move the quotient towards 0
    x = Math.trunc(x / 10);

    // if the digit we are about to add on to the result would exceed min-max range
    if (result > max / 10 || (result === Math.floor(max / 10) && digit > 7))
      return 0;
    if (result < min / 10 || (result === Math.floor(max / 10) && digit < -8))
      return 0;

    result = result * 10 + digit;
  }

  return result;
}
