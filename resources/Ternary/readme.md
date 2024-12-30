# Ternary

` Question 1: Determine Pass or Fail`

  Write a function checkPassFail that checks if a student has passed: 
     1. If marks >= 40, return "Pass".
     2. Otherwise, return "Fail".


`Example:`

```javascript

function checkPassFail(marks) {
    // Your code here
}

// Test cases
console.log(checkPassFail(35));  // Output: "Fail"
console.log(checkPassFail(45));  // Output: "Pass"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function checkPassFail(marks) {
    // Check if the student has passed
    return marks >= 40 ? "Pass" : "Fail";
}

// Test cases
console.log(checkPassFail(35));  // Output: "Fail"
console.log(checkPassFail(45));  // Output: "Pass"

  
```

**Explanation:**



- The function uses a ternary operator to check if the marks are greater than or equal to 40.
- If true, it returns "Pass", otherwise, it returns "Fail".
  
</details>
 
---- 
` Question 2: Check Eligibility for Voting`

 Write a function checkVotingEligibility that checks if a user can vote:
    1. If age >= 18, return "Eligible to Vote".
    2. Otherwise, return "Not Eligible"



`Example:`

```javascript

function checkVotingEligibility(age) {
   //Your code here
}

// Test cases
console.log(checkVotingEligibility(20));  // Output: "Eligible to Vote"
console.log(checkVotingEligibility(16));  // Output: "Not Eligible"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function checkVotingEligibility(age) {
    // Check if the user is eligible to vote
    return age >= 18 ? "Eligible to Vote" : "Not Eligible";
}

// Test cases
console.log(checkVotingEligibility(20));  // Output: "Eligible to Vote"
console.log(checkVotingEligibility(16));  // Output: "Not Eligible"

  
```

**Explanation:**



- The function uses a ternary operator to check if the age is greater than or equal to 18.
- If true, it returns "Eligible to Vote", otherwise, it returns "Not Eligible".

  
</details>
 
---- 
` Question 3: Check User Login Status`

 Write a function checkLogin that checks if a user is logged in:
     1. If isLoggedIn is true, return "Welcome User".
     2. Otherwise, return "Please Login".


`Example:`

```javascript

function checkLogin(isLoggedIn) {
   //Your code
}

// Test cases
console.log(checkLogin(true));   // Output: "Welcome User"
console.log(checkLogin(false));  // Output: "Please Login"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function checkLogin(isLoggedIn) {
    // Check if the user is logged in
    return isLoggedIn ? "Welcome User" : "Please Login";
}

// Test cases
console.log(checkLogin(true));   // Output: "Welcome User"
console.log(checkLogin(false));  // Output: "Please Login"

  
```

**Explanation:**



- The function uses a ternary operator to check if isLoggedIn is true.
- If true, it returns "Welcome User", otherwise, it returns "Please Login".
  
</details>
 
---- 
` Question 4: Button State Based on Form Completion`

 Write a function buttonState that checks if the form is valid (isValid) and submitted (isSubmitted):
    1. If isSubmitted is true, return "Disabled".
    2. If isValid is true, return "Enabled".
    3. Otherwise, return "Pending Validation".


`Example:`

```javascript

function buttonState(isValid, isSubmitted) {
    //Your code here
}

// Test cases
console.log(buttonState(false, true));    // Output: "Disabled"
console.log(buttonState(true, false));    // Output: "Enabled"
console.log(buttonState(false, false));   // Output: "Pending Validation"
console.log(buttonState(true, true));     // Output: "Disabled"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function buttonState(isValid, isSubmitted) {
    // Check if the form is submitted
    return isSubmitted 
        ? "Disabled" 
        : isValid 
            ? "Enabled" 
            : "Pending Validation";
}

// Test cases
console.log(buttonState(false, true));    // Output: "Disabled"
console.log(buttonState(true, false));    // Output: "Enabled"
console.log(buttonState(false, false));   // Output: "Pending Validation"
console.log(buttonState(true, true));     // Output: "Disabled"

  
```

**Explanation:**



- The function first checks if isSubmitted is true. If true, it returns "Disabled".
- If isSubmitted is false, it checks if isValid is true. If true, it returns "Enabled".
- If neither condition is met, it returns "Pending Validation".
  
</details>
 
---- 
` Question 5: Display Product Availability`

 Write a function productStatus that takes stock and isDiscontinued. Return:
     1. "Discontinued" if isDiscontinued is true.
     2. "Out of Stock" if stock is 0.
     3. "In Stock" if stock is greater than 0.


`Example:`

```javascript

function productStatus(stock, isDiscontinued) {
    //Your code here
}

// Test cases
console.log(productStatus(5, false));   // Output: "In Stock"
console.log(productStatus(0, false));   // Output: "Out of Stock"
console.log(productStatus(3, true));    // Output: "Discontinued"
console.log(productStatus(0, true));    // Output: "Discontinued"
console.log(productStatus(10, false));  // Output: "In Stock"


  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function productStatus(stock, isDiscontinued) {
    // Check if the product is discontinued
    return isDiscontinued 
        ? "Discontinued" 
        : stock === 0 
            ? "Out of Stock" 
            : "In Stock";
}

// Test cases
console.log(productStatus(5, false));   // Output: "In Stock"
console.log(productStatus(0, false));   // Output: "Out of Stock"
console.log(productStatus(3, true));    // Output: "Discontinued"
console.log(productStatus(0, true));    // Output: "Discontinued"
console.log(productStatus(10, false));  // Output: "In Stock"

  
```

**Explanation:**



- The function first checks if isDiscontinued is true. If true, it returns "Discontinued".
- If isDiscontinued is false, it checks if stock is 0. If true, it returns "Out of Stock".
- If neither condition is met, it returns "In Stock".

  
</details>
 
---- 
` Question 6: Dynamic Navigation Based on Role`

 Write a function getNavLink that checks a user’s role (role) and returns the appropriate navigation link:
  1. If role is "admin", return "/admin/dashboard".
  2. If role is "user", return "/user/home".
  3. For all others, return "/guest".



`Example:`

```javascript

function getNavLink(role) {
    //Your code here
}

// Test cases
console.log(getNavLink("admin")); // Output: "/admin/dashboard"
console.log(getNavLink("user"));  // Output: "/user/home"
console.log(getNavLink("guest")); // Output: "/guest"
console.log(getNavLink("manager")); // Output: "/guest"
console.log(getNavLink(""));      // Output: "/guest"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getNavLink(role) {
    // Check the role and return the appropriate navigation link
    return role === "admin" 
        ? "/admin/dashboard" 
        : role === "user" 
            ? "/user/home" 
            : "/guest";
}

// Test cases
console.log(getNavLink("admin")); // Output: "/admin/dashboard"
console.log(getNavLink("user"));  // Output: "/user/home"
console.log(getNavLink("guest")); // Output: "/guest"
console.log(getNavLink("manager")); // Output: "/guest"
console.log(getNavLink(""));      // Output: "/guest"


  
```

**Explanation:**



- The function checks the role value:
  - If the role is "admin", it returns the navigation link /admin/dashboard.
  - If the role is "user", it returns the navigation link /user/home.
  - If the role is anything else (including empty or unknown roles), it returns the default navigation link /guest.

  
</details>
 
---- 
` Question 7: Session Timeout Warning`

 Write a function sessionWarning that checks time left for a session (timeLeft):
  1. If timeLeft <= 0, return "Session Expired".
  2. If timeLeft <= 5, return "Warning: Session about to expire".
  3. Otherwise, return "Session Active".


`Example:`

```javascript

function sessionWarning(timeLeft) {
   //Your code
}

// Test cases
console.log(sessionWarning(0));   // Output: "Session Expired"
console.log(sessionWarning(3));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(5));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(10));  // Output: "Session Active"
console.log(sessionWarning(-1));  // Output: "Session Expired"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function sessionWarning(timeLeft) {
    // Check conditions to determine session status
    return timeLeft <= 0 
        ? "Session Expired" 
        : timeLeft <= 5 
            ? "Warning: Session about to expire" 
            : "Session Active";
}

// Test cases
console.log(sessionWarning(0));   // Output: "Session Expired"
console.log(sessionWarning(3));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(5));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(10));  // Output: "Session Active"
console.log(sessionWarning(-1));  // Output: "Session Expired"

  
```

**Explanation:**



- The function checks the timeLeft value:
  - If timeLeft is less than or equal to 0, it returns "Session Expired".
  - If timeLeft is less than or equal to 5, it returns "Warning: Session about to expire".
  - If timeLeft is greater than 5, it returns "Session Active".

  
</details>
 
---- 
` Question 8: Display File Upload Status`

 Write a function fileUploadStatus that checks upload progress (progress):
   1. If progress === 100, return "Upload Complete".
   2. If progress > 0, return "Uploading...".
   3. If progress === 0, return "Not Started".



`Example:`

```javascript

function fileUploadStatus(progress) {
    //Your code
}

// Test cases
console.log(fileUploadStatus(100)); // Output: "Upload Complete"
console.log(fileUploadStatus(50));  // Output: "Uploading..."
console.log(fileUploadStatus(0));   // Output: "Not Started"
console.log(fileUploadStatus(75));  // Output: "Uploading..."
console.log(fileUploadStatus(10));  // Output: "Uploading..."

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function fileUploadStatus(progress) {
    // Check conditions to determine the upload status
    return progress === 100 
        ? "Upload Complete" 
        : progress > 0 
            ? "Uploading..." 
            : "Not Started";
}

// Test cases
console.log(fileUploadStatus(100)); // Output: "Upload Complete"
console.log(fileUploadStatus(50));  // Output: "Uploading..."
console.log(fileUploadStatus(0));   // Output: "Not Started"
console.log(fileUploadStatus(75));  // Output: "Uploading..."
console.log(fileUploadStatus(10));  // Output: "Uploading..."

  
```

**Explanation:**



- The function checks the progress value:
  - If progress is exactly 100, it returns "Upload Complete".
  - If progress is greater than 0 but less than 100, it returns "Uploading...".
  - If progress is 0, it returns "Not Started".

  
</details>
 
---- 
` Question 9: Determine Shipping Cost`

 Write a function shippingCost that calculates the shipping fee:
   1. If cartTotal >= 500, return "Free Shipping".
   2. If distance <= 10, return 50.
   3. Otherwise, return 100.



`Example:`

```javascript

function shippingCost(cartTotal, distance) {
   //Your code here
}

// Test cases
console.log(shippingCost(600, 5));   // Output: "Free Shipping"
console.log(shippingCost(300, 8));   // Output: 50
console.log(shippingCost(300, 15));  // Output: 100
console.log(shippingCost(500, 20));  // Output: "Free Shipping"

  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function shippingCost(cartTotal, distance) {
    // Check conditions to determine shipping cost
    return cartTotal >= 500 
        ? "Free Shipping" 
        : distance <= 10 
            ? 50 
            : 100;
}

// Test cases
console.log(shippingCost(600, 5));   // Output: "Free Shipping"
console.log(shippingCost(300, 8));   // Output: 50
console.log(shippingCost(300, 15));  // Output: 100
console.log(shippingCost(500, 20));  // Output: "Free Shipping"

  
```

**Explanation:**



- The function checks the conditions:
  - If cartTotal is greater than or equal to 500, it returns "Free Shipping".
  - If cartTotal is less than 500, it checks if distance is less than or equal to 10:
    - If distance is 10 or less, it returns 50.
    - If distance is more than 10, it returns 100.

  
</details>
 
---- 
` Question 10: Password Strength Checker`

 Write a function passwordStrength that checks the strength of a password :
   1. If length >= 12, return "Strong".
   2. If length >= 8, return "Moderate".
   3 .Otherwise, return "Weak".



`Example:`

```javascript

function passwordStrength(password) {    // Check the length of the password and return the strength
    //Your code here
}
// Test cases
console.log(passwordStrength("myp@ssword123")); // Output: "Strong"
console.log(passwordStrength("myp@ss1"));       // Output: "Weak"
console.log(passwordStrength("myp@ssword"));    // Output: "Moderate"


  
```

`Topics Covered:`
Ternary Operator
 
**Hints:**
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function passwordStrength(password) {    // Check the length of the password and return the strength
    return password.length >= 12 
        ? "Strong" 
        : password.length >= 8 
            ? "Moderate" 
            : "Weak";
}
// Test cases
console.log(passwordStrength("myp@ssword123")); // Output: "Strong"
console.log(passwordStrength("myp@ss1"));       // Output: "Weak"
console.log(passwordStrength("myp@ssword"));    // Output: "Moderate"

  
```

**Explanation:**



The function checks the length of the password:
- If the length is 12 or more characters, it returns "Strong".
- If the length is between 8 and 11 characters, it returns "Moderate".
- If the length is less than 8 characters, it returns "Weak".

  
</details>
 
---- 
