# Currying

###### ` Question 1. Add Two Numbers`

  Write a curried function that accepts two numbers as arguments and returns their sum. The first argument is passed to the curried function, and the second argument is passed to the returned function.

`Example:`

```javascript

 const add = function(a) {
  return function(b) {
      
    // Your Code here

  };
};

console.log(add(5)(3)); // Output: 8

```

`Topics Covered:`
Function Currying
 
**Hints:**
- [Function Currying](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/)
- [Currying]( https://javascript.info/currying-partials/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const add = function(a) {
  return function(b) {
    return a + b;
  };
};

console.log(add(5)(3)); // Output: 8
 
```

**Explanation:**


- The add function is an anonymous function that returns another function, which takes b and adds it to a.
- When called as add(5)(3), it returns 5 + 3, resulting in 8.
  
</details>
 
---- 
###### ` Question 2. Multiply Three Numbers with currying`

  Write a curried function that takes three numbers and returns their product. The curried function should handle each number step by step, with the first function accepting the first number, and the second and third functions handling the remaining numbers.

`Example:`

```javascript

 function multiply(a) {
       
    // Write your code here

}

console.log(multiply(2)(3)(4)); // Output: 24

```

`Topics Covered:`
Function Currying
 
**Hints:**
- [Function Currying](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/), - [Currying]( https://javascript.info/currying-partials/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // Output: 24
 
```

**Explanation:**


- The multiply function returns another function for each parameter, b and c.
- When called as multiply(2)(3)(4), it multiplies 2 * 3 * 4, resulting in 24.
  
</details>
 
---- 
###### ` Question 3. Calculate Power`

  Write a curried function that calculates the power of a number, where the first argument is the base, and the second is the exponent. This function should return the result of raising the base to the power of the exponent.

`Example:`

```javascript

 function power(a) {
  
 // Your code here 

}

console.log(power(2)(3)); // Output: 8


```

`Topics Covered:`
Function Currying
 
**Hints:**
- [Function Currying](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/), - [Currying]( https://javascript.info/currying-partials/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function power(a) {
  return function(b) {
    return Math.pow(a, b);
  };
}

console.log(power(2)(3)); // Output: 8

 
```

**Explanation:**


- The power function returns another function that calculates a raised to the power of b using Math.pow(a, b).
  
</details>
 
---- 
###### ` Question 4. String Concatenation`

  Write a curried function to concatenate two strings. The first function should accept the first string, and the second function should accept the second string. It should return the concatenated result of both strings.

`Example:`

```javascript

 function concatStrings(str1) {
  
  // Your Code here

}

console.log(concatStrings("Hello")("World")); // Output: "HelloWorld"


```

`Topics Covered:`
Function Currying
 
**Hints:**
- [Function Currying](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/), - [Currying]( https://javascript.info/currying-partials/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function concatStrings(str1) {
  return function(str2) {
    return str1 + str2;
  };
}

console.log(concatStrings("Hello")("World")); // Output: "HelloWorld"
 
```

**Explanation:**


- The concatStrings function takes str1 and returns another function that takes str2 and concatenates both strings.
- When called as concatStrings("Hello")("World"), it concatenates "Hello" and "World", resulting in "HelloWorld".
  
</details>
 
---- 
###### ` Question 5. Subtract Two Numbers`

  Write a curried function that takes two numbers and returns their difference. The curried function will first accept one number, and then the second function will accept the second number to subtract from the first.

`Example:`

```javascript

 function subtract(a) {

    // Your code here

}

console.log(subtract(10)(5)); // Output: 5

```

`Topics Covered:`
Function Currying
 
**Hints:**
- [Function Currying](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/), - [Currying]( https://javascript.info/currying-partials/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function subtract(a) {
  return function(b) {
    return a - b;
  };
}

console.log(subtract(10)(5)); // Output: 5
 
```

**Explanation:**


- The subtract function takes a and returns another function that subtracts b from a.
- When called as subtract(10)(5), it performs 10 - 5, resulting in 5.
  
</details>
 
---- 
###### ` Question 6. Calculate Final Price After Discount and Tax`

  Write a curried function that calculates the final price of a product after applying a discount and then adding tax. The first function will accept the original price of the product, the second function will accept the discount rate, and the third function will accept the tax rate. The function should return the final price after applying the discount and tax.

`Example:`

```javascript

 function calculateFinalPrice(price) {
    
    // Your code here 

}

console.log(calculateFinalPrice(1000)(20)(15)); // Output: 920



```

`Topics Covered:`
Function Currying
 
**Hints:**
- [Function Currying](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/), - [Currying]( https://javascript.info/currying-partials/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateFinalPrice(price) {
  return function(discountRate) {
    return function(taxRate) {
      const discount = price * (discountRate / 100);
      const priceAfterDiscount = price - discount;
      const finalPrice = priceAfterDiscount * (1 + taxRate / 100);
      return finalPrice;
    };
  };
}

console.log(calculateFinalPrice(1000)(20)(15)); // Output: 920
 
```

**Explanation:**


- The discount is subtracted from the original price, and then tax is added to the discounted price to calculate the final price.
- For an original price of 1000, a 20% discount, and a 15% tax, the final price is 920.
  
</details>
 
---- 
