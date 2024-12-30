# Constructor Function

` Question 1: ChatMessage Constructor`

 Write a ChatMessage constructor function to represent messages in a chat app. Each message should have text, sender, and timestamp. Add a method formatMessage() to return a formatted string.

`Example:`

```javascript

function ChatMessage(text, sender, timestamp) {
  //Your code here
}

// Example Usage:
const message = new ChatMessage("Hello!", "Deepak", new Date());
console.log(message.formatMessage()); // Output: Deepak [10:30 AM]: Hello!


  
```

`Topics Covered:`
Constructor function, Date & time
 
**Hints:**
- [Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), - [Date & time](https://www.w3schools.com/js/js_dates.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function ChatMessage(text, sender, timestamp) {
  this.text = text;
  this.sender = sender;
  this.timestamp = timestamp;

  this.formatMessage = function () {
    const formattedTime = this.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${this.sender} [${formattedTime}]: ${this.text}`;
  };
}

// Example Usage:
const message = new ChatMessage("Hello!", "Deepak", new Date());
console.log(message.formatMessage()); // Output: Deepak [10:30 AM]: Hello!

  
```

**Explanation:**

### Purpose
Represents a chat message with text, sender, and timestamp.

### Steps

1. **ChatMessage Constructor Initializes:**
  - text: Message content.
  - sender: Message sender.
  - timestamp: Time of the message.

2. **formatMessage() Formats the Message as:**
  - Sender [Time]: Message.

### Example

Creates a message object and logs the formatted message.

**Output:**  
Deepak [10:30 AM]: Hello!

  
</details>
 
---- 
` Question 2: Real-Time Voting System`

 Create a Poll constructor function for a voting system. Each poll has a question, an array of options, and an object votes to track votes for each option. Add methods vote(option) to increment votes and getResults() to return the voting results.

`Example:`

```javascript

function Poll(question, options) {
  //Your code here
}

// Example Usage:
const poll = new Poll("What's your favorite language?", ["JavaScript", "Python", "Java"]);
poll.vote("JavaScript");
poll.vote("JavaScript");
poll.vote("Python");
console.log(poll.getResults()); // Output: { JavaScript: 2, Python: 1, Java: 0 }


  
```

`Topics Covered:`
Constructor function
 
**Hints:**
- [Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function Poll(question, options) {
  this.question = question;
  this.options = options;
  this.votes = {};

  // Initialize vote counts for each option
  options.forEach(option => {
    this.votes[option] = 0;
  });

  this.vote = function (option) {
    if (this.votes.hasOwnProperty(option)) {
      this.votes[option]++;
    }
  };

  this.getResults = function () {
    return this.votes;
  };
}

// Example Usage:
const poll = new Poll("What's your favorite language?", ["JavaScript", "Python", "Java"]);
poll.vote("JavaScript");
poll.vote("JavaScript");
poll.vote("Python");
console.log(poll.getResults()); // Output: { JavaScript: 2, Python: 1, Java: 0 }

  
```

**Explanation:**


### Purpose:
Represents a poll with a question, options, and votes.

### Steps:

### Poll Constructor Initializes:
- question: The poll's question.
- options: Array of answer options.
- votes: An object to track votes for each option, initialized to 0.

### vote(option):
- Increments the vote count for the specified option if it exists.

### getResults():
- Returns the current vote counts for all options.

  
</details>
 
---- 
` Question 3: Multi-Language Translator`

 Write a Translator constructor function that takes an object translations (key-value pairs of language codes and messages). Add a method translate(languageCode) that returns the message in the requested language.

`Example:`

```javascript

function Translator(translations) {
  //Your code here
}

// Example Usage:
const translator = new Translator({ en: "Hello", es: "Hola", fr: "Bonjour" });
console.log(translator.translate("es")); // Output: Hola
console.log(translator.translate("de")); // Output: Translation not available

  
```

`Topics Covered:`
Constructor function
 
**Hints:**
- [Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function Translator(translations) {
  this.translations = translations;

  this.translate = function (languageCode) {
    return this.translations[languageCode] || "Translation not available";
  };
}

// Example Usage:
const translator = new Translator({ en: "Hello", es: "Hola", fr: "Bonjour" });
console.log(translator.translate("es")); // Output: Hola
console.log(translator.translate("de")); // Output: Translation not available

  
```

**Explanation:**


### Purpose
Represents a translator that provides translations for different languages.

### Constructor
Initializes with a translations object containing language codes and their corresponding translations.

### Parameters:
- translations: An object where the keys are language codes (e.g., "en" for English, "es" for Spanish) and the values are their respective translations.

### Methods

### translate(languageCode)
- **Purpose**: Returns the translation for the specified languageCode.
- **Parameters**:
  - languageCode: The language code for which the translation is needed (e.g., "en" for English, "es" for Spanish).
- **Returns**: 
  - The translation for the given languageCode.
  - If the language code is not available, it returns "Translation not available.".

  
</details>
 
---- 
` Question 4: Notification Constructor with Priority`

 Write a Notification constructor function for a messaging system. Each notification has message, timestamp, and priority (e.g., "low", "high"). Add a method isHighPriority() to return true if the priority is "high".

`Example:`

```javascript

function Notification(message, timestamp, priority) {
 //Your code here
}

// Example Usage:
const notification = new Notification("New comment received!", new Date(), "high");
console.log(notification.isHighPriority()); // Output: true

  
```

`Topics Covered:`
Constructor function
 
**Hints:**
- [Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function Notification(message, timestamp, priority) {
  this.message = message;
  this.timestamp = timestamp;
  this.priority = priority;

  this.isHighPriority = function () {
    return this.priority === "high";
  };
}

// Example Usage:
const notification = new Notification("New comment received!", new Date(), "high");
console.log(notification.isHighPriority()); // Output: true

  
```

**Explanation:**


### Purpose
Defines a Notification object with a message, timestamp, and priority level.

### Constructor

- message: The notification message (e.g., "New comment received!").
- timestamp: The time when the notification was created.
- priority: The priority level of the notification (e.g., "high", "low").

### Methods

### isHighPriority()
- **Purpose**: Checks if the notification has a high priority.
- **Returns**: true if the priority is "high", otherwise false.
  
</details>
 
---- 
` Question 5: Multi-Level Dropdown Menu`

 Create a Dropdown constructor function for multi-level dropdown menus. Each menu has label, items (array of submenus or options), and isOpen. Add methods toggle() to open/close the dropdown and render() to display the menu structure.

`Example:`

```javascript

function Dropdown(label, items) {
 //Your code here
}

// Example Usage:
const dropdown = new Dropdown("File", ["New", { label: "Open", items: ["Recent", "Browse"] }]);
dropdown.toggle();
dropdown.render();
// Output:
// File (Open)
// - New
// - Open
//   - Recent
//   - Browse

  
```

`Topics Covered:`
Constructor function, Array methods i.e forEach()
 
**Hints:**
- [Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), - [Array methods i.e forEach()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function Dropdown(label, items) {
  this.label = label;
  this.items = items;
  this.isOpen = false;

  this.toggle = function () {
    this.isOpen = !this.isOpen;
  };

  this.render = function () {
    console.log(`${this.label} (${this.isOpen ? "Open" : "Closed"})`);;
    if (this.isOpen) {
      this.items.forEach(item => {
        if (typeof item === "string") {
          console.log(`- ${item}`);
        } else {
          console.log(`- ${item.label}`);
          if (item.items) {
            item.items.forEach(subItem => console.log(`  - ${subItem}`));
          }
        }
      });
    }
  };
}

// Example Usage:
const dropdown = new Dropdown("File", ["New", { label: "Open", items: ["Recent", "Browse"] }]);
dropdown.toggle();
dropdown.render();
  
```

**Explanation:**


### Purpose
Defines a Dropdown object with a label, a list of items, and an open/closed state.

### Constructor

- label: The label displayed for the dropdown (e.g., "File").
- items: The list of items in the dropdown, which can be strings or objects (with sub-items).
- isOpen: A boolean that tracks whether the dropdown is open or closed (initially set to false).

### Methods

### toggle()
- **Purpose**: Toggles the dropdown's open/closed state.

### render()
- **Purpose**: Displays the dropdown's label and items, showing sub-items if the dropdown is open.

  
</details>
 
---- 
