
const args = process.argv.slice(2);


if (args.length === 0) {
  console.error("Error: No numbers provided. Please provide numbers as arguments.");
  process.exit(1);
}


let sum = 0;

for (let i = 0; i < args.length; i++) {
  const num = Number(args[i]);
  if (isNaN(num)) {
    console.error(`Error: '${args[i]}' is not a valid number.`);
    process.exit(1);
  }
  sum += num;
}


console.log(`The sum of the provided numbers is: ${sum}`);
