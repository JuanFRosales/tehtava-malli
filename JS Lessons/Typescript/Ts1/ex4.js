"use strict";

// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    var brand = prompt('Enter brand name');
    var model = prompt('Enter nodel name');
    // TODO: return object containing brand and model
    return { type: 'electronic', brand: brand, model: model };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    var title = prompt('Enter book title: ');
    var author = prompt('Enter book author');
    // TODO: return object containing title and author
    return { type: 'book', title: title, author: author };
}
// Create instances of 'Product'
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log("Product Type: ".concat(product.type));
    if (product.type === 'electronic') {
        console.log("Brand: ".concat(product.brand));
        console.log("Model: ".concat(product.model));
    }
    else {
        console.log("Title: ".concat(product.title));
        console.log("Author: ".concat(product.author));
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
