'use strict';

const number = +prompt('insert number greater than 0');
let result = '';
if (number <= 0) {
  result = 'enter a valid number';
} else {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  result = `Sum of natural numbers up to  ${number} is: ${sum}`;
}

document.getElementById('target').innerHTML = result;
