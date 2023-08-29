'use strict';

const sivuA = +prompt('anna sivu 1');
const sivuB = +prompt('anna sivu 2');
const sivuC = +prompt('anna sivu 3');
let vastaus = '';
if (sivuA === sivuB && sivuB === sivuC) {
  // kaikki sivut = -> tasasivuinen
  vastaus = 'tasasivuinen kolmio';
  // 2 sivua = -> tasakylkinen
} else if (sivuA === sivuB || sivuB === sivuC || sivuC === sivuA) {
  vastaus = 'tasakylkinen kolmio';
} else {
  // muuten epäsäännöllinen
  vastaus = 'epäsäännollinen kolmio';
}

document.getElementById('target').innerHTML = vastaus;
