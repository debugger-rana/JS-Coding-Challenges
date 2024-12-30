# Math
###### ` Question 1. Find the Factorial of a Number`

  Write a function to calculate the factorial of a given number. The factorial of n is the product of all positive integers less than or equal to n.

`Example:`

```javascript

 function factorial(n) {
  
  // Your code here

}

console.log(factorial(5)); // Output: 120


```

`Topics Covered:`
Factorial of a Number, Maths
 
**Hints:**
- [Factorial](https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/)
- [Maths](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
 
```

**Explanation:**


- The factorial function uses recursion to calculate the factorial of n. If n is 0, it returns 1 (base case).
- It multiplies n by the factorial of n - 1.
  
</details>
 
---- 
###### ` Question 2. Find the Greatest Common Divisor (GCD)`

  Write a function to find the GCD of two numbers using the Euclidean algorithm. The GCD is the largest number that divides both the numbers without leaving a remainder.

`Example:`

```javascript

function gcd(a, b) {
  
  // Your code here

}

console.log(gcd(56, 98)); // Output: 14



```

`Topics Covered:`
GCD of a Number, Maths
 
**Hints:**
- [GCD](https://www.w3resource.com/javascript-exercises/javascript-math-exercise-8.php)
- [Maths](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(56, 98)); // Output: 14
 
```

**Explanation:**


- The gcd function uses recursion to find the greatest common divisor of a and b.
-  If b is 0, it returns a. Otherwise, it recursively calls gcd with b and a % b.
  
</details>
 
---- 
###### ` Question 3. Calculate the Square Root of a Number`

  Write a function that returns the square root of a given number. If the number is negative, return an error message.

`Example:`

```javascript

function squareRoot(n) {
     
    // Your Code here

}

console.log(squareRoot(25)); // Output: 5

```

`Topics Covered:`
Maths
 
**Hints:**
- [Maths](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function squareRoot(n) {
  if (n < 0) {
    return "Invalid input";
  } else {
    return Math.sqrt(n);
  }
}

console.log(squareRoot(25)); // Output: 5

 
```

**Explanation:**


- The squareRoot function checks if the input n is less than 0.
- If true, it returns "Invalid input". Otherwise, it returns the square root of n using Math.sqrt(n).
  
</details>
 
---- 
###### ` Question 4. Find the Power of a Number`

  Write a function to calculate the power of a number, i.e., base raised to the exponent.

`Example:`

```javascript

function power(base, exponent) {
 
  // Your code here

}

console.log(power(3, 4)); // Output: 81


```

`Topics Covered:`
Maths
 
**Hints:**
- [Maths](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function power(base, exponent) {

  return Math.pow(base, exponent);

}

console.log(power(3, 4)); // Output: 81

 
```

**Explanation:**


-  The power function takes two arguments, base and exponent, and calculates the result using Math.pow(base, exponent).
- For power(3, 4), it computes 3^4 , which equals 81.
  
</details>
 
---- 
###### ` Question 5. Check if a Number is Prime`

  Write a function to check if a given number is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself.

`Example:`

```javascript

function isPrime(n) {

  // Your code here

}

console.log(isPrime(11)); // Output: true


```

`Topics Covered:`
Maths
 
**Hints:**
- [Maths](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11)); // Output: true


 
```

**Explanation:**


-  he isPrime function checks if n is less than or equal to 1 (not prime).
- It then iterates from 2 to Math.sqrt(n) and checks if n is divisible by any number in that range.
  
</details>
 
---- 
###### ` Question 6. Find the Least Common Multiple (LCM)`

  Write a function to calculate the LCM of two numbers. The LCM is the smallest positive integer that is divisible by both numbers.

`Example:`

```javascript

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b); // Helper function to calculate GCD
}

function lcm(a, b) {
   
  // Your code here

  }

console.log(lcm(4, 5)); // Output: 20



```

`Topics Covered:`
Maths
 
**Hints:**
- [Maths](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b); // Helper function to calculate GCD
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(4, 5)); // Output: 20
 
```

**Explanation:**


- LCM Function: The lcm function calculates the least common multiple using the formula.
- Helper Function (gcd): The gcd function calculates the greatest common divisor using recursion. If b is 0, it returns a. 
  
</details>
 
---- 
