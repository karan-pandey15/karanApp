
import mysql from "mysql"
 const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'addrupee',
});
db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

  // Define the SQL query to create the 'alldata' table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS getFormAlldata (
  Product_Loan VARCHAR(50),
  Bank_Name VARCHAR(50),
  Customer_Name VARCHAR(100),
  Father_Name VARCHAR(100),
  Mother_Name VARCHAR(100),
  Mobile VARCHAR(20),
  Personal_Email VARCHAR(100),
  Pan_Card VARCHAR(20),
  Customer_Location VARCHAR(100),
  Company_Name VARCHAR(100),
  Dob DATE,
  Login_Date DATE,
  Gender VARCHAR(10),
  Religion VARCHAR(50),
  Income_Source VARCHAR(50),
  Marital_Status VARCHAR(20),
  Spouse_Name VARCHAR(100),
  Qualification VARCHAR(100),
  Property_Status VARCHAR(20),
  Aadhar_Card_No VARCHAR(20),
  Current_Address_Line1 TEXT,
  Current_Address_Line2 TEXT,
  Current_City VARCHAR(100),
  Current_Landmark VARCHAR(100),
  Current_State VARCHAR(50),
  Current_Pin VARCHAR(20),
  Permanent_Address_Line1 TEXT,
  Permanent_Address_Line2 TEXT,
  Permanent_City VARCHAR(100),
  Permanent_Landmark VARCHAR(100),
  Permanent_State VARCHAR(50),
  Permanent_Pin VARCHAR(20),
  Designation VARCHAR(100),
  Current_Company_Work_Experience VARCHAR(50),
  Total_Work_Experience VARCHAR(50),
  Company_Type VARCHAR(50),
  Official_Mail VARCHAR(100),
  Company_Address TEXT,
  Company_City VARCHAR(100),
  Company_State VARCHAR(50),
  Company_Pin VARCHAR(20),
  Salary_Account_BankName VARCHAR(100),
  Annual_Ctc VARCHAR(50),
  Net_Salary VARCHAR(50),
  Obligations TEXT,
  Scheme_Offered VARCHAR(100),
  Loan_Amount_Applied VARCHAR(50),
  Tenure_Of_Loan VARCHAR(20),
  Credit_Card_Obligation VARCHAR(50),
  Reference1_FullName_Relative VARCHAR(100),
  Reference1_MobileNo VARCHAR(20),
  Reference1_Address1 TEXT,
  Reference1_City VARCHAR(100),
  Reference1_State VARCHAR(50),
  Reference1_Pin VARCHAR(20),
  Reference2_FullName_Friend VARCHAR(100),
  Reference2_MobileNo VARCHAR(20),
  Reference2_Address1 TEXT,
  Reference2_City VARCHAR(100),
  Reference2_State VARCHAR(50),
  Reference2_Pin VARCHAR(20),
  Caller_Name VARCHAR(100),
  TL_Name VARCHAR(100),
  Manager_Name VARCHAR(100),
  Disbursal_BankName VARCHAR(100),
  Loan_Application_No VARCHAR(50),
  Approved_Amount VARCHAR(50),
  Disbursal_Loan_Amount VARCHAR(50),
  Inhand_Disb_Account VARCHAR(50),
  Bt_Disb_Amount VARCHAR(50),
  Top_Up VARCHAR(50),
  Cibil VARCHAR(20),
  Tenure_Disbursal VARCHAR(20),
  Roi VARCHAR(20),
  Pf VARCHAR(20),
  Insurance VARCHAR(20),
  Emi VARCHAR(50),
  First_Emi_Date DATE,
  Disb_Status VARCHAR(50),
  Login_Bank VARCHAR(100),
  Disbursal_Date DATE,
  Dsa_Channel_Name VARCHAR(100),
  Not_Disburs_Reason VARCHAR(100) NOT NULL,
  Not_Disburs_Remark VARCHAR(100) NOT NULL,
  Rejection_Remark TEXT,
  Description TEXT
);


`;

db.query(createTableQuery, (err) => {
if (err) {
  console.error('Error creating the table: ' + err);
} else {
  console.log('Table created or already exists.');
}
});



export default db;
