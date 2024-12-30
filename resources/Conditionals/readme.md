# Conditionals
` Question 1:Access Control System`

 Description:Write a program in javascript.Where create a variable username, password and role.Write a function checkAcess .In this function define the correctUsername, correctPassword, correctRole then compare it with the function parameter.Now, function will decide the wheather the user will get the access or not.

`Example:`

```javascript

// Function to check access based on credentials
function checkAccess(username, password, role) {
  //code here
}
// Example usage:
checkAccess("admin", "password123", "admin");  // Admin access
checkAccess("admin", "password123", "user");   // User access
checkAccess("admin", "wrongpassword", "admin"); // Invalid password
checkAccess("admin", "password123", "guest");  // Invalid role







  
```

`Topics Covered:`
if condition
 
**Hints:**
- [if condition](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to check access based on credentials
function checkAccess(username, password, role) {
  // Predefined correct credentials and roles for demonstration purposes
    const correctUsername = "admin";
    const correctPassword = "password123";
    const correctRole = "admin"; 
// Assuming 'admin' is the default for demo purposes

    // Check if username and password are correct
if (username === correctUsername && password === correctPassword) {
        // Check if the role is valid and grant access accordingly
 if (role.toLowerCase() === "admin") {
       console.log("Access granted! Welcome, Admin.");
      console.log("Admin Dashboard: You have full access to all system features.");
        } 
else if (role.toLowerCase() === "user") {
      console.log("Access granted! Welcome, User.");
     console.log("User Dashboard: You have limited access to the system.");
        } else {
      console.log("Access denied. Invalid role.");
        }
    } 
else {
console.log("Access denied. Invalid username or password.");
    }
}

// Example usage:
checkAccess("admin", "password123", "admin");  // Admin access
checkAccess("admin", "password123", "user");   // User access
checkAccess("admin", "wrongpassword", "admin"); // Invalid password
checkAccess("admin", "password123", "guest");  // Invalid role



```

**Explanation:**


-The function checkAccess validates the username and password first, and if correct, it checks the user role to grant access accordingly. 

-It ensures that only valid credentials and roles (e.g., "admin" or "user") are accepted, rejecting any invalid inputs.
</details>
 
---- 
` Question 2:Checking if a Number is Positive, Negative, or Zero`

 Description:Write a program in javascript.Where take a number form prompt by the user and check that whether the number is  positive negative or zero,
`Example:`

```javascript

// Function to check access based on credentials
function checkNumber() {
    //code here
}
// Call the function to check the number
checkNumber();





  
```

`Topics Covered:`
else if condition
 
**Hints:**
- [else if condition](https://www.w3schools.com/js/js_if_else.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function checkNumber() {
    // Get the number from the user (can be replaced with any number for testing)
    let number = prompt("Enter a number:");
    // Convert the input to a number
    number = parseFloat(number);
    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
// Call the function to check the number
checkNumber();




```

**Explanation:**



-The checkNumber function prompts the user to enter a number, checks if it's valid, and categorizes it as positive, negative, or zero. 

-It handles invalid inputs by informing the user to enter a valid number.



</details>
 
---- 
` Question 3:Determining Discount Based on Age or Membership`

 Description:Write a program in javascript.Where take a age and membership  form prompt by the user and check that how many discount user will got according to their  age and membership.

For  example:

Users under 18 get a 10% discount.

Users 60 and above get a 20% discount.

Users with an "VIP" membership get a 30% discount.

Users without a special condition (age or membership) get a 5% discount.


`Example:`

```javascript

function determineDiscount() {
   //code here
}

// Call the function to check the discount
determineDiscount();








  
```

`Topics Covered:`
if condition, else if
 
**Hints:**
- [if condition, else if](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function determineDiscount() {
    // Get user input for age and membership status
    let age = prompt("Enter your age:");
    let membership = prompt("Do you have a VIP membership? (yes/no)");
    // Convert age to number
    age = parseInt(age);
    // Validate age input
    if (isNaN(age) || age < 0) {
        console.log("Please enter a valid age.");
        return;
    }
    // Determine the discount
    let discount = 0;

    if (membership.toLowerCase() === "yes") {
        discount = 30;  // VIP members get 30% discount
    } else if (age < 18) {
        discount = 10;  // Users under 18 get 10% discount
    } else if (age >= 60) {
        discount = 20;  // Users 60 and above get 20% discount
    } else {
        discount = 5;   // All others get 5% discount
    }

    // Display the discount
    console.log(`You get a ${discount}% discount!`);
}

// Call the function to check the discount
determineDiscount();


```

**Explanation:**


-The determineDiscount function calculates a discount based on the user's age and VIP membership status.


-It assigns different discounts (30%, 10%, 20%, or 5%) depending on the conditions and displays the result.
</details>
 
---- 
` Question 4:Form Validation`

 Description:Write a program in javascript where check the user is entered the email id or not if enterned then check the correct formate for the email like it contains the @ or not in email.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <script>
        function validateForm() {
            //code here
        }
    </script>
</head>
<body>

    <h2>Sign Up Form</h2>
    <form onsubmit="return validateForm()">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>

</body>
</html>








  
```

`Topics Covered:`
if condition
 
**Hints:**
- [if condition](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <script>
        function validateForm() {
            let email = document.getElementById("email").value;
            if (!email) {
                alert("Email is required!");
                return false;
            } else if (!email.includes('@')) {
                alert("Please enter a valid email address.");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>

    <h2>Sign Up Form</h2>
    <form onsubmit="return validateForm()">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>

</body>
</html>


```

**Explanation:**


-The validateForm function checks if the email field is filled and contains an "@" symbol, displaying appropriate alerts if either condition is not met.

-It returns false to prevent form submission if the validation fails.
</details>
 
---- 
` Question 5:Checking if a User is Logged In`

 Description:Write a program in javascript where create a bool type variable isLogin and assign the value for it then create a function checkLoginStatus  to check that whether the user is login or not.

`Example:`

```javascript

// Create a boolean variable 'isLogin' and assign a value to it
let isLogin = true; 
// Change this to false to test the 'not logged in' case
// Function to check login status
function checkLoginStatus() {
   //code here
}
// Call the function to check the login status
checkLoginStatus();

  
```

`Topics Covered:`
if condition
 
**Hints:**
- [if condition](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
// Create a boolean variable 'isLogin' and assign a value to it
let isLogin = true; 
// Change this to false to test the 'not logged in' case
// Function to check login status
function checkLoginStatus() {
    if (isLogin) {
        console.log("User is logged in.");
    } else {
        console.log("User is not logged in.");
    }
}
// Call the function to check the login status
checkLoginStatus(); 


```

**Explanation:**

-The checkLoginStatus function checks the boolean variable isLogin to determine whether the user is logged in or not.

-It logs a message accordingly, either indicating the user is logged in or not.
</details>
 
---- 
` Question 6:Checking if a Day is a Weekend`

 Description:Write a JavaScript program that checks if a given day is a weekend (i.e., Saturday or Sunday). The program uses the Date object in JavaScript to get the day of the week and checks whether it's Saturday (6) or Sunday (0), which are considered weekend days.

`Example:`

```javascript

// Function to check if today is a weekend
function isWeekend() {
    //code here
}
// Call the function to check if today is a weekend
isWeekend();

  
```

`Topics Covered:`
if condition, getDay
 
**Hints:**
- [if condition ,getDay()](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
// Function to check if today is a weekend
function isWeekend() {
    // Get the current day of the week (0 = Sunday, 6 = Saturday)
    let today = new Date();
    let dayOfWeek = today.getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)

    // Check if the day is Saturday or Sunday
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log("Yes, it's a weekend!");
    } else {
        console.log("No, it's a weekday.");
    }
}
// Call the function to check if today is a weekend
isWeekend();






```

**Explanation:**


-The isWeekend function checks if today is Saturday or Sunday by using the getDay() method. 

-It logs whether today is a weekend or a weekday based on the result.
</details>
 
---- 
` Question 6:Temperature-Based Clothing Advice`

 Description:Write a JavaScript program that provides clothing advice based on the temperature. The program takes a temperature input (in Celsius) and suggests appropriate clothing like jackets, t-shirts, sweaters, or coats. Create function getClothingAdvice and define logic in it.

Hint. 
The function uses if-else if statements to determine what type of clothing to recommend.

If the temperature is less than or equal to 0°C, it suggests heavy winter clothing (coat, gloves, scarf).

If the temperature is between 0°C and 10°C, it suggests wearing a warm jacket or sweater.

If the temperature is between 10°C and 20°C, it recommends a light jacket or sweater.

If the temperature is between 20°C and 30°C, it suggests comfortable clothing like a t-shirt and shorts.

If the temperature is above 30°C, it advises wearing light clothes like a tank top or shorts.


`Example:`

```javascript

// Function to give clothing advice based on the temperature
function getClothingAdvice(temperature) {
   //code here
}

// Example usage
let currentTemperature = 18; // Set the current temperature in Celsius
getClothingAdvice(currentTemperature);


  
```

`Topics Covered:`
if condition, else if
 
**Hints:**
- [if condition ,else if](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
// Function to give clothing advice based on the temperature
function getClothingAdvice(temperature) {
    if (temperature <= 0) {
        console.log("It's freezing cold! Wear a heavy coat, gloves, and a scarf.");
    } else if (temperature > 0 && temperature <= 10) {
        console.log("It's very cold. Wear a warm jacket or sweater.");
    } else if (temperature > 10 && temperature <= 20) {
        console.log("It's a bit chilly. A light jacket or sweater should be enough.");
    } else if (temperature > 20 && temperature <= 30) {
        console.log("It's warm. A t-shirt and shorts should be comfortable.");
    } else {
        console.log("It's hot! Wear light clothes like a tank top or shorts.");
    }
}

// Example usage
let currentTemperature = 18; // Set the current temperature in Celsius
getClothingAdvice(currentTemperature);

```

**Explanation:**


-The getClothingAdvice function provides clothing suggestions based on the input temperature.

-It categorizes the temperature into ranges and gives appropriate advice for each condition (cold, chilly, warm, or hot).
</details>
 
---- 
` Question 8:Evaluating Exam Grades`

 Description:Write a JavaScript program that evaluates an exam grade and provides feedback based on the score. It checks the student's grade and assigns them a letter grade (like A, B, C, etc.), along with a message about their performance.

Hint. 

The if-else structure is used to check the value of the score and determine the grade.

A (90 to 100): Excellent performance.

B (80 to 89): Good job.

C (70 to 79): Passing grade.

D (60 to 69): Needs improvement, but not failing.

F (below 60): Failed, needs more work.

If the score is outside the valid range (less than 0 or greater than 100), the program will print an "Invalid score" message.

`Example:`

```javascript

// Function to evaluate exam grade and give feedback
function evaluateGrade(score) {
  //code here
}
// Example usage
let examScore = 85;  
// You can change this value to test different scores
evaluateGrade(examScore);


  
```

`Topics Covered:`
if condition, else if
 
**Hints:**
- [if condition ,else if](https://www.w3schools.com/js/js_if_else.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
// Function to evaluate exam grade and give feedback
function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("Grade: A. Excellent work!");
    } else if (score >= 80 && score < 90) {
        console.log("Grade: B. Good job!");
    } else if (score >= 70 && score < 80) {
        console.log("Grade: C. You passed.");
    } else if (score >= 60 && score < 70) {
        console.log("Grade: D. Needs improvement.");
    } else if (score >= 0 && score < 60) {
        console.log("Grade: F. Failed. Better luck next time.");
    } else {
        console.log("Invalid score. Please enter a score between 0 and 100.");
    }
}
// Example usage
let examScore = 85;  
// You can change this value to test different scores
evaluateGrade(examScore);
```

**Explanation:**

-The evaluateGrade function assesses an exam score and provides feedback based on predefined grade ranges. 

-It gives a grade (A, B, C, D, F) and a corresponding message based on the score provided.
</details>
 
---- 
` Question 9:Checking Weather for an Outdoor Activity`

 Description:Write a JavaScript program that checks the weather and provides advice for an outdoor activity based on the temperature. Take temperature from user and function checkOutdoorActivity and pass temperature as a argument.For this example, the program will suggest whether it's good to go outside for activities like walking, running, or staying indoors depending on the temperature.

Hint. 

If the temperature is less than or equal to 0°C, it's freezing, and the advice is to stay indoors.

If the temperature is between 0°C and 10°C, it's cold, so it's still okay to go for a walk but you need to dress warmly.

If the temperature is between 10°C and 20°C, it's a bit chilly, making it ideal for a run or a walk outside.

If the temperature is between 20°C and 30°C, it's warm, and the program suggests activities like jogging, hiking, or cycling.

If the temperature is above 30°C, it's hot, so it's better to stay indoors and stay hydrated.

`Example:`

```javascript

// Function to give outdoor activity suggestion based on the weather (temperature)
function checkOutdoorActivity(temperature) {
   //code here
}

// Example usage
let currentTemperature = 15; // Set the current temperature in Celsius
checkOutdoorActivity(currentTemperature);

  
```

`Topics Covered:`
if condition, else if
 
**Hints:**
- [if condition ,else if](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
// Function to give outdoor activity suggestion based on the weather (temperature)
function checkOutdoorActivity(temperature) {
    if (temperature <= 0) {
        console.log("It's freezing! Stay indoors and stay warm.");
    } else if (temperature > 0 && temperature <= 10) {
        console.log("It's cold outside. Wear a warm jacket and go for a walk!");
    } else if (temperature > 10 && temperature <= 20) {
        console.log("It's a bit chilly. Perfect weather for a run or walk.");
    } else if (temperature > 20 && temperature <= 30) {
        console.log("It's warm outside! Ideal for outdoor activities like jogging, hiking, or cycling.");
    } else {
        console.log("It's hot! Stay hydrated, and it's best to avoid outdoor activities.");
    }
}

// Example usage
let currentTemperature = 15; // Set the current temperature in Celsius
checkOutdoorActivity(currentTemperature);

```

**Explanation:**



-The checkOutdoorActivity function suggests outdoor activities based on the temperature. 
-It provides tailored advice for different temperature ranges, from staying indoors in freezing conditions to enjoying outdoor activities in warm weather.
</details>
 
---- 
` Question 10:Simple Voting Eligibility Check`

 Description:write simple JavaScript program that checks if a user is eligible to vote based on their age. The program will ask for the user's age and then tell them if they are eligible to vote (in most countries, the voting age is 18 or older).

`Example:`

```javascript

// Function to check voting eligibility based on age
function checkVotingEligibility(age) {
   //code here
}
// Example usage
let userAge = 20; // Set the user's age
checkVotingEligibility(userAge);


  
```

`Topics Covered:`
if condition
 
**Hints:**
- [if condition](https://www.w3schools.com/jsref/jsref_if.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
// Function to check voting eligibility based on age
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
// Example usage
let userAge = 20; // Set the user's age
checkVotingEligibility(userAge);

```

**Explanation:**


-This code checks if a person's age is 18 or older to determine voting eligibility.

-It logs whether the person is eligible to vote based on the condition.
</details>
 
---- 

