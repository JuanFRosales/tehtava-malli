'use strict';


const targetElement = document.getElementById('target');


// Get browser version 
const userAgent = window.navigator.userAgent;
c
// Get screen information
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

//Date and time
const currentDate = new Date();
const options ={
  year: 'numeric',
  month: 'long',
  day : 'numeric',
};

//Place each item within its own <p>, browser info done previously
createParagraph(`${userAgent}`)
createParagraph(`Screen Information: Width:${(window.screen.width)}, Height:${(window.screen.height) }`);
createParagraph(`Available width for Browser: ${widthDifference}`);
createParagraph(`Available height for Browser: ${heightDifference}`);
createParagraph(`Date: ${currentDate.toLocaleDateString('fi-FI', options)}`)


//Placing it to HTML
function createParagraph(content) {
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  targetElement.appendChild(paragraph);
}
