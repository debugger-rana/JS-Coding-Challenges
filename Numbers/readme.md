# Numbers


` Question 1: Convert a string to a valid number`

 Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.

`Example:`

```javascript

function convertToNumber(str) {
   // Your code here
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // NaN
  
```

`Topics Covered:`
Number methods i.e. Number(), isNaN()
 
**Hints:**
- [isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp), - [JS Numbers](https://www.w3schools.com/jsref/jsref_number.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function convertToNumber(str) {
    const number = Number(str); // Try to convert the string to a number
    return isNaN(number) ? NaN : number; // If conversion fails, return NaN
}

console.log(convertToNumber("123"));  // 123
console.log(convertToNumber("abc"));  // NaN
console.log(convertToNumber("12.34")); // 12.34
  
```

**Explanation:**


- Number(str): tries to convert the string to a number.
- isNaN(number): checks if the result is not a valid number and returns NaN if it's invalid.
  
</details>
 
---- 
` Question 2: Round a number to the nearest integer`

 Write a function that rounds a number to the nearest whole number.

`Example:`

```javascript

function roundNumber(num) {
   // Your code here
}
console.log(roundNumber(4.3)); // 4
console.log(roundNumber(4.7)); // 5

  
```

`Topics Covered:`
math.round()
 
**Hints:**
- [math.round()](https://www.w3schools.com/jsref/jsref_round.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function roundToNearestInteger(num) {
  return Math.round(num); // Rounds the number to the nearest integer
}

console.log(roundToNearestInteger(4.5));  // 5
console.log(roundToNearestInteger(4.4));  // 4
console.log(roundToNearestInteger(-1.5)); // -1
  
```

**Explanation:**


- -Math.round(num) rounds the number to the nearest integer.
-If the decimal part is 0.5 or greater, it rounds up.
Otherwise, it rounds down.
  
</details>
 
---- 
` Question 3: Working with Large Numbers: Formatting and Display`

 Write a function formatLargeNumber that converts a large number into a user-friendly format (e.g., 1.5K, 3.5M).

`Example:`

```javascript

function formatLargeNumber(number) {
    
}

// Example usage
console.log(formatLargeNumber(1500));  // Output: "1.5K"
console.log(formatLargeNumber(3500000)); // Output: "3.5M"
console.log(formatLargeNumber(950)); // Output: "950"


  
```

`Topics Covered:`
Number methods i.e. toFixed()
 
**Hints:**
- [Number methods i.e. toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function formatLargeNumber(number) {
    if (number >= 1_000_000) {
        // Convert to millions (M) and format to one decimal place
        return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000) {
        // Convert to thousands (K) and format to one decimal place
        return (number / 1_000).toFixed(1) + "K";
    } else {
        // If the number is less than 1000, just return it as a string
        return number.toString();
    }
}

// Example usage
console.log(formatLargeNumber(1500));  // Output: "1.5K"
console.log(formatLargeNumber(3500000)); // Output: "3.5M"
console.log(formatLargeNumber(950)); // Output: "950"

  
```

**Explanation:**


- 1. *Check the Range of the Number:*  
   - If the number is *≥ 1,000,000*:  
     - Divide the number by 1,000,000 to convert it into millions.  
     - Use .toFixed(1) to round it to *1 decimal place*.  
     - Append "M" to indicate millions.  
   - If the number is *≥ 1,000*:  
     - Divide the number by 1,000 to convert it into thousands.  
     - Use .toFixed(1) to round it to *1 decimal place*.  
     - Append "K" to indicate thousands.  
   - If the number is *< 1,000*, just return it as-is.  

2. *String Conversion:*  
   - Any number that doesn't meet the "K" or "M" conditions is converted directly to a string using .toString().  

3. *Edge Cases:*  
   - The function handles numbers less than 1,000 without adding "K" or "M".  
   - The rounding ensures clean and readable output like 1.5K instead of 1.500K.  

  
</details>
 
---- 
` Question 4: Optimizing Price Calculation with Bulk Discount`

 Write a function calculateBulkDiscount that calculates the total cost for bulk orders, applying a discount when the quantity exceeds a threshold.

`Example:`

```javascript

function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600


  
```

`Topics Covered:`
Operators i.e arithmetic operators
 
**Hints:**
- [Operators i.e arithmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    // Check if the quantity exceeds the discount threshold
    if (quantity > discountThreshold) {
        // Apply the discount rate to the price
        const discountedPrice = price * (1 - discountRate / 100);
        // Calculate the total cost with the discounted price
        return discountedPrice * quantity;
    } else {
        // No discount applied; calculate the total cost with the original price
        return price * quantity;
    }
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600


  
```

**Explanation:**


- 1. *Check the Range of the Quantity:*  
   - If the quantity is greater than or equal to the discountThreshold:  
     - Calculate the discounted price using the formula:  
       Discounted Price = price × (1 − discountRate / 100)  
     - Multiply the discounted price by the quantity to get the total cost.  
   - If the quantity is less than the discountThreshold:  
     - No discount is applied.  
     - Multiply the original price by the quantity to calculate the total cost.  

2. *String Conversion:*  
   - Any calculation involving prices and quantities is automatically handled as numbers, so no explicit string conversion is required here.  

3. *Edge Cases:*  
   - If the quantity is less than or equal to the discountThreshold, the function ensures no discount is applied.  
   - If the discountRate is 0, the original price is used without any changes.  
   - The function handles both large numbers and high discount percentages gracefully, ensuring accuracy.  

4. *Rounding and Readability:*  
   - Rounding ensures that the calculated discount and total cost are clean and readable, avoiding unnecessary decimal places.

  
</details>
 
---- 
` Question 5: Calculating the Time Remaining for a Sale`

 Write a function calculateTimeRemaining that calculates the remaining time between two timestamps in hours, minutes, and seconds.

`Example:`

```javascript

function calculateTimeRemaining(startTime, endTime) {
  //your code here
}

// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }



  
```

`Topics Covered:`
Date and Time, math.floor()
 
**Hints:**
- [math.floor()](https://www.w3schools.com/jsref/jsref_floor.asp), - [Date and Time](https://www.w3schools.com/js/js_dates.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateTimeRemaining(startTime, endTime) {
    // Convert the input timestamps to Date objects
    const start = new Date(startTime);
    const end = new Date(endTime);

    // Calculate the difference in milliseconds
    const difference = end - start;

    // Convert the difference into hours, minutes, and seconds
    const totalSeconds = Math.floor(difference / 1000); // Total seconds
    const hours = Math.floor(totalSeconds / 3600); // Total hours
    const minutes = Math.floor((totalSeconds % 3600) / 60); // Remaining minutes
    const seconds = totalSeconds % 60; // Remaining seconds

    return { hours, minutes, seconds };
}

// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }



  
```

**Explanation:**


- ### Input Conversion
- startTime and endTime are strings in ISO 8601 format (e.g., "2024-12-18T00:00:00Z").
- These strings are converted to Date objects using JavaScript's Date constructor.

### Difference Calculation
- Subtract the start date from the end date to get the time difference in milliseconds.

### Convert Milliseconds to Hours, Minutes, and Seconds

1. *Total seconds*:
   - Divide the difference by 1000 to convert milliseconds to seconds using Math.floor to remove decimals.

2. *Hours*:
   - Divide the total seconds by 3600 (number of seconds in an hour) and round down using Math.floor.

3. *Minutes*:
   - Use the modulo operator (% 3600) to get the remaining seconds after calculating hours, then divide by 60.

4. *Seconds*:
   - Use modulo 60 to get the remaining seconds after calculating minutes.

### Return Format
- Return an object with the properties hours, minutes, and seconds.

### Edge Cases
- *Start time is after end time*: The function will return negative values.
- *Same start and end time*: The function will return { hours: 0, minutes: 0, seconds: 0 }.

  
</details>
 
---- 
` Question 6: Generating a Random Number in a Range`

 Write a function generateRandomNumber that generates a random number between a given minimum and maximum value (inclusive).

`Example:`

```javascript

function generateRandomNumber(min, max) {
   //Your code here
}

// Example usage
console.log(generateRandomNumber(1, 10)); // Output: A random number between 1 and 10 (e.g., 7)
console.log(generateRandomNumber(5, 15)); // Output: A random number between 5 and 15 (e.g., 12)




  
```

`Topics Covered:`
Math methods i.e. math.floor()
 
**Hints:**
- [math.floor()](https://www.w3schools.com/jsref/jsref_floor.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function generateRandomNumber(min, max) {
    // Generate a random number between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
console.log(generateRandomNumber(1, 10)); // Output: A random number between 1 and 10 (e.g., 7)
console.log(generateRandomNumber(5, 15)); // Output: A random number between 5 and 15 (e.g., 12)



  
```

**Explanation:**


- ### Using Math.random()
- Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the value will always be between 0 and 1, but never exactly 1.

### Scaling to the Range
- To scale the random number to the desired range, we multiply the result of Math.random() by the size of the range (max - min + 1). This ensures that the number generated covers the entire range from min to max, inclusive.

### Flooring the Value
- After scaling, we use Math.floor() to round down the floating-point number to the nearest whole number. This step ensures that we get an integer result.

### Shifting the Range
- Finally, we add the min value to the result. This shifts the random number into the correct range, starting from the specified min.

### Formula
- The formula for generating the random number is:
Random Number = Math.floor(Math.random() * (max - min + 1)) + min

## Edge Cases:
- *If min equals max*: The function will always return that number. For example, generateRandomNumber(5, 5) will always return 5.
- *Handles both positive and negative ranges*: The function works for both positive and negative numbers. For example, generateRandomNumber(-10, -5) will generate a random number between -10 and -5.

  
</details>
 
---- 
` Question 7: Converting a Number to Binary`

 Write a function convertToBinary that converts a given number into its binary representation as a string.

`Example:`

```javascript

function convertToBinary(number) {
    //Your code here
}

// Example usage
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"





  
```

`Topics Covered:`
Numbers, String methods i.e. toString()
 
**Hints:**
- [Numbers](https://www.w3schools.com/jsref/jsref_floor.asp), - [String methods i.e. toString()](https://www.w3schools.com/js/js_string_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function convertToBinary(number) {
    // Use the built-in toString() method with a base of 2
    return number.toString(2);
}

// Example usage
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"




  
```

**Explanation:**


### Using toString(base)
- The toString() method of numbers in JavaScript can convert a number into a string representation in any base (from 2 to 36).
- For binary conversion, we use a base of 2. This will return the binary equivalent of the number.

### Steps:
1. Pass the number as the argument to the convertToBinary function.
2. Use number.toString(2) to convert the number to its binary representation. The 2 as the argument specifies that the base is binary.

### Edge Cases:
- If the number is 0, the output will be "0".
- The function handles both small and large integers, returning their binary representations as strings.

  
</details>
 
---- 
` Question 8: Calculate Electricity Bill`

 Write a function calculateElectricityBill that calculates the total electricity bill based on units consumed and the cost per unit.

`Example:`

```javascript

function calculateElectricityBill(units, costPerUnit) {
    //Your code here
}

// Example usage
console.log(calculateElectricityBill(250, 5)); // Output: 1250
console.log(calculateElectricityBill(100, 10)); // Output: 1000
console.log(calculateElectricityBill(0, 5)); // Output: 0






  
```

`Topics Covered:`
Arithmetics operator
 
**Hints:**
- [Arithmetics operator](https://www.w3schools.com/js/js_arithmetic.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateElectricityBill(units, costPerUnit) {
    // Multiply the units consumed by the cost per unit to calculate the total bill
    return units * costPerUnit;
}

// Example usage
console.log(calculateElectricityBill(250, 5)); // Output: 1250
console.log(calculateElectricityBill(100, 10)); // Output: 1000
console.log(calculateElectricityBill(0, 5)); // Output: 0





  
```

**Explanation:**


### Input:
- units: The number of electricity units consumed.
- costPerUnit: The cost of electricity per unit consumed.

### Calculation:
- Multiply the units by the costPerUnit to get the total bill.

### Return:
- The function returns the calculated total bill.

  
</details>
 
---- 
