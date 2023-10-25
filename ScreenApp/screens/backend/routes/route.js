import { AddleadsAlldata, Approveddata, DeleteLeadById, EmployeeData, EmployeeFormdata, RejectedData, employeeFormAllData, fetchApprovedData, fetchRejectData, userGet } from "../Controllers/EmployeeController.js";
import express from "express";
const router = express.Router();


// Fetching data on navbar 
// router.get('/users', userGet);
  
// employee form while register 
// router.post('/empdata',EmployeeData);

// addleaddata form data routes 
// router.post('/addleaddata',EmployeeFormdata);

// Define the API endpoint for adding data
router.post('/addData', employeeFormAllData);


// Fetching all the data from database 
router.get('/getalldata',AddleadsAlldata);

// Delete the user with ID 
router.get('/deleteuser',DeleteLeadById);

// Sending the Approved data to database 
router.post('/insert',Approveddata)

// fetching Approve data to approved dashboard
router.get("/approvedata",fetchApprovedData);

// Sending the Rejected data to database 
router.post('/rejectinsert',RejectedData)

// fetching Rejected data to approved dashboard
router.get("/rejectdata",fetchRejectData);



export default router;
