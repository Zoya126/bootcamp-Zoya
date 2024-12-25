#!/usr/bin/env node


const { add, multiply } = require("./mathutils");


const args = process.argv.slice(2);


if (args.length < 2 || args.includes("--help")) {
  console.log(`
Usage: command <operation> <numbers>

Operations:
  add       Add the provided numbers
  multiply  Multiply the provided numbers

Examples:
  command add 1 2 3          # Outputs the sum: 6
  command multiply 2 3 4     # Outputs the product: 24
  `);
  process.exit(0);
}


const operation = args[0];
const numbers = args.slice(1).map(Number);


if (numbers.some(isNaN)) {
  console.error("Error: All operands must be valid numbers.");
  process.exit(1);
}


let result;

switch (operation) {
  case "add":
    result = add(numbers);
    break;
  case "multiply":
    result = multiply(numbers);
    break;
  default:
    console.error("Error: Unsupported operation. Use 'add' or 'multiply'.");
    process.exit(1);
}


console.log(`Result: ${result}`);
