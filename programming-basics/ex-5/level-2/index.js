// Load environment variables from .env file
require('dotenv').config();

// Function to get environment variables with fallback values and warnings
const getEnvVar = (varName, fallbackValue) => {
  const value = process.env[varName];
  if (!value) {
    console.warn(`Warning: ${varName} is missing. Using fallback value: ${fallbackValue}`);
    return fallbackValue;
  }
  return value;
};

// Access environment variables with fallback values
const port = getEnvVar('PORT', 3000);
const dbHost = getEnvVar('DB_HOST', 'localhost');
const dbPassword = getEnvVar('DB_PASSWORD', 'defaultpassword');  // Default fallback for missing DB_PASSWORD

// Use the variables in your application
console.log(`Server is running on port: ${port}`);
console.log(`Database host: ${dbHost}`);
console.log(`Database password: ${dbPassword}`);
