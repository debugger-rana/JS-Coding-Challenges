# Prototype
` Question 1:Vehicle Management System`
 Description:The Vehicle class will be the base class that holds the common properties of all vehicles (make, model, and year).The Car and Truck classes will inherit from the Vehicle class and extend it by adding their own specific properties (doors for cars, payload capacity for trucks).
Both Car and Truck should have their own method to display detailed information about the vehicle, overriding the displayInfo() method from the Vehicle class.
.
`Example:`

```javascript
// Vehicle class (Base class)
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Vehicle.prototype.displayInfo = function() {
  ///code here
};
// Car class (inherits from Vehicle)
function Car(make, model, year, doors) {
//code here
}
Car.prototype = Object.create(Vehicle.prototype); // Inherit methods
Car.prototype.constructor = Car;
Car.prototype.displayInfo = function() {
  //code here
};

// Truck class (inherits from Vehicle)
function Truck(make, model, year, payloadCapacity) {
 //code here
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.displayInfo = function() {
  //code here
};
// Usage
let car = new Car("Toyota", "Corolla", 2020, 4);
let truck = new Truck("Ford", "F-150", 2021, 3);
car.displayInfo(); 
```
`Topics Covered:`
Prototype
 
**Hints:**
- [Prototype](https://www.w3schools.com/js/js_object_prototypes.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:
```javascript
// Vehicle class (Base class)
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.displayInfo = function() {
  console.log(`Vehicle: ${this.make} ${this.model} (${this.year})`);
};

// Car class (inherits from Vehicle)
function Car(make, model, year, doors) {
  Vehicle.call(this, make, model, year);  // Call Vehicle constructor
  this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype); // Inherit methods
Car.prototype.constructor = Car;

Car.prototype.displayInfo = function() {
  console.log(`Car: ${this.make} ${this.model} (${this.year}) with ${this.doors} doors`);
};

// Truck class (inherits from Vehicle)
function Truck(make, model, year, payloadCapacity) {
  Vehicle.call(this, make, model, year);
  this.payloadCapacity = payloadCapacity;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.displayInfo = function() {
  console.log(`Truck: ${this.make} ${this.model} (${this.year}) with payload capacity of ${this.payloadCapacity} tons`);
};
// Usage
let car = new Car("Toyota", "Corolla", 2020, 4);
let truck = new Truck("Ford", "F-150", 2021, 3);
car.displayInfo(); 
 // Car: Toyota Corolla (2020) with 4 doors

```
**Explanation:**
-The code defines a base class Vehicle and two subclasses: Car and Truck. The subclasses inherit from Vehicle using call() and Object.

-create() to share common properties and methods while adding specific attributes, like doors for Car and payloadCapacity for Truck. The displayInfo() method is overridden in each subclass to provide detailed information about the specific vehicle type.
</details>
 
---- 
` Question 2:Creating a Base  shape class`

 Description:Create a simple JavaScript program that defines:
A base Shape class that holds common properties (like x, y for position).Specific shape classes (like Circle and Rectangle) that inherit from the Shape class and have their own unique properties (like radius for circles and width, height for rectangles).
Each shape should have a displayInfo method to print its properties.

.
`Example:`

```javascript
// Base Shape Class
function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.displayInfo = function() {
 //code here
};

// Circle Class (inherits from Shape)
function Circle(x, y, radius) {
 //code here
}

Circle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Circle.prototype.constructor = Circle;

// Override displayInfo for Circle
Circle.prototype.displayInfo = function() {
 //code here
};

// Rectangle Class (inherits from Shape)
function Rectangle(x, y, width, height) {
  //code here
}

Rectangle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Rectangle.prototype.constructor = Rectangle;

// Override displayInfo for Rectangle
Rectangle.prototype.displayInfo = function() {
  //code here
};

// Usage

// Creating a Circle object
let circle = new Circle(10, 20, 5);
circle.displayInfo(); 
// Expected Output: "Circle at position (10, 20) with radius 5"

// Creating a Rectangle object
let rectangle = new Rectangle(30, 40, 10, 20);
rectangle.displayInfo(); 
// Expected Output: "Rectangle at position (30, 40) with width 10 and height 20"

```
`Topics Covered:`
Prototype
 
**Hints:**
- [Prototype](https://www.w3schools.com/js/js_object_prototypes.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:
```javascript
// Base Shape Class
function Shape(x, y) {
  this.x = x;
  this.y = y;
}
Shape.prototype.displayInfo = function() {
  console.log(`Shape at position (${this.x}, ${this.y})`);
};
// Circle Class (inherits from Shape)
function Circle(x, y, radius) {
  Shape.call(this, x, y);  // Call Shape constructor
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Circle.prototype.constructor = Circle;
// Override displayInfo for Circle
Circle.prototype.displayInfo = function() {
  console.log(`Circle at position (${this.x}, ${this.y}) with radius ${this.radius}`);
};
// Rectangle Class (inherits from Shape)
function Rectangle(x, y, width, height) {
  Shape.call(this, x, y);  // Call Shape constructor
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Rectangle.prototype.constructor = Rectangle;
// Override displayInfo for Rectangle
Rectangle.prototype.displayInfo = function() {
  console.log(`Rectangle at position (${this.x}, ${this.y}) with width ${this.width} and height ${this.height}`);
};
// Usage
// Creating a Circle object
let circle = new Circle(10, 20, 5);
circle.displayInfo(); 
// Expected Output: "Circle at position (10, 20) with radius 5"

// Creating a Rectangle object
let rectangle = new Rectangle(30, 40, 10, 20);
rectangle.displayInfo(); 
// Expected Output: "Rectangle at position (30, 40) with width 10 and height 20"


```
**Explanation:**
-The code defines a base class Shape with position properties and a displayInfo() method. 

-The Circle and Rectangle subclasses inherit from Shape, adding specific properties and overriding displayInfo() to display details about the respective shapes' position and dimensions.
</details>
 
---- 
` Question 3:User authentication system`

 Description:Build a basic user authentication system that allows for:
User Registration: Register a new user with a username and password.
User Login: Log in by verifying the username and password.
`Example:`

```javascript
// Simple User Authentication System

class AuthenticationSystem {
  constructor() {
    this.user = null;  // Initially, no user is registered
  }

  // Register a new user
  registerUser(username, password) {
   //code here
  }

  // Login with username and password
  login(username, password) {
   //code here
}

// Usage example

const authSystem = new AuthenticationSystem();

// Register a user
console.log(authSystem.registerUser("john_doe", "password123"));
// Expected Output: "User registered successfully!"

// Try to register again (should give an error)
console.log(authSystem.registerUser("john_doe", "newpassword"));
// Expected Output: "A user is already registered."

// Login with correct credentials
console.log(authSystem.login("john_doe", "password123"));
// Expected Output: "Login successful!"

// Login with incorrect credentials
console.log(authSystem.login("john_doe", "wrongpassword"));
// Expected Output: "Invalid username or password!"
```
`Topics Covered:`
Prototype
 
**Hints:**
- [Prototype](https://www.w3schools.com/js/js_object_prototypes.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:
```javascript
// Simple User Authentication System

class AuthenticationSystem {
  constructor() {
    this.user = null;  // Initially, no user is registered
  }

  // Register a new user
  registerUser(username, password) {
    if (this.user) {
      return "A user is already registered.";
    }
    this.user = { username, password };
    return "User registered successfully!";
  }

  // Login with username and password
  login(username, password) {
    if (this.user && this.user.username === username && this.user.password === password) {
      return "Login successful!";
    }
    return "Invalid username or password!";
  }
}

// Usage example

const authSystem = new AuthenticationSystem();

// Register a user
console.log(authSystem.registerUser("john_doe", "password123"));
// Expected Output: "User registered successfully!"

// Try to register again (should give an error)
console.log(authSystem.registerUser("john_doe", "newpassword"));
// Expected Output: "A user is already registered."

// Login with correct credentials
console.log(authSystem.login("john_doe", "password123"));
// Expected Output: "Login successful!"

// Login with incorrect credentials
console.log(authSystem.login("john_doe", "wrongpassword"));
// Expected Output: "Invalid username or password!"
```
**Explanation:**
-The code defines a simple AuthenticationSystem class that allows user registration and login, ensuring only one user can be registered at a time. 

-It checks credentials during login and provides appropriate messages for successful login or errors.
</details>
 
---- 
`Question 4:Timer System`

Description:
Start: Starts the timer.
Stop: Stops the timer and shows the elapsed time.
Get Elapsed Time: Shows how much time has passed since the timer started.
`Example:`

```javascript
class Timer {
  constructor() {
    this.startTime = 0; // Time when the timer started
    this.elapsedTime = 0; // Time elapsed since the timer started
    this.isRunning = false; // Timer state
  }

  // Start the timer
  start() {
   //code here
  }

  // Stop the timer and show elapsed time
  stop() {
    //code here
  }

  // Get the elapsed time
  getElapsedTime() {
   //code herre
  }
}

// Usage example
const timer = new Timer();

// Start the timer
timer.start();
// Expected Output: "Timer started."

// Wait for a few seconds, then check elapsed time
setTimeout(() => {
  timer.getElapsedTime();
  // Expected Output: "Elapsed time: 3 seconds." (depending on how long you wait)
}, 3000);

// Stop the timer after a few more seconds
setTimeout(() => {
  timer.stop();
  // Expected Output: "Timer stopped at 5 seconds."
}, 5000);

```
`Topics Covered:`
Prototype
 
**Hints:**
- [Prototype](https://www.w3schools.com/js/js_object_prototypes.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:
```javascript
class Timer {
  constructor() {
    this.startTime = 0; // Time when the timer started
    this.elapsedTime = 0; // Time elapsed since the timer started
    this.isRunning = false; // Timer state
  }
  // Start the timer
  start() {
    if (this.isRunning) {
      console.log("Timer is already running.");
      return;
    }
    this.startTime = Date.now();
    this.isRunning = true;
    console.log("Timer started.");
  }
  // Stop the timer and show elapsed time
  stop() {
    if (!this.isRunning) {
      console.log("Timer is not running.");
      return;
    }
    this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000); // Time in seconds
    this.isRunning = false;
    console.log(`Timer stopped at ${this.elapsedTime} seconds.`);
  }
  // Get the elapsed time
  getElapsedTime() {
    if (this.isRunning) {
      this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
    }
    console.log(`Elapsed time: ${this.elapsedTime} seconds.`);
  }
}
// Usage example
const timer = new Timer();
// Start the timer
timer.start();
// Expected Output: "Timer started."
// Wait for a few seconds, then check elapsed time
setTimeout(() => {
  timer.getElapsedTime();
  // Expected Output: "Elapsed time: 3 seconds." (depending on how long you wait)
}, 3000);
// Stop the timer after a few more seconds
setTimeout(() => {
  timer.stop();
  // Expected Output: "Timer stopped at 5 seconds."
}, 5000);

```
**Explanation:**
-The Timer class allows starting, stopping, and tracking elapsed time in seconds.

-It manages the timer's state and provides methods to check the elapsed time and stop the timer with the final count.
</details>

---- 
`Question 5:Inventory System`

Description:
Create a simple Inventory System in JavaScript that allows the following operations:
Add Product: Add a new product to the inventory with a specified name and quantity.
Update Quantity: Update the quantity of an existing product in stock.
Remove Product: Remove a product from the inventory.
View Inventory: Display all products with their quantities.

`Example:`

```javascript
class InventorySystem {
  constructor() {
    this.inventory = {}; 
// Object to store product names and their quantities
  }
  // Add a new product
  addProduct(name, quantity) {
   //code here
  }

  // Update the quantity of an existing product
  updateQuantity(name, quantity) {
  //code here
  }

  // Remove a product from the inventory
  removeProduct(name) {
    //code here
  }

  // View all products in the inventory
  viewInventory() {
    //code here
  }
}

// Usage Example:
const inventory = new InventorySystem();

// Add products
inventory.addProduct("Laptop", 10); // Expected Output: "Product 'Laptop' added with quantity 10."
inventory.addProduct("Smartphone", 30); // Expected Output: "Product 'Smartphone' added with quantity 30."

// Update product quantity
inventory.updateQuantity("Laptop", 15); // Expected Output: "Quantity of 'Laptop' updated to 15."

// Remove product
inventory.removeProduct("Smartphone"); // Expected Output: "Product 'Smartphone' removed from inventory."


```
`Topics Covered:`
Prototype
 
**Hints:**
- [Prototype](https://www.w3schools.com/js/js_object_prototypes.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:
```javascript

class InventorySystem {
  constructor() {
    this.inventory = {}; 
// Object to store product names and their quantities
  }
  // Add a new product
  addProduct(name, quantity) {
    if (this.inventory[name]) {
      console.log(`Product '${name}' already exists. Updating quantity.`);
      this.inventory[name] += quantity; 
// Add to existing quantity
    } else {
      this.inventory[name] = quantity; 
// Add a new product with given quantity
    }
    console.log(`Product '${name}' added with quantity ${quantity}.`);
  }

  // Update the quantity of an existing product
  updateQuantity(name, quantity) {
    if (this.inventory[name]) {
      this.inventory[name] = quantity;
      console.log(`Quantity of '${name}' updated to ${quantity}.`);
    } else {
      console.log(`Product '${name}' not found in inventory.`);
    }
  }

  // Remove a product from the inventory
  removeProduct(name) {
    if (this.inventory[name]) {
      delete this.inventory[name]; // Remove the product
      console.log(`Product '${name}' removed from inventory.`);
    } else {
      console.log(`Product '${name}' not found in inventory.`);
    }
  }

  // View all products in the inventory
  viewInventory() {
    console.log("Inventory:");
    for (let name in this.inventory) {
      console.log(`${name}: ${this.inventory[name]}`);
    }
  }
}

// Usage Example:
const inventory = new InventorySystem();

// Add products
inventory.addProduct("Laptop", 10); // Expected Output: "Product 'Laptop' added with quantity 10."
inventory.addProduct("Smartphone", 30); // Expected Output: "Product 'Smartphone' added with quantity 30."

// Update product quantity
inventory.updateQuantity("Laptop", 15); // Expected Output: "Quantity of 'Laptop' updated to 15."

// Remove product
inventory.removeProduct("Smartphone"); // Expected Output: "Product 'Smartphone' removed from inventory."

```
**Explanation:**
-The InventorySystem class manages products by allowing the addition, updating, and removal of items in an inventory.

-It tracks product quantities and provides methods to view and manipulate the inventory.
</details>

---- 
`Question 6:Simple Calculator`

Description:
Implement a basic calculator using JavaScript that supports the following operations:
Addition: Add two numbers.
Subtraction: Subtract one number from another.
Multiplication: Multiply two numbers.
Division: Divide one number by another (if the second number is not zero).

`Example:`

```javascript
function Calculator() {
  this.result = 0; // To store the result of calculations
  // Addition
  this.add = function(a, b) {
   //code here
  };
  // Subtraction
  this.subtract = function(a, b) {
   //code here
  };
  // Multiplication
  this.multiply = function(a, b) {
    //code here
  };
  // Division
  this.divide = function(a, b) {
    //code here
  };
  // Get the result of the last operation
  this.getResult = function() {
   //code here
  };
}
// Usage example
const calculator = new Calculator();

// Addition
console.log(calculator.add(5, 3)); // Expected Output: 8
// Subtraction
console.log(calculator.subtract(9, 4)); // Expected Output: 5
// Multiplication
console.log(calculator.multiply(6, 7)); // Expected Output: 42
// Division
console.log(calculator.divide(10, 2)); // Expected Output: 5
// Division by zero
console.log(calculator.divide(10, 0)); // Expected Output: "Cannot divide by zero!"

```
`Topics Covered:`
Prototype
 
**Hints:**
- [Prototype](https://www.w3schools.com/js/js_object_prototypes.asp)
<details>
  <summary>Solution</summary>

### Let's look at the solution:
```javascript

function Calculator() {
  this.result = 0; // To store the result of calculations
  // Addition
  this.add = function(a, b) {
    this.result = a + b;
    return this.result;
  };
  // Subtraction
  this.subtract = function(a, b) {
    this.result = a - b;
    return this.result;
  };
  // Multiplication
  this.multiply = function(a, b) {
    this.result = a * b;
    return this.result;
  };
  // Division
  this.divide = function(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    this.result = a / b;
    return this.result;
  };
  // Get the result of the last operation
  this.getResult = function() {
    return this.result;
  };
}
// Usage example
const calculator = new Calculator();

// Addition
console.log(calculator.add(5, 3)); // Expected Output: 8
// Subtraction
console.log(calculator.subtract(9, 4)); // Expected Output: 5
// Multiplication
console.log(calculator.multiply(6, 7)); // Expected Output: 42
// Division
console.log(calculator.divide(10, 2)); // Expected Output: 5
// Division by zero
console.log(calculator.divide(10, 0)); // Expected Output: "Cannot divide by zero!"
```
**Explanation:**

-This code defines a Calculator object with methods for basic arithmetic operations: addition, subtraction, multiplication, and division.

-It also includes a method to retrieve the result of the last operation and handles division by zero.
</details>

---- 