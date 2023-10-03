import { errorModal, restaurantModal, restaurantRow } from './components';
import { fetchData } from './functions';
import { apiUrl, positionOptions } from './variables';
import './main.css';
import { Restaurant } from './interfaces/Restaurant';
import { MenuData, WeeklyMenuData } from './interfaces/Menu';
import { initializeMap, addMarkerToMap } from './leafletMap';

const modal = document.querySelector('dialog');
if (!modal) {
  throw new Error('Modal not found');
}
modal.addEventListener('click', () => {
  modal.close();
});

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const createTable = (restaurants: Restaurant[], map: L.Map) => {
    const table = document.querySelector('table');
    if (!table) {
      throw new Error('Table not found');
    }
    table.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const tr = restaurantRow(restaurant);
      table.appendChild(tr);
      tr.addEventListener('click', async () => {
        try {
          // Remove all highlights
          const allHighs = document.querySelectorAll('.highlight');
          allHighs.forEach((high) => {
            high.classList.remove('highlight');
          });

          // Add highlight
          tr.classList.add('highlight');

          // Fetch both daily and weekly menus
          const dailyMenu = await fetchData<MenuData>(
            apiUrl + `/restaurants/daily/${restaurant._id}/fi`
          );
          const weeklyMenu = await fetchData<WeeklyMenuData>(
            apiUrl + `/restaurants/weekly/${restaurant._id}/fi`
          );

          modal.innerHTML = '';

          // Display daily menu by default
          const menuContent = document.createElement('div');
          if (dailyMenu && Array.isArray(dailyMenu.courses)) {
            dailyMenu.courses.forEach((course) => {
              const { name, diets, price } = course;
              menuContent.innerHTML += `
                <p>${name}</p>
                <p>Diet: ${diets ?? ' - '}</p>
                <p>Price: ${price ?? ' - '}</p>
                <hr />
              `;
            });
          } else {
            menuContent.innerHTML = 'Daily menu not available.';
          }
          modal.appendChild(menuContent);

          // Add buttons for switching between daily and weekly menus
          const menuTypeButtons = document.createElement('div');
          menuTypeButtons.innerHTML = `
            <button id="dailyMenu" class="active">Daily Menu</button>
            <button id="weeklyMenu">Weekly Menu</button>
            <button id="close">Close</button>
          `;
          menuTypeButtons.id = 'menubuttons';
          modal.appendChild(menuTypeButtons);

          const updateMenuContent = async (menuType: string) => {
            menuContent.innerHTML = '';

            try {
              if (menuType === 'daily') {
                if (dailyMenu && Array.isArray(dailyMenu.courses)) {
                  dailyMenu.courses.forEach((course) => {
                    const { name, diets, price } = course;
                    menuContent.innerHTML += `
                      <p>${name}</p>
                      <p>Diet: ${diets ?? ' - '}</p>
                      <p>Price: ${price ?? ' - '}</p>
                      <hr />
                    `;
                  });
                } else {
                  menuContent.innerHTML = 'Daily menu not available.';
                }
              } else if (menuType === 'weekly') {
                // Fetch the weekly menu data
                if (weeklyMenu && Array.isArray(weeklyMenu.days)) {
                  weeklyMenu.days.forEach((day) => {
                    const { date, courses } = day;
                    menuContent.innerHTML += `<h3>${date}</h3>`;

                    courses.forEach((course) => {
                      const { name, diets, price } = course;
                      menuContent.innerHTML += `
                        <p>${name}</p>
                        <p>Diet: ${diets ?? ' - '}</p>
                        <p>Price: ${price ?? ' - '}</p>
                        <hr />
                      `;
                    });
                  });

                } else {
                  menuContent.innerHTML = 'Weekly menu not available.';
                }
              }
            } catch (error) {
              menuContent.innerHTML = 'Error fetching menu data.';
              console.error(error);
            }

            const buttons = menuTypeButtons.querySelectorAll('button');
            buttons.forEach((button) => button.classList.remove('active'));
            const selectedButton = menuType === 'daily' ? document.getElementById('dailyMenu') : document.getElementById('weeklyMenu');
            if (selectedButton) {
              selectedButton.classList.add('active');
            }
          };

          // Event listener for menu type buttons
          menuTypeButtons.addEventListener('click', (event) => {
            const target = event.target as HTMLButtonElement;
            if (target.id === 'dailyMenu') {
              updateMenuContent('daily');
            } else if (target.id === 'weeklyMenu') {
              updateMenuContent('weekly');
            } else if (target.id === 'close') {
              modal.close(); 
            }
          });

          // Prevent modal from closing when clicking the menu buttons
          menuTypeButtons.addEventListener('click', (event) => {
            event.stopPropagation();
          });

          modal.showModal();

          // Add a marker for the selected restaurant to the map
          addMarkerToMap(map, restaurant);
        } catch (error) {
          modal.innerHTML = errorModal((error as Error).message);
          modal.showModal();
        }
      });
    });
    return calculateDistance;
  };





const error = (err: GeolocationPositionError) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = async (pos: GeolocationPosition) => {
  try {
    const crd = pos.coords;
    const restaurants = await fetchData<Restaurant[]>(apiUrl + '/restaurants');

    // Initialize the Leaflet map
    const map = initializeMap('map');

    restaurants.forEach((restaurant) => {
      // Add a marker for each restaurant on the map
      addMarkerToMap(map, restaurant);
    });

    createTable(restaurants, map);

    // Buttons for filtering by city
    const filterHelsinkiBtn = document.querySelector('#filterHelsinki');
    const filterEspooBtn = document.querySelector('#filterEspoo');
    const filterVantaaBtn = document.querySelector('#filterVantaa');
    const filterTampereBtn = document.querySelector('#filterTampere');
    const filterTurkuBtn = document.querySelector('#filterTurku');
    const filterOthersBtn = document.querySelector('#filterOthers');
    const resetBtn = document.querySelector('#reset');

    if (!filterHelsinkiBtn) {
      throw new Error('Button not found');
    }
    if (!filterEspooBtn) {
      throw new Error('Button not found');
    }
    if (!filterVantaaBtn) {
      throw new Error('Button not found');
    }
    if (!filterTampereBtn) {
      throw new Error('Button not found');
    }
    if (!filterTurkuBtn) {
      throw new Error('Button not found');
    }
    if (!filterOthersBtn) {
      throw new Error('Button not found');
    }
    if (!resetBtn) {
      throw new Error('Button not found');
    }

    // Filter restaurants based on city
    filterHelsinkiBtn.addEventListener('click', () => {
      const helsinkiRestaurants = restaurants.filter(
        (restaurant) => restaurant.city === 'Helsinki'
      );
      createTable(helsinkiRestaurants, map);
    });

    filterEspooBtn.addEventListener('click', () => {
      const espooRestaurants = restaurants.filter(
        (restaurant) => restaurant.city === 'Espoo'
      );
      createTable(espooRestaurants, map);
    });

    filterVantaaBtn.addEventListener('click', () => {
      const vantaaRestaurants = restaurants.filter(
        (restaurant) => restaurant.city === 'Vantaa'
      );
      createTable(vantaaRestaurants, map);
    });

    filterTampereBtn.addEventListener('click', () => {
      const tampereRestaurants = restaurants.filter(
        (restaurant) => restaurant.city === 'Tampere'
      );
      createTable(tampereRestaurants, map);
    });

    filterTurkuBtn.addEventListener('click', () => {
      const turkuRestaurants = restaurants.filter(
        (restaurant) => restaurant.city === 'Turku'
      );
      createTable(turkuRestaurants, map);
    });

    filterOthersBtn.addEventListener('click', () => {
      const otherCitiesRestaurants = restaurants.filter(
        (restaurant) =>
          !['Helsinki', 'Espoo', 'Vantaa', 'Turku', 'Tampere'].includes(
            restaurant.city
          )
      );
      createTable(otherCitiesRestaurants, map);
    });

    resetBtn.addEventListener('click', () => {
      createTable(restaurants, map);
    });
  } catch (error) {
    modal.innerHTML = errorModal((error as Error).message);
    modal.showModal();
  }
};

navigator.geolocation.getCurrentPosition(success, error, positionOptions);
