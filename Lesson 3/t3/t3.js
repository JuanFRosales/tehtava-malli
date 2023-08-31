'use strict';

const targetElement = document.getElementById('target');

const userAgent = window.navigator.userAgent;

const fullScreenWidth = screen.width;
const fullScreenHeight = screen.height;

//calculate space taken by browser
const windowInfo = {
  outerWidth: window.outerWidth,
  outerHeight: window.outerHeight
};

// Calculate the difference between browser and screen
const widthDifference = fullScreenWidth - windowInfo.outerWidth;
const heightDifference = fullScreenHeight - windowInfo.outerHeight;

const currentDate = new Date();
const options ={
  year: 'numeric',
  month: 'long',
  day : 'numeric',
};

createParagraph(`${userAgent}`)
createParagraph(`Screen Information: Width:${(window.screen.width)}, Height:${(window.screen.height) }`);
createParagraph(`Available width for Browser: ${widthDifference}`);
createParagraph(`Available height for Browser: ${heightDifference}`);
createParagraph(`Date: ${currentDate.toLocaleDateString('fi-FI', options)}`)

function createParagraph(content) {
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  targetElement.appendChild(paragraph);
}
