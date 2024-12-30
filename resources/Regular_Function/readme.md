# Regular Function

###### ` Question 1: API Rate Limiting`

 Create a function limitApiRequests that limits how many API requests a user can make in a given timeframe (e.g., 100 requests per hour).

`Example:`

```javascript

function limitApiRequests(userId, timestamp) {
  //Your code here
}

// Function call example
const result = limitApiRequests("user123", Date.now());
console.log(result); // true or false

  
```

`Topics Covered:`
Array methods i.e filter(), Date & Time method, Function
 
**Hints:**
- [Date & Time method](https://www.w3schools.com/js/js_dates.asp), - [Array methods i.e filter()](https://www.w3schools.com/js/js_array_iteration.asp), - [Function](https://www.w3schools.com/js/js_functions.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function limitApiRequests(userId, timestamp) {
  const limit = 100; // Maximum requests allowed
  const timeframe = 3600 * 1000; // 1 hour in milliseconds

  if (!limitApiRequests.userLogs) {
    limitApiRequests.userLogs = {};
  }

  const userLogs = limitApiRequests.userLogs[userId] || [];
  const currentTime = timestamp;

  // Filter requests within the timeframe
  const recentRequests = userLogs.filter(
    (time) => currentTime - time <= timeframe
  );

  // Update the logs
  recentRequests.push(currentTime);
  limitApiRequests.userLogs[userId] = recentRequests;

  // Check if the number of requests exceeds the limit
  return recentRequests.length <= limit;
}

// Function call example
const result = limitApiRequests("user123", Date.now());
console.log(result); // true or false

  
```

**Explanation:**



The function limits API requests per user within a 1-hour timeframe:
- It initializes a userLogs object to track request timestamps for each user.
- Filters the user's previous requests to keep only those within the last hour.
- Adds the current timestamp to the filtered requests.
- Checks if the number of requests exceeds the maximum allowed limit (100).
- Returns true if requests are within the limit, otherwise false.

  
</details>
 
---- 
###### ` Question 2: Inventory Stock Checker`

 Write a function checkStock that checks if an item is in stock based on a product’s inventory object. If stock is low, return a warning message.

`Example:`

```javascript

function checkStock(inventory, item) {
  //Your code here
}

// Function call example
const inventory = { apples: 10, bananas: 0 };
console.log(checkStock(inventory, "apples")); // "In stock"
console.log(checkStock(inventory, "bananas")); // "Out of stock"

  
```

`Topics Covered:`
object, Function
 
**Hints:**
- [object](https://www.w3schools.com/js/js_objects.asp), - [Function](https://www.w3schools.com/js/js_functions.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function checkStock(inventory, item) {
  if (inventory[item] > 0) {
    return "In stock";
  } else {
    return "Out of stock";
  }
}

// Function call example
const inventory = { apples: 10, bananas: 0 };
console.log(checkStock(inventory, "apples")); // "In stock"
console.log(checkStock(inventory, "bananas")); // "Out of stock"

  
```

**Explanation:**



The function checks the stock of a specific item in the inventory:
- It looks up the item's quantity in the inventory object.
- If the quantity is greater than 0, it returns "In stock".
- If the quantity is 0 or undefined, it returns "Out of stock".

  
</details>
 
---- 
###### ` Question 3: Secure Password Generator`

 Create a function generatePassword that generates a random, secure password with specified criteria (e.g., length, uppercase letters, numbers, special characters).

`Example:`

```javascript

function generatePassword(length, useSpecialChars) {
  //Your code here
}

// Function call example
console.log(generatePassword(10, true)); // Example: "A3$d@f7XbP"
console.log(generatePassword(8, false)); // Example: "AbC123XY"

  
```

`Topics Covered:`
String method i.e. length(), Math methods i.e. floor(),random(), Function, RegEx
 
**Hints:**
- [String methods](https://www.w3schools.com/js/js_string_methods.asp), - [Math methods i.e. floor(),random()](https://www.w3schools.com/js/js_math.asp), - [Function](https://www.w3schools.com/js/js_functions.asp), - [RegEx](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function generatePassword(length, useSpecialChars) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const specialChars = "!@#$%^&*";
  let pool = chars;

  if (useSpecialChars) {
    pool += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  return password;
}

// Function call example
console.log(generatePassword(10, true)); // Example: "A3$d@f7XbP"
console.log(generatePassword(8, false)); // Example: "AbC123XY"

  
```

**Explanation:**



The function generates a random password based on the given parameters:
1. **Character Pool:**
   - Includes letters, numbers, and optionally special characters (!@#$%^&*) if useSpecialChars is true.
2. **Password Generation:**
   - Iterates for the specified length, selecting random characters from the pool using a random index.
3. **Return:**
   - The generated password is returned as a string.

  
</details>
 
---- 
###### ` Question 4: Email Obfuscator`

 Write a function obfuscateEmail that obfuscates an email address for privacy by replacing parts of it with *.

`Example:`

```javascript

function obfuscateEmail(email) {
 //Your code here
}

// Function call example
console.log(obfuscateEmail("Prabir@gmail.com")); 

  
```

`Topics Covered:`
String method i.e. split()
 
**Hints:**
- [String methods](https://www.w3schools.com/js/js_string_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function obfuscateEmail(email) {
  const [local, domain] = email.split("@");
  const obfuscatedLocal = local[0] + "****" + local[local.length - 1];
  return `${obfuscatedLocal}@${domain}`;
}

// Function call example
console.log(obfuscateEmail("Prabir@gmail.com")); 

  
```

**Explanation:**



The function obfuscates an email address by:
1. **Splitting the Email:** 
  - Divides the email into local (before @) and domain (after @).
2. **Obfuscating the Local Part:**
  - Keeps the first and last characters of the local part and replaces the middle characters with ****.
3. **Reconstructing the Email:**
  - Combines the obfuscated local part with the domain and returns the result.

For example:
- Input: "Prabir@gmail.com"
- Output: "P****r@gmail.com"

  
</details>
 
---- 
###### ` Question 5: Fraud Detection`

 Build a function detectFraud that detects suspicious transactions by identifying if a user has made multiple transactions above a certain amount within a short timeframe.

`Example:`

```javascript

function detectFraud(transactions, thresholdAmount) {
 //Your code here
}

// Function call example
const transactions = [
  { amount: 500, timestamp: Date.now() - 1000 },
  { amount: 600, timestamp: Date.now() - 2000 },
];
console.log(detectFraud(transactions, 400)); // true
 
  
```

`Topics Covered:`
Date & Time, Array methods i.e. filter()
 
**Hints:**
- [Date object](https://www.w3schools.com/jsref/jsref_obj_date.asp), - [Array methods i.e. filter()](https://www.w3schools.com/jsref/jsref_filter.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function detectFraud(transactions, thresholdAmount) {
  const timeframe = 3600 * 1000; // 1 hour in milliseconds
  const currentTime = Date.now();

  const suspiciousTransactions = transactions.filter(
    (txn) => txn.amount > thresholdAmount && currentTime - txn.timestamp <= timeframe
  );

  return suspiciousTransactions.length > 1;
}

// Function call example
const transactions = [
  { amount: 500, timestamp: Date.now() - 1000 },
  { amount: 600, timestamp: Date.now() - 2000 },
];
console.log(detectFraud(transactions, 400)); // true 

  
```

**Explanation:**



The function detects potential fraudulent transactions by:
1. **Defining a Timeframe:** 
   - Uses a 1-hour window (3600 milliseconds) for analysis.
2. **Filtering Suspicious Transactions:** 
   - Considers transactions where:
     - The amount exceeds the thresholdAmount.
     - The timestamp is within the last 1 hour.
3. **Checking for Fraud:** 
   - If more than one suspicious transaction is found, it returns true (fraud detected); otherwise, it returns false.

#### Example:
- Transactions:
  - { amount: 500, timestamp: 1 second ago }
  - { amount: 600, timestamp: 2 seconds ago }
- Threshold: 400
- Both transactions meet the conditions, so the function returns true.

  
</details>
 
---- 
###### ` Question 6: Product Recommendation Engine`

 Create a function recommendProducts that recommends products to a user based on their browsing history (an array of product categories they viewed).

`Example:`

```javascript

function recommendProducts(browsingHistory) {
 //Your code here
}

// Function call example
console.log(recommendProducts(["electronics", "home-appliances"])); 
// ["smartphone", "laptop", "microwave", "vacuum cleaner"]
 
  
```

`Topics Covered:`
Date & Time, Array methods i.e. filter()
 
**Hints:**
- [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), - [Array methods i.e. push()](https://www.w3schools.com/jsreF/jsref_push.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function recommendProducts(browsingHistory) {
  const recommendations = {
    electronics: ["smartphone", "laptop"],
    "home-appliances": ["microwave", "vacuum cleaner"],
  };

  const products = [];
  for (const category of browsingHistory) {
    if (recommendations[category]) {
      products.push(...recommendations[category]);
    }
  }

  return products;
}

// Function call example
console.log(recommendProducts(["electronics", "home-appliances"])); 
// ["smartphone", "laptop", "microwave", "vacuum cleaner"]

  
```

**Explanation:**



The function recommends products based on a user's browsing history:
1. **Recommendations Data:** 
  - Predefined categories map to product lists (e.g., electronics maps to ["smartphone", "laptop"]).
2. **Iterate Browsing History:** 
  - Loops through the user's browsing history.
  - If a category exists in recommendations, its associated products are added to the products array.
3. **Return Results:** 
  - The final products array contains all recommended products for the given categories.

  
</details>
 
---- 
###### ` Question 7: Data Sanitizer`

 Write a function sanitizeInput that sanitizes user inputs by removing dangerous characters like <, >, and script tags to prevent XSS attacks.

`Example:`

```javascript

function sanitizeInput(input) {
 
}

// Function call example
console.log(sanitizeInput("<script>alert('XSS')</script>")); 
// "scriptalert('XSS')/script"
 
  
```

`Topics Covered:`
String methods i.e.replace()
 
**Hints:**
- [String methods i.e.replace()](https://www.w3schools.com/jsref/jsref_replace.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function sanitizeInput(input) {
  return input.replace(/[<>]/g, "");
}

// Function call example
console.log(sanitizeInput("<script>alert('XSS')</script>")); 
// "scriptalert('XSS')/script"

  
```

**Explanation:**

false
</details>
 
---- 
###### ` Question 8: Coupon Expiry Checker`

 Write a function isCouponValid that checks if a coupon code is valid or expired based on its expiration date.

`Example:`

```javascript

function isCouponValid(coupon) {
 //Your code here
}

// Function call example
const coupon = { code: "SAVE50", expiryDate: "2024-12-31" };
console.log(isCouponValid(coupon)); // true or false
  
```

`Topics Covered:`
Date()
 
**Hints:**
- [Date()](https://www.w3schools.com/js/js_dates.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function isCouponValid(coupon) {
  const currentDate = new Date();
  const expiryDate = new Date(coupon.expiryDate);

  return currentDate <= expiryDate;
}

// Function call example
const coupon = { code: "SAVE50", expiryDate: "2024-12-31" };
console.log(isCouponValid(coupon)); // true or false

  
```

**Explanation:**


- The function checks if the current date is before or equal to the coupon's expiry date. If it is, the coupon is valid (true), otherwise invalid (false).
  
</details>
 
---- 
###### ` Question 9: Booking Slot Validator`

 Write a function isSlotAvailable that checks if a selected booking slot is available, given an array of already booked slots.

`Example:`

```javascript

function isSlotAvailable(bookedSlots, requestedSlot) {
 //Your code here
}

// Function call example
const bookedSlots = ["10:00 AM", "11:00 AM"];
console.log(isSlotAvailable(bookedSlots, "12:00 PM")); // true
console.log(isSlotAvailable(bookedSlots, "11:00 AM")); // false

  
```

`Topics Covered:`
Array methods i.e. includes(), function
 
**Hints:**
- [Array methods i.e. includes()](https://www.w3schools.com/js/js_array_methods.asp), - [Function](https://www.w3schools.com/js/js_functions.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function isSlotAvailable(bookedSlots, requestedSlot) {
  return !bookedSlots.includes(requestedSlot);
}

// Function call example
const bookedSlots = ["10:00 AM", "11:00 AM"];
console.log(isSlotAvailable(bookedSlots, "12:00 PM")); // true
console.log(isSlotAvailable(bookedSlots, "11:00 AM")); // false


  
```

**Explanation:**


- The function checks if the requested slot is not included in the list of booked slots. If it's not booked, it returns true, meaning the slot is available. If the slot is already booked, it returns false.
  
</details>
 
---- 
###### ` Question 10: Download Speed Calculator`

 Write a function calculateDownloadSpeed that calculates the download speed in Mbps based on the file size and download time.

`Example:`

```javascript

function calculateDownloadSpeed(fileSize, time) {
  //Your code here
}

// Function call example
console.log(calculateDownloadSpeed(50, 10)); // 40 Mbps


  
```

`Topics Covered:`
function
 
**Hints:**
- [Function](https://www.w3schools.com/js/js_functions.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateDownloadSpeed(fileSize, time) {
  return (fileSize / time) * 8; // Convert MBps to Mbps
}

// Function call example
console.log(calculateDownloadSpeed(50, 10)); // 40 Mbps

  
```

**Explanation:**


The function calculates the download speed using the formula:

1. First, it divides the file size by the time to get the download rate in MB per second.
2. Then, it multiplies the result by 8 to convert from megabytes per second (MBps) to megabits per second (Mbps), as there are 8 bits in a byte.
  
</details>
 
---- 
