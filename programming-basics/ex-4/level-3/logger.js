// logger.js
const winston = require('winston');
const debug = require('debug');

// Create a debug instance
const debugLogger = debug('app:debug');

// Configure Winston logger
const winstonLogger = winston.createLogger({
  level: 'info', // You can set the logging level to 'debug' or 'error' as needed
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ],
});

// Export both debug and winston loggers
module.exports = { debugLogger, winstonLogger };
