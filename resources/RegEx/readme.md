# RegEx

###### ` Question 1: Check if an Email is Valid`

 Write a function createChatManager that stores and retrieves live chat messages in a chat application.

`Example:`

```javascript

function isValidEmail(email) {
  // Your code here
}

// Example usage:
console.log(isValidEmail("example@gmail.com")); // true
console.log(isValidEmail("example@.com")); // false

  
```

`Topics Covered:`
RegEx methods i.e. test()
 
**Hints:**
- [RegEx methods i.e. test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function isValidEmail(email) {
  // Regular expression to check if the email is valid
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email); // Returns true if valid, false otherwise
}

// Example usage:
console.log(isValidEmail("example@gmail.com")); // true
console.log(isValidEmail("example@.com")); // false
  
```

**Explanation:**


The isValidEmail function checks if an email is valid using a regular expression:

- **Regex Explanation**:
  - ^[^s@]+: Ensures the email starts with one or more characters that are not spaces or @.
  - @[^s@]+: Ensures the email contains an @ followed by more valid characters.
  - .[^s@]+$: Ensures the email ends with a dot . followed by valid characters.

- **Return Value**: 
  - Returns true if the email matches the pattern (valid).
  - Returns false if the email does not match (invalid).
  
</details>
 
---- 
###### ` Question 2: Find Phone Numbers in Text`

 Write a function findPhoneNumbers that extracts all valid phone numbers from a string.
   Valid formats include:
   (123) 456-7890
   123-456-7890
   123 456 7890


`Example:`

```javascript

function findPhoneNumbers(text) {
  //Your code 
}

// Example usage:
console.log(findPhoneNumbers("Call me at (123) 456-7890 or 123-456-7890"));
// ["(123) 456-7890", "123-456-7890"]

  
```

`Topics Covered:`
RegEx methods i.e. test(), String methods i.e. match()
 
**Hints:**
- [RegEx methods i.e. test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions), - [String methods i.e. match()](https://www.w3schools.com/jsref/jsref_match.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function findPhoneNumbers(text) {
  // Regular expression to match different phone number formats
  const phoneRegex = /(?d{3})?[- ]?d{3}[- ]?d{4}/g;
  return text.match(phoneRegex) || []; // Returns all matches or an empty array
}

// Example usage:
console.log(findPhoneNumbers("Call me at (123) 456-7890 or 123-456-7890"));
// ["(123) 456-7890", "123-456-7890"]

  
```

**Explanation:**


The findPhoneNumbers function extracts phone numbers from a given text using a regular expression:

- **Regex Breakdown**:
  - (?d{3})?: Matches an optional opening parenthesis (, followed by 3 digits, and an optional closing parenthesis ).
  - [- ]?: Matches an optional hyphen - or space after the area code.
  - d{3}: Matches the next 3 digits.
  - [- ]?: Matches an optional hyphen - or space.
  - d{4}: Matches the final 4 digits.
  - /g: The global flag ensures all matches are found in the text.

- **Return Value**:
  - text.match(phoneRegex): Returns an array of all matched phone numbers.
  - || []: Ensures the function returns an empty array if no matches are found.
  
</details>
 
---- 
###### ` Question 3: Get Query Parameters from a Link`

 Write a function getQueryParameter that extracts the value of a specific query parameter from a URL.

`Example:`

```javascript

function getQueryParameter(url, parameter) {
  //Your code here
}

// Example usage:
console.log(getQueryParameter("https://example.com?id=123&name=chandra", "id")); // "123"

  
```

`Topics Covered:`
URL object
 
**Hints:**
- [URL object](https://javascript.info/url)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getQueryParameter(url, parameter) {
  // Create a URL object to easily parse query parameters
  const urlObj = new URL(url);
  return urlObj.searchParams.get(parameter); // Returns the value of the parameter
}

// Example usage:
console.log(getQueryParameter("https://example.com?id=123&name=chandra", "id")); // "123"

  
```

**Explanation:**


The getQueryParameter function extracts the value of a specific query parameter from a given URL.

- **Steps**:
  1. new URL(url): Creates a URL object to parse the URL easily.
  2. urlObj.searchParams.get(parameter): Retrieves the value of the query parameter specified by parameter.
  
</details>
 
---- 
###### ` Question 4: Check if a Date is in the Right Format`

 Write a function isValidDate that checks if a string follows the YYYY-MM-DD date format.

`Example:`

```javascript

function isValidDate(date) {
  //Your code here
}

// Example usage:
console.log(isValidDate("2024-12-31")); // true
console.log(isValidDate("31-12-2024")); // false

  
```

`Topics Covered:`
RegEx methods i.e. test()
 
**Hints:**
- [RegEx methods i.e. test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getQueryParameter(url, parameter) {
  // Create a URL object to easily parse query parameters
  const urlObj = new URL(url);
  return urlObj.searchParams.get(parameter); // Returns the value of the parameter
}

// Example usage:
console.log(getQueryParameter("https://example.com?id=123&name=chandra", "id")); // "123"

  
```

**Explanation:**


The isValidDate function checks if a given date string is in the correct YYYY-MM-DD format.

- **Steps**:
  1. A regular expression (/^d{4}-d{2}-d{2}$/) is used to match:
     - 4 digits for the year (d{4}).
     - A hyphen (-).
     - 2 digits for the month (d{2}).
     - Another hyphen (-).
     - 2 digits for the day (d{2}).
  2. dateRegex.test(date) checks if the input matches the format.
  
</details>
 
---- 
###### ` Question 5: Validate an IP Address`

 Write a function isValidIP to check if a string is a valid IP address in either IPv4 or IPv6 format.

`Example:`

```javascript

function isValidIP(ip) {
  //Your code here
}

// Example usage:
console.log(isValidIP("192.168.1.1")); // true
console.log(isValidIP("999.999.999.999")); // false

  
```

`Topics Covered:`
RegEx methods i.e. test()
 
**Hints:**
- [RegEx methods i.e. test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function isValidIP(ip) {
  // Regular expression for IPv4 addresses
  const ipv4Regex = /^(25[0-5]|2[0-4]d|1d{2}|d{1,2})(.(?!$)){3}(25[0-5]|2[0-4]d|1d{2}|d{1,2})$/;
  return ipv4Regex.test(ip); // Returns true for valid IPv4, false otherwise
}

// Example usage:
console.log(isValidIP("192.168.1.1")); // true
console.log(isValidIP("999.999.999.999")); // false

  
```

**Explanation:**


The isValidIP function checks if a given string is a valid IPv4 address.

- **Steps**:
  1. The regular expression (ipv4Regex) breaks down IPv4 addresses into 4 numeric parts separated by dots (.):
     - Each part must be:
       - A number between 0-255.
       - Valid numbers: 25[0-5] (250-255), 2[0-4]d (200-249), 1d{2} (100-199), or d{1,2} (0-99).
  2. The (.(?!$)){3} ensures there are exactly 3 dots, and the string doesn't end with a dot.
  3. ipv4Regex.test(ip) checks if the input matches this format.
  
</details>
 
---- 
###### ` Question 6: Find All Hashtags in a Text`

 Write a function findHashtags to extract all hashtags from a text.

`Example:`

```javascript

function findHashtags(text) {
  // Your code here
}

// Example usage:
console.log(findHashtags("I love #coding and #webdev")); // ["#coding", "#webdev"]

  
```

`Topics Covered:`
String methods i.e. match()
 
**Hints:**
- [String methods i.e. match()](https://www.w3schools.com/jsref/jsref_match.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function findHashtags(text) {
  // Regular expression for hashtags
  const hashtagRegex = /#w+/g;
  return text.match(hashtagRegex) || []; // Returns all matches or an empty array
}

// Example usage:
console.log(findHashtags("I love #coding and #webdev")); // ["#coding", "#webdev"]

  
```

**Explanation:**


The findHashtags function extracts all hashtags from a given text.

- **Steps**:
  1. **Regular Expression**:
     - #w+ matches:
       - A # symbol.
       - Followed by one or more word characters (w, which includes letters, numbers, and underscores).
     - The g flag ensures it finds all matches in the text.
  2. text.match(hashtagRegex):
     - Searches the input text for hashtags matching the pattern.
     - If no hashtags are found, it returns an empty array (|| []).
  
</details>
 
---- 
###### ` Question 7: Find HTML Tags`

 Write a function findHTMLTags to extract all HTML tags from a string.

`Example:`

```javascript

function findHTMLTags(htmlString) {
 //Your code here
}

// Example usage:
console.log(findHTMLTags("<div><h1>Hello</h1></div>")); // ["<div>", "<h1>", "</h1>", "</div>"]

  
```

`Topics Covered:`
String methods i.e. match()
 
**Hints:**
- [String methods i.e. match()](https://www.w3schools.com/jsref/jsref_match.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function findHTMLTags(htmlString) {
  // Regular expression for HTML tags
  const tagRegex = /</?[^>]+>/g;
  return htmlString.match(tagRegex) || []; // Returns all matches or an empty array
}

// Example usage:
console.log(findHTMLTags("<div><h1>Hello</h1></div>")); // ["<div>", "<h1>", "</h1>", "</div>"]

  
```

**Explanation:**


### How It Works:
1. **Regular Expression**:
  - </?: Matches the opening < and optionally the closing /.
  - [^>]+: Matches everything inside the tag except > (e.g., tag name and attributes).
  - >: Matches the closing > of the tag.
  - g: Global flag ensures all matching tags in the string are captured.

2. **htmlString.match(tagRegex)**:
  - Finds all HTML tags in the input string.
  - If no tags are found, it returns an empty array using || [].
  
</details>
 
---- 
###### ` Question 8: Extract the Domain Name from a URL`

 Write a function getDomain to extract the domain name from a URL.

`Example:`

```javascript

function getDomain(url) {
 //Your code here
}

// Example usage:
console.log(getDomain("https://www.example.com/path")); // "www.example.com"

  
```

`Topics Covered:`
URL object
 
**Hints:**
- [URL object](https://javascript.info/url)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getDomain(url) {
  // Create a URL object to extract the domain
  const urlObj = new URL(url);
  return urlObj.hostname; // Returns the domain name
}

// Example usage:
console.log(getDomain("https://www.example.com/path")); // "www.example.com"

  
```

**Explanation:**


The getDomain function extracts the domain name from a given URL.

- **Steps**:
  1. **URL Object**:
     - It creates a URL object from the input url.
  2. urlObj.hostname:
     - The hostname property of the URL object provides the domain name (e.g., www.example.com).
  
</details>
 
---- 
###### ` Question 9: Find Hex Color Codes`

 Write a function findHexColors to extract all valid hex color codes from a string.

`Example:`

```javascript

function findHexColors(text) {
 //Your code here
}

// Example usage:
console.log(findHexColors("The colors are #FF5733 and #f73.")); // ["#FF5733", "#f73"]

  
```

`Topics Covered:`
URL object
 
**Hints:**
- [URL object](https://javascript.info/url)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function findHexColors(text) {
  // Regular expression for hex color codes
  const hexRegex = /#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})\b/g;
  return text.match(hexRegex) || []; // Returns all matches or an empty array
}

// Example usage:
console.log(findHexColors("The colors are #FF5733 and #f73.")); // ["#FF5733", "#f73"]

  
```

**Explanation:**


The function findHexColors uses a regular expression (hexRegex) to find all hexadecimal color codes (like #FF5733) in a given text. 

## Regular Expression Breakdown:

The regular expression used in the function matches color codes that are either 3 or 6 characters long, consisting of letters (a-f, A-F) and digits (0-9).

### Regex: /#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})\b/g

- #([a-fA-F0-9]{3}|[a-fA-F0-9]{6}): 
- This part of the regex captures color codes that are either 3 or 6 characters long, following the # symbol.
  
- \b: 
- Ensures the match ends at a word boundary, meaning it won't match partial strings.
  
- text.match(hexRegex) : 
- This method returns an array of all the matching color codes found in the text. If no matches are found, it returns an empty array.

  
</details>
 
---- 
