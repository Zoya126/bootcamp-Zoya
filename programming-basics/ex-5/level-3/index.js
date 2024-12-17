
require('dotenv').config();


const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');


const secureLog = (message) => {
  
  console.log(message);
};


const dbFile = process.env.DB_FILE || './database sqlite/database.sqlite';
const apiKey = process.env.API_KEY;


const dbFolder = path.join(__dirname, 'database sqlite');
if (!fs.existsSync(dbFolder)) {
  fs.mkdirSync(dbFolder);
  console.log('Created "database sqlite" folder.');
}


secureLog(`Connecting to database at: ${dbFile}`);


const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});


const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );
`;

db.run(createTableQuery, function(err) {
  if (err) {
    console.error('Error creating users table:', err.message);
  } else {
    console.log('Users table is ready.');
  }
});


const queryDatabase = () => {
  const sql = 'SELECT * FROM users'; 
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error querying database:', err.message);
      return;
    }
    console.log('Database query result:', rows);
  });
};


db.serialize(() => {
  
  db.run(createTableQuery, function(err) {
    if (err) {
      console.error('Error creating users table:', err.message);
    } else {
      console.log('Users table is ready.');
      
      queryDatabase();
    }
  });
});


const fetchDataFromAPI = () => {
  
  console.log('Fetching data from API using the provided API key...');
  
};


fetchDataFromAPI();
