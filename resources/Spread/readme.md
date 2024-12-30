# Spread

###### ` Question 1. Merge Two Arrays`

  Write a program to merge two arrays into one using the spread operator. The spread operator should be used to combine both arrays without modifying the original arrays.

`Example:`

```javascript

function mergeArrays(arr1, arr2) {
  
  // Your Code here


console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
// Output: [1, 2, 3, 4, 5, 6]

```

`Topics Covered:`
Spread Operator
 
**Hints:**
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
// Output: [1, 2, 3, 4, 5, 6]
 
```

**Explanation:**


- The mergeArrays function takes two arrays as arguments and merges them using the spread operator (...), which spreads the elements of both arrays into a new array.
- For the inputs [1, 2, 3] and [4, 5, 6], the merged result is [1, 2, 3, 4, 5, 6].
  
</details>
 
---- 
###### ` Question 2. Clone an Object`

  Write a program to create a copy of an object using the spread operator. Ensure that the original object remains unchanged when modifications are made to the cloned object.

`Example:`

```javascript

function cloneObject(obj) {
  
    // Your code here

}

const original = { name: "Alice", age: 25 };
const cloned = cloneObject(original);
console.log(cloned);
// Output: { name: "Alice", age: 25 }

```

`Topics Covered:`
Spread Operator
 
**Hints:**
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function cloneObject(obj) {
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}

const original = { name: "Alice", age: 25 };
const cloned = cloneObject(original);
console.log(cloned);
// Output: { name: "Alice", age: 25 }
 
```

**Explanation:**


- Cloning Logic: The function iterates through the object's keys and copies its properties.
- Property Check: hasOwnProperty ensures only the object's own properties are copied.
- Output: Returns a new object (clonedObj) identical to the original.
  
</details>
 
---- 
###### ` Question 3. Add Elements to an Array`

  Write a program to add elements to the beginning and end of an array using the spread operator. The spread operator should ensure the original array remains unchanged.

`Example:`

```javascript

function addElements(arr, start, end) {
  
  // Write your code here

}

console.log(addElements([2, 3, 4], 1, 5)); 
// Output: [1, 2, 3, 4, 5]


```

`Topics Covered:`
Spread Operator
 
**Hints:**
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function cloneObject(obj) {
 function addElements(arr, start, end) {
  return [start, ...arr, end];
}

console.log(addElements([2, 3, 4], 1, 5)); 
// Output: [1, 2, 3, 4, 5]
 
```

**Explanation:**


- The addElements function adds start at the beginning and end at the end of arr.
- Uses the spread operator (...) to insert arr between start and end.
  
</details>
 
---- 
###### ` Question 4. Combine Two Objects`

  Write a program to combine the properties of two objects into one using the spread operator. Ensure the second object’s properties overwrite those of the first object if there are conflicts.

`Example:`

```javascript

function combineObjects(obj1, obj2) {
  
    // Your code here

}

console.log(combineObjects({ name: "Alice", age: 25 }, { age: 30, city: "New York" }));
// Output: { name: "Alice", age: 30, city: "New York" }


```

`Topics Covered:`
Spread Operator
 
**Hints:**
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function combineObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(combineObjects({ name: "Alice", age: 25 }, { age: 30, city: "New York" }));
// Output: { name: "Alice", age: 30, city: "New York" }

 
```

**Explanation:**


- The combineObjects function merges two objects into one.
- Uses the spread operator (...) to copy all properties from obj1 and obj2.
  
</details>
 
---- 
###### ` Question 5. Remove Duplicates from an Array`

  Write a program to remove duplicate elements from an array using the spread operator and a Set. A Set automatically eliminates duplicates, and the spread operator converts it back to an array.

`Example:`

```javascript

function removeDuplicates(arr) {
  
    // Your code here

}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]


```

`Topics Covered:`
Spread Operator
 
**Hints:**
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]
 
```

**Explanation:**


- The removeDuplicates function removes duplicate elements from an array.
- Converts the array to a Set, which automatically removes duplicates, then spreads it back into a new array.
  
</details>
 
---- 
###### ` Question 6. Split an Object into Two Objects`

  Write a program to split an object into two smaller objects using the spread operator. Specify which keys should belong to the first object and assign the remaining keys to the second object.

`Example:`

```javascript

function splitObject(obj, keys) {
  
  // Your code here

}

const original = { name: "Alice", age: 25, city: "New York", country: "USA" };
console.log(splitObject(original, ["name", "age"]));
// Output: [{ name: "Alice", age: 25 }, { city: "New York", country: "USA" }]



```

`Topics Covered:`
Spread Operator
 
**Hints:**
- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function splitObject(obj, keys) {
  const obj1 = keys.reduce(function (acc, key) {
    return { ...acc, [key]: obj[key] };
  }, {});

  const obj2 = { ...obj };
  keys.forEach(function (key) {
    delete obj2[key];
  });

  return [obj1, obj2];
}

const original = { name: "Alice", age: 25, city: "New York", country: "USA" };
console.log(splitObject(original, ["name", "age"]));
// Output: [{ name: "Alice", age: 25 }, { city: "New York", country: "USA" }]

 
```

**Explanation:**


- The function creates obj1 with specified keys using reduce and removes these keys from obj2 using delete.
- Output: Returns an array with two objects: one containing the selected keys (obj1) and the other with the remaining keys (obj2).
  
</details>
 
---- 
