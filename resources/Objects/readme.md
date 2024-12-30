
` Question 1:User Profile management`

 Description:Write a program in javascript where define an object userProfile with properties like name, email, age,isAdmin with boolean value and address. The address property itself is an object with street, city, and postalCode,.The object also contains methods like displayProfile to print the user’s profile, and updateEmail to change the users email.

`Example:`

```javascript

function createUserProfile(name, email, age, street, city, postalCode, isAdmin) {
   //code here
}

// Create a user profile
const user = createUserProfile("Alice", "alice@example.com", 28, "123 Elm Street", "Wonderland", "12345", false);

// Display the user's profile
user.displayProfile();

// Update the user's email
user.updateEmail("newalice@example.com");

// Display the updated profile
user.displayProfile();







  
```

`Topics Covered:`
Object
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to create a user profile and perform operations on it
function createUserProfile(name, email, age, street, city, postalCode, isAdmin) {
    // Define the user profile object
    const userProfile = {
        name: name,
        email: email,
        age: age,
        address: {
            street: street,
            city: city,
            postalCode: postalCode
        },
        isAdmin: isAdmin,

        // Method to display user information
        displayProfile: function() {
            console.log("Name":this.name);
            console.log("Email":this.email);
            console.log("Age":this.age);
            console.log("Address": this.address.street,this.address.city , this.address.postalCode);
            console.log(this.isAdmin ? "Yes" : "No");
        },

        // Method to update email
        updateEmail: function(newEmail) {
            this.email = newEmail;
        }
    };

    return userProfile;
}

// Create a user profile
const user = createUserProfile("Alice", "alice@example.com", 28, "123 Elm Street", "Wonderland", "12345", false);

// Display the user's profile
user.displayProfile();

// Update the user's email
user.updateEmail("newalice@example.com");

// Display the updated profile
user.displayProfile();



```

**Explanation:**


-createUserProfile function: This function takes parameters (like name, email, age, etc.) to create and return a userProfile object.

-Inside the returned object, there are two methods:

-displayProfile: To display user information.

-updateEmail: To update the user's email.
</details>
 
---- 

` Question 2:Shopping cart System`

 Description:Write a program in javascript where  define function createShoppingCart where define an shoppingCart object with   array of object which contain different item as a object with properties like name, price, quantity.Write a function addItem  to add new items (with name, price, and quantity) to the cart.The program contain function calculateTotal which calculates the total price based on the quantity and price of the items in the cart.Once you add an item to the cart, it automatically recalculates the total.

`Example:`

```javascript

// Function to create a shopping cart object
function createShoppingCart() {
   //code here
}

// Function to add a new item
function addNewItemToCart(cart, name, price, quantity) {
    const newItem = { name, price, quantity };
    cart.addItem(newItem);  // Add the new item to the cart
}

// Create a shopping cart instance
const myCart = createShoppingCart();

// Display initial total price of the cart
console.log(`Initial Total: $${myCart.calculateTotal()}`);

// Add a new item to the cart
addNewItemToCart(myCart, "Sneakers", 60, 1);

// Display updated total price of the cart
console.log(`Updated Total: $${myCart.calculateTotal()}`);
shoppingCart.addItem({ name: "Sneakers", price: 60, quantity: 1 });

// Updated total price after adding the new item
console.log(`Updated Total: $${shoppingCart.calculateTotal()}`);







  
```

`Topics Covered:`
Object
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to create a shopping cart object
function createShoppingCart() {
    // Shopping Cart object
    const shoppingCart = {
        // An array of objects representing items in the cart
        items: [
            { name: "T-shirt", price: 25, quantity: 2 }, // Item 1
            { name: "Jeans", price: 40, quantity: 1 }    // Item 2
        ],

        // Method to add a new item to the shopping cart
        addItem: function(item) {
            this.items.push(item);  // Adds the item to the 'items' array
        },

        // Method to calculate the total price of all items in the cart
        calculateTotal: function() {
            // Reduce the items array to sum up the total cost (price * quantity for each item)
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    };

    return shoppingCart;
}

// Function to add a new item
function addNewItemToCart(cart, name, price, quantity) {
    const newItem = { name, price, quantity };
    cart.addItem(newItem);  // Add the new item to the cart
}

// Create a shopping cart instance
const myCart = createShoppingCart();

// Display initial total price of the cart
console.log(`Initial Total: $${myCart.calculateTotal()}`);

// Add a new item to the cart
addNewItemToCart(myCart, "Sneakers", 60, 1);

// Display updated total price of the cart
console.log(`Updated Total: $${myCart.calculateTotal()}`);

```

**Explanation:**


-createShoppingCart function: This function returns a shopping cart object that manages the cart's items, adds new items, and calculates the total price.

-The addItem method adds a new item to the cart.
-The calculateTotal method calculates the total cost of all items in the cart.
-addNewItemToCart function: This function allows you to add a new item to the shopping cart by calling the addItem method.
</details>
 
---- 
` Question 3:Storing Contact Information`

 Description:Write a program in javascript  to store and manage contact information (such as name, phone number, email, and address) using JavaScript objects. .where the contactList is an array that will store all the contacts.Define a Contact constructor function that takes four parameters   name, phone, email, and address. This constructor allows us to create multiple contact objects with these properties.The addContact() function accepts the details of a new contact and creates a Contact object using the constructor.The newly created contact is then added to the contactList array using the push() method.The updateContactInfo() method updates the phone number and email of an existing contact. It takes a contact object and the new phone number and email as parameters, then updates the contact’s phone and email properties.This displayContactDetails  method accepts a contact object and logs its details (name, phone number, email, and address) to the console.

`Example:`

```javascript

// Function to create a shopping cart object
// Function to create a Contact object constructor
function createContact(name, phone, email, address) {
    return {
        name: name,
        phone: phone,
        email: email,
        address: address
    };
}

// Function to create a Contact List object
function createContactList() {
    const contactList = [];

    // Method to add a new contact to the list
    

    // Method to display contact details
    

    // Method to update a contact's phone number or email
    

    // Return methods to interact with the contact list
    
}

// Create a contact list instance
const myContactList = createContactList();

// Add initial contacts to the contact list
myContactList.addContact("John Doe", "555-1234", "john@example.com", "123 Elm Street, Springfield");
myContactList.addContact("Jane Smith", "555-5678", "jane@example.com", "456 Oak Avenue, Metropolis");

// Display the first contact's details
myContactList.displayContactDetails(myContactList.contactList[0]);

// Update the second contact's phone number and email
myContactList.updateContactInfo(myContactList.contactList[1], "555-8765", "jane.smith@example.com");

// Display the updated second contact's details
console.log("\nUpdated Contact Details:");
myContactList.displayContactDetails(myContactList.contactList[1]);








  
```

`Topics Covered:`
Object
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to create a Contact object constructor
function createContact(name, phone, email, address) {
    return {
        name: name,
        phone: phone,
        email: email,
        address: address
    };
}

// Function to create a Contact List object
function createContactList() {
    const contactList = [];

    // Method to add a new contact to the list
    function addContact(name, phone, email, address) {
        const newContact = createContact(name, phone, email, address);
        contactList.push(newContact);
    }

    // Method to display contact details
    function displayContactDetails(contact) {
        console.log("Contact Details:");
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Address: ${contact.address}`);
    }

    // Method to update a contact's phone number or email
    function updateContactInfo(contact, newPhone, newEmail) {
        contact.phone = newPhone;
        contact.email = newEmail;
    }

    // Return methods to interact with the contact list
    return {
        contactList,
        addContact,
        displayContactDetails,
        updateContactInfo
    };
}

// Create a contact list instance
const myContactList = createContactList();

// Add initial contacts to the contact list
myContactList.addContact("John Doe", "555-1234", "john@example.com", "123 Elm Street, Springfield");
myContactList.addContact("Jane Smith", "555-5678", "jane@example.com", "456 Oak Avenue, Metropolis");

// Display the first contact's details
myContactList.displayContactDetails(myContactList.contactList[0]);
// Update the second contact's phone number and email
myContactList.updateContactInfo(myContactList.contactList[1], "555-8765", "jane.smith@example.com");

// Display the updated second contact's details
console.log("\nUpdated Contact Details:");
myContactList.displayContactDetails(myContactList.contactList[1]);


```

**Explanation:**


-createContact function: This function returns a contact object with the properties name, phone, email, and address.

-createContactList function: This function creates a contact list and returns an object with methods to:

-addContact: Adds a new contact to the list.
-displayContactDetails: Displays the details of a specific contact.

-updateContactInfo: Updates a contact's phone number and email.
</details>
 
---- 
` Question 4:Storing a Simple Book`

 Description:Write a program in javascript where create a simple Book Inventory System where the user can Store book details including title, author, genre, and publication year.Display all books that have been added to the inventory.Remove a book from the inventory by its title.Search for a book by title or author and display the details.

`Example:`

```javascript

// Function to create and manage the books inventory
function createBookInventory() {
    let books = []; // Array to store books

    // Function to add a book to the inventory

    // Function to display all books in the inventory


    // Function to delete a book by its title
 

    // Return methods to interact with the inventory
 
}

// Create a book inventory instance
const myBookInventory = createBookInventory();

// Example usage
myBookInventory.addBook();  // Adds a new book
myBookInventory.viewBooks(); // Displays all books
myBookInventory.deleteBook(); // Deletes a book by title


  
```

`Topics Covered:`
Object Splice
 
**Hints:**
- [Splice()](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to create and manage the books inventory
function createBookInventory() {
    let books = []; // Array to store books

    // Function to add a book to the inventory
    function addBook() {
        let title = prompt("Enter the book title:");
        let author = prompt("Enter the author's name:");
        // Create a book object and add it to the array
        let book = { title: title, author: author };
        books.push(book);

        alert("Book added successfully!");
    }

    // Function to display all books in the inventory
    function viewBooks() {
        if (books.length === 0) {
            alert("No books in the inventory.");
            return;
        }
        let list = "Books in Inventory:\n";
        for (let i = 0; i < books.length; i++) {
            list += (i + 1) + ". Title: " + books[i].title + ", Author: " + books[i].author + "\n";
        }
        alert(list);
    }

    // Function to delete a book by its title
    function deleteBook() {
        let title = prompt("Enter the title of the book to delete:");
        // Find the index of the book by title
        let index = books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
        if (index === -1) {
            alert("Book not found.");
        } else {
            books.splice(index, 1); // Remove the book from the array
            alert("Book deleted successfully.");
        }
    }

    // Return methods to interact with the inventory
    return {
        addBook,
        viewBooks,
        deleteBook
    };
}

// Create a book inventory instance
const myBookInventory = createBookInventory();

// Example usage
myBookInventory.addBook();  // Adds a new book
myBookInventory.viewBooks(); // Displays all books
myBookInventory.deleteBook(); // Deletes a book by title

```

**Explanation:**


createBookInventory function:

It initializes an empty array books to store the book objects.

It returns an object with three methods: addBook, viewBooks, and deleteBook.
</details>
 
---- 

` Question 5:Storing Favorite Color`

 Description:create a simple JavaScript program that:
Asks the user for their favorite color.
Stores the color in a variable.
Displays the stored favorite color back to the user in a clear message.
Optionally, allow the user to update their favorite color if they wish.

`Example:`

```javascript

// Function to ask the user for their favorite color
function askFavoriteColor() {
//code here
}

// Call the function to start the program
askFavoriteColor();



  
```

`Topics Covered:`
Object prompt
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to ask the user for their favorite color
function askFavoriteColor() {
  // Prompt the user to enter their favorite color
  let favoriteColor = prompt("What is your favorite color?");
  // Check if the user entered a value
  if (favoriteColor) {
    // Display a message with the user's favorite color
    alert("Your favorite color is: " + favoriteColor);
    
    // Optionally, ask the user if they want to change their favorite color
    let changeColor = prompt("Would you like to change your favorite color? (yes/no)");
    
    if (changeColor.toLowerCase() === "yes") {
      askFavoriteColor(); // Recursively call the function to ask again
    } else {
      alert("Thank you for sharing your favorite color!");
    }
  } else {
    alert("Please enter a valid color.");
  }
}

// Call the function to start the program
askFavoriteColor();


```

**Explanation:**

The function askFavoriteColor prompts the user for their favorite color and displays it.

 If the user wishes to change the color, the function calls itself recursively to ask again.
</details>
 
---- 
` Question 6:Simple Counter`

 Description:Write a javascript program where create a Simple Counter  which contain the function increase, decrease, and reset for 
Displays a counter starting at 0.
Increases the counter by 1 
Decreases the counter by 1 
Resets the counter back to 0


`Example:`

```javascript

// Function to create a counter object
function createCounter() {
   //code here
}

// Create a counter object
const counter = createCounter();

// Example usage
counter.increase();
console.log(counter.getCount()); // 1
counter.decrease();
console.log(counter.getCount()); // 0
counter.reset();
console.log(counter.getCount()); // 0




  
```

`Topics Covered:`
Object 
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to create a counter object
function createCounter() {
    let count = 0; // Initialize the counter to 0

    return {
        // Method to increase the counter
        increase: function() {
            count++;
        },

        // Method to decrease the counter
        decrease: function() {
            count--;
        },

        // Method to reset the counter
        reset: function() {
            count = 0;
        },

        // Method to get the current count value
        getCount: function() {
            return count;
        }
    };
}

// Create a counter object
const counter = createCounter();

// Example usage
counter.increase();
console.log(counter.getCount()); // 1
counter.decrease();
console.log(counter.getCount()); // 0
counter.reset();
console.log(counter.getCount()); // 0



```

**Explanation:**

-createCounter function: Returns an object with methods to interact with the counter (increase, decrease, reset, and getCount).
</details>
 
---- 

` Question 7:Weather App (Data Representation)`

 Description:Write a program in javascript where The weatherData object contains hardcoded weather data for a few cities. The data includes:

temperature: The temperature in Celsius.

humidity: The humidity as a percentage.

condition: A short description of the weather (e.g., sunny, cloudy).

The program uses prompt() to ask the user for a city name.Create getWeather function which take city as argument and  checks if the entered city exists in the weatherData object.
If the city exists, it logs the weather information (temperature, humidity, and condition).
If the city does not exist in the object, it outputs a message saying that the data is not available.



`Example:`

```javascript

function getWeather(city) {
 //code here
  
}

// Example usage
const city = prompt("Enter a city name:");  // Prompt the user to enter a city
getWeather(city);  // Call the function to display the weather



  
```

`Topics Covered:`
Object 
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to create a counter object
function getWeather(city) {
  const weatherData = {
    "New York": {
      temperature: 25,
      humidity: 60,
      condition: "Sunny"
    },
    "London": {
      temperature: 15,
      humidity: 80,
      condition: "Cloudy"
    },
    "Paris": {
      temperature: 18,
      humidity: 70,
      condition: "Rainy"
    },
    "Tokyo": {
      temperature: 22,
      humidity: 65,
      condition: "Clear"
    }
  };
  // Check if the city exists in the predefined data
  if (weatherData[city]) {
    const data = weatherData[city];
    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${data.temperature}°C`);
    console.log(`Humidity: ${data.humidity}%`);
    console.log(`Condition: ${data.condition}`);
  } else {
    console.log("Sorry, weather data for this city is not available.");
  }
}

// Example usage
const city = prompt("Enter a city name:");  // Prompt the user to enter a city
getWeather(city);  // Call the function to display the weather

```

**Explanation:**

-The getWeather function checks the predefined weather data for a given city and displays the temperature, humidity, and condition.

-If the city is not found in the data, it displays an error message.
</details>
 
---- 
` Question 8:Employee Directory System`

 Description:Write a program in javascript where create a array employeeDirectory to store employee objects.each employee object contains name, jobTitle, department.Create addEmployee function accepts three parameters:
 name, jobTitle, and department.
It creates an employee object and adds it to the employeeDirectory array.The viewAllEmployees function loops through the employeeDirectory array and prints the details of all employees.If the directory is empty, it displays a message saying no employees are available.The searchEmployee function takes a name as input and checks if an employee with that name exists in the directory.If an employee is found, their details are displayed; otherwise, a message indicating no employee was found is shown.



`Example:`

```javascript

// Employee Directory System
// Employee Directory Array
let employeeDirectory = [];

// Function to add a new employee
function addEmployee(name, jobTitle, department) {
  //code here
}

// Function to view all employees
function viewAllEmployees() {
 //code here
}

// Function to search for an employee by name
function searchEmployee(name) {
 //code here
}

// Example usage

// Adding employees
addEmployee("John Doe", "Software Engineer", "IT");
addEmployee("Jane Smith", "Marketing Manager", "Marketing");
addEmployee("Sam Brown", "HR Specialist", "Human Resources");

// Viewing all employees
viewAllEmployees();

// Searching for an employee
searchEmployee("Jane Smith");
searchEmployee("Alice Green");  
// Non-existing employee








  
```

`Topics Covered:`
Object 
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Employee Directory System
// Employee Directory Array
let employeeDirectory = [];

// Function to add a new employee
function addEmployee(name, jobTitle, department) {
  const employee = {
    name: name,
    jobTitle: jobTitle,
    department: department
  };
  
  employeeDirectory.push(employee);  // Add employee to the directory
  console.log(`${name} has been added to the directory.`);
}

// Function to view all employees
function viewAllEmployees() {
  if (employeeDirectory.length === 0) {
    console.log("No employees in the directory.");
  } else {
    console.log("Employee Directory:");
    employeeDirectory.forEach((employee, index) => {
      console.log(`${index + 1}. Name: ${employee.name}, Job Title: ${employee.jobTitle}, Department: ${employee.department}`);
    });
  }
}

// Function to search for an employee by name
function searchEmployee(name) {
  const foundEmployee = employeeDirectory.find(employee => employee.name.toLowerCase() === name.toLowerCase());

  if (foundEmployee) {
    console.log(`Employee Found: Name: ${foundEmployee.name}, Job Title: ${foundEmployee.jobTitle}, Department: ${foundEmployee.department}`);
  } else {
    console.log(`No employee found with the name "${name}".`);
  }
}

// Example usage

// Adding employees
addEmployee("John Doe", "Software Engineer", "IT");
addEmployee("Jane Smith", "Marketing Manager", "Marketing");
addEmployee("Sam Brown", "HR Specialist", "Human Resources");

// Viewing all employees
viewAllEmployees();

// Searching for an employee
searchEmployee("Jane Smith");
searchEmployee("Alice Green");  
// Non-existing employee


```

**Explanation:**

The Employee Directory System allows adding, viewing, and searching for employees by name. 

-It stores employee details in an array and provides functions to manage and retrieve employee information.
</details>
 
---- 

` Question 9:Task manangement (To do list)`

 Description:Write a program in javascript where create a array an array tasks to store all tasks.Each task contain name, completed boolean value that indicates whether the task is completed (true or false).Create The addTask function accepts a task name as a parameter and adds a new task to the tasks array. It ensures that the task name is not empty.Create  completeTask function takes the task name as a parameter, searches for the task in the tasks array, and marks it as completed by setting completed: true.The removeTask function finds a task by its name and removes it from the tasks array if it exists.Create the viewTasks function displays all tasks.
 
It separates them into two categories:

Pending Tasks: Tasks that are not yet completed.

Completed Tasks: Tasks that are marked as completed.


`Example:`

```javascript

// Task Management (To-Do List) System

// Task array to store the list of tasks
let tasks = [];

// Function to add a task
function addTask(taskName) {
//code here
}
// Function to mark a task as completed
function completeTask(taskName) {
 //code here
}

// Function to remove a task
function removeTask(taskName) {
 //code here
}
// Function to view all tasks (pending and completed)
function viewTasks() {
//code here
}

// Example usage
addTask("Buy groceries");
addTask("Walk the dog");
addTask("Finish JavaScript project");

viewTasks();  // View all tasks

completeTask("Buy groceries");  // Mark a task as completed




  
```

`Topics Covered:`
Object 
 
**Hints:**
- [Object](https://www.w3schools.com/js/js_objects.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Task Management (To-Do List) System

// Task array to store the list of tasks
let tasks = [];

// Function to add a task
function addTask(taskName) {
  if (taskName === '') {
    console.log("Please enter a valid task.");
    return;
  }
  const task = {
    name: taskName,
    completed: false
  };
  tasks.push(task);  // Add the task to the tasks array
  console.log(`Task: "${taskName}" has been added.`);
}
// Function to mark a task as completed
function completeTask(taskName) {
  const task = tasks.find(task => task.name === taskName && !task.completed);

  if (task) {
    task.completed = true;  // Mark the task as completed
    console.log(`Task: "${taskName}" has been marked as completed.`);
  } else {
    console.log(`Task: "${taskName}" not found or already completed.`);
  }
}

// Function to remove a task
function removeTask(taskName) {
  const taskIndex = tasks.findIndex(task => task.name === taskName);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);  // Remove the task from the array
    console.log(`Task: "${taskName}" has been removed.`);
  } else {
    console.log(`Task: "${taskName}" not found.`);
  }
}
// Function to view all tasks (pending and completed)
function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks in the list.");
    return;
  }
  console.log("Pending Tasks:");
  tasks.filter(task => !task.completed).forEach(task => console.log(`- ${task.name}`));
  console.log("\nCompleted Tasks:");
  tasks.filter(task => task.completed).forEach(task => console.log(`- ${task.name}`));
}

// Example usage
addTask("Buy groceries");
addTask("Walk the dog");
addTask("Finish JavaScript project");

viewTasks();  // View all tasks

completeTask("Buy groceries");  // Mark a task as completed


```

**Explanation:**

-The Task Management System allows adding, completing, removing, and viewing tasks, with tasks tracked by their completion status. 

-It provides clear outputs for each action and handles task addition, completion, and removal based on user input.
</details>
 
---- 