const config = require('config');
const fs = require('fs');
const path = require('path');

// Set logging level dynamically based on config
const loggingLevel = config.get('logging.level');
console.log(`Logging Level: ${loggingLevel}`);

// Function to load functions dynamically
function loadFunctions() {
  const functions = config.get('functions');
  const loadedFunctions = {};

  functions.forEach((funcConfig) => {
    const { name, file } = funcConfig;
    try {
      // Dynamically load the function from the specified file
      const funcPath = path.resolve(__dirname, file);
      loadedFunctions[name] = require(funcPath);
      console.log(`Loaded function: ${name} from ${file}`);
    } catch (error) {
      console.error(`Failed to load function ${name}: ${error.message}`);
    }
  });

  return loadedFunctions;
}

// Load functions based on the config
const functions = loadFunctions();

// Use the dynamically loaded functions
const x = Math.PI / 4;  // Example input
if (functions.sin) {
  console.log(`sin(${x}) = ${functions.sin(x)}`);
}
if (functions.cos) {
  console.log(`cos(${x}) = ${functions.cos(x)}`);
}
