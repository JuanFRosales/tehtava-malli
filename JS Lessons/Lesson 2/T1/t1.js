'use strict';

const fruits = ["apple", "banana", "orange", "grape", "kiwi"]

for (let fruit of fruits) {
    console.log(`Fruits: ${[fruits]}`);
  }
console.log(`Length of Fruits:${fruits.length}`)
console.log(`Element at Index 2: ${fruits[2]}`)
console.log(`Last Element of Fruits: ${fruits[fruits.length-1]}`);

const vegetables = [];

const numberOfVegetables = 3; 

for (let i = 0; i < numberOfVegetables; i++) {
  const vegetable = prompt("Enter a vegetable:");
  vegetables.push(vegetable);
}

console.log(`Vegetables:${vegetables}`);
console.log(`Length of vegetables:${vegetables.length}`)