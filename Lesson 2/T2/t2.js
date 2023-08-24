'use strict';

const numbers = [];

const ammountOfNumbers = 5;
for (let i = 0; i < ammountOfNumbers; i++) {
  const number = +prompt('Enter a number:');
  numbers.push(number);
}
const response = `Numbers:${[numbers]}`;

document.getElementById('target').innerHTML = response;

const checkNumber = +prompt('enter number to check on the list');
let answer;
if (numbers.includes(checkNumber)) {
  answer = `number: ${checkNumber} is on the list`;
} else {
  answer = `number: ${checkNumber} is on not the list`;
}
document.getElementById('result').innerHTML = answer;

numbers.pop();
const updateResponse = `Updated Numbers: [${numbers}]`;
document.getElementById('update').innerHTML = updateResponse;

numbers.sort((a, b) => a - b);
const sortNumbers = `sorted Numbers: [${numbers}]`;
document.getElementById('sorted').innerHTML = sortNumbers;
