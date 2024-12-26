# Numbers

`Question 1: Convert a string to a valid number`

Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.

`Example:`

```javascript
function convertToNumber(str) {
   // Your code here
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // NaN
```
`Topics covered` 
- Number methods i.e. Number(), isNan()

`Hints` - [isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp), [JS Numbers](https://www.w3schools.com/jsref/jsref_number.asp)

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

`Explanation:`

- Number(str): tries to convert the string to a number.
- isNaN(number): checks if the result is not a valid number and returns NaN if it's invalid.

</details>

---