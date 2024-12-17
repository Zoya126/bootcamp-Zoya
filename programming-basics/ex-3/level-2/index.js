const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Log messages with level 'info' and higher
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp to logs
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Output logs to the console
  ],
});

// Log events
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
  // Perform some operations
  logger.info('Operation: Performing division...');
  const result1 = divide(10, 2);
  console.log(`Result of division: ${result1}`);

  // Try division by zero
  logger.info('Operation: Performing division with zero...');
  const result2 = divide(5, 0);
  console.log(`Result of division: ${result2}`);
} catch (error) {
  logger.error(`Error occurred: ${error.message}`);
}

logger.info('Program finished');
