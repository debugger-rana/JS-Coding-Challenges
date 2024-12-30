# Destructuring
` Question 1. Extract Values from an Array`

  Write a program to extract specific values from an array using destructuring. For a given array, extract the first and third elements into separate variables.

`Example:`

```javascript

function getElements(arr) {
  
  // YOur code here

}

const arr = [10, 20, 30, 40, 50];
const { first, third } = getElements(arr);

console.log(first); // Output: 10
console.log(third); // Output: 30


```

`Topics Covered:`
Destructuring in JS
 
**Hints:**
- [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/)
- [Array and Object destructuring](https://www.honeybadger.io/blog/javascript-destructuring/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getElements(arr) {
  const [first, , third] = arr;
  return { first, third };
}

const arr = [10, 20, 30, 40, 50];
const { first, third } = getElements(arr);

console.log(first); // Output: 10
console.log(third); // Output: 30
 
```

**Explanation:**


- The getElements function extracts specific elements (first and third) from the array using destructuring.
- Destructuring is applied to assign first and third while skipping the second element using a comma.

  
</details>
 
---- 
` Question 2. Swap Two Variables`

  Write a program to swap the values of two variables using array destructuring. The program should not use a temporary variable for swapping.

`Example:`

```javascript

function swapValues(a, b) {
     
    // Your code here

}

let a = 5, b = 10;
[a, b] = swapValues(a, b);

console.log(a); // Output: 10
console.log(b); // Output: 5

```

`Topics Covered:`
Destructuring in JS
 
**Hints:**
- [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function swapValues(a, b) {
  return [b, a];
}

let a = 5, b = 10;
[a, b] = swapValues(a, b);

console.log(a); // Output: 10
console.log(b); // Output: 5
 
```

**Explanation:**


- The swapValues function takes two parameters a and b and returns them in reversed order.
- The function returns an array [b, a] to swap the values of a and b.

  
</details>
 
---- 
` Question 3. Extract Properties from an Object`

  Write a program to extract specific properties from an object using destructuring. Given an object, extract the name and age properties into variables.

`Example:`

```javascript

function getPersonDetails(person) {
  
   // Your code here   

}

const person = { name: "Alice", age: 25, city: "New York" };
const { name, age } = getPersonDetails(person);

console.log(name); // Output: Alice
console.log(age);  // Output: 25


```

`Topics Covered:`
Destructuring in JS
 
**Hints:**
- [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/), - [Object Destructuring](https://www.javascripttutorial.net/javascript-object-destructuring/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getPersonDetails(person) {
  const { name, age } = person;
  return { name, age };
}

const person = { name: "Alice", age: 25, city: "New York" };
const { name, age } = getPersonDetails(person);

console.log(name); // Output: Alice
console.log(age);  // Output: 25
 
```

**Explanation:**


- The getPersonDetails function extracts the name and age properties from the person object using destructuring.
- Destructuring is applied inside the function to extract the required properties.

  
</details>
 
---- 
` Question 4. Default Values in Destructuring`

  Write a program to use default values in destructuring. If the property or element does not exist, assign a default value. Extract a name and gender from the object, with gender defaulting to "Unknown".

`Example:`

```javascript

function getPersonDetails(person) {
  
  // Your code here

}

const person = { name: "Bob", age: 30 };
const { name, gender } = getPersonDetails(person);

console.log(name);   // Output: Bob
console.log(gender); // Output: Unknown


```

`Topics Covered:`
Destructuring in JS
 
**Hints:**
- [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/), - [Object Destructuring](https://www.javascripttutorial.net/javascript-object-destructuring/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getPersonDetails(person) {
  const { name, gender = "Unknown" } = person;
  return { name, gender };
}

const person = { name: "Bob", age: 30 };
const { name, gender } = getPersonDetails(person);

console.log(name);   // Output: Bob
console.log(gender); // Output: Unknown
 
```

**Explanation:**


- The getPersonDetails function extracts name and gender from the person object, providing a default value for gender if it's not present.
- Destructuring is used to extract name and provide a default value "Unknown" for gender.

  
</details>
 
---- 
` Question 5. Nested Object Destructuring`

  Write a program to extract values from a nested object using destructuring. For a given object, extract the city property of the address.

`Example:`

```javascript

function getPersonDetails(person) {
  
  // Your code here

}

const person = { name: "Bob", age: 30 };
const { name, gender } = getPersonDetails(person);

console.log(name);   // Output: Bob
console.log(gender); // Output: Unknown



```

`Topics Covered:`
Destructuring in JS
 
**Hints:**
- [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/), - [Object Destructuring](https://www.javascripttutorial.net/javascript-object-destructuring/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getPersonDetails(person) {
  const { name, gender = "Unknown" } = person;
  return { name, gender };
}

const person = { name: "Bob", age: 30 };
const { name, gender } = getPersonDetails(person);

console.log(name);   // Output: Bob
console.log(gender); // Output: Unknown
 
```

**Explanation:**


- The getPersonDetails function extracts name and gender from the person object, providing a default value for gender if it's not present.
- Destructuring is used to extract name and provide a default value "Unknown" for gender.

  
</details>
 
---- 
` Question 6. Rest Operator in Array Destructuring`

  Write a program to extract values from a nested object using destructuring. For a given object, extract the city property of the address.

`Example:`

```javascript

function splitArray(arr) {
  
  // Your code here

}

const arr = [1, 2, 3, 4, 5];
const { first, second, rest } = splitArray(arr);

console.log(first, second); // Output: 1 2
console.log(rest); // Output: [3, 4, 5]




```

`Topics Covered:`
Destructuring in JS, Rest
 
**Hints:**
- [Rest](https://www.geeksforgeeks.org/javascript-rest-operator/), - [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function splitArray(arr) {
  const [first, second, ...rest] = arr;
  return { first, second, rest };
}

const arr = [1, 2, 3, 4, 5];
const { first, second, rest } = splitArray(arr);

console.log(first, second); // Output: 1 2
console.log(rest); // Output: [3, 4, 5]
 
```

**Explanation:**


- The splitArray function uses destructuring to extract first and second elements from the array, and gathers the remaining elements into rest.
- The function splits the array into specific elements (first, second) and collects the rest into a new array (rest).

  
</details>
 
---- 
` Question 7. Function Parameter Destructuring`

  Write a program to destructure an object directly in a function’s parameters. Create a function that takes an object and extracts its name and age properties for use within the function.

`Example:`

```javascript

function displayInfo(person) {
  
  // Your code here

}

displayInfo({ name: "Charlie", age: 35, city: "London" });
// Output: Name: Charlie, Age: 35


```

`Topics Covered:`
Destructuring in JS, Rest
 
**Hints:**
- [Rest](https://www.geeksforgeeks.org/javascript-rest-operator/), - [Destructuring](https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function displayInfo(person) {
  console.log("Name: " + person.name + ", Age: " + person.age);
}

displayInfo({ name: "Charlie", age: 35, city: "London" });
// Output: Name: Charlie, Age: 35

 
```

**Explanation:**


- The displayInfo function takes an object person and accesses name and age properties to log them.
- The + operator is used to concatenate the string and variables.
 
</details>
 
---- 
