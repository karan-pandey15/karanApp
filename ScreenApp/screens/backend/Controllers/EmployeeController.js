import db from "../database/db.js";
import express from "express";
const app = express();

// ************* Fetching data on navbar *************
export const userGet = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};


// *************  employee form while register *************
export const EmployeeData = (req, res) => {
  const { fname, mname, pan, password } = req.body;
  const sql =
    "INSERT INTO employeedata (fname, mname , pan , password ) VALUES (?, ? , ? , ?)"; // Insert both fields.

  db.query(sql, [fname, mname, pan, password], (err, result) => {
    if (err) throw err;
    console.log("Data inserted:", result);
    res.send("Data inserted successfully.");
  });
};

// ************* Addlead Basic details data send With this API  ************* 
export const EmployeeFormdata = (req, res) => {
  const {
    panName,
    Fname,
    Mname,
    mobile,
    personalEmail,
    panNo,
    location,
    companyName,
    dob,
    relegion,
    gender,
  } = req.body;
  const sql =
    "INSERT INTO addleadsformdata ( panName,Fname,Mname,mobile,personalEmail,panNo, location, companyName, dob,relegion, gender) VALUES (?, ?  , ? , ? , ? , ? , ? ,  ? , ? , ? ,?)"; // Insert both fields.

  db.query(
    sql,
    [
      panName,
      Fname,
      Mname,
      mobile,
      personalEmail,
      panNo,
      location,
      companyName,
      dob,
      relegion,
      gender,
    ],
    (err, result) => {
      if (err) throw err;
      console.log("Data inserted:", result);
      res.send("Data inserted successfully.");
    }
  );
};


// *********** AddLeads all data send to database with this API *************

export const employeeFormAllData = (req, res) => {
  const data = req.body; // Assuming data is sent in the request body

  console.log(data);

  // Extract the keys and values from the data object
  const columns = Object.keys(data);
  const values = Object.values(data);

  // Generate the SQL query with placeholders
  const placeholders = columns.map(() => '?').join(',');

  const sql = `
    INSERT INTO getFormAlldata (${columns.join(',')})
    VALUES (${placeholders})
  `;

  // Use placeholders and values in the query execution
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data: " + err);
      res.status(500).send("Error inserting data.");
    } else {
      console.log("Data inserted successfully");
      res.status(200).send("Data inserted successfully");
    }
  });
};



// ****************  Fetching AddLeads all data from database with this API **************** 


export const AddleadsAlldata = (req, res) => {
  db.query("SELECT * FROM getformalldata", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};



// ***********   Delete user with id   *************** 

export const DeleteLeadById = (req, res) => {
  const leadId = req.params.id; // Get the lead ID from the URL parameter

  // Make a database query to delete the lead record
  db.query("DELETE FROM getformalldata WHERE id = ?", [leadId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Check if any record was deleted
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Lead not found" });
    } else {
      res.json({ message: "Lead deleted successfully" });
    }
  });
};


// ****************  Approved Post Api Code **************** 


export const Approveddata =(req,res)=>{
  const createTable = () => {
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS approveddata (
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

const approvedData = req.body;

  const insertSQL = 'INSERT INTO approveddata SET ?';

  db.query(insertSQL, approvedData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting data into the database');
    } else {
      res.send('Data inserted successfully');
    }
});

}

// Fetch Approved data from Backend 

export const fetchApprovedData = async (req,res)=>{
  db.query("SELECT * FROM approveddata", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
}



// ****************  Reject Post Api Code **************** 


export const RejectedData =(req,res)=>{
  const createTable = () => {
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS rejectdata (
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

const approvedData = req.body;

  const insertSQL = 'INSERT INTO rejectdata SET ?';

  db.query(insertSQL, approvedData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting data into the database');
    } else {
      res.send('Data inserted successfully');
    }
});

}


// **************** Fetch Rejected data from Backend  **************** 

export const fetchRejectData = async (req,res)=>{
  db.query("SELECT * FROM rejectdata", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
}
