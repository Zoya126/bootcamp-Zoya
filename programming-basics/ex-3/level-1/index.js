const logger = require('./logger');

// Log "Program started"
logger.info('Program started');

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    logger.error('Fatal error: Division by zero attempted');
    throw new Error('Division by zero is not allowed.');
  }
  const result = a / b;
  logger.info(`Division successful: ${a} / ${b} = ${result}`);
  return result;
}

try {
  // Simulate a successful operation
  logger.info('Operation: Performing division...');
  const result1 = divide(10, 2);
  console.log(`Result of division: ${result1}`);

  // Simulate division by zero
  logger.info('Operation: Performing division with zero...');
  const result2 = divide(5, 0);
  console.log(`Result of division: ${result2}`);
} catch (error) {
  logger.error(`Error occurred: ${error.message}`);
}

// Log "Program finished"
logger.info('Program finished');
