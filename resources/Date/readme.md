# Date
###### ` Question 1:Get Current Date and Time`

 Description:Write a javascript program where print the current date and time using Date object.
`Example:`

```javascript

function logCurrentDate() {
 //code here
}

// Calling the function
logCurrentDate();

```
`Topics Covered:`
Date Object
 
**Hints:**
- [Date Object](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function logCurrentDate() {
    console.log(new Date());  // Creates and logs the current date and time
}

logCurrentDate();  

```
**Explanation:**
-The function logCurrentDate creates a new Date object representing the current date and time. 

-It directly logs this object to the console without storing it in a variable.
</details>
 
---- 
###### ` Question 2:Get Specific Date and Time`

 Description::Write a javascript program where print the specific date and time using Date object

`Example:`

```javascript

function logSpecificDate() {
    //code here
}

logSpecificDate();  // Calling the function

```
`Topics Covered:`
Date Object
 
**Hints:**
- [Date Object](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function logSpecificDate() {
    let specificDate = new Date('2024-12-25T00:00:00');
    console.log(specificDate);  // Logs: Thu Dec 25 2024 00:00:00 GMT+0000 (UTC)
}

logSpecificDate();  // Calling the function


```
**Explanation:**
-The function logSpecificDate creates a Date object for the specific date '2024-12-25T00:00:00' and logs it.

-When calling logSpecificDate(), it logs the date in the console in the default format.
</details>
 
---- 
###### ` Question 3:Get Current Year, Month, Date`

 Description:Write a javascript program where print the  year date and month using the different function of date object.

`Example:`

```javascript

function logCurrentDateInfo() {
   //code here
}

logCurrentDateInfo();  // Calling the function


```
`Topics Covered:`
Date Object getFullYear getDate  getMonth.
 
**Hints:**
- [Date Object,getFullYear, getDate,  getMonth](https://www.geeksforgeeks.org/how-to-get-day-month-and-year-from-date-object-in-javascript/#:~:text=The%20getMonth()%20method%20to,year%20from%20the%20Date%20object.)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function logCurrentDateInfo() {
    let currentDate = new Date();
    console.log('Year:', currentDate.getFullYear());  // Logs current year
    console.log('Month:', currentDate.getMonth() + 1);  // Logs current month (0-indexed)
    console.log('Date:', currentDate.getDate());  // Logs current date
}

logCurrentDateInfo();  // Calling the function


```
**Explanation:**
-The function logCurrentDateInfo creates a new Date object, and then logs the current year, month (adding 1 to adjust for the zero-based index), and date to the console.

-Calling logCurrentDateInfo() triggers the function and prints the current date details.
</details>
 
---- 
###### ` Question 4:Format Date as a String`

 Description:Write a javascript program where print the  current date and formate the date in the readable formate.
`Example:`

```javascript

function logFormattedDate() {
   //code here
}

logFormattedDate();  // Calling the function

```
`Topics Covered:`
Date Object,toDateString().
 
**Hints:**
- [Date Object,toDateString().](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function logFormattedDate() {
    let currentDate = new Date();
    let formattedDate = currentDate.toDateString();  // Formats the date as a string
    console.log(formattedDate);  // Logs the formatted date, e.g., "Tue Dec 21 2024"
}

logFormattedDate();  // Calling the function


```
**Explanation:**
-The function logFormattedDate creates a Date object for the current date and formats it using toDateString() to display the date in a readable format (e.g., "Tue Dec 21 2024").

-When the function is called, it logs the formatted date to the console.
</details>
 
---- 
###### ` Question 5:Get Day of the Week`

 Description:Write a javascript program where print the  day of week according to date.For this firstly find the day then  return the day of week from that.
`Example:`

```javascript

function logDayOfWeek() {
   //code here
}

logDayOfWeek();  // Calling the function


```
`Topics Covered:`
Date Object getDay()
 
**Hints:**
- [Date Object, getDay()](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function logDayOfWeek() {
    let currentDate = new Date();
    let dayOfWeek = currentDate.getDay();  // Gets the day of the week (0 = Sunday, 1 = Monday, etc.)
    console.log('Day of the week:', dayOfWeek);  // Logs the day (0 = Sunday, 1 = Monday, etc.)
}

logDayOfWeek();  // Calling the function
 

```
**Explanation:**
-The function logDayOfWeek creates a Date object for the current date and uses getDay() to retrieve the day of the week (0 for Sunday, 1 for Monday, etc.).

-The function then logs this day to the console when called.
</details>
 
---- 
###### ` Question 6:Add Days to a Date`

 Description:Write a javascript program where manipulate the current date by adding some extra date and return the updated date from it.
`Example:`

```javascript

function getFutureDate(daysToAdd) {
//code here
}

console.log(getFutureDate(5));  // Logs the date 5 days from today


```
`Topics Covered:`
Date Object, getDate()
 
**Hints:**
- [Date Object, getDate()](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function getFutureDate(daysToAdd) {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + daysToAdd);
  return currentDate;
}

console.log(getFutureDate(5));  // Logs the date 5 days from today

```
**Explanation:**
-getFutureDate(daysToAdd) accepts a number (daysToAdd) and adds that many days to the current date.

-The function then returns the updated date.
</details>
 
---- 
###### ` Question 7:Subtract Days from a Date`

 Description:Write a javascript program where manipulate the current date by subtracting some  date and return the updated date from it.
`Example:`

```javascript
function subtractDaysFromCurrentDate(daysToSubtract) {
//code here
}

// Example usage:
let updatedDate = subtractDaysFromCurrentDate(10);  // Subtract 10 days from the current date
console.log(updatedDate);  // Logs the updated date


```
`Topics Covered:`
Date Object, getDate()
 
**Hints:**
- [Date Object, getDate()](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function subtractDaysFromCurrentDate(daysToSubtract) {
  let currentDate = new Date(); // Get the current date
  currentDate.setDate(currentDate.getDate() - daysToSubtract);  // Subtract the specified number of days
  return currentDate;  // Return the updated date
}

// Example usage:
let updatedDate = subtractDaysFromCurrentDate(10);  // Subtract 10 days from the current date
console.log(updatedDate);  // Logs the updated date


```
**Explanation:**
-subtractDaysFromCurrentDate(daysToSubtract): This function takes an argument daysToSubtract and subtracts that many days from the current date.

-setDate(currentDate.getDate() - daysToSubtract): This modifies the current date by subtracting the specified number of days.
</details>
 
---- 
###### ` Question 8:Compare Dates`

 Description:Write a javascript program where create a two variable date1 date2 and took a two date and then compare it on the basis of comparison print that date1 is earlier to date2 of later to date2 or same to date2.
`Example:`

```javascript

function compareDates(date1, date2) {
//code here
}

// Example usage:
let date1 = new Date('2024-12-25');
let date2 = new Date('2024-12-31');

compareDates(date1, date2);  // Compare the two dates


```
`Topics Covered:`
Date Object, getDate()
 
**Hints:**
- [Date Object, getDate()](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function compareDates(date1, date2) {
  if (date1 < date2) {
    console.log('date1 is earlier than date2');
  } else if (date1 > date2) {
    console.log('date1 is later than date2');
  } else {
    console.log('Both dates are the same');
  }
}

// Example usage:
let date1 = new Date('2024-12-25');
let date2 = new Date('2024-12-31');

compareDates(date1, date2);  // Compare the two dates

```
**Explanation:**
-compareDates(date1, date2): This function takes two Date objects as parameters (date1 and date2) and compares them.

-Inside the function, the comparison logic is similar to your original code:

If date1 is earlier than date2, it logs 'date1 is earlier than date2'.
If date1 is later than date2, it logs 'date1 is later than date2'.
If the dates are the same, it logs 'Both dates are the same'.
</details>
 
---- 
###### ` Question 9: Convert Date to Timestamp (Unix Time)`

 Description:Write a javascript program where convert a Date object to a Unix timestamp (milliseconds since January 1, 1970).
`Example:`

```javascript

function getCurrentTimestamp() {
  //code here
}

// Example usage:
let timestamp = getCurrentTimestamp();
console.log('Timestamp:', timestamp);  // Logs the timestamp



```
`Topics Covered:`
Date Object,getTime()
 
**Hints:**
- [Date Object,getTime()](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function getCurrentTimestamp() {
  let currentDate = new Date();   // Get the current date
  let timestamp = currentDate.getTime();  // Get the timestamp (milliseconds since January 1, 1970)
  return timestamp;  // Return the timestamp
}

// Example usage:
let timestamp = getCurrentTimestamp();
console.log('Timestamp:', timestamp);  // Logs the timestamp


```
**Explanation:**
-getCurrentTimestamp(): This function creates a new Date object for the current date and time, then calls .getTime() on it to get the timestamp.

-.getTime(): This method returns the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
</details>
 
---- 
###### ` Question 10:Get Time Difference Between Two Dates`

 Description:Write a program in javascript where take two variable startDate endDate and store the two date then find dateDiffrence after that find the daysDiffrence and return the difference.
`Example:`

```javascript

function getDaysDifference(startDate, endDate) {
 //code here
}

// Example usage:
let startDate = new Date('2024-01-01');
let endDate = new Date('2024-12-31');

let daysDifference = getDaysDifference(startDate, endDate);
console.log('Days difference:', daysDifference);  // Logs the difference in days



```
`Topics Covered:`
Date Object
 
**Hints:**
- [Date Object](https://www.w3schools.com/js/js_dates.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function getDaysDifference(startDate, endDate) {
  let timeDifference = endDate - startDate;  // Difference in milliseconds
  let daysDifference = timeDifference / (1000 * 3600 * 24);  // Convert to days
  return daysDifference;  // Return the difference in days
}

// Example usage:
let startDate = new Date('2024-01-01');
let endDate = new Date('2024-12-31');

let daysDifference = getDaysDifference(startDate, endDate);
console.log('Days difference:', daysDifference);  // Logs the difference in days


```
**Explanation:**
-getDaysDifference(startDate, endDate): This function takes two Date objects as parameters — startDate and endDate.

-endDate - startDate: Subtracting the two dates gives the difference in milliseconds.

-timeDifference / (1000 * 3600 * 24): This converts the time difference from milliseconds to days. 

-The denominator represents the number of milliseconds in a day (1000 milliseconds in a second, 3600 seconds in an hour, and 24 hours in a day).
</details>
 
---- 


