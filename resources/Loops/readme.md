# Loops

###### ` Question 1. Calculate Total Cart Price`

  Write a program in javascript where  define a cartItem array which store the all item.Each item is represented as an object with properties like name, price, and quantity.Use a loop to go through each item in the cart and calculate its total price (item price multiplied by item quantity).After calculating the total price of all items, print or display the total to the user.

`Example:`

```javascript

// Define the cartItem array with each item represented as an object
const cartItems = [
  { name: "Laptop", price: 800, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 1 }
];

// Function to calculate total price of all items in the cart
function calculateTotalPrice(cartItems) {

  // Your code here

}

// Call the function and log the result
const total = calculateTotalPrice(cartItems);
console.log("Total Cart Price: $" + total);



```

`Topics Covered:`
Loop in JS
 
**Hints:**
- [Loop in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Define the cartItem array with each item represented as an object
const cartItems = [
  { name: "Laptop", price: 800, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 1 }
];

// Function to calculate total price of all items in the cart
function calculateTotalPrice(cartItems) {
  let totalPrice = 0;

  // Loop through each item in the cart and calculate its total price
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    totalPrice += item.price * item.quantity; // Add the total price of the current item
  }

  return totalPrice; // Return the total price
}

// Call the function and log the result
const total = calculateTotalPrice(cartItems);
console.log("Total Cart Price: $" + total);


 
```

**Explanation:**


- This function takes the cartItems array as input, calculates the total price by multiplying the price and quantity of each item, and returns the total price.
  
- The loop iterates over the cartItems array and calculates the price for each item, adding it to the total.
 
</details>
 
---- 
###### ` Question 2. Calculate Quiz Score Based on User's Answers`

  Write a program in javascript where create An array of objects questions, where each object contains a question (question text) and the points (point value for that question).Create a array userAnswers that stores the users answers.Each answer is either "correct" or "incorrect".create function calculateQuizScore function .Loops through all the questions and checks the users answer.If the answer is correct, it adds the respective points to the total score.It also calculates the percentage by dividing the total score by the maximum possible score and multiplying by 100.

`Example:`

```javascript

// Array representing items in the shopping cart
const cart = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Phone', price: 500, quantity: 1 },
  { name: 'Headphones', price: 100, quantity: 3 }
];

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {

    // Your code here

}

// Call the function to calculate the total price
calculateTotalPrice();



```

`Topics Covered:`
Loops in Javascript
 
**Hints:**
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Array representing items in the shopping cart
const cart = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Phone', price: 500, quantity: 1 },
  { name: 'Headphones', price: 100, quantity: 3 }
];

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;  // Initialize total price to 0

  // Loop through each item in the cart
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    
    // Calculate the price for the current item (price * quantity)
    const itemTotal = item.price * item.quantity;

    // Add the item's total price to the overall total price
    totalPrice += itemTotal;

    // Log item details and its total price to the console
    console.log(item.name + ": $" + item.price + " x " + item.quantity + " = $" + itemTotal);
  }

  // Log the final total price to the console
  console.log("Total Price: $" + totalPrice);
}

// Call the function to calculate the total price
calculateTotalPrice();


 
```

**Explanation:**


- Instead of using template literals, string concatenation with the + operator is used for combining the strings and variables. 
- The log now includes details for each item and the final total price.
  
</details>
 
---- 
###### ` Question 3. Filter Products Based on Availability and Price`

  Write a program in javascript where  You are given an array called products, which contains objects representing various products. Each product has properties such as id, name, price, and inStock. The goal is to filter the array to keep only those products where inStock is true and the price is less than $100. You need to use an array method, like filter, to achieve this and return a new array containing the products that meet these criteria.


`Example:`

```javascript

const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 499, inStock: false },
  { id: 3, name: "Headphones", price: 50, inStock: true },
  { id: 4, name: "Mouse", price: 20, inStock: true },
  { id: 5, name: "Keyboard", price: 120, inStock: true }
];

// Function to filter products based on inStock and price
function filterProducts(products) {

    // Your code here

}

// Call the function and display the filtered products
const filteredProducts = filterProducts(products);
console.log(filteredProducts);


```

`Topics Covered:`
Loops in Javascript
 
**Hints:**
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 499, inStock: false },
  { id: 3, name: "Headphones", price: 50, inStock: true },
  { id: 4, name: "Mouse", price: 20, inStock: true },
  { id: 5, name: "Keyboard", price: 120, inStock: true }
];

// Function to filter products based on inStock and price
function filterProducts(products) {
  return products.filter(function(product) {
    return product.inStock && product.price < 100;
  });
}

// Call the function and display the filtered products
const filteredProducts = filterProducts(products);
console.log(filteredProducts);

 
```

**Explanation:**


- The displayInfo function takes an object person and accesses name and age properties to log them.
- The + operator is used to concatenate the string and variables.
- Result: For the input { name: "Charlie", age: 35, city: "London" }, it logs "Name: Charlie, Age: 35".
  
</details>
 
---- 
###### ` Question 4. Generating a List of Random Numbers`

  Write a program in javascript where create function generateRandomNumbers(count, min, max): count: The number of random numbers you want to generate. , min: The minimum possible value for the random number. , max: The maximum possible value for the random number. , The for loop runs count times, which means it will generate that many random numbers.Once the loop is finished, the function returns the array of random numbers.

`Example:`

```javascript

// Function to generate random numbers
function generateRandomNumbers(count, min, max) {
    
  // Your code here

}

// Example usage: Generate 5 random numbers between 1 and 10
const randomList = generateRandomNumbers(5, 1, 10);
console.log(randomList);


```

`Topics Covered:`
Loops in Javascript
 
**Hints:**
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to generate random numbers
function generateRandomNumbers(count, min, max) {
  // Array to hold the random numbers
  const randomNumbers = [];
  
  // Loop to generate the required number of random numbers
  for (let i = 0; i < count; i++) {
    // Generate a random number within the range [min, max]
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Add the random number to the array
    randomNumbers.push(randomNumber);
  }
  
  // Return the array of random numbers
  return randomNumbers;
}

// Example usage: Generate 5 random numbers between 1 and 10
const randomList = generateRandomNumbers(5, 1, 10);
console.log(randomList);

 
```

**Explanation:**


- The generateRandomNumbers function generates a specified number of random integers within a given range by using a loop and Math.random().
- It returns an array of random numbers that meet the conditions of the specified range (min to max).
  
</details>
 
---- 
###### ` Question 5. Counting Down Timer (Countdown)`

  Write a program in javascript where  Start with a specific countdown time (in seconds).Create a loop that will run for the number of seconds in the countdown.Inside the loop, wait for 1 second (1000 milliseconds).Calculate and display the remaining time.Stop the loop when the time is zero and display "Time up!

`Example:`

```javascript

// Function to start the countdown
function countdown(seconds) {
  
  // Your code here 

}

// Start countdown from 10 seconds
countdown(10);



```

`Topics Covered:`
Loops in Javascript
 
**Hints:**
- [setInterval in Javascript](https://www.programiz.com/javascript/setInterval), - [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to start the countdown
function countdown(seconds) {
  let remainingTime = seconds;

  // Loop every second
  const timer = setInterval(function() {
    console.log(remainingTime);  // Display remaining time
    remainingTime--;  // Decrease time by 1

    // Stop when time is zero
    if (remainingTime < 0) {
      clearInterval(timer);  // Stop the countdown
      console.log("Time's up!");
    }
  }, 1000);  // Interval of 1 second
}

// Start countdown from 10 seconds
countdown(10);

 
```

**Explanation:**


- setInterval runs a function every second, displaying the remaining time and decreasing it.
- When the time reaches zero, the clearInterval stops the countdown, and "Time's up!" is displayed.
  
</details>
 
---- 
###### ` Question 6. Summing Numbers in an Array`

   Write a program in javascript where create array numbers where store the some numbers.Then the for loop iterates through each element in the numbers array. In each iteration, the current number (numbers[i]) is added to the sum variable.

`Example:`

```javascript

// Array of numbers to sum
const numbers = [5, 10, 15, 20, 25];

// Function to calculate the sum of the numbers
function calculateSum() {
    // Your code here
}

// Calling the function to calculate the sum
calculateSum();

```

`Topics Covered:`
Loops in Javascript
 
**Hints:**
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Array of numbers to sum
const numbers = [5, 10, 15, 20, 25];

// Function to calculate the sum of the numbers
function calculateSum() {
  let sum = 0;  // Initialize sum to 0

  // Using a for loop to iterate over each number in the array
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];  // Add the current number to the sum
  }

  // Display the total sum
  console.log('Total Sum:'+sum);
}

// Calling the function to calculate the sum
calculateSum();
 
```

**Explanation:**


- The numbers array holds the numbers you want to sum.
- The calculateSum function uses a for loop to iterate through each number in the array and adds it to the sum.
  
</details>
 
---- 
