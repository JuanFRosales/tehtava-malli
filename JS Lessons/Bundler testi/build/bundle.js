'use strict';

const greeting = (name) => {
    return (`Hello ${name}!`);
};

const h1Element = document.getElementById('greeting');
if (h1Element) {
    h1Element.textContent = greeting('Juan');
}
