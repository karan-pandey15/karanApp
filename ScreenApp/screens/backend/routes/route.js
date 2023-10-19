import { EmployeeData, EmployeeFormdata, employeeFormAllData, userGet } from "../Controllers/EmployeeController.js";
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

export default router;
