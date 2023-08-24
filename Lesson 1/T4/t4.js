'use strict';

const grade = +prompt('insert your score');
let score = '';
if (grade >= 0 && grade <= 39) {
  score = 'Your grade is 0';
} else if (grade >= 40 && grade <= 51) {
  score = 'Your grade is 1';
} else if (grade >= 52 && grade <= 63) {
  score = 'Your grade is 2';
} else if (grade >= 64 && grade <= 75) {
  score = 'Your grade is 3';
} else if (grade >= 76 && grade <= 87) {
  score = 'Your grade is 4';
} else if (grade >= 76 && grade <= 100) {
  score = 'Your grade is 5';
}

document.getElementById('target').innerHTML = score;
