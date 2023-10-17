'use strict';

const kone1x = +prompt('syötä kohde 1 x- koordinaati');
const kone1y = +prompt('syötä kohde 1 y- koordinaati');
const kone2x = +prompt('syötä kohde 2 x- koordinaati');
const kone2y = +prompt('syötä kohde 2 y- koordinaati');

const distance = Math.sqrt(
  Math.pow(kone2x - kone1x, 2) + Math.pow(kone2y - kone1y, 2)
);

const vastaus = `etäisyys pisteiden välillä on ${distance} `;

document.getElementById('target').innerHTML = vastaus;
