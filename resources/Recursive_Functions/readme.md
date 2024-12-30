# Recursive Functions
` Question 1. Render Navigation menu`

   Write a JavaScript function that shows the menu structure which contain title and url.The menu should display:Top-level items like "Home," "About," "Contact," etc.Nested submenus under categories like "Services," where each category can have its own submenus (e.g., "Web Development," "App Development").

`Example:`

```javascript

// Function to generate the menu
function generateMenu(menu) {
  
  // Your code here

  
}

// menu array
const menu = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services", submenu: [
      { title: "Web Development", url: "/services/web-development" },
      { title: "App Development", url: "/services/app-development", submenu: [
        { title: "iOS", url: "/services/app-development/ios" },
        { title: "Android", url: "/services/app-development/android" }
      ]}
    ]
  },
  { title: "Contact", url: "/contact" }
];

// Generate the menu
generateMenu(menu);


```

`Topics Covered:`
Recursive function
 
**Hints:**
- [Recursion](https://www.programiz.com/javascript/recursion)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to generate the menu
function generateMenu(menu) {
  menu.forEach(function(item) {
    console.log('Title: ' + item.title + ', URL: ' + item.url);
    if (item.submenu) {
      generateMenu(item.submenu);  // Recursive call for submenu items
    }
  });
}

// Shortened menu array
const menu = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services", submenu: [
      { title: "Web Development", url: "/services/web-development" },
      { title: "App Development", url: "/services/app-development", submenu: [
        { title: "iOS", url: "/services/app-development/ios" },
        { title: "Android", url: "/services/app-development/android" }
      ]}
    ]
  },
  { title: "Contact", url: "/contact" }
];

// Generate the menu
generateMenu(menu);


 
```

**Explanation:**


- Loops through the menu array and logs the title and url of each item. If an item has a submenu, it recursively calls generateMenu to handle the submenu items.
- The function continues to recursively process any submenus in the menu array.
  
</details>
 
---- 
` Question 2. Parsing Nested Comments`

   Write a program in javascript where create and array of comments  where each comments have id, text and reply and reply recursively contains many reply.

`Example:`

```javascript

// Function to display comments and their nested replies
function displayComments(comments) {
  
    // Your code here

}

// Simplified comments array
const comments = [
  { id: 1, text: "First comment", replies: [
      { id: 2, text: "Reply to first", replies: [
          { id: 4, text: "Nested reply" }
        ]}
    ]},
  { id: 3, text: "Another comment" }
];

// Call the function
displayComments(comments);

```

`Topics Covered:`
Recursive function
 
**Hints:**
- [Recursion](https://www.programiz.com/javascript/recursion)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to display comments and their nested replies
function displayComments(comments) {
  comments.forEach(function(comment) {
    console.log('ID: ' + comment.id + ', Text: ' + comment.text);
    if (comment.replies) {
      displayComments(comment.replies); // Recursive call for replies
    }
  });
}

// Simplified comments array
const comments = [
  { id: 1, text: "First comment", replies: [
      { id: 2, text: "Reply to first", replies: [
          { id: 4, text: "Nested reply" }
        ]}
    ]},
  { id: 3, text: "Another comment" }
];

// Call the function
displayComments(comments);
 
```

**Explanation:**


- Simplified Comments Array: Shortened the text values to make the array concise.
- Reduced Function Verbosity: Removed unnecessary comments and repetitive formatting logic.
  
</details>
 
---- 
` Question 3. Array Traversal`

   Write a program in javascript where create a array category with attribute name and subcategory and subcategory further contain name.The printCategories function traverses each node in the tree-like structure. If a category has subcategories, it calls itself recursively to process those subcategories.

`Example:`

```javascript

const categories = [
  { name: "Electronics", subcategories: [
      { name: "Mobile Phones", subcategories: [
          { name: "Smartphones" }, { name: "Feature Phones" }
        ]},
      { name: "Laptops" }
    ]},
  { name: "Clothing", subcategories: [
      { name: "Men's" }, { name: "Women's" }
    ]}
];

function printCategories(categories) {

  //  Your code here

}

printCategories(categories);

```

`Topics Covered:`
Recursive function
 
**Hints:**
- [Recursion](https://www.programiz.com/javascript/recursion)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

const categories = [
  { name: "Electronics", subcategories: [
      { name: "Mobile Phones", subcategories: [
          { name: "Smartphones" }, { name: "Feature Phones" }
        ]},
      { name: "Laptops" }
    ]},
  { name: "Clothing", subcategories: [
      { name: "Men's" }, { name: "Women's" }
    ]}
];

function printCategories(categories) {
  categories.forEach(category => {
    console.log(category.name);
    if (category.subcategories) printCategories(category.subcategories);
  });
}

printCategories(categories);
 
```

**Explanation:**


- The function recursively prints all categories and subcategories without any excess details.
- Each category is an object with a name and an optional subcategories array containing more categories.
- Recursive Function: For each category, the function: Prints the category's name. If the category has subcategories, the function is called recursively to print those as well.
  
</details>
 
---- 
` Question 4. Generating Combinations`

   Write a program in javascript where create the function generateSubsets recursively generates all subsets of the input array.It first handles the base case where the array is empty by returning an empty.Then it splits the problem by considering subsets both with and without the first element of the array.

`Example:`

```javascript

// Recursive function to generate all subsets of an array
function generateSubsets(arr) {
    
  // Your code here

}

// Example usage
const subsets = generateSubsets([1, 2, 3]);
console.log(subsets);  
// Output: [ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]

```

`Topics Covered:`
Recursive function
 
**Hints:**
- [Recursion](https://www.programiz.com/javascript/recursion)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Recursive function to generate all subsets of an array
function generateSubsets(arr) {
    if (arr.length === 0) {
        return [[]];  
// Base case: return empty subset when array is empty
    }

    const firstElement = arr[0];
    const remainingElements = arr.slice(1);

  // Get all subsets of the remaining array
    const subsetsWithoutFirst = generateSubsets(remainingElements);

  // Add the first element to each of the subsets
    const subsetsWithFirst = subsetsWithoutFirst.map(subset => [firstElement, ...subset]);

  // Return the combined subsets: with and without the first element
    return [...subsetsWithoutFirst, ...subsetsWithFirst];
}

// Example usage
const subsets = generateSubsets([1, 2, 3]);
console.log(subsets);  
// Output: [ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]
 
```

**Explanation:**


- The function recursively splits the array into subsets with and without the first element.
- It combines these subsets and returns all possible subsets of the array.

</details>
 
---- 
