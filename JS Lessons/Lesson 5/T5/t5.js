'use strict';

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Error in request: ' + response.status);
  }
  return await response.json();
}

async function fetchDailyMenu(restaurantId, lang, id) {
  const url = `https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants/daily/${restaurantId}/${lang}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const menuData = await fetchData(url, options);

    const menu = menuData.courses.map(function (course) {
      return {
        name: course.name,
        price: course.price,
        diets: course.diets,
      };
    });

    return {
      id: id,
      menu: menu,
    };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

async function fetchAndRenderRestaurants() {
  try {
    const url =
      'https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const restaurantData = await fetchData(url, options);

    const restaurants = restaurantData.map(function (restaurant) {
      return {
        name: restaurant.name,
        id: restaurant._id,
        companyId: restaurant.companyId,
        address: `${restaurant.address}, ${restaurant.postalCode}, ${restaurant.city}`,
        phone: restaurant.phone,
        company: restaurant.company,
        location: {
          type: 'Point',
          coordinates: `${restaurant.location.coordinates[0]},${restaurant.location.coordinates[1]}`,
        },
      };
    });

    renderRestaurants(restaurants);
  } catch (error) {
    console.error(error.message);
  }
}

function openModal(restaurant) {
  const dialog = document.querySelector('dialog');
  const modalContent = document.createElement('div');

  const modalHtml = `
    <button class="close-button">&#10060</button>
    <h2>${restaurant.name}</h2>
    <p><strong>Address:</strong> ${restaurant.address}</p>
    <p><strong>Phone:</strong> ${restaurant.phone}</p>
    <p><strong>Company:</strong> ${restaurant.company}</p>
    <button class="menu-button">View Menu</button>
    <div class="menu-content"></div>
  `;

  modalContent.innerHTML = modalHtml;

  dialog.innerHTML = '';
  dialog.appendChild(modalContent);

  const closeButton = modalContent.querySelector('.close-button');
  closeButton.addEventListener('click', function () {
    dialog.close();
  });

  const menuButton = modalContent.querySelector('.menu-button');
  const menuContent = modalContent.querySelector('.menu-content');

  menuButton.addEventListener('click', function () {
    fetchDailyMenu(restaurant.id, 'en', restaurant.companyId)
      .then(function (menuData) {
        const menuItems = menuData.menu.map(function (item) {
          return `<p><strong>${item.name}</strong> - Price: ${item.price}, Diets: ${item.diets}</p>`;
        });
        menuContent.innerHTML = `
          <h3>Today's Menu:</h3>
          ${menuItems.join('')}
        `;
      })
      .catch(function (error) {
        console.error(error.message);
        menuContent.innerHTML = '<p>Failed to load menu</p>';
      });
  });

  dialog.showModal();
}

function renderRestaurants(restaurants) {
  const table = document.querySelector('table');
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const tr = document.createElement('tr');
    const nameCell = document.createElement('th');
    const addressCell = document.createElement('th');

    nameCell.innerText = restaurant.name;
    addressCell.innerText = `${restaurant.address}`;
    tr.appendChild(nameCell);
    tr.appendChild(addressCell);

    tr.addEventListener('click', function () {
      const nameCells = document.querySelectorAll('table th:first-child');
      nameCells.forEach(function (cell) {
        cell.classList.remove('highlight');
      });
      nameCell.classList.add('highlight');
      openModal(restaurant);
    });

    table.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderRestaurants);
