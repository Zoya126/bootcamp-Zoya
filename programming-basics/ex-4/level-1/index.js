// index.js
const debug = require('debug')('app:module1'); // Namespace for debugging

debug('Program started');
debug('Performing some operations');

// Simulate an operation with debug logging
function performOperation() {
  debug('Operation started');
  let result = 2 + 3; // Example operation
  debug('Operation result: %d', result);
}

performOperation();
