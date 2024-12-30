# DOM

###### ` Question 1: Add a New Item to a List`

 Write a function addItemToList that adds a new list item with a specified text to an unordered list with a given ID.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  //Your code here
  <script>
    function addItemToList(listId, text) {
      //Your code here
    }
  </script>
</body>
</html>


  
```

`Topics Covered:`
Dom methods & properties
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  <ul id="todoList"></ul>
  <button onclick="addItemToList('todoList', 'Learn JavaScript')">Add Item</button>

  <script>
    function addItemToList(listId, text) {
      const ul = document.getElementById(listId);
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    }
  </script>
</body>
</html>

  
```

**Explanation:**

- The HTML document contains:
- An unordered list (`<ul>`) with the ID of "todoList".
- A button with an onclick event that calls the addItemToList function when clicked.

## JavaScript Function: addItemToList

- **Parameters:**
- listId: The ID of the `<ul>` element to which the item will be added.
- text: The text content for the new list item.

- **Function Details:**
  1. It uses document.getElementById(listId) to get the `<ul>` element by its ID.
  2. It creates a new list item (`<li>`) using document.createElement('li').
  3. The text content of the `<li>` is set to the provided text using li.textContent.
  4. The new `<li>` is appended to the `<ul>` using ul.appendChild(li).

## Button Behavior:

- When the button is clicked:
  - The addItemToList function adds a new `<li>` element with the text "Learn JavaScript" to the list with the ID "todoList".

  
</details>
 
---- 
###### ` Question 2: Delete All Items from a List`

 Write a function clearList that removes all list items from an unordered list with the given ID.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  // Your code here

  <script>
    //Your code here
    }
  </script>
</body>
</html>

  
```

`Topics Covered:`
Dom methods & properties
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  <ul id="todoList">
    <li>Task 1</li>
    <li>Task 2</li>
  </ul>
  <button onclick="clearList('todoList')">Clear List</button>

  <script>
    function clearList(listId) {
      const ul = document.getElementById(listId);
      ul.innerHTML = ''; // Removes all child elements
    }
  </script>
</body>
</html>


  
```

**Explanation:**


## HTML Structure:
- Contains an unordered list (`<ul>`) with the id of todoList, initially populated with two list items:
  - "Task 1"
  - "Task 2"
- Includes a button with an onclick event that calls the clearList function when clicked.

## JavaScript Function: clearList
- **Purpose**: Clears all items in the specified list.
- **Parameters**: 
  - listId: The ID of the `<ul>` element to be cleared.
- **Steps**:
  1. Uses document.getElementById(listId) to select the `<ul> `element by its ID.
  2. Sets the innerHTML property of the `<ul>` to an empty string (''), which removes all its child elements.

## Functionality:
- When the button is clicked:
  1. The clearList function is triggered.
  2. The function clears all the list items inside the `<ul>` with the ID todoList.
  3. After clicking, the `<ul>` becomes empty.
  
</details>
 
---- 
###### ` Question 3: Edit a Specific List Item`

 Write a function editListItem that updates the text of a specific list item at a given index in an unordered list with the given ID.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit List Item</title>
</head>
<body>
  //Your code here
  <script>
    function editListItem(listId, index, newText) {
     //Your code here
    }

    document.getElementById('editItemButton').addEventListener('click', () => {
      editListItem('todoList', 1, 'Learn DOM');
    });
  </script>
</body>
</html>


  
```

`Topics Covered:`
Dom methods & properties
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit List Item</title>
</head>
<body>
  <ul id="todoList">
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
  </ul>
  <button id="editItemButton">Edit Item</button>

  <script>
    function editListItem(listId, index, newText) {
      const list = document.getElementById(listId);
      if (list.children[index]) {
        list.children[index].textContent = newText;
      } else {
        alert('Index out of range');
      }
    }

    document.getElementById('editItemButton').addEventListener('click', () => {
      editListItem('todoList', 1, 'Learn DOM');
    });
  </script>
</body>
</html>


  
```

**Explanation:**


## HTML Structure:
- A basic HTML page with an unordered list (`<ul>`) containing three list items (`<li>`) representing tasks.
- A button (`<button>`) labeled "Edit Item" is included below the list.

## JavaScript Functionality:

### editListItem(listId, index, newText):
- This function modifies the text of a specific list item in the given list (using the list ID) at the specified index.
- It checks if the index exists in the list, and if it does, it changes the text content to newText. If the index is out of range, it shows an alert.

### Event Listener:
- An event listener is added to the "Edit Item" button:
  - When the button is clicked, it calls editListItem('todoList', 1, 'Learn DOM') to change the text of the second item (index 1) in the list to "Learn DOM".
  
</details>
 
---- 
###### ` Question 4: Live Search with Dynamic Results`

 Write a function liveSearch that dynamically filters and displays search results as the user types in an input field. The function should match the input against a list of items in an array and display only the matching items in real time, without requiring a page reload.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Search</title>
  <style>
    #results li {
      list-style: none;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <h1>Live Search Example</h1>
  <input type="text" id="searchBar" placeholder="Type to search..." />
  <ul id="results"></ul>

  <script>
    // Sample list of items
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

    // Function to perform live search
    function liveSearch(searchInputId, resultContainerId, items) {
      //Your code here
    }

    // Initialize live search
    liveSearch("searchBar", "results", items);
  </script>
</body>
</html>


  
```

`Topics Covered:`
Array methods i.e. filter(), toLowerCase(),includes(), Dom methods i.e. innerHtml,appendChild, textContent
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm), - [Array methods](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Search</title>
  <style>
    #results li {
      list-style: none;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <h1>Live Search Example</h1>
  <input type="text" id="searchBar" placeholder="Type to search..." />
  <ul id="results"></ul>

  <script>
    // Sample list of items
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

    // Function to perform live search
    function liveSearch(searchInputId, resultContainerId, items) {
      const searchInput = document.getElementById(searchInputId);
      const resultContainer = document.getElementById(resultContainerId);

      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        resultContainer.innerHTML = ""; // Clear previous results

        // Filter items based on query
        const filteredItems = items.filter(item => item.toLowerCase().includes(query));

        // Display the filtered results
        filteredItems.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          resultContainer.appendChild(li);
        });
      });
    }

    // Initialize live search
    liveSearch("searchBar", "results", items);
  </script>
</body>
</html>


  
```

**Explanation:**


## HTML Structure:
- A search bar (`<input>`) for entering search queries.
- An unordered list (`<ul>`) with the ID results where the search results will be displayed.
- A heading (`<h1>`) labeled "Live Search Example".

## CSS:
- Simple styling for the list items in the results (#results li), removing the default list style and adding some margin.

## JavaScript Functionality:

### Sample List:
- A list of items (items) is predefined (fruits).

### liveSearch(searchInputId, resultContainerId, items) Function:
- Adds an event listener on the search input field to detect changes (input event).
- Retrieves the search query and converts it to lowercase for case-insensitive searching.
- Clears previous search results from the result container.
- Filters the items array based on the query (only items that include the query are shown).
- Displays the filtered results by creating `<li>` elements for each matching item and appending them to the results list.

### Initialization:
- The liveSearch function is called with the search input ID (searchBar), the results container ID (results), and the predefined list of items (items).
  
</details>
 
---- 
###### ` Question 5: Collapsible Sidebar`

 Write a function toggleSidebar that toggles the visibility of a sidebar when a button is clicked.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Collapsible Sidebar</title>
  <style>
    #mySidebar {
      width: 200px;
      height: 100%;
      background-color: lightgray;
      position: fixed;
      left: -200px;
      transition: left 0.3s;
    }
    #mySidebar.open {
      left: 0;
    }
  </style>
</head>
<body>
  <div id="mySidebar">Sidebar Content</div>
  <button id="toggleButton">Toggle Sidebar</button>

  <script>
    function toggleSidebar(sidebarId) {
      //Your code here
    }
  </script>
</body>
</html>


  
```

`Topics Covered:`
Dom methods i.e. innerHtml,appendChild, textContent
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Collapsible Sidebar</title>
  <style>
    #mySidebar {
      width: 200px;
      height: 100%;
      background-color: lightgray;
      position: fixed;
      left: -200px;
      transition: left 0.3s;
    }
    #mySidebar.open {
      left: 0;
    }
  </style>
</head>
<body>
  <div id="mySidebar">Sidebar Content</div>
  <button id="toggleButton">Toggle Sidebar</button>

  <script>
    function toggleSidebar(sidebarId) {
      const sidebar = document.getElementById(sidebarId);
      sidebar.classList.toggle('open');
    }
    document.getElementById('toggleButton').addEventListener('click', () => {
      toggleSidebar('mySidebar');
    });
  </script>
</body>
</html>


  
```

**Explanation:**


## HTML Structure:
- A div with the ID mySidebar, representing the sidebar content.
- A button (`<button>`) with the ID toggleButton, which will be used to toggle the sidebar.

## CSS Styling:
- The sidebar (#mySidebar) has a width of 200px, height of 100%, a light gray background, and is fixed on the left side of the screen.
- Initially, the sidebar is hidden off-screen with left: -200px.
- When the sidebar has the open class, it slides into view with left: 0.
- A transition property is used to animate the movement of the sidebar.

## JavaScript Functionality:

### toggleSidebar(sidebarId) Function:
- This function toggles the open class on the sidebar, which triggers the CSS transition to slide the sidebar in or out.

### Event Listener:
- An event listener is added to the toggle button:
- When the button is clicked, it calls toggleSidebar('mySidebar') to toggle the sidebar's visibility.
  
</details>
 
---- 
###### ` Question 6: Auto-Save Form Data`

 Write a function autoSaveFormData that saves the data entered in a form to localStorage every time a user types. The saved data should be restored when the page is reloaded.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  <form id="userForm">
    <input type="text" id="name" placeholder="Name" />
    <input type="text" id="email" placeholder="Email" />
  </form>

  <script>
    function autoSaveFormData(formId) {
      //Your code here
    }

    autoSaveFormData("userForm");
  </script>
</body>
</html>


  
```

`Topics Covered:`
Dom methods, localStorage concept
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm), - [localStorage concept](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  <form id="userForm">
    <input type="text" id="name" placeholder="Name" />
    <input type="text" id="email" placeholder="Email" />
  </form>

  <script>
    function autoSaveFormData(formId) {
      const form = document.getElementById(formId);
      const inputs = form.querySelectorAll("input");

      inputs.forEach(input => {
        input.value = localStorage.getItem(input.id) || '';

        input.addEventListener("input", () => {
          localStorage.setItem(input.id, input.value);
        });
      });
    }

    autoSaveFormData("userForm");
  </script>
</body>
</html>


  
```

**Explanation:**


## HTML Structure:
- A form (`<form>`) with the ID userForm, containing two text input fields for name and email.

## JavaScript Functionality:

### autoSaveFormData(formId) Function:
- This function enables auto-saving of input field data in the form.
- It selects all input fields within the form using querySelectorAll("input").
- For each input field:
  - The value is set to what is stored in localStorage using the input's ID as the key (if there's no value, it defaults to an empty string).
  - An input event listener is added to save the current value of the input field to localStorage every time it changes.

### Initialization:
- The function autoSaveFormData("userForm") is called to activate auto-saving for the form with the ID userForm.
  
</details>
 
---- 
###### ` Question 7: Copy to Clipboard`

 Write a function copyToClipboard that copies the text content of an element with a specific ID to the clipboard when a button is clicked.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Copy to Clipboard</title>
</head>
<body>
  <p id="textToCopy">This text will be copied!</p>
  <button id="copyButton">Copy</button>

  <script>
    function copyToClipboard(elementId) {
      //Your code here
    }

    document.getElementById('copyButton').addEventListener('click', () => {
      copyToClipboard('textToCopy');
    });
  </script>
</body>
</html>


  
```

`Topics Covered:`
Dom methods, Clipboard methods
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm), - [Clipboard methods](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Copy to Clipboard</title>
</head>
<body>
  <p id="textToCopy">This text will be copied!</p>
  <button id="copyButton">Copy</button>

  <script>
    function copyToClipboard(elementId) {
      const text = document.getElementById(elementId).textContent;
      navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard!');
      });
    }

    document.getElementById('copyButton').addEventListener('click', () => {
      copyToClipboard('textToCopy');
    });
  </script>
</body>
</html>

  
```

**Explanation:**


## HTML Structure:
- A paragraph (`<p>`) with the ID textToCopy, containing the text that will be copied.
- A button (`<button>`) with the ID copyButton, which will trigger the copy action.

## JavaScript Functionality:

### copyToClipboard(elementId) Function:
- This function retrieves the text content of the element with the specified ID (elementId).
- It then uses the navigator.clipboard.writeText() method to copy the text to the clipboard.
- If the copy is successful, it shows an alert with the message "Text copied to clipboard!".

### Event Listener:
- An event listener is added to the copy button:
  - When the button is clicked, it calls the copyToClipboard('textToCopy') function to copy the text from the paragraph with the ID textToCopy.
  
</details>
 
---- 
###### ` Question 8: Accordion Menu`

 Write a function createAccordion that takes a list of section titles and contents. When a section title is clicked, its content expands, and the other sections collapse.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  <div id="accordion"></div>

  <script>
    function createAccordion(sections) {
     //Your code here
    }

    createAccordion([
      { title: "Section 1", content: "Content 1" },
      { title: "Section 2", content: "Content 2" },
    ]);
  </script>
</body>
</html>

  
```

`Topics Covered:`
Dom methods
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<body>
  <div id="accordion"></div>

  <script>
    function createAccordion(sections) {
      const container = document.getElementById("accordion");

      sections.forEach(({ title, content }) => {
        const header = document.createElement("h3");
        const body = document.createElement("div");

        header.textContent = title;
        body.textContent = content;
        body.style.display = "none";

        header.addEventListener("click", () => {
          body.style.display = body.style.display === "none" ? "block" : "none";
        });

        container.appendChild(header);
        container.appendChild(body);
      });
    }

    createAccordion([
      { title: "Section 1", content: "Content 1" },
      { title: "Section 2", content: "Content 2" },
    ]);
  </script>
</body>
</html>

  
```

**Explanation:**


## HTML Structure:
- A div with the ID accordion, which will contain the collapsible accordion sections.

## JavaScript Functionality:

### createAccordion(sections) Function:
- This function takes an array of objects (sections), each containing a title and content.
- For each section:
  - It creates an h3 element for the title and a div for the content.
  - The content div is initially hidden by setting body.style.display to "none".
  - An event listener is added to the header (h3):
  - When clicked, it toggles the visibility of the content (div), switching between none and block.
  - The header and content div are appended to the accordion container.

## Initialization:
- The createAccordion function is called with an array containing two sections, each with a title and content.
  
</details>
 
---- 
###### ` Question 9: Add Multiple Items to a List`

 Write a function addMultipleItemsToList that adds multiple list items to an unordered list with a given ID.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Multiple Items</title>
</head>
<body>
  <ul id="todoList"></ul>
  <button id="addItemsButton">Add Items</button>

  <script>
    // Function to add multiple items to the list
    function addMultipleItemsToList(listId, items) {
      //Your code here
    }

    // Add event listener to the button
    const addItemsButton = document.getElementById('addItemsButton');
    addItemsButton.addEventListener('click', () => {
      addMultipleItemsToList('todoList', ['Learn JavaScript', 'Practice DOM', 'Build Projects']);
    });
  </script>
</body>
</html>

  
```

`Topics Covered:`
Dom methods, Array methods i.e. forEach()
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm), - [Array methods i.e. forEach()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Multiple Items</title>
</head>
<body>
  <ul id="todoList"></ul>
  <button id="addItemsButton">Add Items</button>

  <script>
    // Function to add multiple items to the list
    function addMultipleItemsToList(listId, items) {
      const list = document.getElementById(listId);

      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }

    // Add event listener to the button
    const addItemsButton = document.getElementById('addItemsButton');
    addItemsButton.addEventListener('click', () => {
      addMultipleItemsToList('todoList', ['Learn JavaScript', 'Practice DOM', 'Build Projects']);
    });
  </script>
</body>
</html>

  
```

**Explanation:**


## HTML Structure:
- An empty unordered list (`<ul>`) with the ID todoList, where items will be added.
- A button (`<button>`) with the ID addItemsButton, which will trigger adding the items to the list.

## JavaScript Functionality:

### addMultipleItemsToList(listId, items) Function:
- This function takes the list ID (listId) and an array of items (items).
- For each item in the array:
  - It creates a new li element.
  - Sets the text content of the li to the item.
  - Appends the li element to the specified list (listId).

### Button Event Listener:
- An event listener is added to the "Add Items" button:
- When clicked, it calls addMultipleItemsToList('todoList', ['Learn JavaScript', 'Practice DOM', 'Build Projects']), which adds the three items to the list.
  
</details>
 
---- 
###### ` Question 10: Replace All List Items`

 Write a function replaceListItems that replaces all existing list items in an unordered list with a new set of items.

`Example:`

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Replace List Items</title>
</head>
<body>
  <ul id="todoList">
    <li>Old Item 1</li>
    <li>Old Item 2</li>
    <li>Old Item 3</li>
  </ul>
  <button id="replaceItemsButton">Replace Items</button>

  <script>
    // Function to replace all items in the list
    function replaceListItems(listId, items) {
      //Your code here
    }

    // Add event listener to the button
    const replaceItemsButton = document.getElementById('replaceItemsButton');
    replaceItemsButton.addEventListener('click', () => {
      replaceListItems('todoList', ['New Item 1', 'New Item 2', 'New Item 3']);
    });
  </script>
</body>
</html>

  
```

`Topics Covered:`
Dom methods
 
**Hints:**
- [Dom methods & properties](https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Replace List Items</title>
</head>
<body>
  <ul id="todoList">
    <li>Old Item 1</li>
    <li>Old Item 2</li>
    <li>Old Item 3</li>
  </ul>
  <button id="replaceItemsButton">Replace Items</button>

  <script>
    // Function to replace all items in the list
    function replaceListItems(listId, items) {
      const list = document.getElementById(listId);
      list.innerHTML = ''; // Clear the list

      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }

    // Add event listener to the button
    const replaceItemsButton = document.getElementById('replaceItemsButton');
    replaceItemsButton.addEventListener('click', () => {
      replaceListItems('todoList', ['New Item 1', 'New Item 2', 'New Item 3']);
    });
  </script>
</body>
</html>

  
```

**Explanation:**


## HTML Structure:
- An unordered list (`<ul>`) with the ID todoList, containing three initial list items (`<li>`).
- A button (`<button>`) with the ID replaceItemsButton, which will trigger replacing the list items.

## JavaScript Functionality:

### replaceListItems(listId, items) Function:
- Clears the current list by setting list.innerHTML = '';.
- Loops through the items array and creates new list items (`<li>`).
- Appends each new item to the specified list (listId).

### Button Event Listener:
- An event listener is added to the "Replace Items" button.
- When clicked, it calls replaceListItems('todoList', ['New Item 1', 'New Item 2', 'New Item 3']), which replaces the old items with the new ones.
  
</details>
 
---- 
