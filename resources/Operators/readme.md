# Operators

###### ` Question 1: Calculate Total Price with Tax`

 Write a function calculateTotalPrice that takes the price of an item and the tax rate, and returns the total price after tax.

`Example:`

```javascript

function calculateTotalPrice(price, taxRate) {
  // Your code here
}

// Example usage:
console.log(calculateTotalPrice(100, 0.05)); // Output: 105
console.log(calculateTotalPrice(50, 0.1));   // Output: 55

```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateTotalPrice(price, taxRate) {
  const tax = price * taxRate;
  const totalPrice = price + tax;
  return totalPrice;
}

// Example usage:
console.log(calculateTotalPrice(100, 0.05)); // Output: 105
console.log(calculateTotalPrice(50, 0.1));   // Output: 55
  
```

**Explanation:**


- Multiplies price by taxRate to calculate the tax.
- Adds the tax to the price to get the totalPrice.
  
</details>
 
---- 
###### ` Question 2: Convert Fahrenheit to Celsius`

 Write a function convertToFahrenheit that takes a temperature in Celsius and converts it to Fahrenheit.

`Example:`

```javascript

function convertToFahrenheit(celsius) {
  
    // Your Code Here

}

// Example usage:
console.log(convertToFahrenheit(0));   // Output: 32
console.log(convertToFahrenheit(100)); // Output: 212


```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Example usage:
console.log(convertToFahrenheit(0));   // Output: 32
console.log(convertToFahrenheit(100)); // Output: 212
  
```

**Explanation:**


- The function convertToFahrenheit(celsius) converts a temperature from Celsius to Fahrenheit using the formula: Fahrenheit = (Celsius × 9/5) + 32.
- Multiplies the Celsius value by 9/5 and adds 32 to calculate Fahrenheit then returns the result.
  
</details>
 
---- 
###### ` Question 3: Calculate Tip`

 Write a function calculateTip that takes the total bill amount and the tip percentage, and returns the tip amount.

`Example:`

```javascript

function calculateTip(billAmount, tipPercentage) {

      // Your Code Here
}

// Example usage:
console.log(calculateTip(200, 15)); // Output: 30
console.log(calculateTip(50, 10));  // Output: 5



```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateTip(billAmount, tipPercentage) {
  const tip = billAmount * (tipPercentage / 100);
  return tip;
}

// Example usage:
console.log(calculateTip(200, 15)); // Output: 30
console.log(calculateTip(50, 10));  // Output: 5
  
```

**Explanation:**


- It multiplies the billAmount by tipPercentage/100 to calculate the tip.
- Returns the tip value for any given inputs. 

</details>
 
---- 
###### ` Question 4: Calculate Age`

 Write a function calculateAge that takes the birth year and the current year, and returns the age.

`Example:`

```javascript

calculateAge(birthYear, currentYear) {

  // Your Code Here

}

// Example usage:
console.log(calculateAge(1990, 2024)); // Output: 34
console.log(calculateAge(2000, 2024)); // Output: 24



```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

calculateAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

// Example usage:
console.log(calculateAge(1990, 2024)); // Output: 34
console.log(calculateAge(2000, 2024)); // Output: 24
  
```

**Explanation:**


- It calculates the currentYear (minus) birthYear.
- Returns the computed age.

</details>
 
---- 
###### ` Question 5: Calculate Simple Interest`

 Write a function calculateSimpleInterest that takes the principal amount, the annual interest rate, and the time in years, and returns the simple interest.

`Example:`

```javascript

function calculateSimpleInterest(principal, rate, time) {
 
  // Your code here

}

// Example usage:
console.log(calculateSimpleInterest(1000, 5, 2)); // Output: 100
console.log(calculateSimpleInterest(500, 3, 4));  // Output: 60

```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp), - [Simple Intrest](https://www.cuemath.com/commercial-math/simple-interest/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateSimpleInterest(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return interest;
}

// Example usage:
console.log(calculateSimpleInterest(1000, 5, 2)); // Output: 100
console.log(calculateSimpleInterest(500, 3, 4));  // Output: 60
  
```

**Explanation:**


- The calculateSimpleInterest function computes simple interest using the formula:
- Interest = (Principal×Rate×Time)/100
- It takes principal, rate, and time as inputs and returns the calculated interest.

</details>
 
---- 
###### ` Question 6: Calculate Annual Salary from Hourly Wage`

 Write a function calculateAnnualSalary that takes the hourly wage and the number of hours worked per week, and returns the annual salary, assuming 52 working weeks in a year.

`Example:`

```javascript

function calculateAnnualSalary(hourlyWage, hoursPerWeek) {
  
    // Your Code Here

}

// Example usage:
console.log(calculateAnnualSalary(20, 40)); // Output: 41600
console.log(calculateAnnualSalary(15, 35)); // Output: 27300


```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateAnnualSalary(hourlyWage, hoursPerWeek) {
  const weeksPerYear = 52;
  const annualSalary = hourlyWage * hoursPerWeek * weeksPerYear;
  return annualSalary;
}

// Example usage:
console.log(calculateAnnualSalary(20, 40)); // Output: 41600
console.log(calculateAnnualSalary(15, 35)); // Output: 27300
  
```

**Explanation:**


- It multiplies hourlyWage by hoursPerWeek and 52 weeks per year.
- Returns the calculated annual salary.

</details>
 
---- 
###### ` Question 7: Calculate Discounted Price`

 Write a function calculateDiscountedPrice that takes the original price and the discount percentage, and returns the price after the discount is applied.

`Example:`

```javascript

function calculateDiscountedPrice(originalPrice, discountPercentage) {

          //Your Code Here
}

// Example usage:
console.log(calculateDiscountedPrice(100, 20)); // Output: 80
console.log(calculateDiscountedPrice(250, 10)); // Output: 225


```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
}

// Example usage:
console.log(calculateDiscountedPrice(100, 20)); // Output: 80
console.log(calculateDiscountedPrice(250, 10)); // Output: 225
  
```

**Explanation:**


- It multiplies hourlyWage by hoursPerWeek and 52 weeks per year.
- Returns the calculated annual salary.

</details>
 
---- 
###### ` Question 8: Calculate Time Difference in Hours`

 Write a function calculateTimeDifference that takes two times (in 24-hour format) as strings and returns the difference in hours.

`Example:`

```javascript

function calculateTimeDifference(time1, time2) {

    //Your code here

}

// Example usage:
console.log(calculateTimeDifference("08:30", "17:45")); // Output: 9.25
console.log(calculateTimeDifference("09:00", "14:30")); // Output: 5.50

```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateTimeDifference(time1, time2) {
 const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;
  const differenceInMinutes = Math.abs(totalMinutes2 - totalMinutes1);
  return (differenceInMinutes / 60).toFixed(2);

}

// Example usage:
console.log(calculateTimeDifference("08:30", "17:45")); // Output: 9.25
console.log(calculateTimeDifference("09:00", "14:30")); // Output: 5.50
  
```

**Explanation:**


- It converts both times (time1 and time2) into total minutes.
- Finds the absolute difference in minutes, divides by 60, and rounds to two decimal places.

</details>
 
---- 
###### ` Question 9: Calculate Distance Between Two Points`

 Write a function calculateDistance that takes the coordinates of two points in a 2D plane and returns the distance between them.

`Example:`

```javascript

function calculateDistance(x1, y1, x2, y2) {
  
    // Your Code here

}

// Example usage:
console.log(calculateDistance(3, 4, 7, 1)); // Output: 5.00
console.log(calculateDistance(0, 0, 5, 12)); // Output: 13.00

```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance.toFixed(2);
}

// Example usage:
console.log(calculateDistance(3, 4, 7, 1)); // Output: 5.00
console.log(calculateDistance(0, 0, 5, 12)); // Output: 13.00
  
```

**Explanation:**


- This function calculates the distance between two points using the distance formula (x2−x1)2+(y2−y1)2sqrt{(x2 - x1)^2 + (y2 - y1)^2}.

</details>
 
---- 
###### ` Question 10: Calculate Average Speed`

 Write a function calculateAverageSpeed that takes the total distance traveled and the total time taken, and returns the average speed.

`Example:`

```javascript

function calculateAverageSpeed(totalDistance, totalTime) {
  
    // Your code here

}

// Example usage:
console.log(calculateAverageSpeed(150, 3)); // Output: 50.00
console.log(calculateAverageSpeed(100, 2)); // Output: 50.00

```

`Topics Covered:`
Operators in JS
 
**Hints:**
- [Operators in JS](https://www.w3schools.com/js/js_operators.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateAverageSpeed(totalDistance, totalTime) {
  const averageSpeed = totalDistance / totalTime;
  return averageSpeed.toFixed(2);
}

// Example usage:
console.log(calculateAverageSpeed(150, 3)); // Output: 50.00
console.log(calculateAverageSpeed(100, 2)); // Output: 50.00
  
```

**Explanation:**


- This function divides the total distance by the total time to calculate the average speed.

</details>
 
---- 
