<div class="container">
<h2>Basic Details </h2>
  <form action="../php/emp_addlead.php" method="POST">
      <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <label for="Loan">Which Loan You Want To Apply*:</label>
                <select class="form-control" id="Loan" name="Loan" require>
                  <!-- <option value="0">Select Category</option> -->
                    <?php
                    $sql = "SELECT Category, Name FROM loan";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<option value='" . $row["Name"] . "'>" . $row["Category"] . "</option>";
                        }} ?>
                </select>
            </div>
        </div>

         <div class="col-md-4">
            <div class="form-group">
                <label for="Loan">Which Bank You Want To Apply*:</label>
                <select class="form-control" id="Loan" name="bank" require>
                  <!-- <option value="0">Select Category</option> -->
                    <?php
                    $sql = "SELECT Name, Bank_Name FROM bank";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<option value='" . $row["Name"] . "'>" . $row["Bank_Name"] . "</option>";
                        }} ?>
                </select>
            </div>
        </div>
      </div>

    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="input1">Customer Name As Per Pan Card*:</label>
          <input type="text" class="form-control" id="input1" name="Name" required>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input2">Father Name*:</label>
          <input type="text" class="form-control" id="input2" name="Father_Name" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input3">Mother Name*:</label>
          <input type="text" class="form-control" id="input3" name="Mother_Name" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input4">Mobile No*:</label> 
          <input type="text" class="form-control" id="input4" name="Mobile" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input5">Personal Email*:</label>
          <input type="email" class="form-control" id="input5" name="Personal_Email" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input6">Pan Card No*:</label>
          <input type="text" class="form-control" id="input6" name="Pan_Card" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input7">Customer Location*:</label>
          <input type="text" class="form-control" id="input7" name="Customer_location" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input8">Company Name*:</label>
          <input type="text" class="form-control" id="input8" name="Company_Name" required >
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input9">DOB*:</label>
          <input type="date" class="form-control" id="input9" name="Dob" required >
        </div>
      </div>  
      <div class="col-md-4">
        <div class="form-group">
          <label for="input61">Gender*:</label>
          <input type="text" class="form-control" id="input61" name="Gender" required >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input62">Religion*:</label>
          <input type="text" class="form-control" id="input62" name="Religion" required >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input63">Login's Date*:</label>
          <input type="date" class="form-control" id="input63" name="Date" required >
        </div>
      </div> 
      <p>&nbsp&nbsp&nbsp&nbsp_________________ Personal Information __________________</p>
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input10">Income Source:</label>
          <select class="form-control" id="input10" name="Income_Source">
          <option>Select Type</option>
          <option value="Salaried">Salaried</option>
          <option value="selfemployee">Self-Employeed</option>
          </select>
        </div>
      </div>  
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input11">Marital Status:</label>
          <input type="text" class="form-control" id="input11" name="Marital_Status" >
        </div>
      </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input12">Spouse Name:</label>
          <input type="text" class="form-control" id="input12" name="Spouse_Name" >
        </div>
      </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input13">Qualification:</label>
          <input type="text" class="form-control" id="input13" name="Qualification" >
        </div>
      </div>  
      
      <div class="col-md-4">
        <div class="form-group" >
        <label for="input14">Property Status:</label>
      <select class="form-control" id="input14" name="Property_Status">
      <option>Owned</option>
      <option>Rent</option>
      </select>
        </div>
        </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input15">Aadhar Card No*:</label>
          <input type="text" class="form-control" id="input15" name="Aadhar_Card" >
        </div>
      </div> 
      <p>&nbsp&nbsp&nbsp&nbsp__________________ Current Address ___________________</p>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input16">Address Line 1:</label>
          <input type="text" class="form-control" id="input16" name="Current_Address_Line1" >
        </div>
      </div>  
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input17">Address Line 2:</label>
          <input type="text" class="form-control" id="input17" name="Current_Address_Line2" >
        </div>
      </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input18">City*:</label>
          <input type="text" class="form-control" id="input18" name="Current_City" required>
        </div>
      </div> 
      <div class="col-md-4">
        <div class="form-group">
          <label for="input19">Landmark:</label>
          <input type="text" class="form-control" id="input19" name="Current_Landmark" >
        </div>
      </div>  
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input20">State:</label>
          <input type="text" class="form-control" id="input20" name="Current_State" >
        </div>
      </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input21">Pin:</label>
          <input type="text" class="form-control" id="input21" name="Current_Pin" >
        </div>
      </div> 
<br>

      <div class="col-md-4">
  <div class="form-group">
    <label for="Same As Permanent Address">Same As Permanent Address:</label>
    <input type="checkbox" id="copyCheckbox">
  </div>
</div>
      <p>&nbsp&nbsp&nbsp&nbsp__________________ Permanent Address __________________</p>
   
    
    
  
      <script>
$(document).ready(function() {
  $('#copyCheckbox').change(function() {
    if (this.checked) {

      var addressLine1 = $('#input16').val();
      var addressLine2 = $('#input17').val();
      var city = $('#input18').val();
      var landmark = $('#input19').val();
      var state = $('#input20').val();
      var pin = $('#input21').val();

      $('#input22').val(addressLine1);
      $('#input23').val(addressLine2);
      $('#input24').val(city);
      $('#input25').val(landmark);
      $('#input26').val(state);
      $('#input27').val(pin);
    } else {
    
      $('#input16').val('');
      $('#input17').val('');
      $('#input18').val('');
      $('#input19').val('');
      $('#input20').val('');
      $('#input21').val('');
    }
  });
});
</script>
     
    
    
    
      <div class="col-md-4">
        <div class="form-group">
          <label for="input22">Address Line 1:</label>
          <input type="text" class="form-control" id="input22" name="Permanent_Address_line1" >
        </div>
      </div>  
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input23">Address Line 2:</label>
          <input type="text" class="form-control" id="input23" name="Permanent_Address_line2" >
        </div>
      </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input24">City:</label>
          <input type="text" class="form-control" id="input24" name="Permanent_City" >
        </div>
      </div> 
      <div class="col-md-4">
        <div class="form-group">
          <label for="input25">Landmark:</label>
          <input type="text" class="form-control" id="input25" name="Permanent_Landmark" >
        </div>
      </div>  
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input26">State:</label>
          <input type="text" class="form-control" id="input26" name="Permanent_State" >
        </div>
      </div>  

      <div class="col-md-4">
        <div class="form-group">
          <label for="input27">Pin:</label>
          <input type="text" class="form-control" id="input27" name="Permanent_Pin" >
        </div>
      </div> 
      <p>&nbsp&nbsp&nbsp&nbsp__________________ Company Details __________________</p>
<div class="col-md-4">
        <div class="form-group">
          <label for="input28">Designation:</label>
          <input type="text" class="form-control" id="input28" name="Designation" >
        </div>
      </div> 
      <div class="col-md-4">
        <div class="form-group">
          <label for="input29">Current Company Work Experience:</label>
          <input type="text" class="form-control" id="input29" name="Current_Company_Work_Experience" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input36">Total Work Experience:</label>
          <input type="text" class="form-control" id="input36" name="Total_Work_Experience" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
        <label for="input30">Company Type :</label>
      <select class="form-control" id="input30" name="Company_Type">
      <option>Select Type</option>
      <option value="Proprietor">Proprietor</option>
      <option value="Partnership">Partnership</option>
      <option value="Pvt Ltd">Pvt Ltd</option>
      <option value="Limited">Limited</option>
      <option value="LLP">LLP</option>
      <option value="NGO">NGO</option>
      <option value="Govt">Govt</option>
      </select>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
          <label for="input31">Official Mail*:</label>
          <input type="email" class="form-control" id="input31" name="Official_Mail" required>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input32">Office Address With Landmark:</label>
          <input type="text" class="form-control" id="input32" name="Company_Address" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input33">City:</label>
          <input type="text" class="form-control" id="input33" name="Company_City" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input34">State:</label>
          <input type="text" class="form-control" id="input34" name="Company_State" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input35">Pin:</label>
          <input type="text" class="form-control" id="input35" name="Company_Pin" >
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input37">Salary Account Bank Name:</label>
          <input type="text" class="form-control" id="input37" name="Salary_Account" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input38">Annual CTC:</label>
          <input type="text" class="form-control" id="input38" name="Annual_Ctc" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input39">Net Salary:</label>
          <input type="text" class="form-control" id="input39" name="Net_Salary" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input40">Obligations (Current EMI):</label>
          <input type="text" class="form-control" id="input40" name="Obligations" >
        </div>
      </div>
      <!-- <div class="col-md-4">
        <div class="form-group">
          <label for="input41">Login Bank:</label>
          <input type="text" class="form-control" id="input41" name="Login_Bank" >
        </div>
      </div> -->
     
      <div class="col-md-4">
        <div class="form-group">
        <label for="input42">Scheme Offered:</label>
      <select class="form-control" id="input42" name="Scheme_Offered">
      <option value="FRESH">Fresh</option>
      <option value="TOPUP">Top-Up</option>
      <option value="BT">BT</option>
      <option value="BT+TOPUP">BT+TOPUP</option>
      </select>
        </div>
        </div>

        <div class="col-md-4">
        <div class="form-group">
          <label for="input43">Loan Amount Applied*:</label>
          <input type="text" class="form-control" id="input43" name="Loan_Amount_Applied" required>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label for="input44">Tenure Of Loan:</label>
          <input type="text" class="form-control" id="input44" name="Tenure_Of_Loan" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input45">Credit Card Obligation:</label>
          <input type="text" class="form-control" id="input45" name="Card_Obligation" >
        </div>
      </div>
<p>&nbsp&nbsp&nbsp&nbsp__________________ Reference 1 Relative ___________________</p>
<div class="col-md-4">
        <div class="form-group">
          <label for="input46">Full Name:</label>
          <input type="text" class="form-control" id="input46" name="Reference1_Full_Name" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input47">Mobile No:</label>
          <input type="text" class="form-control" id="input47" name="Reference1_Mobile_No" >
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input48">Address 1:</label>
          <input type="text" class="form-control" id="input48" name="Reference1_Address1" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input49">City:</label>
          <input type="text" class="form-control" id="input49" name="Reference1_City" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input50">State:</label>
          <input type="text" class="form-control" id="input50" name="Reference1_State" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input51">Pin:</label>
          <input type="text" class="form-control" id="input51" name="Reference1_Pin" >
        </div>
      </div>
      <p>&nbsp&nbsp&nbsp&nbsp__________________ Reference 2 Friend ___________________</p>
<div class="col-md-4">
        <div class="form-group">
          <label for="input52">Full Name:</label>
          <input type="text" class="form-control" id="input52" name="Reference2_Full_Name" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input53">Mobile No:</label>
          <input type="text" class="form-control" id="input53" name="Reference2_Mobile_No" >
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="form-group">
          <label for="input54">Address 1:</label>
          <input type="text" class="form-control" id="input54" name="Reference2_Address1" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input55">City:</label>
          <input type="text" class="form-control" id="input55" name="Reference2_City" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input56">State:</label>
          <input type="text" class="form-control" id="input56" name="Reference2_State" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input57">Pin:</label>
          <input type="text" class="form-control" id="input57" name="Reference2_Pin" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input57">Caller Name*:</label>
          <input type="text" class="form-control" id="input58" name="Caller_Name" required>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input59">TL Name*:</label>
          <input type="text" class="form-control" id="input59" name="TL_Name" required>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="input60">Manager Name:</label>
          <input type="text" class="form-control" id="input60" name="Manager_Name" >
        </div>
      </div>
      <?php
// Replace with your database credentials
require_once('../config/conn.php');
$sql = "SELECT * FROM status LIMIT 1"; 
$result = $conn->query($sql);
?>
<div class="col-md-4">
    <div class="form-group">
        <!-- <label for="input60">Manager Name:</label> -->
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                ?>
                <input type="hidden" class="form-control" id="input61" name="Pending" value="<?php echo htmlspecialchars($row['name']); ?>">
                <?php
            }
        }
        ?>
    </div>
</div>

<?php

?>





    </div>
    
    
    <button type="submit" class="btn btn-primary">&nbsp&nbsp Submit</button>
    <button type="reset" class="btn btn-primary">&nbsp&nbsp Reset </button>

  </form>

</div>