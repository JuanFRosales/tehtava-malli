'use strict';
// Create an empty array named 'cart' to store the items
const cart = [];
// Implement a loop to prompt the user for item details
while (true) {
  // Prompt user for item name
  const itemName = prompt('Enter item name or press Enter to finish');
  // Break the loop if an empty item name is entered
  if (itemName === '') {
    break;
  }
  const itemPrice = prompt(`enter price of ${itemName}`);
  const itemQuantity = prompt(`enter quantity of ${itemName}`);
  // Create an item object and add it to the 'cart' array
  const newItem = {name: itemName, price: itemPrice, quantity: itemQuantity};
  cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart
  .map((item) => item.price * item.quantity)
  .reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
