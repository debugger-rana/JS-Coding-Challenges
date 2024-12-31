
# Timer Function

###### ` Question 1:Auto-Save Function`

 Write a javascript program where every five minutes the input field  data  is automatically saved.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Save Example</title>
</head>
<body>

    <input type="text" placeholder="Type something here...">

    <script>
        let timeout;

        function autoSave() {
            //Your code here
        }

        // Listen for input events on the text field
        document.querySelector('input').addEventListener('input', autoSave);
    </script>

</body>
</html>

  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [Timer function](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Save Example</title>
</head>
<body>

    <input type="text" placeholder="Type something here...">

    <script>
        let timeout;

        function autoSave() {
            clearTimeout(timeout); // Clear any existing timeout
            timeout = setTimeout(function() {
                console.log("Data auto-saved.");
            }, 5000); // Auto-save after 5 seconds of inactivity
        }

        // Listen for input events on the text field
        document.querySelector('input').addEventListener('input', autoSave);
    </script>

</body>
</html>


  
```

**Explanation:**


- **timeout**: A variable to store the timeout ID.
- **autoSave function**:
  - Clears any previously set timeout using clearTimeout(timeout).
  - Sets a new timeout to trigger an auto-save after 5 seconds of inactivity using setTimeout.
  - Inside the timeout, console.log("Data auto-saved.") simulates the auto-save action.
- **Event listener**:
  - Listens for the input event on an `<input>` element.
  - Calls the autoSave function every time the input changes.
- **Effect**: Auto-save happens after 5 seconds of no input (inactivity).

</details>
 
---- 
###### ` Question 2:Slideshow (Image Carousel)`

 Write a javascript program where an array called images contains the URLs of the images you want to display.On every second display the every image of array.Create currentIndex variable that keep track of all images.

`Example:`

```javascript

let timeout;

// Array of image URLs (this can be any valid image URLs or placeholders)
const images = [
    "https://via.placeholder.com/600x300/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x300/ff9f00/333333?text=Image+2",
    "https://via.placeholder.com/600x300/00aaff/333333?text=Image+3",
    "https://via.placeholder.com/600x300/30ff7f/333333?text=Image+4"
];

let currentIndex = 0; // Initial index of the current image

// Function to simulate showing the next image in the console
function showNextImage() {
   //Your code here
}

// Initialize the slideshow and make it cycle every 3 seconds
setInterval(showNextImage, 3000); // Change image every 3 seconds

  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [setInterval](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Array of image URLs (this can be any valid image URLs or placeholders)
const images = [
    "https://via.placeholder.com/600x300/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x300/ff9f00/333333?text=Image+2",
    "https://via.placeholder.com/600x300/00aaff/333333?text=Image+3",
    "https://via.placeholder.com/600x300/30ff7f/333333?text=Image+4"
];

let currentIndex = 0; // Initial index of the current image

// Function to simulate showing the next image in the console
function showNextImage() {
    // Clear the console (optional, to simulate a "transition" effect)
    console.clear();

    // Display the current image URL
    console.log("Displaying image: " + images[currentIndex]);

    // Update the current index (loop back to 0 after the last image)
    currentIndex = (currentIndex + 1) % images.length;
}

// Initialize the slideshow and make it cycle every 3 seconds
setInterval(showNextImage, 3000); // Change image every 3 seconds

  
```

**Explanation:**


- **images**: An array containing image URLs (or placeholders).
- **currentIndex**: A variable that keeps track of the current image’s index.
- **showNextImage function**:
  - Clears the console (optional for transition effect).
  - Displays the current image URL.
  - Updates currentIndex to the next image, looping back to the start after the last image.
- **setInterval**: Calls showNextImage every 3 seconds, creating an automatic slideshow of images in the console.

</details>
 
---- 
###### ` Question 3:Displaying Notifications (Delayed Alert)`

 Write a javascript program  where display a notification on every 10 second. Write a function resetTimer which run on the mouse movement and any key press

`Example:`

```javascript

let timeout;

function resetTimer() {
   //Your code here
}

// Reset timer on any mouse movement
window.addEventListener('mousemove', resetTimer);

// Reset timer on any key press
window.addEventListener('keydown', resetTimer);

  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [Timer function](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

let timeout;

function resetTimer() {
    clearTimeout(timeout); // Clear any existing timeout
    timeout = setTimeout(function() {
        alert("You have been inactive for 10 seconds!"); // Alert after 10 seconds of inactivity
    }, 10000); 
}

// Reset timer on any mouse movement
window.addEventListener('mousemove', resetTimer);

// Reset timer on any key press
window.addEventListener('keydown', resetTimer);
  
```

**Explanation:**


- **timeout**: A variable to store the timeout ID.
- **resetTimer function**:
  - Clears any existing timeout using clearTimeout(timeout).
  - Sets a new timeout to trigger an alert after 10 seconds of inactivity.
- **Event listeners**:
  - mousemove event: Resets the timer whenever the mouse is moved.
  - keydown event: Resets the timer whenever a key is pressed.

</details>
 
---- 
###### ` Question 4:Simple Random Number Generator (with setInterval)`

 Write a javascript program generates a random number every second and prints it to the console.

`Example:`

```javascript

const randomNumberGenerator = setInterval(function() {
    //Your code here
}, 1000); // Generate a random number every 1 second
  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [Timer function](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const randomNumberGenerator = setInterval(function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number: " + randomNumber);
}, 1000); // Generate a random number every 1 second
  
```

**Explanation:**


- **randomNumberGenerator**: A variable that stores the setInterval ID.
- **setInterval**:
  - Runs the provided function every 1 second (1000 milliseconds).
  - Inside the function, Math.floor(Math.random() * 100) + 1 generates a random number between 1 and 100.
  - The random number is logged to the console.
- **Effect**: A random number is generated and displayed every second.

</details>
 
---- 
###### ` Question 5:Simple Stopwatch`

 Write a javascript program  program acts like a stopwatch that counts seconds from 0 upward. On every  10 second print the message on console the stopwatch is stopped.

`Example:`

```javascript

let seconds = 0;
const stopwatch = setInterval(function() {
    //Your code here
}, 1000);
 // Increment every 1 second

  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [Timer function](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

let seconds = 0;
const stopwatch = setInterval(function() {
    console.log(seconds + " seconds");
    seconds++;
    
    if (seconds === 10) { // Stop after 10 seconds
        clearInterval(stopwatch);
        console.log("Stopwatch stopped at 10 seconds");
    }
}, 1000);
 // Increment every 1 second

  
```

**Explanation:**


- **seconds**: A variable to track the time in seconds.
- **setInterval**:
  - Runs the provided function every 1 second (1000 milliseconds).
  - Logs the current value of seconds to the console.
  - Increments the seconds variable by 1 each time.
  - After 10 seconds, stops the stopwatch using clearInterval(stopwatch) and logs that the stopwatch has stopped.
- **Effect**: The stopwatch logs the elapsed time every second and stops after 10 seconds.

</details>
 
---- 
###### ` Question 6: Show a Welcome Message After a Delaya`

 Create a simple JavaScript program that shows a welcome message after a delay of 5 seconds. This message should appear in the console, and it should demonstrate how to use setTimeout to delay the execution of a function.

`Example:`

```javascript

// Program to show a welcome message after 5 seconds
// Function to display the welcome message
function showWelcomeMessage() {
   //Your code here
}
// Delay the welcome message by 5 seconds (5000 milliseconds)

  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [Timer function](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Program to show a welcome message after 5 seconds
// Function to display the welcome message
function showWelcomeMessage() {
    console.log("Welcome to our website!");
}
// Delay the welcome message by 5 seconds (5000 milliseconds)
setTimeout(showWelcomeMessage, 5000);
 // 5000ms = 5 seconds

  
```

**Explanation:**


- **showWelcomeMessage function**: A function that logs the welcome message to the console.
- **setTimeout**:
  - Delays the execution of the showWelcomeMessage function by 5 seconds (5000 milliseconds).
  - After 5 seconds, the welcome message "Welcome to our website!" is logged to the console.
- **Effect**: The welcome message is displayed 5 seconds after the code runs.

</details>
 
---- 
###### ` Question 7: Counting Seconds`

 This program counts down from 10 to 1 and then prints "Done!".

`Example:`

```javascript

// Program to count seconds and stop after 10 seconds
let seconds = 0; 
// Initialize the counter
// Function to increment and display the count of seconds
function countSeconds() {
    //Your code here
}
// Start counting every 1000ms (1 second)
const interval = setInterval(countSeconds, 1000);

  
```

`Topics Covered:`
Timer function
 
**Hints:**
- [Timer function](https://www.freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Program to count seconds and stop after 10 seconds
let seconds = 0; 
// Initialize the counter
// Function to increment and display the count of seconds
function countSeconds() {
    console.log(seconds); 
// Display the current count of seconds
    seconds++; 
// Increment the counter by 1
    if (seconds > 10) { 
// Stop counting after 10 seconds
        clearInterval(interval); 
// Stop the interval timer
        console.log("Counting stopped.");
    }
}
// Start counting every 1000ms (1 second)
const interval = setInterval(countSeconds, 1000);
  
```

**Explanation:**


- **seconds**: A variable to track the count of seconds, initialized to 0.
- **countSeconds function**:
  - Logs the current value of seconds to the console.
  - Increments the seconds variable by 1 each time it's called.
  - After 10 seconds, stops the counting using clearInterval(interval) and logs "Counting stopped."
- **setInterval**:
  - Starts the countSeconds function every 1 second (1000 milliseconds).
  - The counter stops automatically after 10 seconds.

</details>
 
---- 
