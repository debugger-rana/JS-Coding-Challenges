# Fetch Api

` Question 1: Fetch Data from API`

 Write a function fetchData that fetches data from the following URL and returns the JSON response.

`Example:`

```javascript

async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
//Your code here
}

// Example usage
fetchData().then(data => console.log(data));

  
```

`Topics Covered:`
Error handling, Async/Await, fetch api
 
**Hints:**
- [Error handling](https://www.w3schools.com/js/js_errors.asp), - [Async/Await](https://www.w3schools.com/js/js_async.asp), - [fetch api](https://www.w3schools.com/jsref/api_fetch.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url); // Fetch data from the API
    const data = await response.json(); // Parse JSON response
    return data; // Return the array of objects
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
fetchData().then(data => console.log(data));

  
```

**Explanation:**


### Function: fetchData()

**Purpose**: Fetches data from the API (https://jsonplaceholder.typicode.com/posts).

#### Steps:
1. Sends a request to the specified URL using fetch().
2. Waits for the response and parses it as JSON using response.json().
3. Returns the parsed data (array of objects).

#### Error Handling:
- If there's an error during the fetch operation, it logs the error message to the console.

### Usage:
- The fetchData() function is called and the resulting data is logged to the console using .then(data => console.log(data)).

  
</details>
 
---- 
` Question 2: Fetch with Query Parameters`

 Write a function fetchPostsByUser that fetches posts by a specific user ID from the following URL:
   API URL:https://jsonplaceholder.typicode.com/posts?userId=USER_ID

`Example:`

```javascript

async function fetchPostsByUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`; // Add query parameter
//Your code here
}

// Example usage
fetchPostsByUser(1).then(posts => console.log(posts));


  
```

`Topics Covered:`
Error handling, Async/Await, fetch api
 
**Hints:**
- [Error handling](https://www.w3schools.com/js/js_errors.asp), - [Async/Await](https://www.w3schools.com/js/js_async.asp), - [fetch api](https://www.w3schools.com/jsref/api_fetch.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

async function fetchPostsByUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`; // Add query parameter

  try {
    const response = await fetch(url); // Fetch posts for the specific user
    const posts = await response.json(); // Parse JSON response
    return posts; // Return the array of posts
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Example usage
fetchPostsByUser(1).then(posts => console.log(posts));


  
```

**Explanation:**


## Function: fetchPostsByUser(userId)

## Purpose:
Fetches posts for a specific user from the API [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts).

## Steps:
1. Constructs the API URL with the provided userId as a query parameter:  
   `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
2. Sends a request to the URL using fetch().
3. Waits for the response and parses it as JSON using response.json().
4. Returns the parsed data (an array of posts).

## Error Handling:
- If there's an error during the fetch operation, it logs the error message to the console.

## Usage:
- The fetchPostsByUser(1) function is called with userId = 1, and the resulting posts are logged to the console using .then(posts => console.log(posts)).

  
</details>
 
---- 
` Question 3: Cancel Fetch Request`

 Write a function cancelRequest that uses the Fetch API and AbortController to cancel a request to this URL after 3 seconds if it doesn't complete.
 API URL:https://jsonplaceholder.typicode.com/posts 

`Example:`

```javascript

async function cancelRequest() {
  //Your code here
}

// Example usage:
cancelRequest().then(console.log).catch(console.error);

  
```

`Topics Covered:`
Error handling, Async/Await, fetch api
 
**Hints:**
- [Error handling](https://www.w3schools.com/js/js_errors.asp), - [Async/Await](https://www.w3schools.com/js/js_async.asp), - [fetch api](https://www.w3schools.com/jsref/api_fetch.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

async function cancelRequest() {
  const controller = new AbortController(); // Create AbortController
  const signal = controller.signal;

  setTimeout(() => {
    controller.abort(); // Cancel the request after 3 seconds
  }, 3000);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      return 'Request canceled'; // Handle request cancellation
    }
    throw error;
  }
}

// Example usage:
cancelRequest().then(console.log).catch(console.error);

  
```

**Explanation:**


## Function: cancelRequest()

## Purpose:
Cancels an API request after 3 seconds using AbortController.

## Steps:
1. Creates an AbortController and sets a 3-second timeout to abort the request.
2. Sends a fetch request to the API with the signal from the controller.
3. Handles responses:
   - If completed, parses and returns the data.
   - If aborted, returns "Request canceled."
4. Logs or handles other errors if they occur.

## Usage:
1. Calls cancelRequest().
2. Logs either the API data or "Request canceled" to the console.
  
</details>
 
---- 
` Question 4: Fetch and Update DOM`

 Write a function fetchAndUpdateDOM that fetches a list of users and dynamically creates a <ul> with their names and emails on the page.
  API URL:https://jsonplaceholder.typicode.com/users 

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch and Update DOM</title>
</head>
<body>
  <h1>Users List</h1>
  <!-- Container where the fetched data will be displayed -->
  <div id="user-list"></div>

  <script>
    async function fetchAndUpdateDOM() {
      const url = "https://jsonplaceholder.typicode.com/users";
      //Your code here
    fetchAndUpdateDOM();
  </script>
</body>
</html>

  
```

`Topics Covered:`
Error handling, Async/Await, fetch api, Dom methods
 
**Hints:**
- [Error handling](https://www.w3schools.com/js/js_errors.asp), - [Async/Await](https://www.w3schools.com/js/js_async.asp), - [fetch api](https://www.w3schools.com/jsref/api_fetch.asp), - [Dom methods](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch and Update DOM</title>
</head>
<body>
  <h1>Users List</h1>
  <!-- Container where the fetched data will be displayed -->
  <div id="user-list"></div>

  <script>
    async function fetchAndUpdateDOM() {
      const url = "https://jsonplaceholder.typicode.com/users";

      try {
        // Fetch user data from API
        const response = await fetch(url);
        const users = await response.json();

        // Get the container where the user list will be displayed
        const container = document.getElementById("user-list");

        // Create a <ul> element
        const ul = document.createElement("ul");

        // Loop through each user and create <li> for their name and email
        users.forEach(user => {
          const li = document.createElement("li");
          li.textContent = `${user.name} (${user.email})`// Format: "Name (Email)"
          ul.appendChild(li); // Add the <li> to the <ul>
        });

        // Add the <ul> to the container
        container.appendChild(ul);
      } catch (error) {
        console.error("Error fetching and updating DOM:", error);
      }
    }

    // Call the function to fetch data and update the DOM
    fetchAndUpdateDOM();
  </script>
</body>
</html>


  
```

**Explanation:**


## HTML Structure:

- A `<h1>` element titled **"Users List."**
- A `<div>` element with the ID user-list to display the fetched user data.

---

## Function: fetchAndUpdateDOM()

### **Purpose:**
Fetches user data from an API and updates the DOM with the user list.

### **Steps:**
1. Fetches data from https://jsonplaceholder.typicode.com/users.
2. Parses the response as JSON to get an array of user objects.
3. Selects the user-list container from the DOM.
4. Creates a `<ul>` element to list the user details.
5. Iterates through the user array:
   - Creates `<li>` elements for each user's name and email in the format Name (Email).
   - Appends each `<li> `to the `<ul>`.
6. Appends the `<ul>` to the user-list container.
# Error Handling
- Logs an error message if the fetch operation fails.
# Execution:
- Calls fetchAndUpdateDOM() to fetch user data and update the DOM when the script runs.

  
</details>
 
---- 
` Question 5: Fetch and Cache Data`

 Write a function fetchWithCache that fetches data from the API. If the data has already been fetched before, return the cached data instead of making another network request.
  API URL:https://jsonplaceholder.typicode.com/posts

`Example:`

```javascript

const cache = {}; // Object to store cached data

async function fetchWithCache() {
  //Your code here
}

// Example usage
fetchWithCache().then(data => console.log(data));

  
```

`Topics Covered:`
Error handling, Async/Await, fetch api
 
**Hints:**
- [Error handling](https://www.w3schools.com/js/js_errors.asp), - [Async/Await](https://www.w3schools.com/js/js_async.asp), - [fetch api](https://www.w3schools.com/jsref/api_fetch.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const cache = {}; // Object to store cached data

async function fetchWithCache() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // Check if data is already cached
  if (cache[url]) {
    console.log("Returning cached data");
    return cache[url]; // Return cached data
  }

  try {
    const response = await fetch(url); // Fetch data from the API
    const data = await response.json(); // Parse JSON response
    cache[url] = data; // Store data in cache
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
fetchWithCache().then(data => console.log(data));

  
```

**Explanation:**


## Function: fetchWithCache

### Purpose:
Efficiently fetch data from an API, caching results to avoid redundant requests.

### Steps:

1. **Initialize Cache**:
- An empty cache object is created to store cached data.

2. **Check Cache**:
- If the URL data is already in the cache, log "Returning cached data" and return the cached result.

3. **Fetch Data**:
- If not cached, send a fetch request to the API (https://jsonplaceholder.typicode.com/posts).
- Parse the response as JSON and store it in the cache for future use.
- Return the fetched data.

4. **Error Handling**:
- Logs any errors encountered during the fetch process.

### Usage:
- Calls fetchWithCache(), which either retrieves cached data or fetches and caches the data before logging it to the console.

  
</details>
 
---- 
