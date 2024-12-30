#String

 
---- 
###### ` Question 1:Valid Password`

 Write a javascript program, create a variable password and a function checkIfPasswordIsValid. The condition in which the function returns true is when the length of password is minimum 8 characters.

`Example:`

```javascript

/*
CASE1: If password is 'abcd'
*/

const password = 'abcd';

function isValidPassword(password){
	//code here
}

isValidPassword(password) // Returns false as the length of password is less than 8 characters




  
```

`Topics Covered:`
String, length
 
**Hints:**
- [length()](https://www.w3schools.com/jsref/jsref_length_string.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

/*
CASE1: If password is 'abcd'
*/

const password = 'abcd';

function isValidPassword(password){
	if(password.length >= 8){
		return true;
	}else{
		return false;
	}
}

isValidPassword(password) // Returns false as the length of password is less than 8 characters






```

**Explanation:**


-The function checks if the password length is greater than or equal to 8 characters.
-Since the password 'abcd' has only 4 characters, the function returns false.
  
</details>
 
---- 
`Question 2:Count word Occurance`

Write a javascript program, create a variable count and a function countOccurance. The condition in which the function returns count value is how many time the word appears in the comment.


`Example:`

```javascript

function countOccurrences(str, word) {
  //code here
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);


  
```

`Topics Covered:`
String, count
 
**Hints:**
- [count()](https://www.geeksforgeeks.org/how-to-count-string-occurrence-in-string-using-javascript/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function countOccurrences(str, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
 // 'g' for global search, 'i' for case-insensitive search
    const matches = str.match(regex);
    return matches ? matches.length : 0; 
// Return the count of occurrences or 0 if none found
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);





```

**Explanation:**


-The function uses a regular expression to find all case-insensitive occurrences of the specified word (word) surrounded by word boundaries (\b).,
-It returns the number of matches found, or 0 if no matches exist, as seen with the word "great" appearing 3 times in the comment.
  
</details>
`Question 3:Keyword check`

 Write a program in javascript where create a variable query by assigning some word to the variable and there is another string productDescription and search the query in the productDescription.

`Example:`

```javascript

function isProductMatch(query, description) {
//code here
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);





  
```

`Topics Covered:`
String, includes method
 
**Hints:**
- [includes()](https://www.w3schools.com/jsref/jsref_includes.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function isProductMatch(query, description) {
  if (description.toLowerCase().includes(query.toLowerCase())) {
    console.log("Product matches the search query!");
  }
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);







```

**Explanation:**


The function isProductMatch checks if the query is present in the description by converting both to lowercase (using .toLowerCase()) to ensure a case-insensitive match.

If the query is found, it logs "Product matches the search query!".
  
</details>
 
---- 
###### ` Question 4:Valid email`

 Write a javascript program. Where create a variable email and assign the some email address in it.Then create a variable domain. After that check the email contain the domain.If it finds the domain within the email, it returns the position where domain starts. If not, it returns -1.

`Example:`

```javascript

function checkGmailDomain(email, domain) {
 //code here
}

const email = "user@example.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);




  
```

`Topics Covered:`
String, indexOf method
 
**Hints:**
- [indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function checkGmailDomain(email, domain) {
  const position = email.indexOf(domain);
  if (position !== -1) {
    console.log("This email is from Gmail.");
  } else {
    console.log("This email is not from Gmail.");
  }
}

const email = "user@example.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);








```

**Explanation:**


-indexOf(domain) checks if the domain exists in the email. It returns the starting position of the first occurrence or -1 if not found.

-If the domain is found (position !== -1), it prints that the email is from Gmail; otherwise, it prints that the email is not from Gmail.
  
</details>
 
---- 
###### ` Question 5:cleanUp extra spaces`

 Write a program in javascript. Where  create a variable phoneNumber .phoneNumber contains the user input, but it has unwanted spaces at the start and end.Than create cleanedPhoneNumber variable which  holds the processed, clean phone number without extra spaces..

`Example:`

```javascript

function cleanPhoneNumber(phoneNumber) {
 //code here
}

const phoneNumber = "  +1 234 567 890  ";  // User input with leading and trailing spaces
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  // Output: "+1 234 567 890"





  
```

`Topics Covered:`
String, trim method
 
**Hints:**
- [trim()](https://www.geeksforgeeks.org/javascript-string-trim-method/)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function cleanPhoneNumber(phoneNumber) {
  return phoneNumber.trim();  // Removes spaces from the beginning and end
}

const phoneNumber = "  +1 234 567 890  ";  // User input with leading and trailing spaces
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  // Output: "+1 234 567 890"









```

**Explanation:**


-The function cleanPhoneNumber takes a phoneNumber as input and returns the trimmed version, removing spaces from both ends using the .trim() method.

-The cleaned phone number is then logged, outputting the formatted phone number without leading or trailing spaces. 
</details>
 
---- 
###### ` Question 6:Convert URLs to Links`

 Write a program in javascript. Where  create a variable  text contains a string with URLs. Then create the another variable urlPattern  that is the regular Expression matches any URL that starts with http:// or https://, followed by any characters that aren't spaces.For each URL found, it is replaced with an anchor tag (<a>), making the URL clickable.


`Example:`

```javascript

function convertUrlsToLinks(text) {
 //code here
}

let updatedText = convertUrlsToLinks("Visit our website at http://example.com for more information. Also, check out https://google.com for other resources.");
console.log(updatedText);






  
```

`Topics Covered:`
String, replace method
 
**Hints:**
- [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function convertUrlsToLinks(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g; // Regular expression to match URLs.
  return text.replace(urlPattern, (url) => `<a href="${url}" target="_blank">${url}</a>`); // Replace URLs with anchor tags.
}

let updatedText = convertUrlsToLinks("Visit our website at http://example.com for more information. Also, check out https://google.com for other resources.");
console.log(updatedText);










```

**Explanation:**


-The convertUrlsToLinks function takes a string text, finds all URLs using a regular expression, and replaces them with anchor tags that open in a new tab.
-The replace() method is used to convert each URL into an anchor element with "_blank" for opening in a new tab.
</details>
 
---- 
###### ` Question 7:URL Generation`

 Write a program in javascript where create a three variable  baseURL, searchQuery, categoryFilter. By using this three variable generate the full URL of website.

`Example:`

```javascript

function generateSearchURL(baseURL, searchQuery, categoryFilter) {
 //code here
}

// Example usage
let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL);






  
```

`Topics Covered:`
String, concat method
 
**Hints:**
- [concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function generateSearchURL(baseURL, searchQuery, categoryFilter) {
  return baseURL.concat("?query=", searchQuery, "&category=", categoryFilter);
}

// Example usage
let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL);










```

**Explanation:**


-The searchProducts function takes a list of products and a searchQuery, then filters the products based on a case-insensitive comparison by converting both the product names and the search query to uppercase.
-The filter() method returns a new array with products that match the search query.



</details>
 
---- 
###### ` Question 8:File Extension validation`

 Write a program in js where you have given a array validExtensions .Which contain the all valid extension.Write a function validateFileExtension to check the valid file type.

`Example:`

```javascript

// Function to validate the file extension
function validateFileExtension(fileName) {
  //code here
}

// Test the function
validateFileExtension("profile-picture.jpg");   
// Valid file type. You can upload the file.
validateFileExtension("document.pdf");         
// Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.







  
```

`Topics Covered:`
String, endWith method
 
**Hints:**
- [endWith()](https://www.programiz.com/javascript/examples/string-start-end#:~:text=The%20startsWith()%20method%20checks,ends%20with%20the%20particular%20string.)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function validateFileExtension(fileName) {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const isValid = validExtensions.some(extension => fileName.toLowerCase().endsWith(extension));
  console.log(isValid ? "Valid file type. You can upload the file." : "Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.");
}

// Test the function
validateFileExtension("profile-picture.jpg");   
validateFileExtension("document.pdf");






```

**Explanation:**


-The function checks if the file name ends with any valid image extension (case-insensitive) by using .endsWith() and .some().
-If valid, it prints a success message; otherwise, it shows an error message for unsupported file types.
</details>
 
---- 
###### ` Question 9:Case-Insensitive Search`

 Write a program in js where you have given a array products .Which contain the all  products in case-insenstive form and another is searchQuery.Write a  logic to check is searQuery present in the production array..

`Example:`

```javascript

function searchProducts(products, searchQuery) {
  //code here
}

// Example usage
let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let searchQuery = "apple";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]







  
```

`Topics Covered:`
String, toUpperCase method, filter() method
 
**Hints:**
- [toUpperCase(), filter()](https://www.w3schools.com/jsref/jsref_touppercase.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function searchProducts(products, searchQuery) {
  return products.filter(product => product.toUpperCase() === searchQuery.toUpperCase());
}

// Example usage
let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let searchQuery = "apple";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]






```

**Explanation:**


-The searchProducts function takes a list of products and a searchQuery, then filters the products based on a case-insensitive comparison by converting both the product names and the search query to uppercase.
-The filter() method returns a new array with products that match the search query.
</details>
 
---- 
