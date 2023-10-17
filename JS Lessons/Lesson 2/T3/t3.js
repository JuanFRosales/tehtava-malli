'use strict';

const numbers = [];
let numberList = prompt("Enter a number (or 'done' to finish):");

while (numberList !== 'done') {
  numbers.push(Number(numberList));
  numberList = prompt("Enter a number (or 'done' to finish):");
}

let result = '';
for (const number of numbers) {
  console.log(number);
  if (number % 2 === 0) {
    console.log(`The ${number} is even`);
    result += `${number} is even, `;
  } else {
    console.log(`The ${number} is odd`);
  }
}

document.getElementById('target').innerHTML = result;

const endMessage = document.getElementById('end-message');
endMessage.textContent = 'End of the program';
