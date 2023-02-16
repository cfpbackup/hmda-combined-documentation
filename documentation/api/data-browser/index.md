# Data Browser API

The data browser api enables developers to interact with HMDA data. The API will return either a JSON report of the data or CSV of the raw data.

This API is what powers the [HMDA Data Browser application](https://ffiec.cfpb.gov/data-browser/)

**Note:** depending on the query, queries may take a while to return and data may be too large for conventional spread sheet applications.

## HMDA Data Endpoints

**Nationwide Aggregations**
  
  ```GET https://ffiec.cfpb.gov/v2/data-browser-api/data-browser-api/view/nationwide/aggregations```
  
  This endpoint is used to generated JSON reports on the full dataset. The year parameter is required when calling this endpoint.

**Aggregations**

 ```GET https://ffiec.cfpb.gov/v2/data-browser-api/data-browser-api/view/aggregations```

  This endpoint is used to generated JSON reports on an LEI and/or geography subset. The year parameter as well at least of a geographic and/or LEI parameter are required when calling this endpoint.

**Nationwide CSV**

  ```GET https://ffiec.cfpb.gov/v2/data-browser-api/data-browser-api/view/nationwide/csv```

  This endpoint is used to download raw HMDA data given the applied filters in csv format. The file will be streamed. The year parameter is required when calling this endpoint.

**CSV**

  ```GET https://ffiec.cfpb.gov/v2/data-browser-api/data-browser-api/view/csv```
  
  This endpoint is used to download raw HMDA data given the applied filters in csv format. The file will be streamed. The year parameter as well at least of a geographic and/or LEI parameter are required when calling this endpoint.

### Supported Geographic Filters

  Geography | Format
  --- | ---
  MSA/MD | Five Digit MSA/MD Code
  State | Two Letter State Abbreviation (Eg. AL for Alabama)
  County | Five Digit County FIPS Code

### HMDA Data Filters

HMDA Data requests support the following filtering parameters. Multiple options are acceptable.

| Variable Name | Options |
|:--------------|:---------|
|years | 2018,2019|
|construction_methods | 1,2|
|dwelling_categories | Single Family (1-4 Units):Site-Built<br />Multifamily:Site-Built<br />Single Family (1-4 Units):Manufactured<br />Multifamily:Manufactured|
|ethnicities | Hispanic or Latino<br />Not Hispanic or Latino<br />Joint<br />Ethnicity Not Available<br />Free Form Text Only|
|lien_statuses | 1,2|
|loan_products | Conventional:First Lien<br />FHA:First Lien<br />VA:First Lien<br />FSA/RHS:First Lien<br />Conventional:Subordinate Lien<br />FHA:Subordinate Lien<br />VA:Subordinate Lien<br />FSA/RHS:Subordinate Lien|
|loan_purposes  | 1,2,31,32,4,5|
|loan_types | 1,2,3,4|
|races | Asian<br />Native Hawaiian or Other Pacific Islander<br />Free Form Text Only<br />Race Not Available<br />American Indian or Alaska Native<br />Black or African American<br />2 or more minority races<br />White<br />Joint|
|sexes | Male<br />Female<br />Joint<br />Sex Not Available|
|total_units | 1,2,3,4,5-24,25-49,50-99,100-149,>149|

### Aggregation Example

Get an aggregation, in JSON format, of HMDA Data reported in 2018 in Maryland, with action takens `5 - File closed for incompleteness`, or `6 - Purchased loan`, where the reported race was Asian.

`GET` JSON with the following parameters

  var | value
  --- | ---
  years | 2018
  states | MD
  actions_taken | 5,6
  races | Asian

  **Request:**

  ```curl "https://ffiec.cfpb.gov/v2/data-browser-api/view/aggregations?states=MD&years=2018&actions_taken=5,6&races=White,Asian,Joint"```

**JSON Response:**

```json
  {
    "parameters": {
        "state": "MD",
        "actions_taken": "5,6",
        "races": "Asian"
    },
    "aggregations": [
        {
            "count": 679,
            "sum": 1.90835E8,
            "actions_taken": "5",
            "races": "Asian",
            "state": "MD"
        },
        {
            "count": 716,
            "sum": 2.5435E8,
            "actions_taken": "6",
            "races": "Asian",
            "state": "MD"
        }
    ],
    "servedFrom": "cache"
  }
```

### CSV Example

Get a CSV containing all HMDA data reported in 2018 in California, Maryland, or DC, with action taken `5 - File closed for incompleteness`.

`GET` CSV file with the following parameters

  var | value
  --- | ---
  states | CA, MD, DC
  years | 2018
  action_taken | 5

**Request:**

```console
  curl -L "https://ffiec.cfpb.gov/v2/data-browser-api/view/csv?states=CA,MD,DC&years=2018&actions_taken=5"
```

**CSV Response:**
  <img src="/documentation/img/DataBrowserCsvExample.png" class="lang-specific shell" />

## HMDA Filers

`GET https://ffiec.cfpb.gov/v2/data-browser-api/data-browser-api/view/filers`

This endpoint can be used to fetch list of financial instituions present in the HMDA dataset. The year parameter is required when calling this endpoint.

### HMDA Filer Parameters

Parameter Name | Options
--- | ---
years | CSV list of years (example: 2018,2019)
states | two letter state code
msamds | 5 digit integer code
counties | 5 digit integer code

### HMDA Filers Example

`GET` with the following parameters

var | value
--- | ---
years | 2018
states | MD, DC

**Request:**

```console
  curl "https://ffiec.cfpb.gov/v2/data-browser-api/view/filers?states=MD,DC&years=2018"
```

**JSON Format Response:**

```json
  {
    "institutions":[
      {
          "lei":"lei",
          "name":"institution name",
          "period":2018
      },
      {
          "lei":"lei",
          "name":"institution name",
          "period":2018
      }
    ]
  }
```

## Errors

Incorrect calls will result in an error. For example the following call will result in an error since there is no state(s)/msamds and years provided.

**Request:**

  ```console
  curl "https://ffiec.cfpb.gov/v2/data-browser-api/view/csv"
```

**JSON Response:**

```json
  {
      "errorType": "provide-atleast-msamds-or-states",
      "message": "Provide year and either states or msamds or both"
  }
```
