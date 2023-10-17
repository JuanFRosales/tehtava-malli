import {greeting} from './functions/greeting';

const h1Element = document.getElementById('greeting');
if (h1Element) {
  h1Element.textContent = greeting('Juan');
}
