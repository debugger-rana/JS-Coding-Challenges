# Arrow Functions
`Question 1. Sum of Two Numbers`

  Write a program using an arrow function to calculate the sum of two numbers.

`Example:`

```javascript

const add = (a, b) => {

  // Your code here

  };
console.log(add(5, 3)); // Output: 8

```

`Topics Covered:`
Arrow Function
 
**Hints:**
- [Arrow Function Syntax](https://www.programiz.com/javascript/arrow-function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
 
```

**Explanation:**


- const add = (a, b) => a + b;: This is an arrow function that adds the values of a and b together.
- console.log(add(5, 3));: This calls the add function with arguments 5 and 3, which returns 8, and console.log prints the result.
  
</details>
 
---- 
` Question 2. Find the Square of a Number`

  Write a program using an arrow function to calculate the square of a given number.

`Example:`

```javascript

const square = (a) => {

  // Your code here

  };
console.log(square(5)); // Output: 25

```

`Topics Covered:`
Arrow Function
 
**Hints:**
- [Arrow Function](https://www.programiz.com/javascript/arrow-function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const square = (a) => {
    a*a;
  };
console.log(square(5)); // Output: 25
 
```

**Explanation:**


- The original function lacks a return statement, so it doesn't return any value, resulting in undefined when called.
- Adding the return keyword ensures the function returns the result of a * a, so console.log(square(5)) outputs 25.
  
</details>
 
---- 
` Question 3. Check if a Number is Even`

  Write a program using an arrow function to check if a given number is even. Return true if even, otherwise false.

`Example:`

```javascript

const isEven = (n) =>{
  
    // Your Code here
  
  } 
console.log(isEven(7)); // Output: false

```

`Topics Covered:`
Arrow Function
 
**Hints:**
- [Arrow Function](https://www.programiz.com/javascript/arrow-function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const isEven = (n) => n % 2 === 0;
console.log(isEven(7)); // Output: false
 
```

**Explanation:**


- The isEven function takes a parameter n and checks if it is even by using the modulus operator (%).
- The expression n % 2 === 0 checks if the remainder when dividing n by 2 is 0, which means the number is even.
  
</details>
 
---- 
` Question 4. Filter Odd Numbers from an Array`

  Write a program using an arrow function to filter odd numbers from an array.

`Example:`

```javascript

const filterOdds = (arr) => {

  // Your Code here
  
}
console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

```

`Topics Covered:`
Arrow Function
 
**Hints:**
- [Arrow Function](https://www.programiz.com/javascript/arrow-function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const filterOdds = (arr) => arr.filter(num => num % 2 !== 0);
console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
 
```

**Explanation:**


- The filterOdds uses the filter() method to iterate over the array arr.
- For each number (num), it checks if num % 2 !== 0, which returns true for odd numbers.
  
</details>
 
---- 
` Question 5. Convert Celsius to Fahrenheit`

  Write a program using an arrow function to convert a given temperature in Celsius to Fahrenheit.

`Example:`

```javascript

const celsiusToFahrenheit = (celsius) => 
{

  // your code here

}
console.log(celsiusToFahrenheit(25)); // Output:

```

`Topics Covered:`
Arrow Function
 
**Hints:**
- [Arrow Function](https://www.programiz.com/javascript/arrow-function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit(25)); // Output: 77
 
```

**Explanation:**


- The (celsius * 9/5) + 32 converts the Celsius temperature (celsius) to Fahrenheit.
- (celsius * 9/5) + 32 converts the Celsius temperature (celsius) to Fahrenheit.
  
</details>
 
---- 
` Question 6. Enumerate a Map`

  Write a program using an arrow function to enumerate (loop through) a Map and print each key-value pair.

`Example:`

```javascript

const enumerateMap = (map) => {
  
  // Your Code here

};

const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
enumerateMap(myMap);




```

`Topics Covered:`
Arrow Function
 
**Hints:**
- [Arrow Function](https://www.programiz.com/javascript/arrow-function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const enumerateMap = (map) => {
  map.forEach((value, key) => console.log("Key: " + key + ", Value: " + value));
};

const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
enumerateMap(myMap);

 
```

**Explanation:**


- The arrow function enumerateMap takes a Map and uses the forEach() method to iterate through each key-value pair. It logs the key and value in each iteration.
- The Map is passed to the enumerateMap function.
  
</details>
 
---- 
