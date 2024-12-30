# Events in Js

###### ` Question 1: Creating a Button with a Click Event Listener in JavaScript`

 Create a javascript program where create a button that says "Click me!".Give the button an ID so we can easily refer to it in our JavaScript code.Find the button on the page using its ID (alertButton).Add a "click event listener" to the button.Show an alert message when the button is clicked.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Click Example</title>
</head>
<body>

  <!-- Button that says "Click me!" -->
  <button id="alertButton">Click me!</button>

  <script>
    // Get the button element by its ID
    const button = document.getElementById('alertButton');
    //Your code here
    
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Click Example</title>
</head>
<body>

  <!-- Button that says "Click me!" -->
  <button id="alertButton">Click me!</button>

  <script>
    // Get the button element by its ID
    const button = document.getElementById('alertButton');
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Show an alert message when the button is clicked
      alert('Button clicked!');
    });
  </script>

</body>
</html>

  
```

**Explanation:**

- **Button Creation**: A button is created in HTML with the text "Click me!" and assigned an ID of alertButton.
- **Get Button by ID**: In JavaScript, document.getElementById('alertButton') is used to select the button.
- **Add Event Listener**: An event listener is attached to the button, listening for a 'click' event.
- **Alert on Click**: When the button is clicked, the JavaScript function triggers and displays an alert message saying "Button clicked!".
  
</details>
 
---- 
###### ` Question 2: Creating a Button with a Hover Background Color Effect Using HTML and CSS`

 create a simple webpage with a button that changes its background color when the user hovers the mouse over it. This effect should be achieved using HTML for the structure of the webpage, and CSS to style the button and apply the hover effect. The button should initially have a green background color and, when the user hovers over it, the background color should change to a slightly darker green.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Hover Effect</title>
  <style>
    //Your code here
  </style>
</head>
<body>

  <!-- Button that changes color on hover -->
  <button id="hoverButton">Hover over me!</button>

  <script>
    //Your code here
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Hover Effect</title>
  <style>
    /* Initial button style */
    #hoverButton {
      background-color: green;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  </style>
</head>
<body>

  <!-- Button that changes color on hover -->
  <button id="hoverButton">Hover over me!</button>

  <script>
    const button = document.getElementById('hoverButton');
    
    // Change background color on mouse enter
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = 'darkgreen';
    });
    
    // Reset background color on mouse leave
    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = 'green';
    });
  </script>

</body>
</html>

  
```

**Explanation:**

- **Initial Button Style**: The button starts with a green background and white text.
- **JavaScript**: When the mouse enters (mouseenter) the button, the background color changes to darkgreen. When the mouse leaves (mouseleave), the background color returns to green.
  
</details>
 
---- 
###### ` Question 3: Form Submit Event - Prevent Default`

 Create a form that prevents submission if the user hasn't filled out a required field.Create a simple form with some fields  like name and submit button and add validation for name field.


`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation Example</title>
</head>
<body>

  <!-- Form with a text input for the name -->
  <form id="myForm">
    <input type="text" id="name" placeholder="Enter your name" required>
    <button type="submit">Submit</button>
  </form>

  <script>
    // Get the form element by its ID
    const form = document.getElementById('myForm');
  //Your code here
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation Example</title>
</head>
<body>

  <!-- Form with a text input for the name -->
  <form id="myForm">
    <input type="text" id="name" placeholder="Enter your name" required>
    <button type="submit">Submit</button>
  </form>

  <script>
    // Get the form element by its ID
    const form = document.getElementById('myForm');

    // Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
      // Get the value of the input field
      const name = document.getElementById('name').value;
      
      // Check if the name is empty
      if (!name) {
        // Show an alert if no name is entered
        alert('Please enter your name');
        
        // Prevent the form from being submitted
        event.preventDefault();
      }
    });
  </script>

</body>
</html>


  
```

**Explanation:**

- **Form Structure**: A simple form with a text input field and a submit button.
- **Validation**: When the form is submitted, JavaScript checks if the name field is empty. If it is, an alert is shown, and the form submission is prevented using event.preventDefault().
  
</details>
 
---- 
###### ` Question 4: Keydown Event - Detect Keyboard Input`

 Create a program where use the addEventListener() method to listen for when a key is pressed (the keydown event). Once the key is pressed, we’ll capture the key value and use the console.log() method to display the key value in the browser's developer console.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Press Event Example</title>
</head>
<body>

  <!-- Input field where the user can press a key -->
  <input type="text" id="inputField" placeholder="Press a key">

  <script>
    // Get the input field element by its ID
    //Your code here
  </script>

</body>
</html>


  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Press Event Example</title>
</head>
<body>

  <!-- Input field where the user can press a key -->
  <input type="text" id="inputField" placeholder="Press a key">

  <script>
    // Get the input field element by its ID
    const inputField = document.getElementById('inputField');

    // Add an event listener for the 'keydown' event
    inputField.addEventListener('keydown', function(event) {
      // Log the key that was pressed to the console
      console.log('Key pressed:', event.key);
    });
  </script>

</body>
</html>


  
```

**Explanation:**

- **Input Field**: The user can press a key inside the input field.
- **JavaScript**: When a key is pressed, the keydown event is triggered. The key pressed is logged to the console using event.key.
  
</details>
 
---- 
###### ` Question 5: Change Event - Input Field Validation`

 Create a program that checks the validity of an email address entered by the user in an input field.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Validation Example</title>
</head>
<body>

  <!-- Input field for email -->
  <input type="email" id="email" placeholder="Enter your email">

  <script>
    // Get the email input field by its ID
   //Your code here
  </script>

</body>
</html>


  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Validation Example</title>
</head>
<body>

  <!-- Input field for email -->
  <input type="email" id="email" placeholder="Enter your email">

  <script>
    // Get the email input field by its ID
    const emailField = document.getElementById('email');

    // Add an event listener to the email field for the 'change' event
    emailField.addEventListener('change', function() {
      // Get the value of the email field
      const email = emailField.value;

      // Check if the email includes '@'
      if (!email.includes('@')) {
        // Show an alert if the email is invalid
        alert('Please enter a valid email address.');
      }
    });
  </script>

</body>
</html>


  
```

**Explanation:**

- **Email Input Field**: An input field for the user to enter their email address.
- **JavaScript**: The change event is triggered when the input value is changed. The script checks if the entered email contains the @ symbol. If not, an alert is shown asking the user to enter a valid email address.

</details>
 
---- 
###### ` Question 6: Scroll Event - Show Scroll Progress`

 Create a program that shows the user's scroll progress as a percentage on the page

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Progress Bar</title>
</head>
<body>

  <!-- Content to make the page scrollable -->
  <div style="height: 2000px;">
    <p>Scroll down the page</p>
  </div>

  <!-- Progress bar at the top -->
  <div id="progressBar" style="width: 0%; height: 20px; background-color: green;"></div>

  <script>
   //Your code here
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Progress Bar</title>
</head>
<body>

  <!-- Content to make the page scrollable -->
  <div style="height: 2000px;">
    <p>Scroll down the page</p>
  </div>

  <!-- Progress bar at the top -->
  <div id="progressBar" style="width: 0%; height: 20px; background-color: green;"></div>

  <script>
    // Event listener for the scroll event
    window.addEventListener('scroll', function() {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Get the total scrollable height of the document
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate the progress as a percentage
      const progress = (scrollPosition / totalHeight) * 100;

      // Set the width of the progress bar based on the scroll progress
      document.getElementById('progressBar').style.width = progress + '%';
    });
  </script>

</body>
</html>

  
```

**Explanation:**

- **Scrollable Content**: The page is made long enough (2000px) to allow scrolling.
- **Progress Bar**: A green progress bar is initially set to 0% width.
- **JavaScript**: The script listens for the scroll event. It calculates how far the user has scrolled down the page and adjusts the width of the progress bar accordingly, showing the percentage of the page that has been scrolled.

</details>
 
---- 
###### ` Question 7: Resize Event - Adjust Layout on Window Resize`

 Create a program that adjusts the text size dynamically based on the window size.Write a test in simple paragraph tag then resize it according to the window.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Text Example</title>
</head>
<body>

  <!-- Text that will change size based on window width -->
  <p id="responsiveText">Resize the window to see the text size change!</p>

  <script>
    // Event listener for the resize event
   //Your code here
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Text Example</title>
</head>
<body>

  <!-- Text that will change size based on window width -->
  <p id="responsiveText">Resize the window to see the text size change!</p>

  <script>
    // Event listener for the resize event
    window.addEventListener('resize', function() {
      // Get the current width of the window
      const width = window.innerWidth;

      // Calculate the text size based on the window width
      const textSize = width / 10; 

      // Adjust text size based on window width
      document.getElementById('responsiveText').style.fontSize = textSize + 'px';
    });
  </script>

</body>
</html>

  
```

**Explanation:**

- **Text Element**: A paragraph (`<p>`) displays a message that will change its font size when the window is resized.
- **JavaScript**: The script listens for the resize event. When the window is resized, it calculates the font size by dividing the window width by 10, and updates the font size of the text accordingly.

</details>
 
---- 
###### ` Question 8: Double Click Event - Show Alert on Double Click`

 Create a program that shows a custom alert when the user double-clicks a button.Create a button using button tag then assign the id to the button.select button from thier id then add event listener on double click of button.If user double click then print alert message on console.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Double Click Event Example</title>
</head>
<body>

  <button id="doubleClickButton">Double Click Me!</button>

  <script>
    // Get the button element by its ID
    //Your code here
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Double Click Event Example</title>
</head>
<body>

  <!-- Button that triggers a double-click event -->
  <button id="doubleClickButton">Double Click Me!</button>

  <script>
    // Get the button element by its ID
    const button = document.getElementById('doubleClickButton');

    // Add an event listener for the 'dblclick' (double-click) event
    button.addEventListener('dblclick', function() {
      // Show an alert when the button is double-clicked
      alert('Button was double-clicked!');
    });
  </script>

</body>
</html>

  
```

**Explanation:**


- **Button**: A button is created with the text "Double Click Me!".
- **JavaScript**: The dblclick event listener is added to the button. When the button is double-clicked, an alert message "Button was double-clicked!" is shown.

</details>
 
---- 
###### ` Question 9:Focus Event - Highlight Input Field`

 Create a program that changes the border color of an input field when the user focuses on it.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Focus and Blur Event Example</title>
</head>
<body>

  <input type="text" id="focusField" placeholder="Click to focus">

  <script>
    // Get the input field by its ID
    //Your code here
  </script>

</body>
</html>


  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Focus and Blur Event Example</title>
</head>
<body>

  <!-- Input field that changes border color on focus -->
  <input type="text" id="focusField" placeholder="Click to focus">

  <script>
    // Get the input field by its ID
    const focusField = document.getElementById('focusField');

    // Add event listener for the 'focus' event
    focusField.addEventListener('focus', function() {
      // Change the border color to blue when the input field is focused
      focusField.style.borderColor = 'blue';
    });

    // Add event listener for the 'blur' event
    focusField.addEventListener('blur', function() {
      // Reset the border color when the input field loses focus
      focusField.style.borderColor = '';
    });
  </script>

</body>
</html>


  
```

**Explanation:**


- **Input Field**: An input field is created with the placeholder text "Click to focus".
- **JavaScript**:
  - When the input field gains focus (focus event), the border color changes to blue.
  - When the input field loses focus (blur event), the border color resets to its default state.

</details>
 
---- 
###### ` Question 9:Mouse Move Event - Show Coordinates`

 Create a program that tracks the mouse cursor’s position on the screen and shows the coordinates (X, Y) in real time as the user moves the mouse.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Coordinates Example</title>
</head>
<body>
  <p>Move the mouse around the screen!</p>
  <p id="coordinates">X: 0, Y: 0</p>

  <script>
    // Event listener for the 'mousemove' event
   //Your code here
  </script>

</body>
</html>

  
```

`Topics Covered:`
Event Handler
 
**Hints:**
- [Event Handler](https://www.geeksforgeeks.org/javascript-events/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Coordinates Example</title>
</head>
<body>

  <!-- Instruction and coordinates display -->
  <p>Move the mouse around the screen!</p>
  <p id="coordinates">X: 0, Y: 0</p>

  <script>
    // Event listener for the 'mousemove' event
    document.addEventListener('mousemove', function(event) {
      // Get the mouse coordinates
      const x = event.clientX;
      const y = event.clientY;

      // Display the coordinates in the paragraph
      document.getElementById('coordinates').textContent =`X: ${x}, Y: ${y}`;
    });
  </script>

</body>
</html>

  
```

**Explanation:**


- **Mouse Coordinates**: The text "Move the mouse around the screen!" provides instruction, and the coordinates paragraph will display the mouse's X and Y coordinates.
- **JavaScript**: The mousemove event listener is added to the document. It listens for the mouse movement, retrieves the X and Y positions of the mouse, and updates the paragraph with the current coordinates.

</details>
 
---- 
