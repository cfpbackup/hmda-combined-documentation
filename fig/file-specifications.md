import { TableMaker } from './tables/TableMaker'
import table1 from './tables/table1.json'
import table2 from './tables/table2.json'

# 3. 2023 File Specifications 

<a class="printBtn" href="javascript:window.print()" target="_self">
Print Page
</a>

## 3.1 &nbsp; Introduction 
The following information describes the format used when filing HMDA data with the Bureau.

## 3.2 &nbsp; Submission instructions 

Filers will submit their HMDA data using a web interface. Information regarding the HMDA Platform can be located at: https://ffiec.cfpb.gov.   

- We recommend that HMDA filers use a modern browser, such as the latest version of Google Chrome™, Mozilla® Firefox®, Microsoft Edge™, or other modern browsers. The HMDA Platform will walk you through the loan/application register filing process. Certification will also occur within the HMDA Platform. An authorized representative of your institution with knowledge of the data submitted shall certify to the accuracy and completeness of the data submitted.
 
## 3.3 &nbsp; Loan/Application Register format
Beginning with data collected in 2017, your HMDA data loan/application register will be submitted in a pipe (also referred to as vertical bar) delimited text file format. This means that: 

- Each data field within each row will be separated with a pipe character, “|”. 

- Do not include leading zeros for the purpose of making a data field a specific number of characters. 

- The loan/application register will be a text file with a .txt file format extension.

- Do not encase text entries in single or double quotes. 

Text entries in alphanumeric fields do not need to use all uppercase letters with the exception of: 

- “NA” used when the reporting requirement is not applicable;

- Two-letter state codes; 

- A capital “E” at the beginning of any “Exempt” response.  

As with previous submissions:  

- The first row of the loan/application register will begin with the number one (1) to indicate that the data fields in row one contain information relating to your institution. 

- All subsequent rows of the loan/application register will begin with the number two (2) to indicate that the data fields beginning in row two contain data fields for the loan/application register, with information relating to the reported loan or application. 
  
- Each covered loan or application must appear on its own line in the loan/application register. 


## 3.4 &nbsp; Information regarding data fields 

Table 1 and Table 2 contain the data field name, data field type, valid values for numeric fields, examples for alphanumeric fields, and the data point name, where applicable.

Please refer to Regulation C and the Data Specifications section for details regarding each data field. 

### TABLE 1: &nbsp; FILING INSTITUTION, REPORTING PERIOD, AND CONTACT INFORMATION (TRANSMITTAL SHEET) 

<TableMaker jsonData={table1} tableNumber='1' tableName='Table 1' />

### TABLE 2: &nbsp; LOAN/APPLICATION REGISTER

<TableMaker jsonData={table2} tableNumber='2' tableName='Table 2' />