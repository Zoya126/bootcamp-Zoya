#!/usr/bin/env node

const args = process.argv.slice(2);


if (args.includes("--help")) {
  console.log(`
Usage: node sum.js [--multiply] <numbers>

Options:
  --multiply     Multiply the numbers instead of adding them
  --help         Show this help message

Examples:
  node sum.js 10 20 30          # Adds the numbers (default)
  node sum.js --multiply 2 3 4  # Multiplies the numbers
`);
  process.exit(0);
}


const multiplyMode = args.includes("--multiply");


const numbers = args.filter(arg => arg !== "--multiply");


if (numbers.length === 0) {
  console.error("Error: No numbers provided. Use --help for usage instructions.");
  process.exit(1);
}


let result = multiplyMode ? 1 : 0;


for (let i = 0; i < numbers.length; i++) {
  const num = Number(numbers[i]);
  if (isNaN(num)) {
    console.error(`Error: '${numbers[i]}' is not a valid number.`);
    process.exit(1);
  }

  if (multiplyMode) {
    result *= num; 
  } else {
    result += num; 
  }
}


const operation = multiplyMode ? "product" : "sum";
console.log(`The ${operation} of the provided numbers is: ${result}`);
