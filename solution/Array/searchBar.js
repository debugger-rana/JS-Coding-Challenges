 //Question 1: Search Bar Suggestions
// Write a function getSuggestions that takes an array of product names and a search query, 
// then returns all product names starting with the search query.
function getSuggestions(products,query){
    return products.filter(product=>
        product.toLowerCase().startsWith(query.toLowerCase())
    );
}

const products = ["Shirt", "Shoes", "Hat", "Jeans"];
const query = "Sh";
const suggestions = getSuggestions(products, query);

console.log(suggestions); // Output: ["Shirt", "Shoes"]

