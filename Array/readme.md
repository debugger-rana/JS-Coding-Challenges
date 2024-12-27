# Array


` Question 1: Search Bar Suggestions`

 Write a function getSuggestions that takes an array of product names and a search query, then returns all product names starting with the search query.

`Example:`

```javascript

function getSuggestions(products, query) {
  
}

// Example Usage:
const products = ["Shirt", "Shoes", "Hat", "Jeans"];
const query = "Sh";
const suggestions = getSuggestions(products, query);

console.log(suggestions); // Output: ["Shirt", "Shoes"]


  
```

`Topics Covered:`
Array methods i.e filter(), startsWith(), toLowerCase()
 
**Hints:**
- [Array methods i.e filter()](https://www.w3schools.com/js/js_array_methods.asp), - [startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp), - [toLowerCase()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getSuggestions(products, query) {
  // Filter the products array to find names that start with the search query
  return products.filter(product => 
    product.toLowerCase().startsWith(query.toLowerCase())
  );
}

// Example Usage:
const products = ["Shirt", "Shoes", "Hat", "Jeans"];
const query = "Sh";
const suggestions = getSuggestions(products, query);

console.log(suggestions); // Output: ["Shirt", "Shoes"]

  
```

**Explanation:**


- The filter method checks each product in the array.
- The startsWith method checks if the product name (in lowercase) starts with the query (also in lowercase).
- The toLowerCase method ensures the comparison is case-insensitive.
  
</details>
 
---- 
` Question 2: Grouping Blog Posts by Categories`

 Write a function groupByCategory that takes an array of blog post objects and groups them by their categories.

`Example:`

```javascript

function groupByCategory(posts) {
  //Your code here
}

// Example Usage:
const posts = [
  { title: "Learn JS", category: "Programming" },
  { title: "CSS Tips", category: "Web Dev" },
  { title: "Master React", category: "Programming" },
  { title: "HTML Basics", category: "Web Dev" }
];

const result = groupByCategory(posts);
console.log(result);
// Output: 
// {
//   "Programming": ["Learn JS", "Master React"],
//   "Web Dev": ["CSS Tips", "HTML Basics"]
// }


  
```

`Topics Covered:`
 Array method Push(), forEach()
 
**Hints:**
- [Array methods i.e. push(),forEach()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function groupByCategory(posts) {
  // Create an empty object to store the grouped categories
  const grouped = {};
  // Loop through each blog post
  posts.forEach(post => {
    // Check if the category already exists in the grouped object
    if (!grouped[post.category]) {
      // If not, initialize it with an empty array
      grouped[post.category] = [];
    }
    // Add the post's title to the corresponding category
    grouped[post.category].push(post.title);
  });

  // Return the grouped object
  return grouped;
}

// Example Usage:
const posts = [
  { title: "Learn JS", category: "Programming" },
  { title: "CSS Tips", category: "Web Dev" },
  { title: "Master React", category: "Programming" },
  { title: "HTML Basics", category: "Web Dev" }
];

const result = groupByCategory(posts);
console.log(result);


  
```

**Explanation:**



- The function initializes an empty object grouped.
- It iterates over the posts array and checks if a category already exists in grouped.
- If the category does not exist, it initializes an empty array for that category.
- It then adds the post's title to the corresponding category array.
- Finally, it returns the grouped object.

  
</details>
 
---- 
` Question 3: Sorting Products`

 Write a function sortProducts that sorts an array of product objects either by name (alphabetically) or price (ascending or descending).

`Example:`

```javascript

function sortProducts(products, sortBy, order = "asc") {
  //Your code here 
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 1000 }
];

// Sort by name (ascending)
console.log(sortProducts(products, "name", "asc"));
// Output: [{name: "Hat", price: 300}, {name: "Jeans", price: 1000}, {name: "Shirt", price: 500}, {name: "Shoes", price: 800}]

// Sort by price (descending)
console.log(sortProducts(products, "price", "desc"));
// Output: [{name: "Jeans", price: 1000}, {name: "Shoes", price: 800}, {name: "Shirt", price: 500}, {name: "Hat", price: 300}]


  
```

`Topics Covered:`
Array methods i.e. sort(),toLowerCase()
 
**Hints:**
- [Array methods i.e. sort(),toLowerCase()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function sortProducts(products, sortBy, order = "asc") {
  // Use the sort method to sort the products array
  return products.sort((a, b) => {
    if (sortBy === "name") {
      // Compare names alphabetically
      if (a.name.toLowerCase() < b.name.toLowerCase()) return order === "asc" ? -1 : 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return order === "asc" ? 1 : -1;
      return 0;
    } else if (sortBy === "price") {
      // Compare prices numerically
      return order === "asc" ? a.price - b.price : b.price - a.price;
    }
  });
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 1000 }
];

// Sort by name (ascending)
console.log(sortProducts(products, "name", "asc"));
// Output: [{name: "Hat", price: 300}, {name: "Jeans", price: 1000}, {name: "Shirt", price: 500}, {name: "Shoes", price: 800}]

// Sort by price (descending)
console.log(sortProducts(products, "price", "desc"));
// Output: [{name: "Jeans", price: 1000}, {name: "Shoes", price: 800}, {name: "Shirt", price: 500}, {name: "Hat", price: 300}]


  
```

**Explanation:**



- The function uses the sort method to order the products array.
- It compares based on the name (alphabetically) or price (numerically).
- The order parameter determines whether the sorting is ascending (asc) or descending (desc).

  
</details>
 
---- 
` Question 4: Shopping Cart Total`

 Write a function calculateCartTotal that takes an array of cart items and returns the total price.

`Example:`

```javascript

function calculateCartTotal(cart) {
 //Your code here
}

// Example Usage:
const cart = [
  { name: "Book", price: 300, quantity: 2 },
  { name: "Pen", price: 50, quantity: 3 },
  { name: "Notebook", price: 200, quantity: 1 }
];

const total = calculateCartTotal(cart);

console.log(total); // Output: 950

  
```

`Topics Covered:`
Array methods i.e. reduce
 
**Hints:**
- [Array methods i.e. reduce](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function calculateCartTotal(cart) {
  // Use reduce to calculate the total price
  return cart.reduce((total, item) => {
    // For each item, add its total price (price * quantity) to the total
    return total + item.price * item.quantity;
  }, 0); // Start with an initial total of 0
}

// Example Usage:
const cart = [
  { name: "Book", price: 300, quantity: 2 },
  { name: "Pen", price: 50, quantity: 3 },
  { name: "Notebook", price: 200, quantity: 1 }
];

const total = calculateCartTotal(cart);

console.log(total); // Output: 950

  
```

**Explanation:**



- The reduce method accumulates the total price by multiplying each item's price by its quantity and adding it to the total.
- The initial total is set to 0.

  
</details>
 
---- 
` Question 5: Tag Frequency`

 Write a function countTags that takes an array of tags and counts how many times each tag appears.

`Example:`

```javascript

function countTags(tags) {
 //Your code
}

// Example Usage:
const tags = ["css", "html", "css", "js", "html", "js", "js"];

const result = countTags(tags);

console.log(result);
// Output: { css: 2, html: 2, js: 3 }

  
```

`Topics Covered:`
Array methods i.e. reduce
 
**Hints:**
- [Array methods i.e. forEach()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function countTags(tags) {
  // Create an empty object to store tag counts
  const tagCounts = {};

  // Loop through each tag in the array
  tags.forEach(tag => {
    // If the tag already exists in the object, increment its count
    if (tagCounts[tag]) {
      tagCounts[tag]++;
    } else {
      // If the tag does not exist, initialize it with a count of 1
      tagCounts[tag] = 1;
    }
  });

  // Return the object with tag counts
  return tagCounts;
}

// Example Usage:
const tags = ["css", "html", "css", "js", "html", "js", "js"];

const result = countTags(tags);

console.log(result);
// Output: { css: 2, html: 2, js: 3 }

  
```

**Explanation:**



### countTags Function Explanation

-The countTags function counts the occurrences of each tag in an array:

### Input
-An array of tags (e.g., ["css", "html", "css", "js", "html", "js", "js"]).

### Logic
- It loops through each tag in the array.
- If the tag is already in the tagCounts object, it increments its count.
- If not, it initializes the count to 1.

### Output
-An object showing each tag and its count (e.g., { css: 2, html: 2, js: 3 }).

  
</details>
 
---- 
` Question 6: Finding Common Wishlist Items`

 Write a function getCommonItems that takes two arrays of wishlist items and returns the common items.

`Example:`

```javascript

function getCommonItems(wishlist1, wishlist2) {
  //Your code here
}

// Example Usage:
const wishlist1 = ["Shirt", "Shoes", "Hat"];
const wishlist2 = ["Shoes", "Hat", "Watch"];

const commonItems = getCommonItems(wishlist1, wishlist2);

console.log(commonItems);
// Output: ["Shoes", "Hat"]


  
```

`Topics Covered:`
Array methods i.e. filter(), includes()
 
**Hints:**
- [Array methods i.e. includes()](https://www.w3schools.com/js/js_array_methods.asp),  [Array methods i.e. filter()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function getCommonItems(wishlist1, wishlist2) {
  // Use the filter method to find common items
  return wishlist1.filter(item => wishlist2.includes(item));
}

// Example Usage:
const wishlist1 = ["Shirt", "Shoes", "Hat"];
const wishlist2 = ["Shoes", "Hat", "Watch"];

const commonItems = getCommonItems(wishlist1, wishlist2);

console.log(commonItems);
// Output: ["Shoes", "Hat"]


  
```

**Explanation:**



- The filter method iterates over wishlist1 and checks if each item exists in wishlist2 using the includes method.
- It returns a new array containing only the common items.

  
</details>
 
---- 
` Question 7: Removing Duplicate Emails`

 Write a function removeDuplicates that takes an array of emails and removes duplicate values.

`Example:`

```javascript

function removeDuplicates(emails) {
  //Your code here
}

// Example Usage:
const emails = [
  "user1@mail.com",
  "user1@mail.com",
  "user2@mail.com",
  "user3@mail.com",
  "user2@mail.com"
];

const uniqueEmails = removeDuplicates(emails);

console.log(uniqueEmails);
// Output: ["user1@mail.com", "user2@mail.com", "user3@mail.com"]

  
```

`Topics Covered:`
Array, Set
 
**Hints:**
- [Array](https://www.w3schools.com/js/js_arrays.asp),  [Set](https://www.w3schools.com/js/js_sets.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function removeDuplicates(emails) {
  // Use a Set to remove duplicates, then convert back to an array
  return Array.from(new Set(emails));
}

// Example Usage:
const emails = [
  "user1@mail.com",
  "user1@mail.com",
  "user2@mail.com",
  "user3@mail.com",
  "user2@mail.com"
];

const uniqueEmails = removeDuplicates(emails);

console.log(uniqueEmails);
// Output: ["user1@mail.com", "user2@mail.com", "user3@mail.com"]


  
```

**Explanation:**



- A Set automatically removes duplicate values because it only stores unique elements.
- The Array.from method converts the Set back into an array containing only unique emails.

  
</details>
 
---- 
` Question 8: Highlighting Most Searched Products`

 Write a function mostSearched that takes an array of search terms and returns the most frequently searched product.

`Example:`

```javascript

function mostSearched(searches) {
//Your code here
}

// Example Usage:
const searches = ["Phone", "Laptop", "Phone", "Phone", "Tablet", "Laptop"];

const result = mostSearched(searches);

console.log(result); // Output: "Phone"


  
```

`Topics Covered:`
Array methods i.e. forEach()
 
**Hints:**
- [Array](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function mostSearched(searches) {
  // Create an object to count the frequency of each product
  const productCounts = {};

  // Loop through each search term and count its occurrences
  searches.forEach(product => {
    productCounts[product] = (productCounts[product] || 0) + 1;
  });

  // Find the product with the highest count
  let mostSearchedProduct = '';
  let maxCount = 0;
  
  for (const product in productCounts) {
    if (productCounts[product] > maxCount) {
      mostSearchedProduct = product;
      maxCount = productCounts[product];
    }
  }

  return mostSearchedProduct;
}

// Example Usage:
const searches = ["Phone", "Laptop", "Phone", "Phone", "Tablet", "Laptop"];

const result = mostSearched(searches);

console.log(result); // Output: "Phone"

  
```

**Explanation:**



- The function creates an object productCounts to track the frequency of each product.
- It iterates over the searches array, incrementing the count for each product.
- The product with the highest count is determined by comparing frequencies in a loop.
- The product with the maximum count is returned as the result.

  
</details>
 
---- 
` Question 9: Chunking User Data`

 Write a function chunkData that takes an array of user data and splits it into smaller chunks.

`Example:`

```javascript

function chunkData(data, chunkSize) {
  //Your code here
}

// Example Usage:
const data = ["User1", "User2", "User3", "User4", "User5"];
const chunkSize = 2;

const chunkedData = chunkData(data, chunkSize);

console.log(chunkedData);
// Output: [["User1", "User2"], ["User3", "User4"], ["User5"]]

  
```

`Topics Covered:`
Array methods i.e. push(), slice())
 
**Hints:**
- [Array methods i.e. push(), slice()](https://www.w3schools.com/js/js_array_methods.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function chunkData(data, chunkSize) {
  const result = [];

  // Loop through the data array and slice it into chunks
  for (let i = 0; i < data.length; i += chunkSize) {
    result.push(data.slice(i, i + chunkSize));
  }

  return result;
}

// Example Usage:
const data = ["User1", "User2", "User3", "User4", "User5"];
const chunkSize = 2;

const chunkedData = chunkData(data, chunkSize);

console.log(chunkedData);
// Output: [["User1", "User2"], ["User3", "User4"], ["User5"]]


  
```

**Explanation:**



- The function iterates through the data array in steps of chunkSize.
- It slices the array into chunks of the specified size and adds each chunk to the result array.
- The final result is an array of chunks.

  
</details>
 
---- 
` Question 10: Filtering Products by Price`

  Write a function filterByPrice that filters an array of products within a given price range.

`Example:`

```javascript

function filterByPrice(products, minPrice, maxPrice) {
  //Your code here
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 600 }
];

const minPrice = 300;
const maxPrice = 600;
const filteredProducts = filterByPrice(products, minPrice, maxPrice);
console.log(filteredProducts);
// Output: [ { name: 'Shirt', price: 500 }, { name: 'Hat', price: 300 }, { name: 'Jeans', price: 600 } ]

  
```

`Topics Covered:`
Array methods i.e. filter()
 
**Hints:**
- [ Array methods i.e. filter()](https://www.w3schools.com/js/js_array_iteration.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function filterByPrice(products, minPrice, maxPrice) {
  // Use the filter method to return products within the price range
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 600 }
];

const minPrice = 300;
const maxPrice = 600;

const filteredProducts = filterByPrice(products, minPrice, maxPrice);

console.log(filteredProducts);
// Output: [ { name: 'Shirt', price: 500 }, { name: 'Hat', price: 300 }, { name: 'Jeans', price: 600 } ]

  
```

**Explanation:**



- The function uses the filter method to return products whose price falls within the specified minPrice and maxPrice.
  
</details>
 
---- 
