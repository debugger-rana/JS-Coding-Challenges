# Type Conversion
###### ` Question 1:Age Validation`

 Write a program in javascript.where User input  age as a string in variable ageInput. Write a program to check whether the input age is valid or not.

`Example:`

```javascript

function validateAge(ageInput) {
    //code here
}

// Example usage
let ageInput = "25";  // User input as a string
validateAge(ageInput);


  
```

`Topics Covered:`
String parseInt() method
 
**Hints:**
- [parseInt()](https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt%20method%20parses%20a,omitted%2C%20JavaScript%20assumes%20radix%2010.)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function validateAge(ageInput) {
    // Convert the input to an integer
    let age = parseInt(ageInput, 10);

    // Check if the age is a valid number and at least 18
    if (isNaN(age) || age < 18) {
        console.log("Age must be a number and at least 18.");
    } else {
        console.log("Age is valid.");
    }
}

// Example usage
let ageInput = "25";  // User input as a string
validateAge(ageInput);

```

**Explanation:**

The validateAge function converts the input string to an integer and checks if it's a valid number and at least 18.
-If not, it logs an error message, otherwise, it confirms that the age is valid.
  
</details>
 
---- 
###### ` Question 2:Phone Number Validation`

 Write a program in javaScript where take a phone number as a input in variable phoneInput. Write a logic to validate weather the phone number is valid or not.

`Example:`

```javascript

function validatePhoneNumber(phoneInput) {
 //code here
}

// Example usage:
let phoneInput = " 555-123-4567 ";
validatePhoneNumber(phoneInput);


  
```

`Topics Covered:`
String() method
 
**Hints:**
- [String()](https://www.w3schools.com/js/js_string_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

 // Convert to string and remove non-numeric characters
  let cleanedPhoneNumber = String(phoneInput).replace(/D/g, ''); 

  // Ensure the phone number has exactly 10 digits
  if (cleanedPhoneNumber.length === 10) {
    console.log("Valid phone number:", cleanedPhoneNumber);  // "5551234567"
  } else {
    console.log("Invalid phone number format");
  }


```

**Explanation:**


-If valid, prints the cleaned number ("5551234567").,
-If invalid, prints "Invalid phone number format".
  
</details>
 
---- 
###### ` Question 3:API Response Conversion`

Write a program in javaScript where declare a object  apiResponse which return a variable productId of integer type, productName string type, price string type, available boolean type.Write a program to  convert the price from string to number.Formate price as a currency.

`Example:`

```javascript

function formatPriceFromApiResponse(apiResponse) {
//code here
}

// Example usage:
const apiResponse = {
  productId: 12345,
  productName: "Laptop",
  price: "999.99", // Price returned as a string
  available: true
};

console.log(formatPriceFromApiResponse(apiResponse));  // "$999.99"



  
```

`Topics Covered:`
parseFloat, toFixed()
 
**Hints:**
- [parseFloat()](https://www.w3schools.com/jsref/jsref_parsefloat.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function formatPriceFromApiResponse(apiResponse) {
  // Convert the price from string to number
  const priceAsNumber = parseFloat(apiResponse.price);
  
  // Format price as a currency string
  const formattedPrice = `$${priceAsNumber.toFixed(2)}`;  // Correct usage

  return formattedPrice;
}

// Example usage:
const apiResponse = {
  productId: 12345,
  productName: "Laptop",
  price: "999.99", // Price returned as a string
  available: true
};

console.log(formatPriceFromApiResponse(apiResponse));  // "$999.99"



```

**Explanation:**


-The function formatPriceFromApiResponse converts the price from a string to a number using parseFloat() and formats it as a currency string with two decimal places using toFixed(2). 
-It then returns the formatted price prefixed with a dollar sign ($).
  
</details>
###### ` Question 4:Storing Objects in Local Storage`

 Write a program in javaScript where declare a object with variable name, age and write a program to convert it into JSON string and store it in localstorage.

`Example:`

```javascript

function storeUserData(user) {
//code here
}

// Example usage:
let user = { name: "Alice", age: 30 };
storeUserData(user);


  
```

`Topics Covered:`
String, stringify()
 
**Hints:**
- [stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function storeUserData(user) {
  // Convert the user object to a JSON string
  let userJson = JSON.stringify(user);
  
  // Store the JSON string in localStorage
  localStorage.setItem("user", userJson);

  console.log("User data stored in local storage.");
}

// Example usage:
let user = { name: "Alice", age: 30 };
storeUserData(user);



```

**Explanation:**


-storeUserData(user): This function accepts a user object, converts it into a JSON string using JSON.stringify(),
 and stores it in the browser's localStorage using setItem().
  
</details>
 
---- 

###### ` Question 5:Converting a Date Object to String`

 Write a program in javaScript  where create a variable currentDate and declare the current date by using Date constructor.Write a program to convert the date in string formate

`Example:`

```javascript

function getCurrentDateString() {
 //code here
}

// Example usage:
console.log(getCurrentDateString());



  
```

`Topics Covered:`
String, toString()
 
**Hints:**
- [toString()](https://www.w3schools.com/jsref/jsref_tostring_string.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getCurrentDateString() {
  // Get the current date and time
  let currentDate = new Date();
  
  // Convert the current date to a string
  let currentDateString = currentDate.toString();
  
  // Return the string representation of the current date
  return currentDateString;
}

// Example usage:
console.log(getCurrentDateString());




```

**Explanation:**


-getCurrentDateString(): This function creates a new Date object to get the current date and time, 
converts it into a string using .toString(), and then returns the string.
  
</details>
 
---- 
###### ` Question 6:Displaying a List of Users`

 Create an array of user objects, each containing name (string) age (number)email (string) Iterate through the array and display the user information in a formatted manner.

`Example:`

```javascript

// List of users
const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

// Function to display users
function displayUsers(users) {
  //code here
  };
// Call the function to display users
displayUsers(users);

  
```

`Topics Covered:`
String
 
**Hints:**
- [String()](https://www.w3schools.com/js/js_type_conversion.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// List of users
const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

// Function to display users
function displayUsers(users) {
  console.log("List of Users:");
  users.forEach((user, index) => {
    console.log(index + 1}:);
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log("------------------------");
  });
}

// Call the function to display users
displayUsers(users);





```

**Explanation:**


-The displayUsers function iterates over the users array and logs each user's name, age, and email to the console.
- It formats the output with a label for each user and separates them with a dashed line.
  
</details>
 
---- 
