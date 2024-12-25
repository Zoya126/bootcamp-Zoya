// index.js
const readline = require('readline');
const { debugLogger, winstonLogger } = require('./logger');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform the computation
function compute(a, b, operation) {
  let result;
  try {
    debugLogger(`Starting computation: ${a} ${operation} ${b}`);
    winstonLogger.info(`Starting computation: ${a} ${operation} ${b}`);
    
    switch (operation) {
      case 'add':
        result = a + b;
        break;
      case 'subtract':
        result = a - b;
        break;
      case 'multiply':
        result = a * b;
        break;
      case 'divide':
        if (b === 0) {
          throw new Error('Cannot divide by zero');
        }
        result = a / b;
        break;
      default:
        throw new Error('Invalid operation');
    }

    debugLogger(`Result: ${result}`);
    winstonLogger.info(`Computation result: ${result}`);
    return result;
  } catch (error) {
    debugLogger(`Error: ${error.message}`);
    winstonLogger.error(`Error: ${error.message}`);
    return error.message;
  }
}

// Function to prompt user input
function promptUser() {
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        
        if (isNaN(a) || isNaN(b)) {
          winstonLogger.error('Invalid number input');
          debugLogger('Invalid number input');
          rl.close();
          return;
        }

        compute(a, b, operation);
        rl.close();
      });
    });
  });
}

// Start the interactive program
promptUser();
