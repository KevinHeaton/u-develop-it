const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middlesware
app.use(express.urlencoded({ extend: false}));

app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'XBit$5EVX$cr',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});