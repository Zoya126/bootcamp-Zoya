const config = require('config');

// Log the entire configuration to debug
console.log(config);

// Access configuration values
const appName = config.get('app.name');
const appVersion = config.get('app.version');
const port = config.get('app.port');
const dbHost = config.get('database.host');
const dbPort = config.get('database.port');
const dbUser = config.get('database.user');
const dbPassword = config.get('database.password');

// Output the values
console.log(`Application: ${appName} (v${appVersion})`);
console.log(`Running on port: ${port}`);
console.log(`Database Host: ${dbHost}`);
console.log(`Database Port: ${dbPort}`);
console.log(`Database User: ${dbUser}`);
console.log(`Database Password: ${dbPassword}`);
