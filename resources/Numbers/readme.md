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


- Math.round(num) rounds the number to the nearest integer.
- If the decimal part is 0.5 or greater, it rounds up.
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


- Check the range of the number and format it based on its value.
- If the number is ≥ 1,000,000, convert it to millions, round to 1 decimal place, and append "M".
- ßIf the number is ≥ 1,000, convert it to thousands, round to 1 decimal place, and append "K".
- ßIf the number is < 1,000, return it as-is.
- ßConvert numbers not meeting the "K" or "M" conditions to a string using .toString().
- ßHandle edge cases for numbers less than 1,000 without adding "K" or "M".
- ßEnsure rounding provides clean and readable output like 1.5K instead of 1.500K.

  
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


- Check the range of the quantity and apply discount if applicable.
- If the quantity is greater than or equal to the discountThreshold, calculate the discounted price and multiply it by - the quantity to get the total cost.
- If the quantity is less than the discountThreshold, multiply the original price by the quantity without applying any discount.
- Handle calculations involving prices and quantities as numbers without explicit string conversion.
- Ensure no discount is applied if the quantity is less than or equal to the discountThreshold.
- Use the original price without changes if the discountRate is 0.
- Handle large numbers and high discount percentages accurately.
- Round results to ensure clean and readable output without unnecessary decimal places.

  
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

- Convert startTime and endTime from ISO 8601 strings to Date objects using JavaScript's Date constructor.
- Calculate the time difference in milliseconds by subtracting the start date from the end date.
- Convert the milliseconds difference to total seconds using Math.floor.
- Calculate hours by dividing total seconds by 3600 and rounding down using Math.floor.
- Calculate minutes by using the modulo operator (% 3600) to get remaining seconds after hours, then dividing by 60.
- Calculate seconds using modulo 60 to get the remaining seconds after minutes.
- Return an object with properties hours, minutes, and seconds.
- Handle edge cases like a start time after the end time (negative values) and identical start and end times (zero values).

  
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

- Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
- Scale the random number to the desired range by multiplying it by (max - min + 1).
- Use Math.floor() to round down the scaled number to the nearest whole number, ensuring an integer result.
- Add the min value to shift the random number into the correct range starting from the specified min.
- Use the formula: Random Number = Math.floor(Math.random() * (max - min + 1)) + min.
- If min equals max, the function always returns that number (e.g., generateRandomNumber(5, 5) returns 5).
- Handles both positive and negative ranges, allowing random numbers to be generated within negative ranges (e.g., -10 to -5).

  
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


- Use the toString() method of numbers in JavaScript to convert a number into a string representation in any base (2 to 36).
- For binary conversion, use a base of 2 with the syntax number.toString(2) to get the binary equivalent of the number.
- Pass the number as an argument to the convertToBinary function and apply toString(2) for conversion.
- Handle edge cases like 0, where the output will be "0".
- The function works for both small and large integers, returning their binary representations as strings.
  
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

- Accept units (number of electricity units consumed) and costPerUnit (cost of electricity per unit) as inputs.
- Multiply units by costPerUnit to calculate the total bill.
- Return the calculated total bill.

  
</details>
 
---- 
