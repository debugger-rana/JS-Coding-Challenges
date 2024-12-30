# Sets

###### ` Question 1. Add Unique Elements to a Set`

  Write a program to create a Set from an array to store only unique elements. This demonstrates how duplicates are automatically removed by the Set.

`Example:`

```javascript

function addUniqueElements(arr) {
      
    // Your Code here

}
console.log(addUniqueElements([1, 2, 2, 3, 4, 4, 5])); 
// Output: Set(5) {1, 2, 3, 4, 5}


```

`Topics Covered:`
Sets, Array
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp) 
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function addUniqueElements(arr) {
  return new Set(arr);
}
console.log(addUniqueElements([1, 2, 2, 3, 4, 4, 5]));
 // Output: Set(5) {1, 2, 3, 4, 5}
 
```

**Explanation:**


- The function addUniqueElements takes an array (arr) and uses the Set object to remove duplicate elements.
- A Set only stores unique values. By passing the array to the Set constructor, it automatically filters out duplicates.
  
</details>
 
---- 
###### ` Question 2. Remove an Element from a Set`

  Write a program to remove a specific element from a Set using the delete() method and return the updated Set.

`Example:`

```javascript

function removeElement(mySet, element) {
  
    // Write your code here

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(removeElement(mySet, 3)); // Output: Set(4) {1, 2, 4, 5}


```

`Topics Covered:`
delete() in Javascript Sets, Sets
 
**Hints:**
- [delete() in Javascript Sets](https://www.geeksforgeeks.org/javascript-set-delete-method/), - [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function removeElement(mySet, element) {
  mySet.delete(element);
  return mySet;
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(removeElement(mySet, 3)); // Output: Set(4) {1, 2, 4,
 
```

**Explanation:**


- The removeElement function deletes a specified element from the given Set (mySet) using the delete method.
- mySet.delete(element) removes the value 3 from the Set.
- The updated Set is returned, and the output becomes Set(4) {1, 2, 4, 5}.
  
</details>
 
---- 
###### ` Question 3. Check if a Set Contains an Element`

  Write a program to check whether a Set contains a specific element using the has() method. Return true if it exists, otherwise false.

`Example:`

```javascript

function containsElement(mySet, element) {
  return mySet.has(element);
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(containsElement(mySet, 3)); // Output: true


```

`Topics Covered:`
Sets
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function containsElement(mySet, element) {
  return mySet.has(element);
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(containsElement(mySet, 3)); // Output: true
 
```

**Explanation:**


- The containsElement function checks if a specific element exists in the Set (mySet).
- It uses the has method of Set, which returns true if the element is present, otherwise false.
- For mySet = new Set([1, 2, 3, 4, 5]) and element = 3, mySet.has(3) evaluates to true.
  
</details>
 
---- 
###### ` Question 4. Count Elements in a Set`

  Write a program to find the total number of elements in a Set using the size property.

`Example:`

```javascript

function countElements(mySet) {
  
    // Your Code here

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(countElements(mySet)); // Output: 5

```

`Topics Covered:`
Sets
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function countElements(mySet) {
  return mySet.size;
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(countElements(mySet)); // Output: 5
 
```

**Explanation:**


- The function countElements(mySet) returns mySet.size, which is 5.
- console.log displays 5 as the output.
  
</details>
 
---- 
###### ` Question 5. Convert a Set to an Array`

  Write a program to transform a Set into an array for further operations such as sorting or iteration.

`Example:`

```javascript

function convertSetToArray(mySet) {
  
  // Your Code here

}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(convertSetToArray(mySet)); // Output: [1, 2, 3, 4, 5]

```

`Topics Covered:`
Sets
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function convertSetToArray(mySet) {
  return [...mySet];
}
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(convertSetToArray(mySet)); // Output: [1, 2, 3, 4, 5]
 
```

**Explanation:**


- The spread operator (...) expands the elements of mySet into an array.
- return [...mySet]; creates a new array containing all elements from mySet.
  
</details>
 
---- 
###### ` Question 6. Find the Union of Two Sets`

  Write a program to combine two Sets into one, containing all unique elements from both Sets.

`Example:`

```javascript


  function unionOfSets(setA, setB) {
    
    // Your code here

  }
  const setA = new Set([1, 2, 3]);
  const setB = new Set([3, 4, 5]);
  console.log(unionOfSets(setA, setB)); // Output: Set(5) {1, 2, 3, 4, 5}

```

`Topics Covered:`
Sets
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript


function unionOfSets(setA, setB) {
  return new Set([...setA, ...setB]);
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(unionOfSets(setA, setB)); // Output: Set(5) {1, 2, 3, 4, 5}
 
```

**Explanation:**


- The spread operator (...) merges their elements into [1, 2, 3, 3, 4, 5].
- new Set([...setA, ...setB]) removes duplicates, resulting in {1, 2, 3, 4, 5}.
  
</details>
 
---- 
###### ` Question 7. Find the Intersection of Two Sets`

  Write a program to identify elements that are common to both Sets using the filter() and has() methods.

`Example:`

```javascript

function intersectionOfSets(setA, setB) {
 
    // Your Code here

}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(intersectionOfSets(setA, setB)); // Output: Set(1) {3}

```

`Topics Covered:`
Sets
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function intersectionOfSets(setA, setB) {
  return new Set([...setA].filter(item => setB.has(item)));
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(intersectionOfSets(setA, setB)); // Output: Set(1) {3}
 
```

**Explanation:**


- Convert setA to an array and use .filter() to keep elements that exist in setB (common elements).
- Wrap the result in new Set() to return a set with the intersection: {3}.
  
</details>
 
---- 
###### ` Question 8. Find the Difference Between Two Sets`

  Write a program to find elements that are in one Set but not in the other.

`Example:`

```javascript

function differenceOfSets(setA, setB) {
  
    // Your Codde here
    
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(differenceOfSets(setA, setB)); // Output: Set(2) {1, 2}

```

`Topics Covered:`
Sets
 
**Hints:**
- [Sets](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function differenceOfSets(setA, setB) {
  return new Set([...setA].filter(item => !setB.has(item)));
}
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(differenceOfSets(setA, setB)); // Output: Set(2) {1, 2}
 
```

**Explanation:**


- Convert setA to an array and use .filter() to keep elements that are not in setB.
- Wrap the result in new Set() to return a set with the difference: {1, 2}.
  
</details>
 
---- 
