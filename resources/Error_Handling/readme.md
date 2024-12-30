# Error Handling
###### ` Question 1: Handle Division by Zero`

 Write a function safeDivide that takes two numbers and returns their division. If the divisor is 0, it should throw an error with the message "Cannot divide by zero".

`Example:`

```javascript

function safeDivide(a, b) {
  //Your code here
}

// Function call
console.log(safeDivide(10, 2)); // Expected output: 5
console.log(safeDivide(10, 0)); // Expected output: "Cannot divide by zero"


  
```

`Topics Covered:`
Error Handling
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(safeDivide(10, 2)); // Expected output: 5
console.log(safeDivide(10, 0)); // Expected output: "Cannot divide by zero"


  
```

**Explanation:**


- The function safeDivide takes two parameters, a (numerator) and b (denominator).
- It uses a try block to handle the division process.
- If b is 0, it throws an error with the message "Cannot divide by zero".
- If no error occurs, it returns the result of a / b.
- The catch block captures the error and returns its message.
- This ensures the function safely handles division by zero and provides a meaningful error message instead of crashing.

  
</details>
 
---- 
###### ` Question 2: Handle Timeout in API Requests`

 Write a function fetchWithTimeout that fetches data from an API and rejects the promise if it takes more than 5 seconds.

`Example:`

```javascript

function fetchWithTimeout(url) {
  //Your code here
}

// Function call
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts")
  .then(result => console.log(result))  // Expected output: "Data fetched successfully"
  .catch(error => console.log(error));  // Expected output: "Request timed out" if exceeds 5 seconds
  
```

`Topics Covered:`
Error Handling, Promise(), fetch api, setTimeout()
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [Promise()](https://www.w3schools.com/js/js_promise.asp), - [fetch api](https://www.w3schools.com/jsref/api_fetch.asp), - [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function fetchWithTimeout(url) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject("Request timed out");
    }, 5000);

    fetch(url)
      .then(response => {
        clearTimeout(timeout);
        if (response.ok) {
          resolve("Data fetched successfully");
        } else {
          reject("Request failed with status: " + response.status);
        }
      })
      .catch(error => {
        clearTimeout(timeout);
        reject("Request failed");
      });
  });
}

// Function call
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts")
  .then(result => console.log(result))  // Expected output: "Data fetched successfully"
  .catch(error => console.log(error));  // Expected output: "Request timed out" if exceeds 5 seconds
  
```

**Explanation:**


- The fetchWithTimeout function takes a url as input and returns a Promise.
- A timeout is set for 5 seconds using setTimeout. If the request exceeds 5 seconds, it rejects the promise with the message "Request timed out".
- The fetch function is used to send a request to the provided url.
  - If the response is successful (response.ok is true), the timeout is cleared, and the promise resolves with "Data fetched successfully".
  - If the response fails (e.g., due to a bad status code), the promise is rejected with "Request failed with status: " + response.status.
- If a network error occurs, the timeout is cleared, and the promise is rejected with the message "Request failed".
- This function ensures that the fetch request doesn't hang indefinitely by enforcing a 5-second timeout.

  
</details>
 
---- 
###### ` Question 3: Validate URL Format`

 Write a function validateURL that checks if a given string is a valid URL. If not, return the message "Invalid URL format".

`Example:`

```javascript

function validateURL(url) {
  //Your code here
}

// Function call
console.log(validateURL("https://example.com")); // Expected output: true
console.log(validateURL("htp://example.com"));  // Expected output: "Invalid URL format"

  
```

`Topics Covered:`
Error Handling, RegEx
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [RegEx](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function validateURL(url) {
  try {
    const regex = /^(https?|ftp)://[^s/$.?#].[^s]*$/i;
    if (!regex.test(url)) {
      throw new Error("Invalid URL format");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(validateURL("https://example.com")); // Expected output: true
console.log(validateURL("htp://example.com"));  // Expected output: "Invalid URL format"

  
```

**Explanation:**


- The validateURL function takes a url as input.
- It uses a regular expression (regex) to check if the url follows a valid format (supports http, https, or ftp protocols).
- If the url does not match the regex, it throws an error with the message "Invalid URL format".
- If the url matches the regex, the function returns true, indicating a valid URL.
- The catch block handles the error and returns the error message.
- This ensures that invalid URLs are detected and an appropriate error message is provided.

  
</details>
 
---- 
###### ` Question 4: Catch DOM Manipulation Errors`

 Write a function updateElementText that updates the text content of a DOM element. If the element does not exist, throw an error with the message "Element not found".

`Example:`

```javascript

function updateElementText(selector, text) {
 //Your code here
}

// Function call (Make sure there's an element with id 'myDiv' in the HTML)
console.log(updateElementText("#myDiv", "Hello World")); // Expected output: "Element updated successfully"
console.log(updateElementText("#nonExistingElement", "Hello World")); // Expected output: "Element not found"

  
```

`Topics Covered:`
Error Handling, Dom methods i.e textContent
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [Dom methods i.e textContent](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function updateElementText(selector, text) {
  try {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error("Element not found");
    }
    element.textContent = text;
    return "Element updated successfully";
  } catch (error) {
    return error.message;
  }
}

// Function call (Make sure there's an element with id 'myDiv' in the HTML)
console.log(updateElementText("#myDiv", "Hello World")); // Expected output: "Element updated successfully"
console.log(updateElementText("#nonExistingElement", "Hello World")); // Expected output: "Element not found"

  
```

**Explanation:**


- The updateElementText function takes two parameters: selector (to find the element) and text (to update the text content).
- It uses document.querySelector(selector) to select the element based on the provided CSS selector.
- If no element is found, it throws an error with the message "Element not found".
- If the element is found, it updates the element's textContent with the provided text.
- The function returns "Element updated successfully" when the update is successful.
- The catch block handles any errors and returns the error message.
- This ensures proper error handling when trying to update non-existing elements.

  
</details>
 
---- 
###### ` Question 5: Validate Form Inputs`

 Write a function validateForm that checks if all required fields in a form are filled. If any field is empty, return the message "Form validation failed".

`Example:`

```javascript

function validateForm(formData) {
 //Your code here
}

// Function call
console.log(validateForm({ name: "Prabir", email: "Prabir@gmail.com" })); // Expected output: true
console.log(validateForm({ name: "Prabir", email: "" })); // Expected output: "Form validation failed"

  
```

`Topics Covered:`
Error Handling
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function validateForm(formData) {
  try {
    for (let key in formData) {
      if (formData[key] === "") {
        throw new Error("Form validation failed");
      }
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(validateForm({ name: "Prabir", email: "Prabir@gmail.com" })); // Expected output: true
console.log(validateForm({ name: "Prabir", email: "" })); // Expected output: "Form validation failed"

  
```

**Explanation:**


- The validateForm function takes an object formData as input, where each key represents a form field, and its value represents the input value.
- It loops through each key in the formData object using a for...in loop.
- If any field value in the formData object is an empty string (""), it throws an error with the message "Form validation failed".
- If all fields are filled, the function returns true, indicating that the form is valid.
- The catch block handles the error and returns the error message.
- This ensures that all required fields in the form data are filled before proceeding.

  
</details>
 
---- 
###### ` Question 6: Prevent Infinite Loops`

 Write a function safeLoop that executes a loop with a maximum iteration limit. If the limit is exceeded, throw an error with the message "Infinite loop detected".

`Example:`

```javascript

function safeLoop(iterations) {
  //Your code here
}

// Function call
console.log(safeLoop(500));  // Expected output: "Loop completed successfully"
console.log(safeLoop(1500)); // Expected output: "Infinite loop detected"
  
```

`Topics Covered:`
Error Handling
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function safeLoop(iterations) {
  try {
    if (iterations > 1000) {
      throw new Error("Infinite loop detected");
    }
    for (let i = 0; i < iterations; i++) {
     console.log(i)
    }
    return "Loop completed successfully";
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(safeLoop(500));  // Expected output: "Loop completed successfully"
console.log(safeLoop(1500)); // Expected output: "Infinite loop detected"
  
```

**Explanation:**


- The safeLoop function takes a single parameter, iterations, which represents the number of loop iterations.
- Before running the loop, it checks if the iterations value is greater than 1000.
- If the iterations value exceeds 1000, it throws an error with the message "Infinite loop detected".
- If the value is within the safe limit, it executes a for loop that logs numbers from 0 to iterations - 1.
- After completing the loop, the function returns "Loop completed successfully".
- The catch block handles any errors and returns the error message.
- This ensures the prevention of excessively large loops that could cause performance issues or infinite loops.
  
</details>
 
---- 
###### ` Question 7: Handle Cookie Errors`

 Write a function getCookieValue that retrieves a cookie's value. If the cookie does not exist, throw an error with the message "Cookie not found".

`Example:`

```javascript

function getCookieValue(cookieName) {
 //Your code
}

// Function call (Make sure the cookie "sessionId" is set in your browser)
console.log(getCookieValue("sessionId")); // Expected output: Value of "sessionId" cookie or "Cookie not found"

  
```

`Topics Covered:`
Error Handling, String method i.e. split(),  startsWith(), Array methods i.e. find()
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [String method i.e. split()](https://www.w3schools.com/js/js_string_methods.asp), - [startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp), - [Array methods i.e. find()](https://www.w3schools.com/js/js_array_search.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getCookieValue(cookieName) {
  try {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(cookieName + '='));
    if (!value) {
      throw new Error("Cookie not found");
    }
    return value.split('=')[1];
  } catch (error) {
    return error.message;
  }
}

// Function call (Make sure the cookie "sessionId" is set in your browser)
console.log(getCookieValue("sessionId")); // Expected output: Value of "sessionId" cookie or "Cookie not found"

  
```

**Explanation:**


- The getCookieValue function takes a cookieName as input to search for a specific cookie.
- It uses document.cookie to access all cookies stored in the browser.
- The cookies are split by ; and then it searches for a cookie that starts with the provided cookieName followed by an equals sign (=).
- If the cookie is found, it extracts the value by splitting the string at the = and returns the value of the cookie.
- If the cookie is not found, it throws an error with the message "Cookie not found".
- The catch block handles the error and returns the error message.
- This ensures that the function provides a meaningful message when the specified cookie is not found.

  
</details>
 
---- 
###### ` Question 8: Validate Email Format`

 Write a function validateEmail that checks if a given string is a valid email. If not, return the message "Invalid email format".

`Example:`

```javascript

function validateEmail(email) {
  //Your code here
}

// Function call
console.log(validateEmail("example@example.com")); // Expected output: true
console.log(validateEmail("example.com"));        // Expected output: "Invalid email format"

  
```

`Topics Covered:`
Error Handling, RegEx
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [RegEx](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function validateEmail(email) {
  try {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      throw new Error("Invalid email format");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(validateEmail("example@example.com")); // Expected output: true
console.log(validateEmail("example.com"));        // Expected output: "Invalid email format"

  
```

**Explanation:**


- The validateEmail function takes an email as input and checks if it follows a valid email format.
- It uses a regular expression (regex) to match the email against the standard email format (e.g., example@example.com).
- If the email doesn't match the regex, it throws an error with the message "Invalid email format".
- If the email is valid, the function returns true.
- The catch block handles the error and returns the error message.
- This ensures that the function detects invalid email formats and provides a clear error message.
  
</details>
 
---- 
###### ` Question 9: Handle Null Values`

 Write a function safeLength that returns the length of a string. If the input is null, return the message "Cannot get length of null".

`Example:`

```javascript

function safeLength(str) {
  //Your code here
}

// Function call
console.log(safeLength("hello"));  // Expected output: 5
console.log(safeLength(null));     // Expected output: "Cannot get length of null"

  
```

`Topics Covered:`
Error Handling, String methods i.e. length()
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [String methods i.e. length()](https://www.w3schools.com/js/js_string_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function safeLength(str) {
  try {
    if (str === null) {
      throw new Error("Cannot get length of null");
    }
    return str.length;
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(safeLength("hello"));  // Expected output: 5
console.log(safeLength(null));     // Expected output: "Cannot get length of null"

  
```

**Explanation:**


- The safeLength function takes a string (str) as input and returns its length.
- It first checks if the input string is null. If it is, it throws an error with the message "Cannot get length of null".
- If the string is not null, it returns the length of the string using str.length.
- The catch block handles any errors (such as when the input is null) and returns the error message.
- This ensures that the function safely handles cases where the input might be null and provides a meaningful error message.
  
</details>
 
---- 
###### ` Question 10: Validate Array Index`

 Write a function getElement that retrieves an element from an array by index. If the index is out of bounds, throw an error with the message "Index out of range".

`Example:`

```javascript

function getElement(arr, index) {
 //Your code here
}

// Function call
console.log(getElement([1, 2, 3], 1)); // Expected output: 2
console.log(getElement([1, 2, 3], 5)); // Expected output: "Index out of range"


  
```

`Topics Covered:`
Error Handling, Array length
 
**Hints:**
- [Error Handling](https://www.w3schools.com/js/js_errors.asp), - [Array length](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getElement(arr, index) {
  try {
    if (index < 0 || index >= arr.length) {
      throw new Error("Index out of range");
    }
    return arr[index];
  } catch (error) {
    return error.message;
  }
}

// Function call
console.log(getElement([1, 2, 3], 1)); // Expected output: 2
console.log(getElement([1, 2, 3], 5)); // Expected output: "Index out of range"

  
```

**Explanation:**


- The getElement function takes an array (arr) and an index (index) as input.
- It first checks if the index is within a valid range (greater than or equal to 0 and less than the length of the array).
- If the index is out of range, it throws an error with the message "Index out of range".
- If the index is valid, it returns the element at the specified index in the array.
- The catch block handles any errors (such as an out-of-range index) and returns the error message.
- This ensures that the function safely handles invalid index values and provides a meaningful error message.
  
</details>
 
---- 
