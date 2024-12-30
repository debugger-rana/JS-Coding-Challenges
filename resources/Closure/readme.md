# Closure

` Question 1: User Session Management`

 Write a function createSessionManager that manages user sessions on a website. The session manager should allow a user to log in, log out, and retrieve the current session data.

`Example:`

```javascript

function createSessionManager() {
  //Your code here
}

// Usage
const sessionManager = createSessionManager();
sessionManager.login({ username: 'Mithun sir', role: 'admin' });
console.log(sessionManager.getSession()); // { username: 'Mithun sir', role: 'admin' }
sessionManager.logout();
console.log(sessionManager.getSession()); // null

  
```

`Topics Covered:`
Closure
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createSessionManager() {
  let session = null;

  return {
    login: (user) => session = user, // Set the session with user details
    logout: () => session = null, // Clear the session
    getSession: () => session // Retrieve the current session
  };
}

// Usage
const sessionManager = createSessionManager();
sessionManager.login({ username: 'Mithun sir', role: 'admin' });
console.log(sessionManager.getSession()); // { username: 'Mithun sir', role: 'admin' }
sessionManager.logout();
console.log(sessionManager.getSession()); // null


  
```

**Explanation:**


The createSessionManager function creates an object to manage user sessions with three methods:

1. **login(user)**: Sets the session with the provided user details.
2. **logout()**: Clears the session (sets it to null).
3. **getSession()**: Retrieves the current session.

  
</details>
 
---- 
` Question 2: Real-Time Analytics Tracker`

 Write a function createAnalyticsTracker that tracks user actions (e.g., button clicks, page views) on a website and returns the count of each activity.

`Example:`

```javascript

function createAnalyticsTracker() {
 //Your code here
}

// Usage
const tracker = createAnalyticsTracker();
tracker.track('page_view');
tracker.track('button_click');
tracker.track('page_view');
console.log(tracker.getAnalytics()); // { page_view: 2, button_click: 1 }


  
```

`Topics Covered:`
Closure
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createAnalyticsTracker() {
  const events = {};

  return {
    track: (eventName) => {
      events[eventName] = (events[eventName] || 0) + 1; // Increment event count
    },
    getAnalytics: () => events // Return the event counts
  };
}

// Usage
const tracker = createAnalyticsTracker();
tracker.track('page_view');
tracker.track('button_click');
tracker.track('page_view');
console.log(tracker.getAnalytics()); // { page_view: 2, button_click: 1 }

  
```

**Explanation:**


The createAnalyticsTracker function creates an object to track events with two methods:

1. **track(eventName)**: Increments the count for the specified event.
2. **getAnalytics()**: Returns the object containing event names and their respective counts.

  
</details>
 
---- 
` Question 3: Dropdown State Manager`

 Write a function createDropdownManager to manage the state (open/close) of a dropdown menu

`Example:`

```javascript

function createDropdownManager() {
  //Your code here
}

// Usage
const dropdown = createDropdownManager();
console.log(dropdown.getState()); // false
dropdown.toggle();
console.log(dropdown.getState()); // true

  
```

`Topics Covered:`
Closure
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createDropdownManager() {
  let isOpen = false;

  return {
    toggle: () => isOpen = !isOpen, // Toggle the state
    getState: () => isOpen // Return current state
  };
}

// Usage
const dropdown = createDropdownManager();
console.log(dropdown.getState()); // false
dropdown.toggle();
console.log(dropdown.getState()); // true

  
```

**Explanation:**


The createDropdownManager function creates an object to manage the state of a dropdown with two methods:

1. **toggle()**: Changes the state of isOpen from false to true or vice versa.
2. **getState()**: Returns the current state of the dropdown (true or false).

  
</details>
 
---- 
` Question 4: Secure Payment Manager`

 Write a function createPaymentManager that securely manages payment initialization and confirmation without exposing sensitive logic.

`Example:`

```javascript

function createPaymentManager() {
  //Your code here
}

// Usage
const paymentManager = createPaymentManager();
console.log(paymentManager.initPayment({ amount: 100, currency: 'USD' }));
console.log(paymentManager.confirmPayment({ amount: 100, currency: 'USD' }));


  
```

`Topics Covered:`
Closure
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createPaymentManager() {
  return {
    initPayment: (details) => `Payment of ${details.amount} ${details.currency} initialized.`,
    confirmPayment: (details) => `Payment of ${details.amount} ${details.currency} confirmed.`
  };
}

// Usage
const paymentManager = createPaymentManager();
console.log(paymentManager.initPayment({ amount: 100, currency: 'USD' }));
console.log(paymentManager.confirmPayment({ amount: 100, currency: 'USD' }));

```

**Explanation:**


The createPaymentManager function returns an object with two methods to manage payments:

1. **initPayment(details)**: Initializes the payment with the specified amount and currency.
2. **confirmPayment(details)**: Confirms the payment with the specified amount and currency.
  
</details>
 
---- 
` Question 5: Dynamic Permission System`

 Write a function createPermissionManager to manage permissions dynamically based on the user role

`Example:`

```javascript

function createPermissionManager() {
  //Your code here
}

// Usage
const permissionManager = createPermissionManager();
console.log(permissionManager.hasPermission('editor', 'edit')); // true
console.log(permissionManager.hasPermission('viewer', 'edit')); // false

  
```

`Topics Covered:`
Closure, Array methods i.e. includes(), optional channing
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), - [Array methods i.e. includes()](https://www.w3schools.com/js/js_array_methods.asp), - [Optional channing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createPermissionManager() {
  const permissions = {
    admin: ['create', 'edit', 'delete', 'view'],
    editor: ['edit', 'view'],
    viewer: ['view']
  };

  return {
    hasPermission: (role, action) => permissions[role]?.includes(action) || false
  };
}

// Usage
const permissionManager = createPermissionManager();
console.log(permissionManager.hasPermission('editor', 'edit')); // true
console.log(permissionManager.hasPermission('viewer', 'edit')); // false

  
```

**Explanation:**


The createPermissionManager function manages permissions for different user roles. It stores a predefined list of permissions for each role (e.g., admin, editor, viewer).

- **hasPermission(role, action)**: Checks if the given role has permission to perform the specified action. It returns true if the role has the action in its permission list, otherwise false.

#### Example:
- For an **editor**, the hasPermission method checks if the role can "edit", and returns true because "edit" is in the editor's permissions.
- For a **viewer**, the method checks if the role can "edit", and returns false because "edit" is not in the viewer's permissions.
  
</details>
 
---- 
` Question 6: Notification Manager`

 Write a function createNotificationManager that allows adding and retrieving personalized notifications for a user

`Example:`

```javascript

function createNotificationManager() {
 //Your code here
}

// Usage
const notificationManager = createNotificationManager();
notificationManager.add('Your order has been shipped.');
console.log(notificationManager.getNotifications()); // ['Your order has been shipped.']

  
```

`Topics Covered:`
Closure, Array methods i.e. includes()
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), - [Array methods i.e. includes()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createNotificationManager() {
  const notifications = [];

  return {
    add: (message) => notifications.push(message), // Add notification
    getNotifications: () => notifications // Retrieve all notifications
  };
}

// Usage
const notificationManager = createNotificationManager();
notificationManager.add('Your order has been shipped.');
console.log(notificationManager.getNotifications()); // ['Your order has been shipped.']


  
```

**Explanation:**


The createNotificationManager function manages a list of notifications. It provides two methods:

- **add(message)**: Adds a new notification message to the list.
- **getNotifications()**: Retrieves all the notifications that have been added.
  
</details>
 
---- 
` Question 7: Dynamic Form Field Validation`

 Write a function createFieldValidator that validates multiple form fields with custom validation rules.

`Example:`

```javascript

function createFieldValidator() {
  //Your code here
}

// Usage
const validator = createFieldValidator();
validator.addField('email', value => value.includes('@'));
console.log(validator.validate('email', 'test@example.com')); // true
console.log(validator.validate('email', 'testexample.com')); // false

  
```

`Topics Covered:`
Closure, Array methods, Optional chainning
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), - [Array methods ](https://www.w3schools.com/js/js_array_methods.asp), - [Optional chainning ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createFieldValidator() {
 //Your code here
}

// Usage
const validator = createFieldValidator();
validator.addField('email', value => value.includes('@'));
console.log(validator.validate('email', 'test@example.com')); // true
console.log(validator.validate('email', 'testexample.com')); // false
  
```

**Explanation:**


The createFieldValidator function creates a field validation manager with two methods:

- **addField(fieldName, validator)**: Adds a field with its corresponding validation function.
- **validate(fieldName, value)**: Validates the given value for a field using the associated validator.
  
</details>
 
---- 
` Question 8: Shopping Cart Manager`

 Write a function createCart that allows adding, removing, and viewing items in a shopping cart.

`Example:`

```javascript

function createCart() {
  //Your code here
}

// Usage
const cart = createCart();
cart.add({ id: 1, name: 'Laptop', price: 1000 });
cart.add({ id: 2, name: 'Phone', price: 500 });
cart.remove(1);
console.log(cart.view()); // [ { id: 2, name: 'Phone', price: 500 } ]

  
```

`Topics Covered:`
Closure, Array methods i.e. push(), splice(), findIndex()
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), - [Array methods ](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createCart() {
  const cart = [];

  return {
    add: (item) => cart.push(item), // Add item to cart
    remove: (id) => cart.splice(cart.findIndex(item => item.id === id), 1), // Remove item by ID
    view: () => cart // Return all cart items
  };
}

// Usage
const cart = createCart();
cart.add({ id: 1, name: 'Laptop', price: 1000 });
cart.add({ id: 2, name: 'Phone', price: 500 });
cart.remove(1);
console.log(cart.view()); // [ { id: 2, name: 'Phone', price: 500 } ]

  
```

**Explanation:**


The createCart function creates a cart manager with three methods:

- **add(item)**: Adds an item to the cart.
- **remove(id)**: Removes an item from the cart based on its id.
- **view()**: Returns all items in the cart.
  
</details>
 
---- 
` Question 9: Auto-Increment ID Generator`

 Write a function createIdGenerator that generates unique IDs for new users or objects in a system.

`Example:`

```javascript

function createIdGenerator() {
 //Your code here
}

// Usage
const idGenerator = createIdGenerator();
console.log(idGenerator.next()); // 1
console.log(idGenerator.next()); // 2

  
```

`Topics Covered:`
Closure
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createIdGenerator() {
  let id = 0;

  return {
    next: () => ++id // Increment and return ID
  };
}

// Usage
const idGenerator = createIdGenerator();
console.log(idGenerator.next()); // 1
console.log(idGenerator.next()); // 2

  
```

**Explanation:**


The createIdGenerator function creates a simple ID generator with a method next:

- **next()**: Increments the id by 1 each time it's called and returns the new ID.
  
</details>
 
---- 
` Question 10: Live Chat Manager`

 Write a function createChatManager that stores and retrieves live chat messages in a chat application.

`Example:`

```javascript

function createChatManager() {
  //Your code here
}

// Usage
const chat = createChatManager();
chat.addMessage('Hello!');
chat.addMessage('How are you?');
console.log(chat.getMessages()); // ['Hello!', 'How are you?']

  
```

`Topics Covered:`
Closure, Array methods i.e. push()
 
**Hints:**
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), - [Array methods i.e. push()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function createChatManager() {
  const messages = [];
  return {
    addMessage: (message) => messages.push(message), // Add message
    getMessages: () => messages // Retrieve all messages
  };
}

// Usage
const chat = createChatManager();
chat.addMessage('Hello!');
chat.addMessage('How are you?');
console.log(chat.getMessages()); // ['Hello!', 'How are you?']

  
```

**Explanation:**


The createChatManager function creates a simple chat manager with two methods:

- **addMessage(message)**: Adds a new message to the messages array.
- **getMessages()**: Retrieves all the messages in the chat.
  
</details>
 
---- 
