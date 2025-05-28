function demonstrateMinCalculation(s: string, k: number) {
  console.log(`\nString: "${s}", k: ${k}, length: ${s.length}`);

  for (let start = 0; start < s.length; start += 2 * k) {
    let j = Math.min(start + k - 1, s.length - 1);

    console.log(`\nIteration starting at index ${start}:`);
    console.log(`Calculating min(${start + k - 1}, ${s.length - 1})`);
    console.log(`Will reverse characters from index ${start} to ${j}`);
    console.log(`Characters to reverse: "${s.slice(start, j + 1)}"`);

    // Highlight what part of string we're working with
    let beforePart = s.slice(0, start);
    let reversePart = s.slice(start, j + 1);
    let afterPart = s.slice(j + 1);

    console.log("\nString breakdown:");
    console.log(`${beforePart}[${reversePart}]${afterPart}`);
  }
}

// Test Case 1: Normal case
console.log("=== Test Case 1: Normal case ===");
demonstrateMinCalculation("abcdef", 2);
