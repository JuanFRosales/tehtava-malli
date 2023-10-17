import {fetchData} from './functions.js';
import {restaurantModal, restaurantRow} from './components.js';
import {apiUrl} from './variables.js';

const modal = document.querySelector('dialog');
modal.addEventListener('click', () => {
  modal.close();
});

const calculateDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const error = err => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = async pos => {
  try {
    const crd = pos.coords;
    const restaurants = await fetchData(apiUrl + '/restaurants');
    console.log(restaurants);
    restaurants.sort((a, b) => {
      const x1 = crd.latitude;
      const y1 = crd.longitude;
      const x2a = a.location.coordinates[1];
      const y2a = a.location.coordinates[0];
      const distanceA = calculateDistance(x1, y1, x2a, y2a);
      const x2b = b.location.coordinates[1];
      const y2b = b.location.coordinates[0];
      const distanceB = calculateDistance(x1, y1, x2b, y2b);
      return distanceA - distanceB;

    });

    restaurants.forEach((restaurant) => {
  try {
    const tr = restaurantRow(restaurant);
    document.querySelector('table').appendChild(tr);

    tr.addEventListener('click', async () => {
      try {
        // Remove all highlights
        const allHighs = document.querySelectorAll('.highlight');
        allHighs.forEach((high)=> {
          high.classList.remove('highlight');
        });

        // Add highlight to the clicked row
        tr.classList.add('highlight');

        // Clear modal content
        modal.innerHTML = '';

        // Fetch menu
        const menu = await fetchData(
          apiUrl + `/restaurants/daily/${restaurant._id}/fi`
        );

        console.log(menu);

        const menuHtml = restaurantModal(restaurant, menu);
        modal.insertAdjacentHTML('beforeend', menuHtml);

        modal.showModal();
      } catch (error) {
        alert(error.message);
      }
    });
  } catch (error) {
    alert(error.message);
  }
});

navigator.geolocation.getCurrentPosition(success, error, positionOptions);
