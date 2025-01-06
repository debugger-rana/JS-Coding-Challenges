# Promise

##### ` Question 1: Convert a string to a valid number`

 Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.

`Example:`

```javascript

function convertToNumber(str) {
   // Your code here
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // NaN
  
```

`Topics Covered:`
Number methods i.e. Number(), isNaN()
 
**Hints:**
- [isNaN()](https://www.w3schools.com/jsref/jsref_isnan.asp), - [JS Numbers](https://www.w3schools.com/jsref/jsref_number.asp)

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

**Explanation:**


- Number(str): tries to convert the string to a number.
- isNaN(number): checks if the result is not a valid number and returns NaN if it's invalid.
  
</details>
 
---- 
##### ` Question 1. Quiz Timeout`

 Write a function quizWithTimeout(question, answer, timeout) that takes a question, expected answer, and timeout. If the answer is provided within the timeout, resolve with "Correct!". Otherwise, reject with "Time s up!".

`Example:`

```javascript

function quizWithTimeout(question, expectedAnswer, timeout) {
  //Your code here
}

// Example Usage
quizWithTimeout("What is 2+2?", "4", 3000)
  .then(console.log)
  .catch(console.log);

  
```

`Topics Covered:`
Promise
 
**Hints:**
- [Promise](https://www.w3schools.com/js/js_promise.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function quizWithTimeout(question, expectedAnswer, timeout) {
  console.log(question); // Show the question to the user
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject("Time's up!"); // If time runs out, reject the promise
    }, timeout);

    setTimeout(() => {
      const userAnswer = expectedAnswer; // Simulate user answering correctly
      if (userAnswer === expectedAnswer) {
        clearTimeout(timer); // Stop the timeout
        resolve("Correct!"); // Resolve the promise with "Correct!"
      }
    }, 1000); // Assume user answers within 1 second
  });
}

// Example Usage
quizWithTimeout("What is 2+2?", "4", 3000)
  .then(console.log)
  .catch(console.log);

  
```

**Explanation:**


This function handles user responses with a timeout mechanism. Depending on the user's timing, the function resolves or rejects based on the outcome:

1. If the user answers correctly before the timeout, the promise resolves with the message:
   **"Correct!"**
2. If the timeout expires before the user responds, the promise rejects with the message:
   **"Time's up!"**
  
</details>
 
---- 
##### ` Question 2. Promise Chain Calculator`

 Write a calculator function that takes a number and returns an object with methods add, subtract, multiply, and getResult. Each method returns a promise to allow chaining.

`Example:`

```javascript

function calculator(initialValue) {
  //Your code here
}

// Example Usage
calculator(5)
  .add(10)
  .subtract(3)
  .multiply(2)
  .getResult()
  .then(console.log);

  
```

`Topics Covered:`
Promise
 
**Hints:**
- [Promise](https://www.w3schools.com/js/js_promise.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculator(initialValue) {
  let value = initialValue;

  return {
    add(num) {
      return new Promise((resolve) => {
        value += num;
        resolve(this);
      });
    },
    subtract(num) {
      return new Promise((resolve) => {
        value -= num;
        resolve(this);
      });
    },
    multiply(num) {
      return new Promise((resolve) => {
        value *= num;
        resolve(this);
      });
    },
    getResult() {
      return new Promise((resolve) => {
        resolve(value);
      });
    },
  };
}

// Example Usage
calculator(5)
  .add(10)
  .subtract(3)
  .multiply(2)
  .getResult()
  .then(console.log);

  
```

**Explanation:**


Each method, such as add, subtract, etc., modifies the current value and returns a promise. This approach allows for chaining operations. The getResult method resolves the final value.
  
</details>
 
---- 
##### ` Question 3. Online Food Order Status`

 Write a function trackOrder(orderId) that returns a promise to simulate tracking an online food order. Resolve with different statuses ("Preparing", "Out for delivery", "Delivered") at 1-second intervals.

`Example:`

```javascript

function trackOrder(orderId) {
  //Your code here
}

// Example Usage
trackOrder(123).then(console.log);

  
```

`Topics Covered:`
Promise
 
**Hints:**
- [Promise](https://www.w3schools.com/js/js_promise.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function trackOrder(orderId) {
  const statuses = ["Preparing", "Out for delivery", "Delivered"];
  return new Promise((resolve) => {
    let i = 0;

    const interval = setInterval(() => {
      console.log(statuses[i]);
      i++;

      if (i === statuses.length) {
        clearInterval(interval);
        resolve("Order Complete");
      }
    }, 1000);
  });
}

// Example Usage
trackOrder(123).then(console.log);

  
```

**Explanation:**


## Purpose
The trackOrder function simulates tracking the status of an order (Preparing, Out for delivery, Delivered) over time.

## How it works
1. It creates a Promise that resolves when the order is complete.
2. An interval logs the order statuses one by one every second.
3. When all statuses are logged, the interval stops, and the Promise resolves with "Order Complete."
  
</details>
 
---- 
##### ` Question 4. Flight Booking System`

 Write a function bookFlight(ticketDetails) that simulates a flight booking process. Return a promise that resolves after 3 seconds with the message "Booking confirmed for [Passenger Name]".

`Example:`

```javascript

function bookFlight(ticketDetails) {
  //Your code here
}

// Example Usage
bookFlight({ passenger: "Pinkee", flight: "AI-202" }).then(console.log);
  
```

`Topics Covered:`
Promise
 
**Hints:**
- [Promise](https://www.w3schools.com/js/js_promise.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function bookFlight(ticketDetails) {
  return new Promise((resolve) => {
    setTimeout(() => {
     resolve(`Booking confirmed for ${ticketDetails.passenger}`);
    }, 3000);
  });
}

// Example Usage
bookFlight({ passenger: "Pinkee", flight: "AI-202" }).then(console.log);
  
```

**Explanation:**


## Purpose
The bookFlight function simulates booking a flight for a passenger and confirms the booking after a delay.

## How it works
1. It takes ticketDetails as input.
2. It returns a Promise that resolves after 3 seconds (3000ms) with a confirmation message.

## Example Usage
When you call bookFlight, it resolves with a message like:  
"Booking confirmed for Pinkee" after 3 seconds.
  
</details>
 
---- 
##### ` Question 5. File Upload Simulation`

 Write a function simulateFileUpload(fileName, size) that simulates uploading a file. Return a promise that resolves after a delay based on the file size, logging the upload progress every second.

`Example:`

```javascript

function simulateFileUpload(fileName, size) {
  //Your code here
}

// Example Usage
simulateFileUpload("photo.jpg", 3).then(console.log);

  
```

`Topics Covered:`
Promise
 
**Hints:**
- [Promise](https://www.w3schools.com/js/js_promise.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function simulateFileUpload(fileName, size) {
  return new Promise((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.ceil(100 / size);
      console.log(`Uploading ${fileName}: ${progress}%`);

      if (progress >= 100) {
        clearInterval(interval);
        resolve("File uploaded successfully!");
      }
    }, 1000);
  });
}

// Example Usage
simulateFileUpload("photo.jpg", 3).then(console.log);

  
```

**Explanation:**


## Purpose
The simulateFileUpload function mimics the process of uploading a file by showing progress updates and completing after a simulated delay.

## How It Works

1. **Input Parameters**:
   - fileName: The name of the file being uploaded.
   - size: The size of the file (in arbitrary units).

2. **Process**:
   - A Promise is returned to simulate an asynchronous upload process.
   - Every second, the progress of the upload increases.
   - The progress percentage is calculated based on the file size: (100 / size).
   - When the progress reaches or exceeds 100%, the interval stops and the Promise resolves with a success message.
  
</details>
 
---- 
##### ` Question 6. Online Movie Streaming`

 Create a function streamMovie(movieName) that simulates streaming a movie. If the movie is unavailable, reject with "Movie not found". Otherwise, resolve with "Streaming [movieName]..."

`Example:`

```javascript

function streamMovie(movieName) {
  //Your code here
}

// Example Usage
streamMovie("Inception")
  .then(console.log)
  .catch(console.log);
  
```

`Topics Covered:`
Promise
 
**Hints:**
- [Promise](https://www.w3schools.com/js/js_promise.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function streamMovie(movieName) {
  const availableMovies = ["Inception", "Interstellar", "The Matrix"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableMovies.includes(movieName)) {
        resolve(`Streaming ${movieName}...`);
      } else {
        reject("Movie not found");
      }
    }, 2000);
  });
}

// Example Usage
streamMovie("Inception")
  .then(console.log)
  .catch(console.log);
  
```

**Explanation:**


## Purpose
The streamMovie function simulates streaming a movie by checking if it exists in a predefined list of available movies.

## How It Works
1. **Input Parameter**:
   - movieName: The name of the movie you want to stream.

2. **Process**:
  - The function checks if the movieName exists in the list ["Inception", "Interstellar", "The Matrix"].
  - If the movie is found, the function resolves with a message stating that it is streaming the movie.
  - If the movie is not found, the function rejects with a message saying "Movie not found".
  - A 2-second delay is simulated using setTimeout.
  
</details>
 
---- 
