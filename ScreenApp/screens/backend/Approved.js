
import express from "express"
import mysql from "mysql"
// const bodyParser = require('body-parser');
import bodyParser from "body-parser";
const app = express();
const port = 5000; // Change to your desired port

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'addrupee',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

app.use(bodyParser.json());

// Create a table if it doesn't exist
const createTable = () => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS Approveddata (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      fatherName VARCHAR(255),
      phoneNo VARCHAR(255),
      appliedBank VARCHAR(255),
      panNo VARCHAR(255),
      companyName VARCHAR(255),
      additionalInfo1 VARCHAR(255),
      additionalInfo2 VARCHAR(255)
    );
  `;

  db.query(createTableSQL, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

createTable(); // Call this function to create the table when the server starts

// Handle POST request to insert data
app.post('/insert', (req, res) => {
  const approvedData = req.body;

  const insertSQL = 'INSERT INTO Approveddata SET ?';

  db.query(insertSQL, approvedData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting data into the database');
    } else {
      res.send('Data inserted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
