import db from "../database/db.js";

// Fetching data on navbar
export const userGet = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};

// employee form while register
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

// Addlead form data
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

//Add All Form Data
// import db from "../database/db.js";

// export const employeeFormAllData = (req, res) => {
//   const data = req.body; // Assuming data is sent in the request body

//   console.log(data);

//   const sql = `
//   INSERT INTO getFormAlldata (
//     Product_Loan,
//     Bank_Name,
//     Customer_Name,
//     Father_Name,
//     Mother_Name,
//     Mobile,
//     Personal_Email,
//     Pan_Card,
//     Customer_Location,
//     Company_Name,
//     Dob,
//     Login_Date,
//     Gender,
//     Religion,
//     Income_Source,
//     Marital_Status,
//     Spouse_Name,
//     Qualification,
//     Property_Status,
//     Aadhar_Card_No,
//     Current_Address_Line1,
//     Current_Address_Line2,
//     Current_City,
//     Current_Landmark,
//     Current_State,
//     Current_Pin,
//     Permanent_Address_Line1,
//     Permanent_Address_Line2,
//     Permanent_City,
//     Permanent_Landmark,
//     Permanent_State,
//     Permanent_Pin,
//     Designation,
//     Current_Company_Work_Experience,
//     Total_Work_Experience,
//     Company_Type,
//     Official_Mail,
//     Company_Address,
//     Company_City,
//     Company_State,
//     Company_Pin,
//     Salary_Account_BankName,
//     Annual_Ctc,
//     Net_Salary,
//     Obligations,
//     Scheme_Offered,
//     Loan_Amount_Applied,
//     Tenure_Of_Loan,
//     Credit_Card_Obligation,
//     Reference1_FullName_Relative,
//     Reference1_MobileNo,
//     Reference1_Address1,
//     Reference1_City,
//     Reference1_State,
//     Reference1_Pin,
//     Reference2_FullName_Friend,
//     Reference2_MobileNo,
//     Reference2_Address1,
//     Reference2_City,
//     Reference2_State,
//     Reference2_Pin,
//     Caller_Name,
//     TL_Name,
//     Manager_Name,
//     Disbursal_BankName,
//     Loan_Application_No,
//     Approved_Amount,
//     Disbursal_Loan_Amount,
//     Inhand_Disb_Account,
//     Bt_Disb_Amount,
//     Top_Up,
//     Cibil,
//     Tenure_Disbursal,
//     Roi,
//     Pf,
//     Insurance,
//     Emi,
//     First_Emi_Date,
//     Disb_Status,
//     Login_Bank,
//     Disbursal_Date,
//     Dsa_Channel_Name,
//     Not_Disburs_Reason,
//     Not_Disburs_Remark,
//     Rejection_Remark,
//     Description
//   ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
//     );
  
// `;

//   // Use placeholders (?, ?) for values and provide them as an array in the query execution

//   db.query(
//     sql,
//     [
//       data.Product_Loan,
//       data.Bank_Name,
//       data.Customer_Name,
//       data.Father_Name,
//       data.Mother_Name,
//       data.Mobile,
//       data.Personal_Email,
//       data.Pan_Card,
//       data.Customer_Location,
//       data.Company_Name,
//       data.Dob,
//       data.Login_Date,
//       data.Gender,
//       data.Religion,
//       data.Income_Source,
//       data.Marital_Status,
//       data.Spouse_Name,
//       data.Qualification,
//       data.Property_Status,
//       data.Aadhar_Card_No,
//       data.Current_Address_Line1,
//       data.Current_Address_Line2,
//       data.Current_City,
//       data.Current_Landmark,
//       data.Current_State,
//       data.Current_Pin,
//       data.Permanent_Address_Line1,
//       data.Permanent_Address_Line2,
//       data.Permanent_City,
//       data.Permanent_Landmark,
//       data.Permanent_State,
//       data.Permanent_Pin,
//       data.Designation,
//       data.Current_Company_Work_Experience,
//       data.Total_Work_Experience,
//       data.Company_Type,
//       data.Official_Mail,
//       data.Company_Address,
//       data.Company_City,
//       data.Company_State,
//       data.Company_Pin,
//       data.Salary_Account_BankName,
//       data.Annual_Ctc,
//       data.Net_Salary,
//       data.Obligations,
//       data.Scheme_Offered,
//       data.Loan_Amount_Applied,
//       data.Tenure_Of_Loan,
//       data.Credit_Card_Obligation,
//       data.Reference1_FullName_Relative,
//       data.Reference1_MobileNo,
//       data.Reference1_Address1,
//       data.Reference1_City,
//       data.Reference1_State,
//       data.Reference1_Pin,
//       data.Reference2_FullName_Friend,
//       data.Reference2_MobileNo,
//       data.Reference2_Address1,
//       data.Reference2_City,
//       data.Reference2_State,
//       data.Reference2_Pin,
//       data.Caller_Name,
//       data.TL_Name,
//       data.Manager_Name,
//       data.Disbursal_BankName,
//       data.Loan_Application_No,
//       data.Approved_Amount,
//       data.Disbursal_Loan_Amount,
//       data.Inhand_Disb_Account,
//       data.Bt_Disb_Amount,
//       data.Top_Up,
//       data.Cibil,
//       data.Tenure_Disbursal,
//       data.Roi,
//       data.Pf,
//       data.Insurance,
//       data.Emi,
//       data.First_Emi_Date,
//       data.Disb_Status,
//       data.Login_Bank,
//       data.Disbursal_Date,
//       data.Dsa_Channel_Name,
//       data.Not_Disburs_Reason,
//       data.Not_Disburs_Remark,
//       data.Rejection_Remark,
//       data.Description
//     ],
//     (err, result) => {
//       if (err) {
//         console.error("Error inserting data: " + err);
//         res.status(500).send("Error inserting data.");
//       } else {
//         console.log("Data inserted successfully");
//         res.status(200).send("Data inserted successfully");
//       }
//     }
//   );
// };

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
