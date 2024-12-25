// Load environment variables from .env file
require('dotenv').config();

// Access the variables
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'localhost';

// Use the variables in your application
console.log(`Server is running on port: ${port}`);
console.log(`Database host: ${dbHost}`);
