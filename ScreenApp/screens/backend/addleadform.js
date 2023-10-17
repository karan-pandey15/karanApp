


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();
const port = 5000;

 const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'addrupee',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});


app.use(bodyParser.json());

app.post('/addleaddata', (req, res) => {
  const {  panName ,Fname,Mname,mobile, personalEmail, panNo, location, companyName, dob ,relegion, gender} = req.body; 
  const sql = 'INSERT INTO addleadsformdata ( panName,Fname,Mname,mobile,personalEmail,panNo, location, companyName, dob,relegion, gender) VALUES (?, ?  , ? , ? , ? , ? , ? ,  ? , ? , ? ,?)'; // Insert both fields.

  db.query(sql, [ panName  , Fname, Mname ,mobile, personalEmail ,panNo ,location, companyName, dob ,relegion ,gender], (err, result) => {
    if (err) throw err;
    console.log('Data inserted:', result);
    res.send('Data inserted successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
