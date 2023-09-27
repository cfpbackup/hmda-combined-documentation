import { TableMaker } from './tables/TableMaker'

import table3 from './tables/table3.json'
import table4 from './tables/table4.json'
import table5 from './tables/table5.json'
import table6 from './tables/table6.json'
import table7 from './tables/table7.json'
import table8 from './tables/table8.json'
import table9 from './tables/table9.json'

# 5. 2023 Edit Specifications

<a class="printBtn" href="javascript:window.print()" target="_self">
Print Page
</a>

## 5.1 &nbsp; Introduction

HMDA edits are rules to assist filers in checking the accuracy of HMDA data prior to
submission. There are four types of edits:

- **Syntactical**: Edits that check whether the loan/application register is in the correct
format and whether the data covers the correct filing year. A syntactical edit occurs, for
example, if none of the rows in the loan/application register begin with the number two
(2) to indicate that the following data fields contain information relating to the reported
loan or application. The loan/application register cannot be submitted until the filer
corrects all syntactical edit errors and re-uploads the updated loan/application register to
the HMDA Platform.

- **Validity** : Edits that check whether there are valid values in each data field. A validity
edit occurs, for example, if the contact person’s telephone number does not follow the
format “999-999-9999.” The loan/application register cannot be submitted until the filer
corrects all validity edit errors and re-uploads the updated loan/application register to
the HMDA Platform.

- **Quality**: Edits that check whether entries in the individual data fields or combinations of
data fields conform to expected values. A quality edit occurs, for example, if the reported
Tax Identification Number does not match the Tax Identification Number the institution
reported on the previous year’s loan/application register. The loan/application register
cannot be submitted until the filer either confirms the accuracy of all values flagged by
quality edits in the HMDA Platform or corrects the flagged values and re-uploads the
updated loan/application register to the HMDA Platform.

- **Macro Quality**:Edits that check whether the submitted loan/application register as a
whole conforms to expected values. A macro quality edit occurs, for example, if the
reported percentage of multifamily loans exceeds 10% of the loan/application register
entries. The loan/application register cannot be submitted until the filer either confirms 
95
the accuracy of all the values flagged by the macro quality edits in the HMDA Platform or
corrects the flagged values and re-uploads the updated loan/application register to the
HMDA Platform.

## 5.2 &nbsp; 2023 New and Revised Edits 


### TABLE 3: 2023 EDITS REVISED FROM 2022

<TableMaker jsonData={table3} tableNumber='3' tableName='Table 3' />

## 5.3 &nbsp; 2023 Edits
Table 4 through Table 8 list all of the edits for HMDA data collected in 2023 under the HMDA
Final Rule. Each table groups the edits by type and whether the edit is related to the data fields
in the “Filing Institution, Reporting Period, and Contact Information (Transmittal Sheet)”
section or the “Loan/Application Register” section.Edits for data collected in 2023 are grouped
by data point and may contain more than one condition that must be true for the edit to pass
during filing. Conditions within the edit description are distinguished with a number. To
increase clarity, the tables contain a column specifying each data field that affects the overall
edit, and the edit descriptions contain all data field names in italics. 

### TABLE 4: SYNTACTICAL AND VALIDITY EDITS FOR FILING INSTITUTION, REPORTING PERIOD, AND CONTACT INFORMATION (TRANSMITTAL SHEET), AND LOAN/APPLICATION REGISTER

<TableMaker jsonData={table4} tableNumber='4' tableName='Table 4' />

### TABLE 5: SYNTACTICAL AND VALIDITY EDITS FOR FILING INSTITUTION, REPORTING PERIOD, AND CONTACT INFORMATION (TRANSMITTAL SHEET)

<TableMaker jsonData={table5} tableNumber='5' tableName='Table 5' />

### TABLE 6: SYNTACTICAL AND VALIDITY EDITS FOR LOAN/APPLICATION REGISTER

<TableMaker jsonData={table6} tableNumber='6' tableName='Table 6' />

### TABLE 7: QUALITY EDITS FOR LOAN/APPLICATION REGISTER

<TableMaker jsonData={table7} tableNumber='7' tableName='Table 7' />

### TABLE 8: MACRO QUALITY EDITS FOR LOAN/APPLICATION REGISTER

<TableMaker jsonData={table8} tableNumber='8' tableName='Table 8' />

### TABLE 9: MACRO QUALITY EDITS FOR TRANSMITTAL SHEET AND LOAN/APPLICATION REGISTER

<TableMaker jsonData={table9} tableNumber='9' tableName='Table 9' />