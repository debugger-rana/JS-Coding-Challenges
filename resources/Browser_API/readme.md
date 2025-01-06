# Browser API
 ##### ` Question 1:Save User Preferences with LocalStorage`

 Description:Write a program in javascript where store the theme in localStorage under the key theme.Get the current theme from local storage.Display it on the page.Prompt the user for a new theme.Update the theme in local storage.
`Example:`

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Changer</title>
</head>
<body>

    <h1>Current Theme: <span id="current-theme">Loading...</span></h1>
    <button id="change-theme-button">Change Theme</button>

    <script>
        // Get the current theme from localStorage or default to 'light'
        function getTheme() {
           //code here
        }

        // Set the theme in localStorage and update the page
        function setTheme(theme) {
           //code here
        }

        // Display the current theme on page load
        setTheme(getTheme());

        // Prompt the user to change the theme when the button is clicked
        document.getElementById('change-theme-button').addEventListener('click', function() {
           //code here
        });
    </script>

</body>
</html>


```
`Topics Covered:`
localStorage, setItem, getItem, prompt
 
**Hints:**
- [localStorage, setItem, getItem, prompt](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Changer</title>
</head>
<body>

    <h1>Current Theme: <span id="current-theme">Loading...</span></h1>
    <button id="change-theme-button">Change Theme</button>

    <script>
        // Get the current theme from localStorage or default to 'light'
        function getTheme() {
            return localStorage.getItem('theme') || 'light';
        }

        // Set the theme in localStorage and update the page
        function setTheme(theme) {
            localStorage.setItem('theme', theme);
            document.getElementById('current-theme').textContent = theme;
            document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#fff';
            document.body.style.color = theme === 'dark' ? '#fff' : '#000';
        }

        // Display the current theme on page load
        setTheme(getTheme());

        // Prompt the user to change the theme when the button is clicked
        document.getElementById('change-theme-button').addEventListener('click', function() {
            const newTheme = prompt('Enter a new theme (light or dark):', getTheme());
            if (newTheme === 'light' || newTheme === 'dark') {
                setTheme(newTheme);
            } else {
                alert('Invalid theme! Please choose "light" or "dark".');
            }
        });
    </script>

</body>
</html>
 

```
**Explanation:**
-getTheme(): Retrieves the theme from localStorage. If no theme is set, it defaults to 'light'.

-setTheme(theme): Updates the theme both in localStorage and on the page. It changes the background and text color based on the selected theme.
</details>
 
---- 
 ##### ` Question 2:Simple Geolocation Example`

 Description:Write a program in javascript to retrieve the geographical location (latitude and longitude) of a user from their device using the Geolocation API in JavaScript. The system should fetch the user's location and display it on the console.We first check if the browser supports the Geolocation API by checking if geolocation exists in the navigator object.If not exist the system should notify the user that geolocation is unavailable.
For example:navigator.geolocation.getCurrentPosition is used to request the user's current position

`Example:`

```javascript

if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position) {
    //code here
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

```
`Topics Covered:`
geolocation, latitude and longitude
 
**Hints:**
- [geolocation, latitude and longitude](https://www.w3schools.com/html/html5_geolocation.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
 

```
**Explanation:**
-The code checks if geolocation is available in the browser. 

-If supported, it retrieves and logs the user's latitude and longitude; otherwise, it logs an error message.
</details>
 
---- 
 ##### ` Question 3:Show Notifications to Users`

 Description:Write a program in javascript to  to request permission from the user to show browser notifications, and if permission is granted, display a notification to inform the user about a new message or event. If permission is already granted, the notification should be shown immediately. If permission is denied, no notification should be shown.
`Example:`

```javascript
if (Notification.permission !== "granted") {
  //code here
} else {
  new Notification("You've got a new message!");
}


```
`Topics Covered:`
Notification.permission,Notification.requestPermission(),new Notification()
 
**Hints:**
- [Notification.permission,Notification.requestPermission(),new Notification()](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
if (Notification.permission !== "granted") {
  Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
      new Notification("You've got a new message!");
    }
  });
} else {
  new Notification("You've got a new message!");
}
 

```
**Explanation:**
-The code checks if the browser has permission to show notifications. 

-If not, it requests permission, and if granted, it displays a new notification; otherwise, it directly shows the notification if permission is already granted.
</details>
 
---- 
 ##### ` Question 4:Clipboard Copy Functionality`

 Description:Write a program in javascript to  to allow users to copy text to the clipboard with a simple button click. When the user clicks the "Copy to Clipboard" button, the text from an input field is copied to the system clipboard. After the text is copied, a confirmation message appears to notify the user that the operation was successful.A Text Input Field: Contains the text that the user can copy. The initial value of this text is set to "Hello World!", but the user could change it if needed.When the user clicks this button, it triggers the process of copying the text from the input field to the clipboard.
`Example:`

```javascript
<button id="copyButton">Copy to Clipboard</button>
<input type="text" id="inputText" value="Hello World!">

<script>
  function copyTextToClipboard() {
   //code here
  }

  // Add event listener to button
  document.getElementById('copyButton').addEventListener('click', copyTextToClipboard);
</script>


```
`Topics Covered:`
Clipboard API
 
**Hints:**
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
<button id="copyButton">Copy to Clipboard</button>
<input type="text" id="inputText" value="Hello World!">

<script>
  function copyTextToClipboard() {
    const text = document.getElementById('inputText').value;
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard!');
    });
  }

  // Add event listener to button
  document.getElementById('copyButton').addEventListener('click', copyTextToClipboard);
</script>

```
**Explanation:**
-The copyTextToClipboard function retrieves the text from the input field and copies it to the clipboard using navigator.clipboard.writeText().

-An event listener is added to the "Copy to Clipboard" button to trigger the function when clicked.
</details>
 
---- 
 ##### ` Question 5:Save User Data in sessionStorage`

 Description:Write a program in javascript to  store a username in the sessionStorage and on page reload retrieve it from the storage.
`Example:`

```javascript

function saveUsernameToSessionStorage(username) {
  //code here
}

function getUsernameFromSessionStorage() {
 //code here
}

// Save data to sessionStorage
saveUsernameToSessionStorage('Alice');

// Retrieve and display data
console.log(getUsernameFromSessionStorage()); 
// Output: Alice


```
`Topics Covered:`
sessionStorage, setItem, getItem
 
**Hints:**
- [sessionStorage, setItem, getItem](https://www.w3schools.com/jsref/prop_win_sessionstorage.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function saveUsernameToSessionStorage(username) {
  sessionStorage.setItem('username', username);
}

function getUsernameFromSessionStorage() {
  return sessionStorage.getItem('username');
}

// Save data to sessionStorage
saveUsernameToSessionStorage('Alice');

// Retrieve and display data
console.log(getUsernameFromSessionStorage()); 
// Output: Alice


```
**Explanation:**
-saveUsernameToSessionStorage(username): This function saves the username to sessionStorage.

-getUsernameFromSessionStorage(): This function retrieves the username from sessionStorage and returns it.

-The functions are used to save and then retrieve the username "Alice", and it is logged to the console.

</details>
 
---- 
 ##### ` Question 6:Change URL Without Page Reload (History API)`

 Description:Write a program in javascript to  change the page URL address without reloading the page.Insert the new URL in place of previous URL.  
`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>URL Change Example</title>
</head>
<body>

  <button id="changePage">Change Page</button>
  <div id="content">Initial content</div>

  <script>
    function changePage() {
      // Change the URL without reloading the page
     //code here
      
      // Update the content of the page
     //code here
    }

    // Add event listener to button
    document.getElementById('changePage').addEventListener('click', changePage);
  </script>

</body>
</html>


```
`Topics Covered:`
History API, pushState()

 
**Hints:**
- [History API, pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>URL Change Example</title>
</head>
<body>

  <button id="changePage">Change Page</button>
  <div id="content">Initial content</div>

  <script>
    function changePage() {
      // Change the URL without reloading the page
      history.pushState({}, '', '/new-url');
      
      // Update the content of the page
      document.getElementById('content').innerText = 'URL has changed!';
    }

    // Add event listener to button
    document.getElementById('changePage').addEventListener('click', changePage);
  </script>

</body>
</html>


```
**Explanation:**
-changePage(): This function performs two tasks:
It changes the URL using history.pushState(), which updates the browser's URL without triggering a page reload.

-It updates the content inside the div with the ID content to indicate that the URL has changed.

</details>
 
---- 
 ##### ` Question 7: Simple Countdown Timer Using setInterval`

 Description:Write a program in javascript where Initializes the countdown timer with 10 seconds in variable timeLeftSets up an interval that runs every 1000 milliseconds (1 second), executing the function inside the setInterval..Logs the current time left on the timer every second.Decreases the timer by 1 second after each iteration.When the timer reaches 0, this condition is met, and the countdown is stopped.Shows an alert box when the countdown finishes.
`Example:`

```javascript

function startCountdown(initialTime) {
  let timeLeft = initialTime;
  //code here
}

// Start the countdown with 10 seconds
startCountdown(10);


```
`Topics Covered:`
setInterval
 
**Hints:**
- [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function startCountdown(initialTime) {
  let timeLeft = initialTime;
  
  const countdown = setInterval(() => {
    console.log(timeLeft);
    if (timeLeft === 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }
    timeLeft--;
  }, 1000);
}

// Start the countdown with 10 seconds
startCountdown(10);



```
**Explanation:**
-startCountdown(initialTime): This function accepts an initial time (in seconds) and starts the countdown. It uses setInterval to decrement the time every second.

-timeLeft--: Each second, timeLeft is reduced by 1. When timeLeft reaches 0, the countdown stops using clearInterval() and an alert is shown.

-The countdown is triggered with an initial time of 10 seconds by calling startCountdown(10).

</details>
 
---- 
 ##### ` Question 8: Alert on Window Resize`

 Description:Write a program listens for the window resize event and alerts the user when the window is resized.

`Example:`

```javascript
function onWindowResize() {
 //print alert 
}

// Add event listener for the window resize event
window.addEventListener('resize', onWindowResize);

```
`Topics Covered:`
resize 
**Hints:**
- [resize](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function onWindowResize() {
  alert("Window has been resized!");
}

// Add event listener for the window resize event
window.addEventListener('resize', onWindowResize);

```
**Explanation:**
-onWindowResize(): This function is triggered whenever the window is resized.

-It simply displays an alert.
window.addEventListener('resize', onWindowResize): This attaches the onWindowResize function to the resize event of the window. Whenever the window is resized, the function will be executed.

</details>
 
---- 
 ##### ` Question 9:Detect If User is Offline/Online`

 Description:Write javascript program listens for the browser's online and offline events.
 
`Example:`

```javascript

function handleOnline() {
 //message
}

function handleOffline() {
 //message
}

// Add event listeners for online and offline events
window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);
```
`Topics Covered:`
window
 
**Hints:**
- [window](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event)
<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript
function handleOnline() {
  console.log('You are online!');
}

function handleOffline() {
  console.log('You are offline!');
}

// Add event listeners for online and offline events
window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);

```
**Explanation:**
-handleOnline(): This function is triggered when the browser goes online, and it logs 'You are online!'.

-handleOffline(): This function is triggered when the browser goes offline, and it logs 'You are offline!'.

</details>
 
---- 