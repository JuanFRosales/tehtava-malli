'use strict';


const targetElement = document.getElementById('target');


// Get browser version from user agent
const userAgent = window.navigator.userAgent;
const browserVersion = userAgent.match(/(Chrome|Firefox|Safari|Edge|IE|Opera|Trident(?=\/))\/?\s*([\d\.]+)/i);



if (browserVersion && browserVersion.length >= 3) {
  const browserName = browserVersion[1];
  const version = browserVersion[2];
  createParagraph(`Browser name: ${browserName}, version: ${version}`);
} else {
  createParagraph("Browser version information not found.");
}

// Get screen information
const screenInfo = {
  width: window.screen.width,
  height: window.screen.height,

};

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

//Get actual hours and minutes
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();

//Date format including hours and minutes
const date = new Date(2056, 1, 1, currentHours, currentMinutes, 16, 738);


//Place each item within its own <p>, browser info done previously
createParagraph(`Screen Information: Width:${(window.screen.width)}, Height:${(window.screen.height) }`);
createParagraph(`Available width for Browser: ${widthDifference}`);
createParagraph(`Available height for Browser: ${heightDifference}`);
createParagraph(`${date}`)


//Placing it to HTML
function createParagraph(content) {
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  targetElement.appendChild(paragraph);
}
