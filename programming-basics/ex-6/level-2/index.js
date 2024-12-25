const config = require('config');

// Log the entire configuration to check which environment is loaded
console.log(config);

// Access configuration values
const appName = config.get('app.name');
const appPort = config.get('app.port');
const dbHost = config.get('database.host');
const dbUser = config.get('database.user');

// Output the values
console.log(`Application: ${appName}`);
console.log(`Running on port: ${appPort}`);
console.log(`Database Host: ${dbHost}`);
console.log(`Database User: ${dbUser}`);
