


// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 5000;

// export const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'addrupee',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL');
// });


// app.use(bodyParser.json());

// app.post('/submit', (req, res) => {
//   const { name, email } = req.body; // Get both "name" and "email" from the request body.
//   const sql = 'INSERT INTO users (name, email) VALUES (?, ?)'; // Insert both fields.

//   db.query(sql, [name, email], (err, result) => {
//     if (err) throw err;
//     console.log('Data inserted:', result);
//     res.send('Data inserted successfully.');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
