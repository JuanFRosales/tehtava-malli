'use strict';

const asteetC = +prompt('syötä celsius asteet');

const asteetF = (asteetC * 9) / 5 + 32;
const asteetK = asteetC + 273.15;

const vastaus = `${asteetC} C on kelvineinä ${asteetK} ja farenheitina ${asteetF} `;

// tulostus
document.getElementById('kohde').innerHTML = vastaus;
