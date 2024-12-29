# Rest parameter

` Question 1: Sum of Numbers`

 Write a function sumNumbers that takes any number of arguments and returns the sum of all the numbers.

`Example:`

```javascript

function sumNumbers(...numbers) {
  //Your code here
}

// Example
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

  
```

`Topics Covered:`
Array methods i.e. reduce(), Rest parameter
 
**Hints:**
- [Array methods i.e. reduce()](https://www.w3schools.com/js/js_array_iteration.asp), - [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

  
```

**Explanation:**


- The function uses the rest parameter ...numbers to accept any number of arguments.
- It uses the reduce method to sum up all the numbers in the array.
- The reduce method starts with an initial value of 0 for the accumulator (sum).
- It returns the total sum of all the numbers provided as arguments.

  
</details>
 
---- 
` Question 2: Filter Even Numbers`

 Write a function filterEvens that takes any number of arguments and returns an array of all even numbers.

`Example:`

```javascript

function filterEvens(...numbers) {
  //Your code here
}

// Example
console.log(filterEvens(1, 2, 3, 4, 5, 6)); // Output: [2, 4, 6]

  
```

`Topics Covered:`
Array methods i.e. filter(), Rest parameter
 
**Hints:**
- [Array methods i.e. filter()](https://www.w3schools.com/js/js_array_iteration.asp), - [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function filterEvens(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Example
console.log(filterEvens(1, 2, 3, 4, 5, 6)); // Output: [2, 4, 6]

  
```

**Explanation:**


- The function uses the rest parameter ...numbers to accept any number of arguments.
- It uses the filter method to select only the even numbers from the array.
- The condition num % 2 === 0 checks if a number is divisible by 2.
- It returns an array containing only the even numbers.

  
</details>
 
---- 
` Question 3: Group Students by Class`

 Write a function groupByClass that takes a teacher's name and an arbitrary number of student names and returns an object grouping them.

`Example:`

```javascript

function groupByClass(teacher, ...students) {
 //Your code here
}

// Example
console.log(groupByClass("Mithun sir", "Chandra", "Deepak", "Pinkee"));
// Output: { teacher: "Mithun sir", students: ["Chandra", "Deepak", "Pinkee"] }

  
```

`Topics Covered:`
Object, Rest parameter
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp), - [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function groupByClass(teacher, ...students) {
  return { teacher, students };
}

// Example
console.log(groupByClass("Mithun sir", "Chandra", "Deepak", "Pinkee"));
// Output: { teacher: "Mithun sir", students: ["Chandra", "Deepak", "Pinkee"] }

  
```

**Explanation:**


- The function takes the teacher's name as the first argument and student names as additional arguments using the rest parameter ...students.
- It returns an object with two properties:
  - teacher: the teacher's name.
  - students: an array of student names.

  
</details>
 
---- 
` Question 4: Dynamic Product Builder`

 Write a function buildProduct that takes a product name and a varying number of product features, and returns an object containing the product details.

`Example:`

```javascript

function buildProduct(name, ...features) {
  //Your code here
}

// Example
console.log(buildProduct("Laptop", "16GB RAM", "1TB SSD", "Intel i7"));
// Output: { name: "Laptop", features: ["16GB RAM", "1TB SSD", "Intel i7"] }

  
```

`Topics Covered:`
 Rest parameter
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function buildProduct(name, ...features) {
  return { name, features };
}

// Example
console.log(buildProduct("Laptop", "16GB RAM", "1TB SSD", "Intel i7"));
// Output: { name: "Laptop", features: ["16GB RAM", "1TB SSD", "Intel i7"] }

  
```

**Explanation:**

- The function takes a product name as the first argument and product features as additional arguments using the rest parameter ...features.
- It returns an object with two properties:
  - name: the product's name.
  - features: an array of product features.

  
</details>
 
---- 
` Question 5: Exclude Specific Keys from Object`

 Write a function excludeKeys that takes an object and specific keys to exclude, and returns a new object without those keys.

`Example:`

```javascript

function excludeKeys(obj, ...keysToExclude) {
 //Your code here
}

// Example
console.log(excludeKeys({ name: "Mithun sir", age: 30, city: "Bangalore" }, "age", "city"));
// Output: { name: "Mithun sir" }

  
```

`Topics Covered:`
Rest parameter, Spread operator, Array methods i.e. forEach()
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), - [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), - [Array methods i.e. forEach()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function excludeKeys(obj, ...keysToExclude) {
  const newObj = { ...obj };
  keysToExclude.forEach(key => delete newObj[key]);
  return newObj;
}

// Example
console.log(excludeKeys({ name: "Mithun sir", age: 30, city: "Bangalore" }, "age", "city"));
// Output: { name: "Mithun sir" }

  
```

**Explanation:**


- The function takes an object (obj) and any number of keys to exclude using the rest parameter ...keysToExclude.
- It creates a shallow copy of the object using the spread operator ({ ...obj }).
- It loops through the keys to exclude and deletes those keys from the new object.
- It returns the new object without the excluded keys.

  
</details>
 
---- 
` Question 6: Group Arguments by Type`

 Write a function groupByType that takes any number of arguments and groups them into an object by their type.

`Example:`

```javascript

function groupByType(...args) {
 //Your code here
}

// Example
console.log(groupByType(1, "hello", true, 42, "world"));
// Output: { number: [1, 42], string: ["hello", "world"], boolean: [true] }

  
```

`Topics Covered:`
Rest parameter, Array methods i.e. reduce()
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), - [Array methods i.e. reduce()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function groupByType(...args) {
  return args.reduce((grouped, arg) => {
    const type = typeof arg;
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(arg);
    return grouped;
  }, {});
}

// Example
console.log(groupByType(1, "hello", true, 42, "world"));
// Output: { number: [1, 42], string: ["hello", "world"], boolean: [true] }

  
```

**Explanation:**


- The function takes any number of arguments using the rest parameter ...args.
- It uses the reduce method to group the arguments by their type.
- For each argument, it determines the type using typeof and adds it to the corresponding type array in the grouped object.
- It returns an object where each key is a type, and the value is an array of arguments of that type.

  
</details>
 
---- 
` Question 7: Combine Multiple Sets of Data`

 Write a function combineData that takes a base data array and any number of additional arrays, combining all into a single array.

`Example:`

```javascript

function combineData(baseArray, ...arrays) {
 //Your code here
}

// Example
console.log(combineData([1, 2], [3, 4], [5, 6]));
// Output: [1, 2, 3, 4, 5, 6]

  
```

`Topics Covered:`
Rest parameter, Array methods i.e. flat(), spread operator
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), - [Array methods i.e. flat()](https://www.w3schools.com/jsref/jsref_array_flat.asp), - [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function combineData(baseArray, ...arrays) {
  return [...baseArray, ...arrays.flat()];
}

// Example
console.log(combineData([1, 2], [3, 4], [5, 6]));
// Output: [1, 2, 3, 4, 5, 6]

  
```

**Explanation:**


- The function takes any number of arguments using the rest parameter ...args.
- It uses the reduce method to group the arguments by their type.
- For each argument, it determines the type using typeof and adds it to the corresponding type array in the grouped object.
- It returns an object where each key is a type, and the value is an array of arguments of that type.

  
</details>
 
---- 
` Question 8: Extract Specific Items from Array`

 Write a function extractItems that takes an array and a number of indices to exclude, and returns the remaining items.

`Example:`

```javascript

function extractItems(arr, ...indicesToExclude) {
  //Your code here
}

// Example
console.log(extractItems([10, 20, 30, 40, 50], 1, 3));
// Output: [10, 30, 50]

  
```

`Topics Covered:`
Rest parameter, Array methods includes(), Array methods filter()
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), - [Array methods includes()](https://www.w3schools.com/js/js_array_methods.asp), - [Array methods filter()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function extractItems(arr, ...indicesToExclude) {
  return arr.filter((_, index) => !indicesToExclude.includes(index));
}

// Example
console.log(extractItems([10, 20, 30, 40, 50], 1, 3));
// Output: [10, 30, 50]

  
```

**Explanation:**


- The function takes an array (arr) and any number of indices to exclude using the rest parameter ...indicesToExclude.
- It uses the filter method to create a new array, keeping only the elements whose index is not in the indicesToExclude array.
- It returns the new array with the elements that were not excluded based on the given indices.

  
</details>
 
---- 
` Question 9: Dynamic Object Cloner`

 Write a function cloneObject that takes an object and an arbitrary number of keys, returning a clone with only those keys.

`Example:`

```javascript

function cloneObject(obj, ...keys) {
 //Your code here
}

// Example
console.log(cloneObject({ a: 1, b: 2, c: 3 }, "a", "c"));
// Output: { a: 1, c: 3 }

  
```

`Topics Covered:`
Rest parameter, Object, Array methods reduce()
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), - [Object](https://www.w3schools.com/js/js_objects.asp), - [Array methods filter()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function cloneObject(obj, ...keys) {
  return keys.reduce((clone, key) => {
    if (key in obj) 
    clone[key] = obj[key];
    return clone;
  }, {});
}

// Example
console.log(cloneObject({ a: 1, b: 2, c: 3 }, "a", "c"));
// Output: { a: 1, c: 3 }

  
```

**Explanation:**


- The function takes an object (obj) and any number of keys to clone using the rest parameter ...keys.
- It uses the reduce method to iterate over the provided keys and create a new object (clone).
- For each key, it checks if the key exists in the original object, and if it does, adds the key-value pair to the new object.
- It returns a new object containing only the specified key-value pairs.

  
</details>
 
---- 
` Question 10: Aggregate Scores for Users`

 Write a function aggregateScores that takes a list of user scores and merges them by user.

`Example:`

```javascript

function aggregateScores(...scores) {
 //Your code here
}

// Example
console.log(aggregateScores(
  { user: "Prabir sir", score: 10 },
  { user: "Mithun sir", score: 15 },
  { user: "Prabir sir", score: 20 }
));
// Output: { "Prabir sir": 30, "Mithun sir": 15 }

  
```

`Topics Covered:`
Rest parameter, Array methods reduce()
 
**Hints:**
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), - [Array methods reduce()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function aggregateScores(...scores) {
  return scores.reduce((aggregated, { user, score }) => {
    if (!aggregated[user])
    aggregated[user] = 0;
    aggregated[user] += score;
    return aggregated;
  }, {});
}

// Example
console.log(aggregateScores(
  { user: "Prabir sir", score: 10 },
  { user: "Mithun sir", score: 15 },
  { user: "Prabir sir", score: 20 }
));
// Output: { "Prabir sir": 30, "Mithun sir": 15 }

  
```

**Explanation:**


- The function takes any number of score objects using the rest parameter ...scores.
- It uses the reduce method to aggregate the scores for each user.
- For each score object, it checks if the user already exists in the aggregated object. If not, it initializes the user's score to 0.
- It adds the current score to the user's total score.
- It returns an object with users as keys and their aggregated scores as values.

  
</details>
 
---- 
